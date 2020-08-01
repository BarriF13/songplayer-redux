import React from 'react'
import {connect} from 'react-redux';


const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      detail
     {/* {props.song.duration} */}
    </div>
  )
}

const mapStateToProps =(state)=>{
  return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail) ;
