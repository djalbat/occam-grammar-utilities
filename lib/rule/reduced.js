"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamParsers = require("occam-parsers");

var _reduced = _interopRequireDefault(require("../node/reduced"));

var _recursive = _interopRequireDefault(require("../definition/recursive"));

var _class = require("../utilities/class");

var _ruleName = require("../utilities/ruleName");

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
          reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
      definitions = definitions.filter(function (definition) {
        var keep = true;
        var definitionRecursiveDefinition = (0, _class.isInstanceOf)(definition, _recursive["default"]);

        if (definitionRecursiveDefinition) {
          var recursiveDefinition = definition,
              ///
          type = recursiveDefinition.getType();
          keep = type !== _types.DIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
        }

        return keep;
      });
      var name = reducedRuleName,
          NonTerminalNode = _reduced["default"],
          ///
      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
      return reducedRule;
    }
  }]);

  return ReducedRule;
}(_occamParsers.Rule);

exports["default"] = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQuanMiXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImRlZmluaXRpb25zIiwibGVuZ3RoIiwiZW1wdHkiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsVUFBTUMsaUJBQWlCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsTUFBM0M7QUFBQSxVQUNNQyxLQUFLLEdBQUlILGlCQUFpQixLQUFLLENBRHJDO0FBR0EsYUFBT0csS0FBUDtBQUNEOzs7NkJBRWVDLEksRUFBTTtBQUNwQixVQUFJSCxXQUFXLEdBQUdHLElBQUksQ0FBQ0MsY0FBTCxFQUFsQjtBQUVBLFVBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQWpCO0FBQUEsVUFDTUMsZUFBZSxHQUFHLDJDQUE0QkYsUUFBNUIsQ0FEeEI7QUFHQUwsTUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNRLE1BQVosQ0FBbUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyxZQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBLFlBQU1DLDZCQUE2QixHQUFHLHlCQUFhRixVQUFiLEVBQXlCRyxxQkFBekIsQ0FBdEM7O0FBRUEsWUFBSUQsNkJBQUosRUFBbUM7QUFDakMsY0FBTUUsbUJBQW1CLEdBQUdKLFVBQTVCO0FBQUEsY0FBd0M7QUFDbENLLFVBQUFBLElBQUksR0FBR0QsbUJBQW1CLENBQUNFLE9BQXBCLEVBRGI7QUFHQUwsVUFBQUEsSUFBSSxHQUFJSSxJQUFJLEtBQUtFLG1DQUFWLElBQ0NGLElBQUksS0FBS0cscUNBRFYsSUFFQ0gsSUFBSSxLQUFLSSxxQ0FGakI7QUFHRDs7QUFFRCxlQUFPUixJQUFQO0FBQ0QsT0FmYSxDQUFkO0FBaUJBLFVBQU1TLElBQUksR0FBR1osZUFBYjtBQUFBLFVBQ01hLGVBQWUsR0FBR0MsbUJBRHhCO0FBQUEsVUFDc0M7QUFDaENDLE1BQUFBLFdBQVcsR0FBRyxJQUFJeEIsV0FBSixDQUFnQnFCLElBQWhCLEVBQXNCbkIsV0FBdEIsRUFBbUNvQixlQUFuQyxDQUZwQjtBQUlBLGFBQU9FLFdBQVA7QUFDRDs7OztFQXBDc0NDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlICE9PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgJiZcbiAgICAgICAgICAgICAgICh0eXBlICE9PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG4iXX0=