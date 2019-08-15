'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
    first = arrayUtilities.first;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule(name, definitions, nonTerminalNode, leftRecursiveRule, noWhitespace, lookAhead) {
    _classCallCheck(this, RightRecursiveRule);

    var _this = _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).call(this, name, definitions, nonTerminalNode));

    _this.leftRecursiveRule = leftRecursiveRule;

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RightRecursiveRule, [{
    key: 'getLeftRecursiveRuleName',
    value: function getLeftRecursiveRuleName() {
      var leftRecursiveRuleName = this.leftRecursiveRule.getName();

      return leftRecursiveRuleName;
    }
  }, {
    key: 'getLeftRecursiveRule',
    value: function getLeftRecursiveRule() {
      return this.leftRecursiveRule;
    }
  }, {
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }], [{
    key: 'fromLeftRecursiveRuleAndNonTerminalNode',
    value: function fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count) {
      var leftRecursiveRuleName = leftRecursiveRule.getName(),
          rightRecursiveRuleName = '' + leftRecursiveRuleName + (count + 1) + '~',
          leftRecursiveDefinition = definitionFromRule(leftRecursiveRule),
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndLeftRecursiveDefinition(rightRecursiveRuleName, leftRecursiveDefinition),
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode, leftRecursiveRule, noWhitespace, lookAhead);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;

function definitionFromRule(rule) {
  var definitions = rule.getDefinitions(),
      firstDefinition = first(definitions),
      definition = firstDefinition; ///

  return definition;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJub25UZXJtaW5hbE5vZGUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJjb3VudCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25Gcm9tUnVsZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJoYXNOb1doaXRlc3BhY2UiLCJpc0xvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaXJzdERlZmluaXRpb24iLCJkZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FEakM7O0FBR00sSUFBRUcsSUFBRixHQUFXSixPQUFYLENBQUVJLElBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lILGNBRFosQ0FDRUcsS0FERjs7SUFHQUMsa0I7OztBQUNKLDhCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsZUFBL0IsRUFBZ0RDLGlCQUFoRCxFQUFtRUMsWUFBbkUsRUFBaUZDLFNBQWpGLEVBQTRGO0FBQUE7O0FBQUEsd0lBQ3BGTCxJQURvRixFQUM5RUMsV0FEOEUsRUFDakVDLGVBRGlFOztBQUcxRixVQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCOztBQUVBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBUDBGO0FBUTNGOzs7OytDQUUwQjtBQUN6QixVQUFNQyx3QkFBd0IsS0FBS0gsaUJBQUwsQ0FBdUJJLE9BQXZCLEVBQTlCOztBQUVBLGFBQU9ELHFCQUFQO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLSCxpQkFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7OzREQUU4Q0QsaUIsRUFBbUJELGUsRUFBaUJNLEssRUFBTztBQUN4RixVQUFNRix3QkFBd0JILGtCQUFrQkksT0FBbEIsRUFBOUI7QUFBQSxVQUNNRSw4QkFBNEJILHFCQUE1QixJQUFvREUsUUFBUSxDQUE1RCxPQUROO0FBQUEsVUFFTUUsMEJBQTBCQyxtQkFBbUJSLGlCQUFuQixDQUZoQztBQUFBLFVBR01TLDJCQUEyQmhCLHlCQUF5QmlCLG9EQUF6QixDQUE4RUosc0JBQTlFLEVBQXNHQyx1QkFBdEcsQ0FIakM7QUFBQSxVQUlNTixlQUFlUSx5QkFBeUJFLGVBQXpCLEVBSnJCO0FBQUEsVUFLTVQsWUFBWU8seUJBQXlCRyxXQUF6QixFQUxsQjtBQUFBLFVBTU1mLE9BQU9TLHNCQU5iO0FBQUEsVUFNc0M7QUFDaENSLG9CQUFjLENBQ1pXLHdCQURZLENBUHBCO0FBQUEsVUFVTUkscUJBQXFCLElBQUlqQixrQkFBSixDQUF1QkMsSUFBdkIsRUFBNkJDLFdBQTdCLEVBQTBDQyxlQUExQyxFQUEyREMsaUJBQTNELEVBQThFQyxZQUE5RSxFQUE0RkMsU0FBNUYsQ0FWM0I7O0FBWUEsYUFBT1csa0JBQVA7QUFDRDs7OztFQTNDOEJuQixJOztBQThDakNvQixPQUFPQyxPQUFQLEdBQWlCbkIsa0JBQWpCOztBQUVBLFNBQVNZLGtCQUFULENBQTRCUSxJQUE1QixFQUFrQztBQUNoQyxNQUFNbEIsY0FBY2tCLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxNQUNNQyxrQkFBa0J2QixNQUFNRyxXQUFOLENBRHhCO0FBQUEsTUFFTXFCLGFBQWFELGVBRm5CLENBRGdDLENBR0k7O0FBRXBDLFNBQU9DLFVBQVA7QUFDRCIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlLCBsZWZ0UmVjdXJzaXZlUnVsZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGUgPSBsZWZ0UmVjdXJzaXZlUnVsZTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUnVsZUFuZE5vblRlcm1pbmFsTm9kZShsZWZ0UmVjdXJzaXZlUnVsZSwgbm9uVGVybWluYWxOb2RlLCBjb3VudCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gYCR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfSR7Y291bnQgKyAxfX5gLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbkZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIG5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSwgbGVmdFJlY3Vyc2l2ZVJ1bGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25Gcm9tUnVsZShydWxlKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb247IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uO1xufSJdfQ==