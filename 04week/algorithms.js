'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
let turn = false;
for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(ari) {
  //bubblesort will sort passed array
  // compare array [n] to array [n+1]
  //if numbers are larger the turn/reverse order
  for (let i=0; i < ari.length; i++) {
    if (ari[i] > ari[i + 1]) {
      turn = true;
      ari[i+1] = ari[i+1] - ari[i];
      ari[i] = ari[i] + ari[i+1];
      ari[i+1] = ari[i] - ari[i+1];
    }
  }
  if (turn) {
    turn = false;
    return bubbleSort(ari);
  } else {
    return ari;
  }
}

console.log(arr);
console.log(bubbleSort(arr));

function mergeSort(ari) {
  // is a recursive algoritm
  // function is to divide in half and continues until two elements left and rightSide
  // then orders the smaller arrays
  //finally starts to merge arrays again and sorts
  if (ari.length < 2) return ari;
  let middle = Math.floor(ari.length / 2);
  let leftSide = ari.slice(0, middle);
  let rightSide = ari.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge (left, right) {
  let result = [];
  while (left.length && right.length)
    result.push(left[0] < right[0]? left.shift() : right.shift());
  return result.concat(left.length? left : right);
}

console.log(arr);
console.log(mergeSort(arr));

function binarySearch(ari, item, start=0, end = ari.length-1) {
  // Your code here
  let middle = Math.floor(start + (end-start)/2);
    console.log(start, end, middle, ari[middle]);
    if (item == ari[middle]) return middle;
    else if (start>=end) return false;
    else if (item < ari[middle]) return binarySearch(ari, item, start, middle-1);
    else if (item > ari[middle]) return binarySearch(ari, item, middle+1, end);
  }

  console.log(arr);
  console.log(binarySearch(arr, 75));


// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
