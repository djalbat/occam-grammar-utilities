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
    key: 'getUnitDefinitionRuleName',
    value: function getUnitDefinitionRuleName() {
      var unitDefinition = this.getUnitDefinition(),
          unitDefinitionRuleName = unitDefinition.getRuleName();

      return unitDefinitionRuleName;
    }
  }, {
    key: 'getUnitDefinition',
    value: function getUnitDefinition() {
      var definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition; ///

      return unitDefinition;
    }
  }, {
    key: 'isNonCyclic',
    value: function isNonCyclic() {
      var name = this.getName(),
          unitDefinitionRuleName = this.getUnitDefinitionRuleName(),
          nonCyclic = name !== unitDefinitionRuleName;

      return nonCyclic;
    }
  }, {
    key: 'isIncludedInRuleNames',
    value: function isIncludedInRuleNames(ruleNames) {
      var name = this.getName(),
          unitDefinitionRuleName = this.getUnitDefinitionRuleName(),
          ruleNamesContainsName = ruleNames.includes(name),
          ruleNamesContainsUnitRuleName = ruleNames.includes(unitDefinitionRuleName),
          includedInRuleNames = ruleNamesContainsName && ruleNamesContainsUnitRuleName;

      return includedInRuleNames;
    }
  }, {
    key: 'matches',
    value: function matches(unitRule) {
      var matches = false;

      var name = this.getName(),
          unitRuleName = unitRule.getName();

      if (name === unitRuleName) {
        var unitDefinitionRuleName = this.getUnitDefinitionRuleName(),
            unitRuleUnitDefinitionRuleName = unitRule.getUnitDefinitionRuleName();

        matches = unitDefinitionRuleName === unitRuleUnitDefinitionRuleName;
      }

      return matches;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3VuaXQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhcnNlcnMiLCJVbml0RGVmaW5pdGlvbiIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVW5pdFJ1bGUiLCJ1bml0RGVmaW5pdGlvbiIsImdldFVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25SdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpcnN0RGVmaW5pdGlvbiIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZSIsIm5vbkN5Y2xpYyIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0NvbnRhaW5zTmFtZSIsImluY2x1ZGVzIiwicnVsZU5hbWVzQ29udGFpbnNVbml0UnVsZU5hbWUiLCJpbmNsdWRlZEluUnVsZU5hbWVzIiwidW5pdFJ1bGUiLCJtYXRjaGVzIiwidW5pdFJ1bGVOYW1lIiwidW5pdFJ1bGVVbml0RGVmaW5pdGlvblJ1bGVOYW1lIiwiTm9kZSIsImRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImZyb21OYW1lQW5kVW5pdERlZmluaXRpb24iLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZSIsImZpcnN0UnVsZU5hbWUiLCJzZWNvbmRSdWxlTmFtZSIsImZyb21OYW1lQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjtBQUFBLElBQ01DLFVBQVVELFFBQVEsZUFBUixDQURoQjs7QUFHQSxJQUFNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FBdkI7O0FBRU0sSUFBRUcsSUFBRixHQUFXRixPQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCTCxTQURyQixDQUNFSyxjQURGO0FBQUEsSUFFRUMsS0FGRixHQUVZRCxjQUZaLENBRUVDLEtBRkY7O0lBSUFDLFE7Ozs7Ozs7Ozs7O2dEQUN3QjtBQUMxQixVQUFNQyxpQkFBaUIsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyx5QkFBeUJGLGVBQWVHLFdBQWYsRUFEL0I7O0FBR0EsYUFBT0Qsc0JBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNRSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JSLE1BQU1NLFdBQU4sQ0FEeEI7QUFBQSxVQUVNSixpQkFBaUJNLGVBRnZCLENBRGtCLENBR3NCOztBQUV4QyxhQUFPTixjQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1PLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTU4seUJBQXlCLEtBQUtPLHlCQUFMLEVBRC9CO0FBQUEsVUFFTUMsWUFBYUgsU0FBU0wsc0JBRjVCOztBQUlBLGFBQU9RLFNBQVA7QUFDRDs7OzBDQUVxQkMsUyxFQUFXO0FBQy9CLFVBQU1KLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTU4seUJBQXlCLEtBQUtPLHlCQUFMLEVBRC9CO0FBQUEsVUFFTUcsd0JBQXdCRCxVQUFVRSxRQUFWLENBQW1CTixJQUFuQixDQUY5QjtBQUFBLFVBR01PLGdDQUFnQ0gsVUFBVUUsUUFBVixDQUFtQlgsc0JBQW5CLENBSHRDO0FBQUEsVUFJTWEsc0JBQXVCSCx5QkFBeUJFLDZCQUp0RDs7QUFNQSxhQUFPQyxtQkFBUDtBQUNEOzs7NEJBRU9DLFEsRUFBVTtBQUNoQixVQUFJQyxVQUFVLEtBQWQ7O0FBRUEsVUFBTVYsT0FBTyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNVSxlQUFlRixTQUFTUixPQUFULEVBRHJCOztBQUdBLFVBQUlELFNBQVNXLFlBQWIsRUFBMkI7QUFDekIsWUFBTWhCLHlCQUF5QixLQUFLTyx5QkFBTCxFQUEvQjtBQUFBLFlBQ01VLGlDQUFpQ0gsU0FBU1AseUJBQVQsRUFEdkM7O0FBR0FRLGtCQUFXZiwyQkFBMkJpQiw4QkFBdEM7QUFDRDs7QUFFRCxhQUFPRixPQUFQO0FBQ0Q7Ozs4Q0FFZ0NWLEksRUFBTVAsYyxFQUFnQjtBQUNyRCxVQUFNSSxjQUFjLENBQ1pKLGNBRFksQ0FBcEI7QUFBQSxVQUdNb0IsT0FBTyxJQUhiO0FBQUEsVUFHb0I7QUFDZEosaUJBQVcsSUFBSWpCLFFBQUosQ0FBYVEsSUFBYixFQUFtQkgsV0FBbkIsRUFBZ0NnQixJQUFoQyxDQUpqQjs7QUFNQSxhQUFPSixRQUFQO0FBQ0Q7OzswQ0FFNEJULEksRUFBTWMsVSxFQUFZO0FBQzdDLFVBQUlMLFdBQVcsSUFBZjs7QUFFQSxVQUFNaEIsaUJBQWlCTCxlQUFlMkIsY0FBZixDQUE4QkQsVUFBOUIsQ0FBdkI7O0FBRUEsVUFBSXJCLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQmdCLG1CQUFXakIsU0FBU3dCLHlCQUFULENBQW1DaEIsSUFBbkMsRUFBeUNQLGNBQXpDLENBQVg7QUFDRDs7QUFFRCxhQUFPZ0IsUUFBUDtBQUNEOzs7d0NBRTBCVCxJLEVBQU1pQixRLEVBQVU7QUFDekMsVUFBTXhCLGlCQUFpQkwsZUFBZThCLFlBQWYsQ0FBNEJELFFBQTVCLENBQXZCO0FBQUEsVUFDTVIsV0FBV2pCLFNBQVN3Qix5QkFBVCxDQUFtQ2hCLElBQW5DLEVBQXlDUCxjQUF6QyxDQURqQjs7QUFHQSxhQUFPZ0IsUUFBUDtBQUNEOzs7a0NBRW9CVSxhLEVBQWVDLGMsRUFBZ0I7QUFDbEQsVUFBTXBCLE9BQU9tQixhQUFiO0FBQUEsVUFBNkI7QUFDdkJGLGlCQUFXRyxjQURqQjtBQUFBLFVBQ2tDO0FBQzVCWCxpQkFBV2pCLFNBQVM2QixtQkFBVCxDQUE2QnJCLElBQTdCLEVBQW1DaUIsUUFBbkMsQ0FGakI7O0FBSUEsYUFBT1IsUUFBUDtBQUNEOzs7O0VBckZvQnBCLEk7O0FBd0Z2QmlDLE9BQU9DLE9BQVAsR0FBaUIvQixRQUFqQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0Jyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycyxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBVbml0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBnZXRVbml0RGVmaW5pdGlvblJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uUnVsZU5hbWU7XG4gIH1cblxuICBnZXRVbml0RGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG5cbiAgaXNOb25DeWNsaWMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB0aGlzLmdldFVuaXREZWZpbml0aW9uUnVsZU5hbWUoKSxcbiAgICAgICAgICBub25DeWNsaWMgPSAobmFtZSAhPT0gdW5pdERlZmluaXRpb25SdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9uQ3ljbGljO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblJ1bGVOYW1lID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvblJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVzQ29udGFpbnNOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKG5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lc0NvbnRhaW5zVW5pdFJ1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHVuaXREZWZpbml0aW9uUnVsZU5hbWUpLFxuICAgICAgICAgIGluY2x1ZGVkSW5SdWxlTmFtZXMgPSAocnVsZU5hbWVzQ29udGFpbnNOYW1lICYmIHJ1bGVOYW1lc0NvbnRhaW5zVW5pdFJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBpbmNsdWRlZEluUnVsZU5hbWVzO1xuICB9XG5cbiAgbWF0Y2hlcyh1bml0UnVsZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVOYW1lID0gdW5pdFJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG5hbWUgPT09IHVuaXRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgdW5pdERlZmluaXRpb25SdWxlTmFtZSA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZSgpLFxuICAgICAgICAgICAgdW5pdFJ1bGVVbml0RGVmaW5pdGlvblJ1bGVOYW1lID0gdW5pdFJ1bGUuZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZSgpO1xuXG4gICAgICBtYXRjaGVzID0gKHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPT09IHVuaXRSdWxlVW5pdERlZmluaXRpb25SdWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgdW5pdERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRGVmaW5pdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHVuaXRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpZiAodW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbU5hbWVBbmRVbml0RGVmaW5pdGlvbihuYW1lLCB1bml0RGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kUnVsZU5hbWUobmFtZSwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uKG5hbWUsIHVuaXREZWZpbml0aW9uKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVzKGZpcnN0UnVsZU5hbWUsIHNlY29uZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGZpcnN0UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHNlY29uZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tTmFtZUFuZFJ1bGVOYW1lKG5hbWUsIHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlO1xuIl19