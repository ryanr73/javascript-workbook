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
  // Your code here
  for (let i=0; i < ari.length; i++) {
    if (ari[i] > ari[i + 1]) {
      turn = true;
      ari[i+1] = ari[i+1] - ari[i];
      ari[i] = ari[i] + ari[i+1];
      ari[i+1] = ari[i] - ari[i+1];
    }
  }
  if (turn) {
    let turn = false;
    return bubbleSort(ari);
  } else {
    return ari;
  }
}

console.log(arr);
console.log(bubbleSort(arr));

// function mergeSort() {
//   // Your code here
//
// }

// function binarySearch() {
//   // Your code here
//
// }

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
