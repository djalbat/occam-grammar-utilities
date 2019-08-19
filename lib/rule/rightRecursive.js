'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var IntermediateNode = require('../node/intermediate'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule(name, definitions, nonTerminalNode, noWhitespace, lookAhead) {
    _classCallCheck(this, RightRecursiveRule);

    var _this = _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).call(this, name, definitions, nonTerminalNode));

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RightRecursiveRule, [{
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }], [{
    key: 'fromDefinitionAndRightRecursiveRuleName',
    value: function fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
      var rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          NonTerminalNode = IntermediateNode,
          ///
      noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, noWhitespace, lookAhead);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiSW50ZXJtZWRpYXRlTm9kZSIsIlJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJ1bGUiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub1doaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJkZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImhhc05vV2hpdGVzcGFjZSIsImlzTG9va0FoZWFkIiwicmlnaHRSZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBQXpCO0FBQUEsSUFDTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRGpDOztJQUdRRyxJLEdBQVNKLE8sQ0FBVEksSTs7SUFFRkMsa0I7OztBQUNKLDhCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsZUFBL0IsRUFBZ0RDLFlBQWhELEVBQThEQyxTQUE5RCxFQUF5RTtBQUFBOztBQUFBLHdJQUNqRUosSUFEaUUsRUFDM0RDLFdBRDJELEVBQzlDQyxlQUQ4Qzs7QUFHdkUsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFMdUU7QUFNeEU7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtBLFNBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtELFlBQVo7QUFDRDs7OzREQUU4Q0UsVSxFQUFZQyxzQixFQUF3QjtBQUNqRixVQUFNQywyQkFBMkJWLHlCQUF5QlcsdUNBQXpCLENBQWlFSCxVQUFqRSxFQUE2RUMsc0JBQTdFLENBQWpDO0FBQUEsVUFDTU4sT0FBT00sc0JBRGI7QUFBQSxVQUNzQztBQUNoQ0wsb0JBQWMsQ0FDWk0sd0JBRFksQ0FGcEI7QUFBQSxVQUtNRSxrQkFBa0JiLGdCQUx4QjtBQUFBLFVBSzBDO0FBQ3BDTyxxQkFBZUkseUJBQXlCRyxlQUF6QixFQU5yQjtBQUFBLFVBT01OLFlBQVlHLHlCQUF5QkksV0FBekIsRUFQbEI7QUFBQSxVQVFNQyxxQkFBcUIsSUFBSWIsa0JBQUosQ0FBdUJDLElBQXZCLEVBQTZCQyxXQUE3QixFQUEwQ1EsZUFBMUMsRUFBMkROLFlBQTNELEVBQXlFQyxTQUF6RSxDQVIzQjs7QUFVQSxhQUFPUSxrQkFBUDtBQUNEOzs7O0VBN0I4QmQsSTs7QUFnQ2pDZSxPQUFPQyxPQUFQLEdBQWlCZixrQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IEludGVybWVkaWF0ZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2ludGVybWVkaWF0ZScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlLCBub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGhhc05vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEludGVybWVkaWF0ZU5vZGUsIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=