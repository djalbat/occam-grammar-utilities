"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    classUtilities = require("../utilities/class"),
    ruleNameUtilities = require("../utilities/ruleName"),
    RuleNameDefinition = require("../definition/ruleName"),
    RecursiveDefinition = require("../definition/recursive");

var Rule = parsers.Rule,
    isInstanceOf = classUtilities.isInstanceOf,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    IMPLICITLY_LEFT_RECURSIVE_TYPE = types.IMPLICITLY_LEFT_RECURSIVE_TYPE;

var RewrittenRule = /*#__PURE__*/function (_Rule) {
  _inherits(RewrittenRule, _Rule);

  var _super = _createSuper(RewrittenRule);

  function RewrittenRule() {
    _classCallCheck(this, RewrittenRule);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwiY2xhc3NVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiaXNJbnN0YW5jZU9mIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIlJld3JpdHRlblJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUF2Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXJCO0FBQUEsSUFDTUUsY0FBYyxHQUFHRixPQUFPLENBQUMsb0JBQUQsQ0FEOUI7QUFBQSxJQUVNRyxpQkFBaUIsR0FBR0gsT0FBTyxDQUFDLHVCQUFELENBRmpDO0FBQUEsSUFHTUksa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQyx3QkFBRCxDQUhsQztBQUFBLElBSU1LLG1CQUFtQixHQUFHTCxPQUFPLENBQUMseUJBQUQsQ0FKbkM7O0FBTU0sSUFBRU0sSUFBRixHQUFXUCxPQUFYLENBQUVPLElBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ21CTCxjQURuQixDQUNFSyxZQURGO0FBQUEsSUFFRUMsMkJBRkYsR0FFa0NMLGlCQUZsQyxDQUVFSywyQkFGRjtBQUFBLElBR0VDLDRCQUhGLEdBR21HUixLQUhuRyxDQUdFUSw0QkFIRjtBQUFBLElBR2dDQyw4QkFIaEMsR0FHbUdULEtBSG5HLENBR2dDUyw4QkFIaEM7QUFBQSxJQUdnRUMsOEJBSGhFLEdBR21HVixLQUhuRyxDQUdnRVUsOEJBSGhFOztJQUtBQyxhOzs7Ozs7Ozs7Ozs7OzZCQUNZQyxJLEVBQU07QUFDcEIsVUFBSUMsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQUwsRUFBbEI7QUFFQSxVQUFNQyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxFQUFqQjtBQUFBLFVBQ01DLGVBQWUsR0FBR1YsMkJBQTJCLENBQUNRLFFBQUQsQ0FEbkQ7QUFBQSxVQUVNRyx5QkFBeUIsR0FBR2Ysa0JBQWtCLENBQUNnQixZQUFuQixDQUFnQ0YsZUFBaEMsQ0FGbEM7QUFJQUosTUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNPLE1BQVosQ0FBbUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyxZQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUVBLFlBQU1DLDZCQUE2QixHQUFHakIsWUFBWSxDQUFDZSxVQUFELEVBQWFqQixtQkFBYixDQUFsRDs7QUFFQSxZQUFJbUIsNkJBQUosRUFBbUM7QUFDakMsY0FBTUMsbUJBQW1CLEdBQUdILFVBQTVCO0FBQUEsY0FBd0M7QUFDbENJLFVBQUFBLElBQUksR0FBR0QsbUJBQW1CLENBQUNFLE9BQXBCLEVBRGI7QUFHQUosVUFBQUEsSUFBSSxHQUFJRyxJQUFJLEtBQUtqQiw0QkFBVixJQUNDaUIsSUFBSSxLQUFLaEIsOEJBRFYsSUFFQ2dCLElBQUksS0FBS2YsOEJBRmpCO0FBR0Q7O0FBRUQsZUFBT1ksSUFBUDtBQUNELE9BZmEsQ0FBZDtBQWlCQVQsTUFBQUEsV0FBVyxnQ0FDTkEsV0FETSxJQUVUSyx5QkFGUyxFQUFYO0FBS0EsVUFBTVMsSUFBSSxHQUFHWixRQUFiO0FBQUEsVUFBd0I7QUFDbEJhLE1BQUFBLGVBQWUsR0FBR2hCLElBQUksQ0FBQ2lCLGtCQUFMLEVBRHhCO0FBQUEsVUFFTUMsYUFBYSxHQUFHLElBQUluQixhQUFKLENBQWtCZ0IsSUFBbEIsRUFBd0JkLFdBQXhCLEVBQXFDZSxlQUFyQyxDQUZ0QjtBQUlBLGFBQU9FLGFBQVA7QUFDRDs7OztFQW5DeUJ6QixJOztBQXNDNUIwQixNQUFNLENBQUNDLE9BQVAsR0FBaUJyQixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZShcIm9jY2FtLXBhcnNlcnNcIik7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpLFxuICAgICAgY2xhc3NVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2NsYXNzXCIpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCIpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIiksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCIpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGlzSW5zdGFuY2VPZiB9ID0gY2xhc3NVdGlsaXRpZXMsXG4gICAgICB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcztcblxuY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBrZWVwID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlID09PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgfHxcbiAgICAgICAgICAgICAgICh0eXBlID09PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcDtcbiAgICB9KTtcblxuICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgLi4uZGVmaW5pdGlvbnMsXG4gICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXdyaXR0ZW5SdWxlO1xuIl19