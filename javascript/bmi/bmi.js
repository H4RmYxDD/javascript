function calculateBMI() {
    let mass = parseFloat(document.getElementById('mass').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(mass) || isNaN(height) || mass <= 0 || height <= 0) {
        alert('Please enter valid positive values for mass and height.');
        return;
    }
    let bmi = mass / (height * height);
    document.getElementById('bmiResult').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}
