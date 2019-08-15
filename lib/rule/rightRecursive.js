'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
    first = arrayUtilities.first;

var RightRecursiveRule = function (_Rule) {
      _inherits(RightRecursiveRule, _Rule);

      function RightRecursiveRule() {
            _classCallCheck(this, RightRecursiveRule);

            return _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).apply(this, arguments));
      }

      _createClass(RightRecursiveRule, [{
            key: 'isLookAhead',
            value: function isLookAhead() {
                  var firstDefinition = first(this.definitions),
                      rightRecursiveDefinition = firstDefinition,
                      ///
                  lookAhead = rightRecursiveDefinition.isLookAhead();

                  return lookAhead;
            }
      }, {
            key: 'hasNoWhitespace',
            value: function hasNoWhitespace() {
                  var firstDefinition = first(this.definitions),
                      rightRecursiveDefinition = firstDefinition,
                      ///
                  noWhitespace = rightRecursiveDefinition.hasNoWhitespace();

                  return noWhitespace;
            }
      }], [{
            key: 'fromLeftRecursiveRuleAndNonTerminalNode',
            value: function fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count) {
                  var leftRecursiveRuleName = leftRecursiveRule.getName(),
                      rightRecursiveRuleName = '' + leftRecursiveRuleName + (count + 1) + '~',
                      leftRecursiveDefinition = definitionFromRule(leftRecursiveRule),
                      rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndLeftRecursiveDefinition(rightRecursiveRuleName, leftRecursiveDefinition),
                      name = rightRecursiveRuleName,
                      ///
                  definitions = [rightRecursiveDefinition],
                      rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;

function definitionFromRule(rule) {
      var definitions = rule.getDefinitions(),
          firstDefinition = first(definitions),
          definition = firstDefinition; ///

      return definition;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdERlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb3VudCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uRnJvbVJ1bGUiLCJmcm9tUmlnaHRSZWN1cnNpdmVSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FEakM7O0FBR00sSUFBRUcsSUFBRixHQUFXSixPQUFYLENBQUVJLElBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lILGNBRFosQ0FDRUcsS0FERjs7SUFHQUMsa0I7Ozs7Ozs7Ozs7OzBDQUNVO0FBQ1osc0JBQU1DLGtCQUFrQkYsTUFBTSxLQUFLRyxXQUFYLENBQXhCO0FBQUEsc0JBQ01DLDJCQUEyQkYsZUFEakM7QUFBQSxzQkFDa0Q7QUFDNUNHLDhCQUFZRCx5QkFBeUJFLFdBQXpCLEVBRmxCOztBQUlBLHlCQUFPRCxTQUFQO0FBQ0Q7Ozs4Q0FFaUI7QUFDaEIsc0JBQU1ILGtCQUFrQkYsTUFBTSxLQUFLRyxXQUFYLENBQXhCO0FBQUEsc0JBQ01DLDJCQUEyQkYsZUFEakM7QUFBQSxzQkFDa0Q7QUFDNUNLLGlDQUFlSCx5QkFBeUJJLGVBQXpCLEVBRnJCOztBQUlBLHlCQUFPRCxZQUFQO0FBQ0Q7OztvRUFFOENFLGlCLEVBQW1CQyxlLEVBQWlCQyxLLEVBQU87QUFDeEYsc0JBQU1DLHdCQUF3Qkgsa0JBQWtCSSxPQUFsQixFQUE5QjtBQUFBLHNCQUNNQyw4QkFBNEJGLHFCQUE1QixJQUFvREQsUUFBUSxDQUE1RCxPQUROO0FBQUEsc0JBRU1JLDBCQUEwQkMsbUJBQW1CUCxpQkFBbkIsQ0FGaEM7QUFBQSxzQkFHTUwsMkJBQTJCTix5QkFBeUJtQixvREFBekIsQ0FBOEVILHNCQUE5RSxFQUFzR0MsdUJBQXRHLENBSGpDO0FBQUEsc0JBSU1HLE9BQU9KLHNCQUpiO0FBQUEsc0JBSXNDO0FBQ2hDWCxnQ0FBYyxDQUNaQyx3QkFEWSxDQUxwQjtBQUFBLHNCQVFNZSxxQkFBcUIsSUFBSWxCLGtCQUFKLENBQXVCaUIsSUFBdkIsRUFBNkJmLFdBQTdCLEVBQTBDTyxlQUExQyxDQVIzQjs7QUFVQSx5QkFBT1Msa0JBQVA7QUFDRDs7OztFQTdCOEJwQixJOztBQWdDakNxQixPQUFPQyxPQUFQLEdBQWlCcEIsa0JBQWpCOztBQUVBLFNBQVNlLGtCQUFULENBQTRCTSxJQUE1QixFQUFrQztBQUNoQyxVQUFNbkIsY0FBY21CLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxVQUNNckIsa0JBQWtCRixNQUFNRyxXQUFOLENBRHhCO0FBQUEsVUFFTXFCLGFBQWF0QixlQUZuQixDQURnQyxDQUdJOztBQUVwQyxhQUFPc0IsVUFBUDtBQUNEIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGlzTG9va0FoZWFkKCkge1xuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KHRoaXMuZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmlzTG9va0FoZWFkKCk7XG5cbiAgICByZXR1cm4gbG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KHRoaXMuZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmhhc05vV2hpdGVzcGFjZSgpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZVJ1bGVBbmROb25UZXJtaW5hbE5vZGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIG5vblRlcm1pbmFsTm9kZSwgY291bnQpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IGAke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0ke2NvdW50ICsgMX1+YCxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb25Gcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgIG5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVSdWxlO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uRnJvbVJ1bGUocnVsZSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbjtcbn0iXX0=