export function binarySearch(array: number[], value: number) {
  const recursivebinarySearch = (
    sortedArray: number[],
    searchValue: number,
    start: number,
    end: number
  ): boolean => {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === searchValue) return true;
    if (sortedArray[mid] > searchValue)
      return recursivebinarySearch(sortedArray, searchValue, start, mid - 1);
    else return recursivebinarySearch(sortedArray, searchValue, mid + 1, end);
  };
  return recursivebinarySearch(array, value, 0, array.length - 1);
}
