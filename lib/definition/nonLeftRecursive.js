'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partsUtilities = require('../utilities/parts'),
    arrayUtilities = require('../utilities/array'),
    RightRecursiveRuleNamePart = require('../part/rightRecursiveRuleName');

var first = arrayUtilities.first,
    Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts;

var NonLeftRecursiveDefinition = function (_Definition) {
  _inherits(NonLeftRecursiveDefinition, _Definition);

  function NonLeftRecursiveDefinition() {
    _classCallCheck(this, NonLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (NonLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(NonLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveDefinition, null, [{
    key: 'fromDefinitionAndRightRecursiveRule',
    value: function fromDefinitionAndRightRecursiveRule(definition, rightRecursiveRule) {
      var parts = definition.getParts();

      parts = cloneParts(parts); ///

      var noWhitespace = rightRecursiveRule.hasNoWhitespace(),
          nonLeftRecursiveDefinition = new NonLeftRecursiveDefinition(parts),
          rightRecursiveRuleNamePart = RightRecursiveRuleNamePart.fromRightRecursiveRule(rightRecursiveRule);

      nonLeftRecursiveDefinition.addPart(rightRecursiveRuleNamePart);

      if (noWhitespace) {
        var firstPart = first(parts);

        firstPart.setNoWhitespace(noWhitespace);
      }

      return nonLeftRecursiveDefinition;
    }
  }]);

  return NonLeftRecursiveDefinition;
}(Definition);

module.exports = NonLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vbkxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJwYXJ0c1V0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJmaXJzdCIsIkRlZmluaXRpb24iLCJjbG9uZVBhcnRzIiwiTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImhhc05vV2hpdGVzcGFjZSIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJmcm9tUmlnaHRSZWN1cnNpdmVSdWxlIiwiYWRkUGFydCIsImZpcnN0UGFydCIsInNldE5vV2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1HLDZCQUE2QkgsUUFBUSxnQ0FBUixDQUZuQzs7QUFJTSxJQUFFSSxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJOLE9BRGpCLENBQ0VNLFVBREY7QUFBQSxJQUVFQyxVQUZGLEdBRWlCTCxjQUZqQixDQUVFSyxVQUZGOztJQUlBQywwQjs7Ozs7Ozs7Ozs7d0RBQ3VDQyxVLEVBQVlDLGtCLEVBQW9CO0FBQ3pFLFVBQUlDLFFBQVFGLFdBQVdHLFFBQVgsRUFBWjs7QUFFQUQsY0FBUUosV0FBV0ksS0FBWCxDQUFSLENBSHlFLENBRzdDOztBQUU1QixVQUFNRSxlQUFlSCxtQkFBbUJJLGVBQW5CLEVBQXJCO0FBQUEsVUFDTUMsNkJBQTZCLElBQUlQLDBCQUFKLENBQStCRyxLQUEvQixDQURuQztBQUFBLFVBRU1LLDZCQUE2QlosMkJBQTJCYSxzQkFBM0IsQ0FBa0RQLGtCQUFsRCxDQUZuQzs7QUFJQUssaUNBQTJCRyxPQUEzQixDQUFtQ0YsMEJBQW5DOztBQUVBLFVBQUlILFlBQUosRUFBa0I7QUFDaEIsWUFBTU0sWUFBWWQsTUFBTU0sS0FBTixDQUFsQjs7QUFFQVEsa0JBQVVDLGVBQVYsQ0FBMEJQLFlBQTFCO0FBQ0Q7O0FBRUQsYUFBT0UsMEJBQVA7QUFDRDs7OztFQW5Cc0NULFU7O0FBc0J6Q2UsT0FBT0MsT0FBUCxHQUFpQmQsMEJBQWpCIiwiZmlsZSI6Im5vbkxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3JpZ2h0UmVjdXJzaXZlUnVsZU5hbWUnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGNsb25lUGFydHMgfSA9IHBhcnRzVXRpbGl0aWVzO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGUoZGVmaW5pdGlvbiwgcmlnaHRSZWN1cnNpdmVSdWxlKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gcmlnaHRSZWN1cnNpdmVSdWxlLmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IE5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0LmZyb21SaWdodFJlY3Vyc2l2ZVJ1bGUocmlnaHRSZWN1cnNpdmVSdWxlKTtcblxuICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmFkZFBhcnQocmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpO1xuXG4gICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICBmaXJzdFBhcnQuc2V0Tm9XaGl0ZXNwYWNlKG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=