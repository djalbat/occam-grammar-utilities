'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeltaPart = require('../../part/delta'),
    ruleUtilities = require('../../utilities/rule'),
    arrayUtilities = require('../../utilities/array'),
    definitionUtilities = require('../../utilities/definition'),
    recursiveDefinitionUtilities = require('../../utilities/recursiveDefinition');

var LeftRecursiveDefinition = require('../../definition/leftRecursive');

var first = arrayUtilities.first,
    findImplicitlyLeftRecursiveDefinition = recursiveDefinitionUtilities.findImplicitlyLeftRecursiveDefinition,
    findRule = ruleUtilities.findRule,
    reducedRuleFromRule = ruleUtilities.reducedRuleFromRule,
    repeatedRuleFromRule = ruleUtilities.repeatedRuleFromRule,
    rewrittenRuleFromRule = ruleUtilities.rewrittenRuleFromRule,
    isDefinitionUnary = definitionUtilities.isDefinitionUnary,
    isDefinitionComplex = definitionUtilities.isDefinitionComplex,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var IndirectlyLeftRecursiveDefinition = function (_LeftRecursiveDefinit) {
      _inherits(IndirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

      function IndirectlyLeftRecursiveDefinition() {
            _classCallCheck(this, IndirectlyLeftRecursiveDefinition);

            return _possibleConstructorReturn(this, (IndirectlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(IndirectlyLeftRecursiveDefinition)).apply(this, arguments));
      }

      _createClass(IndirectlyLeftRecursiveDefinition, [{
            key: 'rewrite',
            value: function rewrite(rules) {
                  var ruleName = this.getRuleName(),
                      rule = findRule(ruleName, rules),
                      leftRecursiveDefinition = this,
                      ///
                  replacementDefinition = this,
                      ///
                  rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

                  rule.replaceDefinition(replacementDefinition, rewrittenDefinition);

                  var leftRecursiveRuleName = this.getLeftRecursiveRuleName(),
                      repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
                      repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

                  repeatedRule.addDefinition(repeatedDefinition);

                  var implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
                      definition = implicitlyLeftRecursiveDefinition.getDefinition(),
                      implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,
                      ///
                  implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
                      reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);

                  implicitlyLeftRecursiveRule.addDefinition(definition, -1);

                  reducedLeftRecursiveRule.removeDefinition(definition);

                  var reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName(),
                      reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);

                  implicitlyLeftRecursiveRule.addDefinition(reducedLeftRecursiveRuleNameDefinition);

                  var reducedLeftRecursiveRuleEmpty = reducedLeftRecursiveRule.isEmpty();

                  // if (reducedLeftRecursiveRuleEmpty) {
                  //   const implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveRule.getName();
                  //
                  //   throw new Error(`The '${implicitlyLeftRecursiveRuleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
                  // }
            }
      }], [{
            key: 'fromRuleNameDefinitionAndRecursiveRuleNames',
            value: function fromRuleNameDefinitionAndRecursiveRuleNames(ruleName, definition, recursiveRuleNames) {
                  var indirectlyLeftRecursiveDefinition = null;

                  var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
                      leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
                      definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

                  if (definitionLeftRecursive) {
                        var firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
                            leftRecursiveRuleName = firstLeftRecursiveRuleName,
                            ///
                        ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

                        if (!ruleNameLeftRecursiveRuleName) {
                              var implicitlyLeftRecursiveDefinition = null; ///

                              if (implicitlyLeftRecursiveDefinition !== null) {
                                    var definitionUnary = isDefinitionUnary(definition);

                                    if (definitionUnary) {
                                          var definitionString = definition.asString();

                                          throw new Error('The \'' + definitionString + '\' left recursive definition of the \'' + ruleName + '\' rule is unary and therefore cannot be rewritten.');
                                    }

                                    var definitionComplex = isDefinitionComplex(definition);

                                    if (definitionComplex) {
                                          var _definitionString = definition.asString();

                                          throw new Error('The \'' + _definitionString + '\' left recursive definition of the \'' + ruleName + '\' rule is complex and therefore cannot be rewritten.');
                                    }

                                    var deltaPart = new DeltaPart(),
                                        parts = [deltaPart];

                                    indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, definition, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
                              }
                        }
                  }

                  return indirectlyLeftRecursiveDefinition;
            }
      }]);

      return IndirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyJdLCJuYW1lcyI6WyJEZWx0YVBhcnQiLCJyZXF1aXJlIiwicnVsZVV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsInJlY3Vyc2l2ZURlZmluaXRpb25VdGlsaXRpZXMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0IiwiZmluZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsInJlcGVhdGVkUnVsZSIsInJlcGVhdGVkUnVsZUZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJhZGREZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlIiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlIiwicmVtb3ZlRGVmaW5pdGlvbiIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24iLCJSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVFbXB0eSIsImlzRW1wdHkiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJkZWx0YVBhcnQiLCJwYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2QjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSw0QkFBUixDQUg1QjtBQUFBLElBSU1JLCtCQUErQkosUUFBUSxxQ0FBUixDQUpyQzs7QUFNQSxJQUFNSywwQkFBMEJMLFFBQVEsZ0NBQVIsQ0FBaEM7O0FBRU0sSUFBRU0sS0FBRixHQUFZSixjQUFaLENBQUVJLEtBQUY7QUFBQSxJ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QUFDbkIsOENBQU1DLG1CQUFtQnRCLFdBQVd1QixRQUFYLEVBQXpCOztBQUVBLGdEQUFNLElBQUlDLEtBQUosWUFBa0JGLGdCQUFsQiw4Q0FBeUV4QyxRQUF6RSx5REFBTjtBQUNEOztBQUVELHdDQUFNMkMsb0JBQW9CL0Msb0JBQW9Cc0IsVUFBcEIsQ0FBMUI7O0FBRUEsd0NBQUl5QixpQkFBSixFQUF1QjtBQUNyQiw4Q0FBTUgsb0JBQW1CdEIsV0FBV3VCLFFBQVgsRUFBekI7O0FBRUEsZ0RBQU0sSUFBSUMsS0FBSixZQUFrQkYsaUJBQWxCLDhDQUF5RXhDLFFBQXpFLDJEQUFOO0FBQ0Q7O0FBRUQsd0NBQU00QyxZQUFZLElBQUk5RCxTQUFKLEVBQWxCO0FBQUEsd0NBQ00rRCxRQUFRLENBQ05ELFNBRE0sQ0FEZDs7QUFLQVosd0VBQW9DLElBQUlsQyxpQ0FBSixDQUFzQytDLEtBQXRDLEVBQTZDN0MsUUFBN0MsRUFBdURrQixVQUF2RCxFQUFtRWUsc0JBQW5FLEVBQTJGakIsaUNBQTNGLENBQXBDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELHlCQUFPZ0IsaUNBQVA7QUFDRDs7OztFQW5GNkM1Qyx1Qjs7QUFzRmhEMEQsT0FBT0MsT0FBUCxHQUFpQmpELGlDQUFqQiIsImZpbGUiOiJpbmRpcmVjdGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWx0YVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L2RlbHRhJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKSxcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvcmVjdXJzaXZlRGVmaW5pdGlvbicpO1xuXG5jb25zdCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZmluZEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB9ID0gcmVjdXJzaXZlRGVmaW5pdGlvblV0aWxpdGllcyxcbiAgICAgIHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgcmV3cml0ZShydWxlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlID0gZmluZFJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLCBydWxlcyk7XG5cbiAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCAtMSk7XG5cbiAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGUucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIGNvbnN0IHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uID0gUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZS5hZGREZWZpbml0aW9uKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uKTtcblxuICAgIGNvbnN0IHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZUVtcHR5ID0gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlLmlzRW1wdHkoKTtcblxuICAgIC8vIGlmIChyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVFbXB0eSkge1xuICAgIC8vICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZS5nZXROYW1lKCk7XG4gICAgLy9cbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBydWxlIGhhcyBubyBub24tcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZVJ1bGVOYW1lcyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsOyAvLy9cblxuICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVsdGFQYXJ0ID0gbmV3IERlbHRhUGFydCgpLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICAgICAgZGVsdGFQYXJ0XG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==