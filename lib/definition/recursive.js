'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var definitionUtilities = require('../utilities/definition');

var recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNameFromDefinition = definitionUtilities.leftRecursiveRuleNameFromDefinition;

var RecursiveDefinition = function () {
  function RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    _classCallCheck(this, RecursiveDefinition);

    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getParts',
    value: function getParts() {
      return this.definition.getParts();
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

      var recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = recursiveRuleNamesLength > 0;

      if (definitionRecursive) {
        var leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

        recursiveDefinition = new RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}();

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJkZWZpbml0aW9uVXRpbGl0aWVzIiwicmVxdWlyZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCQyxRQUFRLHlCQUFSLENBQTVCOztJQUVRQyxnQyxHQUEwRUYsbUIsQ0FBMUVFLGdDO0lBQWtDQyxtQyxHQUF3Q0gsbUIsQ0FBeENHLG1DOztJQUVwQ0MsbUI7QUFDSiwrQkFBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0NDLGtCQUFsQyxFQUFzREMscUJBQXRELEVBQTZFQyxpQ0FBN0UsRUFBZ0g7QUFBQTs7QUFDOUcsU0FBS0osUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsU0FBS0MsaUNBQUwsR0FBeUNBLGlDQUF6QztBQUNEOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxRQUFoQixFQUFQO0FBQW9DOzs7a0NBRW5DO0FBQ1osYUFBTyxLQUFLTCxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHFCQUFaO0FBQ0Q7OzsyREFFc0M7QUFDckMsYUFBTyxLQUFLQyxpQ0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1FLGdCQUFpQixLQUFLSCxxQkFBTCxLQUErQixJQUF0RDs7QUFFQSxhQUFPRyxhQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTUMsd0JBQXlCLEtBQUtKLHFCQUFMLEtBQStCLEtBQUtILFFBQW5FOztBQUVBLGFBQU9PLHFCQUFQO0FBQ0Q7Ozt5REFFb0NILGlDLEVBQW1DO0FBQ3RFLFdBQUtBLGlDQUFMLEdBQXlDQSxpQ0FBekM7QUFDRDs7OzhDQUVnQ0gsVSxFQUFZRCxRLEVBQVU7QUFDckQsVUFBSVEsc0JBQXNCLElBQTFCOztBQUVBLFVBQU1OLHFCQUFxQkwsaUNBQWlDSSxVQUFqQyxDQUEzQjtBQUFBLFVBQ01RLDJCQUEyQlAsbUJBQW1CUSxNQURwRDtBQUFBLFVBRU1DLHNCQUF1QkYsMkJBQTJCLENBRnhEOztBQUlBLFVBQUlFLG1CQUFKLEVBQXlCO0FBQ3ZCLFlBQU1SLHdCQUF3Qkwsb0NBQW9DRyxVQUFwQyxDQUE5QjtBQUFBLFlBQ01HLG9DQUFvQyxJQUQxQyxDQUR1QixDQUV5Qjs7QUFFaERJLDhCQUFzQixJQUFJVCxtQkFBSixDQUF3QkMsUUFBeEIsRUFBa0NDLFVBQWxDLEVBQThDQyxrQkFBOUMsRUFBa0VDLHFCQUFsRSxFQUF5RkMsaUNBQXpGLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT0ksbUJBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJkLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRQYXJ0cygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5nZXRQYXJ0cygpOyB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IHN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RyaWN0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgc2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsOyAvLy9cblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=