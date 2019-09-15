'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var definitionUtilities = require('../utilities/definition');

var ruleNamesFromDefinition = definitionUtilities.ruleNamesFromDefinition,
    leftRecursiveRuleNameFromDefinition = definitionUtilities.leftRecursiveRuleNameFromDefinition;

var RecursiveDefinition = function () {
  function RecursiveDefinition(definition, ruleName, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    _classCallCheck(this, RecursiveDefinition);

    this.definition = definition;

    this.ruleName = ruleName;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'getLeftRecursiveRuleName',
    value: function getLeftRecursiveRuleName() {
      return this.leftRecursiveRuleName;
    }
  }, {
    key: 'getIndirectlyLeftRecursiveDefinition',
    value: function getIndirectlyLeftRecursiveDefinition() {
      return this.indirectlyLeftRecursiveDefinition;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive() {
      var leftRecursive = this.leftRecursiveRuleName !== null;

      return leftRecursive;
    }
  }, {
    key: 'isStrictlyLeftRecursive',
    value: function isStrictlyLeftRecursive() {
      var strictlyLeftRecursive = this.leftRecursiveRuleName === this.ruleName;

      return strictlyLeftRecursive;
    }
  }, {
    key: 'setIndirectlyLeftRecursiveDefinition',
    value: function setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
      this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
    }
  }], [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var recursiveDefinition = null;

      var ruleNames = ruleNamesFromDefinition(definition),
          recursiveRuleNames = ruleNames,
          ///
      recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = recursiveRuleNamesLength > 0;

      if (definitionRecursive) {
        var leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

        recursiveDefinition = new RecursiveDefinition(definition, ruleName, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}();

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJkZWZpbml0aW9uVXRpbGl0aWVzIiwicmVxdWlyZSIsInJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZSIsInN0cmljdGx5TGVmdFJlY3Vyc2l2ZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLHNCQUFzQkMsUUFBUSx5QkFBUixDQUE1Qjs7SUFFUUMsdUIsR0FBaUVGLG1CLENBQWpFRSx1QjtJQUF5QkMsbUMsR0FBd0NILG1CLENBQXhDRyxtQzs7SUFFM0JDLG1CO0FBQ0osK0JBQVlDLFVBQVosRUFBd0JDLFFBQXhCLEVBQWtDQyxrQkFBbEMsRUFBc0RDLHFCQUF0RCxFQUE2RUMsaUNBQTdFLEVBQWdIO0FBQUE7O0FBQzlHLFNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtKLFVBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzJEQUVzQztBQUNyQyxhQUFPLEtBQUtDLGlDQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUMsZ0JBQWlCLEtBQUtGLHFCQUFMLEtBQStCLElBQXREOztBQUVBLGFBQU9FLGFBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyx3QkFBeUIsS0FBS0gscUJBQUwsS0FBK0IsS0FBS0YsUUFBbkU7O0FBRUEsYUFBT0sscUJBQVA7QUFDRDs7O3lEQUVvQ0YsaUMsRUFBbUM7QUFDdEUsV0FBS0EsaUNBQUwsR0FBeUNBLGlDQUF6QztBQUNEOzs7OENBRWdDSixVLEVBQVlDLFEsRUFBVTtBQUNyRCxVQUFJTSxzQkFBc0IsSUFBMUI7O0FBRUEsVUFBTUMsWUFBWVgsd0JBQXdCRyxVQUF4QixDQUFsQjtBQUFBLFVBQ01FLHFCQUFxQk0sU0FEM0I7QUFBQSxVQUNzQztBQUNoQ0MsaUNBQTJCUCxtQkFBbUJRLE1BRnBEO0FBQUEsVUFHTUMsc0JBQXVCRiwyQkFBMkIsQ0FIeEQ7O0FBS0EsVUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsWUFBTVIsd0JBQXdCTCxvQ0FBb0NFLFVBQXBDLENBQTlCO0FBQUEsWUFDTUksb0NBQW9DLElBRDFDLENBRHVCLENBRXlCOztBQUVoREcsOEJBQXNCLElBQUlSLG1CQUFKLENBQXdCQyxVQUF4QixFQUFvQ0MsUUFBcEMsRUFBOENDLGtCQUE5QyxFQUFrRUMscUJBQWxFLEVBQXlGQyxpQ0FBekYsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPRyxtQkFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmQsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgcnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoZGVmaW5pdGlvbiwgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IHN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RyaWN0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgc2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBydWxlTmFtZXMsIC8vL1xuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==