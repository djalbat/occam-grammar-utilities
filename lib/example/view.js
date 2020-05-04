'use strict';

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

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
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
      return /*#__PURE__*/React.createElement("div", {
        className: "columns"
      }, /*#__PURE__*/React.createElement(SizeableElement, null, /*#__PURE__*/React.createElement("h2", null, "Lexical pattern"), /*#__PURE__*/React.createElement(LexicalPatternInput, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "BNF"), /*#__PURE__*/React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "Adjusted BNF"), /*#__PURE__*/React.createElement(AdjustedBNFTextarea, null)), /*#__PURE__*/React.createElement(MainVerticalSplitter, null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Parse tree"), /*#__PURE__*/React.createElement(ParseTreeTextarea, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RemoveOrRenameIntermediateNodesCheckbox, {
        onChange: changeHandler,
        checked: true
      }), /*#__PURE__*/React.createElement("span", null, "Remove intermediate nodes")), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(ErrorParagraph, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJleGFtcGxlQ29udGVudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsImV4YW1wbGVMZXhpY2FsUGF0dGVybiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwicnVsZXMiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImZyb21SdWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCO0FBQUEsSUFDTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUR0QjtBQUFBLElBRU1FLE9BQU8sR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FGdkI7QUFBQSxJQUdNRyxVQUFVLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBSDFCOztBQUtBLElBQU1JLFVBQVUsR0FBR0osT0FBTyxDQUFDLGdCQUFELENBQTFCO0FBQUEsSUFDTUssV0FBVyxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FEM0I7QUFBQSxJQUVNTSxjQUFjLEdBQUdOLE9BQU8sQ0FBQyxtQkFBRCxDQUY5QjtBQUFBLElBR01PLGNBQWMsR0FBR1AsT0FBTyxDQUFDLG9CQUFELENBSDlCO0FBQUEsSUFJTVEsY0FBYyxHQUFHUixPQUFPLENBQUMsb0JBQUQsQ0FKOUI7QUFBQSxJQUtNUyxlQUFlLEdBQUdULE9BQU8sQ0FBQyxvQkFBRCxDQUwvQjtBQUFBLElBTU1VLGlCQUFpQixHQUFHVixPQUFPLENBQUMsc0JBQUQs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Y0FBRCxPQWZGLENBaEJGLENBRkY7QUFzQ0Q7OztpQ0FFWTtBQUNYLFdBQUtFLGFBQUw7QUFFQSxVQUFNbkIsR0FBRyxHQUFHN0MsVUFBWjtBQUFBLFVBQXdCO0FBQ2xCb0MsTUFBQUEsT0FBTyxHQUFHaEMsY0FEaEI7QUFBQSxVQUNnQztBQUMxQnVCLE1BQUFBLGNBQWMsR0FBR2pCLHFCQUZ2QixDQUhXLENBS21DOztBQUU5QyxXQUFLdUQsTUFBTCxDQUFZcEIsR0FBWjtBQUVBLFdBQUtxQixVQUFMLENBQWdCOUIsT0FBaEI7QUFFQSxXQUFLK0IsaUJBQUwsQ0FBdUJ4QyxjQUF2QjtBQUVBLFdBQUttQyxZQUFMO0FBQ0Q7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNTyxJQUFJLEdBQUd0RCxPQUFPLENBQUN1RCxjQUFSLENBQXVCN0MsSUFBdkIsRUFBNkJxQyxVQUE3QixDQUFiO0FBRUFPLE1BQUFBLElBQUksQ0FBQ0UsVUFBTDtBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQW5JZ0J0RCxPOztBQXNJbkJ5RCxNQUFNLENBQUNDLE1BQVAsQ0FBY2hELElBQWQsRUFBb0I7QUFDbEJpRCxFQUFBQSxPQUFPLEVBQUUsS0FEUztBQUVsQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRkQsQ0FBcEI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckQsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgZXhhbXBsZUJORiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvYm5mJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBFcnJvclBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoL2Vycm9yJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgZXhhbXBsZUNvbnRlbnQgPSByZXF1aXJlKCcuLi9leGFtcGxlL2NvbnRlbnQnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIEFkanVzdGVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2FkanVzdGVkQk5GJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBleGFtcGxlTGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuLi9leGFtcGxlL2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvbicpLFxuICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyA9IHJlcXVpcmUoJy4uL3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMnKSxcbiAgICAgIFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IEJhc2ljTGV4ZXIsIEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJhc2ljUGFyc2VyLCBCTkZQYXJzZXIgfSA9IHBhcnNlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpO1xuXG4gICAgICBsZXQgcnVsZXM7XG5cbiAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTtcblxuICAgICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKHJ1bGVzKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgUmVtb3ZlIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxFcnJvclBhcmFncmFwaCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZXhhbXBsZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gZXhhbXBsZUxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19