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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    value: function rewrite(rules) {
      var definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = (0, _rule.findRule)(ruleName, rules);
      var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName,
          ///
      leftRecursiveRule = (0, _rule.findRule)(leftRecursiveRuleName, rules);
      var reducedRule = (0, _rule.reducedRuleFromRule)(leftRecursiveRule, rules, _reduced["default"]),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString(),
            implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
        throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
      }

      var repeatedRule = (0, _rule.repeatedRuleFromRule)(leftRecursiveRule, rules, _repeated["default"]),
          repeatedDefinition = _repeated2["default"].fromDefinition(definition);

      repeatedRule.addDefinition(repeatedDefinition);
      (0, _rule.rewrittenRuleFromRule)(leftRecursiveRule, rules, _rewritten["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImdldERlZmluaXRpb24iLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsInJlZHVjZWRSdWxlIiwiUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyIsIkVycm9yIiwicmVwZWF0ZWRSdWxlIiwiUmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiUmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwiUmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwic29tZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLGlDOzs7OztBQUNuQiw2Q0FBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxVQUFuQyxFQUErQ0Msa0JBQS9DLEVBQW1FQyxzQkFBbkUsRUFBMkZDLGlDQUEzRixFQUE4SDtBQUFBOztBQUFBOztBQUM1SCw4QkFBTU4sSUFBTixFQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsVUFBN0IsRUFBeUNDLGtCQUF6QyxFQUE2REMsc0JBQTdEO0FBRUEsVUFBS0MsaUNBQUwsR0FBeUNBLGlDQUF6QztBQUg0SDtBQUk3SDs7OzsyREFFc0M7QUFDckMsYUFBTyxLQUFLQSxpQ0FBWjtBQUNEOzs7NEJBRU9DLEssRUFBTztBQUNiLFVBQU1KLFVBQVUsR0FBRyxLQUFLSyxhQUFMLEVBQW5CO0FBQUEsVUFDTU4sUUFBUSxHQUFHLEtBQUtPLFdBQUwsRUFEakI7QUFBQSxVQUVNQyxJQUFJLEdBQUcsb0JBQVNSLFFBQVQsRUFBbUJLLEtBQW5CLENBRmI7QUFJQSxVQUFNRixzQkFBc0IsR0FBRyxLQUFLTSx5QkFBTCxFQUEvQjtBQUFBLFVBQ01DLDBCQUEwQixHQUFH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TTlDLEtBQUssR0FBRyxFQURkO0FBQUEsa0JBRU1HLGtCQUFrQixHQUFHLGtEQUFpQ0QsVUFBakMsQ0FGM0I7QUFJQWtDLGNBQUFBLGlDQUFpQyxHQUFHLElBQUl0QyxpQ0FBSixDQUFzQ0MsSUFBdEMsRUFBNENDLEtBQTVDLEVBQW1EQyxRQUFuRCxFQUE2REMsVUFBN0QsRUFBeUVDLGtCQUF6RSxFQUE2RkMsc0JBQTdGLEVBQXFIQyxpQ0FBckgsQ0FBcEM7QUFFQSxxQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNGLFNBaENEO0FBaUNEOztBQUVELGFBQU8rQixpQ0FBUDtBQUNEOzs7O0VBekY0RFcseUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcbmltcG9ydCBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS9pbXBsaWNpdGx5XCI7XG5cbmltcG9ydCB7IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gZmluZFJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVzLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSk7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiJdfQ==