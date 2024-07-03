function createNode(data = null, next = null) {
  return { data, next };
}

function createLinkedList() {
  let headNode = null;
  let length = 0;
  function prepend(data) {
    const newNode = createNode(data, headNode);
    headNode = newNode;
    length++;
  }
  function append(data) {
    if (headNode === null) {
      prepend(data);
    } else {
      const newNode = createNode(data);
      let current = headNode;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      length++;
    }
  }
  function pop() {
    if (headNode === null) {
      return "Empty List";
    } else if (headNode.next === null) {
      headNode === null;
    } else {
      let current = headNode;
      let prev = null;
      while (current.next !== null) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      length--;
    }
  }
  function size() {
    return length;
  }
  function head() {
    if (headNode !== null) {
      return headNode.data;
    } else {
      return "Empty List";
    }
  }
  function tail() {
    if (headNode !== null) {
      let current = headNode;
      while (current.next !== null) {
        current = current.next;
      }
      return current.data;
    } else {
      return "Empty List";
    }
  }
  function at(index) {
    if (headNode !== null) {
      let current = headNode;
      if (index < length) {
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
        return current.data;
      } else {
        return "This index doesn't exist";
      }
    } else {
      return "Empty List";
    }
  }
  function contains(value) {
    if (headNode === null) {
      return "Empty List";
    } else {
      current = headNode;
      while (current !== null) {
        if (current.data === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  function find(value) {
    if (headNode === null) {
      return "Empty List";
    } else {
      current = headNode;
      index = 0;
      while (current !== null) {
        if (current.data === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return null;
    }
  }
  function toString() {
    string = "";
    current = headNode;
    while (current !== null) {
      string = string + `( ${current.data} ) -> `;
      current = current.next;
    }
    string = string + "null";
    return string;
  }
  function removeAt(index) {
    if (headNode !== null) {
      if (index == 0) {
        headNode = headNode.next;
        length--;
        return true;
      } else if (index < length) {
        let current = headNode;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        length--;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    removeAt,
  };
}

const list = createLinkedList();
list.append(10);
list.append(20);
list.prepend(30);
list.prepend(40);
list.append(50);
list.append(60);
list.prepend(70);
list.append(80);
list.pop();
list.removeAt(0);
console.log("List Size: " + list.size());
console.log("List Head: " + list.head());
console.log("List Tail: " + list.tail());
console.log("List index 5: " + list.at(5));
console.log("List index 50: " + list.at(50));
console.log(list.contains(40));
console.log(list.contains(7));
console.log(list.find(30));
console.log(list.find(7));
console.log(list.toString());
