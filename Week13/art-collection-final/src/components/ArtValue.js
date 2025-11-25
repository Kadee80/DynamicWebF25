import {useSelector} from 'react-redux'

export const ArtValue = () => {
  // derived state
  const totalPrice = useSelector(({art: {data, searchTerm}}) => {
    return data
      .filter((art) => {
        return art.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      .reduce((acc, art) => {
        return (acc += art.price)
      }, 0)
  })
  return (
    <div className="pr-5 flex flex-row justify-end">
      <h3 className="text-lg">Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default ArtValue
