let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


//sets the progress bar according to the length of the song as well as its value and duration
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// click handler for the play and pause functionality
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// if song is playing, the slider updates itself after a few ms
if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500);
}

// if we manually drag the slider to some part, the song should start playing and the pause/play button should get updated
progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
