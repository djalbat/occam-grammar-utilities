"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImtlZXAiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsImdldFR5cGUiLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7OzZCQUNIQyxJLEVBQU07QUFDcEIsVUFBSUMsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQUwsRUFBbEI7O0FBRUEsVUFBTUMsUUFBUSxHQUFHSCxJQUFJLENBQUNJLE9BQUwsRUFBakI7QUFBQSxVQUNNQyxlQUFlLEdBQUcsNENBQTRCRixRQUE1QixDQUR4QjtBQUFBLFVBRU1HLHlCQUF5QixHQUFHQyxxQkFBbUJDLFlBQW5CLENBQWdDSCxlQUFoQyxDQUZsQzs7QUFJQUosTUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNRLE1BQVosQ0FBbUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyxZQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUVBLFlBQU1DLDZCQUE2QixHQUFHLHlCQUFhRixVQUFiLEVBQXlCRyxxQkFBekIsQ0FBdEM7O0FBRUEsWUFBSUQsNkJBQUosRUFBbUM7QUFDakMsY0FBTUUsbUJBQW1CLEdBQUdKLFVBQTVCO0FBQUEsY0FBd0M7QUFDbENLLFVBQUFBLElBQUksR0FBR0QsbUJBQW1CLENBQUNFLE9BQXBCLEVBRGI7QUFHQUwsVUFBQUEsSUFBSSxHQUFJSSxJQUFJLEtBQUtFLG1DQUFWLElBQ0NGLElBQUksS0FBS0cscUNBRFYsSUFFQ0gsSUFBSSxLQUFLSSxxQ0FGakI7QUFHRDs7QUFFRCxlQUFPUixJQUFQO0FBQ0QsT0FmYSxDQUFkO0FBaUJBVixNQUFBQSxXQUFXLGdDQUNOQSxXQURNLElBRVRLLHlCQUZTLEVBQVg7QUFLQSxVQUFNYyxJQUFJLEdBQUdqQixRQUFiO0FBQUEsVUFBd0I7QUFDbEJrQixNQUFBQSxlQUFlLEdBQUdyQixJQUFJLENBQUNzQixrQkFBTCxFQUR4QjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxJQUFJeEIsYUFBSixDQUFrQnFCLElBQWxCLEVBQXdCbkIsV0FBeEIsRUFBcUNvQixlQUFyQyxDQUZ0QjtBQUlBLGFBQU9FLGFBQVA7QUFDRDs7OztFQW5Dd0NDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUnVsZU5hbWVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3J1bGVOYW1lXCI7XG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbGFzc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBrZWVwID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlID09PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgfHxcbiAgICAgICAgICAgICAgICh0eXBlID09PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcDtcbiAgICB9KTtcblxuICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgLi4uZGVmaW5pdGlvbnMsXG4gICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgXTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiJdfQ==