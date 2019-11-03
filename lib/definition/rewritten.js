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
            key: 'fromLeftRecursiveDefinition',
            value: function fromLeftRecursiveDefinition(leftRecursiveDefinition) {
                  var parts = leftRecursiveDefinition.getParts();

                  parts = cloneParts(parts); ///

                  parts.shift(); ///

                  var lookAhead = leftRecursiveDefinition.isLookAhead(),
                      leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwidW5zaGlmdCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0FBSU0sSUFBRUksVUFBRixHQUFpQkwsT0FBakIsQ0FBRUssVUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJILGNBRGpCLENBQ0VHLFVBREY7QUFBQSxJQUVFQyw0QkFGRixHQUVnRUgsaUJBRmhFLENBRUVHLDRCQUZGO0FBQUEsSUFFZ0NDLDJCQUZoQyxHQUVnRUosaUJBRmhFLENBRWdDSSwyQkFGaEM7QUFBQSxJQUdFQyx3QkFIRixHQUd1RVAsYUFIdkUsQ0FHRU8sd0JBSEY7QUFBQSxJQUc0QkMsc0NBSDVCLEdBR3VFUixhQUh2RSxDQUc0QlEsc0NBSDVCOztJQUtBQyxtQjs7Ozs7Ozs7Ozs7d0RBQytCQyx1QixFQUF5QjtBQUMxRCxzQkFBSUMsUUFBUUQsd0JBQXdCRSxRQUF4QixFQUFaOztBQUVBRCwwQkFBUVAsV0FBV08sS0FBWCxDQUFSLENBSDBELENBRzlCOztBQUU1QkEsd0JBQU1FLEtBQU4sR0FMMEQsQ0FLMUM7O0FBRWhCLHNCQUFNQyxZQUFZSix3QkFBd0JLLFdBQXhCLEVBQWxCO0FBQUEsc0JBQ01DLHdCQUF3Qk4sd0JBQXdCTyx3QkFBeEIsRUFEOUI7QUFBQSxzQkFFTUMsbUJBQW1CYiw2QkFBNkJXLHFCQUE3QixDQUZ6QjtBQUFBLHNCQUdNRywrQkFBK0JiLDRCQUE0QlUscUJBQTVCLENBSHJDO0FBQUEsc0JBSU1JLGlDQUFpQ1osdUNBQXVDVSxnQkFBdkMsQ0FKdkM7QUFBQSxzQkFLTUcsbUNBQW1DZCx5QkFBeUJZLDRCQUF6QixFQUF1REwsU0FBdkQsQ0FMekM7QUFBQSxzQkFNTVEsc0JBQXNCLElBQUliLG1CQUFKLENBQXdCRSxLQUF4QixDQU41Qjs7QUFRQUEsd0JBQU1ZLE9BQU4sQ0FBY0YsZ0NBQWQ7O0FBRUFWLHdCQUFNYSxJQUFOLENBQVdKLDhCQUFYOztBQUVBLHlCQUFPRSxtQkFBUDtBQUNEOzs7O0VBckIrQm5CLFU7O0FBd0JsQ3NCLE9BQU9DLE9BQVAsR0FBaUJqQixtQkFBakIiLCJmaWxlIjoicmV3cml0dGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGNsb25lUGFydHMgfSA9IHBhcnRzVXRpbGl0aWVzLFxuICAgICAgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzO1xuXG5jbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBwYXJ0cy51bnNoaWZ0KHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzLnB1c2goemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmV3cml0dGVuRGVmaW5pdGlvbjtcbiJdfQ==