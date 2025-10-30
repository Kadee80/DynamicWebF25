import {useState, useEffect, useRef} from 'react'

import {GoChevronDown} from 'react-icons/go'
import Panel from './Panel'

const Dropdown = (props) => {
  const {options, onChange, value} = props
  // local state
  const [isOpen, setIsOpen] = useState(false)

  const divEl = useRef()
  // scroll down to our returned JSX, we are assigning the outer div containing our dropdown
  // to the variable divEl:
  // <div className="w-48 relative" ref={divEl}>

  // useEffect depending on what you pass it
  // will fire once when the component first mounts []
  // every time the comonent re-renders no second argument
  // every time a var updates because we tell useEffect to watch it [someValueToWatch]

  // now we need to add an event listener to reference our useRef value
  // USE EFFECT HOOK
  // use effect takes 2 arguments
  // the first is the function you want to call
  // the second is an array of props, state, any js variables available to this component to watch

  // use effect fires when the component mounts (first time is renders on the screen aka initial render)
  // if anything is in the second array,
  // these are js vars aka state, variables, props
  // these are items we a watching. if one of those variables changes, use effect will fire the function from the first argument again

  // useEffect depending on what you pass it
  // will fire once when the component first mounts []
  // every time the comonent re-renders no second argument
  // every time a var updates because we tell useEffect to watch it [someValueToWatch]
  // OR
  // fire the first time the component mounts
  // this is really great for API calls or adding event listeners the old fashion way
  // const useEffect(() => {}, [])
  // fire on mount, and everytime the value uof myPeiceOfState changes
  // const useEffect(() => {}, [myPieceOfState])
  // if no second argument, it will fire every time the component re-renders
  // const useEffect(() => {})

  // fire once on mount to add event listener,
  // if the function in the first agrument returns another function
  // thats gets fired when the component is detroyed
  // this is a cleanup function

  /*
  in our case, we want to add an event listener that:
  listens for a click, and checks the event.target
  WHY?
  to close our dropdown when we click off our dropdown menu
  (we opened the dropdown menu, but we never made a selection, and we then click off the dropdown anywhere else on the page!)
  IMPORTANT STEP:
  make sure you watch our divEl ref in our useEffect!!!
  const useEffect(() => {}, [divEl])
  IF YOU DONT:
  the arrow function will only run ONCE ON MOUNT,
  things will seem to work MOST of the time, but once the component is destroyed, a few too many clicks and you'll get an error screen
  */
  useEffect(() => {
    // check the element assigned to const divEl (the most parent div in our dropdown)
    // if what we just clicked is outside of this component
    // close our dropdown!
    const handler = (event) => {
      // check that divEl.current exists before AND that it does not contain the event target
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false)
        console.log('clicked outside dropdown')
      }
    }

    // add the event listener, this is for clicks OUTSIDE our dropdown component
    // because of the conditional check above
    document.addEventListener('click', handler, true)

    // whenever we assign an event listener the old fashioned way : document.addEventListener
    // we do it using useEffect(()=>{}, []) -  empty array as second argument!
    // if we added an event listener without useEffect,
    // it will add an event listener EVERY time the component re-renders!

    // we have an event listener that affects our component,
    // return a cleanup function to remove the event listener,
    // if we dont, this event listener will hang around after
    // our dropdown is no longer on the page and cause issues :(

    // returned function inside useEffects first argument is fired whenever the component is destroyed
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [divEl])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // need some other function defined by the
    // parent component passed in as a prop to call here
    onChange(option)
  }

  const renderedOptions = options.map((opt, index) => {
    // this is where we assign an element on the page to our divEl var!
    // WHY? because we this components state (isOpen) to change when we click
    // OUTSIDE THIS COMPONENT
    return (
      <div
        onClick={() => handleOptionClick(opt)}
        key={index}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {opt.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {/* if value exists (aka not null or undefined) find the value key within{{value?.value} */
        /* great use of a ternary */}
        {value ? value.label : 'Select...'} <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

/* moved to own file!
const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
    'border rounded p-3 shadow bg-white w-full'
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

// named export
export {Panel}
*/

// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown
