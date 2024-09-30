"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListImp = exports.ListNode = void 0;
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    } // value dapat kay para same sa interface
}
exports.ListNode = ListNode;
class LinkedListImp {
    headNode = null;
    tailNode = null;
    counter = 0;
    //2.1
    size() {
        return this.counter;
    }
    //2.2
    insert(value) {
        const newNode = new ListNode(value);
        if (!this.headNode) {
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            if (this.tailNode) {
                this.tailNode.next = newNode;
                this.tailNode = newNode;
            }
        }
        this.counter++;
    }
    //2.3
    reverse() {
        let previous = null;
        let current = this.headNode;
        let next = null;
        const reversedValues = [];
        //reverse the linkedlist
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.headNode = previous;
        //store the reverse linklist
        current = this.headNode;
        while (current) {
            reversedValues.push(current.value);
            current = current.next;
        }
        return reversedValues.join(" -> ");
    }
    //2.4
    head() {
        return this.headNode;
    }
    //to be edited 2.5
    tail() {
        return this.tailNode;
    }
}
exports.LinkedListImp = LinkedListImp;
