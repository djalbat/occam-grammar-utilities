'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var DeltaPart = require('../../part/delta'),
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
          reducedRule = reducedRuleFromRule(rule, rules),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIkRlbHRhUGFydCIsIlJlZHVjZWRSdWxlIiwiUmVwZWF0ZWRSdWxlIiwiUmV3cml0dGVuUnVsZSIsInJ1bGVVdGlsaXRpZXMiLCJSZXBlYXRlZERlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbmRSdWxlIiwicmVkdWNlZFJ1bGVGcm9tUnVsZSIsInJlcGVhdGVkUnVsZUZyb21SdWxlIiwicmV3cml0dGVuUnVsZUZyb21SdWxlIiwiaXNEZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZXMiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsIkVycm9yIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJkZWx0YVBhcnQiLCJwYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFlBQVlELFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNRSxjQUFjRixRQUFRLG9CQUFSLENBRHBCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxxQkFBUixDQUZyQjtBQUFBLElBR01JLGdCQUFnQkosUUFBUSxzQkFBUixDQUh0QjtBQUFBLElBSU1LLGdCQUFnQkwsUUFBUSxzQkFBUixDQUp0QjtBQUFBLElBS01NLHFCQUFxQk4sUUFBUSwyQkFBUixDQUwzQjtBQUFBLElBTU1PLHNCQUFzQlAsUUFBUSw0QkFBUixDQU41QjtBQUFBLElBT01RLHNCQUFzQlIsUUFBUSw0QkFBUixDQVA1QjtBQUFBLElBUU1TLDBCQUEwQlQsUUFBUSxnQ0FBUixDQVJoQzs7QUFVTSxJQUFFVSxjQUFGLEdBQXFCWCxTQUFyQixDQUFFVyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWlGUCxhQUZqRixDQUVFTyxRQUZGO0FBQUEsSUFFWUMsbUJBRlosR0FFaUZSLGFBRmpGLENBRVlRLG1CQUZaO0FBQUEsSUFFaUNDLG9CQUZqQyxHQUVpRlQsYUFGakYsQ0FFaUNTLG9CQUZqQztBQUFBLElBRXVEQyxxQkFGdkQsR0FFaUZWLGFBRmpGLENBRXVE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LGFBQU9ELCtCQUFQO0FBQ0Q7Ozs7RUFsRTJDaEMsdUI7O0FBcUU5QzhDLE9BQU9DLE9BQVAsR0FBaUJwQywrQkFBakIiLCJmaWxlIjoiZGlyZWN0bHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBEZWx0YVBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L2RlbHRhJyksXG4gICAgICBSZWR1Y2VkUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmVkdWNlZCcpLFxuICAgICAgUmVwZWF0ZWRSdWxlID0gcmVxdWlyZSgnLi4vLi4vcnVsZS9yZXBlYXRlZCcpLFxuICAgICAgUmV3cml0dGVuUnVsZSA9IHJlcXVpcmUoJy4uLy4uL3J1bGUvcmV3cml0dGVuJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIFJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQnKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlbicpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlcyksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaGFzIG5vbi1sZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJlcGVhdGVkUnVsZSksXG4gICAgICAgICAgcmVwZWF0ZWREZWZpbml0aW9uID0gUmVwZWF0ZWREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgcmVwZWF0ZWRSdWxlLmFkZERlZmluaXRpb24ocmVwZWF0ZWREZWZpbml0aW9uKTtcblxuICAgIGNvbnN0IHJld3JpdHRlblJ1bGUgPSByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUocnVsZSwgcnVsZXMsIFJld3JpdHRlblJ1bGUpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbHRhUGFydCA9IG5ldyBEZWx0YVBhcnQoKSxcbiAgICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgICAgZGVsdGFQYXJ0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19