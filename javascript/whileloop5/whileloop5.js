function printDivisors() {
    let result = '';
    let number = 10;

    while (number <= 30) {
        let divisors = [];
        let divisor = 1;
        while (divisor <= number) {
            if (number % divisor === 0) {
                divisors.push(divisor);
            }
            divisor++;
        }
        result += `${number}: ${divisors.join(', ')},\n`;

        number++;
    }
    document.getElementById('result').textContent = result;
}
