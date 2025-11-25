import {useDispatch, useSelector} from 'react-redux'
import {changeSearchTerm} from '../store'

const ArtSearch = () => {
  const dispatch = useDispatch()

  const searchTerm = useSelector((state) => {
    return state.art.searchTerm
  })

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }

  return (
    <div>
      <div className="flex flex-row justify-between px-3">
        <h3 className="text-xl">My Art Collection</h3>
        <div>
          <label>Search: </label>
          <input
            type="text"
            className="border border-2 rounded border-slate-500"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ArtSearch
