'use strict';

const swap = require('./sort-helpers').swap;

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}

function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var min = i;
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function insertionSort(arr) {

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
