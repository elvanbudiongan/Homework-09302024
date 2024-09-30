
export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }    // value dapat kay para same sa interface
}

export interface LinkedList<T>{
  size(): number;
  insert(value: T): void;
  reverse(): string;
  head(): ListNode<T> | null;
  tail(): ListNode<T> | null;
}

export class LinkedListImp <T> implements LinkedList<T>{
  private headNode: ListNode<T> | null = null;
  private tailNode: ListNode<T> | null = null;
  private counter: number = 0;

//2.1
  size(): number{
    return this.counter
  }
//2.2
  insert(value: T): void{
    const newNode = new ListNode<T>(value);
    if(!this.headNode){
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
        if(this.tailNode){
          this.tailNode.next = newNode
          this.tailNode = newNode
        }
      }
      this.counter++;
  }



//2.3
    reverse(): string {
    let previous: ListNode<T> | null = null;
    let current: ListNode<T> | null = this.headNode;
    let next: ListNode<T> | null = null;
    const reversedValues: T[] = [];

    //reverse the linkedlist
    while (current) {
      next = current.next;  
      current.next = previous; 
      previous = current;
      current = next;
    }
    this.headNode = previous;

    //store the reverse linklist
    current = this.headNode
     while (current) {
        reversedValues.push(current.value);
        current = current.next;
    }
    return reversedValues.join(" -> ");
  }
//2.4
  head(): ListNode<T> | null {
    return this.headNode 
  }


//to be edited 2.5
  tail(): ListNode<T> | null{
    return this.tailNode 
  }

}
