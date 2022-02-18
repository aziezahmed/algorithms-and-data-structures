import { LinkedList, reverseLinkedList } from "./linkedList";

export function createLinkedList(data: number[]): LinkedList {
    let llist = new LinkedList(data[0]);
    let pointer = llist;
    for (let i = 1; i < data.length; i++) {
        let llist = new LinkedList(data[i]);
        pointer.next = llist;
        pointer = pointer.next;
    }
    return llist;
}

test('LinkedList can be created', () => {
    let llist = new LinkedList(125);
    expect(llist.data).toBe(125);
    expect(llist.next).toBe(null);
});

test('createLinkedList function creates a linked list', () => {
    let linkedList = createLinkedList([1, 2, 3]);
    expect(linkedList.next?.next?.data).toBe(3);
});

test('reverseLinkedList', () => {
    let linkedList = createLinkedList([1, 2, 3]);
    let reversedLinkedList = reverseLinkedList(linkedList);
    expect(reversedLinkedList.data).toBe(3);
    expect(reversedLinkedList?.next?.data).toBe(2);
    expect(reversedLinkedList?.next?.next?.data).toBe(1);
});