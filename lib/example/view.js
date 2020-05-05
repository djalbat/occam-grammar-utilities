"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

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

var _eliminateLeftRecursion = _interopRequireDefault(require("../eliminateLeftRecursion"));

var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("../removeOrRenameIntermediateNodes"));

var _removeOrRenameIntermediateNodes2 = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    value: function getParseTree(rules) {
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
          basicParser = _occamParsers.BasicParser.fromRules(rules),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

        if (removeOrRenameIntermediateNodesCheckboxChecked) {
          (0, _removeOrRenameIntermediateNodes["default"])(node);
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
        var rules;
        rules = this.bnfParser.rulesFromTokens(tokens);
        (0, _eliminateLeftRecursion["default"])(rules);
        var multiLine = true,
            rulesString = (0, _rules.rulesAsString)(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.setAdjustedBNF(adjustedBNF);
        var parseTree = this.getParseTree(rules);
        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearParseTree();
        this.clearAdjustedBNF();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Grammar utilities example"), /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical pattern"), /*#__PURE__*/React.createElement(_lexicalPattern["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Adjusted BNF"), /*#__PURE__*/React.createElement(_adjustedBNF["default"], {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(_vertical["default"], null), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement(_paragraph["default"], null, /*#__PURE__*/React.createElement(_removeOrRenameIntermediateNodes2["default"], {
        onChange: changeHandler,
        checked: true
      }), "Remove or rename intermediate nodes")))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
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

      exampleView.initialise(properties);
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiYm5mTGV4ZXIiLCJibmZQYXJzZXIiLCJydWxlcyIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImZyb21SdWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzRnJvbVRva2VucyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImdldFBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJBZGp1c3RlZEJORiIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkNsYXNzIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsIkJORlBhcnNlciIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7O0FBcUJuQixnQkFBWUMsb0JBQVosRUFBa0NDLFFBQWxDLEVBQTRDQyxTQUE1QyxFQUF1RDtBQUFBOztBQUFBOztBQUNyRCw4QkFBTUYsb0JBQU47O0FBRHFEOztBQUFBLHFFQUp0QyxTQUlzQzs7QUFBQSw0RUFGL0IsUUFFK0I7O0FBR3JELFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFKcUQ7QUFLdEQ7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsVUFBTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBQXZCO0FBQUEsVUFDTUMsVUFBVSxHQUFHQywyQkFEbkI7QUFBQSxVQUVNQyxNQUFNLEdBQUdKLGNBRmY7QUFBQSxVQUVnQztBQUMxQkssTUFBQUEsT0FBTyxHQUFHLENBQ1I7QUFBRUQsUUFBQUEsTUFBTSxFQUFOQTtBQUFGLE9BRFEsRUFFUjtBQUFFRixRQUFBQSxVQUFVLEVBQVZBO0FBQUYsT0FGUSxDQUhoQjtBQUFBLFVBT01JLFVBQVUsR0FBR0Msd0JBQVdDLFdBQVgsQ0FBdUJILE9BQXZCLENBUG5CO0FBQUEsVUFRTUksV0FBVyxHQUFHQywwQkFBWUMsU0FBWixDQUFzQmIsS0FBdEIsQ0FScEI7QUFBQSxVQVNNYyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQVRoQjtBQUFBLFVBVU1DLE1BQU0sR0FBR1IsVUFBVSxDQUFDUyxRQUFYLENBQW9CSCxPQUFwQixDQVZmO0FBQUEsVUFXTUksSUFBSSxHQUFHUCxXQUFXLENBQUNRLEtBQVosQ0FBa0JILE1BQWxCLENBWGI7O0FBYUEsVUFBSUUsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsWUFBTUUsOENBQThDLEdBQUcsS0FBS0MsZ0RBQUwsRUFBdkQ7O0FBRUEsWUFBSUQsOENBQUosRUFBb0Q7QUFDbEQsMkRBQWdDRixJQUFoQztBQUNEOztBQUVEakIsUUFBQUEsU0FBUyxHQUFHaUIsSUFBSSxDQUFDSSxXQUFMLENBQWlCTixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT2YsU0FBUDtBQUNEOzs7bUNBRWM7QUFDYixXQUFLc0IsYUFBTDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJO0FBQ0YsWUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFlBQ01ULE1BQU0sR0FBRyxLQUFLbEIsUUFBTCxDQUFjNEIsYUFBZCxDQUE0QkYsR0FBNUIsQ0FEZjtBQUdBLFlBQUl4QixLQUFKO0FBRUFBLFFBQUFBLEtBQUssR0FBRyxLQUFLRCxTQUFMLENBQWU0QixlQUFmLENBQStCWCxNQUEvQixDQUFSO0FBRUEsZ0RBQXVCaEIsS0FBdkI7QUFFQSxZQUFNNEIsU0FBUyxHQUFHLElBQWxCO0FBQUEsWUFDTUMsV0FBVyxHQUFHLDBCQUFjN0IsS0FBZCxFQUFxQjRCLFNBQXJCLENBRHBCO0FBQUEsWUFFTUUsV0FBVyxHQUFHRCxXQUZwQixDQVZFLENBWWdDOztBQUVsQyxhQUFLRSxjQUFMLENBQW9CRCxXQUFwQjtBQUVBLFlBQU03QixTQUFTLEdBQUcsS0FBSytCLFlBQUwsQ0FBa0JoQyxLQUFsQixDQUFsQjtBQUVBLGFBQUtpQyxZQUFMLENBQWtCaEMsU0FBbEI7QUFDRCxPQW5CRCxDQW1CRSxPQUFPaUMsS0FBUCxFQUFjO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsYUFBS0csY0FBTDtBQUVBLGFBQUtDLGdCQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBQUEsVUFDTWxCLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1Ca0IsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEdEI7QUFHQSxhQUFRLGNBRU4sb0JBQUMsbUJBQUQsb0NBRk0sZUFLTixvQkFBQyxzQkFBRCxxQkFDRSxvQkFBQyxvQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCwwQkFERixlQUlFLG9CQUFDLDBCQUFEO0FBQXFCLFFBQUEsT0FBTyxFQUFFRDtBQUE5QixRQUpGLGVBS0Usb0JBQUMsc0JBQUQsY0FMRixlQVFFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFSRixlQVNFLG9CQUFDLHNCQUFELHVCQVRGLGVBWUUsb0JBQUMsdUJBQUQ7QUFBcUIsUUFBQSxPQUFPLEVBQUVBO0FBQTlCLFFBWkYsQ0FERixlQWVFLG9CQUFDLG9CQUFELE9BZkYsZUFnQkUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQsa0JBREYsZUFJRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFKRixlQUtFLG9CQUFDLHNCQUFELHFCQUxGLGVBUUUsb0JBQUMscUJBQUQsT0FSRixlQVNFLG9CQUFDLHFCQUFELHFCQUNFLG9CQUFDLDRDQUFEO0FBQXlDLFFBQUEsUUFBUSxFQUFFakIsYUFBbkQ7QUFBa0UsUUFBQSxPQUFPO0FBQXpFLFFBREYsd0NBVEYsQ0FoQkYsQ0FMTSxDQUFSO0FBc0NEOzs7K0JBRVVnQixVLEVBQVk7QUFDckIsV0FBS0csYUFBTDtBQUVBLFVBQU1sQixHQUFHLEdBQUcsS0FBS21CLFVBQWpCO0FBQUEsVUFBNkI7QUFDdkI3QixNQUFBQSxPQUFPLEdBQUcsS0FBSzhCLGNBRHJCO0FBQUEsVUFDcUM7QUFDL0IxQyxNQUFBQSxjQUFjLEdBQUcsS0FBSzJDLHFCQUY1QixDQUhxQixDQUs4Qjs7QUFFbkQsV0FBS0MsTUFBTCxDQUFZdEIsR0FBWjtBQUVBLFdBQUt1QixVQUFMLENBQWdCakMsT0FBaEI7QUFFQSxXQUFLa0MsaUJBQUwsQ0FBdUI5QyxjQUF2QjtBQUVBLFdBQUtzQyxZQUFMO0FBQ0Q7Ozs4QkFJZ0JTLEssRUFBT1YsVSxFQUFZO0FBQ2xDLFVBQU16QyxRQUFRLEdBQUdvRCxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLFVBQ01wRCxTQUFTLEdBQUdxRCx3QkFBVUQsV0FBVixFQURsQjtBQUFBLFVBRU1FLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQk4sS0FBbEIsRUFBeUJWLFVBQXpCLEVBQXFDekMsUUFBckMsRUFBK0NDLFNBQS9DLENBRnBCOztBQUlBc0QsTUFBQUEsV0FBVyxDQUFDRyxVQUFaLENBQXVCakIsVUFBdkI7QUFFQSxhQUFPYyxXQUFQO0FBQ0Q7Ozs7RUFoSytCQyxhOzs7O2dCQUFiMUQsSSxhQXNKRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIsIEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcbmltcG9ydCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIGZyb20gXCIuLi9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgZmluZFJ1bGVCeU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5pdGlhbEJORiA9IGBcbiAgXG4gICAgZXhwcmVzc2lvbiAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG4gIFxuICAgICAgICAgICAgICAgICAgfCB0ZXJtXG4gIFxuICAgICAgICAgICAgICAgICAgO1xuICBcbiAgICBvcGVyYXRvciAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG4gICAgXG4gICAgdGVybSAgICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuICAgIFxuICBgO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCIoMSsyKS8zXCI7XG5cbiAgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCJcXFxcZCt8LlwiO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBibmZMZXhlciwgYm5mUGFyc2VyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5ibmZMZXhlciA9IGJuZkxleGVyO1xuICAgIHRoaXMuYm5mUGFyc2VyID0gYm5mUGFyc2VyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHJ1bGVzKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy5ibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSB0aGlzLmJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5pbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGJuZkxleGVyLCBibmZQYXJzZXIpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXX0=