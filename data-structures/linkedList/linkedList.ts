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
  let llist = new LinkedList(data[0]);
  let pointer = llist;
  for (let i = 1; i < data.length; i++) {
    let llist = new LinkedList(data[i]);
    pointer.next = llist;
    pointer = pointer.next;
  }
  return llist;
}

export function reverseLinkedList(head: LinkedList): LinkedList {
  if (!head || !head.next) {
    return head;
  }
  let temp: LinkedList = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
}
