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
      var leftRecursive = this.leftRecursiveRuleName !== null;

      return leftRecursive;
    }
  }, {
    key: 'isStrictlyLeftRecursive',
    value: function isStrictlyLeftRecursive() {
      var strictlyLeftRecursive = false;

      var leftRecursive = this.isLeftRecursive();

      if (leftRecursive) {
        strictlyLeftRecursive = this.leftRecursiveRuleName === this.ruleName;
      }

      return strictlyLeftRecursive;
    }
  }, {
    key: 'isNonStrictlyLeftRecursive',
    value: function isNonStrictlyLeftRecursive() {
      var nonStrictlyLeftRecursive = false;

      var leftRecursive = this.isLeftRecursive();

      if (leftRecursive) {
        nonStrictlyLeftRecursive = this.leftRecursiveRuleName !== this.ruleName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibm9uU3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwibWF0Y2hlcyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFB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Qkwsb0NBQW9DRyxVQUFwQyxDQUE5QjtBQUFBLFlBQ01HLG9DQUFvQyxJQUQxQyxDQUR1QixDQUV5Qjs7QUFFaERpQiw4QkFBc0IsSUFBSXRCLG1CQUFKLENBQXdCQyxRQUF4QixFQUFrQ0MsVUFBbEMsRUFBOENDLGtCQUE5QyxFQUFrRUMscUJBQWxFLEVBQXlGQyxpQ0FBekYsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPaUIsbUJBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUIzQixtQkFBakIiLCJmaWxlIjoicmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwYXJ0VHlwZXMgfSA9IHBhcnNlcnMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgICB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7IHJldHVybiB0aGlzLmRlZmluaXRpb24uZ2V0UGFydHMoKTsgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmaXJzdFBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBpc1Jld3JpdGFibGUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlID0gZmlyc3RQYXJ0LmdldFR5cGUoKSxcbiAgICAgICAgICBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSA9IChmaXJzdFBhcnRUeXBlID09PSBSdWxlTmFtZVBhcnRUeXBlKSxcbiAgICAgICAgICBmaXJzdFBhcnRSdWxlTmFtZVBhcnQgPSBmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSwgIC8vL1xuICAgICAgICAgIHJld3JpdGFibGUgPSBmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7IC8vL1xuXG4gICAgcmV0dXJuIHJld3JpdGFibGU7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGxldCBzdHJpY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSB0aGlzLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIHN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmljdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzTm9uU3RyaWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGxldCBub25TdHJpY3RseUxlZnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSB0aGlzLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIG5vblN0cmljdGx5TGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gdGhpcy5ydWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblN0cmljdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIG1hdGNoRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLmRlZmluaXRpb24gPT09IGRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzZXRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==