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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3VuaXQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwicGFydHMiLCJSdWxlTmFtZVBhcnQiLCJVbml0RGVmaW5pdGlvbiIsImZpcnN0UGFydCIsImdldEZpcnN0UGFydCIsInJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJ1bml0RGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImdldFBhcnRzTGVuZ3RoIiwiZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztJQUVRQyxVLEdBQXNCRixPLENBQXRCRSxVO0lBQVlDLEssR0FBVUgsTyxDQUFWRyxLO0lBQ1pDLFksR0FBaUJELEssQ0FBakJDLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsZUFBZUYsU0FEckI7QUFBQSxVQUNnQztBQUMxQkcsaUJBQVdELGFBQWFFLFdBQWIsRUFGakI7O0FBSUEsYUFBT0QsUUFBUDtBQUNEOzs7aUNBRW1CQSxRLEVBQVU7QUFDNUIsVUFBTUUsZUFBZSxLQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSCxxQkFBZSxJQUFJSixZQUFKLENBQWlCSyxRQUFqQixFQUEyQkUsWUFBM0IsQ0FEckI7QUFBQSxVQUVNUixRQUFRLENBQ05LLFlBRE0sQ0FGZDtBQUFBLFVBS01JLGlCQUFpQixJQUFJUCxjQUFKLENBQW1CRixLQUFuQixDQUx2Qjs7QUFPQSxhQUFPUyxjQUFQO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFJRCxpQkFBaUIsSUFBckI7O0FBRUEsVUFBTUUsY0FBY0QsV0FBV0UsY0FBWCxFQUFwQjs7QUFFQSxVQUFJRCxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTUUsd0JBQXdCSCxXQUFXSSx1QkFBWCxFQUE5Qjs7QUFFQSxZQUFJRCxxQkFBSixFQUEyQjtBQUN6QixjQUFNYixTQUFRVSxXQUFXSyxRQUFYLEVBQWQ7O0FBRUFOLDJCQUFpQixJQUFJUCxjQUFKLENBQW1CRixNQUFuQixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1MsY0FBUDtBQUNEOzs7O0VBcEMwQlYsVTs7QUF1QzdCaUIsT0FBT0MsT0FBUCxHQUFpQmYsY0FBakIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uLCBwYXJ0cyB9ID0gcGFyc2VycyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0IH0gPSBwYXJ0cztcblxuY2xhc3MgVW5pdERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gdGhpcy5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGxldCB1bml0RGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IGRlZmluaXRpb24uZ2V0UGFydHNMZW5ndGgoKTtcblxuICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZGVmaW5pdGlvbi5pc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0RGVmaW5pdGlvbjtcbiJdfQ==