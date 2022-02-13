import {LinkedList} from "./linkedList";
test("LinkedList test", () =>{
    let llist = new LinkedList("hello");
    expect(llist.data).toBe("hello");
});