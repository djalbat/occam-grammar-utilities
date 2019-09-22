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
                      reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                      repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
                      reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName, lookAhead),
                      zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
                      rewrittenDefinition = new RewrittenDefinition(parts);

                  parts.unshift(reducedRuleNamePart);

                  parts.push(zeroOrMoreRepeatedRuleNamePart);

                  return rewrittenDefinition;
            }
      }]);

      return RewrittenDefinition;
}(Definition);

module.exports = RewrittenDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlZHVjZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicmV3cml0dGVuRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRjFCOztBQUlNLElBQUVJLFVBQUYsR0FBaUJMLE9BQWpCLENBQUVLLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCSCxjQURqQixDQUNFRyxVQURGO0FBQUEsSUFFRUMsNEJBRkYsR0FFZ0VILGlCQUZoRSxDQUVFRyw0QkFGRjtBQUFBLElBRWdDQywyQkFGaEMsR0FFZ0VKLGlCQUZoRSxDQUVnQ0ksMkJBRmhDO0FBQUEsSUFHRUMsd0JBSEYsR0FHdUVQLGFBSHZFLENBR0VPLHdCQUhGO0FBQUEsSUFHNEJDLHNDQUg1QixHQUd1RVIsYUFIdkUsQ0FHNEJRLHNDQUg1Qjs7SUFLQUMsbUI7Ozs7Ozs7Ozs7O21FQUMwQ0Msa0MsRUFBb0M7QUFDaEYsc0JBQUlDLFFBQVFELG1DQUFtQ0UsUUFBbkMsRUFBWjs7QUFFQUQsMEJBQVFQLFdBQVdPLEtBQVgsQ0FBUixDQUhnRixDQUdwRDs7QUFFNUJBLHdCQUFNRSxLQUFOLEdBTGdGLENBS2hFOztBQUVoQixzQkFBTUMsV0FBV0osbUNBQW1DSyxXQUFuQyxFQUFqQjtBQUFBLHNCQUNNQyxZQUFZTixtQ0FBbUNPLFdBQW5DLEVBRGxCO0FBQUEsc0JBRU1DLGtCQUFrQlosNEJBQTRCUSxRQUE1QixDQUZ4QjtBQUFBLHNCQUdNSyxtQkFBbUJkLDZCQUE2QlMsUUFBN0IsQ0FIekI7QUFBQSxzQkFJTU0sc0JBQXNCYix5QkFBeUJXLGVBQXpCLEVBQTBDRixTQUExQyxDQUo1QjtBQUFBLHNCQUtNSyxpQ0FBaUNiLHVDQUF1Q1csZ0JBQXZDLENBTHZDO0FBQUEsc0JBTU1HLHNCQUFzQixJQUFJYixtQkFBSixDQUF3QkUsS0FBeEIsQ0FONUI7O0FBUUFBLHdCQUFNWSxPQUFOLENBQWNILG1CQUFkOztBQUVBVCx3QkFBTWEsSUFBTixDQUFXSCw4QkFBWDs7QUFFQSx5QkFBT0MsbUJBQVA7QUFDRDs7OztFQXJCK0JuQixVOztBQXdCbENzQixPQUFPQyxPQUFQLEdBQWlCakIsbUJBQWpCIiwiZmlsZSI6InJld3JpdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBwYXJ0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0cycpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBjbG9uZVBhcnRzIH0gPSBwYXJ0c1V0aWxpdGllcyxcbiAgICAgIHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbUltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcGFydHMudW5zaGlmdChyZWR1Y2VkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzLnB1c2goemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmV3cml0dGVuRGVmaW5pdGlvbjtcbiJdfQ==