import {configureStore, createSlice} from '@reduxjs/toolkit'
// think of a slice like a specific useReducer/reducer function
const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
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
  },
})

// make sure you export all the things you need
// the compiled application state to access values elsewhere
export {store}
// detructure and export out the actions/function from the compiled songSlice.actions
export const {addSong, removeSong} = songSlice.actions
