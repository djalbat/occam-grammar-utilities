'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../../types'),
    DeltaPart = require('../../part/delta'),
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

var DirectlyLeftRecursiveDefinition = function (_LeftRecursiveDefinit) {
  _inherits(DirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  function DirectlyLeftRecursiveDefinition() {
    _classCallCheck(this, DirectlyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (DirectlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(DirectlyLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(DirectlyLeftRecursiveDefinition, [{
    key: 'rewrite',
    value: function rewrite(rules) {
      var definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);

      var reducedRule = reducedRuleFromRule(rule, rules, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString();

        throw new Error('The \'' + definitionString + '\' directly left recursive definition of the \'' + ruleName + '\' rule has no sibling non-left recursive definitions and therefore cannot be rewritten.');
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
    key: 'fromRuleNameAndDefinition',
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

              throw new Error('The \'' + definitionString + '\' directly left recursive definition of the \'' + ruleName + '\' rule is unary and therefore cannot be rewritten.');
            }

            var definitionComplex = isDefinitionComplex(definition);

            if (definitionComplex) {
              var _definitionString = definition.asString();

              throw new Error('The \'' + _definitionString + '\' directly left recursive definition of the \'' + ruleName + '\' rule is complex and therefore cannot be rewritten.');
            }

            var deltaPart = new DeltaPart(),
                type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [deltaPart],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiRGVsdGFQYXJ0IiwiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZmluZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJpc0RlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJyZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwiZGVsdGFQYXJ0IiwidHlwZSIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLFlBQVlELFFBQVEsa0JBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLG9CQUFSLENBRnBCO0FBQUEsSUFHTUcsZUFBZUgsUUFBUSxxQkFBUixDQUhyQjtBQUFBLElBSU1JLGdCQUFnQkosUUFBUSxzQkFBUixDQUp0QjtBQUFBLElBS01LLGdCQUFnQkwsUUFBUSxzQkFBUixDQUx0QjtBQUFBLElBTU1NLHFCQUFxQk4sUUFBUSwyQkFBUixDQU4zQjtBQUFBLElBT01PLHNCQUFzQlAsUUFBUSw0QkFBUixDQVA1QjtBQUFBLElBUU1RLHNCQUFzQlIsUUFBUSw0QkFBUixDQVI1QjtBQUFBLElBU01TLDBCQUEwQlQsUUFBUSxnQ0FBUixDQVRoQzs7QUFXTSxJQUFFVSw0QkFBRixHQUFtQ1gsS0FBbkMsQ0FBRVcsNEJBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2lGTixhQURqRixDQUNFTSxRQURGO0FBQUEsSUFDWUMsbUJBRFosR0FDaUZQLGFBRGpGLENBQ1lPLG1CQURaO0FBQUEsSUFDaUNDLG9CQURqQyxHQUNpRlIsYUFEakYsQ0FDaUNRLG9CQURqQztBQUFBLElBQ3VEQyxxQkFEdkQsR0FDaUZULGFBRGpGLENBQ3VEUyxxQkFEdkQ7QUFBQSxJQUVFQyxpQkFGRixHQUVxSFAsbUJBRnJILENBRUVPLGlCQUZG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LHNCQUEzRixDQUFsQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQS9CRDtBQWdDRDs7QUFFRCxhQUFPRCwrQkFBUDtBQUNEOzs7O0VBeEUyQ2pDLHVCOztBQTJFOUM4QyxPQUFPQyxPQUFQLEdBQWlCckMsK0JBQWpCIiwiZmlsZSI6ImRpcmVjdGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBEZWx0YVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L2RlbHRhJyksXG4gICAgICBSZWR1Y2VkUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmVkdWNlZCcpLFxuICAgICAgUmVwZWF0ZWRSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZXBlYXRlZCcpLFxuICAgICAgUmV3cml0dGVuUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmV3cml0dGVuJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWx0YVBhcnQgPSBuZXcgRGVsdGFQYXJ0KCksXG4gICAgICAgICAgICAgICAgdHlwZSA9IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgICAgICBkZWx0YVBhcnRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=