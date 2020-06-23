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

var _rule = require("../utilities/rule");

var _constants = require("../constants");

var _rules = require("../utilities/rules");

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

    _defineProperty(_assertThisInitialized(_this), "initialBNF", "expression    ::= expression operator expression\n\n                | \"(\" expression \")\"\n\n                | term\n\n                ;\n\noperator      ::= \"+\" | \"-\" | \"/\" | \"*\" ;\n\nterm          ::= /\\d+/ ;");

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
        var rules = this.bnfParser.rulesFromTokens(tokens),
            startRule = (0, _rules.startRuleFromRules)(rules);
        var ruleMap = (0, _rules.ruleMapFromRules)(rules);
        startRule = (0, _index.eliminateLeftRecursion)(startRule, ruleMap);
        rules = (0, _rules.rulesFromStartRuleAndRuleMap)(startRule, ruleMap);
        var multiLine = true,
            parseTree = this.getParseTree(startRule, ruleMap),
            rulesString = (0, _rules.rulesAsString)(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.setParseTree(parseTree);
        this.setAdjustedBNF(adjustedBNF);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlZpZXciLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImJuZkxleGVyIiwiYm5mUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwiZ2V0UGFyc2VUcmVlIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckFkanVzdGVkQk5GIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJDbGFzcyIsInByb3BlcnRpZXMiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiQk5GUGFyc2VyIiwiZXhh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ekUsUUFERix3Q0FURixDQURGLENBbEJGLENBTE0sQ0FBUjtBQTBDRDs7O2lDQUVZO0FBQ1gsV0FBS21CLGFBQUw7QUFFQSxVQUFNbEIsR0FBRyxHQUFHLEtBQUttQixVQUFqQjtBQUFBLFVBQTZCO0FBQ3ZCN0IsTUFBQUEsT0FBTyxHQUFHLEtBQUs4QixjQURyQjtBQUFBLFVBQ3FDO0FBQy9CekMsTUFBQUEsY0FBYyxHQUFHLEtBQUswQyxxQkFGNUIsQ0FIVyxDQUt3Qzs7QUFFbkQsV0FBS0MsTUFBTCxDQUFZdEIsR0FBWjtBQUVBLFdBQUt1QixVQUFMLENBQWdCakMsT0FBaEI7QUFFQSxXQUFLa0MsaUJBQUwsQ0FBdUI3QyxjQUF2QjtBQUVBLFdBQUtxQyxZQUFMO0FBQ0Q7Ozs4QkFJZ0JTLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1wRCxRQUFRLEdBQUdxRCxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLFVBQ01yRCxTQUFTLEdBQUdzRCx3QkFBVUQsV0FBVixFQURsQjtBQUFBLFVBRU1FLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQlAsS0FBbEIsRUFBeUJDLFVBQXpCLEVBQXFDcEQsUUFBckMsRUFBK0NDLFNBQS9DLENBRnBCOztBQUlBdUQsTUFBQUEsV0FBVyxDQUFDRyxVQUFaO0FBRUEsYUFBT0gsV0FBUDtBQUNEOzs7O0VBbEsrQkMsYTs7OztnQkFBYjNELEksYUF3SkYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIsIEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNBc1N0cmluZywgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQk5GID0gYGV4cHJlc3Npb24gICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgIDtcblxub3BlcmF0b3IgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG50ZXJtICAgICAgICAgIDo6PSAvXFxcXGQrLyA7YDtcblxuICBpbml0aWFsQ29udGVudCA9IFwiKDErMikvM1wiO1xuXG4gIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiXFxcXGQrfC5cIjtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgYm5mTGV4ZXIsIGJuZlBhcnNlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMuYm5mTGV4ZXIgPSBibmZMZXhlcjtcbiAgICB0aGlzLmJuZlBhcnNlciA9IGJuZlBhcnNlcjtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSBVTkFTU0lHTkVEX0VOVFJZLFxuICAgICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICAgIHsgY3VzdG9tIH0sXG4gICAgICAgICAgICB7IHVuYXNzaWduZWQgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzID0gdGhpcy5ibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBHcmFtbWFyIHV0aWxpdGllcyBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5pbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGJuZkxleGVyLCBibmZQYXJzZXIpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdfQ==