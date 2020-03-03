'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    classUtilities = require('../utilities/class'),
    ruleNameUtilities = require('../utilities/ruleName'),
    RuleNameDefinition = require('../definition/ruleName'),
    RecursiveDefinition = require('../definition/recursive');

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

var RewrittenRule = /*#__PURE__*/function (_Rule) {
  _inherits(RewrittenRule, _Rule);

  function RewrittenRule() {
    _classCallCheck(this, RewrittenRule);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenRule).apply(this, arguments));
  }

  _createClass(RewrittenRule, null, [{
    key: "fromRule",
    value: function fromRule(rule) {
      var definitions = rule.getDefinitions();
      var ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);
      definitions = definitions.filter(function (definition) {
        var keep = false;
        var definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

        if (definitionRecursiveDefinition) {
          var recursiveDefinition = definition,
              ///
          type = recursiveDefinition.getType();
          keep = type === DIRECTLY_LEFT_RECURSIVE_TYPE || type === INDIRECTLY_LEFT_RECURSIVE_TYPE || type === IMPLICITLY_LEFT_RECURSIVE_TYPE;
        }

        return keep;
      });
      definitions = [].concat(_toConsumableArray(definitions), [reducedRuleNameDefinition]);
      var name = ruleName,
          ///
      NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);
      return rewrittenRule;
    }
  }]);

  return RewrittenRule;
}(Rule);

module.exports = RewrittenRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJld3JpdHRlblJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUFyQjtBQUFBLElBQ01FLGNBQWMsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRDlCO0FBQUEsSUFFTUcsaUJBQWlCLEdBQUdILE9BQU8sQ0FBQyx1QkFBRCxDQUZqQztBQUFBLElBR01JLGtCQUFrQixHQUFHSixPQUFPLENBQUMsd0JBQUQsQ0FIbEM7QUFBQSxJQUlNSyxtQkFBbUIsR0FBR0wsT0FBTyxDQUFDLHlCQUFELENBSm5DOztBQU1NLElBQUVNLElBQUYsR0FBV1AsT0FBWCxDQUFFTyxJQUFGO0FBQUEsSUFDRUMsWUFERixHQUNtQkwsY0FEbkIsQ0FDRUssWUFERjtBQUFBLElBRUVDLDJCQUZGLEdBRWtDTCxpQkFGbEMsQ0FFRUssMkJBRkY7QUFBQSxJQUdFQyw0QkFIRixHQUdtR1IsS0FIbkcsQ0FHRVEsNEJBSEY7QUFBQSxJQUdnQ0MsOEJBSGhDLEdBR21HVCxLQUhuRyxDQUdnQ1MsOEJBSGhDO0FBQUEsSUFHZ0VDLDhCQUhoRSxHQUdtR1YsS0FIbkcsQ0FHZ0VVLDhCQUhoRTs7SUFLQUMsYTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFJQyxXQUFXLEdBQUdELElBQUksQ0FBQ0UsY0FBTCxFQUFsQjtBQUVBLFVBQU1DLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZUFBZSxHQUFHViwyQkFBMkIsQ0FBQ1EsUUFBRCxDQURuRDtBQUFBLFVBRU1HLHlCQUF5QixHQUFHZixrQkFBa0IsQ0FBQ2dCLFlBQW5CLENBQWdDRixlQUFoQyxDQUZsQztBQUlBSixNQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ08sTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9DLFlBQUlDLElBQUksR0FBRyxLQUFYO0FBRUEsWUFBTUMsNkJBQTZCLEdBQUdqQixZQUFZLENBQUNlLFVBQUQsRUFBYWpCLG1CQUFiLENBQWxEOztBQUVBLFlBQUltQiw2QkFBSixFQUFtQztBQUNqQyxjQUFNQyxtQkFBbUIsR0FBR0gsVUFBNUI7QUFBQSxjQUF3QztBQUNsQ0ksVUFBQUEsSUFBSSxHQUFHRCxtQkFBbUIsQ0FBQ0UsT0FBcEIsRUFEYjtBQUdBSixVQUFBQSxJQUFJLEdBQUlHLElBQUksS0FBS2pCLDRCQUFWLElBQ0NpQixJQUFJLEtBQUtoQiw4QkFEVixJQUVDZ0IsSUFBSSxLQUFLZiw4QkFGakI7QUFHRDs7QUFFRCxlQUFPWSxJQUFQO0FBQ0QsT0FmYSxDQUFkO0FBaUJBVCxNQUFBQSxXQUFXLGdDQUNOQSxXQURNLElBRVRLLHlCQUZTLEVBQVg7QUFLQSxVQUFNUyxJQUFJLEdBQUdaLFFBQWI7QUFBQSxVQUF3QjtBQUNsQmEsTUFBQUEsZUFBZSxHQUFHaEIsSUFBSSxDQUFDaUIsa0JBQUwsRUFEeEI7QUFBQSxVQUVNQyxhQUFhLEdBQUcsSUFBSW5CLGFBQUosQ0FBa0JnQixJQUFsQixFQUF3QmQsV0FBeEIsRUFBcUNlLGVBQXJDLENBRnRCO0FBSUEsYUFBT0UsYUFBUDtBQUNEOzs7O0VBbkN5QnpCLEk7O0FBc0M1QjBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyksXG4gICAgICBjbGFzc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jbGFzcycpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJ1bGVOYW1lRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZU5hbWUnKSxcbiAgICAgIFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGlzSW5zdGFuY2VPZiB9ID0gY2xhc3NVdGlsaXRpZXMsXG4gICAgICB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcztcblxuY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBrZWVwID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlID09PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgfHxcbiAgICAgICAgICAgICAgICh0eXBlID09PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcDtcbiAgICB9KTtcblxuICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgLi4uZGVmaW5pdGlvbnMsXG4gICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXdyaXR0ZW5SdWxlO1xuIl19