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
    eliminateOrphanedRules = require('../eliminateOrphanedRules'),
    EliminateCyclesCheckbox = require('./checkbox/eliminateCycles'),
    EliminateOrphanedRulesCheckbox = require('./checkbox/eliminateOrphanedRules'),
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
            eliminateOrphanedRulesCheckboxChecked = this.isEliminateOrphanedRulesCheckboxChecked(),
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

        if (eliminateOrphanedRulesCheckboxChecked) {
          rules = eliminateOrphanedRules(rules);
        }

        var multiLine = true,
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
    key: 'eliminateOrphanedRulesCheckboxChangeHandler',
    value: function eliminateOrphanedRulesCheckboxChangeHandler(checked) {
      this.adjustBNF();
    }
  }, {
    key: 'eliminateImplicitLeftRecursionCheckboxChangeHandler',
    value: function eliminateImplicitLeftRecursionCheckboxChangeHandler(checked) {
      if (checked) {
        this.checkEliminateCyclesCheckbox(checked);

        this.checkEliminateOrphanedRulesCheckbox(checked);

        checked = false;

        this.checkEliminateImmediateLeftRecursionCheckbox(checked);

        this.disableEliminateCyclesCheckbox();

        this.disableEliminateOrphanedRulesCheckbox();

        this.disableEliminateImmediateLeftRecursionCheckbox();
      } else {
        this.enableEliminateCyclesCheckbox();

        this.enableEliminateOrphanedRulesCheckbox();

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
          eliminateOrphanedRulesCheckboxChangeHandler = this.eliminateOrphanedRulesCheckboxChangeHandler.bind(this),
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
          ),
          React.createElement('br', null),
          React.createElement(EliminateOrphanedRulesCheckbox, { onChange: eliminateOrphanedRulesCheckboxChangeHandler, checked: true, disabled: true }),
          React.createElement(
            'span',
            null,
            'Eliminate orphaned rules'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlcyIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiIsIkVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxlbWVudCIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21Ub2tlbnMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJlbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJnZXRSdWxlcyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJoaWRlRXJyb3IiLCJzZXRBZGp1c3RlZEJORiIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJBZGp1c3RlZEJORiIsImFkanVzdEJORiIsImNoZWNrZWQiLCJjaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiY2hlY2tFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJjaGVja0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImRpc2FibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsImRpc2FibGVFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbmFibGVFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJlbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlciIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxpQkFBaUJOLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNTyxrQkFBa0JQLFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNUSxzQkFBc0JSLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNUyx1QkFBdUJULFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NVSx5QkFBeUJWLFFBQVEsMkJBQVIsQ0FOL0I7QUFBQSxJQU9NVywwQkFBMEJYLFFBQVEsNEJBQVIsQ0FQaEM7QUFBQSxJQVFNWSxpQ0FBaUNaLFFBQVEsbUNBQVIsQ0FSdkM7QUFBQSxJQVNNYSxpQ0FBaUNiLFFBQVEsbUNBQVIsQ0FUdkM7QUFBQSxJQVVNYyxrQ0FBa0NkLFFBQVEsb0NBQVIsQ0FWeEM7QUFBQSxJQVdNZSx5Q0FBeUNmLFFBQVEsMkNBQVIsQ0FYL0M7QUFBQSxJQVlNZ0IsMENBQTBDaEIsUUFBUSw0Q0FBUixDQVpoRDs7QUFjTSxJQUFFaUIsT0FBRixHQUFjbEIsSUFBZCxDQUFFa0IsT0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZWpCLE1BRGYsQ0FDRWlCLFFBREY7QUFBQSxJQUVFQyxTQUZGLEdBRWdCakIsT0FGaEIsQ0FFRWlCLFNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR29CZCxjQUhwQixDQUdFYyxhQUhGO0FBQUEsSUFJRUMsZUFKRixHQUlzQmxCLFVBSnRCLENBSUVr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LElBQWQsRUFBb0I7QUFDbEJtRCxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ2RCxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUN5Y2xlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUN5Y2xlcycpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMgPSByZXF1aXJlKCcuLi9lbGltaW5hdGVPcnBoYW5lZFJ1bGVzJyksXG4gICAgICBFbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlQ3ljbGVzJyksXG4gICAgICBFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJORlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UnVsZXMoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXNOb2RlID0gYm5mUGFyc2VyLnJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBhZGp1c3RCTkYoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKTtcblxuICAgICAgaWYgKGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUN5Y2xlcyhydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goY2hlY2tlZCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+XG4gICAgICAgIEdyYW1tYXIgdXRpbGl0aWVzIGV4YW1wbGVcbiAgICAgIDwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8RWxpbWluYXRlQ3ljbGVzQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlcn0gY2hlY2tlZCBkaXNhYmxlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBjeWNsZXM8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCBvbkNoYW5nZT17ZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcn0gZGlzYWJsZWQgLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgaW1tZWRpYXRlIGxlZnQgcmVjdXJzaW9uPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCBvbkNoYW5nZT17ZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltcGxpY2l0IGxlZnQgcmVjdXJzaW9uPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgZGlzYWJsZWQgLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgb3JwaGFuZWQgcnVsZXM8L3NwYW4+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gZXhhbXBsZUJORjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=