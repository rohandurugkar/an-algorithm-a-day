var insert = function(array, rightIndex, value) {
  var temp;
  for(temp = rightIndex; (temp >= 0 && array[temp] > value); temp--) {
    array[temp + 1] = array[temp];
  }
  array[temp + 1] = value;
}

var insertionSort = function(array) {
  for(var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
}

var array = [2, 42, 33, 9, 8, 0, -12];
insertionSort(array);

alert("The sorted array is [" + array + "].");
