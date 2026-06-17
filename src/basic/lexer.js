"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineSignificantToken } from "occam-lexers";

export default class BasicLexer extends CommonLexer {
  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
