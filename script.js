let watchTimer = document.querySelector(".watch-timer");
let hour = 0;
let minute = 0;
let second = 0;

let clearTimer;

function updateTimer() {
  clearTimer = setInterval(() => {
    second++;
    if (second == 60) {
      minute++;

      second = 0;
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }
    watchTimer.textContent =
      (hour <= 9 ? "0" + hour : hour) +
      ":" +
      (minute <= 9 ? "0" + minute : minute) +
      ":" +
      (second <= 9 ? "0" + second : second);
  }, 1000);
}

document.querySelector(".start").onclick = () => {
  updateTimer();
  document.querySelector(".start").style.visibility = "hidden";

  // let hideResetButton = watchTimer.textContent;
  // console.log(hideResetButton);

  // if (hideResetButton == "00:00:00") {
  //   document.querySelector(".reset").style.visibility = "hidden";
  //   document.querySelector(".stop").style.visibility = "hidden";
  // } else {
  //   document.querySelector(".stop").style.visibility = "visible";
  // }
};

document.querySelector(".reset").onclick = () => {
  clearInterval(clearTimer);
  hour = 0;
  minute = 0;
  second = 0;

  watchTimer.textContent = `${"0" + hour}:${"0" + minute}:${"0" + second}`;
  document.querySelector(".start").textContent = "START";
  document.querySelector(".start").style.visibility = "VISIBLE";
};

document.querySelector(".stop").onclick = () => {
  clearInterval(clearTimer);
  document.querySelector(".start").textContent = "CONTINUE";
  document.querySelector(".start").style.visibility = "VISIBLE";

  let hideResetButton = watchTimer.textContent;

  if (hideResetButton == "00:00:00") {
    document.querySelector(".start").textContent = "START";
    //document.querySelector(".reset").style.visibility = "hidden";
    // document.querySelector(".stop").style.visibility = "hidden";
  } else {
    //document.querySelector(".stop").style.visibility = "visible";
  }
};
