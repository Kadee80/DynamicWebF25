import {createContext, useState, useEffect} from 'react'

const NavigationContext = createContext()

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // keep track of back button by setting currentPath
  useEffect(() => {
    // add an event listener to place the current path in state
    const handler = () => {
      setCurrentPath(window.location.pathName)
    }
    // watch for user interactions with out routes
    // popState is called when the user hits the back button in the browser
    window.addEventListener('popState', handler)

    // we always return a cleanup function when we use useEffect to add an event listener
    return () => {
      window.removeEventListener('popState', handler)
    }
  }, [])

  // we also need a function to help us navigate around normally
  const navigate = (to) => {
    // this takes care of the browser navbar
    window.history.pushState({}, '', to)
    // we also need to update our currentPath in state so that our app rerenders and shows the new page
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  )
}

export {NavigationProvider}
export default NavigationContext
