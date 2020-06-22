const computeTimeRemaining = require("./timeRemaining");

const updateTimeRemaining = () => {
  const { days, hours, minutes, seconds } = computeTimeRemaining();

  let timeText = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (days <= 0 || hours <= 0 || minutes <= 0 || seconds <= 0) {
    timeText =
      "Time's up! Unless you're submitting it late... 👀 I'll update this bad boi soon with the next due date.";
  }

  document.getElementById("timer-text").innerHTML = timeText;
};

setInterval(updateTimeRemaining, 1000);
