export function binarySearch(sortedArray: number[], searchValue: number, start: number, end: number): boolean {
    if (start > end) return false;
    let mid=Math.floor((start + end)/2);
    if (sortedArray[mid]===searchValue) return true;
    if(sortedArray[mid] > searchValue)
        return binarySearch(sortedArray, searchValue, start, mid-1);
    else
        return binarySearch(sortedArray, searchValue, mid+1, end);
}