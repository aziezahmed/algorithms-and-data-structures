import {
  LinkedList,
  createLinkedListFromArray,
  reverseLinkedList,
} from './linkedList';

test('LinkedList can be created', () => {
  const llist = new LinkedList(125);
  expect(llist.data).toBe(125);
  expect(llist.next).toBe(null);
});

test('createLinkedListFromArray function creates a linked list', () => {
  const linkedList = createLinkedListFromArray([1, 2, 3]);
  expect(linkedList.next?.next?.data).toBe(3);
});

test('reverseLinkedList', () => {
  const linkedList = createLinkedListFromArray([1, 2, 3]);
  const reversedLinkedList = reverseLinkedList(linkedList);
  expect(reversedLinkedList.data).toBe(3);
  expect(reversedLinkedList?.next?.data).toBe(2);
  expect(reversedLinkedList?.next?.next?.data).toBe(1);
});
