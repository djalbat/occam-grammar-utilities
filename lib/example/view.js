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
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    eliminateOrphanedRules = require('../eliminateOrphanedRules'),
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
        var excludingFirstRuleCheckboxChecked = this.isExcludingFirstRuleCheckboxChecked(),
            eliminateOrphanedRulesCheckboxChecked = this.isEliminateOrphanedRulesCheckboxChecked(),
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked(),
            eliminateImmediateLeftRecursionCheckboxChecked = this.isEliminateImmediateLeftRecursionCheckboxChecked(),
            excludingFirstRule = excludingFirstRuleCheckboxChecked; ///

        var rules = this.getRules();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlcyIsIkV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiIsIkVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxlbWVudCIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGVja2VkIiwiaXNFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiZXhjbHVkaW5nRmlyc3RSdWxlIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyQWRqdXN0ZWRCTkYiLCJhZGp1c3RCTkYiLCJjaGVja2VkIiwiZW5hYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJjaGVja0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94IiwiZGlzYWJsZUV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94IiwiY2hlY2tFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJjaGVja0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJlbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdz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d0MsVUFBVUQsbURBQWxELEVBQXVHLGFBQXZHLEdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEY7QUFRRSx5Q0FSRjtBQVNFLDhCQUFDLDhCQUFELElBQWdDLFVBQVVELDJDQUExQyxFQUF1RixhQUF2RixHQVRGO0FBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVZGO0FBV0UseUNBWEY7QUFZRSw4QkFBQywwQkFBRCxJQUE0QixVQUFVRCx1Q0FBdEMsRUFBK0UsYUFBL0UsR0FaRjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRixTQURGO0FBZ0JFLDRCQUFDLG9CQUFELE9BaEJGO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLG1CQUFEO0FBRkY7QUFqQkYsT0FGRjtBQTBCRDs7O2lDQUVZO0FBQ1gsV0FBS0ksYUFBTDs7QUFFQSxVQUFNeEMsTUFBTXJCLFVBQVosQ0FIVyxDQUdhOztBQUV4QixXQUFLOEQsTUFBTCxDQUFZekMsR0FBWjs7QUFFQSxXQUFLa0MsWUFBTDtBQUNEOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTVMsT0FBT25ELFFBQVFvRCxjQUFSLENBQXVCNUMsSUFBdkIsRUFBNkJrQyxVQUE3QixDQUFiOztBQUVBUyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXhJZ0JuRCxPOztBQTJJbkJzRCxPQUFPQyxNQUFQLENBQWMvQyxJQUFkLEVBQW9CO0FBQ2xCZ0QsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCcEQsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBleGFtcGxlQk5GID0gcmVxdWlyZSgnLi4vZXhhbXBsZS9ibmYnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBBZGp1c3RlZEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9hZGp1c3RlZEJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgZWxpbWluYXRlT3JwaGFuZWRSdWxlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMnKSxcbiAgICAgIEV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9leGNsdWRpbmdGaXJzdFJ1bGUnKSxcbiAgICAgIEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlT3JwaGFuZWRSdWxlcycpLFxuICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uJyksXG4gICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgQk5GUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRSdWxlcygpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGFkanVzdEJORigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKCksXG4gICAgICAgICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGV4Y2x1ZGluZ0ZpcnN0UnVsZSA9IGV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hlY2tlZDsgIC8vL1xuXG4gICAgICBsZXQgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCk7XG5cbiAgICAgIGlmIChlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMocnVsZXMsIGV4Y2x1ZGluZ0ZpcnN0UnVsZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICB0aGlzLmVuYWJsZUV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveChjaGVja2VkKTtcblxuICAgICAgdGhpcy5kaXNhYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveChjaGVja2VkKTtcblxuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICB0aGlzLmRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGVja2VkKSB7XG4gICAgdGhpcy5hZGp1c3RCTkYoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5leGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gdGhpcy5lbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltbWVkaWF0ZSBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBpbXBsaWNpdCBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIG9ycGhhbmVkIHJ1bGVzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCBvbkNoYW5nZT17ZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgPHNwYW4+ZXhjbHVkaW5nIGZpcnN0IHJ1bGU8L3NwYW4+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+QWRqdXN0ZWQgQk5GPC9oMj5cbiAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSBleGFtcGxlQk5GOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==