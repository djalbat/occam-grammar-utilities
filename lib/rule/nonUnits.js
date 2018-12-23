'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonUnitDefinition = require('../definition/nonUnit');

var Rule = parsers.Rule;

var NonUnitsRule = function (_Rule) {
  _inherits(NonUnitsRule, _Rule);

  function NonUnitsRule() {
    _classCallCheck(this, NonUnitsRule);

    return _possibleConstructorReturn(this, (NonUnitsRule.__proto__ || Object.getPrototypeOf(NonUnitsRule)).apply(this, arguments));
  }

  _createClass(NonUnitsRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonUnitsRule = null;

      var definitions = definitionsFromRule(rule),
          definitionsLength = definitions.length;

      if (definitionsLength > 0) {
        var name = rule.getName(),
            nonTerminalNode = rule.getNonTerminalNode();

        nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);
      }

      return nonUnitsRule;
    }
  }]);

  return NonUnitsRule;
}(Rule);

module.exports = NonUnitsRule;

function definitionsFromRule(rule) {
  var definitions = rule.getDefinitions();

  var nonUnitDefinitions = definitions.reduce(function (nonUnitDefinitions, definition) {
    var nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

    if (nonUnitDefinition !== null) {
      nonUnitDefinitions = nonUnitDefinitions.concat(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  definitions = nonUnitDefinitions; ///

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblVuaXRzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiTm9uVW5pdERlZmluaXRpb24iLCJSdWxlIiwiTm9uVW5pdHNSdWxlIiwicnVsZSIsIm5vblVuaXRzUnVsZSIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNGcm9tUnVsZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibmFtZSIsImdldE5hbWUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RGVmaW5pdGlvbnMiLCJub25Vbml0RGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBQTFCOztJQUVRRSxJLEdBQVNILE8sQ0FBVEcsSTs7SUFFRkMsWTs7Ozs7Ozs7Ozs7NkJBQ1lDLEksRUFBTTtBQUNwQixVQUFJQyxlQUFlLElBQW5COztBQUVBLFVBQU1DLGNBQWNDLG9CQUFvQkgsSUFBcEIsQ0FBcEI7QUFBQSxVQUNNSSxvQkFBb0JGLFlBQVlHLE1BRHRDOztBQUdBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRSxPQUFPTixLQUFLTyxPQUFMLEVBQWI7QUFBQSxZQUNNQyxrQkFBa0JSLEtBQUtTLGtCQUFMLEVBRHhCOztBQUdBUix1QkFBZSxJQUFJRixZQUFKLENBQWlCTyxJQUFqQixFQUF1QkosV0FBdkIsRUFBb0NNLGVBQXBDLENBQWY7QUFDRDs7QUFFRCxhQUFPUCxZQUFQO0FBQ0Q7Ozs7RUFmd0JILEk7O0FBa0IzQlksT0FBT0MsT0FBUCxHQUFpQlosWUFBakI7O0FBRUEsU0FBU0ksbUJBQVQsQ0FBNkJILElBQTdCLEVBQW1DO0FBQ2pDLE1BQUlFLGNBQWNGLEtBQUtZLGNBQUwsRUFBbEI7O0FBRUEsTUFBTUMscUJBQXFCWCxZQUFZWSxNQUFaLENBQW1CLFVBQVNELGtCQUFULEVBQTZCRSxVQUE3QixFQUF5QztBQUNyRixRQUFNQyxvQkFBb0JuQixrQkFBa0JvQixjQUFsQixDQUFpQ0YsVUFBakMsQ0FBMUI7O0FBRUEsUUFBSUMsc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCSCwyQkFBcUJBLG1CQUFtQkssTUFBbkIsQ0FBMEJGLGlCQUExQixDQUFyQjtBQUNEOztBQUVELFdBQU9ILGtCQUFQO0FBQ0QsR0FSMEIsRUFReEIsRUFSd0IsQ0FBM0I7O0FBVUFYLGdCQUFjVyxrQkFBZCxDQWJpQyxDQWFDOztBQUVsQyxTQUFPWCxXQUFQO0FBQ0QiLCJmaWxlIjoibm9uVW5pdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IE5vblVuaXREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub25Vbml0Jyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgTm9uVW5pdHNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IG5vblVuaXRzUnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbVJ1bGUocnVsZSksXG4gICAgICAgICAgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBub25Vbml0c1J1bGUgPSBuZXcgTm9uVW5pdHNSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub25Vbml0c1J1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25Vbml0c1J1bGU7XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbVJ1bGUocnVsZSkge1xuICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgY29uc3Qgbm9uVW5pdERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vblVuaXREZWZpbml0aW9ucywgZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG5vblVuaXREZWZpbml0aW9uID0gTm9uVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpZiAobm9uVW5pdERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIG5vblVuaXREZWZpbml0aW9ucyA9IG5vblVuaXREZWZpbml0aW9ucy5jb25jYXQobm9uVW5pdERlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbnM7XG4gIH0sIFtdKTtcblxuICBkZWZpbml0aW9ucyA9IG5vblVuaXREZWZpbml0aW9uczsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl19