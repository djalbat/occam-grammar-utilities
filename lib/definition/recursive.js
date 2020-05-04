"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parsers = require("occam-parsers");

var types = require("../types"),
    ruleUtilities = require("../utilities/rule"),
    definitionUtilities = require("../utilities/definition");

var findRule = ruleUtilities.findRule,
    Definition = parsers.Definition,
    RECURSIVE_TYPE = types.RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  var _super = _createSuper(RecursiveDefinition);

  function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
    var _this;

    _classCallCheck(this, RecursiveDefinition);

    _this = _super.call(this, parts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwicnVsZVV0aWxpdGllcyIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJmaW5kUnVsZSIsIkRlZmluaXRpb24iLCJSRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVzIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUF2Qjs7QUFFQSxJQUFNQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXJCO0FBQUEsSUFDTUUsYUFBYSxHQUFHRixPQUFPLENBQUMsbUJBQUQsQ0FEN0I7QUFBQSxJQUVNRyxtQkFBbUIsR0FBR0gsT0FBTyxDQUFDLHlCQUFELENBRm5DOztBQUlNLElBQUVJLFFBQUYsR0FBZUYsYUFBZixDQUFFRSxRQUFGO0FBQUEsSUFDRUMsVUFERixHQUNpQk4sT0FEakIsQ0FDRU0sVUFERjtBQUFBLElBRUVDLGNBRkYsR0FFcUJMLEtBRnJCLENBRUVLLGNBRkY7QUFBQSxJQUdFQyxnQ0FIRixHQUd1Q0osbUJBSHZDLENBR0VJLGdDQUhGOztJQUtBQyxtQjs7Ozs7QUFDSiwrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxVQUFuQyxFQUErQ0Msa0JBQS9DLEVBQW1FO0FBQUE7O0FBQUE7O0FBQ2pFLDhCQUFNSCxLQUFOO0FBRUEsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBRUEsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFUaUU7QUFVbEU7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtKLElBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OzRCQUVPQyxLLEVBQU87QUFDYixVQUFNQyxJQUFJLEdBQUdYLFFBQVEsQ0FBQyxLQUFLTyxRQUFOLEVBQWdCRyxLQUFoQixDQUFyQjtBQUFBLFVBQ01FLGtCQUFrQixHQUFHLEtBQUtKLFVBRGhDO0FBQUEsVUFDNEM7QUFDdENLLE1BQUFBLHFCQUFxQixHQUFHLElBRjlCLENBRGEsQ0FHdUI7O0FBRXBDRixNQUFBQSxJQUFJLENBQUNHLGlCQUFMLENBQXVCRixrQkFBdkIsRUFBMkNDLHFCQUEzQztBQUNEOzs7OENBRWdDTixRLEVBQVVDLFUsRUFBWTtBQUNyRCxVQUFJTyxtQkFBbUIsR0FBRyxJQUExQjtBQUVBLFVBQU1WLElBQUksR0FBR0gsY0FBYjtBQUFBLFVBQ01JLEtBQUssR0FBR0UsVUFBVSxDQUFDUSxRQUFYLEVBRGQ7QUFBQSxVQUVNUCxrQkFBa0IsR0FBR04sZ0NBQWdDLENBQUNLLFVBQUQsQ0FGM0Q7QUFBQSxVQUdNUyx3QkFBd0IsR0FBR1Isa0JBQWtCLENBQUNTLE1BSHBEO0FBQUEsVUFJTUMsNkJBQTZCLEdBQUlGLHdCQUF3QixHQUFHLENBSmxFOztBQU1BLFVBQUlFLDZCQUFKLEVBQW1DO0FBQ2pDSixRQUFBQSxtQkFBbUIsR0FBRyxJQUFJWCxtQkFBSixDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxRQUFyQyxFQUErQ0MsVUFBL0MsRUFBMkRDLGtCQUEzRCxDQUF0QjtBQUNEOztBQUVELGFBQU9NLG1CQUFQO0FBQ0Q7Ozs7RUFuRCtCZCxVOztBQXNEbENtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoXCJvY2NhbS1wYXJzZXJzXCIpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3J1bGVcIiksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCIpO1xuXG5jb25zdCB7IGZpbmRSdWxlIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHJlcGxhY2UocnVsZXMpIHtcbiAgICBjb25zdCBydWxlID0gZmluZFJ1bGUodGhpcy5ydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19