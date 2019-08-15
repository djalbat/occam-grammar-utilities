'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    partsUtilities = require('../utilities/parts');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts,
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName;

var RightRecursiveDefinition = function (_Definition) {
  _inherits(RightRecursiveDefinition, _Definition);

  function RightRecursiveDefinition(parts, noWhitespace, lookAhead) {
    _classCallCheck(this, RightRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).call(this, parts));

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RightRecursiveDefinition, [{
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }], [{
    key: 'fromRightRecursiveRuleNameAndLeftRecursiveDefinition',
    value: function fromRightRecursiveRuleNameAndLeftRecursiveDefinition(rightRecursiveRuleName, leftRecursiveDefinition) {
      var parts = leftRecursiveDefinition.getParts();

      parts = cloneParts(parts); ///

      var optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

      parts.push(optionalRightRecursiveRuleNamePart);

      var firstPart = parts.shift(),
          lookAhead = firstPart.isLookAhead(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace, lookAhead);

      return rightRecursiveDefinition;
    }
  }]);

  return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInBhcnRzVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInB1c2giLCJmaXJzdFBhcnQiLCJzaGlmdCIsImlzTG9va0FoZWFkIiwiaGFzTm9XaGl0ZXNwYWNlIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCRixjQURqQixDQUNFRSxVQURGO0FBQUEsSUFFRUMsb0NBRkYsR0FFMkNKLGFBRjNDLENBRUVJLG9DQUZGOztJQUlBQyx3Qjs7O0FBQ0osb0NBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxTQUFqQyxFQUE0QztBQUFBOztBQUFBLG9KQUNwQ0YsS0FEb0M7O0FBRzFDLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBTDBDO0FBTTNDOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozt5RUFFMkRDLHNCLEVBQXdCQyx1QixFQUF5QjtBQUMzRyxVQUFJSixRQUFRSSx3QkFBd0JDLFFBQXhCLEVBQVo7O0FBRUFMLGNBQVFILFdBQVdHLEtBQVgsQ0FBUixDQUgyRyxDQUcvRTs7QUFFNUIsVUFBTU0scUNBQXFDUixxQ0FBcUNLLHNCQUFyQyxDQUEzQzs7QUFFQUgsWUFBTU8sSUFBTixDQUFXRCxrQ0FBWDs7QUFFQSxVQUFNRSxZQUFZUixNQUFNUyxLQUFOLEVBQWxCO0FBQUEsVUFDTVAsWUFBWU0sVUFBVUUsV0FBVixFQURsQjtBQUFBLFVBRU1ULGVBQWVPLFVBQVVHLGVBQVYsRUFGckI7QUFBQSxVQUdNQywyQkFBMkIsSUFBSWIsd0JBQUosQ0FBNkJDLEtBQTdCLEVBQW9DQyxZQUFwQyxFQUFrREMsU0FBbEQsQ0FIakM7O0FBS0EsYUFBT1Usd0JBQVA7QUFDRDs7OztFQWhDb0NoQixVOztBQW1DdkNpQixPQUFPQyxPQUFQLEdBQWlCZix3QkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpLFxuICAgICAgcGFydHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydHMnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBjbG9uZVBhcnRzIH0gPSBwYXJ0c1V0aWxpdGllcyxcbiAgICAgIHsgb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGhhc05vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmlyc3RQYXJ0Lmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=