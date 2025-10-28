import cx from 'classnames'

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

export default Panel
