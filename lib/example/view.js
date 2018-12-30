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
          rules = bnfParser.rulesFromTokens(tokens);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiZWxpbWluYXRlQ3ljbGVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlT3JwaGFuZWRSdWxlcyIsIkVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiIsIkVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiRWxlbWVudCIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJWaWV3IiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwiaGlkZUVycm9yIiwic2V0QWRqdXN0ZWRCTkYiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyQWRqdXN0ZWRCTkYiLCJhZGp1c3RCTkYiLCJjaGVja2VkIiwiY2hlY2tFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsImNoZWNrRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJkaXNhYmxlRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZGlzYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImVuYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IiwiZW5hYmxlRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IiwiZW5hYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1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Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSByZXF1aXJlKCcuLi9leGFtcGxlL2JuZicpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgcnVsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUN5Y2xlcyA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUN5Y2xlcycpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMgPSByZXF1aXJlKCcuLi9lbGltaW5hdGVPcnBoYW5lZFJ1bGVzJyksXG4gICAgICBFbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlQ3ljbGVzJyksXG4gICAgICBFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3ggPSByZXF1aXJlKCcuL2NoZWNrYm94L2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMnKSxcbiAgICAgIGVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbicpLFxuICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gcmVxdWlyZSgnLi9jaGVja2JveC9lbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24nKSxcbiAgICAgIEVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCA9IHJlcXVpcmUoJy4vY2hlY2tib3gvZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IEJORlBhcnNlciB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZyB9ID0gcnVsZXNVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UnVsZXMoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBhZGp1c3RCTkYoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQoKSxcbiAgICAgICAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCgpLFxuICAgICAgICAgICAgZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKTtcblxuICAgICAgaWYgKGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUN5Y2xlcyhydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcnVsZXMgPSBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICBydWxlcyA9IGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMocnVsZXMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhckFkanVzdGVkQk5GKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tlZCkge1xuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICB0aGlzLmNoZWNrRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94KGNoZWNrZWQpO1xuXG4gICAgICBjaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goY2hlY2tlZCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94KCk7XG5cbiAgICAgIHRoaXMuZGlzYWJsZUVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCgpO1xuXG4gICAgICB0aGlzLmVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRqdXN0Qk5GKCk7XG4gIH1cblxuICBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrZWQpIHtcbiAgICB0aGlzLmFkanVzdEJORigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVDeWNsZXNDaGVja2JveENoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgZGlzYWJsZWQgLz5cbiAgICAgICAgICA8c3Bhbj5FbGltaW5hdGUgY3ljbGVzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoYW5nZUhhbmRsZXJ9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIGltbWVkaWF0ZSBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggb25DaGFuZ2U9e2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgIDxzcGFuPkVsaW1pbmF0ZSBpbXBsaWNpdCBsZWZ0IHJlY3Vyc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8RWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IG9uQ2hhbmdlPXtlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSBjaGVja2VkIGRpc2FibGVkIC8+XG4gICAgICAgICAgPHNwYW4+RWxpbWluYXRlIG9ycGhhbmVkIHJ1bGVzPC9zcGFuPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPkFkanVzdGVkIEJORjwvaDI+XG4gICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgYm5mID0gZXhhbXBsZUJORjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=