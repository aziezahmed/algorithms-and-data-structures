export class LinkedList {
  private dataValue: number;
  private nextNode: LinkedList | null;

  constructor(data: number) {
    this.dataValue = data;
    this.nextNode = null;
  }

  public get data() {
    return this.dataValue;
  }

  public set data(val: number) {
    this.dataValue = val;
  }

  public get next() {
    return this.nextNode;
  }

  public set next(llist: LinkedList | null) {
    this.nextNode = llist;
  }
}

export function createLinkedListFromArray(data: number[]): LinkedList {
  const llist = new LinkedList(data[0]);
  let pointer = llist;
  for (let i = 1; i < data.length; i++) {
    const llist = new LinkedList(data[i]);
    pointer.next = llist;
    pointer = pointer.next;
  }
  return llist;
}

export function reverseLinkedList(head: LinkedList): LinkedList {
  if (!head || !head.next) {
    return head;
  }
  const temp: LinkedList = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
}

export function mergeLists(head1: LinkedList | null, head2: LinkedList | null) {
  if (head1 === null) {
    return head2;
  } else if (head2 === null) {
    return head1;
  } else if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
}
