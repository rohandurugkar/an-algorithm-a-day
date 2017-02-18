var inputArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var lookFor = 97;

alert("Element was found at " + binarySearch(inputArray, lookFor) + ".");

function binarySearch(inputArray, lookFor) {
  var min = 0;
  var max = inputArray.length - 1;
  var mid;

  while(max >= min) {
    mid = Math.floor((max + min)/2);
    if(inputArray[mid] === lookFor) {
        return mid;
    } else if(inputArray[mid] < lookFor) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
  }
  return -1;
}
