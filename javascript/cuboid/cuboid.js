function calculateCuboid() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let height = parseFloat(document.getElementById('height').value);
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        alert('Please enter valid numbers for length, width, and height.');
        return;
    }
    let surfaceArea = 2 * (length * width + width * height + height * length);
    let volume = length * width * height;
    document.getElementById('surfaceArea').textContent = `Surface Area: ${surfaceArea.toFixed(2)}`;
    document.getElementById('volume').textContent = `Volume: ${volume.toFixed(2)}`;
}
