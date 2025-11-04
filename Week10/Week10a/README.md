## React Context Router from Scratch

Before we jump to React again, let's talk about how a normal website loads and displays content vs a React project. When the browser loads a new HTML document, **all existing JS variables and code is dumped**. Not a huge deal for traditional html website. Not so great for React apps though.

Traditional sites make one requests a page instantly has the content it needs, each page has a new file with everything it might need.

React, always makes a request for index.html first, then another for bundle.js, and then possibly api endpoint calls for content. Takes a little more time to get content!

How routes work with React:

- bundle js looks at the current address and decides what content to show and applies a series of different routing rules to show different components based on which route the user
- react see a user clicks a link and intercepts the usual navigation event
- the address bar updates so the user thinks they are going to a page
- react renders a new page/component based on the route
- BUT THE JS ENVIRONMENT ISNT RESET
- so if the user clicks back, we already have the previous state for the old page and we instanty get content with no requests
- this only works correctly if STATE is NOT defined in the component (context breaks this rule, so does redux)

`create react app` makes sure we always load index.html, if we take a look at the networks panel and doc tab, we will see a request for public.html. change the route in localhost, we are always getting `index.html` file

How do we look at the address bar and how so we figure out what content to show? the domain name and port do not matter, the path however does. in our case its /buttons or /accordion

open your console console type `console.log(window.location)`, expand and see pathname. Looks like what we are looking for is `window.location.pathname`.

OK, so how do we trick the user by updating the address bar?
changing window.location causes a full page refresh! we do not want that! remember we dump all of our JS when this happens.

We need `window.history.pushState( {}, ‘’, ‘/button')`. Here, window will not do a full page refresh!

OK what about a user clicking a link or pressing the back or forward buttons?

1. clicking on a link:

- react component called Link({to})
- event.prevemntDefault() stops standard navigation
- handleClick to detect a click

2. back-forward buttons clicked:
   When a user clicks back or forward, a window emits a pop state event, but only if window.pushState was used for the previous navigation. but this doesn’t handle the total page refresh. the stack keeps track of the navigation called a stack

```jsx
window.history.pushstate({}, “”, /route1)
window.history.pushstate({}, “”, /route2)
```

back button will work here but not if a user manually types in a new url to the nav bar. This would result in a full refresh/reload.

We will need to add an event listener for a `popstate` event.

### Fast forward:

We need to create a context and provider component to keep track of our routes, to gain access to is we are going to useContext to gain access to it.

1. Make a Navigation Context Provider and Wrap our App in it in index.js

```jsx
import {createContext, useState} from 'react'

const NavigationContext = createContext()

function NavigationProvider({children}) {
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  )
}

export {NavigationProvider}
export default NavigationContext
```

Add state, with a default value, aka pick which page we want to load when a user types in our URL

```jsx
const [currentPath, setCurrentPath] = useState(window.location.pathname)
```

Now we need to listen for that `popstate` event to cause our component to re render using useEffect. This is all about a user clicking forward and back buttons, not when a user clicks a full page refresh.

- declare a handler function and then add an event listener for popstate
- add event listener for window.location.popstate, and call our handler
- add a cleanup function and return it so we can remove our event listener whenever the NavigationProvider is removed, this is unlikely but good practice!
- whenever the user navigates the handler will be called so we need to set the current path in state
- Why are we keeping track in State? To cause a re-render!

```jsx
useEffect(() => {
  // declare a handler function
  const handler = () => {
    // whenever the user changes navigation, update our currentPath in state
    setCurrentPath(window.location.pathname)
  }
  // add event listener for window.location.popstate, and call our handler
  window.addEventListener('popstate', handler)
  // whenever the NavigationProvider is about to be removed from the screen
  // remove the event listener (cleanup function). Note, useEffect can return a function!
  // That function will be called the next time useEffect is invoked
  return () => {
    window.removeEventListener('popstate', handler)
  }
}, [])
```

What is the point of all of this? To handle manual navigation by a user. (as opposed to programmatic navigation, like when your bank website automatically signs you out)

1- Call pushState to update the navigation url for the user
2- Update the currentPath in state because pushSate doesn’t trigger a popstate event. We need our state to update so we trigger a re-render. We can also share this route information with any component wrapped in our Provider.

We will also need a function we can share with our components to programmatically navigate.

```jsx
const navigate = (to) => {
  // navigate to a route (to) programatically,
  // this will update the browser  url for the user
  window.history.pushState({}, '', to)
  // update state so our page re-renders
  setCurrentPath(to)
}
```

We can make a few quick buttons to check our navigate function:

```jsx
<button onClick={()=> {navigate('/buttons)}}>Go To /buttons</button>
<button onClick={()=> {navigate(‘/accordion)}}>Go To /buttons</button>
```

Once we have tested our routes let’s go ahead and delete our test JSX elements inside our return functions.

Now all we need is a Link component that utilizes our new navigation for use in our App. If we would like to navigate to a different web page we can always use an A element. _note: this is exactly what the Link component in Gastby projects is doing!_

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/navigation'

export default function Link({to, children}) {
  // extract our navigate function from context
  const {navigate} = useContext(NavigationContext)
  const handleClick = (event) => {
    // prevent default behavior that would reload the page
    event.preventDefault()
    // use our navigate function extracted from our context
    navigate(to)
  }
  return <a onClick={handleClick}>{children}</a>
}
```

You might see a warning highlight inside of our JSX. It want's an href attribute for all links. Easy enough! Let's add `href={to}`.

```jsx
<a onClick={handleClick}>{children}</a>
```

Now let’s add out links to our App component!

```jsx
import Link from './components/Link'

export default function App() {
  return (
    <div className="flex">
      <Link to={'./buttons'}>Go To Buttons</Link>
      <Link to={'./accordion'}>Go to Accordion</Link>
    </div>
  )
}
```

Cool. our routs are updating in our browser, but we aren’t changing the content on the screen. We will do this with a commonly used pattern using a Route component. Our Route component props will be `path` and `children` (the content/page to show).

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/navigation'
export default function Route({path, children}) {
  const {currentPath} = useContext(NavigationContext)

  if (path === currentPath) {
    return {children}
  } else {
    return null
  }
}
```

Now in our app we must first import our Route component and the Pages from our `pages/` directory. We then add in 2 Route components, and wrap them around our page components.

```jsx
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'

export default function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/button">Go to buttons</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}
```

Great! Lets style up our links!

### Route Component

Cool. our routs are updating in our browser, but we aren’t changing the content on the screen. We will do this with a commonly used pattern using a Route component. Our Route component props will be `path` and `children` (the content/page to show).

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/navigation'
export default function Route({path, children}) {
  const {currentPath} = useContext(NavigationContext)

  if (path === currentPath) {
    return {children}
  } else {
    return null
  }
}
```

Now in our app we must first import our Route component and the Pages from our `pages/` directory. We then add in 2 Route components, and wrap them around our page components.

```jsx
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'

export default function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/button">Go to buttons</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}
```

Now let’s add some styling, and make a `Menu` component together.

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/navigation'

export default function Route({path, children}) {
  const {currentPath} = useContext(NavigationContext)

  if (path === currentPath) {
    return children
  }

  return null
}
```

### Fixemups: Custom Hook!

We have written the same lines of code a few times since we started adding programatic navigation and adding our `Link` and `Route` component to our project. We can create a custom hook to make our lives (and the lives of our fellow engineers on this project) easier.

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/'

...

const {currentPath} = useContext(NavigationContext)
```

Create a folder called `hooks/` inside our `src/` folder and add a file named `use-navigation.js`.

```jsx
import {useContext} from 'react'
import NavigationContext from '../context/navigation'

function useNavigation() {
  return useContext(NavigationContext)
}

export default useNavigation
```

Now we can import and call `useNagivation()` instead of the repeated lines of code above.

Change those imports and usage in:

- Link
- Route
