function calculateAverage() {
    let number = document.getElementById('inputNumber').value;
    if (number === '' || isNaN(number) || number < 0) {
        alert("Please enter a valid non-negative number.");
        return;
    }
    let digitsString = number.toString();
    let sum = 0;
    for (let i = 0; i < digitsString.length; i++) {
        sum += parseInt(digitsString[i]);
    }
    let average = sum / digitsString.length;
    document.getElementById('result').textContent = `The average of digits is ${average}.`;
}
