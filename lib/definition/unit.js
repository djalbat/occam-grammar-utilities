'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var definitionUtilities = require('../utilities/definition');

var isFirstPartRuleNamePart = definitionUtilities.isFirstPartRuleNamePart;
var Definition = parsers.Definition,
    Parts = parsers.Parts,
    RuleNamePart = Parts.RuleNamePart;

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
        var firstPartRuleNamePart = isFirstPartRuleNamePart(definition);

        if (firstPartRuleNamePart) {
          var parts = definition.getParts();

          unitDefinition = new UnitDefinition(parts);
        }
      }

      return unitDefinition;
    }
  }]);

  return UnitDefinition;
}(Definition);

module.exports = UnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3VuaXQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJEZWZpbml0aW9uIiwiUGFydHMiLCJSdWxlTmFtZVBhcnQiLCJVbml0RGVmaW5pdGlvbiIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJwYXJ0cyIsInVuaXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBhcnRzTGVuZ3RoIiwiZ2V0UGFydHNMZW5ndGgiLCJmaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLHNCQUFzQkQsUUFBUSx5QkFBUixDQUE1Qjs7SUFFUUUsdUIsR0FBNEJELG1CLENBQTVCQyx1QjtJQUVBQyxVLEdBQXNCSixPLENBQXRCSSxVO0lBQVlDLEssR0FBVUwsTyxDQUFWSyxLO0lBQ1pDLFksR0FBaUJELEssQ0FBakJDLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsZUFBZUYsU0FEckI7QUFBQSxVQUNnQztBQUMxQkcsaUJBQVdELGFBQWFFLFdBQWIsRUFGakI7O0FBSUEsYUFBT0QsUUFBUDtBQUNEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsZUFBZSxLQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSCxxQkFBZSxJQUFJSixZQUFKLENBQWlCSyxRQUFqQixFQUEyQkUsWUFBM0IsQ0FEckI7QUFBQSxVQUVNQyxRQUFRLENBQ05KLFlBRE0sQ0FGZDtBQUFBLFVBS01LLGlCQUFpQixJQUFJUixjQUFKLENBQW1CTyxLQUFuQixDQUx2Qjs7QUFPQSxhQUFPQyxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFJRCxpQkFBaUIsSUFBckI7O0FBRUEsVUFBTUUsY0FBY0QsV0FBV0UsY0FBWCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTUUsd0JBQXdCaEIsd0JBQXdCYSxVQUF4QixDQUE5Qjs7QUFFQSxZQUFJRyxxQkFBSixFQUEyQjtBQUN6QixjQUFNTCxRQUFRRSxXQUFXSSxRQUFYLEVBQWQ7O0FBRUFMLDJCQUFpQixJQUFJUixjQUFKLENBQW1CTyxLQUFuQixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0MsY0FBUDtBQUNEOzs7O0VBcEMwQlgsVTs7QUF1QzdCaUIsT0FBT0MsT0FBUCxHQUFpQmYsY0FBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQgfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiwgUGFydHMgfSA9IHBhcnNlcnMsXG4gICAgICB7IFJ1bGVOYW1lUGFydCB9ID0gUGFydHM7XG5cbmNsYXNzIFVuaXREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBuZXcgVW5pdERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgdW5pdERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBkZWZpbml0aW9uLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KGRlZmluaXRpb24pO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0RGVmaW5pdGlvbjtcbiJdfQ==