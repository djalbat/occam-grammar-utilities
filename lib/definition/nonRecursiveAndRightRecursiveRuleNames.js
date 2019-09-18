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
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var NonRecursiveAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(NonRecursiveAndRightRecursiveRuleNamesDefinition, _Definition);

      function NonRecursiveAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, NonRecursiveAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (NonRecursiveAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(NonRecursiveAndRightRecursiveRuleNamesDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
                      lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
                      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      ruleNameParts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
                      parts = ruleNameParts,
                      ///
                  nonRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

                  return nonRecursiveAndRightRecursiveRuleNamesDefinition;
            }
      }]);

      return NonRecursiveAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = NonRecursiveAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsImltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydHMiLCJwYXJ0cyIsIm5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjs7QUFHTSxJQUFFRyxVQUFGLEdBQWlCSixPQUFqQixDQUFFSSxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JILGFBRC9CLENBQ0VHLHdCQURGO0FBQUEsSUFFRUMsZ0NBRkYsR0FFMkVILGlCQUYzRSxDQUVFRyxnQ0FGRjtBQUFBLElBRW9DQyxrQ0FGcEMsR0FFMkVKLGlCQUYzRSxDQUVvQ0ksa0NBRnBDOztJQUlBQyxnRDs7Ozs7Ozs7Ozs7bUVBQzBDQyxrQyxFQUFvQztBQUNoRixzQkFBTUMsV0FBV0QsbUNBQW1DRSxXQUFuQyxFQUFqQjtBQUFBLHNCQUNNQyxZQUFZSCxtQ0FBbUNJLFdBQW5DLEVBRGxCO0FBQUEsc0JBRU1DLHVCQUF1QlIsaUNBQWlDSSxRQUFqQyxDQUY3QjtBQUFBLHNCQUdNSyx5QkFBeUJSLG1DQUFtQ0csUUFBbkMsQ0FIL0I7QUFBQSxzQkFJTU0sMkJBQTJCWCx5QkFBeUJTLG9CQUF6QixFQUErQ0YsU0FBL0MsQ0FKakM7QUFBQSxzQkFLTUssNkJBQTZCWix5QkFBeUJVLHNCQUF6QixDQUxuQztBQUFBLHNCQU1NRyxnQkFBZ0IsQ0FDZEYsd0JBRGMsRUFFZEMsMEJBRmMsQ0FOdEI7QUFBQSxzQkFVTUUsUUFBUUQsYUFWZDtBQUFBLHNCQVU4QjtBQUN4QkUscUVBQW1ELElBQUloQixVQUFKLENBQWVlLEtBQWYsQ0FYekQ7O0FBYUEseUJBQU9DLGdEQUFQO0FBQ0Q7Ozs7RUFoQjREaEIsVTs7QUFtQi9EaUIsT0FBT0MsT0FBUCxHQUFpQmQsZ0RBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbUltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLCBsb29rQWhlYWQpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgbm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiJdfQ==