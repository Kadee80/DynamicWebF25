import cx from 'classnames'

export default function Card({children, className}) {
  const styles = cx(
    'border border-slate-300 rounded-lg p-3 shadow bg-white w-full',
    className
  )

  return <div className={styles}>{children}</div>
}
