function calculateRemainingSeconds() {
    let currentHours = parseInt(document.getElementById('hours').value);
    let currentMinutes = parseInt(document.getElementById('minutes').value);
    let currentSeconds = parseInt(document.getElementById('seconds').value);
    let secondsPassed = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;
    let totalSecondsInADay = 24 * 3600;
    let remainingSeconds = totalSecondsInADay - secondsPassed;
    document.getElementById('remainingSeconds').textContent = `Remaining Seconds: ${remainingSeconds}`;
}
