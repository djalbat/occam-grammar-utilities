'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeltaPart = require('../../part/delta'),
    ruleUtilities = require('../../utilities/rule'),
    arrayUtilities = require('../../utilities/array'),
    RewrittenDefinition = require('../../definition/rewritten'),
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
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var IndirectlyLeftRecursiveDefinition = function (_LeftRecursiveDefinit) {
  _inherits(IndirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  function IndirectlyLeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    _classCallCheck(this, IndirectlyLeftRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (IndirectlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(IndirectlyLeftRecursiveDefinition)).call(this, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames));

    _this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
    return _this;
  }

  _createClass(IndirectlyLeftRecursiveDefinition, [{
    key: 'getImplicitlyLeftRecursiveDefinition',
    value: function getImplicitlyLeftRecursiveDefinition() {
      return this.implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: 'rewrite',
    value: function rewrite(rules) {
      var ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);

      var definition = this.getDefinition(),
          leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName,
          ///
      // repeatedDefinition = RepeatedDefinition.fromDefinition(definition),
      rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

      rule.replaceDefinition(replacementDefinition, rewrittenDefinition);

      // const leftRecursiveRuleName = this.getLeftRecursiveRuleName(),
      //
      //       repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);
      //
      // repeatedRule.addDefinition(repeatedDefinition);
      //
      // const implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
      //       definition = implicitlyLeftRecursiveDefinition.getDefinition(),
      //       implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,  ///
      //       implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
      //       reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);
      //
      // implicitlyLeftRecursiveRule.addDefinition(definition, -1);
      //
      // reducedLeftRecursiveRule.removeDefinition(definition);
      //
      // const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName(),
      //       reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);
      //
      // implicitlyLeftRecursiveRule.addDefinition(reducedLeftRecursiveRuleNameDefinition);
      //
      // const reducedLeftRecursiveRuleEmpty = reducedLeftRecursiveRule.isEmpty();

      // if (reducedLeftRecursiveRuleEmpty) {
      //   const implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveRule.getName();
      //
      //   throw new Error(`The '${implicitlyLeftRecursiveRuleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
      // }
    }
  }], [{
    key: 'fromRuleNameDefinitionAndRecursiveDefinitions',
    value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
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
          var implicitlyLeftRecursiveDefinition = findImplicitlyLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

          if (implicitlyLeftRecursiveDefinition !== null) {
            var definitionUnary = isDefinitionUnary(definition);

            if (definitionUnary) {
              var definitionString = definition.asString();

              throw new Error('The \'' + definitionString + '\' indirectly left recursive definition of the \'' + ruleName + '\' rule is unary and therefore cannot be rewritten.');
            }

            var definitionComplex = isDefinitionComplex(definition);

            if (definitionComplex) {
              var _definitionString = definition.asString();

              throw new Error('The \'' + _definitionString + '\' indirectly left recursive definition of the \'' + ruleName + '\' rule is complex and therefore cannot be rewritten.');
            }

            var deltaPart = new DeltaPart(),
                parts = [deltaPart],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
          }
        }
      }

      return indirectlyLeftRecursiveDefinition;
    }
  }]);

  return IndirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyJdLCJuYW1lcyI6WyJEZWx0YVBhcnQiLCJyZXF1aXJlIiwicnVsZVV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJyZWN1cnNpdmVEZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImZpbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJyZXBlYXRlZFJ1bGVGcm9tUnVsZSIsInJld3JpdHRlblJ1bGVGcm9tUnVsZSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJnZXREZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uQ29tcGxleCIsImRlbHRhUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUZ2QjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSw0QkFBUixDQUg1QjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSw0QkFBUixDQUo1QjtBQUFBLElBS01LLCtCQUErQkwsUUFBUSxxQ0FBUixDQUxyQzs7QUFPQSxJQUFNTSwwQkFBMEJOLFFBQVEsZ0NBQVIsQ0FBaEM7O0FBRU0sSUFBRU8sS0FBRixHQUFZTCxjQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxxQ0FERixHQUM0Q0gsNEJBRDVDLENBQ0VHLHFDQURGO0FBQUEsSUFFRUMsUUFGRixHQUVpRlIsYUFGakYsQ0FFRVEsUUFGRjtBQUFBLElBRVlDLG1CQUZaLEdBRWlGVCxhQUZqRixDQUVZUyxtQkFGWjtBQUFBLElBRWlDQyxvQkFGakMsR0FFaUZWLGFBRmpGLENBRWlDVSxvQkFGakM7QUFBQSxJQUV1REMscUJBRnZELEdBRWlGWCxhQUZqRixDQUV1RFcscUJBRnZEO0FBQUEsSUFHRUMsaUJBSEYsR0FHcUhULG1CQUhySCxDQUdFUyxpQkFIRjtBQUFBLElBR3FCQyxtQkFIckIsR0FHcUhWLG1CQUhySCxDQUdxQlUsbUJBSHJCO0FBQUEsSUFHMENDLGdDQUgxQyxHQUdxSFgsbUJBSHJILENBRzBDVyxn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QW5FLEVBQXVGQyxzQkFBdkYsRUFBK0dDLGlDQUEvRyxDQUFwQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPYSxpQ0FBUDtBQUNEOzs7O0VBbkc2QzlCLHVCOztBQXNHaER5QyxPQUFPQyxPQUFQLEdBQWlCL0IsaUNBQWpCIiwiZmlsZSI6ImluZGlyZWN0bHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlbHRhUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvZGVsdGEnKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3JlY3Vyc2l2ZURlZmluaXRpb24nKTtcblxuY29uc3QgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGZpbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gfSA9IHJlY3Vyc2l2ZURlZmluaXRpb25VdGlsaXRpZXMsXG4gICAgICB7IGZpbmRSdWxlLCByZWR1Y2VkUnVsZUZyb21SdWxlLCByZXBlYXRlZFJ1bGVGcm9tUnVsZSwgcmV3cml0dGVuUnVsZUZyb21SdWxlIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmV3cml0ZShydWxlcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAvLyByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZW1lbnREZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKTtcblxuICAgIC8vIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgLy9cbiAgICAvLyAgICAgICByZXBlYXRlZFJ1bGUgPSByZXBlYXRlZFJ1bGVGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcnVsZXMpO1xuICAgIC8vXG4gICAgLy8gcmVwZWF0ZWRSdWxlLmFkZERlZmluaXRpb24ocmVwZWF0ZWREZWZpbml0aW9uKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHRoaXMuZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgLy8gICAgICAgZGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgLy8gICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgIC8vICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSA9IGZpbmRSdWxlKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAvLyAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGUgPSByZWR1Y2VkUnVsZUZyb21SdWxlKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZXMpO1xuICAgIC8vXG4gICAgLy8gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVSdWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgLTEpO1xuICAgIC8vXG4gICAgLy8gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlLnJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyBjb25zdCByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAvLyAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbiA9IFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgLy9cbiAgICAvLyBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuYWRkRGVmaW5pdGlvbihyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbik7XG4gICAgLy9cbiAgICAvLyBjb25zdCByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVFbXB0eSA9IHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZS5pc0VtcHR5KCk7XG5cbiAgICAvLyBpZiAocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlRW1wdHkpIHtcbiAgICAvLyAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuICAgIC8vXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgcnVsZSBoYXMgbm8gbm9uLXJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgLy8gfVxuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWx0YVBhcnQgPSBuZXcgRGVsdGFQYXJ0KCksXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgICAgICBkZWx0YVBhcnRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=