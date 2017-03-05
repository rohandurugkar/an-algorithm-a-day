function spinalCase(str) {

  var splits = str.split('');

  for(var i = 0; i < splits.length; i++){
    if(/[a-z]/g.test(splits[i]) && /[A-Z]/g.test(splits[i+1])){
      var int1 = splits.slice(0, i + 1);
      var int2 = splits.slice(i + 1, splits.length);
      var int3 = [' '];
      splits = int1.concat(int3, int2);
      console.log(splits);
    }
  }

  str = splits.join('');

  str = str.replace(/ /gi, '-').replace(/_/gi, '-');
  str = str.toLowerCase();
  return str;

}

var input = "thisIsSpinalTap";

alert("Spinal tap case for " + input + " is " + spinalCase(input));
