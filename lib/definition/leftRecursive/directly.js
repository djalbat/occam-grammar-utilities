'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZmluZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJpc0RlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJyZXdyaXR0ZW5SdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwidHlwZSIsInBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLHFCQUFSLENBRnJCO0FBQUEsSUFHTUcsZ0JBQWdCSCxRQUFRLHNCQUFSLENBSHRCO0FBQUEsSUFJTUksZ0JBQWdCSixRQUFRLHNCQUFSLENBSnRCO0FBQUEsSUFLTUsscUJBQXFCTCxRQUFRLDJCQUFSLENBTDNCO0FBQUEsSUFNTU0sc0JBQXNCTixRQUFRLDRCQUFSLENBTjVCO0FBQUEsSUFPTU8sc0JBQXNCUCxRQUFRLDRCQUFSLENBUDVCO0FBQUEsSUFRTVEsMEJBQTBCUixRQUFRLGdDQUFSLENBUmhDOztBQVVNLElBQUVTLDRCQUFGLEdBQW1DVixLQUFuQyxDQUFFVSw0QkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDaUZOLGFBRGpGLENBQ0VNLFFBREY7QUFBQSxJQUNZQyxtQkFEWixHQUNpRlAsYUFEakYsQ0FDWU8sbUJBRFo7QUFBQSxJQUNpQ0Msb0JBRGpDLEdBQ2lGUixhQURqRixDQUNpQ1Esb0JBRGpDO0FBQUEsSUFDdURDLHFCQUR2RCxHQUNpRlQsYUFEakYsQ0FDdURTLHFCQUR2RDtBQUFBLElBRUVDLGlCQUZGLEdBRXFIUCxtQkFGckgsQ0FFRU8saUJBRkY7QUFBQSxJQUVxQkMsbUJBRnJCLEdBRXFIUixtQkFGckgsQ0FFcUJRLG1CQUZyQjtBQUFBLElBRTBD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QyxPQUFQLEdBQWlCcEMsK0JBQWpCIiwiZmlsZSI6ImRpcmVjdGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJyksXG4gICAgICBSZWR1Y2VkUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmVkdWNlZCcpLFxuICAgICAgUmVwZWF0ZWRSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZXBlYXRlZCcpLFxuICAgICAgUmV3cml0dGVuUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmV3cml0dGVuJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=