function highAndLow(numbers) {
    // Split the input string by spaces to create an array of strings
    const numArray = numbers.split(' ').map(Number); // Convert strings to numbers
    
    // Find the highest and lowest numbers
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    
    // Return the result in the required format
    return `${highest} ${lowest}`;
}

// Example usage:
console.log(highAndLow("1 2 3 4 5"));    // Output: "5 1"
console.log(highAndLow("1 2 -3 4 5"));   // Output: "5 -3"
console.log(highAndLow("1 9 3 4 -5"));   // Output: "9 -5"
