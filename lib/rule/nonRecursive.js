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

  _createClass(NonRecursiveRule, [{
    key: 'addNonRecursiveDefinitions',
    value: function addNonRecursiveDefinitions(nonRecursiveDefinitions) {
      var definitions = nonRecursiveDefinitions; ///

      this.addDefinitions(definitions);
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var ruleName = rule.getName(),
          name = ruleName + '_',
          definitions = [],
          ///
      nonTerminalNode = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, nonTerminalNode);

      return nonRecursiveRule;
    }
  }]);

  return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJOb25SZWN1cnNpdmVSdWxlIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsImFkZERlZmluaXRpb25zIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm5hbWUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJub25SZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0lBRVFDLEksR0FBU0YsTyxDQUFURSxJOztJQUVGQyxnQjs7Ozs7Ozs7Ozs7K0NBQ3VCQyx1QixFQUF5QjtBQUNsRCxVQUFNQyxjQUFjRCx1QkFBcEIsQ0FEa0QsQ0FDSjs7QUFFOUMsV0FBS0UsY0FBTCxDQUFvQkQsV0FBcEI7QUFDRDs7OzZCQUVlRSxJLEVBQU07QUFDcEIsVUFBTUMsV0FBV0QsS0FBS0UsT0FBTCxFQUFqQjtBQUFBLFVBQ01DLE9BQVVGLFFBQVYsTUFETjtBQUFBLFVBRU1ILGNBQWMsRUFGcEI7QUFBQSxVQUV5QjtBQUNuQk0sd0JBQWtCSixLQUFLSyxrQkFBTCxFQUh4QjtBQUFBLFVBSU1DLG1CQUFtQixJQUFJVixnQkFBSixDQUFxQk8sSUFBckIsRUFBMkJMLFdBQTNCLEVBQXdDTSxlQUF4QyxDQUp6Qjs7QUFNQSxhQUFPRSxnQkFBUDtBQUNEOzs7O0VBZjRCWCxJOztBQWtCL0JZLE9BQU9DLE9BQVAsR0FBaUJaLGdCQUFqQiIsImZpbGUiOiJub25SZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBhZGROb25SZWN1cnNpdmVEZWZpbml0aW9ucyhub25SZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbnM7ICAvLy9cblxuICAgIHRoaXMuYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBgJHtydWxlTmFtZX1fYCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZVJ1bGU7XG4iXX0=