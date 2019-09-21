'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    definitionUtilities = require('../utilities/definition');

var first = arrayUtilities.first,
    partTypes = parsers.partTypes,
    RuleNamePartType = partTypes.RuleNamePartType,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
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
    key: 'getFirstPart',
    value: function getFirstPart() {
      var parts = this.getParts(),
          firstPart = first(parts);

      return firstPart;
    }
  }, {
    key: 'isLookAhead',
    value: function isLookAhead() {
      var firstPart = this.getFirstPart(),
          lookAhead = firstPart.isLookAhead();

      return lookAhead;
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
    key: 'isRewritable',
    value: function isRewritable() {
      var firstPart = this.getFirstPart(),
          firstPartType = firstPart.getType(),
          firstPartTypeRuleNamePartType = firstPartType === RuleNamePartType,
          firstPartRuleNamePart = firstPartTypeRuleNamePartType,
          ///
      rewritable = firstPartRuleNamePart; ///

      return rewritable;
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
    key: 'isNonStrictlyLeftRecursive',
    value: function isNonStrictlyLeftRecursive() {
      var nonStrictlyLeftRecursive = false;

      var leftRecursive = this.isLeftRecursive();

      if (leftRecursive) {
        var strictlyLeftRecursive = this.isStrictlyLeftRecursive();

        nonStrictlyLeftRecursive = !strictlyLeftRecursive;
      }

      return nonStrictlyLeftRecursive;
    }
  }, {
    key: 'matchDefinition',
    value: function matchDefinition(definition) {
      var matches = this.definition === definition;

      return matches;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwibm9uU3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwiaXNTdHJpY3RseUxlZnRSZWN1cnNpdmUiLCJtYXRjaGVzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUQ1Qjs7QUFHTSxJQUFFRyxLQUFG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LElBRDFDLENBRHVCLENBRXlCOztBQUVoRGtCLDhCQUFzQixJQUFJdkIsbUJBQUosQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxxQkFBbEUsRUFBeUZDLGlDQUF6RixDQUF0QjtBQUNEOztBQUVELGFBQU9rQixtQkFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQjVCLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHBhcnRUeXBlcyB9ID0gcGFyc2VycyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSB9ID0gcGFydFR5cGVzLFxuICAgICAgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7IHJldHVybiB0aGlzLmRlZmluaXRpb24uZ2V0UGFydHMoKTsgfVxuXG4gIGdldEZpcnN0UGFydCAoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICByZXR1cm4gbG9va0FoZWFkO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc1Jld3JpdGFibGUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlID0gZmlyc3RQYXJ0LmdldFR5cGUoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSA9IChmaXJzdFBhcnRUeXBlID09PSBSdWxlTmFtZVBhcnRUeXBlKSxcbiAgICAgICAgICBmaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSwgIC8vL1xuICAgICAgICAgIHJld3JpdGFibGUgPSBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7IC8vL1xuXG4gICAgcmV0dXJuIHJld3JpdGFibGU7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IHN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RyaWN0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaXNOb25TdHJpY3RseUxlZnRSZWN1cnNpdmUoKSB7XG4gICAgbGV0IG5vblN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9IHRoaXMuaXNMZWZ0UmVjdXJzaXZlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3Qgc3RyaWN0bHlMZWZ0UmVjdXJzaXZlID0gdGhpcy5pc1N0cmljdGx5TGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgICBub25TdHJpY3RseUxlZnRSZWN1cnNpdmUgPSAhc3RyaWN0bHlMZWZ0UmVjdXJzaXZlO1xuICAgIH1cblxuICAgIHJldHVybiBub25TdHJpY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBtYXRjaERlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5kZWZpbml0aW9uID09PSBkZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsOyAvLy9cblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=