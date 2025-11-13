import MovieList from './components/MovieList'
import {FiRefreshCcw} from 'react-icons/fi'

import Button from './components/Button'
import SongList from './components/SongList'

export default function App() {
  return (
    <div className="md:container mx-auto rounded bg-slate-100 p-5">
      <div className="p-5">
        <Button primary rounded>
          <FiRefreshCcw className="mr-3" />
          Reset All Lists
        </Button>
      </div>
      <MovieList />

      <SongList />
    </div>
  )
}
