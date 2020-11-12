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
  removeAt(ndx) {
    for (let i = ndx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  indexOf(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == value) return i;
    }
    return -1;
  }
}
