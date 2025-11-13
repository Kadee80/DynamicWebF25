import {configureStore} from '@reduxjs/toolkit'
import {songReducer, addSong, removeSong} from './slices/songSlice'
import {movieReducer, addMovie, removeMovie} from './slices/movieSlice'
import {reset} from './actions'

// this is where you add your slices by keyname to your applicaiton wide state/store
const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
})

// export all imported actionCreators for all of store
// import from indiviual slices and centrally export everything from index
// why? good practice, and avoids circ dependencies
export {store, reset, addSong, removeSong, addMovie, removeMovie}

// here, once the slices have been combined into our store
// each slice is a key, the values inside are updated by its reducers
// songSlice think of state as all things songState
/*const startingState = store.getState()
console.log(JSON.stringify(startingState))

// update our metaState aka store with dispatch
store.dispatch({type: 'song/addSong', payload: 'Where is my mind?'})
console.log(JSON.stringify(store.getState()))

// view an action creator from a slice
console.log(songSlice.actions.addSong('Protect ya Neck'))
// this is dispatching the action creator we just logged
store.dispatch(movieSlice.actions.addMovie('Face Off'))
// final updated state
console.log(JSON.stringify(store.getState()))

console.log(movieSlice.actions)
*/
