import cx from 'classnames'
import PropTypes from 'prop-types'
// some of you may need to install and import twMerge so that your white text
// does not overwrite your outline button text styles
// to install, make sure you are in your project in terminal and enter:
// npm i tailwind-merge
// then import it like the next line below
import {twMerge} from 'tailwind-merge'
// we only need to import PropTypes here if we are using their PropType validation
// for example PropTypes.bool,
// import PropTypes from 'prop-types' // ES6

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...otherProps
  } = props

  // its very sad the PropTypes Library no longer supports the custom validation
  // we wrote in class, instead, we can put that same validation logic here and
  // spit our a console.warning message when we accidentaly use 2 variant booleans
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning) +
    Number(!!danger)

  if (count > 1) {
    console.warn(
      'You silly goose! Only one of primary, secondary, success, warning, danger can be TRUE!'
    )
    // if we throw a return in, we will exit this component function before we render anything, essentially skipping the invalid instance of Button used in another file (App)
  }

  const baseClass = 'flex items-center px-8 py-3 border'
  const classes = twMerge(
    cx(otherProps.className, baseClass, {
      // color variants, pick one
      'bg-blue-500 border-blue-500 text-white': primary,
      'bg-gray-900 border-gray-900 text-white': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-orange-400 border-orange-500 text-white': warning,
      'bg-red-600 border-red-600 text-white': danger,
      // outline and rounded additional style props
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-orange-400': outline && warning,
      'text-red-600': outline && danger,
    })
  )

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

// validating props by type, this is the most common reason for using this library
// typscript is also used for this more recently and a lot more
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
}

export default Button
