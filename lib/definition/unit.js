'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition,
    parts = parsers.parts,
    RuleNamePart = parts.RuleNamePart;

var UnitDefinition = function (_Definition) {
  _inherits(UnitDefinition, _Definition);

  function UnitDefinition() {
    _classCallCheck(this, UnitDefinition);

    return _possibleConstructorReturn(this, (UnitDefinition.__proto__ || Object.getPrototypeOf(UnitDefinition)).apply(this, arguments));
  }

  _createClass(UnitDefinition, [{
    key: 'getRuleName',
    value: function getRuleName() {
      var firstPart = this.getFirstPart(),
          ruleNamePart = firstPart,
          ///
      ruleName = ruleNamePart.getRuleName();

      return ruleName;
    }
  }, {
    key: 'isIncludedInRuleNames',
    value: function isIncludedInRuleNames(ruleNames) {
      var ruleName = this.getRuleName(),
          includedInRuleNames = ruleNames.includes(ruleName);

      return includedInRuleNames;
    }
  }], [{
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var noWhitespace = false,
          ///
      ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
          parts = [ruleNamePart],
          unitDefinition = new UnitDefinition(parts);

      return unitDefinition;
    }
  }, {
    key: 'fromDefinition',
    value: function fromDefinition(definition) {
      var unitDefinition = null;

      var partsLength = definition.getPartsLength();

      if (partsLength === 1) {
        var firstPartRuleNamePart = definition.isFirstPartRuleNamePart();

        if (firstPartRuleNamePart) {
          var _parts = definition.getParts();

          unitDefinition = new UnitDefinition(_parts);
        }
      }

      return unitDefinition;
    }
  }]);

  return UnitDefinition;
}(Definition);

module.exports = UnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3VuaXQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwicGFydHMiLCJSdWxlTmFtZVBhcnQiLCJVbml0RGVmaW5pdGlvbiIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZXMiLCJpbmNsdWRlZEluUnVsZU5hbWVzIiwiaW5jbHVkZXMiLCJub1doaXRlc3BhY2UiLCJ1bml0RGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImdldFBhcnRzTGVuZ3RoIiwiZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxVLEdBQXNCRixPLENBQXRCRSxVO0lBQVlDLEssR0FBVUgsTyxDQUFWRyxLO0lBQ1pDLFksR0FBaUJELEssQ0FBakJDLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsZUFBZUYsU0FEckI7QUFBQSxVQUNnQztBQUMxQkcsaUJBQVdELGFBQWFFLFdBQWIsRUFGakI7O0FBSUEsYUFBT0QsUUFBUDtBQUNEOzs7MENBRXFCRSxTLEVBQVc7QUFDL0IsVUFBTUYsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsVUFDTUUsc0JBQXNCRCxVQUFVRSxRQUFWLENBQW1CSixRQUFuQixDQUQ1Qjs7QUFHQSxhQUFPRyxtQkFBUDtBQUNEOzs7aUNBRW1CSCxRLEVBQVU7QUFDNUIsVUFBTUssZUFBZSxLQUFyQjtBQUFBLFVBQTRCO0FBQ3RCTixxQkFBZSxJQUFJSixZQUFKLENBQWlCSyxRQUFqQixFQUEyQkssWUFBM0IsQ0FEckI7QUFBQSxVQUVNWCxRQUFRLENBQ05LLFlBRE0sQ0FGZDtBQUFBLFVBS01PLGlCQUFpQixJQUFJVixjQUFKLENBQW1CRixLQUFuQixDQUx2Qjs7QUFPQSxhQUFPWSxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFJRCxpQkFBaUIsSUFBckI7O0FBRUEsVUFBTUUsY0FBY0QsV0FBV0UsY0FBWCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTUUsd0JBQXdCSCxXQUFXSSx1QkFBWCxFQUE5Qjs7QUFFQSxZQUFJRCxxQkFBSixFQUEyQjtBQUN6QixjQUFNaEIsU0FBUWEsV0FBV0ssUUFBWCxFQUFkOztBQUVBTiwyQkFBaUIsSUFBSVYsY0FBSixDQUFtQkYsTUFBbkIsQ0FBakI7QUFDRDtBQUNGOztBQUVELGFBQU9ZLGNBQVA7QUFDRDs7OztFQTNDMEJiLFU7O0FBOEM3Qm9CLE9BQU9DLE9BQVAsR0FBaUJsQixjQUFqQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24sIHBhcnRzIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSdWxlTmFtZVBhcnQgfSA9IHBhcnRzO1xuXG5jbGFzcyBVbml0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBpc0luY2x1ZGVkSW5SdWxlTmFtZXMocnVsZU5hbWVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5jbHVkZWRJblJ1bGVOYW1lcyA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJblJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBuZXcgVW5pdERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgdW5pdERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBkZWZpbml0aW9uLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICB1bml0RGVmaW5pdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb247XG4iXX0=