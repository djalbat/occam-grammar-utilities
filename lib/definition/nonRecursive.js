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
  }]);

  return NonRecursiveDefinition;
}(Definition);

module.exports = NonRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGUiLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsIm5vblJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7O0FBRU0sSUFBRUUsVUFBRixHQUFpQkgsT0FBakIsQ0FBRUcsVUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCRixhQUQvQixDQUNFRSx3QkFERjs7SUFHQUMsc0I7Ozs7Ozs7Ozs7O3lDQUN3QkMsZ0IsRUFBa0I7QUFDNUMsVUFBTUMsdUJBQXVCRCxpQkFBaUJFLE9BQWpCLEVBQTdCO0FBQUEsVUFDTUMsMkJBQTJCTCx5QkFBeUJHLG9CQUF6QixDQURqQztBQUFBLFVBRU1HLFFBQVEsQ0FDTkQsd0JBRE0sQ0FGZDtBQUFBLFVBS01FLHlCQUF5QixJQUFJTixzQkFBSixDQUEyQkssS0FBM0IsQ0FML0I7O0FBT0EsYUFBT0Msc0JBQVA7QUFDRDs7OztFQVZrQ1IsVTs7QUFhckNTLE9BQU9DLE9BQVAsR0FBaUJSLHNCQUFqQiIsImZpbGUiOiJub25SZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZVJ1bGUobm9uUmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lID0gbm9uUmVjdXJzaXZlUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKG5vblJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBOb25SZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==