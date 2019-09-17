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
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          ruleNames = [nonRecursiveRuleName, rightRecursiveRuleName],
          ruleNameParts = ruleNames.map(function (ruleName) {
        var ruleNamePart = ruleNamePartFromRuleName(ruleName);

        return ruleNamePart;
      }),
          parts = ruleNameParts,
          ///
      nonRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

      return nonRecursiveAndRightRecursiveRuleNamesDefinition;
    }
  }]);

  return NonRecursiveAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = NonRecursiveAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIk5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVQYXJ0cyIsIm1hcCIsInJ1bGVOYW1lUGFydCIsInBhcnRzIiwibm9uUmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxnQ0FGRixHQUUyRUgsaUJBRjNFLENBRUVHLGdDQUZGO0FBQUEsSUFFb0NDLGtDQUZwQyxHQUUyRUosaUJBRjNFLENBRW9DSSxrQ0FGcEM7O0lBSUFDLGdEOzs7Ozs7Ozs7OztpQ0FDZ0JDLFEsRUFBVTtBQUM1QixVQUFNQyx1QkFBdUJKLGlDQUFpQ0csUUFBakMsQ0FBN0I7QUFBQSxVQUNNRSx5QkFBeUJKLG1DQUFtQ0UsUUFBbkMsQ0FEL0I7QUFBQSxVQUVNRyxZQUFZLENBQ1ZGLG9CQURVLEVBRVZDLHNCQUZVLENBRmxCO0FBQUEsVUFNTUUsZ0JBQWdCRCxVQUFVRSxHQUFWLENBQWMsVUFBQ0wsUUFBRCxFQUFjO0FBQzFDLFlBQU1NLGVBQWVWLHlCQUF5QkksUUFBekIsQ0FBckI7O0FBRUEsZUFBT00sWUFBUDtBQUNELE9BSmUsQ0FOdEI7QUFBQSxVQVdNQyxRQUFRSCxhQVhkO0FBQUEsVUFXOEI7QUFDeEJJLHlEQUFtRCxJQUFJYixVQUFKLENBQWVZLEtBQWYsQ0FaekQ7O0FBY0EsYUFBT0MsZ0RBQVA7QUFDRDs7OztFQWpCNERiLFU7O0FBb0IvRGMsT0FBT0MsT0FBUCxHQUFpQlgsZ0RBQWpCIiwiZmlsZSI6Im5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3Qgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBhcnRzID0gcnVsZU5hbWVQYXJ0cywgIC8vL1xuICAgICAgICAgIG5vblJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25SZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb247XG4iXX0=