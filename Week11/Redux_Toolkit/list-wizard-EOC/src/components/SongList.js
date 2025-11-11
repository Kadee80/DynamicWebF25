import {useDispatch, useSelector} from 'react-redux'
import {addSong, removeSong} from '../store'
import Button from './Button'
import Card from './Card'
import {FaPlus} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

import {createRandomSong} from '../data'

export default function SongList() {
  const dispatch = useDispatch()
  // Get list of songs
  // a selector in redux is a function that takes (at least) state as an agrument and
  // returns a "selected" piece of state
  const songPlaylist = useSelector((state) => {
    return state.songs
  })

  const handleSongAdd = (song) => {
    // Add song to list of songs
    /* const action = addSong(song)
    dispatch(action) */
    dispatch(addSong(song))
  }
  const handleSongRemove = (song) => {
    // Remove song from list of songs
    dispatch(removeSong(song))
  }

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <div key={song} className="flex flex-row justify-between">
        {song}
        <Button danger rounded onClick={() => handleSongRemove(song)}>
          <IoClose />
        </Button>
      </div>
    )
  })

  return (
    <Card className="my-4">
      <div className="flex flex-row justify-between p-3 border-b">
        <h2 className="text-xl">Songs to Listen To</h2>
        <Button
          success
          rounded
          onClick={() => handleSongAdd(createRandomSong())}
        >
          <FaPlus className="mr-3" />
          Add Song
        </Button>
      </div>
      <div className="p-5">{renderedSongs}</div>
    </Card>
  )
}
