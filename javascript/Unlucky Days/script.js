function unluckyDays(year){
    let count = 0;
    
    // Loop through each month (1 to 12)
    for (let month = 0; month < 12; month++) {
        // Create a date object for the 13th day of the current month
        let date = new Date(year, month, 13);
        
        // Check if the 13th day is a Friday (getDay() returns 5 for Friday)
        if (date.getDay() === 5) {
            count++;
        }
    }
    
    return count; // Return the number of Friday the 13ths
}