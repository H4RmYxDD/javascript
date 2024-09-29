function printLetters() {
    let myString = document.getElementById('inputString').value;
    let lettersList = document.getElementById('lettersList');
    lettersList.innerHTML = '';
    for (let i = 0; i < myString.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = myString[i];
        lettersList.appendChild(listItem);
    }
}
