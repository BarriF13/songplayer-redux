import React, { Component } from 'react'
import { connect } from 'react-redux'
export class SongList extends Component {

  //helper method- take the list -map- return jsx
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={console.log('click')} className="ui button primary">Select</button>
          </div>
      <div className="content">{song.title}</div>
        </div>
      )
    });
  }

  render() {
    //**--this.props === {songs: state.songs}
    //console.log(this.props.songs);
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}
// this is convention to call this function =mapStateToProps 
// means get the data from state and pass it like props to our component 
//state = all the (DATA ) songs in redux store -- in insurance example would be all the policies claims and accounting 
const mapStateToProps = (state) => {
  //console.log(state);
  // this data  songs: state.songs --below  will show up as** props inside of our component 
  return { songs: state.songs };
}

//connect is a react component 
//now we config the connect function by first adding map.. function as the first arg - 
export default connect(mapStateToProps)(SongList);
//connect return a function and the second () is revoking the function within here is songList
