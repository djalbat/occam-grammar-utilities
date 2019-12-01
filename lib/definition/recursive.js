'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    ruleUtilities = require('../utilities/rule'),
    definitionUtilities = require('../utilities/definition');

var findRule = ruleUtilities.findRule,
    Definition = parsers.Definition,
    RECURSIVE_TYPE = types.RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
    _classCallCheck(this, RecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).call(this, parts));

    _this.type = type;

    _this.ruleName = ruleName;

    _this.definition = definition;

    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'replace',
    value: function replace(rules) {
      var rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition,
          replacementDefinition = this; ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);
    }
  }], [{
    key: 'fromRuleNameAndDefinition',
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var recursiveDefinition = null;

      var type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = recursiveRuleNamesLength > 0;

      if (definitionRecursiveDefinition) {
        recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwicnVsZVV0aWxpdGllcyIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJmaW5kUnVsZSIsIkRlZmluaXRpb24iLCJSRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVzIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01FLGdCQUFnQkYsUUFBUSxtQkFBUixDQUR0QjtBQUFBLElBRU1HLHNCQUFzQkgsUUFBUSx5QkFBUixDQUY1Qjs7QUFJTSxJQUFFSSxRQUFGLEdBQWVGLGFBQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJOLE9BRGpCLENBQ0VNLFVBREY7QUFBQSxJQUVFQyxjQUZGLEdBRXFCTCxLQUZyQixDQUVFSyxjQUZGO0FBQUEsSUFHRUMsZ0NBSEYsR0FHdUNKLG1CQUh2QyxDQUdFSSxnQ0FIRjs7SUFLQUMsbUI7OztBQUNKLCtCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxrQkFBL0MsRUFBbUU7QUFBQTs7QUFBQSwwSUFDM0RILEtBRDJEOztBQUdqRSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQVRpRTtBQVVsRTs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0osSUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTztBQUNiLFVBQU1DLE9BQU9YLFNBQVMsS0FBS08sUUFBZCxFQUF3QkcsS0FBeEIsQ0FBYjtBQUFBLFVBQ01FLHFCQUFxQixLQUFLSixVQURoQztBQUFBLFVBRU1LLHdCQUF3QixJQUY5QixDQURhLENBR3VCOztBQUVwQ0YsV0FBS0csaUJBQUwsQ0FBdUJGLGtCQUF2QixFQUEyQ0MscUJBQTNDO0FBQ0Q7Ozs4Q0FFZ0NOLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlPLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNVixPQUFPSCxjQUFiO0FBQUEsVUFDTUksUUFBUUUsV0FBV1EsUUFBWCxFQURkO0FBQUEsVUFFTVAscUJBQXFCTixpQ0FBaUNLLFVBQWpDLENBRjNCO0FBQUEsVUFHTVMsMkJBQTJCUixtQkFBbUJTLE1BSHBEO0FBQUEsVUFJTUMsZ0NBQWlDRiwyQkFBMkIsQ0FKbEU7O0FBTUEsVUFBSUUsNkJBQUosRUFBbUM7QUFDakNKLDhCQUFzQixJQUFJWCxtQkFBSixDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRDLGtCQUEzRCxDQUF0QjtBQUNEOztBQUVELGFBQU9NLG1CQUFQO0FBQ0Q7Ozs7RUFuRCtCZCxVOztBQXNEbENtQixPQUFPQyxPQUFQLEdBQWlCakIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKTtcblxuY29uc3QgeyBmaW5kUnVsZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICByZXBsYWNlKHJ1bGVzKSB7XG4gICAgY29uc3QgcnVsZSA9IGZpbmRSdWxlKHRoaXMucnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb24sXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19