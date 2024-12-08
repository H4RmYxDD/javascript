function isSquare(n) {
    if (n < 0) return false; // Negative numbers cannot be square numbers
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt); // Check if the square root is an integer
}
