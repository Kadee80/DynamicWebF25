import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeName, changePrice, addArt} from '../store'

const ArtForm = () => {
  // how we update store/state
  const dispatch = useDispatch()
  // how we read values, or select specific values from store/state
  /* const {name, price} = useSelector((state) => {
    return {name: state.form.name, price: state.form.price}
  }) */
  const name = useSelector((state) => state.form.name)
  const price = useSelector((state) => state.form.price)

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handlePriceChange = (event) => {
    // event.target.value is coming in as a string, so we have to parse it
    // if parseInt returns a NaN, default the value to 0
    const artPrice = parseInt(event.target.value) || 0
    dispatch(changePrice(artPrice))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addArt({name, price}))
  }

  return (
    <div className="my-5">
      <h3 className="text-xl mb-8">Add Artwork</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label>Name:</label>
            <input
              type="text"
              className="border border-2 rounded border-slate-500 p-2"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col ml-8">
            <label>Price:</label>
            <input
              type="number"
              className="border border-2 rounded border-slate-500 p-2"
              value={price || ''}
              onChange={handlePriceChange}
            />
          </div>
          <div className="flex flex-col justify-end ml-3">
            <button className="px-3 py-1 rounded bg-slate-500 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ArtForm
