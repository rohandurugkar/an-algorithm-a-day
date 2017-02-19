var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minIndex = startIndex;
  var minValue = array[startIndex];

  for(var i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function(array) {
  var tempMin;

  for(var j = 0; j < array.length; j++) {
    tempMin = indexOfMinimum(array, j);
    swap(array, j, tempMin);
  }
};

var array = [8, 22, 3, 9, 7, 0, -87];
selectionSort(array);

alert("The sorted array is " + array);
