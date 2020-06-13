const dueDate = new Date("June 21 2020 20:00")

const computeTimeRemaining = () => {
    const currentDate = new Date()

    const timeRemaining = dueDate - currentDate

    const daysRemaining = timeRemaining / (1000.0 * 60.0 * 60.0 * 24.0)
    const hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24
    const minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60
    const secondsRemaining = (minutesRemaining - Math.floor(minutesRemaining)) * 60

    return {
        days: Math.floor(daysRemaining),
        hours: Math.floor(hoursRemaining),
        minutes: Math.floor(minutesRemaining),
        seconds: Math.floor(secondsRemaining)
    }
}

module.exports = computeTimeRemaining