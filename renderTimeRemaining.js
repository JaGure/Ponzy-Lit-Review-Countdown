const computeTimeRemaining = require('./timeRemaining')

const updateTimeRemaining = () => {
    const { days, hours, minutes, seconds } = computeTimeRemaining()

    const timeText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' 

    document.getElementById('timer-text').innerHTML = timeText;
}

setInterval(updateTimeRemaining, 1000)