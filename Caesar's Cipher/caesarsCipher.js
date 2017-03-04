
function rot13(str) {
  var result = '';

  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) == 32){
      result += ' ';
    }
    else if (str.charCodeAt(i) == 33){
      result += '!';
    }
    else if (str.charCodeAt(i) == 63){
      result += '?';
    }
    else if (str.charCodeAt(i) == 46){
      result += '.';
    }
    else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90){
      result += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) >= 65){
      result += String.fromCharCode(str.charCodeAt(i) + 13);
    }
  }
  return result;
}

var input = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
alert("Decoding: " + input + " Output: " + rot13(input));
