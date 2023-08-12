"use strict";

if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (callback, thisArg) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (callback.call(thisArg, this[i], i, this)) return i;
    }
    return -1;
  };
}

export { default as eliminateLeftRecursion } from "./eliminateLeftRecursion";

export { default as ExampleLexer } from "./lexer/example";
export { default as ExampleParser } from "./parser/example";
