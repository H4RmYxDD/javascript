function XO(str) {
    const lowerStr = str.toLowerCase(); // Convert string to lowercase to ignore case
    const xCount = (lowerStr.match(/x/g) || []).length; // Count the number of 'x's
    const oCount = (lowerStr.match(/o/g) || []).length; // Count the number of 'o's
    
    return xCount === oCount; // Return true if counts are equal, otherwise false
}
