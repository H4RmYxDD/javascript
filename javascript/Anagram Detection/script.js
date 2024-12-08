// write the function isAnagram
var isAnagram = function(str1, str2) {
    // Convert both strings to lowercase and sort their characters
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}
