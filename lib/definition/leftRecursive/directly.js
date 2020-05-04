"use strict";

var _reduced = _interopRequireDefault(require("../../rule/reduced"));

var _repeated = _interopRequireDefault(require("../../rule/repeated"));

var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));

var _repeated2 = _interopRequireDefault(require("../../definition/repeated"));

var _rewritten2 = _interopRequireDefault(require("../../definition/rewritten"));

var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));

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
          rule = (0, _rule.findRule)(ruleName, rules);
      var reducedRule = (0, _rule.reducedRuleFromRule)(rule, rules, _reduced["default"]),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString();
        throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule has no sibling non-left recursive definitions and therefore cannot be rewritten."));
      }

      var leftRecursiveRuleName = ruleName; ///

      var repeatedRule = (0, _rule.repeatedRuleFromRule)(rule, rules, _repeated["default"]),
          repeatedDefinition = _repeated2["default"].fromDefinition(definition);

      repeatedRule.addDefinition(repeatedDefinition);

      var rewrittenRule = (0, _rule.rewrittenRuleFromRule)(rule, rules, _rewritten["default"]),
          rewrittenDefinition = _rewritten2["default"].fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///


      rewrittenRule.replaceDefinition(replacementDefinition, rewrittenDefinition);
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var directlyLeftRecursiveDefinition = null;
      var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        leftRecursiveRuleNames.some(function (leftRecursiveRuleName) {
          var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

          if (ruleNameLeftRecursiveRuleName) {
            var definitionUnary = (0, _definition.isDefinitionUnary)(definition);

            if (definitionUnary) {
              var definitionString = definition.asString();
              throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
            }

            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);

            if (definitionComplex) {
              var _definitionString = definition.asString();

              throw new Error("The '".concat(_definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
            }

            var type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [],
                recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
            return true;
          }
        });
      }

      return directlyLeftRecursiveDefinition;
    }
  }]);

  return DirectlyLeftRecursiveDefinition;
}(_leftRecursive["default"]);

module.exports = DirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGx5LmpzIl0sIm5hbWVzIjpbIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsIlJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVFbXB0eSIsImlzRW1wdHkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZSIsIlJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJld3JpdHRlblJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsInR5cGUiLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwicGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztB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akQsRUFBMkRGLFVBQTNELEVBQXVFc0Msa0JBQXZFLEVBQTJGWCxzQkFBM0YsQ0FBbEM7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQTVCRDtBQTZCRDs7QUFFRCxhQUFPRCwrQkFBUDtBQUNEOzs7O0VBckUyQ2EseUI7O0FBd0U5Q0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0MsK0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=