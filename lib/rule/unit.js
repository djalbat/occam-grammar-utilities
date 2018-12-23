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
    key: 'fromNameAndDefinition',
    value: function fromNameAndDefinition(name, definition) {
      var unitRule = null;

      var unitDefinition = UnitDefinition.fromDefinition(definition);

      if (unitDefinition !== null) {
        unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3VuaXQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhcnNlcnMiLCJVbml0RGVmaW5pdGlvbiIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVW5pdFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlyc3REZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0UnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VW5pdFJ1bGVOYW1lIiwibm90Q3ljbGljIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzQ29udGFpbnNOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZXNDb250YWluc1VuaXRSdWxlTmFtZSIsImluY2x1ZGVkSW5SdWxlTmFtZXMiLCJOb2RlIiwidW5pdFJ1bGUiLCJkZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJmcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWUiLCJmaXJzdFJ1bGVOYW1lIiwic2Vjb25kUnVsZU5hbWUiLCJmcm9tTmFtZUFuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLGVBQVIsQ0FEaEI7O0FBR0EsSUFBTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBQXZCOztBQUVNLElBQUVHLElBQUYsR0FBV0YsT0FBWCxDQUFFRSxJQUFGO0FBQUEsSUFDQUMsY0FEQSxHQUNtQkwsU0FEbkIsQ0FDQUssY0FEQTtBQUFBLElBRUFDLEtBRkEsR0FFVUQsY0FGVixDQUVBQyxLQUZBOztJQUlBQyxROzs7Ozs7Ozs7OztzQ0FDYztBQUNoQixVQUFNQyxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JKLE1BQU1FLFdBQU4sQ0FEeEI7QUFBQSxVQUVNRyxpQkFBaUJELGVBRnZCO0FBQUEsVUFFd0M7QUFDbENFLHFCQUFlRCxlQUFlRSxXQUFmLEVBSHJCOztBQUtBLGFBQU9ELFlBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUUsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNSCxlQUFlLEtBQUtJLGVBQUwsRUFEckI7QUFBQSxVQUVNQyxZQUFhSCxTQUFTRixZQUY1Qjs7QUFJQSxhQUFPSyxTQUFQO0FBQ0Q7OzswQ0FFcUJDLFMsRUFBVztBQUMvQixVQUFNSixPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01ILGVBQWUsS0FBS0ksZUFBTCxFQURyQjtBQUFBLFVBRU1HLHdCQUF3QkQsVUFBVUUsUUFBVixDQUFtQk4sSUFBbkIsQ0FGOUI7QUFBQSxVQUdNTyxnQ0FBZ0NILFVBQVVFLFFBQVYsQ0FBbUJSLFlBQW5CLENBSHRDO0FBQUEsVUFJTVUsc0JBQXVCSCx5QkFBeUJFLDZCQUp0RDs7QUFNQSxhQUFPQyxtQkFBUDtBQUNEOzs7OENBRWdDUixJLEVBQU1ILGMsRUFBZ0I7QUFDckQsVUFBTUgsY0FBYyxDQUNaRyxjQURZLENBQXBCO0FBQUEsVUFHTVksT0FBTyxJQUhiO0FBQUEsVUFHb0I7QUFDZEMsaUJBQVcsSUFBSWpCLFFBQUosQ0FBYU8sSUFBYixFQUFtQk4sV0FBbkIsRUFBZ0NlLElBQWhDLENBSmpCOztBQU1BLGFBQU9DLFFBQVA7QUFDRDs7OzBDQUU0QlYsSSxFQUFNVyxVLEVBQVk7QUFDN0MsVUFBSUQsV0FBVyxJQUFmOztBQUVBLFVBQU1iLGlCQUFpQlIsZUFBZXVCLGNBQWYsQ0FBOEJELFVBQTlCLENBQXZCOztBQUVBLFVBQUlkLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQmEsbUJBQVdqQixTQUFTb0IseUJBQVQsQ0FBbUNiLElBQW5DLEVBQXlDSCxjQUF6QyxDQUFYO0FBQ0Q7O0FBRUQsYUFBT2EsUUFBUDtBQUNEOzs7d0NBRTBCVixJLEVBQU1jLFEsRUFBVTtBQUN6QyxVQUFNakIsaUJBQWlCUixlQUFlMEIsWUFBZixDQUE0QkQsUUFBNUIsQ0FBdkI7QUFBQSxVQUNNSixXQUFXakIsU0FBU29CLHlCQUFULENBQW1DYixJQUFuQyxFQUF5Q0gsY0FBekMsQ0FEakI7O0FBR0EsYUFBT2EsUUFBUDtBQUNEOzs7a0NBRW9CTSxhLEVBQWVDLGMsRUFBZ0I7QUFDbEQsVUFBTWpCLE9BQU9nQixhQUFiO0FBQUEsVUFBNkI7QUFDdkJGLGlCQUFXRyxjQURqQjtBQUFBLFVBQ2tDO0FBQzVCUCxpQkFBV2pCLFNBQVN5QixtQkFBVCxDQUE2QmxCLElBQTdCLEVBQW1DYyxRQUFuQyxDQUZqQjs7QUFJQSxhQUFPSixRQUFQO0FBQ0Q7Ozs7RUEvRG9CcEIsSTs7QUFrRXZCNkIsT0FBT0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0VW5pdFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiB1bml0UnVsZU5hbWU7XG4gIH1cblxuICBpc05vdEN5Y2xpYygpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdGhpcy5nZXRVbml0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub3RDeWNsaWMgPSAobmFtZSAhPT0gdW5pdFJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBub3RDeWNsaWM7XG4gIH1cblxuICBpc0luY2x1ZGVkSW5SdWxlTmFtZXMocnVsZU5hbWVzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHRoaXMuZ2V0VW5pdFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVzQ29udGFpbnNOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKG5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0NvbnRhaW5zVW5pdFJ1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHVuaXRSdWxlTmFtZSksXG4gICAgICAgICAgaW5jbHVkZWRJblJ1bGVOYW1lcyA9IChydWxlTmFtZXNDb250YWluc05hbWUgJiYgcnVsZU5hbWVzQ29udGFpbnNVbml0UnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW5SdWxlTmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdW5pdERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRGVmaW5pdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHVuaXRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpZiAodW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kUnVsZU5hbWUobmFtZSwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uKG5hbWUsIHVuaXREZWZpbml0aW9uKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVzKGZpcnN0UnVsZU5hbWUsIHNlY29uZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGZpcnN0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHNlY29uZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tTmFtZUFuZFJ1bGVOYW1lKG5hbWUsIHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlO1xuIl19