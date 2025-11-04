import cx from 'classnames'
import useNavigation from '../hooks/use-navigation'

const Link = (props) => {
  const {to, children, className, activeClassName} = props
  const {currentPath, navigate} = useNavigation()

  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  const classes = cx(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}

export default Link
