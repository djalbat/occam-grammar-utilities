'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var definitionUtilities = require('../utilities/definition');

var Definition = parsers.Definition,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition(parts, ruleName, recursiveRuleNames) {
    _classCallCheck(this, RecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).call(this, parts));

    _this.ruleName = ruleName;

    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive() {
      var leftRecursive = false;

      return leftRecursive;
    }
  }, {
    key: 'rewrite',
    value: function rewrite(rules) {
      ///
    }
  }], [{
    key: 'fromRuleNameAndDefinition',
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var recursiveDefinition = null;

      var parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = recursiveRuleNamesLength > 0;

      if (definitionRecursiveDefinition) {
        recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmUiLCJydWxlcyIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLHNCQUFzQkQsUUFBUSx5QkFBUixDQUE1Qjs7QUFFTSxJQUFFRSxVQUFGLEdBQWlCSCxPQUFqQixDQUFFRyxVQUFGO0FBQUEsSUFDRUMsZ0NBREYsR0FDdUNGLG1CQUR2QyxDQUNFRSxnQ0FERjs7SUFHQUMsbUI7OztBQUNKLCtCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsa0JBQTdCLEVBQWlEO0FBQUE7O0FBQUEsMElBQ3pDRixLQUR5Qzs7QUFHL0MsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUwrQztBQU1oRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNQyxnQkFBZ0IsS0FBdEI7O0FBRUEsYUFBT0EsYUFBUDtBQUNEOzs7NEJBRU9DLEssRUFBTztBQUNiO0FBQ0Q7Ozs4Q0FFZ0NILFEsRUFBVUksVSxFQUFZO0FBQ3JELFVBQUlDLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNTixRQUFRSyxXQUFXRSxRQUFYLEVBQWQ7QUFBQSxVQUNNTCxxQkFBcUJKLGlDQUFpQ08sVUFBakMsQ0FEM0I7QUFBQSxVQUVNRywyQkFBMkJOLG1CQUFtQk8sTUFGcEQ7QUFBQSxVQUdNQyxnQ0FBaUNGLDJCQUEyQixDQUhsRTs7QUFLQSxVQUFJRSw2QkFBSixFQUFtQztBQUNqQ0osOEJBQXNCLElBQUlQLG1CQUFKLENBQXdCQyxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUNDLGtCQUF6QyxDQUF0QjtBQUNEOztBQUVELGFBQU9JLG1CQUFQO0FBQ0Q7Ozs7RUF4QytCVCxVOztBQTJDbENjLE9BQU9DLE9BQVAsR0FBaUJiLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19