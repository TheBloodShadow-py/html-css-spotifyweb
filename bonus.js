let timerElement = document.getElementById("timer"),
  totalTimeInSeconds = 0,
  initialTime = timerElement.textContent.split(":");
function updateTimer() {
  let e = Math.floor(totalTimeInSeconds / 60),
    t = totalTimeInSeconds % 60;
  (timerElement.textContent = e + ":" + (t < 10 ? "0" : "") + t),
    totalTimeInSeconds++,
    4 === e && 35 === t && clearInterval(interval);
}
2 === initialTime.length &&
  (totalTimeInSeconds =
    60 * parseInt(initialTime[0]) + parseInt(initialTime[1]));
let interval = setInterval(updateTimer, 1e3);
