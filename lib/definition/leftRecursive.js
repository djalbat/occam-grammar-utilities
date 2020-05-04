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

var types = require("../types"),
    definitionUtilities = require("../utilities/definition"),
    RecursiveDefinition = require("../definition/recursive");

var LEFT_RECURSIVE_TYPE = types.LEFT_RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var LeftRecursiveDefinition = /*#__PURE__*/function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  var _super = _createSuper(LeftRecursiveDefinition);

  function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    var _this;

    _classCallCheck(this, LeftRecursiveDefinition);

    _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames);
    _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    return _this;
  }

  _createClass(LeftRecursiveDefinition, [{
    key: "getLeftRecursiveRuleNames",
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }, {
    key: "rewrite",
    value: function rewrite(rules) {///
    }
  }], [{
    key: "fromRuleNameAndDefinition",
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var leftRecursiveDefinition = null;
      var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        var type = LEFT_RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);
        leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(RecursiveDefinition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJydWxlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjtBQUFBLElBQ01DLG1CQUFtQixHQUFHRCxPQUFPLENBQUMseUJBQUQsQ0FEbkM7QUFBQSxJQUVNRSxtQkFBbUIsR0FBR0YsT0FBTyxDQUFDLHlCQUFELENBRm5DOztBQUlNLElBQUVHLG1CQUFGLEdBQTBCSixLQUExQixDQUFFSSxtQkFBRjtBQUFBLElBQ0VDLGdDQURGLEdBQzZFSCxtQkFEN0UsQ0FDRUcsZ0NBREY7QUFBQSxJQUNvQ0Msb0NBRHBDLEdBQzZFSixtQkFEN0UsQ0FDb0NJLG9DQURwQzs7SUFHQUMsdUI7Ozs7O0FBQ0osbUNBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRUMsc0JBQW5FLEVBQTJGO0FBQUE7O0FBQUE7O0FBQ3pGLDhCQUFNTCxJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0Msa0JBQXpDO0FBRUEsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUh5RjtBQUkxRjs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTyxDQUNiO0FBQ0Q7Ozs4Q0FFZ0NKLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlJLHVCQUF1QixHQUFHLElBQTlCO0FBRUEsVUFBTUYsc0JBQXNCLEdBQUdQLG9DQUFvQyxDQUFDSyxVQUFELENBQW5FO0FBQUEsVUFDTUssNEJBQTRCLEdBQUdILHNCQUFzQixDQUFDSSxNQUQ1RDtBQUFBLFVBRU1DLHVCQUF1QixHQUFJRiw0QkFBNEIsR0FBRyxDQUZoRTs7QUFJQSxVQUFJRSx1QkFBSixFQUE2QjtBQUMzQixZQUFNVixJQUFJLEdBQUdKLG1CQUFiO0FBQUEsWUFDTUssS0FBSyxHQUFHRSxVQUFVLENBQUNRLFFBQVgsRUFEZDtBQUFBLFlBRU1QLGtCQUFrQixHQUFHUCxnQ0FBZ0MsQ0FBQ00sVUFBRCxDQUYzRDtBQUlBSSxRQUFBQSx1QkFBdUIsR0FBRyxJQUFJUix1QkFBSixDQUE0QkMsSUFBNUIsRUFBa0NDLEtBQWxDLEVBQXlDQyxRQUF6QyxFQUFtREMsVUFBbkQsRUFBK0RDLGtCQUEvRCxFQUFtRkMsc0JBQW5GLENBQTFCO0FBQ0Q7O0FBRUQsYUFBT0UsdUJBQVA7QUFDRDs7OztFQS9CbUNaLG1COztBQWtDdENpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLHVCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIiksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCIpO1xuXG5jb25zdCB7IExFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBMRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19