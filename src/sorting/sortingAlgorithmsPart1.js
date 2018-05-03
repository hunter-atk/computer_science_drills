'use strict';

const swap = function swap(arr, idx1, idx2) {
   var first = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = first;
   return arr;
}

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

function insertionSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
