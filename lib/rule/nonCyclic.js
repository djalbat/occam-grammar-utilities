'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

var Rule = parsers.Rule;

var NonCyclicRule = function (_Rule) {
  _inherits(NonCyclicRule, _Rule);

  function NonCyclicRule() {
    _classCallCheck(this, NonCyclicRule);

    return _possibleConstructorReturn(this, (NonCyclicRule.__proto__ || Object.getPrototypeOf(NonCyclicRule)).apply(this, arguments));
  }

  _createClass(NonCyclicRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonCyclicDefinitions = nonCyclicDefinitionsFromRule(rule),
          ruleName = rule.getName(),
          ruleNonTerminalNode = rule.getNonTerminalNode(),
          name = ruleName,
          ///
      definitions = nonCyclicDefinitions,
          ///
      NonTerminalNode = ruleNonTerminalNode,
          ///
      nonCyclicRule = new NonCyclicRule(name, definitions, NonTerminalNode);

      return nonCyclicRule;
    }
  }]);

  return NonCyclicRule;
}(Rule);

module.exports = NonCyclicRule;

function nonCyclicDefinitionsFromRule(rule) {
  var ruleName = rule.getName(),
      ruleDefinitions = rule.getDefinitions(),
      nonCyclicDefinitions = ruleDefinitions.reduce(function (nonCyclicDefinitions, ruleDefinition) {
    var nonCyclicDefinition = null;

    var nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

    if (nonUnitDefinition !== null) {
      nonCyclicDefinition = nonUnitDefinition;
    } else {
      var unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
          unitDefinitionRuleName = unitDefinition.getRuleName();

      if (unitDefinitionRuleName !== ruleName) {
        nonCyclicDefinition = unitDefinition;
      }
    }

    if (nonCyclicDefinition !== null) {
      nonCyclicDefinitions.push(nonCyclicDefinition);
    }

    return nonCyclicDefinitions;
  }, []);

  return nonCyclicDefinitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vbkN5Y2xpYy5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIlVuaXREZWZpbml0aW9uIiwiTm9uVW5pdERlZmluaXRpb24iLCJSdWxlIiwiTm9uQ3ljbGljUnVsZSIsInJ1bGUiLCJub25DeWNsaWNEZWZpbml0aW9ucyIsIm5vbkN5Y2xpY0RlZmluaXRpb25zRnJvbVJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwibm9uQ3ljbGljUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJydWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJlZHVjZSIsInJ1bGVEZWZpbml0aW9uIiwibm9uQ3ljbGljRGVmaW5pdGlvbiIsIm5vblVuaXREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ0lFLG9CQUFvQkYsUUFBUSx1QkFBUixDQUR4Qjs7SUFHUUcsSSxHQUFTSixPLENBQVRJLEk7O0lBRUZDLGE7Ozs7Ozs7Ozs7OzZCQUNZQyxJLEVBQU07QUFDcEIsVUFBTUMsdUJBQXVCQyw2QkFBNkJGLElBQTdCLENBQTdCO0FBQUEsVUFDTUcsV0FBV0gsS0FBS0ksT0FBTCxFQURqQjtBQUFBLFVBRU1DLHNCQUFzQkwsS0FBS00sa0JBQUwsRUFGNUI7QUFBQSxVQUdNQyxPQUFPSixRQUhiO0FBQUEsVUFHdUI7QUFDakJLLG9CQUFjUCxvQkFKcEI7QUFBQSxVQUkwQztBQUNwQ1Esd0JBQWtCSixtQkFMeEI7QUFBQSxVQUs2QztBQUN2Q0ssc0JBQWdCLElBQUlYLGFBQUosQ0FBa0JRLElBQWxCLEVBQXdCQyxXQUF4QixFQUFxQ0MsZUFBckMsQ0FOdEI7O0FBUUEsYUFBT0MsYUFBUDtBQUNEOzs7O0VBWHlCWixJOztBQWM1QmEsT0FBT0MsT0FBUCxHQUFpQmIsYUFBakI7O0FBRUEsU0FBU0csNEJBQVQsQ0FBc0NGLElBQXRDLEVBQTRDO0FBQzFDLE1BQU1HLFdBQVdILEtBQUtJLE9BQUwsRUFBakI7QUFBQSxNQUNNUyxrQkFBa0JiLEtBQUtjLGNBQUwsRUFEeEI7QUFBQSxNQUVNYix1QkFBdUJZLGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU2Qsb0JBQVQsRUFBK0JlLGNBQS9CLEVBQStDO0FBQzNGLFFBQUlDLHNCQUFzQixJQUExQjs7QUFFQSxRQUFNQyxvQkFBb0JyQixrQkFBa0JzQixjQUFsQixDQUFpQ0gsY0FBakMsQ0FBMUI7O0FBRUEsUUFBSUUsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCRCw0QkFBc0JDLGlCQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU1FLGlCQUFpQnhCLGVBQWV1QixjQUFmLENBQThCSCxjQUE5QixDQUF2QjtBQUFBLFVBQ01LLHlCQUF5QkQsZUFBZUUsV0FBZixFQUQvQjs7QUFHQSxVQUFJRCwyQkFBMkJsQixRQUEvQixFQUF5QztBQUN2Q2MsOEJBQXNCRyxjQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSUgsd0JBQXdCLElBQTVCLEVBQWtDO0FBQ2hDaEIsMkJBQXFCc0IsSUFBckIsQ0FBMEJOLG1CQUExQjtBQUNEOztBQUVELFdBQU9oQixvQkFBUDtBQUNELEdBckJzQixFQXFCcEIsRUFyQm9CLENBRjdCOztBQXlCQSxTQUFPQSxvQkFBUDtBQUNEIiwiZmlsZSI6Im5vbkN5Y2xpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKSxcbiAgICBOb25Vbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vbm9uVW5pdCcpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIE5vbkN5Y2xpY1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBub25DeWNsaWNEZWZpbml0aW9ucyA9IG5vbkN5Y2xpY0RlZmluaXRpb25zRnJvbVJ1bGUocnVsZSksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gbm9uQ3ljbGljRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGVOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIG5vbkN5Y2xpY1J1bGUgPSBuZXcgTm9uQ3ljbGljUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25DeWNsaWNSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uQ3ljbGljUnVsZTtcblxuZnVuY3Rpb24gbm9uQ3ljbGljRGVmaW5pdGlvbnNGcm9tUnVsZShydWxlKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVEZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbnMgPSBydWxlRGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vbkN5Y2xpY0RlZmluaXRpb25zLCBydWxlRGVmaW5pdGlvbikge1xuICAgICAgICAgIGxldCBub25DeWNsaWNEZWZpbml0aW9uID0gbnVsbDtcbiAgXG4gICAgICAgICAgY29uc3Qgbm9uVW5pdERlZmluaXRpb24gPSBOb25Vbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihydWxlRGVmaW5pdGlvbik7XG4gIFxuICAgICAgICAgIGlmIChub25Vbml0RGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbiA9IG5vblVuaXREZWZpbml0aW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1bml0RGVmaW5pdGlvbiA9IFVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKHJ1bGVEZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHVuaXREZWZpbml0aW9uUnVsZU5hbWUgPSB1bml0RGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuICBcbiAgICAgICAgICAgIGlmICh1bml0RGVmaW5pdGlvblJ1bGVOYW1lICE9PSBydWxlTmFtZSkge1xuICAgICAgICAgICAgICBub25DeWNsaWNEZWZpbml0aW9uID0gdW5pdERlZmluaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpZiAobm9uQ3ljbGljRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9uQ3ljbGljRGVmaW5pdGlvbnMucHVzaChub25DeWNsaWNEZWZpbml0aW9uKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHJldHVybiBub25DeWNsaWNEZWZpbml0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBub25DeWNsaWNEZWZpbml0aW9ucztcbn1cbiJdfQ==