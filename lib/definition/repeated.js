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
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName,
    repeatedRuleNameFromRecursiveRuleName = ruleNameUtilities.repeatedRuleNameFromRecursiveRuleName;

var RepeatedDefinition = function (_Definition) {
      _inherits(RepeatedDefinition, _Definition);

      function RepeatedDefinition() {
            _classCallCheck(this, RepeatedDefinition);

            return _possibleConstructorReturn(this, (RepeatedDefinition.__proto__ || Object.getPrototypeOf(RepeatedDefinition)).apply(this, arguments));
      }

      _createClass(RepeatedDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var parts = immediatelyLeftRecursiveDefinition.getParts();

                  parts = cloneParts(parts); ///

                  var recursiveRleName = immediatelyLeftRecursiveDefinition.getRuleName(),
                      repeatedRuleName = repeatedRuleNameFromRecursiveRuleName(recursiveRleName),
                      ruleName = repeatedRuleName,
                      ///
                  optionalRepeatedRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

                  parts.push(optionalRepeatedRuleNamePart);

                  parts.shift(); ///

                  var repeatedDefinition = new RepeatedDefinition(parts);

                  return repeatedDefinition;
            }
      }]);

      return RepeatedDefinition;
}(Definition);

module.exports = RepeatedDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInBhcnRzVXRpbGl0aWVzIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIm9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUmVjdXJzaXZlUnVsZU5hbWUiLCJSZXBlYXRlZERlZmluaXRpb24iLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZSIsIm9wdGlvbmFsUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJwdXNoIiwic2hpZnQiLCJyZXBlYXRlZERlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0FBSU0sSUFBRUksVUFBRixHQUFpQkwsT0FBakIsQ0FBRUssVUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJILGNBRGpCLENBQ0VHLFVBREY7QUFBQSxJQUVFQyxvQ0FGRixHQUUyQ0wsYUFGM0MsQ0FFRUssb0NBRkY7QUFBQSxJQUdFQyxxQ0FIRixHQUc0Q0osaUJBSDVDLENBR0VJLHFDQUhGOztJQUtBQyxrQjs7Ozs7Ozs7Ozs7bUVBQzBDQyxrQyxFQUFvQztBQUNoRixzQkFBSUMsUUFBUUQsbUNBQW1DRSxRQUFuQyxFQUFaOztBQUVBRCwwQkFBUUwsV0FBV0ssS0FBWCxDQUFSLENBSGdGLENBR3BEOztBQUU1QixzQkFBTUUsbUJBQW1CSCxtQ0FBbUNJLFdBQW5DLEVBQXpCO0FBQUEsc0JBQ01DLG1CQUFtQlAsc0NBQXNDSyxnQkFBdEMsQ0FEekI7QUFBQSxzQkFFTUcsV0FBV0QsZ0JBRmpCO0FBQUEsc0JBRW9DO0FBQzlCRSxpREFBK0JWLHFDQUFxQ1MsUUFBckMsQ0FIckM7O0FBS0FMLHdCQUFNTyxJQUFOLENBQVdELDRCQUFYOztBQUVBTix3QkFBTVEsS0FBTixHQVpnRixDQVloRTs7QUFFaEIsc0JBQU1DLHFCQUFxQixJQUFJWCxrQkFBSixDQUF1QkUsS0FBdkIsQ0FBM0I7O0FBRUEseUJBQU9TLGtCQUFQO0FBQ0Q7Ozs7RUFsQjhCZixVOztBQXFCakNnQixPQUFPQyxPQUFQLEdBQWlCYixrQkFBakIiLCJmaWxlIjoicmVwZWF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcGFydHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydHMnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXMsXG4gICAgICB7IG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SZWN1cnNpdmVSdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbUltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJsZU5hbWUgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUmVjdXJzaXZlUnVsZU5hbWUocmVjdXJzaXZlUmxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3B0aW9uYWxSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKG9wdGlvbmFsUmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWREZWZpbml0aW9uID0gbmV3IFJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0ZWREZWZpbml0aW9uO1xuIl19