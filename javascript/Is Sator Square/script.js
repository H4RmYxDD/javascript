function isSatorSquare(square) {
    const n = square.length;

    // Check if all rows are of equal length
    for (let i = 0; i < n; i++) {
        if (square[i].length !== n) {
            return false;
        }
    }

    // Check if the square is a palindrome in all four ways
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (square[i][j] !== square[j][i] || 
                square[i][j] !== square[n - 1 - i][n - 1 - j] || 
                square[i][j] !== square[n - 1 - j][n - 1 - i]) {
                return false;
            }
        }
    }

    return true;
}