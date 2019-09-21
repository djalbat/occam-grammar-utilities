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
    nonLeftRecursiveRuleNameFromRuleName = ruleNameUtilities.nonLeftRecursiveRuleNameFromRuleName;

var NonLeftRecursiveRuleNameDefinition = function (_Definition) {
      _inherits(NonLeftRecursiveRuleNameDefinition, _Definition);

      function NonLeftRecursiveRuleNameDefinition() {
            _classCallCheck(this, NonLeftRecursiveRuleNameDefinition);

            return _possibleConstructorReturn(this, (NonLeftRecursiveRuleNameDefinition.__proto__ || Object.getPrototypeOf(NonLeftRecursiveRuleNameDefinition)).apply(this, arguments));
      }

      _createClass(NonLeftRecursiveRuleNameDefinition, null, [{
            key: 'fromRuleName',
            value: function fromRuleName(ruleName) {
                  var nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
                      nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName),
                      parts = [nonLeftRecursiveRuleNamePart],
                      nonLeftRecursiveRuleNameDefinition = new NonLeftRecursiveRuleNameDefinition(parts);

                  return nonLeftRecursiveRuleNameDefinition;
            }
      }, {
            key: 'fromLeftRecursiveRuleName',
            value: function fromLeftRecursiveRuleName(leftRecursiveRuleName) {
                  var ruleName = leftRecursiveRuleName,
                      ///
                  nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromRuleName(ruleName);

                  return nonLeftRecursiveRuleNameDefinition;
            }
      }]);

      return NonLeftRecursiveRuleNameDefinition;
}(Definition);

module.exports = NonLeftRecursiveRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJydWxlTmFtZVV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJOb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicGFydHMiLCJub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRDFCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE9BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkgsYUFEL0IsQ0FDRUcsd0JBREY7QUFBQSxJQUVFQyxvQ0FGRixHQUUyQ0gsaUJBRjNDLENBRUVHLG9DQUZGOztJQUlBQyxrQzs7Ozs7Ozs7Ozs7eUNBQ2dCQyxRLEVBQVU7QUFDNUIsc0JBQU1DLDJCQUEyQkgscUNBQXFDRSxRQUFyQyxDQUFqQztBQUFBLHNCQUNNRSwrQkFBK0JMLHlCQUF5Qkksd0JBQXpCLENBRHJDO0FBQUEsc0JBRU1FLFFBQVEsQ0FDTkQsNEJBRE0sQ0FGZDtBQUFBLHNCQUtNRSxxQ0FBcUMsSUFBSUwsa0NBQUosQ0FBdUNJLEtBQXZDLENBTDNDOztBQU9BLHlCQUFPQyxrQ0FBUDtBQUNEOzs7c0RBRWdDQyxxQixFQUF1QjtBQUN0RCxzQkFBTUwsV0FBV0sscUJBQWpCO0FBQUEsc0JBQXdDO0FBQ2xDRCx1REFBcUNMLG1DQUFtQ08sWUFBbkMsQ0FBZ0ROLFFBQWhELENBRDNDOztBQUdBLHlCQUFPSSxrQ0FBUDtBQUNEOzs7O0VBakI4Q1IsVTs7QUFvQmpEVyxPQUFPQyxPQUFQLEdBQWlCVCxrQ0FBakIiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSA9IHJ1bGVOYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uID0gTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uO1xuIl19