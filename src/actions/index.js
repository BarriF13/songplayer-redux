//Action creator --> update the data or state in store

//named export need {} when being exported in another file
export const selectSong = (song) => {
  // Return and action 
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
