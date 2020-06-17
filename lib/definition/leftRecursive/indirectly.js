"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _reduced = _interopRequireDefault(require("../../rule/reduced"));

var _repeated = _interopRequireDefault(require("../../rule/repeated"));

var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));

var _repeated2 = _interopRequireDefault(require("../../definition/repeated"));

var _rewritten2 = _interopRequireDefault(require("../../definition/rewritten"));

var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));

var _implicitly = _interopRequireDefault(require("../../definition/leftRecursive/implicitly"));

var _types = require("../../types");

var _rule = require("../../utilities/rule");

var _definition = require("../../utilities/definition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var first = _necessary.arrayUtilities.first;

var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/function (_LeftRecursiveDefinit) {
  _inherits(IndirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  var _super = _createSuper(IndirectlyLeftRecursiveDefinition);

  function IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    var _this;

    _classCallCheck(this, IndirectlyLeftRecursiveDefinition);

    _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    _this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
    return _this;
  }

  _createClass(IndirectlyLeftRecursiveDefinition, [{
    key: "getImplicitlyLeftRecursiveDefinition",
    value: function getImplicitlyLeftRecursiveDefinition() {
      return this.implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: "rewrite",
    value: function rewrite(ruleMap) {
      var definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = ruleMap[ruleName] || null;
      var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName,
          ///
      leftRecursiveRule = ruleMap[leftRecursiveRuleName] || null;
      var reducedRule = (0, _rule.reducedRuleFromRule)(leftRecursiveRule, ruleMap, _reduced["default"]),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString(),
            implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
        throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
      }

      var repeatedRule = (0, _rule.repeatedRuleFromRule)(leftRecursiveRule, ruleMap, _repeated["default"]),
          repeatedDefinition = _repeated2["default"].fromDefinition(definition);

      repeatedRule.addDefinition(repeatedDefinition);
      (0, _rule.rewrittenRuleFromRule)(leftRecursiveRule, ruleMap, _rewritten["default"]);

      var rewrittenDefinition = _rewritten2["default"].fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///


      rule.replaceDefinition(replacementDefinition, rewrittenDefinition);
    }
  }], [{
    key: "fromRuleNameDefinitionAndRecursiveDefinitions",
    value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
      var indirectlyLeftRecursiveDefinition = null;
      var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        leftRecursiveRuleNames.some(function (leftRecursiveRuleName) {
          var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

          if (!ruleNameLeftRecursiveRuleName) {
            var implicitlyLeftRecursiveDefinition = _implicitly["default"].fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

            if (implicitlyLeftRecursiveDefinition !== null) {
              var definitionUnary = (0, _definition.isDefinitionUnary)(definition);

              if (definitionUnary) {
                var definitionString = definition.asString();
                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
              }

              var definitionComplex = (0, _definition.isDefinitionComplex)(definition);

              if (definitionComplex) {
                var _definitionString = definition.asString();

                throw new Error("The '".concat(_definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
              }

              var type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  parts = [],
                  recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
              indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
              return true;
            }
          }
        });
      }

      return indirectlyLeftRecursiveDefinition;
    }
  }]);

  return IndirectlyLeftRecursiveDefinition;
}(_leftRecursive["default"]);

exports["default"] = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTWFwIiwiZ2V0RGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwicnVsZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZFJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nIiwiRXJyb3IiLCJyZXBlYXRlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJSZXBlYXRlZERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJSZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsaUM7Ozs7O0FBQ25CLDZDQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxrQkFBL0MsRUFBbUVDLHNCQUFuRSxFQUEyRkMsaUNBQTNGLEVBQThIO0FBQUE7O0FBQUE7O0FBQzVILDhCQUFNTixJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0Msa0JBQXpDLEVBQTZEQyxzQkFBN0Q7QUFFQSxVQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBSDRIO0FBSTdIOzs7OzJEQUVzQztBQUNyQyxhQUFPLEtBQUtBLGlDQUFaO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2YsVUFBTUosVUFBVSxHQUFHLEtBQUtLLGFBQUwsRUFBbkI7QUFBQSxVQUNNTixRQUFRLEdBQUcsS0FBS08sV0FBTCxFQURqQjtBQUFBLFVBRU1DLElBQUksR0FBR0gsT0FBTyxDQUFDTCxRQUFELENBQVAsSUFBcUIsSUFGbEM7QUFJQSxVQUFNRyxzQkFBc0IsR0FBRyxLQUFLTSx5QkFBTCxFQUEvQjtBQUFBLFVBQ01DLDBCQUEw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QUFBQSxrQkFDTTlDLEtBQUssR0FBRyxFQURkO0FBQUEsa0JBRU1HLGtCQUFrQixHQUFHLGtEQUFpQ0QsVUFBakMsQ0FGM0I7QUFJQWtDLGNBQUFBLGlDQUFpQyxHQUFHLElBQUl0QyxpQ0FBSixDQUFzQ0MsSUFBdEMsRUFBNENDLEtBQTVDLEVBQW1EQyxRQUFuRCxFQUE2REMsVUFBN0QsRUFBeUVDLGtCQUF6RSxFQUE2RkMsc0JBQTdGLEVBQXFIQyxpQ0FBckgsQ0FBcEM7QUFFQSxxQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNGLFNBaENEO0FBaUNEOztBQUVELGFBQU8rQixpQ0FBUDtBQUNEOzs7O0VBekY0RFcseUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcbmltcG9ydCBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS9pbXBsaWNpdGx5XCI7XG5cbmltcG9ydCB7IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZSA9IHJ1bGVNYXBbbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwLCBSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVNYXAsIFJld3JpdHRlblJ1bGUpO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iXX0=