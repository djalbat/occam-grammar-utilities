'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    definitionUtilities = require('../utilities/definition');

var first = arrayUtilities.first,
    partTypes = parsers.partTypes,
    RuleNamePartType = partTypes.RuleNamePartType,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType,
    ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
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
    key: 'isUnary',
    value: function isUnary() {
      var unary = false;

      var parts = this.getParts(),
          partsLength = parts.length;

      if (partsLength === 1) {
        var firstPart = this.getFirstPart(),
            firstPartType = firstPart.getType(),
            firstPartTypeGroupOfPartsPartType = firstPartType === GroupOfPartsPartType,
            firstPartTypeChoiceOfPartsPartType = firstPartType === ChoiceOfPartsPartType,
            firstPartGroupOfPartsPart = firstPartTypeGroupOfPartsPartType,
            ///
        firstPartChoiceOfPartsPart = firstPartTypeChoiceOfPartsPartType; ///

        unary = !firstPartGroupOfPartsPart && !firstPartChoiceOfPartsPart;
      }

      return unary;
    }
  }, {
    key: 'isComplex',
    value: function isComplex() {
      var firstPart = this.getFirstPart(),
          firstPartType = firstPart.getType(),
          firstPartTypeRuleNamePartType = firstPartType === RuleNamePartType,
          firstPartRuleNamePart = firstPartTypeRuleNamePartType,
          complex = !firstPartRuleNamePart;

      return complex;
    }
  }, {
    key: 'isNonRewritable',
    value: function isNonRewritable() {
      var unary = this.isUnary(),
          complex = this.isComplex(),
          nonRewritable = unary || complex;

      return nonRewritable;
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
      var leftRecursiveRuleName = this.getLeftRecursiveRuleName(),
          directlyLeftRecursive = this.ruleName === leftRecursiveRuleName;

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
  }, {
    key: 'asString',
    value: function asString() {
      return this.definition.asString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsImZpcnN0IiwicGFydFR5cGVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsIkdyb3VwT2ZQYXJ0c1BhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwicGFydHMiLCJmaXJzdFBhcnQiLCJnZXRGaXJzdFBhcnQiLCJsb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInVuYXJ5IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnRUeXBlIiwiZ2V0VHlwZSIsImZpcnN0UGFydFR5cGVHcm91cE9mUGFydHNQYXJ0VHlwZSIsImZpcnN0UGFydFR5cGVDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJmaXJzdFBhcnRHcm91cE9mUGFydHNQYXJ0IiwiZmlyc3RQYXJ0Q2hvaWNlT2ZQYXJ0c1BhcnQiLCJmaXJzdFBhcnRUeXBlUnVsZU5hbWVQYXJ0VHlwZSIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImNvbXBsZXgiLCJpc1VuYXJ5IiwiaXNDb21wbGV4Iiwibm9uUmV3cml0YWJsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlIiwiZmlyc3RMZWZ0UmVjdXJzaXZlRmlsZU5hbWUiLCJhc1N0cmluZyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ2dCTCxPQURoQixDQUNFSyxTQURGO0FBQUEsSUFFRUMsZ0JBRkYsR0FJNEJELFNBSjVCLENBRUVDLGdCQUZGO0FBQUEsSUFHRUMsb0JBSEYsR0FJNEJGLFNBSjVCLENBR0VFLG9CQUhGO0FBQUEsSUFJRUMscUJBSkYsR0FJNEJILFNBSjVCLENBSUVHLHFCQUpGO0FBQUEsSUFLRUMsZ0NBTEYsR0FLNkVOLG1CQUw3RSxDQUtFTSxnQ0FMRjtBQUFBLElBS29DQyxvQ0FMcEMsR0FLNkVQLG1CQUw3RSxDQUtvQ08sb0NBTHBDOztJQU9BQyxtQjtBQUNKLCtCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQ0Msa0JBQWxDLEVBQXNEQyxzQkFBdEQsRUFBOEVDLGlDQUE5RSxFQUFpSDtBQUFBOztBQUMvRyxTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLFNBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFDQSxTQUFLQyxpQ0FBTCxHQUF5Q0EsaUNBQXpDO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtKLFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFL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LFlBQU1oQyx5QkFBeUJMLHFDQUFxQ0csVUFBckMsQ0FBL0I7QUFBQSxZQUNNRyxvQ0FBb0MsSUFEMUMsQ0FEdUIsQ0FFeUI7O0FBRWhENkIsOEJBQXNCLElBQUlsQyxtQkFBSixDQUF3QkMsUUFBeEIsRUFBa0NDLFVBQWxDLEVBQThDQyxrQkFBOUMsRUFBa0VDLHNCQUFsRSxFQUEwRkMsaUNBQTFGLENBQXRCO0FBQ0Q7O0FBRUQsYUFBTzZCLG1CQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCdEMsbUJBQWpCIiwiZmlsZSI6InJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFydFR5cGVzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnRUeXBlLFxuICAgICAgICBHcm91cE9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFBhcnRzKCkgeyByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmdldFBhcnRzKCk7IH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmdldFBhcnRzKCksXG4gICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmlyc3RQYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICByZXR1cm4gbG9va0FoZWFkO1xuICB9XG5cbiAgaXNVbmFyeSgpIHtcbiAgICBsZXQgdW5hcnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRQYXJ0cygpLFxuICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgICAgZmlyc3RQYXJ0VHlwZSA9IGZpcnN0UGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgICBmaXJzdFBhcnRUeXBlR3JvdXBPZlBhcnRzUGFydFR5cGUgPSAoZmlyc3RQYXJ0VHlwZSA9PT0gR3JvdXBPZlBhcnRzUGFydFR5cGUpLFxuICAgICAgICAgICAgZmlyc3RQYXJ0VHlwZUNob2ljZU9mUGFydHNQYXJ0VHlwZSA9IChmaXJzdFBhcnRUeXBlID09PSBDaG9pY2VPZlBhcnRzUGFydFR5cGUpLFxuICAgICAgICAgICAgZmlyc3RQYXJ0R3JvdXBPZlBhcnRzUGFydCA9IGZpcnN0UGFydFR5cGVHcm91cE9mUGFydHNQYXJ0VHlwZSwgIC8vL1xuICAgICAgICAgICAgZmlyc3RQYXJ0Q2hvaWNlT2ZQYXJ0c1BhcnQgPSBmaXJzdFBhcnRUeXBlQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOyAgLy8vXG5cbiAgICAgIHVuYXJ5ID0gIWZpcnN0UGFydEdyb3VwT2ZQYXJ0c1BhcnQgJiYgIWZpcnN0UGFydENob2ljZU9mUGFydHNQYXJ0XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuYXJ5O1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZSA9IGZpcnN0UGFydC5nZXRUeXBlKCksXG4gICAgICAgICAgZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUgPSAoZmlyc3RQYXJ0VHlwZSA9PT0gUnVsZU5hbWVQYXJ0VHlwZSksXG4gICAgICAgICAgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0VHlwZVJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgICAgY29tcGxleCA9ICFmaXJzdFBhcnRSdWxlTmFtZVBhcnQ7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uUmV3cml0YWJsZSgpIHtcbiAgICBjb25zdCB1bmFyeSA9IHRoaXMuaXNVbmFyeSgpLFxuICAgICAgICAgIGNvbXBsZXggPSB0aGlzLmlzQ29tcGxleCgpLFxuICAgICAgICAgIG5vblJld3JpdGFibGUgPSB1bmFyeSB8fCBjb21wbGV4O1xuXG4gICAgcmV0dXJuIG5vblJld3JpdGFibGU7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzRGlyZWN0bHlMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlID0gKHRoaXMucnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGg7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZUZpbGVOYW1lID0gZmlyc3QodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlRmlsZU5hbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBzZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBhc1N0cmluZygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5hc1N0cmluZygpOyB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmUgPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7IC8vL1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=