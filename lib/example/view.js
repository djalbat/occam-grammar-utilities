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
    eliminateImmediateLeftRecursion = require('../eliminateImmediateLeftRecursion'),
    EliminateImplicitLeftRecursionCheckbox = require('./checkbox/eliminateImplicitLeftRecursion'),
    EliminateImmediateLeftRecursionCheckbox = require('./checkbox/eliminateImmediateLeftRecursion');

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
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked(),
            eliminateImmediateLeftRecursionCheckboxChecked = this.isEliminateImmediateLeftRecursionCheckboxChecked();

        var rules = this.getRules();

        if (eliminateCyclesCheckboxChecked) {
          rules = eliminateCycles(rules);
        }

        if (eliminateImplicitLeftRecursionCheckboxChecked) {
          rules = eliminateImplicitLeftRecursion(rules);
        }

        if (eliminateImmediateLeftRecursionCheckboxChecked) {
          rules = eliminateImmediateLeftRecursion(rules);
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

        checked = false;

        this.checkEliminateImmediateLeftRecursionCheckbox(checked);

        this.disableEliminateCyclesCheckbox();

        this.disableEliminateImmediateLeftRecursionCheckbox();
      } else {
        this.enableEliminateCyclesCheckbox();

        this.enableEliminateImmediateLeftRecursionCheckbox();
      }

      this.adjustBNF();
    }
  }, {
    key: 'eliminateImmediateLeftRecursionCheckboxChangeHandler',
    value: function eliminateImmediateLeftRecursionCheckboxChangeHandler(checked) {
      this.adjustBNF();
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          eliminateCyclesCheckboxChangeHandler = this.eliminateCyclesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this),
          eliminateImmediateLeftRecursionCheckboxChangeHandler = this.eliminateImmediateLeftRecursionCheckboxChangeHandler.bind(this);

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
          React.createElement(EliminateCyclesCheckbox, { onChange: eliminateCyclesCheckboxChangeHandler, checked: true, disabled: true }),
          React.createElement(
            'span',
            null,
            'Eliminate cycles'
          ),
          React.createElement('br', null),
          React.createElement(EliminateImmediateLeftRecursionCheckbox, { onChange: eliminateImmediateLeftRecursionCheckboxChangeHandler, disabled: true }),
          React.createElement(
            'span',
            null,
            'Eliminate immediate left recursion'
          ),
          React.createElement('br', null),
          React.createElement(EliminateImplicitLeftRecursionCheckbox, { onChange: eliminateImplicitLeftRecursionCheckboxChangeHandler, checked: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24iLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uIiwiRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJFbGVtZW50IiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJydWxlc0FzU3RyaW5nIiwiU2l6ZWFibGVFbGVtZW50IiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIlZpZXciLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXNOb2RlIiwicnVsZXNOb2RlRnJvbVRva2VucyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsImVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCIsImlzRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkIiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyQWRqdXN0ZWRCTkYiLCJhZGp1c3RCTkYiLCJjaGVja2VkIiwiY2hlY2tFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsImNoZWNrRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZGlzYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiZGlzYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImVuYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiZW5hYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7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QyxVQUFNUSxPQUFPaEQsUUFBUWlELGNBQVIsQ0FBdUJ6QyxJQUF2QixFQUE2QmdDLFVBQTdCLENBQWI7O0FBRUFRLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBOUhnQmhELE87O0FBaUluQm1ELE9BQU9DLE1BQVAsQ0FBYzVDLElBQWQsRUFBb0I7QUFDbEI2QyxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJqRCxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUN5Y2xlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUN5Y2xlcycpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVDeWNsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJORlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UnVsZXMoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBhZGp1c3RCTkYoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBsZXQgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCk7XG5cbiAgICAgIGlmIChlbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVDeWNsZXMocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJ1bGVzID0gZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uKHJ1bGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbXVsdGlMaW5lID0gZmFsc2UsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tFbGltaW5hdGVDeWNsZXNDaGVja2JveChjaGVja2VkKTtcblxuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICB0aGlzLmRpc2FibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT5cbiAgICAgICAgR3JhbW1hciB1dGlsaXRpZXMgZXhhbXBsZVxuICAgICAgPC9oMT4sXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxFbGltaW5hdGVDeWNsZXNDaGVja2JveCBvbkNoYW5nZT17ZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGN5Y2xlczwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBkaXNhYmxlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBpbW1lZGlhdGUgbGVmdCByZWN1cnNpb248L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgaW1wbGljaXQgbGVmdCByZWN1cnNpb248L3NwYW4+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gZXhhbXBsZUJORjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=