import React, { Component } from 'react'
import { connect } from 'react-redux'
export class SongList extends Component {
  render() {
    return (
      <div>
        Song List... 
      </div>
    )
  }
}

export default connect() (SongList);
//connect return a function and the second () is revoking the function within here is songList
