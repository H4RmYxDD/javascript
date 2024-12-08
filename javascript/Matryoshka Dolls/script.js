function matryoshka(lists) {
    return lists
      .map((list) => ({
        max: Math.max(...list),
        min: Math.min(...list),
      }))
      .sort((a, b) => a.max - b.max)
      .every(({ min, max }, idx, array) => (
        idx === 0 ||
        max > array[idx - 1].max &&
        min < array[idx - 1].min
      ))
  }