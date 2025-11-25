import {createSlice, nanoid} from '@reduxjs/toolkit'

const artSlice = createSlice({
  name: 'art',
  initialState: {
    searchTerm: '',
    data: [], // really an array of objects {id, name, cost}
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addArt(state, action) {
      // update state.art
      // we need to get our values from action.payload this info lives in another slice
      state.data.push({
        name: action.payload.name,
        price: action.payload.price,
        id: nanoid(),
      })
    },
    removeArt(state, action) {
      // assume action.payload contains the id of the item to delete
      const updated = state.data.filter((item) => {
        // only return the ones that do not match the payload id
        return item.id !== action.payload
      })
      state.data = updated
    },
  },
})

// dont forget the exports!
export const {changeSearchTerm, addArt, removeArt} = artSlice.actions
export const artReducer = artSlice.reducer
