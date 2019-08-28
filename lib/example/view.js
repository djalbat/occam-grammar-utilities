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
    nodeUtilities = require('../utilities/node'),
    rulesUtilities = require('../utilities/rules'),
    exampleContent = require('../example/content'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    exampleLexicalPattern = require('../example/lexicalPattern'),
    eliminateLeftRecursion = require('../eliminateLeftRecursion'),
    RemoveIntermediateNodesCheckbox = require('./checkbox/removeIntermediateNodes');

var Element = easy.Element,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement,
    BasicLexer = lexers.BasicLexer,
    BNFLexer = lexers.BNFLexer,
    BasicParser = parsers.BasicParser,
    BNFParser = parsers.BNFParser,
    removeIntermediateNodes = nodeUtilities.removeIntermediateNodes;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsIm5vZGVVdGlsaXRpZXMiLCJydWxlc1V0aWxpdGllcyIsImV4YW1wbGVDb250ZW50IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsUGF0dGVybklucHV0IiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZXhhbXBsZUxleGljYWxQYXR0ZXJuIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIlJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3giLCJFbGVtZW50IiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsIkJhc2ljTGV4ZXIiLCJCTkZMZXhlciIsIkJhc2ljUGFyc2VyIiwiQk5GUGFyc2VyIiwicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiVmlldyIsInJ1bGVzIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJjdXN0b20iLCJlbnRyaWVzIiwiYmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiY2hhbmdlSGFuZGxlciIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxnQkFBZ0JOLFFBQVEsbUJBQVIsQ0FGdEI7QUFBQSxJQUdNTyxpQkFBaUJQLFFBQVEsb0JBQVIsQ0FIdkI7QUFBQSxJQUlNUSxpQkFBaUJSLFFBQVEsb0JBQVIsQ0FKdkI7QUFBQSxJQUtNUyxrQkFBa0JULFFBQVEsb0JBQVIsQ0FMeEI7QUFBQSxJQU1NVSxvQkFBb0JWLFFBQVEsc0JBQVIsQ0FOMUI7QUFBQSxJQU9NVyxzQkFBc0JYLFFBQVEsd0JBQVIsQ0FQNUI7QUFBQSxJQVFNWSxzQkFBc0JaLFFBQVEsd0JBQVIsQ0FSNUI7QUFBQSxJQVNNYSx1QkFBdUJiLFFBQVEseUJBQVIsQ0FUN0I7QUFBQSxJQVVNYyx3QkFBd0JkLFFBQVEsMkJBQVIsQ0FWOUI7QUFBQSxJQVdNZSx5QkFBeUJmLFFBQVEsMkJBQVIsQ0FYL0I7QUFBQSxJQVlNZ0Isa0NB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aEQsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIG5vZGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbm9kZScpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGV4YW1wbGVDb250ZW50ID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9jb250ZW50JyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgZXhhbXBsZUxleGljYWxQYXR0ZXJuID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb24nKSxcbiAgICAgIFJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L3JlbW92ZUludGVybWVkaWF0ZU5vZGVzJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgQmFzaWNMZXhlciwgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgQmFzaWNQYXJzZXIsIEJORlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZShydWxlcykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9ICdeLiokJyxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzO1xuXG4gICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShydWxlcyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgLy8gfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBwYXR0ZXJuPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxzcGFuPlJlbW92ZSBpbnRlcm1lZGlhdGUgbm9kZXM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyPkNvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZXhhbXBsZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gZXhhbXBsZUxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19