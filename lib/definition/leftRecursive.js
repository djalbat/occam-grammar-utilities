'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var definitionUtilities = require('../utilities/definition');

var leftRecursiveRuleNameFromDefinition = definitionUtilities.leftRecursiveRuleNameFromDefinition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiZGVmaW5pdGlvblV0aWxpdGllcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSIsInJ1bGVOYW1lcyIsIm1hcCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc0xlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLHNCQUFzQkMsUUFBUSx5QkFBUixDQUE1Qjs7SUFFUUMsbUMsR0FBd0NGLG1CLENBQXhDRSxtQzs7SUFFRkMsdUI7QUFDSixtQ0FBWUMsUUFBWixFQUFzQkMsVUFBdEIsRUFBa0NDLHFCQUFsQyxFQUF5RDtBQUFBOztBQUN2RCxTQUFLRixRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0Q7Ozs7K0JBRVU7QUFBRSxhQUFPLEtBQUtELFVBQUwsQ0FBZ0JFLFFBQWhCLEVBQVA7QUFBb0M7OztrQ0FFbkM7QUFDWixhQUFPLEtBQUtILFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsYUFBTyxLQUFLQyxxQkFBWjtBQUNEOzs7K0NBRTBCRSx3QixFQUEwQjtBQUNuRCxVQUFJQywyQkFBMkIsS0FBL0I7O0FBRUEsVUFBTUMsZ0NBQWlDLEtBQUtKLHFCQUFMLEtBQStCLEtBQUtGLFFBQTNFOztBQUVBLFVBQUlNLDZCQUFKLEVBQW1DO0FBQ2pDRCxtQ0FBMkIsSUFBM0I7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNRSxZQUFZSCx5QkFBeUJJLEdBQXpCLENBQTZCLFVBQUNDLHVCQUFELEVBQTZCO0FBQ3BFLGNBQU1ULFdBQVdTLHdCQUF3QkMsV0FBeEIsRUFBakI7O0FBRUEsaUJBQU9WLFFBQVA7QUFDRCxTQUpXLENBQWxCO0FBQUEsWUFLTVcseUNBQXlDSixVQUFVSyxRQUFWLENBQW1CLEtBQUtWLHFCQUF4QixDQUwvQzs7QUFPQUcsbUNBQTJCTSxzQ0FBM0IsQ0FSSyxDQVE4RDtBQUNwRTs7QUFFRCxhQUFPTix3QkFBUDtBQUNEOzs7OENBRWdDSixVLEVBQVlELFEsRUFBVTtBQUNyRCxVQUFNRSx3QkFBd0JKLG9DQUFvQ0csVUFBcEMsQ0FBOUI7QUFBQSxVQUNNUSwwQkFBMEIsSUFBSVYsdUJBQUosQ0FBNEJDLFFBQTVCLEVBQXNDQyxVQUF0QyxFQUFrREMscUJBQWxELENBRGhDOztBQUdBLGFBQU9PLHVCQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCZix1QkFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcnRzKCkgeyByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmdldFBhcnRzKCk7IH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBpc0ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVSdWxlTmFtZSA9ICh0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gdGhpcy5ydWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUnVsZU5hbWUpIHtcbiAgICAgIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlID0gcnVsZU5hbWVzSW5jbHVkZXNMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=