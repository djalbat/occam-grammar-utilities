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
            key: 'fromRuleNameDefinitionAndNonTerminalNodeAndCount',
            value: function fromRuleNameDefinitionAndNonTerminalNodeAndCount(ruleName, definition, nonTerminalNode, count) {
                  var rightRecursiveRuleName = '' + ruleName + (count + 1) + '~',
                      rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndDefinition(rightRecursiveRuleName, definition),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdERlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwibm9uVGVybWluYWxOb2RlIiwiY291bnQiLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZnJvbVJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmREZWZpbml0aW9uIiwibmFtZSIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLDJCQUEyQkYsUUFBUSw4QkFBUixDQURqQzs7QUFHTSxJQUFFRyxJQUFGLEdBQVdKLE9BQVgsQ0FBRUksSUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUgsY0FEWixDQUNFRyxLQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7MENBQ1U7QUFDWixzQkFBTUMsa0JBQWtCRixNQUFNLEtBQUtHLFdBQVgsQ0FBeEI7QUFBQSxzQkFDTUMsMkJBQTJCRixlQURqQztBQUFBLHNCQUNrRDtBQUM1Q0csOEJBQVlELHlCQUF5QkUsV0FBekIsRUFGbEI7O0FBSUEseUJBQU9ELFNBQVA7QUFDRDs7OzhDQUVpQjtBQUNoQixzQkFBTUgsa0JBQWtCRixNQUFNLEtBQUtHLFdBQVgsQ0FBeEI7QUFBQSxzQkFDTUMsMkJBQTJCRixlQURqQztBQUFBLHNCQUNrRDtBQUM1Q0ssaUNBQWVILHlCQUF5QkksZUFBekIsRUFGckI7O0FBSUEseUJBQU9ELFlBQVA7QUFDRDs7OzZFQUV1REUsUSxFQUFVQyxVLEVBQVlDLGUsRUFBaUJDLEssRUFBTztBQUNwRyxzQkFBTUMsOEJBQTRCSixRQUE1QixJQUF1Q0csUUFBUSxDQUEvQyxPQUFOO0FBQUEsc0JBQ01SLDJCQUEyQk4seUJBQXlCZ0IsdUNBQXpCLENBQWlFRCxzQkFBakUsRUFBeUZILFVBQXpGLENBRGpDO0FBQUEsc0JBRU1LLE9BQU9GLHNCQUZiO0FBQUEsc0JBRXNDO0FBQ2hDVixnQ0FBYyxDQUNaQyx3QkFEWSxDQUhwQjtBQUFBLHNCQU1NWSxxQkFBcUIsSUFBSWYsa0JBQUosQ0FBdUJjLElBQXZCLEVBQTZCWixXQUE3QixFQUEwQ1EsZUFBMUMsQ0FOM0I7O0FBUUEseUJBQU9LLGtCQUFQO0FBQ0Q7Ozs7RUEzQjhCakIsSTs7QUE4QmpDa0IsT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc0xvb2tBaGVhZCgpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdCh0aGlzLmRlZmluaXRpb25zKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZCA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xvb2tBaGVhZCgpO1xuXG4gICAgcmV0dXJuIGxvb2tBaGVhZDtcbiAgfVxuXG4gIGhhc05vV2hpdGVzcGFjZSgpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdCh0aGlzLmRlZmluaXRpb25zKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5oYXNOb1doaXRlc3BhY2UoKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZE5vblRlcm1pbmFsTm9kZUFuZENvdW50KHJ1bGVOYW1lLCBkZWZpbml0aW9uLCBub25UZXJtaW5hbE5vZGUsIGNvdW50KSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSA9IGAke3J1bGVOYW1lfSR7Y291bnQgKyAxfX5gLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUmlnaHRSZWN1cnNpdmVSdWxlTmFtZUFuZERlZmluaXRpb24ocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgZGVmaW5pdGlvbiksXG4gICAgICAgICAgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=