'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var types = require('../../types'),
    ReducedRule = require('../../rule/reduced'),
    RepeatedRule = require('../../rule/repeated'),
    RewrittenRule = require('../../rule/rewritten'),
    ruleUtilities = require('../../utilities/rule'),
    RepeatedDefinition = require('../../definition/repeated'),
    RewrittenDefinition = require('../../definition/rewritten'),
    definitionUtilities = require('../../utilities/definition'),
    LeftRecursiveDefinition = require('../../definition/leftRecursive');

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

  function DirectlyLeftRecursiveDefinition() {
    _classCallCheck(this, DirectlyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, _getPrototypeOf(DirectlyLeftRecursiveDefinition).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGx5LmpzIl0sIm5hbWVzIjpbInR5cGVzIiwicmVxdWlyZSIsIlJlZHVjZWRSdWxlIiwiUmVwZWF0ZWRSdWxlIiwiUmV3cml0dGVuUnVsZSIsInJ1bGVVdGlsaXRpZXMiLCJSZXBlYXRlZERlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsInR5cGUiLCJwYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBckI7QUFBQSxJQUNNQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUQzQjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBRjVCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSCxPQUFPLENBQUMsc0JBQUQsQ0FIN0I7QUFBQSxJQUlNSSxhQUFhLEdBQUdKLE9BQU8sQ0FBQyxzQkFBRCxDQUo3QjtBQUFBLElBS01LLGtCQUFrQixHQUFHTCxPQUFPLENBQUMsMkJBQUQsQ0FMbEM7QUFBQSxJQU1NTSxtQkFBbUIsR0FBR04sT0FBTyxDQUFDLDRCQUFELENBTm5DO0FBQUEsSUFPTU8sbUJBQW1CLEdBQUdQLE9BQU8sQ0FBQyw0QkFBRCxDQVBuQztBQUFBLElBUU1RLHVCQUF1QixHQUFHUixPQUFPLENBQUMsZ0NBQUQsQ0FSdkM7O0FBVU0sSUFBRVMsNEJBQUYsR0FBbUNWLEtBQW5DLENBQUVVLDRCQUFGO0FBQUEsSUFDRUMsUUFERixHQUNpRk4sYUFEakYsQ0FDRU0sUUFERjtBQUFBLElBQ1lDLG1CQURaLEdBQ2lGUCxhQURqRixDQUNZTyxtQkFEWjtBQUFBLElBQ2lDQyxvQkFEakMsR0FDaUZSLGFBRGpGLENBQ2lDUSxvQkFEakM7QUFBQSxJQUN1REMscUJBRHZELEdBQ2lGVCxhQURqRixDQUN1RFMscUJBRHZEO0FBQUEsSUFFRUMsaUJBRkYsR0FFcUhQLG1CQUZySCxDQUVFTyxpQkFG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R0FBRyxFQURkO0FBQUEsZ0JBRU1DLGtCQUFrQixHQUFHcEMsZ0NBQWdDLENBQUNJLFVBQUQsQ0FGM0Q7QUFJQXFCLFlBQUFBLCtCQUErQixHQUFHLElBQUl2QiwrQkFBSixDQUFvQ2dDLElBQXBDLEVBQTBDQyxLQUExQyxFQUFpRDdCLFFBQWpELEVBQTJERixVQUEzRCxFQUF1RWdDLGtCQUF2RSxFQUEyRlYsc0JBQTNGLENBQWxDO0FBRUEsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0E1QkQ7QUE2QkQ7O0FBRUQsYUFBT0QsK0JBQVA7QUFDRDs7OztFQXJFMkNqQyx1Qjs7QUF3RTlDNkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEMsK0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBSZWR1Y2VkUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmVkdWNlZCcpLFxuICAgICAgUmVwZWF0ZWRSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZXBlYXRlZCcpLFxuICAgICAgUmV3cml0dGVuUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmV3cml0dGVuJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=