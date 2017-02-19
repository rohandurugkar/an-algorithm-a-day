var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
var indexOfMinimum = function(array, startIndex){
  var minIndex = startIndex;
  var minValue = array[startIndex];

  for(var i = minIndex + 1; i < array.length; i++){
    if(array[i] < minValue){
      minIndex = i;
    }
  }
  return i;
}
