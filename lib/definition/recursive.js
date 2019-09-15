'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var definitionUtilities = require('../utilities/definition');

var isDefinitionRecursive = definitionUtilities.isDefinitionRecursive,
    leftRecursiveRuleNameFromDefinition = definitionUtilities.leftRecursiveRuleNameFromDefinition;

var RecursiveDefinition = function () {
  function RecursiveDefinition(ruleName, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    _classCallCheck(this, RecursiveDefinition);

    this.ruleName = ruleName;
    this.definition = definition;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  _createClass(RecursiveDefinition, [{
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
      var strictlyLeftRecursive = this.ruleName === this.leftRecursiveRuleName;

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

      var definitionRecursive = isDefinitionRecursive(definition);

      if (definitionRecursive) {
        var leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

        recursiveDefinition = new RecursiveDefinition(ruleName, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}();

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJkZWZpbml0aW9uVXRpbGl0aWVzIiwicmVxdWlyZSIsImlzRGVmaW5pdGlvblJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmUiLCJzdHJpY3RseUxlZnRSZWN1cnNpdmUiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0JDLFFBQVEseUJBQVIsQ0FBNUI7O0lBRVFDLHFCLEdBQStERixtQixDQUEvREUscUI7SUFBdUJDLG1DLEdBQXdDSCxtQixDQUF4Q0csbUM7O0lBRXpCQyxtQjtBQUNKLCtCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0MscUJBQWxDLEVBQXlEQyxpQ0FBekQsRUFBNEY7QUFBQTs7QUFDMUYsU0FBS0gsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtILFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7MkRBRXNDO0FBQ3JDLGFBQU8sS0FBS0MsaUNBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxnQkFBaUIsS0FBS0YscUJBQUwsS0FBK0IsSUFBdEQ7O0FBRUEsYUFBT0UsYUFBUDtBQUNEOzs7OENBRXlCO0FBQ3hCLFVBQU1DLHdCQUF5QixLQUFLTCxRQUFMLEtBQWtCLEtBQUtFLHFCQUF0RDs7QUFFQSxhQUFPRyxxQkFBUDtBQUNEOzs7eURBRW9DRixpQyxFQUFtQztBQUN0RSxXQUFLQSxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBQ0Q7Ozs4Q0FFZ0NGLFUsRUFBWUQsUSxFQUFVO0FBQ3JELFVBQUlNLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNQyxzQkFBc0JWLHNCQUFzQkksVUFBdEIsQ0FBNUI7O0FBRUEsVUFBSU0sbUJBQUosRUFBeUI7QUFDdkIsWUFBTUwsd0JBQXdCSixvQ0FBb0NHLFVBQXBDLENBQTlCO0FBQUEsWUFDTUUsb0NBQW9DLElBRDFDLENBRHVCLENBRXlCOztBQUVoREcsOEJBQXNCLElBQUlQLG1CQUFKLENBQXdCQyxRQUF4QixFQUFrQ0MsVUFBbEMsRUFBOENDLHFCQUE5QyxFQUFxRUMsaUNBQXJFLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT0csbUJBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJWLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGlzRGVmaW5pdGlvblJlY3Vyc2l2ZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IHN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLnJ1bGVOYW1lID09PSB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RyaWN0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgc2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlID0gaXNEZWZpbml0aW9uUmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDsgLy8vXG5cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==