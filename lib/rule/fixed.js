'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var Rule = parsers.Rule;

var FixedRule = function (_Rule) {
  _inherits(FixedRule, _Rule);

  function FixedRule() {
    _classCallCheck(this, FixedRule);

    return _possibleConstructorReturn(this, (FixedRule.__proto__ || Object.getPrototypeOf(FixedRule)).apply(this, arguments));
  }

  _createClass(FixedRule, null, [{
    key: 'fromRuleAndRuleNames',
    value: function fromRuleAndRuleNames(rule, ruleNames) {
      var ruleName = rule.getName(),
          ruleNonTerminalNode = rule.getNonTerminalNode(),
          name = ruleName,
          ///
      definitions = definitionsFromRuleAndRuleNames(rule, ruleNames),
          NonTerminalNode = ruleNonTerminalNode,
          ///
      fixedRule = new FixedRule(name, definitions, NonTerminalNode);

      return fixedRule;
    }
  }]);

  return FixedRule;
}(Rule);

module.exports = FixedRule;

function definitionsFromRuleAndRuleNames(rule, ruleNames) {
  var ruleDefinitions = rule.getDefinitions(),
      definitions = ruleDefinitions.reduce(function (definitions, ruleDefinition) {
    var definition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

    if (nonUnitDefinition !== null) {
      definition = nonUnitDefinition; ///
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
          unitDefinitionIncludedInRuleNames = unitDefinition.isIncludedInRuleNames(ruleNames);

      if (!unitDefinitionIncludedInRuleNames) {
        definition = unitDefinition; ///
      }
    }

    if (definition !== null) {
      definitions.push(definition);
    }

    return definitions;
  }, []);

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL2ZpeGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiVW5pdERlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbiIsIlJ1bGUiLCJGaXhlZFJ1bGUiLCJydWxlIiwicnVsZU5hbWVzIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb25zRnJvbVJ1bGVBbmRSdWxlTmFtZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJmaXhlZFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJydWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwidW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5SdWxlTmFtZXMiLCJpc0luY2x1ZGVkSW5SdWxlTmFtZXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7O0lBR1FHLEksR0FBU0osTyxDQUFUSSxJOztJQUVGQyxTOzs7Ozs7Ozs7Ozt5Q0FDd0JDLEksRUFBTUMsUyxFQUFXO0FBQzNDLFVBQU1DLFdBQVdGLEtBQUtHLE9BQUwsRUFBakI7QUFBQSxVQUNNQyxzQkFBc0JKLEtBQUtLLGtCQUFMLEVBRDVCO0FBQUEsVUFFTUMsT0FBT0osUUFGYjtBQUFBLFVBRXVCO0FBQ2pCSyxvQkFBY0MsZ0NBQWdDUixJQUFoQyxFQUFzQ0MsU0FBdEMsQ0FIcEI7QUFBQSxVQUlNUSxrQkFBa0JMLG1CQUp4QjtBQUFBLFVBSTZDO0FBQ3ZDTSxrQkFBWSxJQUFJWCxTQUFKLENBQWNPLElBQWQsRUFBb0JDLFdBQXBCLEVBQWlDRSxlQUFqQyxDQUxsQjs7QUFPQSxhQUFPQyxTQUFQO0FBQ0Q7Ozs7RUFWcUJaLEk7O0FBYXhCYSxPQUFPQyxPQUFQLEdBQWlCYixTQUFqQjs7QUFFQSxTQUFTUywrQkFBVCxDQUF5Q1IsSUFBekMsRUFBK0NDLFNBQS9DLEVBQTBEO0FBQ3hELE1BQU1ZLGtCQUFrQmIsS0FBS2MsY0FBTCxFQUF4QjtBQUFBLE1BQ0lQLGNBQWNNLGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU1IsV0FBVCxFQUFzQlMsY0FBdEIsRUFBc0M7QUFDekUsUUFBSUMsYUFBYSxJQUFqQjs7QUFFQSxRQUFNQyxvQkFBb0JyQixrQkFBa0JzQixjQUFsQixDQUFpQ0gsY0FBakMsQ0FBMUI7O0FBRUEsUUFBSUUsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCRCxtQkFBYUMsaUJBQWIsQ0FEOEIsQ0FDRTtBQUNqQyxLQUZELE1BRU87QUFDTCxVQUFNRSxpQkFBaUJ4QixlQUFldUIsY0FBZixDQUE4QkgsY0FBOUIsQ0FBdkI7QUFBQSxVQUNNSyxvQ0FBb0NELGVBQWVFLHFCQUFmLENBQXFDckIsU0FBckMsQ0FEMUM7O0FBR0EsVUFBSSxDQUFDb0IsaUNBQUwsRUFBd0M7QUFDdENKLHFCQUFhRyxjQUFiLENBRHNDLENBQ1I7QUFDL0I7QUFDRjs7QUFFRCxRQUFJSCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCVixrQkFBWWdCLElBQVosQ0FBaUJOLFVBQWpCO0FBQ0Q7O0FBRUQsV0FBT1YsV0FBUDtBQUNELEdBckJhLEVBcUJYLEVBckJXLENBRGxCOztBQXdCQSxTQUFPQSxXQUFQO0FBQ0QiLCJmaWxlIjoiZml4ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi91bml0JyksXG4gICAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEZpeGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRSdWxlTmFtZXMocnVsZSwgcnVsZU5hbWVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnNGcm9tUnVsZUFuZFJ1bGVOYW1lcyhydWxlLCBydWxlTmFtZXMpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGVOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZpeGVkUnVsZSA9IG5ldyBGaXhlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZml4ZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWRSdWxlO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21SdWxlQW5kUnVsZU5hbWVzKHJ1bGUsIHJ1bGVOYW1lcykge1xuICBjb25zdCBydWxlRGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICBkZWZpbml0aW9ucyA9IHJ1bGVEZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnMsIHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGxldCBkZWZpbml0aW9uID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHJ1bGVEZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBkZWZpbml0aW9uID0gbm9uVW5pdERlZmluaXRpb247IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24ocnVsZURlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgIHVuaXREZWZpbml0aW9uSW5jbHVkZWRJblJ1bGVOYW1lcyA9IHVuaXREZWZpbml0aW9uLmlzSW5jbHVkZWRJblJ1bGVOYW1lcyhydWxlTmFtZXMpO1xuXG4gICAgICAgICAgaWYgKCF1bml0RGVmaW5pdGlvbkluY2x1ZGVkSW5SdWxlTmFtZXMpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSB1bml0RGVmaW5pdGlvbjsgIC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXX0=