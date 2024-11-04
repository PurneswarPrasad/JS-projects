let [hrs, mins, secs] = [0, 0, 0];

let time = document.getElementById("displayTime");

let timer = null; // this helsp to manage the setInterval asynchronity and clears the interval before updating again

function stopwatch() {
  secs++;
  if (secs === 60) {
    mins++;
    secs = 0;
  }
  if (mins == 60) {
    hrs++;
    mins = 0;
  }

  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;

  time.innerHTML = `${h}:${m}:${s}`;
}

function onStart() {
  //cleaers the interval before updating the time
  if (timer != null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    stopwatch();
  }, 1000);
}

function onStop() {
  clearInterval(timer); //important everytime that we clear the interval before any kind of updation
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;

  time.innerHTML = `${h}:${m}:${s}`;
}

function onReset() {
  clearInterval(timer);
  time.innerHTML = "00:00:00";
}
