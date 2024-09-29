function calculateGrade() {
    let score = parseFloat(document.getElementById('score').value);
    if (isNaN(score) || score < 0 || score > 100) {
        alert('Please enter a valid score between 0 and 100.');
        return;
    }
    let grade;
    if (score >= 85) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 50) {
        grade = 'C';
    } else if (score >= 35) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    document.getElementById('gradeResult').textContent = `Your grade is: ${grade}`;
}
