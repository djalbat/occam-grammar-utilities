'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    partsUtilities = require('../utilities/parts'),
    ruleNameUtilities = require('../utilities/ruleName');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts,
    repeatedRuleNameFromRuleName = ruleNameUtilities.repeatedRuleNameFromRuleName,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName,
    zeroOrMoreRuleNamePartPartFromRuleName = partUtilities.zeroOrMoreRuleNamePartPartFromRuleName;

var RewrittenDefinition = function (_Definition) {
      _inherits(RewrittenDefinition, _Definition);

      function RewrittenDefinition() {
            _classCallCheck(this, RewrittenDefinition);

            return _possibleConstructorReturn(this, (RewrittenDefinition.__proto__ || Object.getPrototypeOf(RewrittenDefinition)).apply(this, arguments));
      }

      _createClass(RewrittenDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var parts = immediatelyLeftRecursiveDefinition.getParts();

                  parts = cloneParts(parts); ///

                  parts.shift(); ///

                  var ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
                      lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
                      leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
                      repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
                      reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
                      zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
                      reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
                      rewrittenDefinition = new RewrittenDefinition(parts);

                  parts.unshift(reducedLeftRecursiveRuleNamePart);

                  parts.push(zeroOrMoreRepeatedRuleNamePart);

                  return rewrittenDefinition;
            }
      }]);

      return RewrittenDefinition;
}(Definition);

module.exports = RewrittenDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwidW5zaGlmdCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0FBSU0sSUFBRUksVUFBRixHQUFpQkwsT0FBakIsQ0FBRUssVUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJILGNBRGpCLENBQ0VHLFVBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVnRUgsaUJBRmhFLENBRUVHLDRCQUZGO0FBQUEsSUFFZ0NDLDJCQUZoQyxHQUVnRUosaUJBRmhFLENBRWdDSSwyQkFGaEM7QUFBQSxJQUdFQyx3QkFIRixHQUd1RVAsYUFIdkUsQ0FHRU8sd0JBSEY7QUFBQSxJQUc0QkMsc0NBSDVCLEdBR3VFUixhQUh2RSxDQUc0QlEsc0NBSDVCOztJQUtBQyxtQjs7Ozs7Ozs7Ozs7bUVBQzBDQyxrQyxFQUFvQztBQUNoRixzQkFBSUMsUUFBUUQsbUNBQW1DRSxRQUFuQyxFQUFaOztBQUVBRCwwQkFBUVAsV0FBV08sS0FBWCxDQUFSLENBSGdGLENBR3BEOztBQUU1QkEsd0JBQU1FLEtBQU4sR0FMZ0YsQ0FLaEU7O0FBRWhCLHNCQUFNQyxXQUFXSixtQ0FBbUNLLFdBQW5DLEVBQWpCO0FBQUEsc0JBQ01DLFlBQVlOLG1DQUFtQ08sV0FBbkMsRUFEbEI7QUFBQSxzQkFFTUMsd0JBQXdCUixtQ0FBbUNTLHdCQUFuQyxFQUY5QjtBQUFBLHNCQUdNQyxtQkFBbUJmLDZCQUE2QlMsUUFBN0IsQ0FIekI7QUFBQSxzQkFJTU8sK0JBQStCZiw0QkFBNEJZLHFCQUE1QixDQUpyQztBQUFBLHNCQUtNSSxpQ0FBaUNkLHVDQUF1Q1ksZ0JBQXZDLENBTHZDO0FBQUEsc0JBTU1HLG1DQUFtQ2hCLHlCQUF5QmMsNEJBQXpCLEVBQXVETCxTQUF2RCxDQU56QztBQUFBLHNCQU9NUSxzQkFBc0IsSUFBSWYsbUJBQUosQ0FBd0JFLEtBQXhCLENBUDVCOztBQVNBQSx3QkFBTWMsT0FBTixDQUFjRixnQ0FBZDs7QUFFQVosd0JBQU1lLElBQU4sQ0FBV0osOEJBQVg7O0FBRUEseUJBQU9FLG1CQUFQO0FBQ0Q7Ozs7RUF0QitCckIsVTs7QUF5QmxDd0IsT0FBT0MsT0FBUCxHQUFpQm5CLG1CQUFqQiIsImZpbGUiOiJyZXdyaXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcGFydHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydHMnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXMsXG4gICAgICB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cy5zaGlmdCgpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHBhcnRzLnVuc2hpZnQocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpO1xuXG4gICAgcGFydHMucHVzaCh6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXdyaXR0ZW5EZWZpbml0aW9uO1xuIl19