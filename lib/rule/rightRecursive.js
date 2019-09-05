'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var ruleNameUtilities = require('../utilities/ruleName'),
    RightRecursiveNode = require('../node/rightRecursive'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule,
    rightRecursiveRuleNameFromRuleName = ruleNameUtilities.rightRecursiveRuleNameFromRuleName;

var RightRecursiveRule = function (_Rule) {
      _inherits(RightRecursiveRule, _Rule);

      function RightRecursiveRule() {
            _classCallCheck(this, RightRecursiveRule);

            return _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).apply(this, arguments));
      }

      _createClass(RightRecursiveRule, null, [{
            key: 'fromRuleNameAndRightRecursiveDefinitions',

            // static fromRightRecursiveRuleName(rightRecursiveRuleName) {
            //   const name = rightRecursiveRuleName,  ///
            //         definitions = [],
            //         NonTerminalNode = RightRecursiveNode, ///
            //         rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);
            //
            //   return rightRecursiveRule;
            // }

            value: function fromRuleNameAndRightRecursiveDefinitions(ruleName, rightRecursiveDefinitions) {
                  var rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
                      name = rightRecursiveRuleName,
                      ///
                  definitions = rightRecursiveDefinitions,
                      ///
                  NonTerminalNode = RightRecursiveNode,
                      ///
                  rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicnVsZU5hbWVVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZU5vZGUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsInJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FBMUI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRywyQkFBMkJILFFBQVEsOEJBQVIsQ0FGakM7O0FBSU0sSUFBRUksSUFBRixHQUFXTCxPQUFYLENBQUVLLElBQUY7QUFBQSxJQUNFQyxrQ0FERixHQUN5Q0osaUJBRHpDLENBQ0VJLGtDQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7cUVBRWdEQyxRLEVBQVVDLHlCLEVBQTJCO0FBQ25GLHNCQUFNQyx5QkFBeUJKLG1DQUFtQ0UsUUFBbkMsQ0FBL0I7QUFBQSxzQkFDTUcsT0FBT0Qsc0JBRGI7QUFBQSxzQkFDc0M7QUFDaENFLGdDQUFjSCx5QkFGcEI7QUFBQSxzQkFFK0M7QUFDekNJLG9DQUFrQlYsa0JBSHhCO0FBQUEsc0JBRzRDO0FBQ3RDVyx1Q0FBcUIsSUFBSVAsa0JBQUosQ0FBdUJJLElBQXZCLEVBQTZCQyxXQUE3QixFQUEwQ0MsZUFBMUMsQ0FKM0I7O0FBTUEseUJBQU9DLGtCQUFQO0FBQ0Q7Ozs7RUFsQjhCVCxJOztBQXFCakNVLE9BQU9DLE9BQVAsR0FBaUJULGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcnVsZU5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcnVsZU5hbWUnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmlnaHRSZWN1cnNpdmUnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIC8vIHN0YXRpYyBmcm9tUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIC8vICAgY29uc3QgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgLy8gICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAvLyAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJpZ2h0UmVjdXJzaXZlTm9kZSwgLy8vXG4gIC8vICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICAvLyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJpZ2h0UmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=