/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if(str.length <= 1) return true;
  if(str[0] !== str[str.length-1]) return false;

  return isPalindrome(str.slice(1, str.length-1))
  // let strArr = str.split('');

  // if(strArr[0] === strArr[str.length-1]){
  //   strArr.shift()
  //   strArr.pop()
  //   return isPalindrome(strArr.join(''))
  // } else {
  //   return false;
  // }
}

export { isPalindrome };