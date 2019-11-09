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
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var RecursiveDefinition = function () {
  function RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    _classCallCheck(this, RecursiveDefinition);

    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
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
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'getLeftRecursiveRuleNames',
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }, {
    key: 'getImplicitlyLeftRecursiveDefinition',
    value: function getImplicitlyLeftRecursiveDefinition() {
      return this.implicitlyLeftRecursiveDefinition;
    }
  }, {
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
      var leftRecursiveRuleNamesLength = this.leftRecursiveRuleNames.length,
          leftRecursive = leftRecursiveRuleNamesLength > 0;

      return leftRecursive;
    }
  }, {
    key: 'isDirectlyLeftRecursive',
    value: function isDirectlyLeftRecursive() {
      var directlyLeftRecursive = false;

      var leftRecursive = this.isLeftRecursive();

      if (leftRecursive) {
        var leftRecursiveRuleNamesIncludesRuleName = this.leftRecursiveRuleNames.includes(this.ruleName);

        directlyLeftRecursive = leftRecursiveRuleNamesIncludesRuleName; ///
      }

      return directlyLeftRecursive;
    }
  }, {
    key: 'getLeftRecursiveRuleName',
    value: function getLeftRecursiveRuleName() {
      var leftRecursiveRuleName = null;

      var leftRecursiveRuleNamesLength = this.leftRecursiveRuleNames.length;

      if (leftRecursiveRuleNamesLength > 0) {
        var firstLeftRecursiveFileName = first(this.leftRecursiveRuleNames);

        leftRecursiveRuleName = firstLeftRecursiveFileName; ///
      }

      return leftRecursiveRuleName;
    }
  }, {
    key: 'setImplicitlyLeftRecursiveDefinition',
    value: function setImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition) {
      this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
    }
  }], [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var recursiveDefinition = null;

      var recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = recursiveRuleNamesLength > 0;

      if (definitionRecursive) {
        var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
            implicitlyLeftRecursiveDefinition = null; ///

        recursiveDefinition = new RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}();

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRQYXJ0cyIsInBhcnRzIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJmaXJzdFBhcnRUeXBlIiwiZ2V0VHlwZSIsImZpcnN0UGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlIiwiZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwicmV3cml0YWJsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJsZWZ0UmVjdXJzaXZlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0TGVmdFJlY3Vyc2l2ZUZpbGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlC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QkFBc0IsSUFBMUI7O0FBRUEsVUFBTXZCLHFCQUFxQkwsaUNBQWlDSSxVQUFqQyxDQUEzQjtBQUFBLFVBQ015QiwyQkFBMkJ4QixtQkFBbUJlLE1BRHBEO0FBQUEsVUFFTVUsc0JBQXVCRCwyQkFBMkIsQ0FGeEQ7O0FBSUEsVUFBSUMsbUJBQUosRUFBeUI7QUFDdkIsWUFBTXhCLHlCQUF5QkwscUNBQXFDRyxVQUFyQyxDQUEvQjtBQUFBLFlBQ01HLG9DQUFvQyxJQUQxQyxDQUR1QixDQUV5Qjs7QUFFaERxQiw4QkFBc0IsSUFBSTFCLG1CQUFKLENBQXdCQyxRQUF4QixFQUFrQ0MsVUFBbEMsRUFBOENDLGtCQUE5QyxFQUFrRUMsc0JBQWxFLEVBQTBGQyxpQ0FBMUYsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPcUIsbUJBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUI5QixtQkFBakIiLCJmaWxlIjoicmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwYXJ0VHlwZXMgfSA9IHBhcnNlcnMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7IHJldHVybiB0aGlzLmRlZmluaXRpb24uZ2V0UGFydHMoKTsgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmaXJzdFBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBpc1Jld3JpdGFibGUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlID0gZmlyc3RQYXJ0LmdldFR5cGUoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSA9IChmaXJzdFBhcnRUeXBlID09PSBSdWxlTmFtZVBhcnRUeXBlKSxcbiAgICAgICAgICBmaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSwgIC8vL1xuICAgICAgICAgIHJld3JpdGFibGUgPSBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7IC8vL1xuXG4gICAgcmV0dXJuIHJld3JpdGFibGU7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSB0aGlzLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHRoaXMucnVsZU5hbWUpO1xuXG4gICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVGaWxlTmFtZSA9IGZpcnN0KHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZUZpbGVOYW1lOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=