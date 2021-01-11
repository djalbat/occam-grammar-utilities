"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamParsers = require("occam-parsers");

var _ruleName = _interopRequireDefault(require("../definition/ruleName"));

var _recursive = _interopRequireDefault(require("../definition/recursive"));

var _class = require("../utilities/class");

var _ruleName2 = require("../utilities/ruleName");

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
          reducedRuleName = (0, _ruleName2.reducedRuleNameFromRuleName)(ruleName),
          reducedRuleNameDefinition = _ruleName["default"].fromRuleName(reducedRuleName);

      definitions = definitions.filter(function (definition) {
        var keep = false;
        var definitionRecursiveDefinition = (0, _class.isInstanceOf)(definition, _recursive["default"]);

        if (definitionRecursiveDefinition) {
          var recursiveDefinition = definition,
              ///
          type = recursiveDefinition.getType();
          keep = type === _types.DIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.INDIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
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
}(_occamParsers.Rule);

exports["default"] = RewrittenRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsImdldFR5cGUiLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs2QkFDSEMsSSxFQUFNO0FBQ3BCLFVBQUlDLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxjQUFMLEVBQWxCOztBQUVBLFVBQU1DLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZUFBZSxHQUFHLDRDQUE0QkYsUUFBNUIsQ0FEeEI7QUFBQSxVQUVNRyx5QkFBeUIsR0FBR0MscUJBQW1CQyxZQUFuQixDQUFnQ0gsZUFBaEMsQ0FGbEM7O0FBSUFKLE1BQUFBLFdBQVcsR0FBR0EsV0FBVyxDQUFDUSxNQUFaLENBQW1CLFVBQUNDLFVBQUQsRUFBZ0I7QUFDL0MsWUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFFQSxZQUFNQyw2QkFBNkIsR0FBRyx5QkFBYUYsVUFBYixFQUF5QkcscUJBQXpCLENBQXRDOztBQUVBLFlBQUlELDZCQUFKLEVBQW1DO0FBQ2pDLGNBQU1FLG1CQUFtQixHQUFHSixVQUE1QjtBQUFBLGNBQXdDO0FBQ2xDSyxVQUFBQSxJQUFJLEdBQUdELG1CQUFtQixDQUFDRSxPQUFwQixFQURiO0FBR0FMLFVBQUFBLElBQUksR0FBSUksSUFBSSxLQUFLRSxtQ0FBVixJQUNDRixJQUFJLEtBQUtHLHFDQURWLElBRUNILElBQUksS0FBS0kscUNBRmpCO0FBR0Q7O0FBRUQsZUFBT1IsSUFBUDtBQUNELE9BZmEsQ0FBZDtBQWlCQVYsTUFBQUEsV0FBVyxnQ0FDTkEsV0FETSxJQUVUSyx5QkFGUyxFQUFYO0FBS0EsVUFBTWMsSUFBSSxHQUFHakIsUUFBYjtBQUFBLFVBQXdCO0FBQ2xCa0IsTUFBQUEsZUFBZSxHQUFHckIsSUFBSSxDQUFDc0Isa0JBQUwsRUFEeEI7QUFBQSxVQUVNQyxhQUFhLEdBQUcsSUFBSXhCLGFBQUosQ0FBa0JxQixJQUFsQixFQUF3Qm5CLFdBQXhCLEVBQXFDb0IsZUFBckMsQ0FGdEI7QUFJQSxhQUFPRSxhQUFQO0FBQ0Q7Ozs7RUFuQ3dDQyxrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJ1bGVOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlTmFtZVwiO1xuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgdHlwZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGtlZXAgPSAodHlwZSA9PT0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgfHxcbiAgICAgICAgICAgICAgICh0eXBlID09PSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpIHx8XG4gICAgICAgICAgICAgICAodHlwZSA9PT0gSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGtlZXA7XG4gICAgfSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgIC4uLmRlZmluaXRpb25zLFxuICAgICAgcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvblxuICAgIF07XG5cbiAgICBjb25zdCBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5SdWxlO1xuICB9XG59XG4iXX0=