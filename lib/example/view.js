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
    ExcludingFirstRuleCheckbox = require('./checkbox/excludingFirstRule'),
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
          rules = bnfParser.rulesFromTokens(tokens);

      return rules;
    }
  }, {
    key: 'adjustBNF',
    value: function adjustBNF() {
      try {
        var eliminateCyclesCheckboxChecked = this.isEliminateCyclesCheckboxChecked(),
            excludingFirstRuleCheckboxChecked = this.isExcludingFirstRuleCheckboxChecked(),
            eliminateOrphanedRulesCheckboxChecked = this.isEliminateOrphanedRulesCheckboxChecked(),
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked(),
            eliminateImmediateLeftRecursionCheckboxChecked = this.isEliminateImmediateLeftRecursionCheckboxChecked(),
            excludingFirstRule = excludingFirstRuleCheckboxChecked; ///

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
          rules = eliminateOrphanedRules(rules, excludingFirstRule);
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
    key: 'excludingFirstRuleCheckboxChangeHandler',
    value: function excludingFirstRuleCheckboxChangeHandler(checked) {
      this.adjustBNF();
    }
  }, {
    key: 'eliminateOrphanedRulesCheckboxChangeHandler',
    value: function eliminateOrphanedRulesCheckboxChangeHandler(checked) {
      if (checked) {
        this.enableExcludingFirstRuleCheckbox();
      } else {
        this.checkExcludingFirstRuleCheckbox(checked);

        this.disableExcludingFirstRuleCheckbox();
      }

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

        this.disableEliminateImmediateLeftRecursionCheckbox();
      } else {
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
          excludingFirstRuleCheckboxChangeHandler = this.excludingFirstRuleCheckboxChangeHandler.bind(this),
          eliminateOrphanedRulesCheckboxChangeHandler = this.eliminateOrphanedRulesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this),
          eliminateImmediateLeftRecursionCheckboxChangeHandler = this.eliminateImmediateLeftRecursionCheckboxChangeHandler.bind(this);

      return React.createElement(
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
          React.createElement(EliminateCyclesCheckbox, { onChange: eliminateCyclesCheckboxChangeHandler }),
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
          ),
          React.createElement('br', null),
          React.createElement(ExcludingFirstRuleCheckbox, { onChange: excludingFirstRuleCheckboxChangeHandler, checked: true }),
          React.createElement(
            'span',
            null,
            'excluding first rule'
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
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlcyIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24iLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uIiwiRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJFbGVtZW50IiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJydWxlc0FzU3RyaW5nIiwiU2l6ZWFibGVFbGVtZW50IiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIlZpZXciLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJlbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJpc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCIsImV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hlY2tlZCIsImlzRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGVja2VkIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCIsImlzRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCIsImVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImlzRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImlzRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCIsImV4Y2x1ZGluZ0ZpcnN0UnVsZSIsImdldFJ1bGVzIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsImhpZGVFcnJvciIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJjbGVhckFkanVzdGVkQk5GIiwiYWRqdXN0Qk5GIiwiY2hlY2tlZCIsImVuYWJsZUV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94IiwiY2hlY2tFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCIsImRpc2FibGVFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCIsImNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJjaGVja0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCIsImNoZWNrRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZGlzYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hhbmdlSGFuZGxlciIsImVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBR01HLGFBQWFILFFBQVEsYUFBUixDQUhuQjs7QUFLQSxJQUFNSSxhQUFhSixRQUFRLGdCQUFSLENBQW5CO0FBQUEsSUFDTUssY0FBY0wsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1NLGlCQUFpQk4sUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01PLGtCQUFrQlAsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1RLHNCQUFzQlIsUUFBUSx3QkFBUixDQUo1QjtBQUFBLElBS01TLHVCQUF1QlQsUUFBUSx5QkFBUixDQUw3QjtBQUFBLElBTU1VLHlCQUF5QlYsUUFBUSwyQkFBUixDQU4vQjtBQUFBLElBT01XLDBCQUEwQlgsUUFBUSw0QkFBUixDQVBoQztBQUFBLElBUU1ZLDZCQUE2QlosUUFBUSwrQkFBUixDQVJuQztBQUFBLElBU01hLGlDQUFpQ2IsUUFBUSxtQ0FBUixDQVR2QztBQUFBLElBVU1jLGlDQUFpQ2QsUUFBUSxtQ0FBUixDQVZ2QztBQUFBLElBV01lLGtDQUFrQ2YsUUFBUSxvQ0FBUixDQVh4QztBQUFBLElBWU1nQix5Q0FBeUNoQixRQUFRLDJDQUFSLENBWi9DO0FBQUEsSUFhTWlCLDBDQUEwQ2pCLFFBQVEsNENBQVIsQ0FiaEQ7O0FBZU0sSUFBRWtCLE9BQUYsR0FBY25CLElBQWQsQ0FBRW1CLE9BQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2VsQixN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QUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLG1CQUFEO0FBRkY7QUFwQkYsT0FGRjtBQTZCRDs7O2lDQUVZO0FBQ1gsV0FBS0ksYUFBTDs7QUFFQSxVQUFNNUMsTUFBTXZCLFVBQVosQ0FIVyxDQUdhOztBQUV4QixXQUFLb0UsTUFBTCxDQUFZN0MsR0FBWjs7QUFFQSxXQUFLcUMsWUFBTDtBQUNEOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTVUsT0FBT3ZELFFBQVF3RCxjQUFSLENBQXVCaEQsSUFBdkIsRUFBNkJxQyxVQUE3QixDQUFiOztBQUVBVSxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXZKZ0J2RCxPOztBQTBKbkIwRCxPQUFPQyxNQUFQLENBQWNuRCxJQUFkLEVBQW9CO0FBQ2xCb0QsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCeEQsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBlbGltaW5hdGVDeWNsZXMgPSByZXF1aXJlKCcuLi9lbGltaW5hdGVDeWNsZXMnKSxcbiAgICAgIEFkanVzdGVkQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2FkanVzdGVkQk5GJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlT3JwaGFuZWRSdWxlcycpLFxuICAgICAgRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZUN5Y2xlcycpLFxuICAgICAgRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2V4Y2x1ZGluZ0ZpcnN0UnVsZScpLFxuICAgICAgRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVPcnBoYW5lZFJ1bGVzJyksXG4gICAgICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24nKSxcbiAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uJyksXG4gICAgICBFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uJyksXG4gICAgICBFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBCTkZQYXJzZXIgfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFJ1bGVzKCkge1xuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgYWRqdXN0Qk5GKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBleGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZXhjbHVkaW5nRmlyc3RSdWxlID0gZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGVja2VkOyAgLy8vXG5cbiAgICAgIGxldCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKTtcblxuICAgICAgaWYgKGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUN5Y2xlcyhydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMocnVsZXMsIGV4Y2x1ZGluZ0ZpcnN0UnVsZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLmVuYWJsZUV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveChjaGVja2VkKTtcblxuICAgICAgdGhpcy5kaXNhYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goY2hlY2tlZCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8RWxpbWluYXRlQ3ljbGVzQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgY3ljbGVzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltbWVkaWF0ZSBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBpbXBsaWNpdCBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIG9ycGhhbmVkIHJ1bGVzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCBvbkNoYW5nZT17ZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+ZXhjbHVkaW5nIGZpcnN0IHJ1bGU8L3NwYW4+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==