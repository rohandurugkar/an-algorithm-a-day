var factorial = function(n) {
  if(n === 0){
    return 1;
  }
  return n * factorial(n-1);
};

var n = 10;
alert(n + "!= " + factorial(n));
