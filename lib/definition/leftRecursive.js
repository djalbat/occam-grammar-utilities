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

var types = require('../types'),
    definitionUtilities = require('../utilities/definition'),
    RecursiveDefinition = require('../definition/recursive');

var LEFT_RECURSIVE_TYPE = types.LEFT_RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var LeftRecursiveDefinition = /*#__PURE__*/function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    var _this;

    _classCallCheck(this, LeftRecursiveDefinition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftRecursiveDefinition).call(this, type, parts, ruleName, definition, recursiveRuleNames));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJydWxlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCO0FBQUEsSUFDTUMsbUJBQW1CLEdBQUdELE9BQU8sQ0FBQyx5QkFBRCxDQURuQztBQUFBLElBRU1FLG1CQUFtQixHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FGbkM7O0FBSU0sSUFBRUcsbUJBQUYsR0FBMEJKLEtBQTFCLENBQUVJLG1CQUFGO0FBQUEsSUFDRUMsZ0NBREYsR0FDNkVILG1CQUQ3RSxDQUNFRyxnQ0FERjtBQUFBLElBQ29DQyxvQ0FEcEMsR0FDNkVKLG1CQUQ3RSxDQUNvQ0ksb0NBRHBDOztJQUdBQyx1Qjs7O0FBQ0osbUNBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRUMsc0JBQW5FLEVBQTJGO0FBQUE7O0FBQUE7O0FBQ3pGLGlHQUFNTCxJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0Msa0JBQXpDO0FBRUEsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUh5RjtBQUkxRjs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTyxDQUNiO0FBQ0Q7Ozs4Q0FFZ0NKLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlJLHVCQUF1QixHQUFHLElBQTlCO0FBRUEsVUFBTUYsc0JBQXNCLEdBQUdQLG9DQUFvQyxDQUFDSyxVQUFELENBQW5FO0FBQUEsVUFDTUssNEJBQTRCLEdBQUdILHNCQUFzQixDQUFDSSxNQUQ1RDtBQUFBLFVBRU1DLHVCQUF1QixHQUFJRiw0QkFBNEIsR0FBRyxDQUZoRTs7QUFJQSxVQUFJRSx1QkFBSixFQUE2QjtBQUMzQixZQUFNVixJQUFJLEdBQUdKLG1CQUFiO0FBQUEsWUFDTUssS0FBSyxHQUFHRSxVQUFVLENBQUNRLFFBQVgsRUFEZDtBQUFBLFlBRU1QLGtCQUFrQixHQUFHUCxnQ0FBZ0MsQ0FBQ00sVUFBRCxDQUYzRDtBQUlBSSxRQUFBQSx1QkFBdUIsR0FBRyxJQUFJUix1QkFBSixDQUE0QkMsSUFBNUIsRUFBa0NDLEtBQWxDLEVBQXlDQyxRQUF6QyxFQUFtREMsVUFBbkQsRUFBK0RDLGtCQUEvRCxFQUFtRkMsc0JBQW5GLENBQTFCO0FBQ0Q7O0FBRUQsYUFBT0UsdUJBQVA7QUFDRDs7OztFQS9CbUNaLG1COztBQWtDdENpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLHVCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyksXG4gICAgICBSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUnKTtcblxuY29uc3QgeyBMRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcyxcbiAgICAgIHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9ID0gZGVmaW5pdGlvblV0aWxpdGllcztcblxuY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgcmV3cml0ZShydWxlcykge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCB0eXBlID0gTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==