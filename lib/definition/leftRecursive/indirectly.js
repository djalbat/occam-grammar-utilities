'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

var IndirectlyLeftRecursiveDefinition = function (_Definition) {
  _inherits(IndirectlyLeftRecursiveDefinition, _Definition);

  function IndirectlyLeftRecursiveDefinition() {
    _classCallCheck(this, IndirectlyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (IndirectlyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(IndirectlyLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(IndirectlyLeftRecursiveDefinition, null, [{
    key: 'fromLeftRecursiveDefinitionAndLeftRecursiveDefinitions',
    value: function fromLeftRecursiveDefinitionAndLeftRecursiveDefinitions(leftRecursiveDefinition, leftRecursiveDefinitions) {
      var indirectlyLeftRecursiveDefinition = null;

      var ruleName = leftRecursiveDefinition.getRuleName(),
          leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
          leftRecursiveRuleNameRuleName = leftRecursiveRuleName === ruleName;

      if (!leftRecursiveRuleNameRuleName) {
        var ruleNames = leftRecursiveDefinitions.map(function (leftRecursiveDefinition) {
          var ruleName = leftRecursiveDefinition.getRuleName();

          return ruleName;
        }),
            index = ruleNames.indexOf(leftRecursiveRuleName),
            _leftRecursiveDefinition = leftRecursiveDefinitions[index];

        indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(_leftRecursiveDefinition, ruleName);
      }

      return indirectlyLeftRecursiveDefinition;
    }
  }]);

  return IndirectlyLeftRecursiveDefinition;
}(Definition);

module.exports = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW5kaXJlY3RseS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsIm1hcCIsImluZGV4IiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxVLEdBQWVGLE8sQ0FBZkUsVTs7SUFFRkMsaUM7Ozs7Ozs7Ozs7OzJFQUMwREMsdUIsRUFBeUJDLHdCLEVBQTBCO0FBQy9HLFVBQUlDLG9DQUFvQyxJQUF4Qzs7QUFFQSxVQUFNQyxXQUFXSCx3QkFBd0JJLFdBQXhCLEVBQWpCO0FBQUEsVUFDTUMsd0JBQXdCTCx3QkFBd0JNLHdCQUF4QixFQUQ5QjtBQUFBLFVBRU1DLGdDQUFpQ0YsMEJBQTBCRixRQUZqRTs7QUFJQSxVQUFJLENBQUNJLDZCQUFMLEVBQW9DO0FBQ2xDLFlBQU1DLFlBQVlQLHlCQUF5QlEsR0FBekIsQ0FBNkIsVUFBQ1QsdUJBQUQsRUFBNkI7QUFDcEUsY0FBTUcsV0FBV0gsd0JBQXdCSSxXQUF4QixFQUFqQjs7QUFFQSxpQkFBT0QsUUFBUDtBQUNELFNBSlcsQ0FBbEI7QUFBQSxZQUtNTyxRQUFRRixVQUFVRyxPQUFWLENBQWtCTixxQkFBbEIsQ0FMZDtBQUFBLFlBTU1MLDJCQUEwQkMseUJBQXlCUyxLQUF6QixDQU5oQzs7QUFRQVIsNENBQW9DLElBQUlILGlDQUFKLENBQXNDQyx3QkFBdEMsRUFBK0RHLFFBQS9ELENBQXBDO0FBQ0Q7O0FBRUQsYUFBT0QsaUNBQVA7QUFDRDs7OztFQXJCNkNKLFU7O0FBd0JoRGMsT0FBT0MsT0FBUCxHQUFpQmQsaUNBQWpCIiwiZmlsZSI6ImluZGlyZWN0bHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycztcblxuY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZVJ1bGVOYW1lID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW5kZXggPSBydWxlTmFtZXMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNbaW5kZXhdO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBydWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==