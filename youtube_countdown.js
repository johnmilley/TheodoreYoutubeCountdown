// march 28, 2028, 12:00pm
videoReleaseDay = new Date(2028, 2, 28);

// get the time in seconds between now and the big day

function timeremaining(targetDate) {
    let now = new Date()
    let secondsRemaining = (targetDate - now) / 1000

    let seconds = Math.floor(secondsRemaining % 60)
    let minutes = Math.floor((secondsRemaining / 60) % 60)
    let hours = Math.floor((secondsRemaining / 3600) % 24)
    let days = Math.floor((secondsRemaining / 86400) % 365)
    let years = Math.floor((secondsRemaining / 31536000))

    updateDisplay(seconds, minutes, hours, days, years)
}

function updateDisplay(seconds, minutes, hours, days, years) {
    document.querySelector('#years').innerHTML = years.toFixed(0)
    document.querySelector('#days').innerHTML = days.toFixed(0)
    document.querySelector('#hours').innerHTML = hours.toFixed(0)
    document.querySelector('#minutes').innerHTML = minutes.toFixed(0)
    document.querySelector('#seconds').innerHTML = seconds.toFixed(0)
}


const countdown = setInterval(() => {
    timeremaining(videoReleaseDay)   
}, 1000)