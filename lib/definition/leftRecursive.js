'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecursiveDefinition = require('../definition/recursive');

var LeftRecursiveDefinition = function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  function LeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    _classCallCheck(this, LeftRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (LeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(LeftRecursiveDefinition)).call(this, parts, ruleName, recursiveRuleNames));

    _this.definition = definition;

    _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    return _this;
  }

  _createClass(LeftRecursiveDefinition, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getLeftRecursiveRuleNames',
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive() {
      var leftRecursive = true;

      return leftRecursive;
    }
  }]);

  return LeftRecursiveDefinition;
}(RecursiveDefinition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcXVpcmUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQkMsUUFBUSx5QkFBUixDQUE1Qjs7SUFFTUMsdUI7OztBQUNKLG1DQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsVUFBN0IsRUFBeUNDLGtCQUF6QyxFQUE2REMsc0JBQTdELEVBQXFGO0FBQUE7O0FBQUEsa0pBQzdFSixLQUQ2RSxFQUN0RUMsUUFEc0UsRUFDNURFLGtCQUQ0RDs7QUFHbkYsVUFBS0QsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsVUFBS0Usc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUxtRjtBQU1wRjs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0YsVUFBWjtBQUNEOzs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Usc0JBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxnQkFBZ0IsSUFBdEI7O0FBRUEsYUFBT0EsYUFBUDtBQUNEOzs7O0VBckJtQ1IsbUI7O0FBd0J0Q1MsT0FBT0MsT0FBUCxHQUFpQlIsdUJBQWpCIiwiZmlsZSI6ImxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZScpO1xuXG5jbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==