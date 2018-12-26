'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var definitionUtilities = require('../utilities/definition');

var Definition = parsers.Definition,
    isFirstPartRuleNamePart = definitionUtilities.isFirstPartRuleNamePart;

var ImmediatelyLeftRecursiveDefinition = function (_Definition) {
  _inherits(ImmediatelyLeftRecursiveDefinition, _Definition);

  function ImmediatelyLeftRecursiveDefinition() {
    _classCallCheck(this, ImmediatelyLeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (ImmediatelyLeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(ImmediatelyLeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(ImmediatelyLeftRecursiveDefinition, null, [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var immediatelyLeftRecursiveDefinition = null;

      var definitionFirstPartRuleNamePart = isFirstPartRuleNamePart(definition);

      if (definitionFirstPartRuleNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,
            ///
        definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName();

        if (definitionFirstRuleNamePartRuleName === ruleName) {
          var parts = definition.getParts();

          immediatelyLeftRecursiveDefinition = new ImmediatelyLeftRecursiveDefinition(parts);
        }
      }

      return immediatelyLeftRecursiveDefinition;
    }
  }]);

  return ImmediatelyLeftRecursiveDefinition;
}(Definition);

module.exports = ImmediatelyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0UnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxzQkFBc0JELFFBQVEseUJBQVIsQ0FBNUI7O0FBRU0sSUFBRUUsVUFBRixHQUFpQkgsT0FBakIsQ0FBRUcsVUFBRjtBQUFBLElBQ0VDLHVCQURGLEdBQzhCRixtQkFEOUIsQ0FDRUUsdUJBREY7O0lBR0FDLGtDOzs7Ozs7Ozs7Ozs4Q0FDNkJDLFUsRUFBWUMsUSxFQUFVO0FBQ3JELFVBQUlDLHFDQUFxQyxJQUF6Qzs7QUFFQSxVQUFNQyxrQ0FBa0NMLHdCQUF3QkUsVUFBeEIsQ0FBeEM7O0FBRUEsVUFBSUcsK0JBQUosRUFBcUM7QUFDbkMsWUFBTUMsc0JBQXNCSixXQUFXSyxZQUFYLEVBQTVCO0FBQUEsWUFDTUMsOEJBQThCRixtQkFEcEM7QUFBQSxZQUMwRDtBQUNwREcsOENBQXNDRCw0QkFBNEJFLFdBQTVCLEVBRjVDOztBQUlBLFlBQUlELHdDQUF3Q04sUUFBNUMsRUFBc0Q7QUFDcEQsY0FBTVEsUUFBUVQsV0FBV1UsUUFBWCxFQUFkOztBQUVBUiwrQ0FBcUMsSUFBSUgsa0NBQUosQ0FBdUNVLEtBQXZDLENBQXJDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUCxrQ0FBUDtBQUNEOzs7O0VBbkI4Q0wsVTs7QUFzQmpEYyxPQUFPQyxPQUFQLEdBQWlCYixrQ0FBakIiLCJmaWxlIjoiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoZGVmaW5pdGlvbik7XG4gICAgXG4gICAgaWYgKGRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0ID0gZGVmaW5pdGlvbkZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0UnVsZU5hbWUgPSBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==