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
        var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

        if (removeOrRenameIntermediateNodesCheckboxChecked) {
          removeOrRenameIntermediateNodes(node);
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
            React.createElement(RemoveOrRenameIntermediateNodesCheckbox, { onChange: changeHandler, checked: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIkVycm9yUGFyYWdyYXBoIiwicnVsZXNVdGlsaXRpZXMiLCJleGFtcGxlQ29udGVudCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsImV4YW1wbGVMZXhpY2FsUGF0dGVybiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwicnVsZXMiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImZyb21SdWxlcyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJjaGFuZ2VIYW5kbGVyIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBR01HLGFBQWFILFFBQVEsYUFBUixDQUhuQjs7QUFLQSxJQUFNSSxhQUFhSixRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUssY0FBY0wsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1NLGlCQUFpQk4sUUFBUSxtQkFBUixDQUZ2QjtBQUFBLElBR01PLGlCQUFpQlAsUUFBUSxvQkFBUixDQUh2QjtBQUFBLElBSU1RLGlCQUFpQlIsUUFBUSxvQkFBUixDQUp2QjtBQUFBLElBS01TLGtCQUFrQlQsUUFBUSxvQkFBUixDQUx4QjtBQUFBLElBTU1VLG9CQUFvQlYsUUFBUSxzQkFBUixDQU4xQjtBQUFBLElBT01XLHNCQUFzQlgsUUFBUSx3QkFBUixDQVA1QjtBQUFBLElBUU1ZLHNCQUFzQlosUUFBUSx3QkFBUixDQVI1QjtBQUFBLElBU01hLHVCQUF1QmIsUUFB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QUF2QixFQUE2QnFDLFVBQTdCLENBQWI7O0FBRUFPLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBdkhnQnRELE87O0FBMEhuQnlELE9BQU9DLE1BQVAsQ0FBY2hELElBQWQsRUFBb0I7QUFDbEJpRCxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJyRCxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgRXJyb3JQYXJhZ3JhcGggPSByZXF1aXJlKCcuL3BhcmFncmFwaC9lcnJvcicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGV4YW1wbGVDb250ZW50ID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9jb250ZW50JyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgZXhhbXBsZUxleGljYWxQYXR0ZXJuID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb24nKSxcbiAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgPSByZXF1aXJlKCcuLi9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzJyksXG4gICAgICBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBCYXNpY0xleGVyLCBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCYXNpY1BhcnNlciwgQk5GUGFyc2VyIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUocnVsZXMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSAnXi4qJCcsXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAgeyBjdXN0b20gfSxcbiAgICAgICAgICAgIHsgdW5hc3NpZ25lZCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzO1xuXG4gICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIHBhdHRlcm48L2gyPlxuICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5BZGp1c3RlZCBCTkY8L2gyPlxuICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+UGFyc2UgdHJlZTwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgIDxzcGFuPlJlbW92ZSBpbnRlcm1lZGlhdGUgbm9kZXM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxFcnJvclBhcmFncmFwaCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZXhhbXBsZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gZXhhbXBsZUxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19