'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var NonRecursiveDefinition = function (_Definition) {
  _inherits(NonRecursiveDefinition, _Definition);

  function NonRecursiveDefinition() {
    _classCallCheck(this, NonRecursiveDefinition);

    return _possibleConstructorReturn(this, (NonRecursiveDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(NonRecursiveDefinition, null, [{
    key: 'fromNonRecursiveRule',
    value: function fromNonRecursiveRule(nonRecursiveRule) {
      var nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

      return nonRecursiveDefinition;
    }
  }, {
    key: 'fromNonRecursiveRuleAndRightRecursiveRule',
    value: function fromNonRecursiveRuleAndRightRecursiveRule(nonRecursiveRule, rightRecursiveRule) {
      var nonRecursiveRuleName = nonRecursiveRule.getName(),
          rightRecursiveRuleName = rightRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

      return nonRecursiveDefinition;
    }
  }]);

  return NonRecursiveDefinition;
}(Definition);

module.exports = NonRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm5vblJlY3Vyc2l2ZURlZmluaXRpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7O0FBRU0sSUFBRUUsVUFBRixHQUFpQkgsT0FBakIsQ0FBRUcsVUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCRixhQUQvQixDQUNFRSx3QkFERjs7SUFHQUMsc0I7Ozs7Ozs7Ozs7O3lDQUN3QkMsZ0IsRUFBa0I7QUFDNUMsVUFBTUMsdUJBQXVCRCxpQkFBaUJFLE9BQWpCLEVBQTdCO0FBQUEsVUFDTUMsMkJBQTJCTCx5QkFBeUJHLG9CQUF6QixDQURqQztBQUFBLFVBRU1HLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDtBQUFBLFVBS01FLHlCQUF5QixJQUFJTixzQkFBSixDQUEyQkssS0FBM0IsQ0FML0I7O0FBT0EsYUFBT0Msc0JBQVA7QUFDRDs7OzhEQUVnREwsZ0IsRUFBa0JNLGtCLEVBQW9CO0FBQ3JGLFVBQU1MLHVCQUF1QkQsaUJBQWlCRSxPQUFqQixFQUE3QjtBQUFBLFVBQ01LLHlCQUF5QkQsbUJBQW1CSixPQUFuQixFQUQvQjtBQUFBLFVBRU1DLDJCQUEyQkwseUJBQXlCRyxvQkFBekIsQ0FGakM7QUFBQSxVQUdNTyw2QkFBNkJWLHlCQUF5QlMsc0JBQXpCLENBSG5DO0FBQUEsVUFJTUgsUUFBUSxDQUNORCx3QkFETSxFQUVOSywwQkFGTSxDQUpkO0FBQUEsVUFRTUgseUJBQXlCLElBQUlOLHNCQUFKLENBQTJCSyxLQUEzQixDQVIvQjs7QUFVQSxhQUFPQyxzQkFBUDtBQUNEOzs7O0VBeEJrQ1IsVTs7QUEyQnJDWSxPQUFPQyxPQUFQLEdBQWlCWCxzQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob25SZWN1cnNpdmVSdWxlKG5vblJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTm9uUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9uUmVjdXJzaXZlUnVsZUFuZFJpZ2h0UmVjdXJzaXZlUnVsZShub25SZWN1cnNpdmVSdWxlLCByaWdodFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBOb25SZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==