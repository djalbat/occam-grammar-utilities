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
      try {
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

        var parseTree = this.getParseTree(rules);

        this.setParseTree(parseTree);
      } catch (error) {
        this.clearAdjustedBNF();

        this.clearParseTree();

        this.showError(error);
      }
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
            React.createElement(RemoveIntermediateNodesCheckbox, { onChange: changeHandler, checked: true }),
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
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(ErrorParagraph, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJleGFtcGxlQ29udGVudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsImV4YW1wbGVMZXhpY2FsUGF0dGVybiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVJbnRlcm1lZGlhdGVOb2RlcyIsIlJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3giLCJFbGVtZW50IiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsIkJhc2ljTGV4ZXIiLCJCTkZMZXhlciIsIkJhc2ljUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIlZpZXciLCJydWxlcyIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsImJhc2ljUGFyc2VyIiwiZnJvbVJ1bGVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImFzUGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzRnJvbVRva2VucyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJoaWRlRXJyb3IiLCJzZXRBZGp1c3RlZEJORiIsImdldFBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY2xlYXJBZGp1c3RlZEJORiIsImNsZWFyUGFyc2VUcmVlIiwic2hvd0Vycm9yIiwiY2hhbmdlSGFuZGxlciIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxpQkFBaUJOLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNTyxpQkFBaUJQLFFBQVEsb0JBQVIsQ0FIdkI7QUFBQSxJQUlNUSxpQkFBaUJSLFFBQVEsb0JBQVIsQ0FKdkI7QUFBQSxJQUtNUyxrQkFBa0JULFFBQVEsb0JBQVIsQ0FMeEI7QUFBQSxJQU1NVSxvQkFBb0JWLFFBQVEsc0JBQVIsQ0FOMUI7QUFBQSxJQU9NVyxzQkFBc0JYLFFBQVEsd0JBQVIsQ0FQNUI7QUFBQSxJQVFNWSxzQkFBc0JaLFFBQVEsd0JBQVIsQ0FSNUI7QUFBQSxJQVNNYSx1QkFBdUJiLFFBQVEseUJBQVIsQ0FUN0I7QUFBQSxJQVVNYyx3QkFBd0Jk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QUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXhIZ0J0RCxPOztBQTJIbkJ5RCxPQUFPQyxNQUFQLENBQWNoRCxJQUFkLEVBQW9CO0FBQ2xCaUQsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCckQsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEVycm9yUGFyYWdyYXBoID0gcmVxdWlyZSgnLi9wYXJhZ3JhcGgvZXJyb3InKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBleGFtcGxlQ29udGVudCA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvY29udGVudCcpLFxuICAgICAgQ29udGVudFRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvcGFyc2VUcmVlJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGV4YW1wbGVMZXhpY2FsUGF0dGVybiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uJyksXG4gICAgICByZW1vdmVJbnRlcm1lZGlhdGVOb2RlcyA9IHJlcXVpcmUoJy4uL3JlbW92ZUludGVybWVkaWF0ZU5vZGVzJyksXG4gICAgICBSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9yZW1vdmVJbnRlcm1lZGlhdGVOb2RlcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IEJhc2ljTGV4ZXIsIEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJhc2ljUGFyc2VyLCBCTkZQYXJzZXIgfSA9IHBhcnNlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzO1xuXG4gICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5zaG93RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgcGF0dGVybjwvaDI+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5QYXJzZSB0cmVlPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgIDxzcGFuPlJlbW92ZSBpbnRlcm1lZGlhdGUgbm9kZXM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxFcnJvclBhcmFncmFwaCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZXhhbXBsZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gZXhhbXBsZUxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19