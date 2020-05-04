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
    key: "keyUpHandler",
    value: function keyUpHandler() {
      this.changeHandler();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiYm5mTGV4ZXIiLCJibmZQYXJzZXIiLCJydWxlcyIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiZnJvbVJ1bGVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJhc1BhcnNlVHJlZSIsImJuZiIsImdldEJORiIsInRva2Vuc0Zyb21CTkYiLCJydWxlc0Zyb21Ub2tlbnMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNsZWFyQWRqdXN0ZWRCTkYiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwiQ2xhc3MiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiQk5GUGFyc2VyIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5n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RDs7OzhCQUlnQlMsSyxFQUFPVixVLEVBQVk7QUFDbEMsVUFBTXhDLFFBQVEsR0FBR21ELHNCQUFTQyxXQUFULEVBQWpCO0FBQUEsVUFDTW5ELFNBQVMsR0FBR29ELHdCQUFVRCxXQUFWLEVBRGxCO0FBQUEsVUFFTUUsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCTixLQUFsQixFQUF5QlYsVUFBekIsRUFBcUN4QyxRQUFyQyxFQUErQ0MsU0FBL0MsQ0FGcEI7O0FBSUFxRCxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJqQixVQUF2QjtBQUVBLGFBQU9jLFdBQVA7QUFDRDs7OztFQWhLK0JDLGE7Ozs7Z0JBQWJ6RCxJLGFBc0pGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBCTkZMZXhlciwgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQmFzaWNQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuaW1wb3J0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgZnJvbSBcIi4uL3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IHJ1bGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBmaW5kUnVsZUJ5TmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBibmZMZXhlciwgYm5mUGFyc2VyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5ibmZMZXhlciA9IGJuZkxleGVyO1xuICAgIHRoaXMuYm5mUGFyc2VyID0gYm5mUGFyc2VyO1xuICB9XG5cbiAgaW5pdGlhbEJORiA9IGBcbiAgXG4gICAgZXhwcmVzc2lvbiAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG4gIFxuICAgICAgICAgICAgICAgICAgfCB0ZXJtXG4gIFxuICAgICAgICAgICAgICAgICAgO1xuICBcbiAgICBvcGVyYXRvciAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG4gICAgXG4gICAgdGVybSAgICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuICAgIFxuICBgO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCIoMSsyKS8zXCI7XG5cbiAgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCJcXFxcZCt8LlwiO1xuXG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy5ibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSB0aGlzLmJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5pbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGJuZkxleGVyLCBibmZQYXJzZXIpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXX0=