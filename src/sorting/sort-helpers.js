'use strict';

function swap(arr, idx1, idx2) {
   var first = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = first;
   return arr;
}

function merge(arr1, arr2) {

}

function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
};
