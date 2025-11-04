import useNavigation from '../hooks/use-navigation'

export default function Route({path, children}) {
  const {currentPath} = useNavigation()

  if (path === currentPath) {
    return children
  }
  return null
}
