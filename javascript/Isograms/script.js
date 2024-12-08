function isIsogram(str) {
    const lowerStr = str.toLowerCase(); // Convert the string to lowercase to ignore letter case
    const seen = new Set(); // Use a Set to track letters we’ve already seen
    
    for (let char of lowerStr) {
        if (seen.has(char)) {
            return false; // If the character has already been seen, it's not an isogram
        }
        seen.add(char); // Otherwise, add the character to the Set
    }
    
    return true; // If no repeating letters are found, it's an isogram
}
