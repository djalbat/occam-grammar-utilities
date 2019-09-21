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
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName;

var ReducedRuleNameDefinition = function (_Definition) {
      _inherits(ReducedRuleNameDefinition, _Definition);

      function ReducedRuleNameDefinition() {
            _classCallCheck(this, ReducedRuleNameDefinition);

            return _possibleConstructorReturn(this, (ReducedRuleNameDefinition.__proto__ || Object.getPrototypeOf(ReducedRuleNameDefinition)).apply(this, arguments));
      }

      _createClass(ReducedRuleNameDefinition, null, [{
            key: 'fromRuleName',
            value: function fromRuleName(ruleName) {
                  var reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                      reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
                      parts = [reducedRuleNamePart],
                      reducedRuleNameDefinition = new ReducedRuleNameDefinition(parts);

                  return reducedRuleNameDefinition;
            }
      }, {
            key: 'fromLeftRecursiveRuleName',
            value: function fromLeftRecursiveRuleName(leftRecursiveRuleName) {
                  var ruleName = leftRecursiveRuleName,
                      ///
                  reducedRuleNameDefinition = ReducedRuleNameDefinition.fromRuleName(ruleName);

                  return reducedRuleNameDefinition;
            }
      }]);

      return ReducedRuleNameDefinition;
}(Definition);

module.exports = ReducedRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlZHVjZWRSdWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJSZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicGFydHMiLCJyZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQywyQkFGRixHQUVrQ0gsaUJBRmxDLENBRUVHLDJCQUZGOztJQUlBQyx5Qjs7Ozs7Ozs7Ozs7eUNBQ2dCQyxRLEVBQVU7QUFDNUIsc0JBQU1DLGtCQUFrQkgsNEJBQTRCRSxRQUE1QixDQUF4QjtBQUFBLHNCQUNNRSxzQkFBc0JMLHlCQUF5QkksZUFBekIsQ0FENUI7QUFBQSxzQkFFTUUsUUFBUSxDQUNORCxtQkFETSxDQUZkO0FBQUEsc0JBS01FLDRCQUE0QixJQUFJTCx5QkFBSixDQUE4QkksS0FBOUIsQ0FMbEM7O0FBT0EseUJBQU9DLHlCQUFQO0FBQ0Q7OztzREFFZ0NDLHFCLEVBQXVCO0FBQ3RELHNCQUFNTCxXQUFXSyxxQkFBakI7QUFBQSxzQkFBd0M7QUFDbENELDhDQUE0QkwsMEJBQTBCTyxZQUExQixDQUF1Q04sUUFBdkMsQ0FEbEM7O0FBR0EseUJBQU9JLHlCQUFQO0FBQ0Q7Ozs7RUFqQnFDUixVOztBQW9CeENXLE9BQU9DLE9BQVAsR0FBaUJULHlCQUFqQiIsImZpbGUiOiJyZWR1Y2VkUnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBSZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uLmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHVjZWRSdWxlTmFtZURlZmluaXRpb247XG4iXX0=