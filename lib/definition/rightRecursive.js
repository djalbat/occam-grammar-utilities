'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
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
    key: 'fromDefinitionAndRightRecursiveRuleName',
    value: function fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
      var parts = definition.getParts(),
          optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImRlZmluaXRpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicHVzaCIsImZpcnN0UGFydCIsInNoaWZ0IiwiaXNMb29rQWhlYWQiLCJoYXNOb1doaXRlc3BhY2UiLCJyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7O0FBRU0sSUFBRUUsVUFBRixHQUFpQkgsT0FBakIsQ0FBRUcsVUFBRjtBQUFBLElBQ0VDLG9DQURGLEdBQzJDRixhQUQzQyxDQUNFRSxvQ0FERjs7SUFHQUMsd0I7OztBQUNKLG9DQUFZQyxLQUFaLEVBQW1CQyxZQUFuQixFQUFpQ0MsU0FBakMsRUFBNEM7QUFBQTs7QUFBQSxvSkFDcENGLEtBRG9DOztBQUcxQyxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUwwQztBQU0zQzs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRCxZQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7NERBRThDQyxVLEVBQVlDLHNCLEVBQXdCO0FBQ2pGLFVBQU1KLFFBQVFHLFdBQVdFLFFBQVgsRUFBZDtBQUFBLFVBQ01DLHFDQUFxQ1IscUNBQXFDTSxzQkFBckMsQ0FEM0M7O0FBR0FKLFlBQU1PLElBQU4sQ0FBV0Qsa0NBQVg7O0FBRUEsVUFBTUUsWUFBWVIsTUFBTVMsS0FBTixFQUFsQjtBQUFBLFVBQ01QLFlBQVlNLFVBQVVFLFdBQVYsRUFEbEI7QUFBQSxVQUVNVCxlQUFlTyxVQUFVRyxlQUFWLEVBRnJCO0FBQUEsVUFHTUMsMkJBQTJCLElBQUliLHdCQUFKLENBQTZCQyxLQUE3QixFQUFvQ0MsWUFBcEMsRUFBa0RDLFNBQWxELENBSGpDOztBQUtBLGFBQU9VLHdCQUFQO0FBQ0Q7Ozs7RUE3Qm9DZixVOztBQWdDdkNnQixPQUFPQyxPQUFQLEdBQWlCZix3QkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2gob3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZpcnN0UGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZpcnN0UGFydC5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19