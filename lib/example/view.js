"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _necessary = require("necessary");

var _easyLayout = require("easy-layout");

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

var _index = require("../index");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _paragraph = _interopRequireDefault(require("./paragraph"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));

var _adjustedBNF = _interopRequireDefault(require("./textarea/adjustedBNF"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));

var _rules = require("../utilities/rules");

var _rule = require("../utilities/rule");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var first = _necessary.arrayUtilities.first;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View(selectorOrDOMElement, bnfLexer, bnfParser) {
    var _this;

    _classCallCheck(this, View);

    _this = _super.call(this, selectorOrDOMElement);

    _defineProperty(_assertThisInitialized(_this), "initialBNF", "\n  \n    expression    ::= expression operator expression\n  \n                  | \"(\" expression \")\"\n  \n                  | term\n  \n                  ;\n  \n    operator      ::= \"+\" | \"-\" | \"/\" | \"*\" ;\n    \n    term          ::= /\\d+/ ;\n    \n  ");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "(1+2)/3");

    _defineProperty(_assertThisInitialized(_this), "initialLexicalPattern", "\\d+|.");

    _this.bnfLexer = bnfLexer;
    _this.bnfParser = bnfParser;
    return _this;
  }

  _createClass(View, [{
    key: "getParseTree",
    value: function getParseTree(startRule, ruleMap) {
      var parseTree = null;

      var lexicalPattern = this.getLexicalPattern(),
          unassigned = _constants.UNASSIGNED_ENTRY,
          custom = lexicalPattern,
          ///
      entries = [{
        custom: custom
      }, {
        unassigned: unassigned
      }],
          basicLexer = _occamLexers.BasicLexer.fromEntries(entries),
          basicParser = new _occamParsers.BasicParser(startRule, ruleMap),
          ///
      content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

        if (removeOrRenameIntermediateNodesCheckboxChecked) {
          (0, _index.removeOrRenameIntermediateNodes)(node);
        }

        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      this.changeHandler();
    }
  }, {
    key: "changeHandler",
    value: function changeHandler() {
      try {
        var bnf = this.getBNF(),
            tokens = this.bnfLexer.tokensFromBNF(bnf);
        var rules, startRule;
        rules = this.bnfParser.rulesFromTokens(tokens);
        var firstRule = first(rules);
        startRule = firstRule; ///

        var startRuleName = startRule.getName(),
            ruleMap = rules.reduce(function (ruleMap, rule) {
          var ruleName = rule.getName();
          ruleMap[ruleName] = rule;
          return ruleMap;
        }, {});
        (0, _index.eliminateLeftRecursion)(startRule, ruleMap);
        startRule = ruleMap[startRuleName];
        var multiLine = true,
            rulesString = (0, _rules.rulesAsString)(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.setAdjustedBNF(adjustedBNF);
        var parseTree = this.getParseTree(startRule, ruleMap);
        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearParseTree();
        this.clearAdjustedBNF();
      }
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Grammar utilities example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical pattern"), /*#__PURE__*/React.createElement(_lexicalPattern["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Adjusted BNF"), /*#__PURE__*/React.createElement(_adjustedBNF["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_paragraph["default"], null, /*#__PURE__*/React.createElement(_removeOrRenameIntermediateNodes["default"], {
        onChange: changeHandler,
        checked: true
      }), "Remove or rename intermediate nodes"))))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var bnf = this.initialBNF,
          ///
      content = this.initialContent,
          ///
      lexicalPattern = this.initialLexicalPattern; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalPattern(lexicalPattern);
      this.keyUpHandler();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _occamParsers.BNFParser.fromNothing(),
          exampleView = _easy.Element.fromClass(Class, properties, bnfLexer, bnfParser);

      exampleView.initialise();
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlZpZXciLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImJuZkxleGVyIiwiYm5mUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyQWRqdXN0ZWRCTkYiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkNsYXNzIiwicHJvcGVydGllcyIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJCTkZQYXJzZXIiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsSTs7Ozs7QUFxQm5CLGdCQUFZQyxvQkFBWixFQUFrQ0MsUUFBbEMsRUFBNENDLFNBQTVDLEVBQXVEO0FBQUE7O0FBQUE7O0FBQ3JELDhCQUFNRixvQkFBTjs7QUFEcUQ7O0FBQUEscUVBSnRDLFNBSXNDOztBQUFBLDRFQUYvQixRQUUrQjs7QUFHckQsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUpxRDtBQUt0RDs7OztpQ0FFWUMsUyxFQUFXQyxPLEVBQVM7QUFDL0IsVUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQU1DLGNBQWMsR0FBRyxLQUFLQyxpQkFBTCxFQUF2QjtBQUFBLFVBQ01DLFVBQVUsR0FBR0MsMkJBRG5CO0FBQUEsVUFFTUMsTUFBTSxHQUFHSixjQUZmO0FBQUEsVUFFZ0M7QUFDMUJLLE1BQUFBLE9BQU8sR0FBRyxDQUNSO0FBQUVELFFBQUFBLE1BQU0sRUFBTkE7QUFBRixPQURRLEVBRVI7QUFBRUYsUUFBQUEsVUFBVSxFQUFWQTtBQUFGLE9BRlEsQ0FIaEI7QUFBQSxVQU9NSSxVQUFVLEdBQUdDLHdCQUFXQyxXQUFYLENBQXVCSCxPQUF2QixDQVBuQjtBQUFBLFVBUU1JLFdBQVcsR0FBRyxJQUFJQyx5QkFBSixDQUFnQmIsU0FBaEIsRUFBMkJDLE9BQTNC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Ozs7RUFwTCtCQyxhOzs7O2dCQUFiakUsSSxhQTBLRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBCTkZMZXhlciwgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQmFzaWNQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzXCJcblxuaW1wb3J0IHsgcnVsZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQk5GID0gYFxuICBcbiAgICBleHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cbiAgXG4gICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcbiAgXG4gICAgICAgICAgICAgICAgICB8IHRlcm1cbiAgXG4gICAgICAgICAgICAgICAgICA7XG4gIFxuICAgIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcbiAgICBcbiAgICB0ZXJtICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG4gICAgXG4gIGA7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIlxcXFxkK3wuXCI7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGJuZkxleGVyLCBibmZQYXJzZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmJuZkxleGVyID0gYm5mTGV4ZXI7XG4gICAgdGhpcy5ibmZQYXJzZXIgPSBibmZQYXJzZXI7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy5ibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcyxcbiAgICAgICAgICBzdGFydFJ1bGU7XG5cbiAgICAgIHJ1bGVzID0gdGhpcy5ibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKTtcblxuICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IHJ1bGVzLnJlZHVjZSgocnVsZU1hcCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcblxuICAgICAgICAgICAgICByZXR1cm4gcnVsZU1hcDtcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBzdGFydFJ1bGUgPSBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIEdyYW1tYXIgdXRpbGl0aWVzIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5pbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgYm5mTGV4ZXIsIGJuZlBhcnNlcik7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuIl19