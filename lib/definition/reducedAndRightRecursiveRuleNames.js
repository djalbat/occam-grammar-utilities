'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    arrayUtilities = require('../utilities/array'),
    ruleNameUtilities = require('../utilities/ruleName');

var first = arrayUtilities.first,
    Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName,
    reducedRuleNameFromLeftRecursiveRuleName = ruleNameUtilities.reducedRuleNameFromLeftRecursiveRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var ReducedAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(ReducedAndRightRecursiveRuleNamesDefinition, _Definition);

      function ReducedAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, ReducedAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (ReducedAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(ReducedAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(ReducedAndRightRecursiveRuleNamesDefinition, [{
            key: 'isLookAhead',
            value: function isLookAhead() {
                  var parts = this.getParts(),
                      firstPart = first(parts),
                      reducedRuleNamePart = firstPart,
                      ///
                  lookAhead = reducedRuleNamePart.isLookAhead();

                  return lookAhead;
            }
      }], [{
            key: 'fromRuleNameLeftRecursiveRuleNameAndLookAhead',
            value: function fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
                  var reducedRuleName = reducedRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      ruleNameParts = [reducedRuleNamePart, rightRecursiveRuleNamePart],
                      parts = ruleNameParts,
                      ///
                  reducedAndRightRecursiveRuleNamesDefinition = new ReducedAndRightRecursiveRuleNamesDefinition(parts);

                  return reducedAndRightRecursiveRuleNamesDefinition;
            }
      }]);

      return ReducedAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = ReducedAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlZHVjZWRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lcy5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiZmlyc3QiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJSZWR1Y2VkQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0cyIsInJlZHVjZWRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0FBSU0sSUFBRUksS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCTixPQURqQixDQUNFTSxVQURGO0FBQUEsSUFFRUMsd0JBRkYsR0FFK0JMLGFBRi9CLENBRUVLLHdCQUZGO0FBQUEsSUFHRUMsd0NBSEYsR0FHbUZKLGlCQUhuRixDQUdFSSx3Q0FIRjtBQUFBLElBRzRDQyxrQ0FINUMsR0FHbUZMLGlCQUhuRixDQUc0Q0ssa0NBSDVDOztJQUtBQywyQzs7Ozs7Ozs7Ozs7MENBQ1U7QUFDWixzQkFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxzQkFDTUMsWUFBWVIsTUFBTU0sS0FBTixDQURsQjtBQUFBLHNCQUVNRyxzQkFBc0JELFNBRjVCO0FBQUEsc0JBRXVDO0FBQ2pDRSw4QkFBWUQsb0JBQW9CRSxXQUFwQixFQUhsQjs7QUFLQSx5QkFBT0QsU0FBUDtBQUNEOzs7MEVBRW9ERSxRLEVBQVVDLHFCLEVBQXVCSCxTLEVBQVc7QUFDL0Ysc0JBQU1JLGtCQUFrQlgseUNBQXlDVSxxQkFBekMsQ0FBeEI7QUFBQSxzQkFDTUUseUJBQXlCWCxtQ0FBbUNRLFFBQW5DLENBRC9CO0FBQUEsc0JBRU1ILHNCQUFzQlAseUJBQXlCWSxlQUF6QixFQUEwQ0osU0FBMUMsQ0FGNUI7QUFBQSxzQkFHTU0sNkJBQTZCZCx5QkFBeUJhLHNCQUF6QixDQUhuQztBQUFBLHNCQUlNRSxnQkFBZ0IsQ0FDZFIsbUJBRGMsRUFFZE8sMEJBRmMsQ0FKdEI7QUFBQSxzQkFRTVYsUUFBUVcsYUFSZDtBQUFBLHNCQVE4QjtBQUN4QkMsZ0VBQThDLElBQUliLDJDQUFKLENBQWdEQyxLQUFoRCxDQVRwRDs7QUFXQSx5QkFBT1ksMkNBQVA7QUFDRDs7OztFQXZCdURqQixVOztBQTBCMURrQixPQUFPQyxPQUFQLEdBQWlCZiwyQ0FBakIiLCJmaWxlIjoicmVkdWNlZEFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyByZWR1Y2VkUnVsZU5hbWVGcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmVkdWNlZEFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBpc0xvb2tBaGVhZCgpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcmVkdWNlZFJ1bGVOYW1lUGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgcmV0dXJuIGxvb2tBaGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRMb29rQWhlYWQocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXJ0cyA9IHJ1bGVOYW1lUGFydHMsICAvLy9cbiAgICAgICAgICByZWR1Y2VkQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uID0gbmV3IFJlZHVjZWRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1Y2VkQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uO1xuIl19