'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

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

      var definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIkRlZmluaXRpb24iLCJJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxVLEdBQWVGLE8sQ0FBZkUsVTs7SUFFRkMsa0M7Ozs7Ozs7Ozs7OzhDQUM2QkMsVSxFQUFZQyxRLEVBQVU7QUFDckQsVUFBSUMscUNBQXFDLElBQXpDOztBQUVBLFVBQU1DLGtDQUFrQ0gsV0FBV0ksdUJBQVgsRUFBeEM7O0FBRUEsVUFBSUQsK0JBQUosRUFBcUM7QUFDbkMsWUFBTUUsc0JBQXNCTCxXQUFXTSxZQUFYLEVBQTVCO0FBQUEsWUFDTUMsOEJBQThCRixtQkFEcEM7QUFBQSxZQUMwRDtBQUNwREcsOENBQXNDRCw0QkFBNEJFLFdBQTVCLEVBRjVDOztBQUlBLFlBQUlELHdDQUF3Q1AsUUFBNUMsRUFBc0Q7QUFDcEQsY0FBTVMsUUFBUVYsV0FBV1csUUFBWCxFQUFkOztBQUVBVCwrQ0FBcUMsSUFBSUgsa0NBQUosQ0FBdUNXLEtBQXZDLENBQXJDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUixrQ0FBUDtBQUNEOzs7O0VBbkI4Q0osVTs7QUFzQmpEYyxPQUFPQyxPQUFQLEdBQWlCZCxrQ0FBakIiLCJmaWxlIjoiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKTtcbiAgICBcbiAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydCA9IGRlZmluaXRpb24uZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0UnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19