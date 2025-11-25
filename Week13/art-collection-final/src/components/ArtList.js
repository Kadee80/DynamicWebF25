import {useSelector, useDispatch} from 'react-redux'
import {createSelector} from '@reduxjs/toolkit'
import {removeArt} from '../store'

// NOOOOOOO!!!
// {id: 345678, name: 'the scream', price: '1', bold: true}

const memoizedArt = createSelector(
  [(state) => state.art.data, (state) => state.art.searchTerm],
  (data, searchTerm) =>
    data.filter((art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
)

const ArtList = () => {
  const dispatch = useDispatch()

  const artList = useSelector(memoizedArt)
  const name = useSelector((state) => state.form.name)

  // const {artList, name} = useSelector((state) => {
  //   const {filteredArt} = data.filter((art) => {
  //     return art.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   })

  //   return {
  //     artList: filteredArt,
  //     name: form.name,
  //   }
  // })

  const handleArtDelete = (art) => {
    dispatch(removeArt(art.id))
  }

  // this is where we care about how we display art items!!!
  const renderedArt = artList.map((art) => {
    // boolean compare lower cased version of name from form and name from art.name
    const bold = name && art.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div
        key={art.id}
        className="border rounded flex flex-row justify-between items-center"
      >
        {/* &&  returns the last truthy value OR the first falsey value */}
        <p className={`${bold && 'font-bold'}`}>
          {art.name} - ${art.price}
        </p>
        <button
          onClick={() => handleArtDelete(art)}
          className="rounded bg-red-500 p-2 text-white"
        >
          Delete
        </button>
      </div>
    )
  })
  return <div>{renderedArt}</div>
}

export default ArtList
