"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("./linkedList");
const linkedList = new linkedList_1.LinkedListImp();
linkedList.insert(10);
linkedList.insert(34);
linkedList.insert(50);
linkedList.insert(5);
console.log("size: ", linkedList.size());
console.log("Tail of the Node:", linkedList.tail()?.value);
console.log("Head of the Node:", linkedList.head()?.value);
console.log("Reverse:", linkedList.reverse());
console.log("size: ", linkedList.size());
