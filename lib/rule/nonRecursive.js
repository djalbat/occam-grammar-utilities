'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Rule = parsers.Rule;

var NonRecursiveRule = function (_Rule) {
  _inherits(NonRecursiveRule, _Rule);

  function NonRecursiveRule() {
    _classCallCheck(this, NonRecursiveRule);

    return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
  }

  _createClass(NonRecursiveRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var ruleName = rule.getName(),
          name = ruleName + '_',
          definitions = rule.getDefinitions(),
          nonTerminalNode = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, nonTerminalNode);

      return nonRecursiveRule;
    }
  }]);

  return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJOb25SZWN1cnNpdmVSdWxlIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibm9uUmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxJLEdBQVNGLE8sQ0FBVEUsSTs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7OzZCQUNZQyxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjtBQUFBLFVBQ01DLE9BQVVGLFFBQVYsTUFETjtBQUFBLFVBRU1HLGNBQWNKLEtBQUtLLGNBQUwsRUFGcEI7QUFBQSxVQUdNQyxrQkFBa0JOLEtBQUtPLGtCQUFMLEVBSHhCO0FBQUEsVUFJTUMsbUJBQW1CLElBQUlULGdCQUFKLENBQXFCSSxJQUFyQixFQUEyQkMsV0FBM0IsRUFBd0NFLGVBQXhDLENBSnpCOztBQU1BLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs7RUFUNEJWLEk7O0FBWS9CVyxPQUFPQyxPQUFQLEdBQWlCWCxnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBgJHtydWxlTmFtZX1fYCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uUmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25SZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uUmVjdXJzaXZlUnVsZTtcbiJdfQ==