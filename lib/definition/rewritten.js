"use strict";

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

module.exports = RewrittenDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJsb29rQWhlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicmV3cml0dGVuRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJwdXNoIiwiRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsbUI7Ozs7Ozs7Ozs7Ozs7MkRBQzBDQyxVLEVBQVlDLHFCLEVBQXVCO0FBQy9FLFVBQUlDLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxRQUFYLEVBQVo7QUFFQUQsTUFBQUEsS0FBSyxHQUFHLHVCQUFXQSxLQUFYLENBQVIsQ0FIK0UsQ0FHbkQ7O0FBRTVCQSxNQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FMK0UsQ0FLL0Q7O0FBRWhCLFVBQU1DLG1CQUFtQixHQUFHLHVDQUFzQkwsVUFBdEIsQ0FBNUI7QUFBQSxVQUNNTSxTQUFTLEdBQUdELG1CQURsQjtBQUFBLFVBQ3dDO0FBQ2xDRSxNQUFBQSxnQkFBZ0IsR0FBRyw0Q0FBNkJOLHFCQUE3QixDQUZ6QjtBQUFBLFVBR01PLDRCQUE0QixHQUFHLDJDQUE0QlAscUJBQTVCLENBSHJDO0FBQUEsVUFJTVEsOEJBQThCLEdBQUcsa0RBQXVDRixnQkFBdkMsQ0FKdkM7QUFBQSxVQUtNRyxnQ0FBZ0MsR0FBRyxvQ0FBeUJGLDRCQUF6QixFQUF1REYsU0FBdkQsQ0FMekM7QUFBQSxVQU1NSyxtQkFBbUIsR0FBRyxJQUFJWixtQkFBSixDQUF3QkcsS0FBeEIsQ0FONUI7QUFRQUEsTUFBQUEsS0FBSyxDQUFDVSxPQUFOLENBQWNGLGdDQUFkO0FBRUFSLE1BQUFBLEtBQUssQ0FBQ1csSUFBTixDQUFXSiw4QkFBWDtBQUVBLGFBQU9FLG1CQUFQO0FBQ0Q7Ozs7RUFyQitCRyx3Qjs7QUF3QmxDQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Mb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBkZWZpbml0aW9uTG9va0FoZWFkLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcGFydHMudW5zaGlmdChyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJld3JpdHRlbkRlZmluaXRpb247XG4iXX0=