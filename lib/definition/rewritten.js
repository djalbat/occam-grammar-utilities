"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamParsers = require("occam-parsers");

var _parts = require("../utilities/parts");

var _definition = require("../utilities/definition");

var _ruleName = require("../utilities/ruleName");

var _part = require("../utilities/part");

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

var RewrittenDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RewrittenDefinition, _Definition);

  var _super = _createSuper(RewrittenDefinition);

  function RewrittenDefinition() {
    _classCallCheck(this, RewrittenDefinition);

    return _super.apply(this, arguments);
  }

  _createClass(RewrittenDefinition, null, [{
    key: "fromDefinitionAndLeftRecursiveRuleName",
    value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
      var parts = definition.getParts();
      parts = (0, _parts.cloneParts)(parts); ///

      parts.shift(); ///

      var definitionLookAhead = (0, _definition.isDefinitionLookAhead)(definition),
          lookAhead = definitionLookAhead,
          ///
      repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(leftRecursiveRuleName),
          reducedLeftRecursiveRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(leftRecursiveRuleName),
          zeroOrMoreRepeatedRuleNamePart = (0, _part.zeroOrMoreRuleNamePartPartFromRuleName)(repeatedRuleName),
          reducedLeftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedLeftRecursiveRuleName, lookAhead),
          rewrittenDefinition = new RewrittenDefinition(parts);
      parts.unshift(reducedLeftRecursiveRuleNamePart);
      parts.push(zeroOrMoreRepeatedRuleNamePart);
      return rewrittenDefinition;
    }
  }]);

  return RewrittenDefinition;
}(_occamParsers.Definition);

exports["default"] = RewrittenDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJsb29rQWhlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmV3cml0dGVuRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJwdXNoIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7OzsyREFDMkJDLFUsRUFBWUMscUIsRUFBdUI7QUFDL0UsVUFBSUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLFFBQVgsRUFBWjtBQUVBRCxNQUFBQSxLQUFLLEdBQUcsdUJBQVdBLEtBQVgsQ0FBUixDQUgrRSxDQUduRDs7QUFFNUJBLE1BQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUwrRSxDQUsvRDs7QUFFaEIsVUFBTUMsbUJBQW1CLEdBQUcsdUNBQXNCTCxVQUF0QixDQUE1QjtBQUFBLFVBQ01NLFNBQVMsR0FBR0QsbUJBRGxCO0FBQUEsVUFDd0M7QUFDbENFLE1BQUFBLGdCQUFnQixHQUFHLDRDQUE2Qk4scUJBQTdCLENBRnpCO0FBQUEsVUFHTU8sNEJBQTRCLEdBQUcsMkNBQTRCUCxxQkFBNUIsQ0FIckM7QUFBQSxVQUlNUSw4QkFBOEIsR0FBRyxrREFBdUNGLGdCQUF2QyxDQUp2QztBQUFBLFVBS01HLGdDQUFnQyxHQUFHLG9DQUF5QkYsNEJBQXpCLEVBQXVERixTQUF2RCxDQUx6QztBQUFBLFVBTU1LLG1CQUFtQixHQUFHLElBQUlaLG1CQUFKLENBQXdCRyxLQUF4QixDQU41QjtBQVFBQSxNQUFBQSxLQUFLLENBQUNVLE9BQU4sQ0FBY0YsZ0NBQWQ7QUFFQVIsTUFBQUEsS0FBSyxDQUFDVyxJQUFOLENBQVdKLDhCQUFYO0FBRUEsYUFBT0UsbUJBQVA7QUFDRDs7OztFQXJCOENHLHdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTG9va0FoZWFkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHBhcnRzLnVuc2hpZnQocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpO1xuXG4gICAgcGFydHMucHVzaCh6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cbiJdfQ==