'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

var ImmediatelyLeftRecursiveDefinition = function (_Definition) {
  _inherits(ImmediatelyLeftRecursiveDefinition, _Definition);

  function ImmediatelyLeftRecursiveDefinition(parts, ruleName, indirectlyLeftRecursiveDefinition) {
    _classCallCheck(this, ImmediatelyLeftRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (ImmediatelyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(ImmediatelyLeftRecursiveDefinition)).call(this, parts));

    _this.ruleName = ruleName;

    _this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
    return _this;
  }

  _createClass(ImmediatelyLeftRecursiveDefinition, null, [{
    key: 'fromLeftRecursiveDefinitionAndIndirectlyLeftRecursiveDefinition',
    value: function fromLeftRecursiveDefinitionAndIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, indirectlyLeftRecursiveDefinition) {
      var parts = leftRecursiveDefinition.getParts(),
          ruleName = leftRecursiveDefinition.getRuleName(),
          immediatelyLeftRecursiveDefinition = new ImmediatelyLeftRecursiveDefinition(parts, ruleName, indirectlyLeftRecursiveDefinition);

      return immediatelyLeftRecursiveDefinition;
    }
  }]);

  return ImmediatelyLeftRecursiveDefinition;
}(Definition);

module.exports = ImmediatelyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1tZWRpYXRlbHkuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0lBRVFDLFUsR0FBZUYsTyxDQUFmRSxVOztJQUVGQyxrQzs7O0FBQ0osOENBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxpQ0FBN0IsRUFBZ0U7QUFBQTs7QUFBQSx3S0FDeERGLEtBRHdEOztBQUc5RCxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxVQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBTDhEO0FBTS9EOzs7O29GQUVzRUMsdUIsRUFBeUJELGlDLEVBQW1DO0FBQ2pJLFVBQU1GLFFBQVFHLHdCQUF3QkMsUUFBeEIsRUFBZDtBQUFBLFVBQ01ILFdBQVdFLHdCQUF3QkUsV0FBeEIsRUFEakI7QUFBQSxVQUVNQyxxQ0FBcUMsSUFBSVAsa0NBQUosQ0FBdUNDLEtBQXZDLEVBQThDQyxRQUE5QyxFQUF3REMsaUNBQXhELENBRjNDOztBQUlBLGFBQU9JLGtDQUFQO0FBQ0Q7Ozs7RUFmOENSLFU7O0FBa0JqRFMsT0FBT0MsT0FBUCxHQUFpQlQsa0NBQWpCIiwiZmlsZSI6ImltbWVkaWF0ZWx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==