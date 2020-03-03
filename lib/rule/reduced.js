'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parsers = require('occam-parsers');

var types = require('../types'),
    ReducedNode = require('../node/reduced'),
    classUtilities = require('../utilities/class'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

var ReducedRule = /*#__PURE__*/function (_Rule) {
  _inherits(ReducedRule, _Rule);

  function ReducedRule() {
    _classCallCheck(this, ReducedRule);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReducedRule).apply(this, arguments));
  }

  _createClass(ReducedRule, [{
    key: "isEmpty",
    value: function isEmpty() {
      var definitionsLength = this.definitions.length,
          empty = definitionsLength === 0;
      return empty;
    }
  }], [{
    key: "fromRule",
    value: function fromRule(rule) {
      var definitions = rule.getDefinitions();
      var ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName);
      definitions = definitions.filter(function (definition) {
        var keep = true;
        var definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

        if (definitionRecursiveDefinition) {
          var recursiveDefinition = definition,
              ///
          type = recursiveDefinition.getType();
          keep = type !== DIRECTLY_LEFT_RECURSIVE_TYPE && type !== INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== IMPLICITLY_LEFT_RECURSIVE_TYPE;
        }

        return keep;
      });
      var name = reducedRuleName,
          NonTerminalNode = ReducedNode,
          ///
      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
      return reducedRule;
    }
  }]);

  return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJ0eXBlcyIsIlJlZHVjZWROb2RlIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwicnVsZSIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUFyQjtBQUFBLElBQ01FLFdBQVcsR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBRDNCO0FBQUEsSUFFTUcsY0FBYyxHQUFHSCxPQUFPLENBQUMsb0JBQUQsQ0FGOUI7QUFBQSxJQUdNSSxpQkFBaUIsR0FBR0osT0FBTyxDQUFDLHVCQUFELENBSGpDO0FBQUEsSUFJTUssbUJBQW1CLEdBQUdMLE9BQU8sQ0FBQyx5QkFBRCxDQUpuQzs7QUFNTSxJQUFFTSxJQUFGLEdBQVdQLE9BQVgsQ0FBRU8sSUFBRjtBQUFBLElBQ0VDLFlBREYsR0FDbUJKLGNBRG5CLENBQ0VJLFlBREY7QUFBQSxJQUVFQywyQkFGRixHQUVrQ0osaUJBRmxDLENBRUVJLDJCQUZGO0FBQUEsSUFHRUMsNEJBSEYsR0FHbUdSLEtBSG5HLENBR0VRLDRCQUhGO0FBQUEsSUFHZ0NDLDhCQUhoQyxHQUdtR1QsS0FIbkcsQ0FHZ0NTLDhCQUhoQztBQUFBLElBR2dFQyw4QkFIaEUsR0FHbUdWLEtBSG5HLENBR2dFVSw4QkFIaEU7O0lBS0FDLFc7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBTUMsaUJBQWlCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsTUFBM0M7QUFBQSxVQUNNQyxLQUFLLEdBQUlILGlCQUFpQixLQUFLLENBRHJDO0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixVQUFJSCxXQUFXLEdBQUdHLElBQUksQ0FBQ0MsY0FBTCxFQUFsQjtBQUVBLFVBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZUFBZSxHQUFHYiwyQkFBMkIsQ0FBQ1csUUFBRCxDQURuRDtBQUdBTCxNQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ1EsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9DLFlBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsWUFBTUMsNkJBQTZCLEdBQUdsQixZQUFZLENBQUNnQixVQUFELEVBQWFsQixtQkFBYixDQUFsRDs7QUFFQSxZQUFJb0IsNkJBQUosRUFBbUM7QUFDakMsY0FBTUMsbUJBQW1CLEdBQUdILFVBQTVCO0FBQUEsY0FBd0M7QUFDbENJLFVBQUFBLElBQUksR0FBR0QsbUJBQW1CLENBQUNFLE9BQXBCLEVBRGI7QUFHQUosVUFBQUEsSUFBSSxHQUFJRyxJQUFJLEtBQUtsQiw0QkFBVixJQUNDa0IsSUFBSSxLQUFLakIsOEJBRFYsSUFFQ2lCLElBQUksS0FBS2hCLDhCQUZqQjtBQUdEOztBQUVELGVBQU9hLElBQVA7QUFDRCxPQWZhLENBQWQ7QUFpQkEsVUFBTUssSUFBSSxHQUFHUixlQUFiO0FBQUEsVUFDTVMsZUFBZSxHQUFHNUIsV0FEeEI7QUFBQSxVQUNzQztBQUNoQzZCLE1BQUFBLFdBQVcsR0FBRyxJQUFJbkIsV0FBSixDQUFnQmlCLElBQWhCLEVBQXNCZixXQUF0QixFQUFtQ2dCLGVBQW5DLENBRnBCO0FBSUEsYUFBT0MsV0FBUDtBQUNEOzs7O0VBcEN1QnpCLEk7O0FBdUMxQjBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyksXG4gICAgICBSZWR1Y2VkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmVkdWNlZCcpLFxuICAgICAgY2xhc3NVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY2xhc3MnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBpc0luc3RhbmNlT2YgfSA9IGNsYXNzVXRpbGl0aWVzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXM7XG5cbmNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlICE9PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgJiZcbiAgICAgICAgICAgICAgICh0eXBlICE9PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdWNlZFJ1bGU7XG4iXX0=