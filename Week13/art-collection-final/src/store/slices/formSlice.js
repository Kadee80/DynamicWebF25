import {createSlice} from '@reduxjs/toolkit'
import {addArt} from './artSlice'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    price: 0,
  },
  // list our our mini-reducers / actionCreator functions
  // all get combined by toolkit as formSlice.reducer
  reducers: {
    changeName(state, action) {
      // big assumption here:
      // that the name we want to change is coming in our action.payload
      // because of immer being used we can directly mutate state!
      state.name = action.payload
    },
    changePrice(state, action) {
      state.price = action.payload
    },
  },
  //use extraReducers to clear our form fields by watching for the 'art/addArt' action type
  extraReducers(builder) {
    builder.addCase(addArt, (state, action) => {
      // we dont need our action for anything here
      state.name = ''
      state.price = 0
    })
  },
})

export const {changeName, changePrice} = formSlice.actions // actionCreators
export const formReducer = formSlice.reducer
