'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ReducedNode = require('../node/reduced');

var Rule = parsers.Rule;

var ReducedRule = function (_Rule) {
  _inherits(ReducedRule, _Rule);

  function ReducedRule() {
    _classCallCheck(this, ReducedRule);

    return _possibleConstructorReturn(this, (ReducedRule.__proto__ || Object.getPrototypeOf(ReducedRule)).apply(this, arguments));
  }

  _createClass(ReducedRule, [{
    key: 'removeDefinition',
    value: function removeDefinition(definition) {
      var definitions = this.getDefinitions(),
          index = definitions.indexOf(definition);

      if (index !== -1) {
        var start = index,
            ///
        deleteCount = 1;

        definitions.splice(start, deleteCount);
      }
    }
  }], [{
    key: 'fromReducedRuleNameAndDefinitions',
    value: function fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
      var name = reducedRuleName,
          ///
      NonTerminalNode = ReducedNode,
          ///
      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

      return reducedRule;
    }
  }]);

  return ReducedRule;
}(Rule);

module.exports = ReducedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiLCJSZWR1Y2VkUnVsZSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlZHVjZWRSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZWR1Y2VkUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGNBQWNELFFBQVEsaUJBQVIsQ0FBcEI7O0lBRVFFLEksR0FBU0gsTyxDQUFURyxJOztJQUVGQyxXOzs7Ozs7Ozs7OztxQ0FDYUMsVSxFQUFZO0FBQzNCLFVBQU1DLGNBQWMsS0FBS0MsY0FBTCxFQUFwQjtBQUFBLFVBQ01DLFFBQVFGLFlBQVlHLE9BQVosQ0FBb0JKLFVBQXBCLENBRGQ7O0FBR0EsVUFBSUcsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsWUFBTUUsUUFBUUYsS0FBZDtBQUFBLFlBQXNCO0FBQ2hCRyxzQkFBYyxDQURwQjs7QUFHQUwsb0JBQVlNLE1BQVosQ0FBbUJGLEtBQW5CLEVBQTBCQyxXQUExQjtBQUNEO0FBQ0Y7OztzREFFd0NFLGUsRUFBaUJQLFcsRUFBYTtBQUNyRSxVQUFNUSxPQUFPRCxlQUFiO0FBQUEsVUFBK0I7QUFDekJFLHdCQUFrQmIsV0FEeEI7QUFBQSxVQUNxQztBQUMvQmMsb0JBQWMsSUFBSVosV0FBSixDQUFnQlUsSUFBaEIsRUFBc0JSLFdBQXRCLEVBQW1DUyxlQUFuQyxDQUZwQjs7QUFJQSxhQUFPQyxXQUFQO0FBQ0Q7Ozs7RUFuQnVCYixJOztBQXNCMUJjLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6InJlZHVjZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJlZHVjZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWR1Y2VkJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgaW5kZXggPSBkZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBkZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZWRSdWxlTmFtZUFuZERlZmluaXRpb25zKHJlZHVjZWRSdWxlTmFtZSwgZGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdWNlZFJ1bGU7XG4iXX0=