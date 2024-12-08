function getCount(str) {
    // Define the vowels
    const vowels = 'aeiou';
    
    // Initialize a counter for the vowels
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // If the character is a vowel, increment the count
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    // Return the total count of vowels
    return count;
}