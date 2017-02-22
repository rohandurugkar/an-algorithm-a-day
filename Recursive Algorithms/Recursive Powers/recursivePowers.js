var power = function(x, n) {
  //base case
  if(n === 0) {
    return 1;
  }
  //recursive case, n is negative
  if(n < 0){
    return 1/power(x, -n);
  }
  //recursive case, n is odd
  if(n % 2 !== 0) {
    return power(x, n-1) * x;
  }
  //recursive case, n is even
  if(n % 2 === 0){
    var y = power(x, n/2);
    return y * y;
  }
}

alert("The result is " + power(2, 8));
