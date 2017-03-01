//global variables for positioning of elements
var x = 5, y = 12, xSpace = 20, ySpace = 40;

//displays an array, element by element
var displayArray = function(array, yIndex, displayOffsetX, displayOffsetY) {
    var x = 5;

    fill(33, 33, 173);
    textFont(createFont("monospace"), 15);

    for(var i = 0; i < array.length; i++) {
        text(array[i], x + displayOffsetX, y + displayOffsetY);
        x += xSpace;
    }
};

//swap two elements
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//find index of the minimum element
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

//selection sort algorithm
var selectionSort = function(array, displayOffsetX, displayOffsetY) {
    var indexMin = 0;
    var yIndex = 20;

    for(var j = 0; j < array.length; j++){
        displayArray(array, yIndex, displayOffsetX, displayOffsetY);
        indexMin = indexOfMinimum(array, j);

        if(j !== indexMin){
            line(indexMin * xSpace + 10 + displayOffsetX, y + 5 + displayOffsetY, j * xSpace + 10 + displayOffsetX, y + 25 + displayOffsetY);
        }

        swap(array, j, indexMin);
        y += ySpace;
    }
};

//x and y axis lines
line(0, 200, 1000000, 400);
line(200, 0, 450, 100000);

//1
var array = [5, 4, 3, 2, 1];
selectionSort(array, 200, 10);

//2
var array = [5, 4, 4, 1, 1];
selectionSort(array, 0, 10);

//3
var array = [1, 2, 3, 5, 2];
selectionSort(array, 0, -390);

//4
var array = [1, 2, -3, 5, 0];
selectionSort(array, 200, -390);
