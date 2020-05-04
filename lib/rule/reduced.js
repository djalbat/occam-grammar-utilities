"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parsers = require("occam-parsers");

var types = require("../types"),
    ReducedNode = require("../node/reduced"),
    classUtilities = require("../utilities/class"),
    ruleNameUtilities = require("../utilities/ruleName"),
    RecursiveDefinition = require("../definition/recursive");

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

var ReducedRule = /*#__PURE__*/function (_Rule) {
  _inherits(ReducedRule, _Rule);

  var _super = _createSuper(ReducedRule);

  function ReducedRule() {
    _classCallCheck(this, ReducedRule);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJ0eXBlcyIsIlJlZHVjZWROb2RlIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwicnVsZSIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXZCOztBQUVBLElBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7QUFBQSxJQUNNRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUQzQjtBQUFBLElBRU1HLGNBQWMsR0FBR0gsT0FBTyxDQUFDLG9CQUFELENBRjlCO0FBQUEsSUFHTUksaUJBQWlCLEdBQUdKLE9BQU8sQ0FBQyx1QkFBRCxDQUhqQztBQUFBLElBSU1LLG1CQUFtQixHQUFHTCxPQUFPLENBQUMseUJBQUQsQ0FKbkM7O0FBTU0sSUFBRU0sSUFBRixHQUFXUCxPQUFYLENBQUVPLElBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ21CSixjQURuQixDQUNFSSxZQURGO0FBQUEsSUFFRUMsMkJBRkYsR0FFa0NKLGlCQUZsQyxDQUVFSSwyQkFGRjtBQUFBLElBR0VDLDRCQUhGLEdBR21HUixLQUhuRyxDQUdFUSw0QkFIRjtBQUFBLElBR2dDQyw4QkFIaEMsR0FHbUdULEtBSG5HLENBR2dDUyw4QkFIaEM7QUFBQSxJQUdnRUMsOEJBSGhFLEdBR21HVixLQUhuRyxDQUdnRVUsOEJBSGhFOztJQUtBQyxXOzs7Ozs7Ozs7Ozs7OzhCQUNNO0FBQ1IsVUFBTUMsaUJBQWlCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsTUFBM0M7QUFBQSxVQUNNQyxLQUFLLEdBQUlILGlCQUFpQixLQUFLLENBRHJDO0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixVQUFJSCxXQUFXLEdBQUdHLElBQUksQ0FBQ0MsY0FBTCxFQUFsQjtBQUVBLFVBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZUFBZSxHQUFHYiwyQkFBMkIsQ0FBQ1csUUFBRCxDQURuRDtBQUdBTCxNQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ1EsTUFBWixDQUFtQixVQUFDQyxVQUFELEVBQWdCO0FBQy9DLFlBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsWUFBTUMsNkJBQTZCLEdBQUdsQixZQUFZLENBQUNnQixVQUFELEVBQWFsQixtQkFBYixDQUFsRDs7QUFFQSxZQUFJb0IsNkJBQUosRUFBbUM7QUFDakMsY0FBTUMsbUJBQW1CLEdBQUdILFVBQTVCO0FBQUEsY0FBd0M7QUFDbENJLFVBQUFBLElBQUksR0FBR0QsbUJBQW1CLENBQUNFLE9BQXBCLEVBRGI7QUFHQUosVUFBQUEsSUFBSSxHQUFJRyxJQUFJLEtBQUtsQiw0QkFBVixJQUNDa0IsSUFBSSxLQUFLakIsOEJBRFYsSUFFQ2lCLElBQUksS0FBS2hCLDhCQUZqQjtBQUdEOztBQUVELGVBQU9hLElBQVA7QUFDRCxPQWZhLENBQWQ7QUFpQkEsVUFBTUssSUFBSSxHQUFHUixlQUFiO0FBQUEsVUFDTVMsZUFBZSxHQUFHNUIsV0FEeEI7QUFBQSxVQUNzQztBQUNoQzZCLE1BQUFBLFdBQVcsR0FBRyxJQUFJbkIsV0FBSixDQUFnQmlCLElBQWhCLEVBQXNCZixXQUF0QixFQUFtQ2dCLGVBQW5DLENBRnBCO0FBSUEsYUFBT0MsV0FBUDtBQUNEOzs7O0VBcEN1QnpCLEk7O0FBdUMxQjBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKFwib2NjYW0tcGFyc2Vyc1wiKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIiksXG4gICAgICBSZWR1Y2VkTm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL3JlZHVjZWRcIiksXG4gICAgICBjbGFzc1V0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvY2xhc3NcIiksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIiksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCIpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGlzSW5zdGFuY2VPZiB9ID0gY2xhc3NVdGlsaXRpZXMsXG4gICAgICB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBrZWVwID0gdHJ1ZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgIT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpICYmXG4gICAgICAgICAgICAgICAodHlwZSAhPT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwXG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZTtcbiJdfQ==