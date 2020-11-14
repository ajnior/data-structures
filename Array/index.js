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
  max() {
    let max = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] > max) max = this.data[i];
    }
    return max;
  }
  intersect(arr) {
    let inter = new Array();
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // remove push
        if (this.data[i] == arr[j]) inter.push(arr[j]);
      }
    }
    return inter;
  }
  reverse() {
    for (let i = this.length - 2; i > -1; i--) {
      if (this.data[i]) {
        this.push(this.data[i]);
        this.removeAt(i);
      }
    }
    return this.data;
  }
}
