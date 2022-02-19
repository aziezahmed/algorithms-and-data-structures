import { binarySearch } from "./binarySearch";

test("Binary Search function finds number", () => {
  let result = binarySearch([2, 4, 6, 8, 10, 12], 4);
  expect(result).toBe(true);

  let result2 = binarySearch([2, 4, 6, 8, 10, 12], 2);
  expect(result2).toBe(true);

  let result3 = binarySearch([2, 4, 6, 8, 10, 12], 12);
  expect(result3).toBe(true);

  let result4 = binarySearch([2, 4, 6, 8, 10, 12], 7);
  expect(result4).toBe(false);
});
