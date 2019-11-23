'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeltaPart = require('../../part/delta'),
    ruleUtilities = require('../../utilities/rule'),
    arrayUtilities = require('../../utilities/array'),
    RepeatedDefinition = require('../../definition/repeated'),
    RewrittenDefinition = require('../../definition/rewritten'),
    definitionUtilities = require('../../utilities/definition');

var LeftRecursiveDefinition = require('../../definition/leftRecursive');

var first = arrayUtilities.first,
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
      var ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules),
          rewrittenRule = rewrittenRuleFromRule(rule, rules),
          reducedRule = reducedRuleFromRule(rule, rules),
          repeatedRule = repeatedRuleFromRule(rule, rules),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        throw new Error('The \'' + ruleName + '\' rule has non-left recursive definitions and therefore cannot be rewritten.');
      }

      var definition = this.getDefinition(),
          leftRecursiveRuleName = ruleName,
          ///
      repeatedDefinition = RepeatedDefinition.fromDefinition(definition),
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

      repeatedRule.addDefinition(repeatedDefinition);

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
              parts = [deltaPart],
              recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
        }
      }

      return directlyLeftRecursiveDefinition;
    }
  }]);

  return DirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = DirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiRGVsdGFQYXJ0IiwicmVxdWlyZSIsInJ1bGVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZSIsInJld3JpdHRlblJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlcGVhdGVkUnVsZSIsInJlZHVjZWRSdWxlRW1wdHkiLCJpc0VtcHR5IiwiRXJyb3IiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJkZWx0YVBhcnQiLCJwYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2QjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSwyQkFBUixDQUgzQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSw0QkFBUixDQUo1QjtBQUFBLElBS01LLHNCQUFzQkwsUUFBUSw0QkFBUixDQUw1Qjs7QUFPQSxJQUFNTSwwQkFBMEJOLFFBQVEsZ0NBQVIsQ0FBaEM7O0FBRU0sSUFBRU8sS0FBRixHQUFZTCxjQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2lGUCxhQURqRixDQUNFTyxRQURGO0FBQUEsSUFDWUMsbUJBRFosR0FDaUZSLGFBRGpGLENBQ1lRLG1CQURaO0FBQUEsSUFDaUNDLG9CQURqQyxHQUNpRlQsYUFEakYsQ0FDaUNTLG9CQURqQztBQUFBLElBQ3VEQyxxQkFEdkQsR0FDaUZWLGFBRGpGLENBQ3VEVSxxQkFEdkQ7QUFBQSxJQUVFQyxpQkFGRixHQUVxSFAsbUJBRnJILENBRUVPLGlCQUZGO0FBQUEsSUFFcUJDLG1CQUZyQixHQUVxSFIsbUJBRnJILENBRXFCUSxtQkFGckI7QUFBQSxJQUUwQ0MsZ0NBRjFDLEdBRXFIVCxtQkFGckgsQ0FFMENTLGdDQUYxQztBQUFBLElBRTRFQyxvQ0FGNUUsR0FFcUhWLG1CQUZySCxDQUU0RVUsb0NBRjVFOztJQUlBQywrQjs7Ozs7Ozs7Ozs7NEJBQ0lDLEssRUFBTztBQUNiLFVBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01DLE9BQU9aLFNBQVNVLFFBQVQsRUFBbUJELEtBQW5CLENBRGI7QUFBQSxVQUVNSSxnQkFBZ0JWLHNCQUFzQlMsSUFBdEIsRUFBNEJILEtBQTVCLENBRnRCO0FBQUEsVUFHTUssY0FBY2Isb0JBQW9CVyxJQUFwQixFQUEwQkgsS0FBMUIsQ0FIcEI7QUFBQSxVQUlNTSxlQUFlYixxQkFBcUJVLElBQXJCLEVBQTJCSCxLQUEzQixDQUpyQjtBQUFBLFVBS01PLG1CQUFtQkYsWUFBWUcsT0FBWixFQUx6Qjs7QUFPQSxVQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNLElBQUlFLEtBQUosWUFBa0JSLFFBQWxCLG1GQUFOO0FBQ0Q7O0FBRUQsVUFBTVMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsd0JBQXdCWCxRQUQ5QjtBQUFBLFVBQ3dDO0FBQ2xDWSwyQkFBcUIzQixtQkFBbUI0QixjQUFuQixDQUFrQ0osVUFBbEMsQ0FGM0I7QUFBQSxVQUdNSyxzQkFBc0I1QixvQkFBb0I2QixzQ0FBcEIsQ0FBMkROLFVBQTNELEVBQXVFRSxxQkFBdkUsQ0FINUI7QUFBQSxVQUlNSyx3QkFBd0IsSUFKOUIsQ0FaYSxDQWdCdUI7O0FBRXBDWCxtQkFBYVksYUFBYixDQUEyQkwsa0JBQTNCOztBQUVBVCxvQkFBY2UsaUJBQWQsQ0FBZ0NGLHFCQUFoQyxFQUF1REYsbUJBQXZEO0FBQ0Q7Ozs4Q0FFZ0NkLFEsRUFBVVMsVSxFQUFZO0FBQ3JELFVBQUlVLGtDQUFrQyxJQUF0Qzs7QUFFQSxVQUFNQyx5QkFBeUJ2QixxQ0FBcUNZLFVBQXJDLENBQS9CO0FBQUEsVUFDTVksK0JBQStCRCx1QkFBdUJFLE1BRDVEO0FBQUEsVUFFTUMsMEJBQTJCRiwrQkFBK0IsQ0FGaEU7O0FBSUEsVUFBSUUsdUJBQUosRUFBNkI7QUFDM0IsWUFBTUMsNkJBQTZCbkMsTUFBTStCLHNCQUFOLENBQW5DO0FBQUEsWUFDTVQsd0JBQXdCYSwwQkFEOUI7QUFBQSxZQUMwRDtBQUNwREMsd0NBQWlDekIsYUFBYVcscUJBRnBEOztBQUlBLFlBQUljLDZCQUFKLEVBQW1DO0FBQ2pDLGNBQU1DLGtCQUFrQmhDLGtCQUFrQmUsVUFBbEIsQ0FBeEI7O0FBRUEsY0FBSWlCLGVBQUosRUFBcUI7QUFDbkIsZ0JBQU1DLG1CQUFtQmxCLFdBQVdtQixRQUFYLEVBQXpCOztBQUVBLGtCQUFNLElBQUlwQixLQUFKLFlBQWtCbUIsZ0JBQWxCLHVEQUFrRjNCLFFBQWxGLHlEQUFOO0FBQ0Q7O0FBRUQsY0FBTTZCLG9CQUFvQmxDLG9CQUFvQmMsVUFBcEIsQ0FBMUI7O0FBRUEsY0FBSW9CLGlCQUFKLEVBQXVCO0FBQ3JCLGdCQUFNRixvQkFBbUJsQixXQUFXbUIsUUFBWCxFQUF6Qjs7QUFFQSxrQkFBTSxJQUFJcEIsS0FBSixZQUFrQm1CLGlCQUFsQix1REFBa0YzQixRQUFsRiwyREFBTjtBQUNEOztBQUVELGNBQU04QixZQUFZLElBQUlqRCxTQUFKLEVBQWxCO0FBQUEsY0FDTWtELFFBQVEsQ0FDTkQsU0FETSxDQURkO0FBQUEsY0FJTUUscUJBQXFCcEMsaUNBQWlDYSxVQUFqQyxDQUozQjs7QUFNQVUsNENBQWtDLElBQUlyQiwrQkFBSixDQUFvQ2lDLEtBQXBDLEVBQTJDL0IsUUFBM0MsRUFBcURTLFVBQXJELEVBQWlFdUIsa0JBQWpFLEVBQXFGWixzQkFBckYsQ0FBbEM7QUFDRDtBQUNGOztBQUVELGFBQU9ELCtCQUFQO0FBQ0Q7Ozs7RUFoRTJDL0IsdUI7O0FBbUU5QzZDLE9BQU9DLE9BQVAsR0FBaUJwQywrQkFBakIiLCJmaWxlIjoiZGlyZWN0bHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlbHRhUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvZGVsdGEnKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXMgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcmVwZWF0ZWRSdWxlLmFkZERlZmluaXRpb24ocmVwZWF0ZWREZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsdGFQYXJ0ID0gbmV3IERlbHRhUGFydCgpLFxuICAgICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICBkZWx0YVBhcnRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=