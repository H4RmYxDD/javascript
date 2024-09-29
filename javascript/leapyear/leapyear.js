function checkLeapYear() {
    let year = parseInt(document.getElementById('year').value);
    if (isNaN(year)) {
        alert('Please enter a valid year.');
        return;
    }
    let isLeapYear;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    let resultText = isLeapYear ? `${year} is a leap year!` : `${year} is not a leap year.`;
    document.getElementById('leapYearResult').textContent = resultText;
}
