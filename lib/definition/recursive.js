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
    key: 'isDirectlyLeftRecursive',
    value: function isDirectlyLeftRecursive() {
      var directlyLeftRecursive = false;

      var leftRecursive = this.isLeftRecursive();

      if (leftRecursive) {
        directlyLeftRecursive = this.leftRecursiveRuleName === this.ruleName;
      }

      return directlyLeftRecursive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiaW1wbGljaXREZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJwYXJ0cyIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwiZmlyc3RQYXJ0VHlwZSIsImdldFR5cGUiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsInJld3JpdGFibGUiLCJsZWZ0UmVjdXJzaXZlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwiaXNMZWZ0UmVjdXJzaXZlIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUQ1Qjs7QUFHTSxJQUFFRyxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JMLE9BRGhCLENBQ0VLLFNBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1QkQsU0FGdkIsQ0FFRUMsZ0JBRkY7QUFBQSxJQUdFQyxnQ0FIRixHQUc0RUosbUJBSDVFLENBR0VJLGdDQUhGO0FBQUEsSUFHb0NDLG1DQUhwQyxHQUc0RUwsbUJBSDVFLENBR29DSyxtQ0FIcEM7O0lBS0FDLG1CO0FBQ0osK0JBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDQyxrQkFBbEMsRUFBc0RDLGtCQUF0RCxFQUEwRUMscUJBQTFFLEVBQWlHO0FBQUE7O0FBQy9GLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0osUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxRQUFoQixFQUFQO0FBQW9DOzs7bUNBRWxDO0FBQ2IsVUFBTUMsUUFBUSxLQUFLRCxRQUFMLEVBQWQ7QUFBQSxVQUNNRSxZQUFZYixNQUFNWSxLQUFOLENBRGxCOztBQUdBLGFBQU9DLFNBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUEsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsWUFBWUYsVUFBVUcsV0FBVixFQURsQjs7QUFHQSxhQUFPRCxTQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1GLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01HLGdCQUFnQkosVUFBVUssT0FBVixFQUR0QjtBQUFBLFVBRU1DLGdDQUFpQ0Ysa0JBQWtCZixnQkFGekQ7QUFBQSxVQUdNa0Isd0JBQXdCRCw2QkFIOUI7QUFBQSxVQUc4RDtBQUN4REUsbUJBQWFELHFCQUpuQixDQURhLENBSzZCOztBQUUxQyxhQUFPQyxVQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUMsZ0JBQWlCLEtBQUtaLHFCQUFMLEtBQStCLElBQXREOztBQUVBLGFBQU9ZLGFBQVA7QUFDRDs7OzhDQUV5QjtBQUN4QixVQUFJQyx3QkFBd0IsS0FBNUI7O0FBRUEsVUFBTUQsZ0JBQWdCLEtBQUtFLGVBQUwsRUFBdEI7O0FBRUEsVUFBSUYsYUFBSixFQUFtQjtBQUNqQkMsZ0NBQXlCLEtBQUtiLHFCQUFMLEtBQStCLEtBQUtKLFFBQTdEO0FBQ0Q7O0FBRUQsYUFBT2lCLHFCQUFQO0FBQ0Q7OzswQ0FFcUJmLGtCLEVBQW9CO0FBQ3hDLFdBQUtBLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OzhDQUVnQ0QsVSxFQUFZRCxRLEVBQVU7QUFDckQsVUFBSW1CLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNaEIscUJBQXFCTixpQ0FBaUNJLFVBQWpDLENBQTNCO0FBQUEsVUFDTW1CLDJCQUEyQmpCLG1CQUFtQmtCLE1BRHBEO0FBQUEsVUFFTUMsc0JBQXVCRiwyQkFBMkIsQ0FGeEQ7O0FBSUEsVUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsWUFBTWxCLHdCQUF3Qk4sb0NBQW9DRyxVQUFwQyxDQUE5QjtBQUFBLFlBQ01DLHFCQUFxQixJQUQzQixDQUR1QixDQUVVOztBQUVqQ2lCLDhCQUFzQixJQUFJcEIsbUJBQUosQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4Q0Msa0JBQTlDLEVBQWtFQyxrQkFBbEUsRUFBc0ZDLHFCQUF0RixDQUF0QjtBQUNEOztBQUVELGFBQU9lLG1CQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCekIsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFydFR5cGVzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBpbXBsaWNpdERlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgdGhpcy5pbXBsaWNpdERlZmluaXRpb24gPSBpbXBsaWNpdERlZmluaXRpb247XG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdERlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcnRzKCkgeyByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmdldFBhcnRzKCk7IH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICByZXR1cm4gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNSZXdyaXRhYmxlKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZSA9IGZpcnN0UGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUgPSAoZmlyc3RQYXJ0VHlwZSA9PT0gUnVsZU5hbWVQYXJ0VHlwZSksXG4gICAgICAgICAgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUsICAvLy9cbiAgICAgICAgICByZXdyaXRhYmxlID0gZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0OyAvLy9cblxuICAgIHJldHVybiByZXdyaXRhYmxlO1xuICB9XG5cbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBpc0RpcmVjdGx5TGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gdGhpcy5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmUgPSAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IHRoaXMucnVsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBzZXRJbXBsaWNpdERlZmluaXRpb24oaW1wbGljaXREZWZpbml0aW9uKSB7XG4gICAgdGhpcy5pbXBsaWNpdERlZmluaXRpb24gPSBpbXBsaWNpdERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGltcGxpY2l0RGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24sIGltcGxpY2l0RGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==