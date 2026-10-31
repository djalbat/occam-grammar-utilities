"use strict";

import { CommonParser } from "occam-parsers";

import NonTerminalNode from "../nonTerminalNode";
import NonTerminalNodeMap from "./nonTerminalNodeMap";

export default class BasicParser extends CommonParser {
  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = NonTerminalNode;
}
