function sumFibs(num) {

  var fibArray = [1, 1];
  var result = 0;

  for(var i = 0; i < num; i++){
    var sum = fibArray[i] + fibArray[i+1];
    if(sum <= num){
    fibArray.push(sum);
    }
  }

  fibArray.forEach(function(element){

    if(element % 2 === 1){
      result += element;
    }
  });

  return result;
}

var n = 1000;
alert("The sum of odd Fibonacci numbers below " + n + " is " + sumFibs(n));
