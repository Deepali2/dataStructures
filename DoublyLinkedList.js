//double Linked List algorithn in javascript

function DoublyLinkedList() {
  let length = 0;
  let head = null;
  let tail = null;

  //constructor function for a node in the list
  function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
  }

  //function to return the head of the list
   this.head = () => {
    return head;
  };

  //function to return the tail of the list
  this.tail = () => {
    return tail;
  };

  //function to return the size of the doubly linked list
  this.size = () => {
    return length;
  };

  //function to add a node to the front of the list

  this.addToFront = (element) => {
      let node = new Node(element);
      if (head === null && tail === null) {
      head = node;
      tail = node;
      } else {
      let currentNode = head;
      // currentNode.previous = node;
      node.next = currentNode;
      head = node;
      }
      length++;
      return `${element} has been added to the front of the list and the length of the list is now ${length}`;
  };

  this.addToBack = (element) => {
      let node = new Node(element);
      if (head === null && tail === null) {
          head = node;
          tail = node;
      } else {
        let currentNode = tail;
        currentNode.next = node;
        tail = node;

      }
      length++;
      return `${element} has been added to the end of the list and the length of the list is now ${length}`;
  };

  //function to check the index of an element in the list
  this.indexOf = (element) => {
    let index = -1;
    let currentNode = head;
    while(currentNode) {
    index++;
    if (currentNode.element === element) {
    return index;
    }
    currentNode = currentNode.next;
    }
    return `${element} does not exist in the list`;
  };  

}


//testing
const testingDoubleList = new DoublyLinkedList();
console.log(testingDoubleList);
console.log(testingDoubleList.size());
console.log(testingDoubleList.head()); 

//testing addToBack function
console.log(testingDoubleList.addToBack('elephant'));
console.log(testingDoubleList.size());
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.addToBack('lion'));
console.log(testingDoubleList.size());
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.indexOf('lion'));
console.log(testingDoubleList.addToBack('peacock'));
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.indexOf('lion'));
console.log(testingDoubleList.indexOf('peacock'));
console.log(testingDoubleList.addToBack('bird'));
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.indexOf('lion'));
console.log(testingDoubleList.indexOf('peacock'));
console.log(testingDoubleList.indexOf('bird'));

//testing addToFront function
console.log(testingDoubleList.addToFront('Giraffe'));
console.log(testingDoubleList.indexOf('Giraffe'));
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.indexOf('lion'));
console.log(testingDoubleList.indexOf('peacock'));
console.log(testingDoubleList.indexOf('bird'));
console.log(testingDoubleList.addToFront('Dinosaur'));
console.log(testingDoubleList.indexOf('Dinosaur'));
console.log(testingDoubleList.indexOf('Giraffe'));
console.log(testingDoubleList.indexOf('elephant'));
console.log(testingDoubleList.indexOf('lion'));
console.log(testingDoubleList.indexOf('peacock'));
console.log(testingDoubleList.indexOf('bird'));
