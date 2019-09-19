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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwic3RyaWN0bHlMZWZ0UmVjdXJzaXZlIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUQ1Qjs7QUFHTSxJQUFFRyxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JMLE9BRGhCLENBQ0VLLFNBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1QkQsU0FGdkIsQ0FFRUMsZ0JBRkY7QUFBQSxJQUdFQyxnQ0FIRixHQUc0RUosbUJBSDVFLENBR0VJLGdDQUhGO0FBQUEsSUFHb0NDLG1DQUhwQyxHQUc0RUwsbUJBSDVFLENBR29DSyxtQ0FIcEM7O0lBS0FDLG1CO0FBQ0osK0JBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDQyxrQkFBbEMsRUFBc0RDLHFCQUF0RCxFQUE2RUMsaUNBQTdFLEVBQWdIO0FBQUE7O0FBQzlHLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLGlDQUFMLEdBQXlDQSxpQ0FBekM7QUFDRDs7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQkksUUFBaEIsRUFBUDtBQUFvQzs7O21DQUVqQztBQUNkLFVBQU1DLFFBQVEsS0FBS0QsUUFBTCxFQUFkO0FBQUEsVUFDTUUsWUFBWWIsTUFBTVksS0FBTixDQURsQjs7QUFHQSxhQUFPQyxTQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1BLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLFlBQVlGLFVBQVVHLFdBQVYsRUFEbEI7O0FBR0EsYUFBT0QsU0FBUDtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtULFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzJEQUVzQztBQUNyQyxhQUFPLEtBQUtDLGlDQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1HLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01HLGdCQUFnQkosVUFBVUssT0FBVixFQUR0QjtBQUFBLFVBRU1DLGdDQUFpQ0Ysa0JBQWtCZixnQkFGekQ7QUFBQSxVQUdNa0Isd0JBQXdCRCw2QkFIOUI7QUFBQSxVQUc4RDtBQUN4REUsbUJBQWFELHFCQUpuQixDQURhLENBSzZCOztBQUUxQyxhQUFPQyxVQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUMsZ0JBQWlCLEtBQUtiLHFCQUFMLEtBQStCLElBQXREOztBQUVBLGFBQU9hLGFBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFNQyx3QkFBeUIsS0FBS2QscUJBQUwsS0FBK0IsS0FBS0gsUUFBbkU7O0FBRUEsYUFBT2lCLHFCQUFQO0FBQ0Q7Ozt5REFFb0NiLGlDLEVBQW1DO0FBQ3RFLFdBQUtBLGlDQUFMLEdBQXlDQSxpQ0FBekM7QUFDRDs7OzhDQUVnQ0gsVSxFQUFZRCxRLEVBQVU7QUFDckQsVUFBSWtCLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNaEIscUJBQXFCTCxpQ0FBaUNJLFVBQWpDLENBQTNCO0FBQUEsVUFDTWtCLDJCQUEyQmpCLG1CQUFtQmtCLE1BRHBEO0FBQUEsVUFFTUMsc0JBQXVCRiwyQkFBMkIsQ0FGeEQ7O0FBSUEsVUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsWUFBTWxCLHdCQUF3Qkwsb0NBQW9DRyxVQUFwQyxDQUE5QjtBQUFBLFlBQ01HLG9DQUFvQyxJQUQxQyxDQUR1QixDQUV5Qjs7QUFFaERjLDhCQUFzQixJQUFJbkIsbUJBQUosQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxxQkFBbEUsRUFBeUZDLGlDQUF6RixDQUF0QjtBQUNEOztBQUVELGFBQU9jLG1CQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCeEIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFydFR5cGVzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRQYXJ0cygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5nZXRQYXJ0cygpOyB9XG5cbiAgZ2V0Rmlyc3RQYXJ0ICgpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmaXJzdFBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzUmV3cml0YWJsZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIGZpcnN0UGFydFR5cGUgPSBmaXJzdFBhcnQuZ2V0VHlwZSgpLFxuICAgICAgICAgIGZpcnN0UGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlID0gKGZpcnN0UGFydFR5cGUgPT09IFJ1bGVOYW1lUGFydFR5cGUpLFxuICAgICAgICAgIGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGZpcnN0UGFydFR5cGVSdWxlTmFtZVBhcnRUeXBlLCAgLy8vXG4gICAgICAgICAgcmV3cml0YWJsZSA9IGZpcnN0UGFydFJ1bGVOYW1lUGFydDsgLy8vXG5cbiAgICByZXR1cm4gcmV3cml0YWJsZTtcbiAgfVxuXG4gIGlzTGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaXNTdHJpY3RseUxlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3Qgc3RyaWN0bHlMZWZ0UmVjdXJzaXZlID0gKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSB0aGlzLnJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdHJpY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBzZXRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==