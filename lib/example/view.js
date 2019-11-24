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
      //   this.clearAdjustedBNF();
      //
      //   this.clearParseTree();
      //
      //   this.showError(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJleGFtcGxlQ29udGVudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsImV4YW1wbGVMZXhpY2FsUGF0dGVybiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVJbnRlcm1lZGlhdGVOb2RlcyIsIlJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3giLCJFbGVtZW50IiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsIkJhc2ljTGV4ZXIiLCJCTkZMZXhlciIsIkJhc2ljUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIlZpZXciLCJydWxlcyIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsImJhc2ljUGFyc2VyIiwiZnJvbVJ1bGVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImFzUGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzRnJvbVRva2VucyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJoaWRlRXJyb3IiLCJzZXRBZGp1c3RlZEJORiIsImdldFBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxlQUFSLENBRmhCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSxhQUFSLENBSG5COztBQUtBLElBQU1JLGFBQWFKLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNSyxjQUFjTCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTU0saUJBQWlCTixRQUFRLG1CQUFSLENBRnZCO0FBQUEsSUFHTU8saUJBQWlCUCxRQUFRLG9CQUFSLENBSHZCO0FBQUEsSUFJTVEsaUJBQWlCUixRQUFRLG9CQUFSLENBSnZCO0FBQUEsSUFLTVMsa0JBQWtCVCxRQUFRLG9CQUFSLENBTHhCO0FBQUEsSUFNTVUsb0JBQW9CVixRQUFRLHNCQUFSLENBTjFCO0FBQUEsSUFPTVcsc0JBQXNCWCxRQUFRLHdCQUFSLENBUDVCO0FBQUEsSUFRTVksc0JBQXNCWixRQUFRLHdCQUFSLENBUjVCO0FBQUEsSUFTTWEsdUJBQXVCYixRQUFRLHlCQUFSLENBVDdCO0FBQUEsSUFVTWMsd0JBQXdCZCxRQUFRLDJCQUFSLENBVjlCO0FBQUEsSUFXTWUseUJBQXlCZixRQUFRLDJCQUFSLENBWC9CO0FB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O0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmpELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgZXhhbXBsZUJORiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvYm5mJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBFcnJvclBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoL2Vycm9yJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgZXhhbXBsZUNvbnRlbnQgPSByZXF1aXJlKCcuLi9leGFtcGxlL2NvbnRlbnQnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTGV4aWNhbFBhdHRlcm5JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvbGV4aWNhbFBhdHRlcm4nKSxcbiAgICAgIEFkanVzdGVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2FkanVzdGVkQk5GJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBleGFtcGxlTGV4aWNhbFBhdHRlcm4gPSByZXF1aXJlKCcuLi9leGFtcGxlL2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvbicpLFxuICAgICAgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMgPSByZXF1aXJlKCcuLi9yZW1vdmVJbnRlcm1lZGlhdGVOb2RlcycpLFxuICAgICAgUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBCYXNpY0xleGVyLCBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCYXNpY1BhcnNlciwgQk5GUGFyc2VyIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUocnVsZXMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSAnXi4qJCcsXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAgeyBjdXN0b20gfSxcbiAgICAgICAgICAgIHsgdW5hc3NpZ25lZCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUocnVsZXMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLnNob3dFcnJvcihlcnJvcik7XG4gICAgLy8gfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBwYXR0ZXJuPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgPHNwYW4+UmVtb3ZlIGludGVybWVkaWF0ZSBub2Rlczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVycm9yUGFyYWdyYXBoIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBleGFtcGxlQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBleGFtcGxlTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=