'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    ruleNameUtilities = require('../utilities/ruleName');

var Definition = parsers.Definition,
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName,
    rightRecursiveRuleNameFromRecursiveRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRecursiveRuleName;

var RightRecursiveDefinition = function (_Definition) {
      _inherits(RightRecursiveDefinition, _Definition);

      function RightRecursiveDefinition() {
            _classCallCheck(this, RightRecursiveDefinition);

            return _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).apply(this, arguments));
      }

      _createClass(RightRecursiveDefinition, null, [{
            key: 'fromImmediatelyLeftRecursiveDefinition',
            value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
                  var parts = immediatelyLeftRecursiveDefinition.getParts(),
                      recursiveRleName = immediatelyLeftRecursiveDefinition.getRuleName(),
                      rightRecursiveRuleName = rightRecursiveRuleNameFromRecursiveRuleName(recursiveRleName),
                      ruleName = rightRecursiveRuleName,
                      ///
                  optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

                  parts.push(optionalRightRecursiveRuleNamePart);

                  parts.shift(); ///

                  var rightRecursiveDefinition = new RightRecursiveDefinition(parts);

                  return rightRecursiveDefinition;
            }
      }]);

      return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsIm9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUmVjdXJzaXZlUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsIm9wdGlvbmFsUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJwdXNoIiwic2hpZnQiLCJyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7O0FBR00sSUFBRUcsVUFBRixHQUFpQkosT0FBakIsQ0FBRUksVUFBRjtBQUFBLElBQ0VDLG9DQURGLEdBQzJDSCxhQUQzQyxDQUNFRyxvQ0FERjtBQUFBLElBRUVDLDJDQUZGLEdBRWtESCxpQkFGbEQsQ0FFRUcsMkNBRkY7O0lBSUFDLHdCOzs7Ozs7Ozs7OzttRUFDMENDLGtDLEVBQW9DO0FBQ2hGLHNCQUFNQyxRQUFRRCxtQ0FBbUNFLFFBQW5DLEVBQWQ7QUFBQSxzQkFDTUMsbUJBQW1CSCxtQ0FBbUNJLFdBQW5DLEVBRHpCO0FBQUEsc0JBRU1DLHlCQUF5QlAsNENBQTRDSyxnQkFBNUMsQ0FGL0I7QUFBQSxzQkFHTUcsV0FBV0Qsc0JBSGpCO0FBQUEsc0JBRzBDO0FBQ3BDRSx1REFBcUNWLHFDQUFxQ1MsUUFBckMsQ0FKM0M7O0FBTUFMLHdCQUFNTyxJQUFOLENBQVdELGtDQUFYOztBQUVBTix3QkFBTVEsS0FBTixHQVRnRixDQVNoRTs7QUFFaEIsc0JBQU1DLDJCQUEyQixJQUFJWCx3QkFBSixDQUE2QkUsS0FBN0IsQ0FBakM7O0FBRUEseUJBQU9TLHdCQUFQO0FBQ0Q7Ozs7RUFmb0NkLFU7O0FBa0J2Q2UsT0FBT0MsT0FBUCxHQUFpQmIsd0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJlY3Vyc2l2ZVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcmVjdXJzaXZlUmxlTmFtZSA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SZWN1cnNpdmVSdWxlTmFtZShyZWN1cnNpdmVSbGVOYW1lKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2gob3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBwYXJ0cy5zaGlmdCgpOyAgLy8vXG5cbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=