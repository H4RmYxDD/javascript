function calculateFactorial() {
    let number = parseInt(document.getElementById('inputNumber').value);
    if (isNaN(number) || number < 0) {
        alert("Please enter a valid non-negative number.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('result').textContent = `${number} factorial is ${factorial}.`;
}
