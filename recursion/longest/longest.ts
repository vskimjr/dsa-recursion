import { LLNodeStr } from "../common/ll";

// const words = new LLStr(["hello", "hi", "hola"]);
// longest(new LLStr(words));  // 5
/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if(words === null) return 0;

  return Math.max(words.val.length, longest(words.next))

}

export { longest };
