import MovieList from './components/MovieList'
import {useDispatch} from 'react-redux'
import {FiRefreshCcw} from 'react-icons/fi'

import Button from './components/Button'
import SongList from './components/SongList'

import {reset} from './store'

export default function App() {
  // pull down local usage of dispatch from our store
  const dispatch = useDispatch()

  const handleResetClick = () => {
    dispatch(reset())
  }

  return (
    <div className="md:container mx-auto rounded bg-slate-100 p-5">
      <div className="p-5">
        <Button primary rounded onClick={handleResetClick}>
          <FiRefreshCcw className="mr-3" />
          Reset All Lists
        </Button>
      </div>
      <MovieList />

      <SongList />
    </div>
  )
}
