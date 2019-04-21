'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ImmediatelyLeftRecursiveDefinition = require('../definition/immediatelyLeftRecursive');

var Rule = parsers.Rule;

var ImmediatelyLeftRecursiveRule = function (_Rule) {
  _inherits(ImmediatelyLeftRecursiveRule, _Rule);

  function ImmediatelyLeftRecursiveRule() {
    _classCallCheck(this, ImmediatelyLeftRecursiveRule);

    return _possibleConstructorReturn(this, (ImmediatelyLeftRecursiveRule.__proto__ || Object.getPrototypeOf(ImmediatelyLeftRecursiveRule)).apply(this, arguments));
  }

  _createClass(ImmediatelyLeftRecursiveRule, [{
    key: 'getImmediatelyLeftRecursiveDefinitions',
    value: function getImmediatelyLeftRecursiveDefinitions() {
      var name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,
          ///
      immediatelyLeftRecursiveDefinitions = definitions.filter(function (definition) {
        var immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

        if (immediatelyLeftRecursiveDefinition !== null) {
          return true;
        }
      });

      return immediatelyLeftRecursiveDefinitions;
    }
  }, {
    key: 'getNonImmediatelyLeftRecursiveDefinitions',
    value: function getNonImmediatelyLeftRecursiveDefinitions() {
      var name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,
          ///
      nonImmediatelyLeftRecursiveDefinitions = definitions.filter(function (definition) {
        var immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

        if (immediatelyLeftRecursiveDefinition === null) {
          return true;
        }
      });

      return nonImmediatelyLeftRecursiveDefinitions;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var immediatelyLeftRecursiveRule = null;

      var ruleName = rule.getName(),
          ruleDefinitions = rule.getDefinitions(),
          someRuleDefinitionImmediatelyLeftRecursive = ruleDefinitions.some(function (ruleDefinition) {
        var definition = ruleDefinition,
            ///
        immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

        if (immediatelyLeftRecursiveDefinition !== null) {
          return true;
        }
      });

      if (someRuleDefinitionImmediatelyLeftRecursive) {
        var name = rule.getName(),
            definitions = rule.getDefinitions(),
            NonTerminalNode = rule.getNonTerminalNode();

        immediatelyLeftRecursiveRule = new ImmediatelyLeftRecursiveRule(name, definitions, NonTerminalNode);
      }

      return immediatelyLeftRecursiveRule;
    }
  }]);

  return ImmediatelyLeftRecursiveRule;
}(Rule);

module.exports = ImmediatelyLeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL2ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIkltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUnVsZSIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUiLCJub25JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZURlZmluaXRpb25zIiwic29tZVJ1bGVEZWZpbml0aW9uSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlIiwic29tZSIsInJ1bGVEZWZpbml0aW9uIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMscUNBQXFDRCxRQUFRLHdDQUFSLENBQTNDOztJQUVRRSxJLEdBQVNILE8sQ0FBVEcsSTs7SUFFRkMsNEI7Ozs7Ozs7Ozs7OzZEQUNxQztBQUN2QyxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGNBQWMsS0FBS0MsY0FBTCxFQURwQjtBQUFBLFVBRU1DLFdBQVdKLElBRmpCO0FBQUEsVUFFd0I7QUFDbEJLLDRDQUFzQ0gsWUFBWUksTUFBWixDQUFtQixVQUFTQyxVQUFULEVBQXFCO0FBQzVFLFlBQU1DLHFDQUFxQ1gsbUNBQW1DWSx5QkFBbkMsQ0FBNkRGLFVBQTdELEVBQXlFSCxRQUF6RSxDQUEzQzs7QUFFQSxZQUFJSSx1Q0FBdUMsSUFBM0MsRUFBaUQ7QUFDL0MsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FOcUMsQ0FINUM7O0FBV0EsYUFBT0gsbUNBQVA7QUFDRDs7O2dFQUUyQztBQUMxQyxVQUFNTCxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGNBQWMsS0FBS0MsY0FBTCxFQURwQjtBQUFBLFVBRU1DLFdBQVdKLElBRmpCO0FBQUEsVUFFd0I7QUFDbEJVLCtDQUF5Q1IsWUFBWUksTUFBWixDQUFtQixVQUFTQyxVQUFULEVBQXFCO0FBQy9FLFlBQU1DLHFDQUFxQ1gsbUNBQW1DWSx5QkFBbkMsQ0FBNkRGLFVBQTdELEVBQXlFSCxRQUF6RSxDQUEzQzs7QUFFQSxZQUFJSSx1Q0FBdUMsSUFBM0MsRUFBaUQ7QUFDL0MsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FOd0MsQ0FIL0M7O0FBV0EsYUFBT0Usc0NBQVA7QUFDRDs7OzZCQUVlQyxJLEVBQU07QUFDcEIsVUFBSUMsK0JBQStCLElBQW5DOztBQUVBLFVBQU1SLFdBQVdPLEtBQUtWLE9BQUwsRUFBakI7QUFBQSxVQUNNWSxrQkFBa0JGLEtBQUtSLGNBQUwsRUFEeEI7QUFBQSxVQUVNVyw2Q0FBNkNELGdCQUFnQkUsSUFBaEIsQ0FBcUIsVUFBU0MsY0FBVCxFQUF5QjtBQUN6RixZQUFNVCxhQUFhUyxjQUFuQjtBQUFBLFlBQW1DO0FBQzdCUiw2Q0FBcUNYLG1DQUFtQ1kseUJBQW5DLENBQTZERixVQUE3RCxFQUF5RUgsUUFBekUsQ0FEM0M7O0FBR0EsWUFBSUksdUNBQXVDLElBQTNDLEVBQWlEO0FBQy9DLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUDRDLENBRm5EOztBQVdBLFVBQUlNLDBDQUFKLEVBQWdEO0FBQzlDLFlBQU1kLE9BQU9XLEtBQUtWLE9BQUwsRUFBYjtBQUFBLFlBQ01DLGNBQWNTLEtBQUtSLGNBQUwsRUFEcEI7QUFBQSxZQUVNYyxrQkFBa0JOLEtBQUtPLGtCQUFMLEVBRnhCOztBQUlBTix1Q0FBK0IsSUFBSWIsNEJBQUosQ0FBaUNDLElBQWpDLEVBQXVDRSxXQUF2QyxFQUFvRGUsZUFBcEQsQ0FBL0I7QUFDRDs7QUFFRCxhQUFPTCw0QkFBUDtBQUNEOzs7O0VBdER3Q2QsSTs7QUF5RDNDcUIsT0FBT0MsT0FBUCxHQUFpQnJCLDRCQUFqQiIsImZpbGUiOiJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2ltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0SW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kUnVsZU5hbWUoZGVmaW5pdGlvbiwgcnVsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vbkltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub25JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbm9uSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZURlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIHNvbWVSdWxlRGVmaW5pdGlvbkltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZSA9IHJ1bGVEZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKHJ1bGVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcnVsZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRSdWxlTmFtZShkZWZpbml0aW9uLCBydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlRGVmaW5pdGlvbkltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlID0gbmV3IEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlO1xuIl19