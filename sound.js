function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var song1 = new Howl({
  src: ['song1.mp3'],
  sprite:{
    start : [0, 22000],
    song : [22000, 280000]
  }
});
var song2 = new Howl({
  src: ['song2.mp3'],
  sprite:{
    song : [0, 165000]
  }
});
const playlist = [song1, song2];
function playRandomSong(){
  Howler.stop()
  var lastSong;
  var songnum = getRndInteger(0, 1);
  while(true){
    if(songnum!=lastSong){
      break
    }
    else{
      songnum = getRndInteger(0, 1);
    }
  }
  playlist[songnum].play("song");
  lastSong = songnum;
}
