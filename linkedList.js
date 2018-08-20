//write an algorithm for linked lists

//constructor function for a linked list
function LinkedList(){
  let length = 0;
  let head = null;

  //constructor function for a node
  const Node = function(element){
    this.element = element;
    this.next = null;
  };

  //function to get the size of the linked list
  this.size = () => {
    return length;
  };

  //function to get the head of the linked list
  this.head = () => {
    return head;
  };

  //function to add a node to the end of a list
  this.add = (element) => {
    let node = new Node(element);
    if (head === null) {
        head = node;
    } else {
        let currentNode = head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    length++;
  };

  //function to remove an element from the linked list
  this.remove = (element) => {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
        head = currentNode.next;
    } else {
        while (currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    }
    length--;
    console.log(`${element} has been removed`);
    return `${element} has been removed`;
  };

  //function to check if the length of the linked list is zero
  this.isEmpty = () => {
      return this.length === 0;
  }

  //function to find the index of an element in the linked list. 
  this.indexOf = (element) => {
    let index = 0;
    let currentNode = head;
    while(currentNode.element !== element) {
        currentNode = currentNode.next;
        index++;
        if (!currentNode) {
            return `${element} does not exist in the list`
        }
    }
    return index;
  };

  //function to return the element at a given index in the list
  this.elementAt = (index) => {
    let currentNode = head;
    let position = 0;
    while(currentNode && position < index) {
        currentNode = currentNode.next;
        position++;
    }
    if (position === index) {
        return currentNode.element;
    } else {
        return null;
    }
  }

  //function to add an element at a given index
  this.addAt = (element, index) => {
    let counter = 0;
    let currentNode = head;
    let node = new Node(element);
    while(counter < index - 1) {
        currentNode = currentNode.next;
        counter++;
    }
    let tempNode = currentNode.next;
    currentNode.next = node;
    node.next = tempNode;
    length++;
    return `${element} has been added at index ${index}`;
  };

  //function to remove an element at a given index
  this.removeAt = (index) => {
    let counter = 0;
    let currentNode = head;
    let previousNode;
    while(counter < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        counter++;
    }
    let nextNode = currentNode.next;
    previousNode.next = nextNode;
    length--;
    return `${currentNode.element} at index ${index} has been removed` ;
  };

};

const testList = new LinkedList();
testList.add('kitten');
testList.add('Puppy');
testList.add('Horse');
testList.add('Cat');
testList.add('Parrot');
testList.add('Monkey');
testList.add('Donkey');


console.log(testList.size());
console.log(testList.head());
console.log(testList.isEmpty());
console.log(testList.indexOf('Horse'));
console.log(testList.indexOf('Donkey'));
console.log(testList.indexOf('Parrot'));

console.log(testList.remove('Parrot'));
console.log(testList.elementAt(2));
console.log(testList.addAt('Whale', 1));
console.log(testList.indexOf('Whale'));
console.log(testList.head());
console.log(testList.indexOf('Cat'));
console.log(testList.removeAt(4));
console.log(testList.indexOf('Cat'));
