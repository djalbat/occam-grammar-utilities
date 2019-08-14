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
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

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
    key: 'fromRightRecursiveRuleNameAndDefinition',
    value: function fromRightRecursiveRuleNameAndDefinition(rightRecursiveRuleName, definition) {
      var parts = definition.getParts();

      parts = cloneParts(parts); ///

      var rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName);

      parts.push(rightRecursiveRuleNamePart);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInBhcnRzVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInB1c2giLCJmaXJzdFBhcnQiLCJzaGlmdCIsImlzTG9va0FoZWFkIiwiaGFzTm9XaGl0ZXNwYWNlIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRHZCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCRixjQURqQixDQUNFRSxVQURGO0FBQUEsSUFFRUMsd0JBRkYsR0FFK0JKLGFBRi9CLENBRUVJLHdCQUZGOztJQUlBQyx3Qjs7O0FBQ0osb0NBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDQyxTQUFqQyxFQUE0QztBQUFBOztBQUFBLG9KQUNwQ0YsS0FEb0M7O0FBRzFDLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBTDBDO0FBTTNDOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozs0REFFOENDLHNCLEVBQXdCQyxVLEVBQVk7QUFDakYsVUFBSUosUUFBUUksV0FBV0MsUUFBWCxFQUFaOztBQUVBTCxjQUFRSCxXQUFXRyxLQUFYLENBQVIsQ0FIaUYsQ0FHckQ7O0FBRTVCLFVBQU1NLDZCQUE2QlIseUJBQXlCSyxzQkFBekIsQ0FBbkM7O0FBRUFILFlBQU1PLElBQU4sQ0FBV0QsMEJBQVg7O0FBRUEsVUFBTUUsWUFBWVIsTUFBTVMsS0FBTixFQUFsQjtBQUFBLFVBQ01QLFlBQVlNLFVBQVVFLFdBQVYsRUFEbEI7QUFBQSxVQUVNVCxlQUFlTyxVQUFVRyxlQUFWLEVBRnJCO0FBQUEsVUFHTUMsMkJBQTJCLElBQUliLHdCQUFKLENBQTZCQyxLQUE3QixFQUFvQ0MsWUFBcEMsRUFBa0RDLFNBQWxELENBSGpDOztBQUtBLGFBQU9VLHdCQUFQO0FBQ0Q7Ozs7RUFoQ29DaEIsVTs7QUFtQ3ZDaUIsT0FBT0MsT0FBUCxHQUFpQmYsd0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgc3RhdGljIGZyb21SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmlyc3RQYXJ0Lmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiJdfQ==