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
    eliminateCycles = require('../eliminateCycles'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    EliminateCyclesCheckbox = require('./checkbox/eliminateCycles'),
    eliminateImplicitLeftRecursion = require('../eliminateImplicitLeftRecursion'),
    EliminateImplicitLeftRecursionCheckbox = require('./checkbox/eliminateImplicitLeftRecursion');

var Element = easy.Element,
    BNFLexer = lexers.BNFLexer,
    BNFParser = parsers.BNFParser,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'getRules',
    value: function getRules() {
      var bnf = this.getBNF(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode);

      return rules;
    }
  }, {
    key: 'adjustBNF',
    value: function adjustBNF() {
      try {
        var eliminateCyclesCheckboxChecked = this.isEliminateCyclesCheckboxChecked(),
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked();

        var rules = this.getRules();

        if (eliminateCyclesCheckboxChecked) {
          rules = eliminateCycles(rules);
        }

        if (eliminateImplicitLeftRecursionCheckboxChecked) {
          rules = eliminateImplicitLeftRecursion(rules);
        }

        var multiLine = false,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.hideError();

        this.setAdjustedBNF(adjustedBNF);
      } catch (error) {
        this.showError();

        this.clearAdjustedBNF();
      }
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      this.adjustBNF();
    }
  }, {
    key: 'eliminateCyclesCheckboxChangeHandler',
    value: function eliminateCyclesCheckboxChangeHandler(checked) {
      this.adjustBNF();
    }
  }, {
    key: 'eliminateImplicitLeftRecursionCheckboxChangeHandler',
    value: function eliminateImplicitLeftRecursionCheckboxChangeHandler(checked) {
      if (checked) {
        this.checkEliminateCyclesCheckbox(checked);

        this.disableEliminateCyclesCheckbox();
      } else {
        this.enableEliminateCyclesCheckbox();
      }

      this.adjustBNF();
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          eliminateCyclesCheckboxChangeHandler = this.eliminateCyclesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        'Grammar utilities example'
      ), React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(EliminateCyclesCheckbox, { onChange: eliminateCyclesCheckboxChangeHandler, checked: true, enabled: true }),
          React.createElement(
            'span',
            null,
            'Eliminate cycles'
          ),
          React.createElement('br', null),
          React.createElement(EliminateImplicitLeftRecursionCheckbox, { onChange: eliminateImplicitLeftRecursionCheckboxChangeHandler }),
          React.createElement(
            'span',
            null,
            'Eliminate implicit left recursion'
          )
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Adjusted BNF'
          ),
          React.createElement(AdjustedBNFTextarea, null)
        )
      )];
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      var bnf = exampleBNF; ///

      this.setBNF(bnf);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24iLCJFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCIsIkVsZW1lbnQiLCJCTkZMZXhlciIsIkJORlBhcnNlciIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiVmlldyIsImJuZiIsImdldEJORiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlc05vZGUiLCJydWxlc05vZGVGcm9tVG9rZW5zIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiYWRqdXN0Qk5GIiwiY2hlY2tlZCIsImNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbmFibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxpQkFBaUJOLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNTyxrQkFBa0JQLFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNUSxzQkFBc0JSLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNUyx1QkFBdUJULFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NVSwwQkFBMEJWLFFBQVEsNEJBQVIsQ0FOaEM7QUFBQSxJQU9NVyxpQ0FBaUNYLFFBQVEsbUNBQVIsQ0FQdkM7QUFBQSxJQVFNWSx5Q0FBeUNaLFFBQVEsMkNBQVIsQ0FSL0M7O0FBVU0sSUFBRWEsT0FBRixHQUFjZCxJQUFkLENBQUVjLE9BQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2ViLE1BRGYsQ0FDRWEsUUFERjtBQUFBLElBRUVDLFNBRkYsR0FFZ0JiLE9BRmhCLENBRUVhLFNBRkY7QUFBQSxJ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LENBQVloQyxHQUFaOztBQUVBLFdBQUsyQixZQUFMO0FBQ0Q7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNTyxPQUFPMUMsUUFBUTJDLGNBQVIsQ0FBdUJuQyxJQUF2QixFQUE2QjJCLFVBQTdCLENBQWI7O0FBRUFPLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBekdnQjFDLE87O0FBNEduQjZDLE9BQU9DLE1BQVAsQ0FBY3RDLElBQWQsRUFBb0I7QUFDbEJ1QyxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUIzQyxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUN5Y2xlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUN5Y2xlcycpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVDeWNsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJORlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UnVsZXMoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBhZGp1c3RCTkYoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpO1xuXG4gICAgICBpZiAoZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJ1bGVzID0gZWxpbWluYXRlQ3ljbGVzKHJ1bGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbihydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IGZhbHNlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3goY2hlY2tlZCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPlxuICAgICAgICBHcmFtbWFyIHV0aWxpdGllcyBleGFtcGxlXG4gICAgICA8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgZW5hYmxlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBjeWNsZXM8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltcGxpY2l0IGxlZnQgcmVjdXJzaW9uPC9zcGFuPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkY7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19