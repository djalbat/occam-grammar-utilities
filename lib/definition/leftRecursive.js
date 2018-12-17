'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

var LeftRecursiveDefinition = function (_Definition) {
  _inherits(LeftRecursiveDefinition, _Definition);

  function LeftRecursiveDefinition() {
    _classCallCheck(this, LeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (LeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(LeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(LeftRecursiveDefinition, null, [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var leftRecursiveDefinition = null;

      var definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

      if (definitionFirstPartRuleNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,
            ///
        definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName();

        if (definitionFirstRuleNamePartRuleName === ruleName) {
          var parts = definition.getParts();

          leftRecursiveDefinition = new LeftRecursiveDefinition(parts);
        }
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(Definition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25GaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJpc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImRlZmluaXRpb25GaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxVLEdBQWVGLE8sQ0FBZkUsVTs7SUFFRkMsdUI7Ozs7Ozs7Ozs7OzhDQUM2QkMsVSxFQUFZQyxRLEVBQVU7QUFDckQsVUFBSUMsMEJBQTBCLElBQTlCOztBQUVBLFVBQU1DLGtDQUFrQ0gsV0FBV0ksdUJBQVgsRUFBeEM7O0FBRUEsVUFBSUQsK0JBQUosRUFBcUM7QUFDbkMsWUFBTUUsc0JBQXNCTCxXQUFXTSxZQUFYLEVBQTVCO0FBQUEsWUFDTUMsOEJBQThCRixtQkFEcEM7QUFBQSxZQUMwRDtBQUNwREcsOENBQXNDRCw0QkFBNEJFLFdBQTVCLEVBRjVDOztBQUlBLFlBQUlELHdDQUF3Q1AsUUFBNUMsRUFBc0Q7QUFDcEQsY0FBTVMsUUFBUVYsV0FBV1csUUFBWCxFQUFkOztBQUVBVCxvQ0FBMEIsSUFBSUgsdUJBQUosQ0FBNEJXLEtBQTVCLENBQTFCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUix1QkFBUDtBQUNEOzs7O0VBbkJtQ0osVTs7QUFzQnRDYyxPQUFPQyxPQUFQLEdBQWlCZCx1QkFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKTtcbiAgICBcbiAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UGFydCA9IGRlZmluaXRpb24uZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnQgPSBkZWZpbml0aW9uRmlyc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgICBkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9IGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpO1xuICAgICAgXG4gICAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0UnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==