var playlist = { LinkinPark: 'Numb'}

function updatePlaylist(playlst, artistName, song){
  playlst[artistName] = song
  return playlst
}

function removeFromPlaylist(playlst, artistName){
  delete playlst.artistName
  return playlst
}