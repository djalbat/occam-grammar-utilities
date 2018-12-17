'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var UnitDefinition = require('../definition/unit');

var Rule = parsers.Rule;

var UnitsRule = function (_Rule) {
  _inherits(UnitsRule, _Rule);

  function UnitsRule() {
    _classCallCheck(this, UnitsRule);

    return _possibleConstructorReturn(this, (UnitsRule.__proto__ || Object.getPrototypeOf(UnitsRule)).apply(this, arguments));
  }

  _createClass(UnitsRule, [{
    key: 'getUnitDefinitionRuleNames',
    value: function getUnitDefinitionRuleNames() {
      var unitDefinitions = this.getUnitDefinitions(),
          unitDefinitionRuleNames = unitDefinitions.map(function (unitDefinition) {
        var unitDefinitionRuleName = unitDefinition.getRuleName();

        return unitDefinitionRuleName;
      });

      return unitDefinitionRuleNames;
    }
  }, {
    key: 'getUnitDefinitions',
    value: function getUnitDefinitions() {
      var definitions = this.getDefinitions(),
          unitDefinitions = definitions.reduce(function (unitDefinitions, definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          unitDefinitions.push(unitDefinition);
        }

        return unitDefinitions;
      }, []);

      return unitDefinitions;
    }
  }, {
    key: 'forEachUnitDefinition',
    value: function forEachUnitDefinition(callback) {
      var unitDefinitions = this.getUnitDefinitions();

      unitDefinitions.forEach(callback);
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitsRule = null;

      var definitions = rule.getDefinitions(),
          someUnitDefinition = definitions.some(function (definition) {
        var unitDefinition = UnitDefinition.fromDefinition(definition);

        if (unitDefinition !== null) {
          return true;
        }
      });

      if (someUnitDefinition) {
        unitsRule = Rule.fromRule(UnitsRule, rule);
      }

      return unitsRule;
    }
  }]);

  return UnitsRule;
}(Rule);

module.exports = UnitsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3VuaXRzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiVW5pdERlZmluaXRpb24iLCJSdWxlIiwiVW5pdHNSdWxlIiwidW5pdERlZmluaXRpb25zIiwiZ2V0VW5pdERlZmluaXRpb25zIiwidW5pdERlZmluaXRpb25SdWxlTmFtZXMiLCJtYXAiLCJ1bml0RGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJwdXNoIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwicnVsZSIsInVuaXRzUnVsZSIsInNvbWVVbml0RGVmaW5pdGlvbiIsInNvbWUiLCJmcm9tUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2Qjs7SUFFUUUsSSxHQUFTSCxPLENBQVRHLEk7O0lBRUZDLFM7Ozs7Ozs7Ozs7O2lEQUN5QjtBQUMzQixVQUFNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNQywwQkFBMEJGLGdCQUFnQkcsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUNyRSxZQUFNQyx5QkFBeUJELGVBQWVFLFdBQWYsRUFBL0I7O0FBRUEsZUFBT0Qsc0JBQVA7QUFDRCxPQUp5QixDQURoQzs7QUFPQSxhQUFPSCx1QkFBUDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1LLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01SLGtCQUFrQk8sWUFBWUUsTUFBWixDQUFtQixVQUFTVCxlQUFULEVBQTBCVSxVQUExQixFQUFzQztBQUN6RSxZQUFNTixpQkFBaUJQLGVBQWVjLGNBQWYsQ0FBOEJELFVBQTlCLENBQXZCOztBQUVBLFlBQUlOLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQkosMEJBQWdCWSxJQUFoQixDQUFxQlIsY0FBckI7QUFDRDs7QUFFRCxlQUFPSixlQUFQO0FBQ0QsT0FSaUIsRUFRZixFQVJlLENBRHhCOztBQVdBLGFBQU9BLGVBQVA7QUFDRDs7OzBDQUVxQmEsUSxFQUFVO0FBQzlCLFVBQU1iLGtCQUFrQixLQUFLQyxrQkFBTCxFQUF4Qjs7QUFFQUQsc0JBQWdCYyxPQUFoQixDQUF3QkQsUUFBeEI7QUFDRDs7OzZCQUVlRSxJLEVBQU07QUFDcEIsVUFBSUMsWUFBWSxJQUFoQjs7QUFFQSxVQUFNVCxjQUFjUSxLQUFLUCxjQUFMLEVBQXBCO0FBQUEsVUFDTVMscUJBQXFCVixZQUFZVyxJQUFaLENBQWlCLFVBQVNSLFVBQVQsRUFBcUI7QUFDekQsWUFBTU4saUJBQWlCUCxlQUFlYyxjQUFmLENBQThCRCxVQUE5QixDQUF2Qjs7QUFFQSxZQUFJTixtQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FOb0IsQ0FEM0I7O0FBU0EsVUFBSWEsa0JBQUosRUFBd0I7QUFDdEJELG9CQUFZbEIsS0FBS3FCLFFBQUwsQ0FBY3BCLFNBQWQsRUFBeUJnQixJQUF6QixDQUFaO0FBQ0Q7O0FBRUQsYUFBT0MsU0FBUDtBQUNEOzs7O0VBbERxQmxCLEk7O0FBcUR4QnNCLE9BQU9DLE9BQVAsR0FBaUJ0QixTQUFqQiIsImZpbGUiOiJ1bml0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBVbml0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0VW5pdERlZmluaXRpb25SdWxlTmFtZXMoKSB7XG4gICAgY29uc3QgdW5pdERlZmluaXRpb25zID0gdGhpcy5nZXRVbml0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvblJ1bGVOYW1lcyA9IHVuaXREZWZpbml0aW9ucy5tYXAoZnVuY3Rpb24odW5pdERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdW5pdERlZmluaXRpb25SdWxlTmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvblJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFVuaXREZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24odW5pdERlZmluaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAodW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdW5pdERlZmluaXRpb25zLnB1c2godW5pdERlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5pdERlZmluaXRpb25zO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB1bml0RGVmaW5pdGlvbnM7XG4gIH1cblxuICBmb3JFYWNoVW5pdERlZmluaXRpb24oY2FsbGJhY2spIHtcbiAgICBjb25zdCB1bml0RGVmaW5pdGlvbnMgPSB0aGlzLmdldFVuaXREZWZpbml0aW9ucygpO1xuXG4gICAgdW5pdERlZmluaXRpb25zLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgdW5pdHNSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHNvbWVVbml0RGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVVbml0RGVmaW5pdGlvbikge1xuICAgICAgdW5pdHNSdWxlID0gUnVsZS5mcm9tUnVsZShVbml0c1J1bGUsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bml0c1J1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0c1J1bGU7XG4iXX0=