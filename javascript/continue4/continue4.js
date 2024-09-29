function printNumbers() {
    let result = '';
    let count = 0;
    let skipCount = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            count++;
            if (count === skipCount) {
                skipCount++;
                continue;
            }
        }
        result += i + (i < 100 ? ', ' : '');
    }
    document.getElementById('result').textContent = result;
}
