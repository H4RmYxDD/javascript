function digitsAverage(input) {
    while (input > 9) {
          const digits = String(input).split('').map(Number);
          const averages = [];
          
          for (let i = 0; i < digits.length - 1; i++) {
              averages.push(Math.ceil((digits[i] + digits[i + 1]) / 2));
          }
          
          input = parseInt(averages.join(''), 10);
      }
      
      return input;
  }
  