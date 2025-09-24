"use strict";

import { CommonParser } from "occam-parsers";

import NonTerminalNodeMap from "./nonTerminalNodeMap";

const defaultNonTerminalNode = null;

export default class ExampleParser extends CommonParser {
  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = defaultNonTerminalNode;
}