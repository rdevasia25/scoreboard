let homeCount = 0
let guestCount = 0

let homeElement = document.getElementById("home-count")
let guestElement = document.getElementById("guest-count")

function homeIncrement1() {
    homeCount += 1
    homeElement.textContent = homeCount
}

function homeIncrement2() {
    homeCount += 2
    homeElement.textContent = homeCount
}

function homeIncrement3() {
    homeCount += 3
    homeElement.textContent = homeCount
}

function guestIncrement1() {
    guestCount += 1
    guestElement.textContent = guestCount
}

function guestIncrement2() {
    guestCount += 2
    guestElement.textContent = guestCount
}

function guestIncrement3() {
    guestCount += 3
    guestElement.textContent = guestCount
}