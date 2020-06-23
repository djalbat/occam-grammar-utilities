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

    _defineProperty(_assertThisInitialized(_this), "initialBNF", "\n  \nexpression            ::=   expression \"-\" division\n\n                        |   division\n\n                        ;\n\ndivision              ::=   division \"/\" base\n\n                        |   base\n\n                        ; \n\nbase                  ::=   \"(\" expression \")\"\n\n                        |   term\n\n                        ; \n    \nterm                  ::=   /\\d+/ ;\n    \n  ");

    _defineProperty(_assertThisInitialized(_this), "initialContent", "(1-2)/3");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlZpZXciLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImJuZkxleGVyIiwiYm5mUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmlyc3RSdWxlIiwibXVsdGlMaW5lIiwiZ2V0UGFyc2VUcmVlIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckFkanVzdGVkQk5GIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJDbGFzcyIsInByb3BlcnRpZXMiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiQk5GUGFyc2VyIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLEk7Ozs7O0FBNkJuQixnQkFBWUMsb0JBQVosRUFBa0NDLFFBQWxDLEVBQTRDQyxTQUE1QyxFQUF1RDtBQUFBOztBQUFBOztBQUNyRCw4QkFBTUYsb0JBQU47O0FBRHFEOztBQUFBLHFFQUp0QyxTQUlzQzs7QUFBQSw0RUFGL0IsUUFFK0I7O0FBR3JELFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFKcUQ7QUFLdEQ7Ozs7aUNBRVlDLFMsRUFBV0MsTyxFQUFTO0FBQy9CLFVBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxVQUFNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxVQUFVLEdBQUdDLDJCQURuQjtBQUFBLFVBRU1DLE1BQU0sR0FBR0osY0FGZjtBQUFBLFVBRWdDO0FBQzFCSyxNQUFBQSxPQUFPLEdBQUcsQ0FDUjtBQUFFRCxRQUFBQSxNQUFNLEVBQU5BO0FBQUYsT0FEUSxFQUVSO0FBQUVGLFFBQUFBLFVBQVUsRUFBVkE7QUFBRixPQUZRLENBSGhCO0FBQUEsVUFPTUksVUFBVSxHQUFHQyx3QkFBV0MsV0FBWCxDQUF1QkgsT0FBdkIsQ0FQbkI7QUFBQSxVQVFNSSxXQUFXLEdBQUcsSUFBSUMseUJBQUosQ0FBZ0JiLFNBQWhCLEVBQTJCQyxPQUEzQixDQVJwQjtBQUFBLFVBUTBEO0FBQ3BEYSxNQUFBQSxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQVRoQjtBQUFBLFVBVU1DLE1BQU0sR0FBR1AsVUFBVSxDQUFDUSxRQUFYLENBQW9CSCxPQUFwQixDQVZmO0FBQUEsVUFXTUksSUFBSSxHQUFHTixXQUFXLENBQUNPLEtBQVosQ0FBa0JILE1BQWxCLENBWGI7O0FBYUEsVUFBSUUsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsWUFBTUUsOENBQThDLEdBQUcsS0FBS0MsZ0RBQUwsRUFBdkQ7O0FBRUEsWUFBSUQsOENBQUosRUFBb0Q7QUFDbEQsc0RBQWdDRixJQUFoQztBQUNEOztBQUVEaEIsUUFBQUEsU0FBUyxHQUFHZ0IsSUFBSSxDQUFDSSxXQUFMLENBQWlCTixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT2QsU0FBUDtBQUNEOzs7bUNBRWM7QUFDYixXQUFLcUIsYUFBTDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFJO0FBQ0YsWUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFlBQ01ULE1BQU0sR0FBRyxLQUFLbEIsUUFBTCxDQUFjNEIsYUFBZCxDQUE0QkYsR0FBNUIsQ0FEZjtBQUdBLFlBQUlHLEtBQUosRUFDSTNCLFNBREo7QUFHQTJCLFFBQUFBLEtBQUssR0FBRyxLQUFLNUIsU0FBTCxDQUFlNkIsZUFBZixDQUErQlosTUFBL0IsQ0FBUjtBQUVBLFlBQU1hLFNBQVMsR0FBR25DLEtBQUssQ0FBQ2lDLEtBQUQsQ0FBdkI7QUFFQTNCLFFBQUFBLFNBQVMsR0FBRzZCLFNBQVosQ0FYRSxDQVdzQjs7QUFFeEIsWUFBTTVCLE9BQU8sR0FBRyw2QkFBaUIwQixLQUFqQixDQUFoQjtBQUVBM0IsUUFBQUEsU0FBUyxHQUFHLG1DQUF1QkEsU0FBdkIsRUFBa0NDLE9BQWxDLENBQVo7QUFFQTBCLFFBQUFBLEtBQUssR0FBRyx5Q0FBNkIzQixTQUE3QixFQUF3Q0MsT0FBeEMsQ0FBUjtBQUVBLFlBQU02QixTQUFTLEdBQUcsSUFBbEI7QUFBQSxZQUNNNUIsU0FBUyxHQUFHLEtBQUs2QixZQUFMLENBQWtCL0IsU0FBbEIsRUFBNkJDLE9BQTdCLENBRGxCO0FBQUEsWUFFTStCLFdBQVcsR0FBRywwQkFBY0wsS0FBZCxFQUFxQkcsU0FBckIsQ0FGcEI7QUFBQSxZQUdNRyxXQUFXLEdBQUdELFdBSHBCLENBbkJFLENBc0JnQzs7QUFFbEMsYUFBS0UsWUFBTCxDQUFrQmhDLFNBQWxCO0FBRUEsYUFBS2lDLGNBQUwsQ0FBb0JGLFdBQXBCO0FBQ0QsT0EzQkQsQ0EyQkUsT0FBT0csS0FBUCxFQUFjO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsYUFBS0csY0FBTDtBQUVBLGFBQUtDLGdCQUFMO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBQUEsVUFDTW5CLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1CbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEdEI7QUFHQSxhQUFRLGNBRU4sb0JBQUMsbUJBQUQsb0NBRk0sZUFLTixvQkFBQyxzQkFBRCxxQkFDRSxvQkFBQyxvQkFBRCxxQkFDRSxvQkFBQyxtQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCwwQkFERixlQUlFLG9CQUFDLDBCQUFEO0FBQXFCLFFBQUEsT0FBTyxFQUFFRDtBQUE5QixRQUpGLGVBS0Usb0JBQUMsc0JBQUQsY0FMRixlQVFFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFSRixlQVNFLG9CQUFDLHNCQUFELHVCQVRGLGVBWUUsb0JBQUMsdUJBQUQ7QUFBcUIsUUFBQSxPQUFPLEVBQUVBO0FBQTlCLFFBWkYsQ0FERixDQURGLGVBaUJFLG9CQUFDLG9CQUFELE9BakJGLGVBa0JFLG9CQUFDLGtCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELGtCQURGLGVBSUUsb0JBQUMsbUJBQUQ7QUFBaUIsUUFBQSxPQUFPLEVBQUVBO0FBQTFCLFFBSkYsZUFLRSxvQkFBQyxzQkFBRCxxQkFMRixlQVFFLG9CQUFDLHFCQUFELE9BUkYsZUFTRSxvQkFBQyxxQkFBRCxxQkFDRSxvQkFBQywyQ0FBRDtBQUF5QyxRQUFBLFFBQVEsRUFBRWxCLGFBQW5EO0FBQWtFLFFBQUEsT0FBTztBQUF6RSxRQURGLHdDQVRGLENBREYsQ0FsQkYsQ0FMTSxDQUFSO0FBMENEOzs7aUNBRVk7QUFDWCxXQUFLb0IsYUFBTDtBQUVBLFVBQU1uQixHQUFHLEdBQUcsS0FBS29CLFVBQWpCO0FBQUEsVUFBNkI7QUFDdkI5QixNQUFBQSxPQUFPLEdBQUcsS0FBSytCLGNBRHJCO0FBQUEsVUFDcUM7QUFDL0IxQyxNQUFBQSxjQUFjLEdBQUcsS0FBSzJDLHFCQUY1QixDQUhXLENBS3dDOztBQUVuRCxXQUFLQyxNQUFMLENBQVl2QixHQUFaO0FBRUEsV0FBS3dCLFVBQUwsQ0FBZ0JsQyxPQUFoQjtBQUVBLFdBQUttQyxpQkFBTCxDQUF1QjlDLGNBQXZCO0FBRUEsV0FBS3NDLFlBQUw7QUFDRDs7OzhCQUlnQlMsSyxFQUFPQyxVLEVBQVk7QUFDbEMsVUFBTXJELFFBQVEsR0FBR3NELHNCQUFTQyxXQUFULEVBQWpCO0FBQUEsVUFDTXRELFNBQVMsR0FBR3VELHdCQUFVRCxXQUFWLEVBRGxCO0FBQUEsVUFFTUUsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCUCxLQUFsQixFQUF5QkMsVUFBekIsRUFBcUNyRCxRQUFyQyxFQUErQ0MsU0FBL0MsQ0FGcEI7O0FBSUF3RCxNQUFBQSxXQUFXLENBQUNHLFVBQVo7QUFFQSxhQUFPSCxXQUFQO0FBQ0Q7Ozs7RUFwTCtCQyxhOzs7O2dCQUFiNUQsSSxhQTBLRixLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBCTkZMZXhlciwgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQmFzaWNQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzXCJcblxuaW1wb3J0IHsgZmluZFJ1bGVCeU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBpbml0aWFsQk5GID0gYFxuICBcbmV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gICBleHByZXNzaW9uIFwiLVwiIGRpdmlzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkaXZpc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmRpdmlzaW9uICAgICAgICAgICAgICA6Oj0gICBkaXZpc2lvbiBcIi9cIiBiYXNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgICBiYXNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDsgXG5cbmJhc2UgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDsgXG4gICAgXG50ZXJtICAgICAgICAgICAgICAgICAgOjo9ICAgL1xcXFxkKy8gO1xuICAgIFxuICBgO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCIoMS0yKS8zXCI7XG5cbiAgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCJcXFxcZCt8LlwiO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBibmZMZXhlciwgYm5mUGFyc2VyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5ibmZMZXhlciA9IGJuZkxleGVyO1xuICAgIHRoaXMuYm5mUGFyc2VyID0gYm5mUGFyc2VyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9IFVOQVNTSUdORURfRU5UUlksXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAgeyBjdXN0b20gfSxcbiAgICAgICAgICAgIHsgdW5hc3NpZ25lZCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IHRoaXMuYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpO1xuXG4gICAgICBsZXQgcnVsZXMsXG4gICAgICAgICAgc3RhcnRSdWxlO1xuXG4gICAgICBydWxlcyA9IHRoaXMuYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIEdyYW1tYXIgdXRpbGl0aWVzIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5pbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgYm5mTGV4ZXIsIGJuZlBhcnNlcik7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuIl19