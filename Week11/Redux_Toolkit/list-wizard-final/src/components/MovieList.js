import {useDispatch, useSelector} from 'react-redux'
import {addMovie, removeMovie} from '../store'
import Button from './Button'
import Card from './Card'
import {FaPlus} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

import {createRandomMovie} from '../data'

export default function MovieList() {
  // get local access to store's disptach
  const dispatch = useDispatch()
  // Get list of movies
  const moviePlaylist = useSelector((state) => {
    return state.movies
  })

  const handleMovieAdd = (movie) => {
    // Add movie to list of movies
    dispatch(addMovie(movie))
  }
  const handleMovieRemove = (movie) => {
    // Remove movie from list of movies
    dispatch(removeMovie(movie))
  }

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <div key={movie} className="flex flex-row justify-between">
        {movie}
        <Button danger rounded onClick={() => handleMovieRemove(movie)}>
          <IoClose />
        </Button>
      </div>
    )
  })

  return (
    <Card className="my-4">
      <div className="flex flex-row justify-between p-3 border-b">
        <h2 className="text-xl">Movies to Watch</h2>
        <Button
          success
          rounded
          onClick={() => handleMovieAdd(createRandomMovie())}
        >
          <FaPlus className="mr-3" />
          Add Movie
        </Button>
      </div>
      <div className="p-5">{renderedMovies}</div>
    </Card>
  )
}
