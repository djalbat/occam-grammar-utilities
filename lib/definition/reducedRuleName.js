'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var ReducedRuleNameDefinition = function (_Definition) {
  _inherits(ReducedRuleNameDefinition, _Definition);

  function ReducedRuleNameDefinition() {
    _classCallCheck(this, ReducedRuleNameDefinition);

    return _possibleConstructorReturn(this, (ReducedRuleNameDefinition.__proto__ || Object.getPrototypeOf(ReducedRuleNameDefinition)).apply(this, arguments));
  }

  _createClass(ReducedRuleNameDefinition, null, [{
    key: 'fromReducedRuleName',
    value: function fromReducedRuleName(reducedRuleName) {
      var reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlZHVjZWRSdWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiUmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0Qjs7QUFFTSxJQUFFRSxVQUFGLEdBQWlCSCxPQUFqQixDQUFFRyxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JGLGFBRC9CLENBQ0VFLHdCQURGOztJQUdBQyx5Qjs7Ozs7Ozs7Ozs7d0NBQ3VCQyxlLEVBQWlCO0FBQzFDLFVBQU1DLHNCQUFzQkgseUJBQXlCRSxlQUF6QixDQUE1QjtBQUFBLFVBQ01FLFFBQVEsQ0FDTkQsbUJBRE0sQ0FEZDtBQUFBLFVBSU1FLDRCQUE0QixJQUFJSix5QkFBSixDQUE4QkcsS0FBOUIsQ0FKbEM7O0FBTUEsYUFBT0MseUJBQVA7QUFDRDs7OzhDQUVnQ0MscUIsRUFBdUI7QUFDdEQsVUFBTUMsV0FBV0QscUJBQWpCO0FBQUEsVUFBd0M7QUFDbENELGtDQUE0QkosMEJBQTBCTyxZQUExQixDQUF1Q0QsUUFBdkMsQ0FEbEM7O0FBR0EsYUFBT0YseUJBQVA7QUFDRDs7OztFQWhCcUNOLFU7O0FBbUJ4Q1UsT0FBT0MsT0FBUCxHQUFpQlQseUJBQWpCIiwiZmlsZSI6InJlZHVjZWRSdWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0Jyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uID0gUmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkUnVsZU5hbWVEZWZpbml0aW9uO1xuIl19