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

                  var lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
                      leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
                      repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJ1bnNoaWZ0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7QUFJTSxJQUFFSSxVQUFGLEdBQWlCTCxPQUFqQixDQUFFSyxVQUFGO0FBQUEsSUFDRUMsVUFERixHQUNpQkgsY0FEakIsQ0FDRUcsVUFERjtBQUFBLElBRUVDLDRCQUZGLEdBRWdFSCxpQkFGaEUsQ0FFRUcsNEJBRkY7QUFBQSxJQUVnQ0MsMkJBRmhDLEdBRWdFSixpQkFGaEUsQ0FFZ0NJLDJCQUZoQztBQUFBLElBR0VDLHdCQUhGLEdBR3VFUCxhQUh2RSxDQUdFTyx3QkFIRjtBQUFBLElBRzRCQyxzQ0FINUIsR0FHdUVSLGFBSHZFLENBRzRCUSxzQ0FINUI7O0lBS0FDLG1COzs7Ozs7Ozs7OzttRUFDMENDLGtDLEVBQW9DO0FBQ2hGLHNCQUFJQyxRQUFRRCxtQ0FBbUNFLFFBQW5DLEVBQVo7O0FBRUFELDBCQUFRUCxXQUFXTyxLQUFYLENBQVIsQ0FIZ0YsQ0FHcEQ7O0FBRTVCQSx3QkFBTUUsS0FBTixHQUxnRixDQUtoRTs7QUFFaEIsc0JBQU1DLFlBQVlKLG1DQUFtQ0ssV0FBbkMsRUFBbEI7QUFBQSxzQkFDTUMsd0JBQXdCTixtQ0FBbUNPLHdCQUFuQyxFQUQ5QjtBQUFBLHNCQUVNQyxtQkFBbUJiLDZCQUE2QlcscUJBQTdCLENBRnpCO0FBQUEsc0JBR01HLCtCQUErQmIsNEJBQTRCVSxxQkFBNUIsQ0FIckM7QUFBQSxzQkFJTUksaUNBQWlDWix1Q0FBdUNVLGdCQUF2QyxDQUp2QztBQUFBLHNCQUtNRyxtQ0FBbUNkLHlCQUF5QlksNEJBQXpCLEVBQXVETCxTQUF2RCxDQUx6QztBQUFBLHNCQU1NUSxzQkFBc0IsSUFBSWIsbUJBQUosQ0FBd0JFLEtBQXhCLENBTjVCOztBQVFBQSx3QkFBTVksT0FBTixDQUFjRixnQ0FBZDs7QUFFQVYsd0JBQU1hLElBQU4sQ0FBV0osOEJBQVg7O0FBRUEseUJBQU9FLG1CQUFQO0FBQ0Q7Ozs7RUFyQitCbkIsVTs7QUF3QmxDc0IsT0FBT0MsT0FBUCxHQUFpQmpCLG1CQUFqQiIsImZpbGUiOiJyZXdyaXR0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcGFydHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydHMnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXMsXG4gICAgICB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cy5zaGlmdCgpOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBwYXJ0cy51bnNoaWZ0KHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzLnB1c2goemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmV3cml0dGVuRGVmaW5pdGlvbjtcbiJdfQ==