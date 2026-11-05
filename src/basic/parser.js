"use strict";

import { CommonParser } from "occam-parsers";

import NonTerminalNodeMap from "./nonTerminalNodeMap";

export default class BasicParser extends CommonParser {
  static NonTerminalNodeMap = NonTerminalNodeMap;
}
