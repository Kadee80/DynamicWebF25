import {createSlice} from '@reduxjs/toolkit'

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
  extraReducers(builder) {
    // think of this as an action type listener,
    // first arg is the string action type to listen for
    // second arg is the mini reducer to execute
    builder.addCase('app/reset', (state, action) => {
      return []
    })
  },
})

// export action creators
export const {addSong, removeSong} = songSlice.actions
export const songReducer = songSlice.reducer
