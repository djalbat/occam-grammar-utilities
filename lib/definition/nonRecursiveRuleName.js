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

var NonRecursiveRuleNameDefinition = function (_Definition) {
      _inherits(NonRecursiveRuleNameDefinition, _Definition);

      function NonRecursiveRuleNameDefinition() {
            _classCallCheck(this, NonRecursiveRuleNameDefinition);

            return _possibleConstructorReturn(this, (NonRecursiveRuleNameDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveRuleNameDefinition)).apply(this, arguments));
      }

      _createClass(NonRecursiveRuleNameDefinition, null, [{
            key: 'fromRuleName',
            value: function fromRuleName(ruleName) {
                  var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
                      parts = [nonRecursiveRuleNamePart],
                      nonRecursiveRuleNameDefinition = new NonRecursiveRuleNameDefinition(parts);

                  return nonRecursiveRuleNameDefinition;
            }
      }, {
            key: 'fromLeftRecursiveRuleName',
            value: function fromLeftRecursiveRuleName(leftRecursiveRuleName) {
                  var ruleName = leftRecursiveRuleName,
                      ///
                  nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName);

                  return nonRecursiveRuleNameDefinition;
            }
      }]);

      return NonRecursiveRuleNameDefinition;
}(Definition);

module.exports = NonRecursiveRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZVJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInBhcnRzIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxnQ0FGRixHQUV1Q0gsaUJBRnZDLENBRUVHLGdDQUZGOztJQUlBQyw4Qjs7Ozs7Ozs7Ozs7eUNBQ2dCQyxRLEVBQVU7QUFDNUIsc0JBQU1DLHVCQUF1QkgsaUNBQWlDRSxRQUFqQyxDQUE3QjtBQUFBLHNCQUNNRSwyQkFBMkJMLHlCQUF5Qkksb0JBQXpCLENBRGpDO0FBQUEsc0JBRU1FLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDtBQUFBLHNCQUtNRSxpQ0FBaUMsSUFBSUwsOEJBQUosQ0FBbUNJLEtBQW5DLENBTHZDOztBQU9BLHlCQUFPQyw4QkFBUDtBQUNEOzs7c0RBRWdDQyxxQixFQUF1QjtBQUN0RCxzQkFBTUwsV0FBV0sscUJBQWpCO0FBQUEsc0JBQXdDO0FBQ2xDRCxtREFBaUNMLCtCQUErQk8sWUFBL0IsQ0FBNENOLFFBQTVDLENBRHZDOztBQUdBLHlCQUFPSSw4QkFBUDtBQUNEOzs7O0VBakIwQ1IsVTs7QUFvQjdDVyxPQUFPQyxPQUFQLEdBQWlCVCw4QkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlUnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobm9uUmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uID0gTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uO1xuIl19