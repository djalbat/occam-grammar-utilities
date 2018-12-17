'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary'),
    parsers = require('occam-parsers');

var UnitDefinition = require('../definition/unit');

var Rule = parsers.Rule,
    arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, [{
    key: 'getUnitRuleName',
    value: function getUnitRuleName() {
      var definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition,
          ///
      unitRuleName = unitDefinition.getRuleName();

      return unitRuleName;
    }
  }, {
    key: 'isNotCyclic',
    value: function isNotCyclic() {
      var name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          notCyclic = name !== unitRuleName;

      return notCyclic;
    }
  }, {
    key: 'isIncludedInRuleNames',
    value: function isIncludedInRuleNames(ruleNames) {
      var name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          ruleNamesContainsName = ruleNames.includes(name),
          ruleNamesContainsUnitRuleName = ruleNames.includes(unitRuleName),
          includedInRuleNames = ruleNamesContainsName && ruleNamesContainsUnitRuleName;

      return includedInRuleNames;
    }
  }], [{
    key: 'fromNameAndUnitDefinition',
    value: function fromNameAndUnitDefinition(name, unitDefinition) {
      var definitions = [unitDefinition],
          Node = null,
          ///
      unitRule = new UnitRule(name, definitions, Node);

      return unitRule;
    }
  }, {
    key: 'fromNameAndRuleName',
    value: function fromNameAndRuleName(name, ruleName) {
      var unitDefinition = UnitDefinition.fromRuleName(ruleName),
          unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition);

      return unitRule;
    }
  }, {
    key: 'fromRuleNames',
    value: function fromRuleNames(firstRuleName, secondRuleName) {
      var name = firstRuleName,
          ///
      ruleName = secondRuleName,
          ///
      unitRule = UnitRule.fromNameAndRuleName(name, ruleName);

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3VuaXQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhcnNlcnMiLCJVbml0RGVmaW5pdGlvbiIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVW5pdFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0UnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VW5pdFJ1bGVOYW1lIiwibm90Q3ljbGljIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzQ29udGFpbnNOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZXNDb250YWluc1VuaXRSdWxlTmFtZSIsImluY2x1ZGVkSW5SdWxlTmFtZXMiLCJOb2RlIiwidW5pdFJ1bGUiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZSIsImZyb21OYW1lQW5kVW5pdERlZmluaXRpb24iLCJmaXJzdFJ1bGVOYW1lIiwic2Vjb25kUnVsZU5hbWUiLCJmcm9tTmFtZUFuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7QUFBQSxJQUNJQyxVQUFVRCxRQUFRLGVBQVIsQ0FEZDs7QUFHQSxJQUFNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FBdkI7O0FBRU0sSUFBRUcsSUFBRixHQUFXRixPQUFYLENBQUVFLElBQUY7QUFBQSxJQUNBQyxjQURBLEdBQ21CTCxTQURuQixDQUNBSyxjQURBO0FBQUEsSUFFQUMsS0FGQSxHQUVVRCxjQUZWLENBRUFDLEtBRkE7O0lBSUFDLFE7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCLFVBQU1DLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01DLGtCQUFrQkosTUFBTUUsV0FBTixDQUR4QjtBQUFBLFVBRU1HLGlCQUFpQkQsZUFGdkI7QUFBQSxVQUV3QztBQUNsQ0UscUJBQWVELGVBQWVFLFdBQWYsRUFIckI7O0FBS0EsYUFBT0QsWUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRSxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01ILGVBQWUsS0FBS0ksZUFBTCxFQURyQjtBQUFBLFVBRU1DLFlBQWFILFNBQVNGLFlBRjVCOztBQUlBLGFBQU9LLFNBQVA7QUFDRDs7OzBDQUVxQkMsUyxFQUFXO0FBQy9CLFVBQU1KLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUgsZUFBZSxLQUFLSSxlQUFMLEVBRHJCO0FBQUEsVUFFTUcsd0JBQXdCRCxVQUFVRSxRQUFWLENBQW1CTixJQUFuQixDQUY5QjtBQUFBLFVBR01PLGdDQUFnQ0gsVUFBVUUsUUFBVixDQUFtQlIsWUFBbkIsQ0FIdEM7QUFBQSxVQUlNVSxzQkFBdUJILHlCQUF5QkUsNkJBSnREOztBQU1BLGFBQU9DLG1CQUFQO0FBQ0Q7Ozs4Q0FFZ0NSLEksRUFBTUgsYyxFQUFnQjtBQUNyRCxVQUFNSCxjQUFjLENBQ1pHLGNBRFksQ0FBcEI7QUFBQSxVQUdNWSxPQUFPLElBSGI7QUFBQSxVQUdvQjtBQUNkQyxpQkFBVyxJQUFJakIsUUFBSixDQUFhTyxJQUFiLEVBQW1CTixXQUFuQixFQUFnQ2UsSUFBaEMsQ0FKakI7O0FBTUEsYUFBT0MsUUFBUDtBQUNEOzs7d0NBRTBCVixJLEVBQU1XLFEsRUFBVTtBQUN6QyxVQUFNZCxpQkFBaUJSLGVBQWV1QixZQUFmLENBQTRCRCxRQUE1QixDQUF2QjtBQUFBLFVBQ01ELFdBQVdqQixTQUFTb0IseUJBQVQsQ0FBbUNiLElBQW5DLEVBQXlDSCxjQUF6QyxDQURqQjs7QUFHQSxhQUFPYSxRQUFQO0FBQ0Q7OztrQ0FFb0JJLGEsRUFBZUMsYyxFQUFnQjtBQUNsRCxVQUFNZixPQUFPYyxhQUFiO0FBQUEsVUFBNkI7QUFDdkJILGlCQUFXSSxjQURqQjtBQUFBLFVBQ2tDO0FBQzVCTCxpQkFBV2pCLFNBQVN1QixtQkFBVCxDQUE2QmhCLElBQTdCLEVBQW1DVyxRQUFuQyxDQUZqQjs7QUFJQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs7RUFuRG9CcEIsSTs7QUFzRHZCMkIsT0FBT0MsT0FBUCxHQUFpQnpCLFFBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0Jyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFVuaXRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGdldFVuaXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHVuaXREZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGVOYW1lO1xuICB9XG5cbiAgaXNOb3RDeWNsaWMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHRoaXMuZ2V0VW5pdFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm90Q3ljbGljID0gKG5hbWUgIT09IHVuaXRSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm90Q3ljbGljO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZU5hbWUgPSB0aGlzLmdldFVuaXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lc0NvbnRhaW5zTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhuYW1lKSxcbiAgICAgICAgICBydWxlTmFtZXNDb250YWluc1VuaXRSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyh1bml0UnVsZU5hbWUpLFxuICAgICAgICAgIGluY2x1ZGVkSW5SdWxlTmFtZXMgPSAocnVsZU5hbWVzQ29udGFpbnNOYW1lICYmIHJ1bGVOYW1lc0NvbnRhaW5zVW5pdFJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBpbmNsdWRlZEluUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVuaXRSdWxlID0gbmV3IFVuaXRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFJ1bGVOYW1lKG5hbWUsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lcyhmaXJzdFJ1bGVOYW1lLCBzZWNvbmRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBzZWNvbmRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRSdWxlTmFtZShuYW1lLCBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZTtcbiJdfQ==