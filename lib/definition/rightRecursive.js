'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    ruleNameUtilities = require('../utilities/ruleName');

var Definition = parsers.Definition,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName,
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName;

var RightRecursiveDefinition = function (_Definition) {
      _inherits(RightRecursiveDefinition, _Definition);

      function RightRecursiveDefinition() {
            _classCallCheck(this, RightRecursiveDefinition);

            return _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).apply(this, arguments));
      }

      _createClass(RightRecursiveDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var ruleName = immediatelyLeftRecursiveDefinition.getRuleName();

                  var parts = immediatelyLeftRecursiveDefinition.getParts(),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName);

                  ruleName = rightRecursiveRuleName; ///

                  var optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

                  parts.push(optionalRightRecursiveRuleNamePart);

                  parts.shift(); ///

                  var rightRecursiveDefinition = new RightRecursiveDefinition(parts);

                  return rightRecursiveDefinition;
            }
      }]);

      return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInB1c2giLCJzaGlmdCIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxVQUFGLEdBQWlCSixPQUFqQixDQUFFSSxVQUFGO0FBQUEsSUFDRUMsa0NBREYsR0FDeUNGLGlCQUR6QyxDQUNFRSxrQ0FERjtBQUFBLElBRUVDLG9DQUZGLEdBRTJDSixhQUYzQyxDQUVFSSxvQ0FGRjs7SUFJQUMsd0I7Ozs7Ozs7Ozs7O21FQUMwQ0Msa0MsRUFBb0M7QUFDaEYsc0JBQUlDLFdBQVdELG1DQUFtQ0UsV0FBbkMsRUFBZjs7QUFFQSxzQkFBTUMsUUFBUUgsbUNBQW1DSSxRQUFuQyxFQUFkO0FBQUEsc0JBQ01DLHlCQUF5QlIsbUNBQW1DSSxRQUFuQyxDQUQvQjs7QUFHQUEsNkJBQVdJLHNCQUFYLENBTmdGLENBTTVDOztBQUVwQyxzQkFBTUMscUNBQXFDUixxQ0FBcUNHLFFBQXJDLENBQTNDOztBQUVBRSx3QkFBTUksSUFBTixDQUFXRCxrQ0FBWDs7QUFFQUgsd0JBQU1LLEtBQU4sR0FaZ0YsQ0FZaEU7O0FBRWhCLHNCQUFNQywyQkFBMkIsSUFBSVYsd0JBQUosQ0FBNkJJLEtBQTdCLENBQWpDOztBQUVBLHlCQUFPTSx3QkFBUDtBQUNEOzs7O0VBbEJvQ2IsVTs7QUFxQnZDYyxPQUFPQyxPQUFQLEdBQWlCWix3QkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcnVsZU5hbWUgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBwYXJ0cyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBydWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWU7ICAvLy9cblxuICAgIGNvbnN0IG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==