import {LinkedListImp} from "./linkedList";

const linkedList = new LinkedListImp<number>();
linkedList.insert(10)
linkedList.insert(34)
linkedList.insert(50)
linkedList.insert(5)

console.log("size: ",linkedList.size());
console.log("Tail of the Node:", linkedList.tail()?.value)
console.log("Head of the Node:", linkedList.head()?.value)
console.log("Reverse:", linkedList.reverse())
console.log("size: ",linkedList.size());