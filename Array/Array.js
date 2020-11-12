class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(elem) {
    this.data[this.length] = elem;
    this.length++;
    return this.data;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  insertAt(elem, ndx) {
    for (let i = this.length; i >= ndx; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
    this.data[ndx] = elem;
  }
  deleteAt() {}
  getElementAtIndex() {}
}

const arr = new Array();

arr.push("string 1");
arr.push("string 2");
arr.push("string 3");
// arr.pop();
arr.insertAt("string 4", 1);

console.log(arr);
