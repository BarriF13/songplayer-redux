import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'
//import {  selectSong } from '../actions'
//less use of class component cause we are using redux so no state needed 
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />

        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>

    </div>
  )
}

export default App;
