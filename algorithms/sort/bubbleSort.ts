export function bubbleSort(unsortedArray: number[]) {
  let size = unsortedArray.length - 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
      }
    }
  }
}
