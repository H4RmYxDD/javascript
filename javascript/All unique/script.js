function hasUniqueChars(str) {
    const seen = new Set(); // Create a set to track seen characters
    
    for (let char of str) {
        // If the character is already in the set, return false
        if (seen.has(char)) {
            return false;
        }
        // Add the character to the set
        seen.add(char);
    }
    
    // If no duplicates are found, return true
    return true;
}

// Example usage:
console.log(hasUniqueChars("abcdef"));   // true
console.log(hasUniqueChars("aabbcc"));   // false
console.log(hasUniqueChars("hello"));    // false
console.log(hasUniqueChars("world"));    // true
console.log(hasUniqueChars(""));         // true (empty string has no duplicates)
