'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parsers = require('occam-parsers');

var types = require('../types'),
    ruleUtilities = require('../utilities/rule'),
    definitionUtilities = require('../utilities/definition');

var findRule = ruleUtilities.findRule,
    Definition = parsers.Definition,
    RECURSIVE_TYPE = types.RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
    var _this;

    _classCallCheck(this, RecursiveDefinition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecursiveDefinition).call(this, parts));
    _this.type = type;
    _this.ruleName = ruleName;
    _this.definition = definition;
    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: "getDefinition",
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: "getRecursiveRuleNames",
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: "replace",
    value: function replace(rules) {
      var rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition,
          ///
      replacementDefinition = this; ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var recursiveDefinition = null;
      var type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = recursiveRuleNamesLength > 0;

      if (definitionRecursiveDefinition) {
        recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwicnVsZVV0aWxpdGllcyIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJmaW5kUnVsZSIsIkRlZmluaXRpb24iLCJSRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVzIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXZCOztBQUVBLElBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7QUFBQSxJQUNNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQUQ3QjtBQUFBLElBRU1HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMseUJBQUQsQ0FGbkM7O0FBSU0sSUFBRUksUUFBRixHQUFlRixhQUFmLENBQUVFLFFBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCTixPQURqQixDQUNFTSxVQURGO0FBQUEsSUFFRUMsY0FGRixHQUVxQkwsS0FGckIsQ0FFRUssY0FGRjtBQUFBLElBR0VDLGdDQUhGLEdBR3VDSixtQkFIdkMsQ0FHRUksZ0NBSEY7O0lBS0FDLG1COzs7QUFDSiwrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxVQUFuQyxFQUErQ0Msa0JBQS9DLEVBQW1FO0FBQUE7O0FBQUE7O0FBQ2pFLDZGQUFNSCxLQUFOO0FBRUEsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBRUEsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFUaUU7QUFVbEU7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtKLElBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OzRCQUVPQyxLLEVBQU87QUFDYixVQUFNQyxJQUFJLEdBQUdYLFFBQVEsQ0FBQyxLQUFLTyxRQUFOLEVBQWdCRyxLQUFoQixDQUFyQjtBQUFBLFVBQ01FLGtCQUFrQixHQUFHLEtBQUtKLFVBRGhDO0FBQUEsVUFDNEM7QUFDdENLLE1BQUFBLHFCQUFxQixHQUFHLElBRjlCLENBRGEsQ0FHdUI7O0FBRXBDRixNQUFBQSxJQUFJLENBQUNHLGlCQUFMLENBQXVCRixrQkFBdkIsRUFBMkNDLHFCQUEzQztBQUNEOzs7OENBRWdDTixRLEVBQVVDLFUsRUFBWTtBQUNyRCxVQUFJTyxtQkFBbUIsR0FBRyxJQUExQjtBQUVBLFVBQU1WLElBQUksR0FBR0gsY0FBYjtBQUFBLFVBQ01JLEtBQUssR0FBR0UsVUFBVSxDQUFDUSxRQUFYLEVBRGQ7QUFBQSxVQUVNUCxrQkFBa0IsR0FBR04sZ0NBQWdDLENBQUNLLFVBQUQsQ0FGM0Q7QUFBQSxVQUdNUyx3QkFBd0IsR0FBR1Isa0JBQWtCLENBQUNTLE1BSHBEO0FBQUEsVUFJTUMsNkJBQTZCLEdBQUlGLHdCQUF3QixHQUFHLENBSmxFOztBQU1BLFVBQUlFLDZCQUFKLEVBQW1DO0FBQ2pDSixRQUFBQSxtQkFBbUIsR0FBRyxJQUFJWCxtQkFBSixDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRDLGtCQUEzRCxDQUF0QjtBQUNEOztBQUVELGFBQU9NLG1CQUFQO0FBQ0Q7Ozs7RUFuRCtCZCxVOztBQXNEbENtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHR5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgZmluZFJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IFJFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcyxcbiAgICAgIHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSA9IGRlZmluaXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcblxuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgcmVwbGFjZShydWxlcykge1xuICAgIGNvbnN0IHJ1bGUgPSBmaW5kUnVsZSh0aGlzLnJ1bGVOYW1lLCBydWxlcyksXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlID0gUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=