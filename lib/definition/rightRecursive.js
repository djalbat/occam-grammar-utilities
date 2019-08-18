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
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName, count) {
      var parts = definition.getParts(),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName, count),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImRlZmluaXRpb24iLCJydWxlTmFtZSIsImNvdW50IiwiZ2V0UGFydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInB1c2giLCJmaXJzdFBhcnQiLCJzaGlmdCIsImlzTG9va0FoZWFkIiwiaGFzTm9XaGl0ZXNwYWNlIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyxrQ0FERixHQUN5Q0YsaUJBRHpDLENBQ0VFLGtDQURGO0FBQUEsSUFFRUMsb0NBRkYsR0FFMkNKLGFBRjNDLENBRUVJLG9DQUZGOztJQUlBQyx3Qjs7O0FBQ0osb0NBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxTQUFqQyxFQUE0QztBQUFBOztBQUFBLG9KQUNwQ0YsS0FEb0M7O0FBRzFDLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBTDBDO0FBTTNDOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozs4Q0FFZ0NDLFUsRUFBWUMsUSxFQUFVQyxLLEVBQU87QUFDNUQsVUFBTUwsUUFBUUcsV0FBV0csUUFBWCxFQUFkO0FBQUEsVUFDTUMseUJBQXlCVixtQ0FBbUNPLFFBQW5DLEVBQTZDQyxLQUE3QyxDQUQvQjtBQUFBLFVBRU1HLHFDQUFxQ1YscUNBQXFDUyxzQkFBckMsQ0FGM0M7O0FBSUFQLFlBQU1TLElBQU4sQ0FBV0Qsa0NBQVg7O0FBRUEsVUFBTUUsWUFBWVYsTUFBTVcsS0FBTixFQUFsQjtBQUFBLFVBQ01ULFlBQVlRLFVBQVVFLFdBQVYsRUFEbEI7QUFBQSxVQUVNWCxlQUFlUyxVQUFVRyxlQUFWLEVBRnJCO0FBQUEsVUFHTUMsMkJBQTJCLElBQUlmLHdCQUFKLENBQTZCQyxLQUE3QixFQUFvQ0MsWUFBcEMsRUFBa0RDLFNBQWxELENBSGpDOztBQUtBLGFBQU9ZLHdCQUFQO0FBQ0Q7Ozs7RUE5Qm9DbEIsVTs7QUFpQ3ZDbUIsT0FBT0MsT0FBUCxHQUFpQmpCLHdCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lLCBjb3VudCkge1xuICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBjb3VudCksXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2gob3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZpcnN0UGFydC5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZpcnN0UGFydC5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19