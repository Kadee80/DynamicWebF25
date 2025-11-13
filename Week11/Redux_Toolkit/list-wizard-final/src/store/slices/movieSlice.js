import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    // action.type generated = 'movie/addMovie'
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
  extraReducers(builder) {
    builder.addCase('app/reset', (state, action) => {
      return []
    })
  },
})

// export action creators
export const {addMovie, removeMovie} = movieSlice.actions
export const movieReducer = movieSlice.reducer
