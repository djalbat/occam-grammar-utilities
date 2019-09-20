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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwibWF0Y2hlcyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ2dCTCxPQURoQixDQUNFSyxTQURGO0FBQUEsSUFFRUMsZ0JBRkYsR0FFdUJELFNBRnZCLENBRUVDLGdCQUZGO0FBQUEsSUFHRUMsZ0NBSEYsR0FHNEVKLG1CQUg1RSxDQUdFSSxnQ0FIRjtBQUFBLElBR29DQyxtQ0FIcEMsR0FHNEVMLG1CQUg1RSxDQUdvQ0ssbUNBSHBDOztJQUtBQyxtQjtBQUNKLCtCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0Msa0JBQWxDLEVBQXNEQyxxQkFBdEQsRUFBNkVDLGlDQUE3RSxFQUFnSDtBQUFBOztBQUM5RyxTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBQ0Q7Ozs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JJLFFBQWhCLEVBQVA7QUFBb0M7OzttQ0FFakM7QUFDZCxVQUFNQyxRQUFRLEtBQUtELFFBQUwsRUFBZDtBQUFBLFVBQ01FLFlBQVliLE1BQU1ZLEtBQU4sQ0FEbEI7O0FBR0EsYUFBT0MsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQSxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxZQUFZRixVQUFVRyxXQUFWLEVBRGxCOztBQUdBLGFBQU9ELFNBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLVCxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHFCQUFaO0FBQ0Q7OzsyREFFc0M7QUFDckMsYUFBTyxLQUFLQyxpQ0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNRyxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNRyxnQkFBZ0JKLFVBQVVLLE9BQVYsRUFEdEI7QUFBQSxVQUVNQyxnQ0FBaUNGLGtCQUFrQmYsZ0JBRnpEO0FBQUEsVUFHTWtCLHdCQUF3QkQsNkJBSDlCO0FBQUEsVUFHOEQ7QUFDeERFLG1CQUFhRCxxQkFKbkIsQ0FEYSxDQUs2Qjs7QUFFMUMsYUFBT0MsVUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLGdCQUFpQixLQUFLYixxQkFBTCxLQUErQixJQUF0RDs7QUFFQSxhQUFPYSxhQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTUMsd0JBQXlCLEtBQUtkLHFCQUFMLEtBQStCLEtBQUtILFFBQW5FOztBQUVBLGFBQU9pQixxQkFBUDtBQUNEOzs7b0NBRWVoQixVLEVBQVk7QUFDMUIsVUFBTWlCLFVBQVcsS0FBS2pCLFVBQUwsS0FBb0JBLFVBQXJDOztBQUVBLGFBQU9pQixPQUFQO0FBQ0Q7Ozt5REFFb0NkLGlDLEVBQW1DO0FBQ3RFLFdBQUtBLGlDQUFMLEdBQXlDQSxpQ0FBekM7QUFDRDs7OzhDQUVnQ0gsVSxFQUFZRCxRLEVBQVU7QUFDckQsVUFBSW1CLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNakIscUJBQXFCTCxpQ0FBaUNJLFVBQWpDLENBQTNCO0FBQUEsVUFDTW1CLDJCQUEyQmxCLG1CQUFtQm1CLE1BRHBEO0FBQUEsVUFFTUMsc0JBQXVCRiwyQkFBMkIsQ0FGeEQ7O0FBSUEsVUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsWUFBTW5CLHdCQUF3Qkwsb0NBQW9DRyxVQUFwQyxDQUE5QjtBQUFBLFlBQ01HLG9DQUFvQyxJQUQxQyxDQUR1QixDQUV5Qjs7QUFFaERlLDhCQUFzQixJQUFJcEIsbUJBQUosQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxxQkFBbEUsRUFBeUZDLGlDQUF6RixDQUF0QjtBQUNEOztBQUVELGFBQU9lLG1CQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCekIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFydFR5cGVzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRQYXJ0cygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5nZXRQYXJ0cygpOyB9XG5cbiAgZ2V0Rmlyc3RQYXJ0ICgpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmaXJzdFBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzUmV3cml0YWJsZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIGZpcnN0UGFydFR5cGUgPSBmaXJzdFBhcnQuZ2V0VHlwZSgpLFxuICAgICAgICAgIGZpcnN0UGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlID0gKGZpcnN0UGFydFR5cGUgPT09IFJ1bGVOYW1lUGFydFR5cGUpLFxuICAgICAgICAgIGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGZpcnN0UGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlLCAgLy8vXG4gICAgICAgICAgcmV3cml0YWJsZSA9IGZpcnN0UGFydFJ1bGVOYW1lUGFydDsgLy8vXG5cbiAgICByZXR1cm4gcmV3cml0YWJsZTtcbiAgfVxuXG4gIGlzTGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaXNTdHJpY3RseUxlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3Qgc3RyaWN0bHlMZWZ0UmVjdXJzaXZlID0gKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSB0aGlzLnJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdHJpY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBtYXRjaERlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodGhpcy5kZWZpbml0aW9uID09PSBkZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHRoaXMuaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsOyAvLy9cblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=