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
          basicParser = new BasicParser(rules),
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

      var parseTree = this.getParseTree(rules);

      this.setParseTree(parseTree);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZXhhbXBsZUNvbnRlbnQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJleGFtcGxlTGV4aWNhbFBhdHRlcm4iLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMiLCJSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwicnVsZXMiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJhc1BhcnNlVHJlZSIsImJuZiIsImdldEJORiIsInRva2Vuc0Zyb21CTkYiLCJydWxlc0Zyb21Ub2tlbnMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBR01HLGFBQWFILFFBQVEsYUFBUixDQUhuQjs7QUFLQSxJQUFNSSxhQUFhSixRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUssY0FBY0wsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1NLGlCQUFpQk4sUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01PLGlCQUFpQlAsUUFBUSxvQkFBUixDQUh2QjtBQUFBLElBSU1RLGtCQUFrQlIsUUFBUSxvQkFBUixDQUp4QjtBQUFBLElBS01TLG9CQUFvQlQsUUFBUSxzQkFBUixDQUwxQjtBQUFBLElBTU1VLHNCQUFzQlYsUUFBUSx3QkFBUixDQU41QjtBQUFBLElBT01XLHNCQUFzQlgsUUFBUSx3QkFBUixDQVA1QjtBQUFBLElBUU1ZLHVCQUF1QlosUUFBUSx5QkFBUixDQVI3QjtBQUFBLElBU01hLHdCQUF3QmIsUUFBUSwyQkFBUixDQVQ5QjtBQUFBLElBVU1jLHlCQUF5QmQsUUFBUSwyQkFBUixDQVYvQjtBQUFBLElBV01lLDBCQUEwQmYsUUFBUSw0QkFBUixDQVhoQztBQUFBLElBWU1nQixrQ0FBa0NoQixRQUFRLG9DQUFSLENBWnhDOztBQWNNLElBQUVpQixPQUFGLEdBQWNsQixJQUFkLENBQUVrQixPQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQlosY0FEcEIsQ0FDRVksYUFERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JoQixVQUZ0QixDQUVFZ0IsZUFGRjtBQUFBLElBR0VDLFVBSEYsR0FHMkJuQixNQUgzQixDQUdFbUIsVUFIRjtBQUFBLElBR2NDLFFBSGQsR0FHMkJwQixNQUgzQixDQUdjb0IsUUFIZDtBQUFBLElBSUVDLFdBSkYsR0FJNkJwQixPQUo3QixDQUlFb0IsV0FKRjtBQUFBLElBSWVDLFNBSmYsR0FJNkJyQixPQUo3QixDQUllcUIsU0FKZjs7O0FBTU4sSUFBTUMsV0FBV0gsU0FBU0ksV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlILFVBQVVFLFdBQVYsRUFEbEI7O0lBR01FLEk7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU87QUFDbEIsVUFBSUMsWUFBWSxJQUFoQjs7QUFFQSxVQUFNQyxpQkFBaUIsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxhQUFhLE1BRG5CO0FBQUEsVUFFTUMsU0FBU0gsY0FGZjtBQUFBLFVBRWdDO0FBQzFCSSxnQkFBVSxDQUNSLEVBQUVELGNBQUYsRUFEUSxFQUVSLEVBQUVELHNCQUFGLEVBRlEsQ0FIaEI7QUFBQSxVQU9NRyxhQUFhZixXQUFXZ0IsV0FBWCxDQUF1QkYsT0FBdkIsQ0FQbkI7QUFBQSxVQVFNRyxjQUFjLElBQUlmLFdBQUosQ0FBZ0JNLEtBQWhCLENBUnBCO0FBQUEsVUFTTVUsVUFBVSxLQUFLQyxVQUFMLEVBVGhCO0FBQUEsVUFVTUMsU0FBU0wsV0FBV00sUUFBWCxDQUFvQkgsT0FBcEIsQ0FWZjtBQUFBLFVBV01JLE9BQU9MLFlBQVlNLEtBQVosQ0FBa0JILE1BQWxCLENBWGI7O0FBYUEsVUFBSUUsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1FLHlDQUF5QyxLQUFLQyx3Q0FBTCxFQUEvQzs7QUFFQSxZQUFJRCxzQ0FBSixFQUE0QztBQUMxQzdCLGtDQUF3QjJCLElBQXhCO0FBQ0Q7O0FBRURiLG9CQUFZYSxLQUFLSSxXQUFMLENBQWlCTixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT1gsU0FBUDtBQUNEOzs7b0NBRWU7QUFDZDtBQUNFLFVBQU1rQixNQUFNLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01SLFNBQVNoQixTQUFTeUIsYUFBVCxDQUF1QkYsR0FBdkIsQ0FEZjs7QUFHQSxVQUFJbkIsY0FBSjs7QUFFQUEsY0FBUUYsVUFBVXdCLGVBQVYsQ0FBMEJWLE1BQTFCLENBQVI7O0FBRUExQiw2QkFBdUJjLEtBQXZCOztBQUVBLFVBQU11QixZQUFZLElBQWxCO0FBQUEsVUFDTUMsY0FBY2xDLGNBQWNVLEtBQWQsRUFBcUJ1QixTQUFyQixDQURwQjtBQUFBLFVBRU1FLGNBQWNELFdBRnBCLENBWFksQ0Fhc0I7O0FBRWxDLFdBQUtFLFNBQUw7O0FBRUEsV0FBS0MsY0FBTCxDQUFvQkYsV0FBcEI7O0FBRUEsVUFBTXhCLFlBQVksS0FBSzJCLFlBQUwsQ0FBa0I1QixLQUFsQixDQUFsQjs7QUFFQSxXQUFLNkIsWUFBTCxDQUFrQjVCLFNBQWxCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSzZCLGFBQUw7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsZUFBZSxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUFBLFVBQ01ILGdCQUFnQixLQUFLQSxhQUFMLENBQW1CRyxJQUFuQixDQUF3QixJQUF4QixDQUR0Qjs7QUFHQSxhQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLG1CQUFELElBQXFCLFNBQVNELFlBQTlCLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRSw4QkFBQyxXQUFELElBQWEsU0FBU0EsWUFBdEIsR0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRjtBQU1FLDhCQUFDLG1CQUFEO0FBTkYsU0FERjtBQVNFLDRCQUFDLG9CQUFELE9BVEY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxpQkFBRCxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsK0JBQUQsSUFBaUMsVUFBVUYsYUFBM0MsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixXQUhGO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVBGO0FBUUUsOEJBQUMsZUFBRCxJQUFpQixTQUFTRSxZQUExQjtBQVJGO0FBVkYsT0FGRjtBQXlCRDs7O2lDQUVZO0FBQ1gsV0FBS0UsYUFBTDs7QUFFQSxVQUFNZixNQUFNM0MsVUFBWjtBQUFBLFVBQXdCO0FBQ2xCa0MsZ0JBQVUvQixjQURoQjtBQUFBLFVBQ2dDO0FBQzFCdUIsdUJBQWlCakIscUJBRnZCLENBSFcsQ0FLbUM7O0FBRTlDLFdBQUtrRCxNQUFMLENBQVloQixHQUFaOztBQUVBLFdBQUtpQixVQUFMLENBQWdCMUIsT0FBaEI7O0FBRUEsV0FBSzJCLGlCQUFMLENBQXVCbkMsY0FBdkI7O0FBRUEsV0FBSzhCLFlBQUw7QUFDRDs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1PLE9BQU9qRCxRQUFRa0QsY0FBUixDQUF1QnhDLElBQXZCLEVBQTZCZ0MsVUFBN0IsQ0FBYjs7QUFFQU8sV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUF0SGdCakQsTzs7QUF5SG5Cb0QsT0FBT0MsTUFBUCxDQUFjM0MsSUFBZCxFQUFvQjtBQUNsQjRDLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmhELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgZXhhbXBsZUJORiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvYm5mJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgZXhhbXBsZUNvbnRlbnQgPSByZXF1aXJlKCcuLi9leGFtcGxlL2NvbnRlbnQnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIEFkanVzdGVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2FkanVzdGVkQk5GJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBleGFtcGxlTGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuLi9leGFtcGxlL2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvbicpLFxuICAgICAgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMgPSByZXF1aXJlKCcuLi9yZW1vdmVJbnRlcm1lZGlhdGVOb2RlcycpLFxuICAgICAgUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBCYXNpY0xleGVyLCBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCYXNpY1BhcnNlciwgQk5GUGFyc2VyIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUocnVsZXMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSAnXi4qJCcsXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAgeyBjdXN0b20gfSxcbiAgICAgICAgICAgIHsgdW5hc3NpZ25lZCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUocnVsZXMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICB0aGlzLnNob3dFcnJvcigpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkxleGljYWwgcGF0dGVybjwvaDI+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5QYXJzZSB0cmVlPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8c3Bhbj5SZW1vdmUgaW50ZXJtZWRpYXRlIG5vZGVzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gZXhhbXBsZUJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGV4YW1wbGVDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGV4YW1wbGVMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==