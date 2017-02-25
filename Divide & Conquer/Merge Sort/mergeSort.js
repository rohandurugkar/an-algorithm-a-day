var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    while(i < lowHalf.length && j < highHalf.length){
        if(lowHalf[i] < highHalf[j]){
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }
        k++;
    }

    while(j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }

    while(i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
};

var mergeSort = function(array, p, r) {
    if(p < r) {
        var q = Math.floor((p+r)/2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
};

var array = [2, 42, 33, 9, 8, 0, -12];
mergeSort(array, 0, array.length - 1);

alert("The sorted array is [" + array + "].");
