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
  function RecursiveDefinition(ruleName, definition, implicitDefinition, recursiveRuleNames, leftRecursiveRuleName) {
    _classCallCheck(this, RecursiveDefinition);

    this.ruleName = ruleName;
    this.definition = definition;
    this.implicitDefinition = implicitDefinition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
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
    key: 'getImplicitDefinition',
    value: function getImplicitDefinition() {
      return this.implicitDefinition;
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
    key: 'setImplicitDefinition',
    value: function setImplicitDefinition(implicitDefinition) {
      this.implicitDefinition = implicitDefinition;
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
            implicitDefinition = null; ///

        recursiveDefinition = new RecursiveDefinition(ruleName, definition, implicitDefinition, recursiveRuleNames, leftRecursiveRuleName);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}();

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiaW1wbGljaXREZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwibm9uU3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwibWF0Y2hlcyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdB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LENBQTlCO0FBQUEsWUFDTUMscUJBQXFCLElBRDNCLENBRHVCLENBRVU7O0FBRWpDbUIsOEJBQXNCLElBQUl0QixtQkFBSixDQUF3QkMsUUFBeEIsRUFBa0NDLFVBQWxDLEVBQThDQyxrQkFBOUMsRUFBa0VDLGtCQUFsRSxFQUFzRkMscUJBQXRGLENBQXRCO0FBQ0Q7O0FBRUQsYUFBT2lCLG1CQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCM0IsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFydFR5cGVzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBpbXBsaWNpdERlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgdGhpcy5pbXBsaWNpdERlZmluaXRpb24gPSBpbXBsaWNpdERlZmluaXRpb247XG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdERlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcnRzKCkgeyByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmdldFBhcnRzKCk7IH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICByZXR1cm4gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNSZXdyaXRhYmxlKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZSA9IGZpcnN0UGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUgPSAoZmlyc3RQYXJ0VHlwZSA9PT0gUnVsZU5hbWVQYXJ0VHlwZSksXG4gICAgICAgICAgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUsICAvLy9cbiAgICAgICAgICByZXdyaXRhYmxlID0gZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0OyAvLy9cblxuICAgIHJldHVybiByZXdyaXRhYmxlO1xuICB9XG5cbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBpc1N0cmljdGx5TGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBsZXQgc3RyaWN0bHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gdGhpcy5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBzdHJpY3RseUxlZnRSZWN1cnNpdmUgPSAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IHRoaXMucnVsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBpc05vblN0cmljdGx5TGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBsZXQgbm9uU3RyaWN0bHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gdGhpcy5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBub25TdHJpY3RseUxlZnRSZWN1cnNpdmUgPSAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgIT09IHRoaXMucnVsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBub25TdHJpY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBtYXRjaERlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5kZWZpbml0aW9uID09PSBkZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2V0SW1wbGljaXREZWZpbml0aW9uKGltcGxpY2l0RGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW1wbGljaXREZWZpbml0aW9uID0gaW1wbGljaXREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBpbXBsaWNpdERlZmluaXRpb24gPSBudWxsOyAvLy9cblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBpbXBsaWNpdERlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=