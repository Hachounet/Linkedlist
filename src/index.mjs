// eslint-disable-next-line import/extensions
import LinkedList from './linkedlistclass.mjs';
/* eslint-disable no-console */
// eslint-disable-next-line import/extensions

const myList = new LinkedList();
myList.append('HEAD');

myList.append('FIRST');
myList.append('SECOND');
myList.append('THIRD');
myList.append('FOUR');
myList.append('FIVE');
myList.prepend('NEW HEAD');

console.log(myList.insertAt('TESTING', 3));
console.log(myList.removeAt(3));
console.log(myList.toString());
