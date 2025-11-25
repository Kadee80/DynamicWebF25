import {configureStore} from '@reduxjs/toolkit'
// import all of our actions, and our reducers from the slices for use/ reexport
import {
  artReducer,
  addArt,
  removeArt,
  changeSearchTerm,
} from './slices/artSlice'
import {formReducer, changeName, changePrice} from './slices/formSlice'

//configure our store
const store = configureStore({
  reducer: {
    art: artReducer,
    form: formReducer,
  },
})

// this is the access point for all imports from store
export {store, changeName, changePrice, addArt, removeArt, changeSearchTerm}
