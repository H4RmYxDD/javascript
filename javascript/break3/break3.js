function printLetters() {
    let inputString = document.getElementById('inputString').value;
    let letters = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].match(/[a-zA-Z]/)) {
            letters += inputString[i] + '\n';
        } else {
            break;
        }
    }
    document.getElementById('result').textContent = letters || 'No letters found.';
}
