import {configureStore, createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    // action.type generated = 'song/addSong'
    // this is the action.type that is generated in the behind the scenes actionCreator
    addMovie(state, action) {
      // redux toolkit uses immer library! thats why you can
      // directly mutate state cringe
      state.push(action.payload)
    },
    removeMovie(state, action) {
      // action.payload is the name of the song we want to remove
      // get the index of the song passed via payload
      const index = state.indexOf(action.payload)
      // Array.splice() - vanilla js command
      state.splice(index, 1)
    },
  },
})

// think of a slice like a specific useReducer/reducer function
const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    // action.type generated = 'song/addSong'
    // this is the action.type that is generated in the behind the scenes actionCreator
    addSong(state, action) {
      // redux toolkit uses immer library! thats why you can
      // directly mutate state cringe
      state.push(action.payload)
    },
    removeSong(state, action) {
      // action.payload is the name of the song we want to remove
      // get the index of the song passed via payload
      const index = state.indexOf(action.payload)
      // Array.splice() - vanilla js command
      state.splice(index, 1)
    },
  },
})

// this is where you add your slices by keyname to your applicaiton wide state/store
const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
})

// here, once the slices have been combined into our store
// each slice is a key, the values inside are updated by its reducers
// songSlice think of state as all things songState
const startingState = store.getState()
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

// make sure you export all the things you need
// the compiled application state to access values elsewhere
export {store}
// detructure and export out the actions/function from the compiled songSlice.actions (should be named .actionCreators)
export const {addSong, removeSong} = songSlice.actions
export const {addMovie, removeMovie} = movieSlice.actions
