//Action creator 

//named export need {} when being exported in another file
export const selectSong = (song) => {
  // Return and action 
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
