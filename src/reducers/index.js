// Reducers

const { selectSong } = require("../actions");

const songsReducer = () =>{
 return [
   { title: 'Physical', duration: '4:03' },
   { title: 'Break my heart', duration: '3.49' },
   { title: 'Say so', duration: '3:55' },
   { title: 'Lose You To Love Me', duration: '3:26' }

 ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}; 