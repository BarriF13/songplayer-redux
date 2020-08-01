import React from 'react'
import SongList from './SongList'
import {  selectSong } from '../actions'
//less use of class component cause we are using redux so no state needed 
const App = () => {
  return (
    <div>
      <SongList />
    </div>
  )
}

export default App;
