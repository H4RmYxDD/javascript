function findDifference(a, b) {
    const volumeA = a[0] * a[1] * a[2];
    const volumeB = b[0] * b[1] * b[2];
    return Math.abs(volumeA - volumeB);
}
