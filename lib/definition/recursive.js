'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    ruleNameUtilities = require('../utilities/ruleName');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var RecursiveDefinition = function (_Definition) {
      _inherits(RecursiveDefinition, _Definition);

      function RecursiveDefinition() {
            _classCallCheck(this, RecursiveDefinition);

            return _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).apply(this, arguments));
      }

      _createClass(RecursiveDefinition, null, [{
            key: 'fromRuleNamePartAndRightRecursiveRuleName',
            value: function fromRuleNamePartAndRightRecursiveRuleName(ruleNamePart, rightRecursiveRuleName) {
                  var ruleName = ruleNamePart.getRuleName(),
                      lookAhead = ruleNamePart.isLookAhead(),
                      noWhitespace = ruleNamePart.hasNoWhitespace(),
                      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, noWhitespace, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      parts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
                      recursiveDefinition = new Definition(parts);

                  return recursiveDefinition;
            }
      }]);

      return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxVQUFGLEdBQWlCSixPQUFqQixDQUFFSSxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JILGFBRC9CLENBQ0VHLHdCQURGO0FBQUEsSUFFRUMsZ0NBRkYsR0FFdUNILGlCQUZ2QyxDQUVFRyxnQ0FGRjs7SUFJQUMsbUI7Ozs7Ozs7Ozs7O3NFQUM2Q0MsWSxFQUFjQyxzQixFQUF3QjtBQUNyRixzQkFBTUMsV0FBV0YsYUFBYUcsV0FBYixFQUFqQjtBQUFBLHNCQUNNQyxZQUFZSixhQUFhSyxXQUFiLEVBRGxCO0FBQUEsc0JBRU1DLGVBQWVOLGFBQWFPLGVBQWIsRUFGckI7QUFBQSxzQkFHTUMsdUJBQXVCVixpQ0FBaUNJLFFBQWpDLENBSDdCO0FBQUEsc0JBSU1PLDJCQUEyQloseUJBQXlCVyxvQkFBekIsRUFBK0NGLFlBQS9DLEVBQTZERixTQUE3RCxDQUpqQztBQUFBLHNCQUtNTSw2QkFBNkJiLHlCQUF5Qkksc0JBQXpCLENBTG5DO0FBQUEsc0JBTU1VLFFBQVEsQ0FDTkYsd0JBRE0sRUFFTkMsMEJBRk0sQ0FOZDtBQUFBLHNCQVVNRSxzQkFBc0IsSUFBSWhCLFVBQUosQ0FBZWUsS0FBZixDQVY1Qjs7QUFZQSx5QkFBT0MsbUJBQVA7QUFDRDs7OztFQWYrQmhCLFU7O0FBa0JsQ2lCLE9BQU9DLE9BQVAsR0FBaUJmLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lUGFydEFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVQYXJ0LCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBydWxlTmFtZVBhcnQuaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==