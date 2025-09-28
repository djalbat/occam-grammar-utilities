"use strict";

import { CommonParser } from "occam-parsers";

import NonTerminalNodeMap from "./nonTerminalNodeMap";

export default class ExampleParser extends CommonParser {
  static NonTerminalNodeMap = NonTerminalNodeMap;
}