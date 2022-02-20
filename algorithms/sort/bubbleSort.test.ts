import { bubbleSort } from "./bubbleSort";

test("Bubble Sort can sort an array", () => {
  const result = bubbleSort([4, 2, 64, 18, 3, 1, 9]);
  expect(result).toBe([1, 2, 3, 4, 9, 18, 64]);
});
