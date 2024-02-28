/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if (str.length === 0) return str;

  // console.log("str[0]", str[0]);
  return str[0] + everyOther(str.slice(2))

}

export { everyOther };