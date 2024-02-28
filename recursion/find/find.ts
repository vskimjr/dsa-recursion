/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {

  if (arr.length === 0) return false;
  if(arr[0] === val) return true;
//TODO: use .slice(1) instead of mutating arr
  arr.shift();
  return find(arr,val);
  // console.log("arr1: ", arr)

  // if (arr[0] === val){
  //   console.log("arr[0]: ", arr[0])
  //   console.log("initial searched val", val)
  //   console.log("SANITY", arr[0]===val)
  //   return true;
  // } else {
  //   arr.shift();
  //   return find(arr, val);

  // }
}

export { find };