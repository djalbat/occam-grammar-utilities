'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

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

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    DIRECTLY_LEFT_RECURSIVE_TYPE = types.DIRECTLY_LEFT_RECURSIVE_TYPE,
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
                        throw new Error('The \'' + ruleName + '\' rule has non-left recursive definitions and therefore cannot be rewritten.');
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
                        var firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
                            leftRecursiveRuleName = firstLeftRecursiveRuleName,
                            ///
                        ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

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
                        }
                  }

                  return directlyLeftRecursiveDefinition;
            }
      }]);

      return DirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = DirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiRGVsdGFQYXJ0IiwiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsIkVycm9yIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJkZWx0YVBhcnQiLCJ0eXBlIiwicGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01FLFlBQVlGLFFBQVEsa0JBQVIsQ0FEbEI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLG9CQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxxQkFBUixDQUhyQjtBQUFBLElBSU1LLGdCQUFnQkwsUUFBUSxzQkFBUixDQUp0QjtBQUFBLElBS01NLGdCQUFnQk4sUUFBUSxzQkFBUixDQUx0QjtBQUFBLElBTU1PLHFCQUFxQlAsUUFBUSwyQkFBUixDQU4zQjtBQUFBLElBT01RLHNCQUFzQlIsUUFBUSw0QkFBUixDQVA1QjtBQUFBLElBUU1TLHNCQUFzQlQsUUFBUSw0QkFBUixDQVI1QjtBQUFBLElBU01VLDBCQUEwQlYsUUFBUSxnQ0FBUixDQVRoQzs7QUFXTSxJQUFFVyxjQUFGLEdBQXFCWixTQUFyQixDQUFFWSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVtQ1osS0FGbkMsQ0FFRVksNEJBRkY7QUFBQSxJQUdFQyxRQUhGLEdBR2lGUixhQUhqRixDQUdFUSxRQUhGO0FBQUEs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QSxrQ0FFTTJDLFFBQVEsQ0FDTkYsU0FETSxDQUZkO0FBQUEsa0NBS01HLHFCQUFxQnJDLGlDQUFpQ0ksVUFBakMsQ0FMM0I7O0FBT0FtQixnRUFBa0MsSUFBSXJCLCtCQUFKLENBQW9DaUMsSUFBcEMsRUFBMENDLEtBQTFDLEVBQWlEOUIsUUFBakQsRUFBMkRGLFVBQTNELEVBQXVFaUMsa0JBQXZFLEVBQTJGYixzQkFBM0YsQ0FBbEM7QUFDRDtBQUNGOztBQUVELHlCQUFPRCwrQkFBUDtBQUNEOzs7O0VBcEUyQ2pDLHVCOztBQXVFOUNnRCxPQUFPQyxPQUFQLEdBQWlCckMsK0JBQWpCIiwiZmlsZSI6ImRpcmVjdGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi8uLi90eXBlcycpLFxuICAgICAgRGVsdGFQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9kZWx0YScpLFxuICAgICAgUmVkdWNlZFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9ydWxlL3JlZHVjZWQnKSxcbiAgICAgIFJlcGVhdGVkUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlblJ1bGUgPSByZXF1aXJlKCcuLi8uLi9ydWxlL3Jld3JpdHRlbicpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBSZXBlYXRlZERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkJyksXG4gICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW4nKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpLFxuICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXMgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsdGFQYXJ0ID0gbmV3IERlbHRhUGFydCgpLFxuICAgICAgICAgICAgICB0eXBlID0gRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgICAgZGVsdGFQYXJ0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19