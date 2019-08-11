'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Parts = parsers.Parts,
    Definition = parsers.Definition,
    RuleNamePart = Parts.RuleNamePart;

var RightRecursiveDefinition = function (_Definition) {
      _inherits(RightRecursiveDefinition, _Definition);

      function RightRecursiveDefinition() {
            _classCallCheck(this, RightRecursiveDefinition);

            return _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).apply(this, arguments));
      }

      _createClass(RightRecursiveDefinition, null, [{
            key: 'fromLeftRecursiveDefinitionAndRightRecursiveRuleName',
            value: function fromLeftRecursiveDefinitionAndRightRecursiveRuleName(leftRecursiveDefinition, rightRecursiveRuleName) {
                  var parts = leftRecursiveDefinition.getParts(),
                      firstPart = parts.shift(),
                      ruleNamePart = firstPart,
                      ///
                  noWhitespace = ruleNamePart.hasNoWhitespace(),
                      lookAhead = ruleNamePart.isLookAhead(),
                      rightRecursiveRuleNamePart = new RuleNamePart(rightRecursiveRuleName, noWhitespace, lookAhead);

                  parts.push(rightRecursiveRuleNamePart);

                  var rightRecursiveDefinition = new RightRecursiveDefinition(parts);

                  return rightRecursiveDefinition;
            }
      }]);

      return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInNoaWZ0IiwicnVsZU5hbWVQYXJ0Iiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInB1c2giLCJyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsSyxHQUFzQkYsTyxDQUF0QkUsSztJQUFPQyxVLEdBQWVILE8sQ0FBZkcsVTtJQUNQQyxZLEdBQWlCRixLLENBQWpCRSxZOztJQUVGQyx3Qjs7Ozs7Ozs7Ozs7aUZBQ3dEQyx1QixFQUF5QkMsc0IsRUFBd0I7QUFDM0csc0JBQU1DLFFBQVFGLHdCQUF3QkcsUUFBeEIsRUFBZDtBQUFBLHNCQUNNQyxZQUFZRixNQUFNRyxLQUFOLEVBRGxCO0FBQUEsc0JBRU1DLGVBQWVGLFNBRnJCO0FBQUEsc0JBRWdDO0FBQzFCRyxpQ0FBZUQsYUFBYUUsZUFBYixFQUhyQjtBQUFBLHNCQUlNQyxZQUFZSCxhQUFhSSxXQUFiLEVBSmxCO0FBQUEsc0JBS01DLDZCQUE2QixJQUFJYixZQUFKLENBQWlCRyxzQkFBakIsRUFBeUNNLFlBQXpDLEVBQXVERSxTQUF2RCxDQUxuQzs7QUFPQVAsd0JBQU1VLElBQU4sQ0FBV0QsMEJBQVg7O0FBRUEsc0JBQU1FLDJCQUEyQixJQUFJZCx3QkFBSixDQUE2QkcsS0FBN0IsQ0FBakM7O0FBRUEseUJBQU9XLHdCQUFQO0FBQ0Q7Ozs7RUFkb0NoQixVOztBQWlCdkNpQixPQUFPQyxPQUFQLEdBQWlCaEIsd0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnQgfSA9IFBhcnRzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJ1bGVOYW1lUGFydC5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBydWxlTmFtZVBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcGFydHMucHVzaChyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=