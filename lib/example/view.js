'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy'),
    lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    easyLayout = require('easy-layout');

var exampleBNF = require('../example/bnf'),
    BNFTextarea = require('./textarea/bnf'),
    ErrorParagraph = require('./paragraph/error'),
    rulesUtilities = require('../utilities/rules'),
    exampleContent = require('../example/content'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    exampleLexicalPattern = require('../example/lexicalPattern'),
    eliminateLeftRecursion = require('../eliminateLeftRecursion'),
    removeOrRenameIntermediateNodes = require('../removeOrRenameIntermediateNodes'),
    RemoveOrRenameIntermediateNodesCheckbox = require('./checkbox/removeOrRenameIntermediateNodes');

var Element = easy.Element,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement,
    BasicLexer = lexers.BasicLexer,
    BNFLexer = lexers.BNFLexer,
    BasicParser = parsers.BasicParser,
    BNFParser = parsers.BNFParser;
var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = BasicParser.fromRules(rules),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

        if (removeOrRenameIntermediateNodesCheckboxChecked) {
          removeOrRenameIntermediateNodes(node);
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
            tokens = bnfLexer.tokensFromBNF(bnf);
        var rules;
        rules = bnfParser.rulesFromTokens(tokens);
        eliminateLeftRecursion(rules);
        var multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.hideError();
        this.setAdjustedBNF(adjustedBNF);
        var parseTree = this.getParseTree(rules);
        this.setParseTree(parseTree);
      } catch (error) {
        this.clearAdjustedBNF();
        this.clearParseTree();
        this.showError(error);
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
      return React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Lexical pattern"), React.createElement(LexicalPatternInput, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "Adjusted BNF"), React.createElement(AdjustedBNFTextarea, null)), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("div", null, React.createElement(RemoveOrRenameIntermediateNodesCheckbox, {
        onChange: changeHandler,
        checked: true
      }), React.createElement("span", null, "Remove intermediate nodes")), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement(ErrorParagraph, null)));
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var bnf = exampleBNF,
          ///
      content = exampleContent,
          ///
      lexicalPattern = exampleLexicalPattern; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalPattern(lexicalPattern);
      this.keyUpHandler();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJleGFtcGxlQ29udGVudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsImV4YW1wbGVMZXhpY2FsUGF0dGVybiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwicnVsZXMiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImZyb21SdWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHRCO0FBQUEsSUFFTUUsT0FBTyxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUZ2QjtBQUFBLElBR01HLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FIMUI7O0FBS0EsSUFBTUksVUFBVSxHQUFHSixPQUFPLENBQUMsZ0JBQUQsQ0FBMUI7QUFBQSxJQUNNSyxXQUFXLEdBQUdMLE9BQU8sQ0FBQyxnQkFBRCxDQUQzQjtBQUFBLElBRU1NLGNBQWMsR0FBR04sT0FBTyxDQUFDLG1CQUFELENBRjlCO0FBQUEsSUFHTU8sY0FBYyxHQUFHUCxPQUFPLENBQUMsb0JBQUQsQ0FIOUI7QUFBQSxJQUlNUSxjQUFjLEdBQUdSLE9BQU8sQ0FBQyxvQkFBRCxDQUo5QjtBQUFBLElBS01TLGVBQWUsR0FBR1QsT0FBTyxDQUFDLG9CQUFELENBTC9CO0FBQUEsSUFNTVUsaUJBQWlCLEdBQUdWLE9BQU8sQ0FBQyxzQkFBRCxDQU5q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Q0FoQkYsQ0FGRjtBQXNDRDs7O2lDQUVZO0FBQ1gsV0FBS0UsYUFBTDtBQUVBLFVBQU1uQixHQUFHLEdBQUc3QyxVQUFaO0FBQUEsVUFBd0I7QUFDbEJvQyxNQUFBQSxPQUFPLEdBQUdoQyxjQURoQjtBQUFBLFVBQ2dDO0FBQzFCdUIsTUFBQUEsY0FBYyxHQUFHakIscUJBRnZCLENBSFcsQ0FLbUM7O0FBRTlDLFdBQUt1RCxNQUFMLENBQVlwQixHQUFaO0FBRUEsV0FBS3FCLFVBQUwsQ0FBZ0I5QixPQUFoQjtBQUVBLFdBQUsrQixpQkFBTCxDQUF1QnhDLGNBQXZCO0FBRUEsV0FBS21DLFlBQUw7QUFDRDs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1PLElBQUksR0FBR3RELE9BQU8sQ0FBQ3VELGNBQVIsQ0FBdUI3QyxJQUF2QixFQUE2QnFDLFVBQTdCLENBQWI7QUFFQU8sTUFBQUEsSUFBSSxDQUFDRSxVQUFMO0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBbklnQnRELE87O0FBc0luQnlELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEQsSUFBZCxFQUFvQjtBQUNsQmlELEVBQUFBLE9BQU8sRUFBRSxLQURTO0FBRWxCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRCxDQUFwQjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyRCxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEVycm9yUGFyYWdyYXBoID0gcmVxdWlyZSgnLi9wYXJhZ3JhcGgvZXJyb3InKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBleGFtcGxlQ29udGVudCA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvY29udGVudCcpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGV4YW1wbGVMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uJyksXG4gICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzID0gcmVxdWlyZSgnLi4vcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcycpLFxuICAgICAgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgQmFzaWNMZXhlciwgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgQmFzaWNQYXJzZXIsIEJORlBhcnNlciB9ID0gcGFyc2VycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKHJ1bGVzKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gJ14uKiQnLFxuICAgICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICAgIHsgY3VzdG9tIH0sXG4gICAgICAgICAgICB7IHVuYXNzaWduZWQgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUocnVsZXMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLnNob3dFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBSZW1vdmUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVycm9yUGFyYWdyYXBoIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBleGFtcGxlQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBleGFtcGxlTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=