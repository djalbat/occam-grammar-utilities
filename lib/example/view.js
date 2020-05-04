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
          unassigned = '^.*$',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiYm5mTGV4ZXIiLCJibmZQYXJzZXIiLCJydWxlcyIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiZnJvbVJ1bGVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJhc1BhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckFkanVzdGVkQk5GIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwiQ2xhc3MiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiQk5GUGFyc2VyIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5n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RDs7OzhCQUlnQlMsSyxFQUFPVixVLEVBQVk7QUFDbEMsVUFBTXhDLFFBQVEsR0FBR21ELHNCQUFTQyxXQUFULEVBQWpCO0FBQUEsVUFDTW5ELFNBQVMsR0FBR29ELHdCQUFVRCxXQUFWLEVBRGxCO0FBQUEsVUFFTUUsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCTixLQUFsQixFQUF5QlYsVUFBekIsRUFBcUN4QyxRQUFyQyxFQUErQ0MsU0FBL0MsQ0FGcEI7O0FBSUFxRCxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJqQixVQUF2QjtBQUVBLGFBQU9jLFdBQVA7QUFDRDs7OztFQWhLK0JDLGE7Ozs7Z0JBQWJ6RCxJLGFBc0pGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBCTkZMZXhlciwgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQmFzaWNQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuaW1wb3J0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgZnJvbSBcIi4uL3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IHJ1bGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBmaW5kUnVsZUJ5TmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluaXRpYWxCTkYgPSBgXG4gIFxuICAgIGV4cHJlc3Npb24gICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuICBcbiAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuICBcbiAgICAgICAgICAgICAgICAgIHwgdGVybVxuICBcbiAgICAgICAgICAgICAgICAgIDtcbiAgXG4gICAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuICAgIFxuICAgIHRlcm0gICAgICAgICAgOjo9IC9cXFxcZCsvIDtcbiAgICBcbiAgYDtcblxuICBpbml0aWFsQ29udGVudCA9IFwiKDErMikvM1wiO1xuXG4gIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiXFxcXGQrfC5cIjtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgYm5mTGV4ZXIsIGJuZlBhcnNlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMuYm5mTGV4ZXIgPSBibmZMZXhlcjtcbiAgICB0aGlzLmJuZlBhcnNlciA9IGJuZlBhcnNlcjtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy5ibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSB0aGlzLmJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUocnVsZXMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIEdyYW1tYXIgdXRpbGl0aWVzIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBibmZMZXhlciwgYm5mUGFyc2VyKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuIl19