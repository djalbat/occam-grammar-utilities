"use strict";

import { CommonLexer, EndOfLineSignificantToken } from "occam-lexers";

export default class ExampleLexer extends CommonLexer {
  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = null;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromEntries(entries) { return CommonLexer.fromEntries(ExampleLexer, entries); }
}
