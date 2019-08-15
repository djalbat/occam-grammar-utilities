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
    eliminateLeftRecursion = require('../eliminateLeftRecursion');

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
    value: function getParseTree(adjustedBNF) {
      var parseTree = null;

      var lexicalPattern = this.getLexicalPattern(),
          unassigned = '^.*$',
          custom = lexicalPattern,
          ///
      entries = [{ custom: custom }, { unassigned: unassigned }],
          bnf = adjustedBNF,
          ///
      basicLexer = BasicLexer.fromEntries(entries),
          basicParser = BasicParser.fromBNF(bnf),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var bnf = this.getBNF(),
            tokens = bnfLexer.tokensFromBNF(bnf);

        var rules = void 0;

        rules = bnfParser.rulesFromTokens(tokens);

        rules = eliminateLeftRecursion(rules);

        var multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.hideError();

        this.setAdjustedBNF(adjustedBNF);

        var parseTree = this.getParseTree(adjustedBNF);

        this.setParseTree(parseTree);
      } catch (error) {
        this.showError();

        this.clearAdjustedBNF();

        this.clearParseTree();
      }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZXhhbXBsZUNvbnRlbnQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJleGFtcGxlTGV4aWNhbFBhdHRlcm4iLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJCYXNpY0xleGVyIiwiQk5GTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkJORlBhcnNlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwiYWRqdXN0ZWRCTkYiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJibmYiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJnZXRCTkYiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZ2V0UGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxlQUFSLENBRmhCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSxhQUFSLENBSG5COztBQUtBLElBQU1JLGFBQWFKLFFBQVEsZ0JBQVIsQ0FBbkI7QUFBQSxJQUNNSyxjQUFjTCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTU0saUJBQWlCTixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTU8saUJBQWlCUCxRQUFRLG9CQUFSLENBSHZCO0FBQUEsSUFJTVEsa0JBQWtCUixRQUFRLG9CQUFSLENBSnhCO0FBQUEsSUFLTVMsb0JBQW9CVCxRQUFRLHNCQUFSLENBTDFCO0FBQUEsSUFNTVUsc0JBQXNCVixRQUFRLHdCQUFSLENBTjVCO0FBQUEsSUFPTVcsc0JBQXNCWCxRQUFRLHdCQUFSLENBUDVCO0FBQUEsSUFRTVksdUJBQXVCWixRQUFRLHlCQUFSLENBUjdCO0FBQUEsSUFTTWEsd0JBQXdCYixRQUFRLDJCQUFSLENBVDlCO0FBQUEsSUFVTWMseUJBQXlCZCxRQUFRLDJCQUFSLENBVi9COztBQVlNLElBQUVlLE9BQUYsR0FBY2hCLElBQWQsQ0FBRWdCLE9BQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CVixjQURwQixDQUNFVSxhQURGO0FBQUEsSUFFRUMsZUFGRixHQUVzQmQsVUFGdEIsQ0FFRWMsZUFGRjtBQUFBLElBR0VDLFVBSEYsR0FHMkJqQixNQUgzQixDQUdFaUIsVUFI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QkQ7OztpQ0FFWTtBQUNYLFdBQUtFLGFBQUw7O0FBRUEsVUFBTTdCLE1BQU03QixVQUFaO0FBQUEsVUFBd0I7QUFDbEJrQyxnQkFBVS9CLGNBRGhCO0FBQUEsVUFDZ0M7QUFDMUJxQix1QkFBaUJmLHFCQUZ2QixDQUhXLENBS21DOztBQUU5QyxXQUFLa0QsTUFBTCxDQUFZOUIsR0FBWjs7QUFFQSxXQUFLK0IsVUFBTCxDQUFnQjFCLE9BQWhCOztBQUVBLFdBQUsyQixpQkFBTCxDQUF1QnJDLGNBQXZCOztBQUVBLFdBQUtnQyxZQUFMO0FBQ0Q7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNTyxPQUFPbkQsUUFBUW9ELGNBQVIsQ0FBdUIxQyxJQUF2QixFQUE2QmtDLFVBQTdCLENBQWI7O0FBRUFPLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBeEdnQm5ELE87O0FBMkduQnNELE9BQU9DLE1BQVAsQ0FBYzdDLElBQWQsRUFBb0I7QUFDbEI4QyxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJsRCxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGV4YW1wbGVDb250ZW50ID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9jb250ZW50JyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgZXhhbXBsZUxleGljYWxQYXR0ZXJuID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb24nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBCYXNpY0xleGVyLCBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCYXNpY1BhcnNlciwgQk5GUGFyc2VyIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoYWRqdXN0ZWRCTkYpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSAnXi4qJCcsXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAgeyBjdXN0b20gfSxcbiAgICAgICAgICAgIHsgdW5hc3NpZ25lZCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmYgPSBhZGp1c3RlZEJORiwgIC8vL1xuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpO1xuXG4gICAgICBsZXQgcnVsZXM7XG5cbiAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBwYXR0ZXJuPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gZXhhbXBsZUJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGV4YW1wbGVDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGV4YW1wbGVMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==