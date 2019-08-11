'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var EpsilonDefinition = require('../definition/epsilon'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule() {
    _classCallCheck(this, RightRecursiveRule);

    return _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).apply(this, arguments));
  }

  _createClass(RightRecursiveRule, null, [{
    key: 'fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode',
    value: function fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode(leftRecursiveDefinition, rightRecursiveRuleName, nonTerminalNode) {
      var name = rightRecursiveRuleName,
          ///
      rightRecursiveDefinition = RightRecursiveDefinition.fromLeftRecursiveDefinitionAndRightRecursiveRuleName(leftRecursiveDefinition, rightRecursiveRuleName),
          epsilonDefinition = EpsilonDefinition.fromNothing(),
          definitions = [rightRecursiveDefinition, epsilonDefinition],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiRXBzaWxvbkRlZmluaXRpb24iLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiUmlnaHRSZWN1cnNpdmVSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlIiwibmFtZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJlcHNpbG9uRGVmaW5pdGlvbiIsImZyb21Ob3RoaW5nIiwiZGVmaW5pdGlvbnMiLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FBMUI7QUFBQSxJQUNNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FEakM7O0lBR1FHLEksR0FBU0osTyxDQUFUSSxJOztJQUVGQyxrQjs7Ozs7Ozs7Ozs7d0ZBQ3VFQyx1QixFQUF5QkMsc0IsRUFBd0JDLGUsRUFBaUI7QUFDM0ksVUFBTUMsT0FBT0Ysc0JBQWI7QUFBQSxVQUFzQztBQUNoQ0csaUNBQTJCUCx5QkFBeUJRLG9EQUF6QixDQUE4RUwsdUJBQTlFLEVBQXVHQyxzQkFBdkcsQ0FEakM7QUFBQSxVQUVNSyxvQkFBb0JWLGtCQUFrQlcsV0FBbEIsRUFGMUI7QUFBQSxVQUdNQyxjQUFjLENBQ1pKLHdCQURZLEVBRVpFLGlCQUZZLENBSHBCO0FBQUEsVUFPTUcscUJBQXFCLElBQUlWLGtCQUFKLENBQXVCSSxJQUF2QixFQUE2QkssV0FBN0IsRUFBMENOLGVBQTFDLENBUDNCOztBQVNBLGFBQU9PLGtCQUFQO0FBQ0Q7Ozs7RUFaOEJYLEk7O0FBZWpDWSxPQUFPQyxPQUFQLEdBQWlCWixrQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IEVwc2lsb25EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9lcHNpbG9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kbm9uVGVybWluYWxOb2RlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCBub25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvbiA9IEVwc2lsb25EZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=