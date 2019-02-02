var playlist = { LinkinPark: 'Numb'}

function updatePlaylist(playlst, artistName, song){
  playlst[artistName] = song
  return playlst
}