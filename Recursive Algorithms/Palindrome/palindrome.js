var isPalindrome = function(str){
  if(str.length === 0 || str.length === 1)
    return 'Yes.';

  if(str.slice(0,1) !== str.slice(-1))
    return 'No.';
  else return 'Yes.';

  return isPalindrome(str.slice(0, -1));
}

var str = 'levels';
alert("Is " + str + " a palindrome? " + isPalindrome(str));
