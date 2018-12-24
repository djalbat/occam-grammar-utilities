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
          NonTerminalNode = null,
          ///
      unitRule = new UnitRule(name, definitions, NonTerminalNode);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3VuaXQuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInBhcnNlcnMiLCJVbml0RGVmaW5pdGlvbiIsIlJ1bGUiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiVW5pdFJ1bGUiLCJ1bml0RGVmaW5pdGlvbiIsImdldFVuaXREZWZpbml0aW9uIiwidW5pdERlZmluaXRpb25SdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpcnN0RGVmaW5pdGlvbiIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZSIsIm5vbkN5Y2xpYyIsInVuaXRSdWxlIiwibWF0Y2hlcyIsInVuaXRSdWxlTmFtZSIsInVuaXRSdWxlVW5pdERlZmluaXRpb25SdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImZyb21OYW1lQW5kVW5pdERlZmluaXRpb24iLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZSIsImZpcnN0UnVsZU5hbWUiLCJzZWNvbmRSdWxlTmFtZSIsImZyb21OYW1lQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjtBQUFBLElBQ01DLFVBQVVELFFBQVEsZUFBUixDQURoQjs7QUFHQSxJQUFNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FBdkI7O0FBRU0sSUFBRUcsSUFBRixHQUFXRixPQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCTCxTQURyQixDQUNFSyxjQURGO0FBQUEsSUFFRUMsS0FGRixHQUVZRCxjQUZaLENBRUVDLEtBRkY7O0lBSUFDLFE7Ozs7Ozs7Ozs7O2dEQUN3QjtBQUMxQixVQUFNQyxpQkFBaUIsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyx5QkFBeUJGLGVBQWVHLFdBQWYsRUFEL0I7O0FBR0EsYUFBT0Qsc0JBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNRSxjQUFjLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNQyxrQkFBa0JSLE1BQU1NLFdBQU4sQ0FEeEI7QUFBQSxVQUVNSixpQkFBaUJNLGVBRnZCLENBRGtCLENBR3NCOztBQUV4QyxhQUFPTixjQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1PLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTU4seUJBQXlCLEtBQUtPLHlCQUFMLEVBRC9CO0FBQUEsVUFFTUMsWUFBYUgsU0FBU0wsc0JBRjVCOztBQUlBLGFBQU9RLFNBQVA7QUFDRDs7OzRCQUVPQyxRLEVBQVU7QUFDaEIsVUFBSUMsVUFBVSxLQUFkOztBQUVBLFVBQU1MLE9BQU8sS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUssZUFBZUYsU0FBU0gsT0FBVCxFQURyQjs7QUFHQSxVQUFJRCxTQUFTTSxZQUFiLEVBQTJCO0FBQ3pCLFlBQU1YLHlCQUF5QixLQUFLTyx5QkFBTCxFQUEvQjtBQUFBLFlBQ01LLGlDQUFpQ0gsU0FBU0YseUJBQVQsRUFEdkM7O0FBR0FHLGtCQUFXViwyQkFBMkJZLDhCQUF0QztBQUNEOztBQUVELGFBQU9GLE9BQVA7QUFDRDs7OzhDQUVnQ0wsSSxFQUFNUCxjLEVBQWdCO0FBQ3JELFVBQU1JLGNBQWMsQ0FDWkosY0FEWSxDQUFwQjtBQUFBLFVBR01lLGtCQUFrQixJQUh4QjtBQUFBLFVBRytCO0FBQ3pCSixpQkFBVyxJQUFJWixRQUFKLENBQWFRLElBQWIsRUFBbUJILFdBQW5CLEVBQWdDVyxlQUFoQyxDQUpqQjs7QUFNQSxhQUFPSixRQUFQO0FBQ0Q7OzswQ0FFNEJKLEksRUFBTVMsVSxFQUFZO0FBQzdDLFVBQUlMLFdBQVcsSUFBZjs7QUFFQSxVQUFNWCxpQkFBaUJMLGVBQWVzQixjQUFmLENBQThCRCxVQUE5QixDQUF2Qjs7QUFFQSxVQUFJaEIsbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCVyxtQkFBV1osU0FBU21CLHlCQUFULENBQW1DWCxJQUFuQyxFQUF5Q1AsY0FBekMsQ0FBWDtBQUNEOztBQUVELGFBQU9XLFFBQVA7QUFDRDs7O3dDQUUwQkosSSxFQUFNWSxRLEVBQVU7QUFDekMsVUFBTW5CLGlCQUFpQkwsZUFBZXlCLFlBQWYsQ0FBNEJELFFBQTVCLENBQXZCO0FBQUEsVUFDTVIsV0FBV1osU0FBU21CLHlCQUFULENBQW1DWCxJQUFuQyxFQUF5Q1AsY0FBekMsQ0FEakI7O0FBR0EsYUFBT1csUUFBUDtBQUNEOzs7a0NBRW9CVSxhLEVBQWVDLGMsRUFBZ0I7QUFDbEQsVUFBTWYsT0FBT2MsYUFBYjtBQUFBLFVBQTZCO0FBQ3ZCRixpQkFBV0csY0FEakI7QUFBQSxVQUNrQztBQUM1QlgsaUJBQVdaLFNBQVN3QixtQkFBVCxDQUE2QmhCLElBQTdCLEVBQW1DWSxRQUFuQyxDQUZqQjs7QUFJQSxhQUFPUixRQUFQO0FBQ0Q7Ozs7RUEzRW9CZixJOztBQThFdkI0QixPQUFPQyxPQUFQLEdBQWlCMUIsUUFBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5JyksXG4gICAgICBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZSgpIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IHRoaXMuZ2V0VW5pdERlZmluaXRpb24oKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblJ1bGVOYW1lID0gdW5pdERlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0VW5pdERlZmluaXRpb24oKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIHVuaXREZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzTm9uQ3ljbGljKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblJ1bGVOYW1lID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvblJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uQ3ljbGljID0gKG5hbWUgIT09IHVuaXREZWZpbml0aW9uUnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbkN5Y2xpYztcbiAgfVxuXG4gIG1hdGNoZXModW5pdFJ1bGUpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlTmFtZSA9IHVuaXRSdWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChuYW1lID09PSB1bml0UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB0aGlzLmdldFVuaXREZWZpbml0aW9uUnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHVuaXRSdWxlVW5pdERlZmluaXRpb25SdWxlTmFtZSA9IHVuaXRSdWxlLmdldFVuaXREZWZpbml0aW9uUnVsZU5hbWUoKTtcblxuICAgICAgbWF0Y2hlcyA9ICh1bml0RGVmaW5pdGlvblJ1bGVOYW1lID09PSB1bml0UnVsZVVuaXREZWZpbml0aW9uUnVsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHVuaXREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmREZWZpbml0aW9uKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgdW5pdFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIGlmICh1bml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tTmFtZUFuZFVuaXREZWZpbml0aW9uKG5hbWUsIHVuaXREZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRSdWxlTmFtZShuYW1lLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21OYW1lQW5kVW5pdERlZmluaXRpb24obmFtZSwgdW5pdERlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZXMoZmlyc3RSdWxlTmFtZSwgc2Vjb25kUnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlyc3RSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gc2Vjb25kUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21OYW1lQW5kUnVsZU5hbWUobmFtZSwgcnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdFJ1bGU7XG4iXX0=