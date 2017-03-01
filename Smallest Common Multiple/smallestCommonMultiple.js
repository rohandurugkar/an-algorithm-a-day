function smallestCommons(arr) {
  var first = arguments[0][0];
  var second = arguments[0][1];

  var divisorsInRange = [];
  var ctr = 0;
  if(first < second){
    for(var i = first; i <= second; i++){
      divisorsInRange.push(first + ctr);
      ctr++;
    }
    divisorsInRange.reverse();
    } else {
    for(var j = first; j >= second; j--){
      divisorsInRange.push(first - ctr);
      ctr++;
    }
  }

  function gcd(a, b){
    if(b === 0){
      return a;
    }
    else
      return gcd(b, a%b);
  }

    var lcm = divisorsInRange[0];
    for(var k = 1; k < divisorsInRange.length; k++){
      var GCD = gcd(lcm, divisorsInRange[k]);
      lcm = (lcm * divisorsInRange[k]) / GCD;
    }
    return lcm;
}

var input = [2, 5];

alert("The smallest common multiple of " + input + " is " + smallestCommons(input));
