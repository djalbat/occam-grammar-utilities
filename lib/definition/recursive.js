'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleUtilities = require('../utilities/rule'),
    definitionUtilities = require('../utilities/definition');

var findRule = ruleUtilities.findRule,
    Definition = parsers.Definition,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition(parts, ruleName, definition, recursiveRuleNames) {
    _classCallCheck(this, RecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).call(this, parts));

    _this.ruleName = ruleName;

    _this.definition = definition;

    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'rewrite',
    value: function rewrite(rules) {
      ///
    }
  }, {
    key: 'replace',
    value: function replace(rules) {
      var rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition,
          replacementDefinition = this; ///

      rule.replaceDefinition(replacementDefinition, replacedDefinition);
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
        recursiveDefinition = new RecursiveDefinition(parts, ruleName, definition, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInJ1bGVVdGlsaXRpZXMiLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiZmluZFJ1bGUiLCJEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJydWxlcyIsInJ1bGUiLCJyZXBsYWNlZERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDTUUsc0JBQXNCRixRQUFRLHlCQUFSLENBRDVCOztBQUdNLElBQUVHLFFBQUYsR0FBZUYsYUFBZixDQUFFRSxRQUFGO0FBQUEsSUFDRUMsVUFERixHQUNpQkwsT0FEakIsQ0FDRUssVUFERjtBQUFBLElBRUVDLGdDQUZGLEdBRXVDSCxtQkFGdkMsQ0FFRUcsZ0NBRkY7O0lBSUFDLG1COzs7QUFDSiwrQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkJDLFVBQTdCLEVBQXlDQyxrQkFBekMsRUFBNkQ7QUFBQTs7QUFBQSwwSUFDckRILEtBRHFEOztBQUczRCxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBUDJEO0FBUTVEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7OzRCQUVPQyxLLEVBQU87QUFDYjtBQUNEOzs7NEJBRU9BLEssRUFBTztBQUNiLFVBQU1DLE9BQU9ULFNBQVMsS0FBS0ssUUFBZCxFQUF3QkcsS0FBeEIsQ0FBYjtBQUFBLFVBQ01FLHFCQUFxQixLQUFLSixVQURoQztBQUFBLFVBRU1LLHdCQUF3QixJQUY5QixDQURhLENBR3VCOztBQUVwQ0YsV0FBS0csaUJBQUwsQ0FBdUJELHFCQUF2QixFQUE4Q0Qsa0JBQTlDO0FBQ0Q7Ozs4Q0FFZ0NMLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlPLHNCQUFzQixJQUExQjs7QUFFQSxVQUFNVCxRQUFRRSxXQUFXUSxRQUFYLEVBQWQ7QUFBQSxVQUNNUCxxQkFBcUJMLGlDQUFpQ0ksVUFBakMsQ0FEM0I7QUFBQSxVQUVNUywyQkFBMkJSLG1CQUFtQlMsTUFGcEQ7QUFBQSxVQUdNQyxnQ0FBaUNGLDJCQUEyQixDQUhsRTs7QUFLQSxVQUFJRSw2QkFBSixFQUFtQztBQUNqQ0osOEJBQXNCLElBQUlWLG1CQUFKLENBQXdCQyxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUNDLFVBQXpDLEVBQXFEQyxrQkFBckQsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPTSxtQkFBUDtBQUNEOzs7O0VBaEQrQlosVTs7QUFtRGxDaUIsT0FBT0MsT0FBUCxHQUFpQmhCLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgZmluZFJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcblxuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgcmV3cml0ZShydWxlcykge1xuICAgIC8vL1xuICB9XG5cbiAgcmVwbGFjZShydWxlcykge1xuICAgIGNvbnN0IHJ1bGUgPSBmaW5kUnVsZSh0aGlzLnJ1bGVOYW1lLCBydWxlcyksXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9uLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJlcGxhY2VkRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19