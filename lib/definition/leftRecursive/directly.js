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
          rule = findRule(ruleName, rules),
          reducedRule = reducedRuleFromRule(rule, rules, ReducedRule),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiRGVsdGFQYXJ0IiwiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsIkVycm9yIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJkZWx0YVBhcnQiLCJ0eXBlIiwicGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01FLFlBQVlGLFFBQVEsa0JBQVIsQ0FEbEI7QUFBQSxJQUVNRyxjQUFjSCxRQUFRLG9CQUFSLENBRnBCO0FBQUEsSUFHTUksZUFBZUosUUFBUSxxQkFBUixDQUhyQjtBQUFBLElBSU1LLGdCQUFnQkwsUUFBUSxzQkFBUixDQUp0QjtBQUFBLElBS01NLGdCQUFnQk4sUUFBUSxzQkFBUixDQUx0QjtBQUFBLElBTU1PLHFCQUFxQlAsUUFBUSwyQkFBUixDQU4zQjtBQUFBLElBT01RLHNCQUFzQlIsUUFBUSw0QkFBUixDQVA1QjtBQUFBLElBUU1TLHNCQUFzQlQsUUFBUSw0QkFBUixDQVI1QjtBQUFBLElBU01VLDBCQUEwQlYsUUFBUSxnQ0FBUixDQVRoQzs7QUFXTSxJQUFFVyxjQUFGLEdBQXFCWixTQUFyQixDQUFFWSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVtQ1osS0FGbkMsQ0FFRVksNEJBRkY7QUFBQSxJQUdFQyxRQUhGLEdBR2lGUixhQUhqRixDQUdFUSxRQUhGO0FBQUEsSUFHWUMsbUJBSFosR0FHaUZULGFBSGpGLENBR1lTLG1CQUhaO0FBQUEsSUFHaUNDLG9CQUhqQyxHQUdpRlYsYUFIakYsQ0FHaUNVLG9CQUhqQztBQUFBLElBR3VEQyxxQkFIdkQsR0FHaUZYLGFBSGpGLENBR3VEVyxxQkFIdkQ7QUFBQSxJQUlFQyxpQkFKRixHQUlxSFQsbUJBSnJILENBSUVTLGlCQUpGO0FBQUEsSUFJcUJDLG1CQUpyQixHQUlxSFYsbUJBSnJILENBSXFCVSxtQkFKckI7QUFBQSxJQUkwQ0MsZ0NBSjFDLEdBSXFIWCxtQkFKckgsQ0FJMENXLGdDQUoxQztBQUFBLElBSTRFQyxvQ0FKNUUsR0FJcUhaLG1CQUpySCxDQUk0RVksb0NBSjVFOztJQU1BQywrQjs7Ozs7Ozs7Ozs7NEJBQ0lDLEssRUFBTztBQUNiLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFdBQVcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLFVBRU1DLE9BQU9kLFNBQVNZLFFBQVQsRUFBbUJILEtBQW5CLENBRmI7QUFBQSxVQUdNTSxjQUFjZCxvQkFBb0JhLElBQXBCLEVBQTBCTCxLQUExQixFQUFpQ3BCLFdBQWpDLENBSHBCO0FBQUEsVUFJTTJCLG1CQUFtQkQsWUFBWUUsT0FBWixFQUp6Qjs7QUFNQSxVQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNLElBQUlFLEtBQUosWUFBa0JOLFFBQWxCLG1GQUFOO0FBQ0Q7O0FBRUQsVUFBTU8sd0JBQXdCUCxRQUE5QixDQVhhLENBVzJCOztBQUV4QyxVQUFNUSxlQUFlbEIscUJBQXFCWSxJQUFyQixFQUEyQkwsS0FBM0IsRUFBa0NuQixZQUFsQyxDQUFyQjtBQUFBLFVBQ00rQixxQkFBcUI1QixtQkFBbUI2QixjQUFuQixDQUFrQ1osVUFBbEMsQ0FEM0I7O0FBR0FVLG1CQUFhRyxhQUFiLENBQTJCRixrQkFBM0I7O0FBRUEsVUFBTUcsZ0JBQWdCckIsc0JBQXNCVyxJQUF0QixFQUE0QkwsS0FBNUIsRUFBbUNsQixhQUFuQyxDQUF0QjtBQUFBLFVBQ01rQyxzQkFBc0IvQixvQkFBb0JnQyxzQ0FBcEIsQ0FBMkRoQixVQUEzRCxFQUF1RVMscUJBQXZFLENBRDVCO0FBQUEsVUFFTVEsd0JBQXdCLElBRjlCLENBbEJhLENBb0J1Qjs7QUFFcENILG9CQUFjSSxpQkFBZCxDQUFnQ0QscUJBQWhDLEVBQXVERixtQkFBdkQ7QUFDRDs7OzhDQUVnQ2IsUSxFQUFVRixVLEVBQVk7QUFDckQsVUFBSW1CLGtDQUFrQyxJQUF0Qzs7QUFFQSxVQUFNQyx5QkFBeUJ2QixxQ0FBcUNHLFVBQXJDLENBQS9CO0FBQUEsVUFDTXFCLCtCQUErQkQsdUJBQXVCRSxNQUQ1RDtBQUFBLFVBRU1DLDBCQUEyQkYsK0JBQStCLENBRmhFOztBQUlBLFVBQUlFLHVCQUFKLEVBQTZCO0FBQzNCLFlBQU1DLDZCQUE2QnBDLE1BQU1nQyxzQkFBTixDQUFuQztBQUFBLFlBQ01YLHdCQUF3QmUsMEJBRDlCO0FBQUEsWUFDMEQ7QUFDcERDLHdDQUFpQ3ZCLGFBQWFPLHFCQUZwRDs7QUFJQSxZQUFJZ0IsNkJBQUosRUFBbUM7QUFDakMsY0FBTUMsa0JBQWtCaEMsa0JBQWtCTSxVQUFsQixDQUF4Qjs7QUFFQSxjQUFJMEIsZUFBSixFQUFxQjtBQUNuQixnQkFBTUMsbUJBQW1CM0IsV0FBVzRCLFFBQVgsRUFBekI7O0FBRUEsa0JBQU0sSUFBSXBCLEtBQUosWUFBa0JtQixnQkFBbEIsdURBQWtGekIsUUFBbEYseURBQU47QUFDRDs7QUFFRCxjQUFNMkIsb0JBQW9CbEMsb0JBQW9CSyxVQUFwQixDQUExQjs7QUFFQSxjQUFJNkIsaUJBQUosRUFBdUI7QUFDckIsZ0JBQU1GLG9CQUFtQjNCLFdBQVc0QixRQUFYLEVBQXpCOztBQUVBLGtCQUFNLElBQUlwQixLQUFKLFlBQWtCbUIsaUJBQWxCLHVEQUFrRnpCLFFBQWxGLDJEQUFOO0FBQ0Q7O0FBRUQsY0FBTTRCLFlBQVksSUFBSXBELFNBQUosRUFBbEI7QUFBQSxjQUNNcUQsT0FBTzFDLDRCQURiO0FBQUEsY0FFTTJDLFFBQVEsQ0FDTkYsU0FETSxDQUZkO0FBQUEsY0FLTUcscUJBQXFCckMsaUNBQWlDSSxVQUFqQyxDQUwzQjs7QUFPQW1CLDRDQUFrQyxJQUFJckIsK0JBQUosQ0FBb0NpQyxJQUFwQyxFQUEwQ0MsS0FBMUMsRUFBaUQ5QixRQUFqRCxFQUEyREYsVUFBM0QsRUFBdUVpQyxrQkFBdkUsRUFBMkZiLHNCQUEzRixDQUFsQztBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsK0JBQVA7QUFDRDs7OztFQW5FMkNqQyx1Qjs7QUFzRTlDZ0QsT0FBT0MsT0FBUCxHQUFpQnJDLCtCQUFqQiIsImZpbGUiOiJkaXJlY3RseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdHlwZXMnKSxcbiAgICAgIERlbHRhUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvZGVsdGEnKSxcbiAgICAgIFJlZHVjZWRSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZWR1Y2VkJyksXG4gICAgICBSZXBlYXRlZFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9ydWxlL3JlcGVhdGVkJyksXG4gICAgICBSZXdyaXR0ZW5SdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZXdyaXR0ZW4nKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgUmVwZWF0ZWREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbi9yZXBlYXRlZCcpLFxuICAgICAgUmV3cml0dGVuRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmV3cml0dGVuJyksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKSxcbiAgICAgIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcyxcbiAgICAgIHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcywgUmVkdWNlZFJ1bGUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlRW1wdHkgPSByZWR1Y2VkUnVsZS5pc0VtcHR5KCk7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGVFbXB0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7cnVsZU5hbWV9JyBydWxlIGhhcyBub24tbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzLCBSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5SdWxlID0gcmV3cml0dGVuUnVsZUZyb21SdWxlKHJ1bGUsIHJ1bGVzLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcmV3cml0dGVuUnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWx0YVBhcnQgPSBuZXcgRGVsdGFQYXJ0KCksXG4gICAgICAgICAgICAgIHR5cGUgPSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICBkZWx0YVBhcnRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=