'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ruleUtilities = require('../utilities/rule'),
    definitionUtilities = require('../utilities/definition');

var findRuleByName = ruleUtilities.findRuleByName,
    leftRecursiveRuleNameFromDefinition = definitionUtilities.leftRecursiveRuleNameFromDefinition;

var LeftRecursiveDefinition = function () {
  function LeftRecursiveDefinition(ruleName, definition, leftRecursiveRuleName) {
    _classCallCheck(this, LeftRecursiveDefinition);

    this.ruleName = ruleName;

    this.definition = definition;

    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  _createClass(LeftRecursiveDefinition, [{
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
    key: 'getLeftRecursiveRuleName',
    value: function getLeftRecursiveRuleName() {
      return this.leftRecursiveRuleName;
    }
  }, {
    key: 'findRule',
    value: function findRule(rules) {
      var name = this.leftRecursiveRuleName,
          ///
      rule = findRuleByName(name, rules);

      return rule;
    }
  }, {
    key: 'isImmediatelyLeftRecursive',
    value: function isImmediatelyLeftRecursive(leftRecursiveDefinitions) {
      var immediatelyLeftRecursive = false;

      var leftRecursiveRuleNameRuleName = this.leftRecursiveRuleName === this.ruleName;

      if (leftRecursiveRuleNameRuleName) {
        immediatelyLeftRecursive = true;
      } else {
        var ruleNames = leftRecursiveDefinitions.map(function (leftRecursiveDefinition) {
          var ruleName = leftRecursiveDefinition.getRuleName();

          return ruleName;
        }),
            ruleNamesIncludesLeftRecursiveRuleName = ruleNames.includes(this.leftRecursiveRuleName);

        immediatelyLeftRecursive = ruleNamesIncludesLeftRecursiveRuleName; ///
      }

      return immediatelyLeftRecursive;
    }
  }], [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
          leftRecursiveDefinition = new LeftRecursiveDefinition(ruleName, definition, leftRecursiveRuleName);

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}();

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicnVsZVV0aWxpdGllcyIsInJlcXVpcmUiLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiZmluZFJ1bGVCeU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJydWxlcyIsIm5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUnVsZU5hbWUiLCJydWxlTmFtZXMiLCJtYXAiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEseUJBQVIsQ0FENUI7O0FBR00sSUFBRUUsY0FBRixHQUFxQkgsYUFBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLG1DQURGLEdBQzBDRixtQkFEMUMsQ0FDRUUsbUNBREY7O0lBR0FDLHVCO0FBQ0osbUNBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDQyxxQkFBbEMsRUFBeUQ7QUFBQTs7QUFDdkQsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsU0FBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNEOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxRQUFoQixFQUFQO0FBQW9DOzs7a0NBRW5DO0FBQ1osYUFBTyxLQUFLSCxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7K0NBRTBCO0FBQ3pCLGFBQU8sS0FBS0MscUJBQVo7QUFDRDs7OzZCQUVRRSxLLEVBQU87QUFDZCxVQUFNQyxPQUFPLEtBQUtILHFCQUFsQjtBQUFBLFVBQXlDO0FBQ25DSSxhQUFPVCxlQUFlUSxJQUFmLEVBQXFCRCxLQUFyQixDQURiOztBQUdBLGFBQU9FLElBQVA7QUFDRDs7OytDQUUwQkMsd0IsRUFBMEI7QUFDbkQsVUFBSUMsMkJBQTJCLEtBQS9COztBQUVBLFVBQU1DLGdDQUFpQyxLQUFLUCxxQkFBTCxLQUErQixLQUFLRixRQUEzRTs7QUFFQSxVQUFJUyw2QkFBSixFQUFtQztBQUNqQ0QsbUNBQTJCLElBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTUUsWUFBWUgseUJBQXlCSSxHQUF6QixDQUE2QixVQUFDQyx1QkFBRCxFQUE2QjtBQUNwRSxjQUFNWixXQUFXWSx3QkFBd0JDLFdBQXhCLEVBQWpCOztBQUVBLGlCQUFPYixRQUFQO0FBQ0QsU0FKVyxDQUFsQjtBQUFBLFlBS01jLHlDQUF5Q0osVUFBVUssUUFBVixDQUFtQixLQUFLYixxQkFBeEIsQ0FML0M7O0FBT0FNLG1DQUEyQk0sc0NBQTNCLENBUkssQ0FROEQ7QUFDcEU7O0FBRUQsYUFBT04sd0JBQVA7QUFDRDs7OzhDQUVnQ1AsVSxFQUFZRCxRLEVBQVU7QUFDckQsVUFBTUUsd0JBQXdCSixvQ0FBb0NHLFVBQXBDLENBQTlCO0FBQUEsVUFDTVcsMEJBQTBCLElBQUliLHVCQUFKLENBQTRCQyxRQUE1QixFQUFzQ0MsVUFBdEMsRUFBa0RDLHFCQUFsRCxDQURoQzs7QUFHQSxhQUFPVSx1QkFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQmxCLHVCQUFqQiIsImZpbGUiOiJsZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7IHJldHVybiB0aGlzLmRlZmluaXRpb24uZ2V0UGFydHMoKTsgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGZpbmRSdWxlKHJ1bGVzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBpc0ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUnVsZU5hbWUpIHtcbiAgICAgIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlID0gcnVsZU5hbWVzSW5jbHVkZXNMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=