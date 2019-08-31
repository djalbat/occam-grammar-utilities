'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    easyLayout = require('easy-layout');

var exampleBNF = require('../example/bnf'),
    BNFTextarea = require('./textarea/bnf'),
    rulesUtilities = require('../utilities/rules'),
    exampleContent = require('../example/content'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    exampleLexicalPattern = require('../example/lexicalPattern'),
    eliminateLeftRecursion = require('../eliminateLeftRecursion'),
    removeIntermediateNodes = require('../removeIntermediateNodes'),
    RemoveIntermediateNodesCheckbox = require('./checkbox/removeIntermediateNodes');

var Element = easy.Element,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement,
    BasicLexer = lexers.BasicLexer,
    BNFLexer = lexers.BNFLexer,
    BasicParser = parsers.BasicParser,
    BNFParser = parsers.BNFParser;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'getParseTree',
    value: function getParseTree(rules) {
      var parseTree = null;

      var lexicalPattern = this.getLexicalPattern(),
          unassigned = '^.*$',
          custom = lexicalPattern,
          ///
      entries = [{ custom: custom }, { unassigned: unassigned }],
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = BasicParser.fromRules(rules),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        var removeIntermediateNodesCheckboxChecked = this.isRemoveIntermediateNodesCheckboxChecked();

        if (removeIntermediateNodesCheckboxChecked) {
          removeIntermediateNodes(node);
        }

        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      // try {
      var bnf = this.getBNF(),
          tokens = bnfLexer.tokensFromBNF(bnf);

      var rules = void 0;

      rules = bnfParser.rulesFromTokens(tokens);

      eliminateLeftRecursion(rules);

      var multiLine = true,
          rulesString = rulesAsString(rules, multiLine),
          adjustedBNF = rulesString; ///

      this.hideError();

      this.setAdjustedBNF(adjustedBNF);

      // const parseTree = this.getParseTree(rules);
      //
      // this.setParseTree(parseTree);
      // } catch (error) {
      //   this.showError();
      //
      //   this.clearAdjustedBNF();
      //
      //   this.clearParseTree();
      // }
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      this.changeHandler();
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

      return React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Lexical pattern'
          ),
          React.createElement(LexicalPatternInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Adjusted BNF'
          ),
          React.createElement(AdjustedBNFTextarea, null)
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'div',
            null,
            React.createElement(RemoveIntermediateNodesCheckbox, { onChange: changeHandler }),
            React.createElement(
              'span',
              null,
              'Remove intermediate nodes'
            )
          ),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      );
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZXhhbXBsZUNvbnRlbnQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJleGFtcGxlTGV4aWNhbFBhdHRlcm4iLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMiLCJSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwicnVsZXMiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImZyb21SdWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJhc1BhcnNlVHJlZSIsImJuZiIsImdldEJORiIsInRva2Vuc0Zyb21CTkYiLCJydWxlc0Zyb21Ub2tlbnMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBR01HLGFBQWFILFFBQVEsYUFBUixDQUhuQjs7QUFLQSxJQUFNSSxhQUFhSixRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUssY0FBY0wsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1NLGlCQUFpQk4sUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01PLGlCQUFpQlAsUUFBUSxvQkFBUixDQUh2QjtBQUFBLElBSU1RLGtCQUFrQlIsUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01TLG9CQUFvQlQsUUFBUSxzQkFBUixDQUwxQjtBQUFBLElBTU1VLHNCQUFzQlYsUUFBUSx3QkFBUixDQU41QjtBQUFBLElBT01XLHNCQUFzQlgsUUFBUSx3QkFBUixDQVA1QjtBQUFBLElBUU1ZLHVCQUF1QlosUUFBUSx5QkFBUixDQVI3QjtBQUFBLElBU01hLHdCQUF3QmIsUUFBUSwyQkFBUixDQVQ5QjtBQUFBLElBVU1jLHlCQUF5QmQsUUFBUSwyQkFBUixDQVYvQjtBQUFBLElBV01lLDBCQUEwQmYsUUFBUSw0QkFBUixDQVhoQztBQUFBLElBWU1nQixrQ0FBa0NoQixRQUFRLG9DQUFSLENBWnhDOztBQWNNLElBQUVp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QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsaUJBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLCtCQUFELElBQWlDLFVBQVVGLGFBQTNDLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsV0FIRjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFLDhCQUFDLGVBQUQsSUFBaUIsU0FBU0UsWUFBMUI7QUFSRjtBQVZGLE9BRkY7QUF5QkQ7OztpQ0FFWTtBQUNYLFdBQUtFLGFBQUw7O0FBRUEsVUFBTWIsTUFBTTVDLFVBQVo7QUFBQSxVQUF3QjtBQUNsQm1DLGdCQUFVaEMsY0FEaEI7QUFBQSxVQUNnQztBQUMxQnVCLHVCQUFpQmpCLHFCQUZ2QixDQUhXLENBS21DOztBQUU5QyxXQUFLaUQsTUFBTCxDQUFZZCxHQUFaOztBQUVBLFdBQUtlLFVBQUwsQ0FBZ0J4QixPQUFoQjs7QUFFQSxXQUFLeUIsaUJBQUwsQ0FBdUJsQyxjQUF2Qjs7QUFFQSxXQUFLNkIsWUFBTDtBQUNEOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTU8sT0FBT2hELFFBQVFpRCxjQUFSLENBQXVCdkMsSUFBdkIsRUFBNkIrQixVQUE3QixDQUFiOztBQUVBTyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXRIZ0JoRCxPOztBQXlIbkJtRCxPQUFPQyxNQUFQLENBQWMxQyxJQUFkLEVBQW9CO0FBQ2xCMkMsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCL0MsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBleGFtcGxlQ29udGVudCA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvY29udGVudCcpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGV4YW1wbGVMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uJyksXG4gICAgICByZW1vdmVJbnRlcm1lZGlhdGVOb2RlcyA9IHJlcXVpcmUoJy4uL3JlbW92ZUludGVybWVkaWF0ZU5vZGVzJyksXG4gICAgICBSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9yZW1vdmVJbnRlcm1lZGlhdGVOb2RlcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IEJhc2ljTGV4ZXIsIEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJhc2ljUGFyc2VyLCBCTkZQYXJzZXIgfSA9IHBhcnNlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzO1xuXG4gICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICAvLyBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG4gICAgICAvL1xuICAgICAgLy8gdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAvLyB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIHBhdHRlcm48L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5BZGp1c3RlZCBCTkY8L2gyPlxuICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPHNwYW4+UmVtb3ZlIGludGVybWVkaWF0ZSBub2Rlczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBleGFtcGxlQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBleGFtcGxlTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=