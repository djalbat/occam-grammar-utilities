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

var types = require("../../types"),
    ReducedRule = require("../../rule/reduced"),
    RepeatedRule = require("../../rule/repeated"),
    RewrittenRule = require("../../rule/rewritten"),
    ruleUtilities = require("../../utilities/rule"),
    RepeatedDefinition = require("../../definition/repeated"),
    RewrittenDefinition = require("../../definition/rewritten"),
    definitionUtilities = require("../../utilities/definition"),
    LeftRecursiveDefinition = require("../../definition/leftRecursive");

var DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
    findRule = ruleUtilities.findRule,
    reducedRuleFromRule = ruleUtilities.reducedRuleFromRule,
    repeatedRuleFromRule = ruleUtilities.repeatedRuleFromRule,
    rewrittenRuleFromRule = ruleUtilities.rewrittenRuleFromRule,
    isDefinitionUnary = definitionUtilities.isDefinitionUnary,
    isDefinitionComplex = definitionUtilities.isDefinitionComplex,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var DirectlyLeftRecursiveDefinition = /*#__PURE__*/function (_LeftRecursiveDefinit) {
  _inherits(DirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  var _super = _createSuper(DirectlyLeftRecursiveDefinition);

  function DirectlyLeftRecursiveDefinition() {
    _classCallCheck(this, DirectlyLeftRecursiveDefinition);

    return _super.apply(this, arguments);
  }

  _createClass(DirectlyLeftRecursiveDefinition, [{
    key: "rewrite",
    value: function rewrite(rules) {
      var definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);
      var reducedRule = reducedRuleFromRule(rule, rules, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString();
        throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule has no sibling non-left recursive definitions and therefore cannot be rewritten."));
      }

      var leftRecursiveRuleName = ruleName; ///

      var repeatedRule = repeatedRuleFromRule(rule, rules, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);
      repeatedRule.addDefinition(repeatedDefinition);
      var rewrittenRule = rewrittenRuleFromRule(rule, rules, RewrittenRule),
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

      rewrittenRule.replaceDefinition(replacementDefinition, rewrittenDefinition);
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var directlyLeftRecursiveDefinition = null;
      var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        leftRecursiveRuleNames.some(function (leftRecursiveRuleName) {
          var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

          if (ruleNameLeftRecursiveRuleName) {
            var definitionUnary = isDefinitionUnary(definition);

            if (definitionUnary) {
              var definitionString = definition.asString();
              throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
            }

            var definitionComplex = isDefinitionComplex(definition);

            if (definitionComplex) {
              var _definitionString = definition.asString();

              throw new Error("The '".concat(_definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
            }

            var type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);
            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
            return true;
          }
        });
      }

      return directlyLeftRecursiveDefinition;
    }
  }]);

  return DirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = DirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGx5LmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlJlZHVjZWRSdWxlIiwiUmVwZWF0ZWRSdWxlIiwiUmV3cml0dGVuUnVsZSIsInJ1bGVVdGlsaXRpZXMiLCJSZXBlYXRlZERlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsInR5cGUiLCJwYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXJCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEM0I7QUFBQSxJQUVNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUY1QjtBQUFBLElBR01HLGFBQWEsR0FBR0gsT0FBTyxDQUFDLHNCQUFELENBSDdCO0FBQUEsSUFJTUksYUFBYSxHQUFHSixPQUFPLENBQUMsc0JBQUQsQ0FKN0I7QUFBQSxJQUtNSyxrQkFBa0IsR0FBR0wsT0FBTyxDQUFDLDJCQUFELENBTGxDO0FBQUEsSUFNTU0sbUJBQW1CLEdBQUdOLE9BQU8sQ0FBQyw0QkFBRCxDQU5uQztBQUFBLElBT01PLG1CQUFtQixHQUFHUCxPQUFPLENBQUMsNEJBQUQsQ0FQbkM7QUFBQSxJQVFNUSx1QkFBdUIsR0FBR1IsT0FBTyxDQUFDLGdDQUFELENBUnZDOztBQVVNLElBQUVTLDRCQUFGLEdBQW1DVixLQUFuQyxDQUFFVSw0QkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDaUZOLGFBRGpGLENBQ0VNLFFBREY7QUFBQSxJQUNZQyxtQkFEWixHQUNpRlAsYUFEakYsQ0FDWU8sbUJBRFo7QUFBQSxJQUNpQ0Msb0JBRGpDLEdBQ2lGUixhQURqRixDQUNpQ1Esb0JBRGpDO0FBQUEsSUFDdURDLHFCQUR2RCxHQUNpRlQsYUFEakYsQ0FDdURTLHFCQUR2RDtBQUFBLElBRUVDLGlCQUZGLEdBRXFIUCxtQkFGckgsQ0FFRU8s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LEtBQUssR0FBRyxFQURkO0FBQUEsZ0JBRU1DLGtCQUFrQixHQUFHcEMsZ0NBQWdDLENBQUNJLFVBQUQsQ0FGM0Q7QUFJQXFCLFlBQUFBLCtCQUErQixHQUFHLElBQUl2QiwrQkFBSixDQUFvQ2dDLElBQXBDLEVBQTBDQyxLQUExQyxFQUFpRDdCLFFBQWpELEVBQTJERixVQUEzRCxFQUF1RWdDLGtCQUF2RSxFQUEyRlYsc0JBQTNGLENBQWxDO0FBRUEsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0E1QkQ7QUE2QkQ7O0FBRUQsYUFBT0QsK0JBQVA7QUFDRDs7OztFQXJFMkNqQyx1Qjs7QUF3RTlDNkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEMsK0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpLFxuICAgICAgUmVkdWNlZFJ1bGUgPSByZXF1aXJlKFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCIpLFxuICAgICAgUmVwZWF0ZWRSdWxlID0gcmVxdWlyZShcIi4uLy4uL3J1bGUvcmVwZWF0ZWRcIiksXG4gICAgICBSZXdyaXR0ZW5SdWxlID0gcmVxdWlyZShcIi4uLy4uL3J1bGUvcmV3cml0dGVuXCIpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkXCIpLFxuICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIiksXG4gICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIik7XG5cbmNvbnN0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXMsXG4gICAgICB7IGZpbmRSdWxlLCByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXBlYXRlZFJ1bGVGcm9tUnVsZSwgcmV3cml0dGVuUnVsZUZyb21SdWxlIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlcykge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVkdWNlZFJ1bGUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlRW1wdHkgPSByZWR1Y2VkUnVsZS5pc0VtcHR5KCk7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGVFbXB0eSkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXMgbm8gc2libGluZyBub24tbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzLCBSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcmV3cml0dGVuUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==