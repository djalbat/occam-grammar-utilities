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
    nonLeftRecursiveRuleNameFromLeftRecursiveRuleName = ruleNameUtilities.nonLeftRecursiveRuleNameFromLeftRecursiveRuleName,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var NonLeftRecursiveAndRightRecursiveRuleNamesDefinition = function (_Definition) {
      _inherits(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition, _Definition);

      function NonLeftRecursiveAndRightRecursiveRuleNamesDefinition() {
            _classCallCheck(this, NonLeftRecursiveAndRightRecursiveRuleNamesDefinition);

            return _possibleConstructorReturn(this, (NonLeftRecursiveAndRightRecursiveRuleNamesDefinition.__proto__ || Object.getPrototypeOf(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition)).apply(this, arguments));
      }

      _createClass(NonLeftRecursiveAndRightRecursiveRuleNamesDefinition, [{
            key: 'isLookAhead',
            value: function isLookAhead() {
                  var parts = this.getParts(),
                      firstPart = first(parts),
                      nonLeftRecursiveRuleNamePart = firstPart,
                      ///
                  lookAhead = nonLeftRecursiveRuleNamePart.isLookAhead();

                  return lookAhead;
            }
      }], [{
            key: 'fromRuleNameLeftRecursiveRuleNameAndLookAhead',
            value: function fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
                  var nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName, lookAhead),
                      rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
                      ruleNameParts = [nonLeftRecursiveRuleNamePart, rightRecursiveRuleNamePart],
                      parts = ruleNameParts,
                      ///
                  nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = new NonLeftRecursiveAndRightRecursiveRuleNamesDefinition(parts);

                  return nonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
            }
      }]);

      return NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
}(Definition);

module.exports = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lcy5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiZmlyc3QiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJOb25MZWZ0UmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsIm5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0cyIsIm5vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0FBSU0sSUFBRUksS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCTixPQURqQixDQUNFTSxVQURGO0FBQUEsSUFFRUMsd0JBRkYsR0FFK0JMLGFBRi9CLENBRUVLLHdCQUZGO0FBQUEsSUFHRUMsaURBSEYsR0FHNEZKLGlCQUg1RixDQUdFSSxpREFIRjtBQUFBLElBR3FEQyxrQ0FIckQsR0FHNEZMLGlCQUg1RixDQUdxREssa0NBSHJEOztJQUtBQyxvRDs7Ozs7Ozs7Ozs7MENBQ1U7QUFDWixzQkFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxzQkFDTUMsWUFBWVIsTUFBTU0sS0FBTixDQURsQjtBQUFBLHNCQUVNRywrQkFBK0JELFNBRnJDO0FBQUEsc0JBRWdEO0FBQzFDRSw4QkFBWUQsNkJBQTZCRSxXQUE3QixFQUhsQjs7QUFLQSx5QkFBT0QsU0FBUDtBQUNEOzs7MEVBRW9ERSxRLEVBQVVDLHFCLEVBQXVCSCxTLEVBQVc7QUFDL0Ysc0JBQU1JLDJCQUEyQlgsa0RBQWtEVSxxQkFBbEQsQ0FBakM7QUFBQSxzQkFDTUUseUJBQXlCWCxtQ0FBbUNRLFFBQW5DLENBRC9CO0FBQUEsc0JBRU1ILCtCQUErQlAseUJBQXlCWSx3QkFBekIsRUFBbURKLFNBQW5ELENBRnJDO0FBQUEsc0JBR01NLDZCQUE2QmQseUJBQXlCYSxzQkFBekIsQ0FIbkM7QUFBQSxzQkFJTUUsZ0JBQWdCLENBQ2RSLDRCQURjLEVBRWRPLDBCQUZjLENBSnRCO0FBQUEsc0JBUU1WLFFBQVFXLGFBUmQ7QUFBQSxzQkFROEI7QUFDeEJDLHlFQUF1RCxJQUFJYixvREFBSixDQUF5REMsS0FBekQsQ0FUN0Q7O0FBV0EseUJBQU9ZLG9EQUFQO0FBQ0Q7Ozs7RUF2QmdFakIsVTs7QUEwQm5Fa0IsT0FBT0MsT0FBUCxHQUFpQmYsb0RBQWpCIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcyxcbiAgICAgIHsgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVBbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTG9va0FoZWFkKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGxvb2tBaGVhZCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFydHMgPSBydWxlTmFtZVBhcnRzLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbiA9IG5ldyBOb25MZWZ0UmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZXNEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVzRGVmaW5pdGlvbjtcbiJdfQ==