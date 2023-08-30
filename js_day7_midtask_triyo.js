const songList = require('./song_list_obj');

// TODO membuat grup songList berdasarkan artist
function searchSongByArtist(artistName) {
  const songGroupByArtist = [];
  songList.forEach(song => {
    if (!songGroupByArtist[song.artist]) {
      songGroupByArtist[song.artist] = [];
    }
    songGroupByArtist[song.artist].push(song);
  })
  // console.log("Song grup by artist:")
  // console.log(songGroupByArtist);
  if (artistName in songGroupByArtist) {
    return [artistName, songGroupByArtist[artistName]]
  } else {
    return [artistName, '[EMPTY]']
  }
}

// TODO membuat grup songList berdasarkan genre
function searchSongByGenre(genreSong) {
  const songGroupByGenre = songList.reduce((groups, song) => {
    const genre = song.genre;
    if (!groups[genre]) {
      groups[genre] = [];
    }
    groups[genre].push(song)
    return groups
  }, []);
  if (genreSong in songGroupByGenre) {
    return [genreSong, songGroupByGenre[genreSong]]
  } else {
    return [genreSong, '[EMPTY]']
  }
}

// TODO membuat grup berisi lagu secara random yang penting total durasi ngga lebih dari 1 jam
function createPlayList() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let durationInSecond = songList.map((item) => item.duration)
    .map(duration => {
      const parts = duration.split(":").map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
    })

  const playListSong = [];
  let durationCounter = 0;
  let songThatWillbeAdded = undefined;
  let durationThatWillbeCounted = undefined;

  function makePlayListSong() {
    let index = getRandomInt(songList.length);
    songThatWillbeAdded = songList[index];
    durationThatWillbeCounted = durationInSecond[index];
    while (durationCounter + durationThatWillbeCounted <= 3600) {
      playListSong.push(songThatWillbeAdded);
      durationCounter += durationThatWillbeCounted;
      makePlayListSong();
    }
  }
  makePlayListSong();

  const totalMinutePlayList = Math.floor(durationCounter / 60);
  const totalSecondPlayList = durationCounter - (totalMinutePlayList * 60);
  totalDurationPlayList = `${totalMinutePlayList} minutes ${totalSecondPlayList} seconds`;
  console.log(durationCounter);
  console.log(totalMinutePlayList * 60);

  return [playListSong, totalDurationPlayList];
}


console.log(`Song by artist ${searchSongByArtist('Tulus')[0]}:`);
console.log(searchSongByArtist('Tulus')[1])
console.log(`\nSong by genre ${searchSongByGenre('Japanese Rock')[0]}`);
console.log(searchSongByGenre('Japanese Rock')[1])
console.log("\nPlaylist Songs:");
console.log(createPlayList()[0]);
console.log("\nTotal duration of playlist:");
console.log(createPlayList()[1]);
