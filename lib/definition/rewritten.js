'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    partsUtilities = require('../utilities/parts'),
    ruleNameUtilities = require('../utilities/ruleName'),
    definitionUtilities = require('../utilities/definition');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts,
    isDefinitionLookAhead = definitionUtilities.isDefinitionLookAhead,
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
            key: 'fromDefinitionAndLeftRecursiveRuleName',
            value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
                  var parts = definition.getParts();

                  parts = cloneParts(parts); ///

                  parts.shift(); ///

                  var definitionLookAhead = isDefinitionLookAhead(definition),
                      lookAhead = definitionLookAhead,
                      ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJjbG9uZVBhcnRzIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwibG9va0FoZWFkIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJ1bnNoaWZ0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjtBQUFBLElBR01JLHNCQUFzQkosUUFBUSx5QkFBUixDQUg1Qjs7QUFLTSxJQUFFSyxVQUFGLEdBQWlCTixPQUFqQixDQUFFTSxVQUFGO0FBQUEsSUFDRUMsVUFERixHQUNpQkosY0FEakIsQ0FDRUksVUFERjtBQUFBLElBRUVDLHFCQUZGLEdBRTRCSCxtQkFGNUIsQ0FFRUcscUJBRkY7QUFBQSxJQUdFQyw0QkFIRixHQUdnRUwsaUJBSGhFLENBR0VLLDRCQUhGO0FBQUEsSUFHZ0NDLDJCQUhoQyxHQUdnRU4saUJBSGhFLENBR2dDTSwyQkFIaEM7QUFBQSxJQUlFQyx3QkFKRixHQUl1RVQsYUFKdkUsQ0FJRVMsd0JBSkY7QUFBQSxJQUk0QkMsc0NBSjVCLEdBSXVFVixhQUp2RSxDQUk0QlUsc0NBSjVCOztJQU1BQyxtQjs7Ozs7Ozs7Ozs7bUVBQzBDQyxVLEVBQVlDLHFCLEVBQXVCO0FBQy9FLHNCQUFJQyxRQUFRRixXQUFXRyxRQUFYLEVBQVo7O0FBRUFELDBCQUFRVCxXQUFXUyxLQUFYLENBQVIsQ0FIK0UsQ0FHbkQ7O0FBRTVCQSx3QkFBTUUsS0FBTixHQUwrRSxDQUsvRDs7QUFFaEIsc0JBQU1DLHNCQUFzQlgsc0JBQXNCTSxVQUF0QixDQUE1QjtBQUFBLHNCQUNNTSxZQUFZRCxtQkFEbEI7QUFBQSxzQkFDd0M7QUFDbENFLHFDQUFtQlosNkJBQTZCTSxxQkFBN0IsQ0FGekI7QUFBQSxzQkFHTU8sK0JBQStCWiw0QkFBNEJLLHFCQUE1QixDQUhyQztBQUFBLHNCQUlNUSxpQ0FBaUNYLHVDQUF1Q1MsZ0JBQXZDLENBSnZDO0FBQUEsc0JBS01HLG1DQUFtQ2IseUJBQXlCVyw0QkFBekIsRUFBdURGLFNBQXZELENBTHpDO0FBQUEsc0JBTU1LLHNCQUFzQixJQUFJWixtQkFBSixDQUF3QkcsS0FBeEIsQ0FONUI7O0FBUUFBLHdCQUFNVSxPQUFOLENBQWNGLGdDQUFkOztBQUVBUix3QkFBTVcsSUFBTixDQUFXSiw4QkFBWDs7QUFFQSx5QkFBT0UsbUJBQVA7QUFDRDs7OztFQXJCK0JuQixVOztBQXdCbENzQixPQUFPQyxPQUFQLEdBQWlCaEIsbUJBQWpCIiwiZmlsZSI6InJld3JpdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBwYXJ0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0cycpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGNsb25lUGFydHMgfSA9IHBhcnRzVXRpbGl0aWVzLFxuICAgICAgeyBpc0RlZmluaXRpb25Mb29rQWhlYWQgfSA9IGRlZmluaXRpb25VdGlsaXRpZXMsXG4gICAgICB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJld3JpdHRlbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIHBhcnRzLnNoaWZ0KCk7ICAvLy9cblxuICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbiksXG4gICAgICAgICAgbG9va0FoZWFkID0gZGVmaW5pdGlvbkxvb2tBaGVhZCwgIC8vL1xuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHBhcnRzLnVuc2hpZnQocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpO1xuXG4gICAgcGFydHMucHVzaCh6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXdyaXR0ZW5EZWZpbml0aW9uO1xuIl19