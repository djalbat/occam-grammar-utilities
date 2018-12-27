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
          React.createElement(EliminateOrphanedRulesCheckbox, { onChange: eliminateOrphanedRulesCheckboxChangeHandler, checked: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlcyIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiIsIkVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxlbWVudCIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzTm9kZSIsInJ1bGVzTm9kZUZyb21Ub2tlbnMiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJlbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJnZXRSdWxlcyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJoaWRlRXJyb3IiLCJzZXRBZGp1c3RlZEJORiIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJBZGp1c3RlZEJORiIsImFkanVzdEJORiIsImNoZWNrZWQiLCJjaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlciIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxpQkFBaUJOLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNTyxrQkFBa0JQLFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNUSxzQkFBc0JSLFFBQVEsd0JBQVIsQ0FKNUI7QUFBQSxJQUtNUyx1QkFBdUJULFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NVSx5QkFBeUJWLFFBQVEsMkJBQVIsQ0FOL0I7QUFBQSxJQU9NVywwQkFBMEJYLFFBQVEsNEJBQVIsQ0FQaEM7QUFBQSxJQVFNWSxpQ0FBaUNaLFFBQVEsbUNBQVIsQ0FSdkM7QUFBQSxJQVNNYSxpQ0FBaUNiLFFBQVEsbUNBQVIsQ0FUdkM7QUFBQSxJQVVNYyxrQ0FBa0NkLFFBQVEsb0NBQVIsQ0FWeEM7QUFBQSxJQVdNZSx5Q0FBeUNmLFFBQVEsMkNBQVIsQ0FYL0M7QUFBQSxJQVlNZ0IsMENBQTBDaEIsUUFBUSw0Q0FBUixDQVpoRDs7QUFjTSxJQUFFaUIsT0FBRixHQUFjbEIsSUFBZCxDQUFFa0IsT0FBRjtBQUFBLElBQ0VDLFFBREYsR0FDZWpCLE1BRGYsQ0FDRWlCLFFBREY7QUFBQSxJQUVFQyxTQUZGLEdBRWdCakIsT0FGaEIsQ0FFRWlCLFNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR29CZCxjQUhwQixDQUdFYyxhQUhGO0FBQUEsSUFJRUMsZUFKRixHQUlzQmxCLFVBSnRCLENBSUVrQixlQUpGOzs7QUFNTixJQUFNQyxXQUFXSixTQUFTSyxXQUFULEVBQWpCO0FBQUEsSUFDTUMsWUFBWUwsVUFBVUksV0FBVixFQURsQjs7SUFHTUUsSTs7Ozs7Ozs7Ozs7K0JBQ087QUFDVCxVQUFNQyxNQUFNLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01DLFNBQVNOLFNBQVNPLGFBQVQsQ0FBdUJILEdBQXZCLENBRGY7QUFBQSxVQUVNSSxZQUFZTixVQUFVTyxtQkFBVixDQUE4QkgsTUFBOUIsQ0FGbEI7QUFBQSxVQUdNSSxRQUFRYixVQUFVYyxhQUFWLENBQXdCSCxTQUF4QixDQUhkOztBQUtBLGFBQU9FLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSTtBQUNGLFlBQU1FLGlDQUFpQyxLQUFLQyxnQ0FBTCxFQUF2QztBQUFBLFlBQ01DLHdDQUF3QyxLQUFLQyx1Q0FBTCxFQUQ5QztBQUFBLFlBRU1DLGdEQUFnRCxLQUFLQywrQ0FBTCxFQUZ0RDtBQUFBLFlBR01DLGlEQUFpRCxLQUFLQyxnREFBTCxFQUh2RDs7QUFLQSxZQUFJVCxRQUFRLEtBQUtVLFFBQUwsRUFBWjs7QUFFQSxZQUFJUiw4QkFBSixFQUFvQztBQUNsQ0Ysa0JBQVF6QixnQkFBZ0J5QixLQUFoQixDQUFSO0FBQ0Q7O0FBRUQsWUFBSU0sNkNBQUosRUFBbUQ7QUFDakROLGtCQUFRbkIsK0JBQStCbUIsS0FBL0IsQ0FBUjtBQUNEOztBQUVELFlBQUlRLDhDQUFKLEVBQW9EO0FBQ2xEUixrQkFBUWxCLGdDQUFnQ2tCLEtBQWhDLENBQVI7QUFDRDs7QUFFRCxZQUFJSSxxQ0FBSixFQUEyQztBQUN6Q0osa0JBQVF0Qix1QkFBdUJzQixLQUF2QixDQUFSO0FBQ0Q7O0FBRUQsWUFBTVcsWUFBWSxJQUFsQjtBQUFBLFlBQ01DLGNBQWN4QixjQUFjWSxLQUFkLEVBQXFCVyxTQUFyQixDQURwQjtBQUFBLFlBRU1FLGNBQWNELFdBRnBCLENBeEJFLENBMEJnQzs7QUFFbEMsYUFBS0UsU0FBTDs7QUFFQSxhQUFLQyxjQUFMLENBQW9CRixXQUFwQjtBQUNELE9BL0JELENBK0JFLE9BQU9HLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7O0FBRUEsYUFBS0MsZ0JBQUw7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixXQUFLQyxTQUFMO0FBQ0Q7Ozt5REFFb0NDLE8sRUFBUztBQUM1QyxXQUFLRCxTQUFMO0FBQ0Q7OztnRUFFMkNDLE8sRUFBUztBQUNuRCxXQUFLRCxTQUFMO0FBQ0Q7Ozt3RUFFbURDLE8sRUFBUztBQUMzRCxVQUFJQSxPQUFKLEVBQWE7QUFDWCxhQUFLQyw0QkFBTCxDQUFrQ0QsT0FBbEM7O0FBRUFBLGtCQUFVLEtBQVY7O0FBRUEsYUFBS0UsNENBQUwsQ0FBa0RGLE9BQWxEOztBQUVBLGFBQUtHLDhCQUFMOztBQUVBLGFBQUtDLDhDQUFMO0FBQ0QsT0FWRCxNQVVPO0FBQ0wsYUFBS0MsNkJBQUw7O0FBRUEsYUFBS0MsNkNBQUw7QUFDRDs7QUFFRCxXQUFLUCxTQUFMO0FBQ0Q7Ozt5RUFFb0RDLE8sRUFBUztBQUM1RCxXQUFLRCxTQUFMO0FBQ0Q7OztrQ0FFYVEsVSxFQUFZO0FBQ3hCLFVBQU1DLGVBQWUsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFBQSxVQUNNQyx1Q0FBdUMsS0FBS0Esb0NBQUwsQ0FBMENELElBQTFDLENBQStDLElBQS9DLENBRDdDO0FBQUEsVUFFTUUsOENBQThDLEtBQUtBLDJDQUFMLENBQWlERixJQUFqRCxDQUFzRCxJQUF0RCxDQUZwRDtBQUFBLFVBR01HLHNEQUFzRCxLQUFLQSxtREFBTCxDQUF5REgsSUFBekQsQ0FBOEQsSUFBOUQsQ0FINUQ7QUFBQSxVQUlNSSx1REFBdUQsS0FBS0Esb0RBQUwsQ0FBMERKLElBQTFELENBQStELElBQS9ELENBSjdEOztBQU1BLGFBQVEsQ0FFTjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRk0sRUFLTjtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxXQUFELElBQWEsU0FBU0QsWUFBdEIsR0FGRjtBQUdFLDhCQUFDLHVCQUFELElBQXlCLFVBQVVFLG9DQUFuQyxFQUF5RSxhQUF6RSxFQUFpRixjQUFqRixHQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGO0FBS0UseUNBTEY7QUFNRSw4QkFBQyx1Q0FBRCxJQUF5QyxVQUFVRyxvREFBbkQsRUFBeUcsY0FBekcsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFLHlDQVJGO0FBU0UsOEJBQUMsc0NBQUQsSUFBd0MsVUFBVUQsbURBQWxELEVBQXVHLGFBQXZHLEdBVEY7QUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVkY7QUFXRSx5Q0FYRjtBQVlFLDhCQUFDLDhCQUFELElBQWdDLFVBQVVELDJDQUExQyxFQUF1RixhQUF2RixHQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGLFNBREY7QUFnQkUsNEJBQUMsb0JBQUQsT0FoQkY7QUFpQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsbUJBQUQ7QUFGRjtBQWpCRixPQUxNLENBQVI7QUE2QkQ7OztpQ0FFWTtBQUNYLFdBQUtHLGFBQUw7O0FBRUEsVUFBTXhDLE1BQU10QixVQUFaLENBSFcsQ0FHYTs7QUFFeEIsV0FBSytELE1BQUwsQ0FBWXpDLEdBQVo7O0FBRUEsV0FBS2tDLFlBQUw7QUFDRDs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1TLE9BQU9uRCxRQUFRb0QsY0FBUixDQUF1QjVDLElBQXZCLEVBQTZCa0MsVUFBN0IsQ0FBYjs7QUFFQVMsV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUEzSWdCbkQsTzs7QUE4SW5Cc0QsT0FBT0MsTUFBUCxDQUFjL0MsSUFBZCxFQUFvQjtBQUNsQmdELFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQnBELElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgZXhhbXBsZUJORiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvYm5mJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgZWxpbWluYXRlQ3ljbGVzID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlQ3ljbGVzJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgZWxpbWluYXRlT3JwaGFuZWRSdWxlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMnKSxcbiAgICAgIEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVDeWNsZXMnKSxcbiAgICAgIEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlT3JwaGFuZWRSdWxlcycpLFxuICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uJyksXG4gICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgQk5GUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRSdWxlcygpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBibmZQYXJzZXIucnVsZXNOb2RlRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMocnVsZXNOb2RlKTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGFkanVzdEJORigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpO1xuXG4gICAgICBpZiAoZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJ1bGVzID0gZWxpbWluYXRlQ3ljbGVzKHJ1bGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbihydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJ1bGVzID0gZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJ1bGVzID0gZWxpbWluYXRlT3JwaGFuZWRSdWxlcyhydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3goY2hlY2tlZCk7XG5cbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5jaGVja0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveChjaGVja2VkKTtcblxuICAgICAgdGhpcy5kaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3goKTtcblxuICAgICAgdGhpcy5kaXNhYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3goKTtcblxuICAgICAgdGhpcy5lbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPlxuICAgICAgICBHcmFtbWFyIHV0aWxpdGllcyBleGFtcGxlXG4gICAgICA8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgZGlzYWJsZWQgLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgY3ljbGVzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltbWVkaWF0ZSBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBpbXBsaWNpdCBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIG9ycGhhbmVkIHJ1bGVzPC9zcGFuPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkY7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19