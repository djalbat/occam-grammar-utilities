"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import precedenceMixins from "./mixins/precedence";

class NonTerminalNode extends NonTerminalNodeBase {
  ///
}

Object.assign(NonTerminalNode.prototype, precedenceMixins);

export default NonTerminalNode;
