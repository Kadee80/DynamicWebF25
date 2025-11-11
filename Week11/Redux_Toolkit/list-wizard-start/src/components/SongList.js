import Button from './Button'
import Card from './Card'
import {FaPlus} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

import {createRandomSong} from '../data'

export default function SongList() {
  // Get list of songs
  const songPlaylist = ['testing 123']

  const handleSongAdd = (song) => {
    // Add song to list of songs
  }
  const handleSongRemove = (song) => {
    // Remove song from list of songs
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
