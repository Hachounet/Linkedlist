/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import Node from './nodeclass.mjs';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newHead = new Node(value);
    if (this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.nextNode = this.head;
      this.head = newHead;
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let currentNode = this.head;
    let counter = 1;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return counter;
  }

  findHead() {
    return this.head;
  }

  findTail() {
    return this.tail;
  }

  atIndex(index) {
    if (this.head === null) {
      return 'List is empty, cannot find item on list.';
    }
    let currentNode = this.head;
    let counter = 1;
    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter++;
      if (currentNode.nextNode === null && counter !== index) {
        return 'No node at this index.';
      }
    }
    return currentNode;
  }

  pop() {
    const lastNode = this.tail;
    let currentNode = this.head;
    while (currentNode.nextNode !== lastNode) {
      currentNode = currentNode.nextNode;
    }
    this.tail = currentNode;
    this.tail.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    let result;
    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        result = true;
        return result;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode.nextNode === null && currentNode.value !== value) {
      result = false;
      return result;
    }
    return result;
  }

  find(value) {
    let result;
    if (this.head.value === null && this.head.nextNode === null) {
      result = null;
      return result;
    }
    let currentNode = this.head;
    let index = 1;
    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index += 1;
      currentNode = currentNode.nextNode;
    }
    if (currentNode.nextNode === null && currentNode.value !== value) {
      result = null;
      return result;
    }
    result = index;
    return result;
  }

  toString() {
    let result = '';
    let currentNode = this.head;
    if (this.head.value === null && this.head.nextNode === null) {
      return 'List is empty.';
    }
    while (currentNode.nextNode !== null) {
      result += `(${currentNode.value}) ->`;
      currentNode = currentNode.nextNode;
    }
    if (currentNode.nextNode === null) {
      result += currentNode.nextNode;
    }
    return result;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index < 0) {
      return 'Index must be a positive number.';
    }
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
      return 'Node inserted/';
    }
    let currentNode = this.head;
    let prevNode = null;
    let counter = 0;

    while (currentNode !== null && counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }
    if (currentNode === null && counter !== index) {
      return 'Error. Index given is greater than total elements in the linked list.';
    }
    newNode.nextNode = currentNode;
    if (prevNode === null) {
      this.head = newNode;
    } else {
      prevNode.nextNode = newNode;
    }

    return 'Node inserted.';
  }

  removeAt(index) {
    if (index < 0) {
      return 'Index must be greather or equal to 0. ';
    }
    if (index === 0) {
      if (this.head === null) {
        return 'List is already empty.';
      }
      this.head = this.head.nextNode;
    }
    let counter = 1;
    let prevNode = this.head;
    let currentNode = this.head.nextNode;
    while (currentNode !== null && index !== counter) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }
    if (currentNode === null) {
      return 'Index is greather than number of elements in the list.';
    }
    prevNode.nextNode = currentNode.nextNode;
    return 'Node deleted.';
  }
}
