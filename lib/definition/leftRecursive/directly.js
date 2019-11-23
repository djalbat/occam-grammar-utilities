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

            throw new Error('The \'' + definitionString + '\' left recursive definition of the \'' + ruleName + '\' rule is unary and therefore cannot be rewritten.');
          }

          var definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            var _definitionString = definition.asString();

            throw new Error('The \'' + _definitionString + '\' left recursive definition of the \'' + ruleName + '\' rule is complex and therefore cannot be rewritten.');
          }

          var deltaPart = new DeltaPart(),
              parts = [deltaPart];

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, definition, leftRecursiveRuleNames);
        }
      }

      return directlyLeftRecursiveDefinition;
    }
  }]);

  return DirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = DirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiRGVsdGFQYXJ0IiwicmVxdWlyZSIsInJ1bGVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJyZXdyaXR0ZW5SdWxlIiwicmVkdWNlZFJ1bGUiLCJyZXBlYXRlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsIkVycm9yIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBlYXRlZERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImFkZERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsImRlZmluaXRpb25Db21wbGV4IiwiZGVsdGFQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsc0JBQVIsQ0FEdEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsdUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsMkJBQVIsQ0FIM0I7QUFBQSxJQUlNSSxzQkFBc0JKLFFBQVEsNEJBQVIsQ0FKNUI7QUFBQSxJQUtNSyxzQkFBc0JMLFFBQVEsNEJBQVIsQ0FMNUI7O0FBT0EsSUFBTU0sMEJBQTBCTixRQUFRLGdDQUFSLENBQWhDOztBQUVNLElBQUVPLEtBQUYsR0FBWUwsY0FBWixDQUFFSyxLQUFGO0FBQUEsSUFDRUMsUUFERixHQUNpRlAsYUFEakYsQ0FDRU8sUUFERjtBQUFBLElBQ1lDLG1CQURaLEdBQ2lGUixhQURqRixDQUNZUSxtQkFEWjtBQUFBLElBQ2lDQyxvQkFEakMsR0FDaUZULGFBRGpGLENBQ2lDUyxvQkFEakM7QUFBQSxJQUN1REMscUJBRHZELEdBQ2lGVixhQURqRixDQUN1RFUscUJBRHZEO0FBQUEsSUFFRUMsaUJBRkYsR0FFbUZQLG1CQUZuRixDQUVFTyxpQkFGRjtBQUFBLElBRXFCQyxtQkFGckIsR0FFbUZSLG1CQUZuRixDQUVxQlEsbUJBRnJCO0FBQUEsSUFFMENDLG9DQUYxQyxHQUVtRlQsbUJBRm5GLENBRTBDUyxvQ0FGMUM7O0lBSUFDLCtCOzs7Ozs7Ozs7Ozs0QkFDSUMsSyxFQUFPO0FBQ2IsVUFBTUMsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsVUFDTUMsT0FBT1gsU0FBU1MsUUFBVCxFQUFtQkQsS0FBbkIsQ0FEYjtBQUFBLFVBRU1JLGdCQUFnQlQsc0JBQXNCUSxJQUF0QixFQUE0QkgsS0FBNUIsQ0FGdEI7QUFBQSxVQUdNSyxjQUFjWixvQkFBb0JVLElBQXBCLEVBQTBCSCxLQUExQixDQUhwQjtBQUFBLFVBSU1NLGVBQWVaLHFCQUFxQlMsSUFBckIsRUFBMkJILEtBQTNCLENBSnJCO0FBQUEsVUFLTU8sbUJBQW1CRixZQUFZRyxPQUFaLEVBTHpCOztBQU9BLFVBQUlELGdCQUFKLEVBQXNCO0FBQ3BCLGNBQU0sSUFBSUUsS0FBSixZQUFrQlIsUUFBbEIsbUZBQU47QUFDRDs7QUFFRCxVQUFNUyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyx3QkFBd0JYLFFBRDlCO0FBQUEsVUFDd0M7QUFDbENZLDJCQUFxQjFCLG1CQUFtQjJCLGNBQW5CLENBQWtDSixVQUFsQyxDQUYzQjtBQUFBLFVBR01LLHNCQUFzQjNCLG9CQUFvQjRCLHNDQUFwQixDQUEyRE4sVUFBM0QsRUFBdUVFLHFCQUF2RSxDQUg1QjtBQUFBLFVBSU1LLHdCQUF3QixJQUo5QixDQVphLENBZ0J1Qjs7QUFFcENYLG1CQUFhWSxhQUFiLENBQTJCTCxrQkFBM0I7O0FBRUFULG9CQUFjZSxpQkFBZCxDQUFnQ0YscUJBQWhDLEVBQXVERixtQkFBdkQ7QUFDRDs7OzhDQUVnQ2QsUSxFQUFVUyxVLEVBQVk7QUFDckQsVUFBSVUsa0NBQWtDLElBQXRDOztBQUVBLFVBQU1DLHlCQUF5QnZCLHFDQUFxQ1ksVUFBckMsQ0FBL0I7QUFBQSxVQUNNWSwrQkFBK0JELHVCQUF1QkUsTUFENUQ7QUFBQSxVQUVNQywwQkFBMkJGLCtCQUErQixDQUZoRTs7QUFJQSxVQUFJRSx1QkFBSixFQUE2QjtBQUMzQixZQUFNQyw2QkFBNkJsQyxNQUFNOEIsc0JBQU4sQ0FBbkM7QUFBQSxZQUNNVCx3QkFBd0JhLDBCQUQ5QjtBQUFBLFlBQzBEO0FBQ3BEQyx3Q0FBaUN6QixhQUFhVyxxQkFGcEQ7O0FBSUEsWUFBSWMsNkJBQUosRUFBbUM7QUFDakMsY0FBTUMsa0JBQWtCL0Isa0JBQWtCYyxVQUFsQixDQUF4Qjs7QUFFQSxjQUFJaUIsZUFBSixFQUFxQjtBQUNuQixnQkFBTUMsbUJBQW1CbEIsV0FBV21CLFFBQVgsRUFBekI7O0FBRUEsa0JBQU0sSUFBSXBCLEtBQUosWUFBa0JtQixnQkFBbEIsOENBQXlFM0IsUUFBekUseURBQU47QUFDRDs7QUFFRCxjQUFNNkIsb0JBQW9CakMsb0JBQW9CYSxVQUFwQixDQUExQjs7QUFFQSxjQUFJb0IsaUJBQUosRUFBdUI7QUFDckIsZ0JBQU1GLG9CQUFtQmxCLFdBQVdtQixRQUFYLEVBQXpCOztBQUVBLGtCQUFNLElBQUlwQixLQUFKLFlBQWtCbUIsaUJBQWxCLDhDQUF5RTNCLFFBQXpFLDJEQUFOO0FBQ0Q7O0FBRUQsY0FBTThCLFlBQVksSUFBSWhELFNBQUosRUFBbEI7QUFBQSxjQUNNaUQsUUFBUSxDQUNORCxTQURNLENBRGQ7O0FBS0FYLDRDQUFrQyxJQUFJckIsK0JBQUosQ0FBb0NpQyxLQUFwQyxFQUEyQy9CLFFBQTNDLEVBQXFEUyxVQUFyRCxFQUFpRVcsc0JBQWpFLENBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRCwrQkFBUDtBQUNEOzs7O0VBL0QyQzlCLHVCOztBQWtFOUMyQyxPQUFPQyxPQUFQLEdBQWlCbkMsK0JBQWpCIiwiZmlsZSI6ImRpcmVjdGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWx0YVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L2RlbHRhJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBSZXBlYXRlZERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3JlcGVhdGVkJyksXG4gICAgICBSZXdyaXR0ZW5EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW4nKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3J1bGVOYW1lfScgcnVsZSBoYXMgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcmVwZWF0ZWRSdWxlLmFkZERlZmluaXRpb24ocmVwZWF0ZWREZWZpbml0aW9uKTtcblxuICAgIHJld3JpdHRlblJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsdGFQYXJ0ID0gbmV3IERlbHRhUGFydCgpLFxuICAgICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICBkZWx0YVBhcnRcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=