'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../types'),
    definitionUtilities = require('../utilities/definition'),
    RecursiveDefinition = require('../definition/recursive');

var LEFT_RECURSIVE_TYPE = types.LEFT_RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var LeftRecursiveDefinition = function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    _classCallCheck(this, LeftRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (LeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(LeftRecursiveDefinition)).call(this, type, parts, ruleName, definition, recursiveRuleNames));

    _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    return _this;
  }

  _createClass(LeftRecursiveDefinition, [{
    key: 'getLeftRecursiveRuleNames',
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }], [{
    key: 'fromRuleNameAndDefinition',
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var leftRecursiveDefinition = null;

      var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        var type = LEFT_RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

        leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(RecursiveDefinition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImdldFBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSx5QkFBUixDQUQ1QjtBQUFBLElBRU1FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUY1Qjs7QUFJTSxJQUFFRyxtQkFBRixHQUEwQkosS0FBMUIsQ0FBRUksbUJBQUY7QUFBQSxJQUNFQyxnQ0FERixHQUM2RUgsbUJBRDdFLENBQ0VHLGdDQURGO0FBQUEsSUFDb0NDLG9DQURwQyxHQUM2RUosbUJBRDdFLENBQ29DSSxvQ0FEcEM7O0lBR0FDLHVCOzs7QUFDSixtQ0FBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxVQUFuQyxFQUErQ0Msa0JBQS9DLEVBQW1FQyxzQkFBbkUsRUFBMkY7QUFBQTs7QUFBQSxrSkFDbkZMLElBRG1GLEVBQzdFQyxLQUQ2RSxFQUN0RUMsUUFEc0UsRUFDNURDLFVBRDRELEVBQ2hEQyxrQkFEZ0Q7O0FBR3pGLFVBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFIeUY7QUFJMUY7Ozs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Esc0JBQVo7QUFDRDs7OzhDQUVnQ0gsUSxFQUFVQyxVLEVBQVk7QUFDckQsVUFBSUcsMEJBQTBCLElBQTlCOztBQUVBLFVBQU1ELHlCQUF5QlAscUNBQXFDSyxVQUFyQyxDQUEvQjtBQUFBLFVBQ01JLCtCQUErQkYsdUJBQXVCRyxNQUQ1RDtBQUFBLFVBRU1DLDBCQUEyQkYsK0JBQStCLENBRmhFOztBQUlBLFVBQUlFLHVCQUFKLEVBQTZCO0FBQzNCLFlBQU1ULE9BQU9KLG1CQUFiO0FBQUEsWUFDTUssUUFBUUUsV0FBV08sUUFBWCxFQURkO0FBQUEsWUFFTU4scUJBQXFCUCxpQ0FBaUNNLFVBQWpDLENBRjNCOztBQUlBRyxrQ0FBMEIsSUFBSVAsdUJBQUosQ0FBNEJDLElBQTVCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsUUFBekMsRUFBbURDLFVBQW5ELEVBQStEQyxrQkFBL0QsRUFBbUZDLHNCQUFuRixDQUExQjtBQUNEOztBQUVELGFBQU9DLHVCQUFQO0FBQ0Q7Ozs7RUEzQm1DWCxtQjs7QUE4QnRDZ0IsT0FBT0MsT0FBUCxHQUFpQmIsdUJBQWpCIiwiZmlsZSI6ImxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpLFxuICAgICAgUmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgTEVGVF9SRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgdHlwZSA9IExFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=