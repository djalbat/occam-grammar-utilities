'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RightRecursveNode = require('../node/rightRecursive'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule(name, definitions, NonTerminalNode, recursiveRuleName) {
    _classCallCheck(this, RightRecursiveRule);

    var _this = _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).call(this, name, definitions, NonTerminalNode));

    _this.recursiveRuleName = recursiveRuleName;
    return _this;
  }

  _createClass(RightRecursiveRule, [{
    key: 'getRecursiveRuleName',
    value: function getRecursiveRuleName() {
      return this.recursiveRuleName;
    }
  }], [{
    key: 'fromDefinitionAndRightRecursiveRuleName',
    value: function fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
      var rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          NonTerminalNode = RightRecursveNode,
          ///
      recursiveRuleName = rightRecursiveDefinition.getRecursiveRuleName(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, recursiveRuleName);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnN2ZU5vZGUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiUmlnaHRSZWN1cnNpdmVSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsb0JBQW9CRCxRQUFRLHdCQUFSLENBQTFCO0FBQUEsSUFDTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRGpDOztJQUdRRyxJLEdBQVNKLE8sQ0FBVEksSTs7SUFFRkMsa0I7OztBQUNKLDhCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsZUFBL0IsRUFBZ0RDLGlCQUFoRCxFQUFtRTtBQUFBOztBQUFBLHdJQUMzREgsSUFEMkQsRUFDckRDLFdBRHFELEVBQ3hDQyxlQUR3Qzs7QUFHakUsVUFBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUhpRTtBQUlsRTs7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQSxpQkFBWjtBQUNEOzs7NERBRThDQyxVLEVBQVlDLHNCLEVBQXdCO0FBQ2pGLFVBQU1DLDJCQUEyQlQseUJBQXlCVSx1Q0FBekIsQ0FBaUVILFVBQWpFLEVBQTZFQyxzQkFBN0UsQ0FBakM7QUFBQSxVQUNNTCxPQUFPSyxzQkFEYjtBQUFBLFVBQ3NDO0FBQ2hDSixvQkFBYyxDQUNaSyx3QkFEWSxDQUZwQjtBQUFBLFVBS01KLGtCQUFrQk4saUJBTHhCO0FBQUEsVUFLMkM7QUFDckNPLDBCQUFvQkcseUJBQXlCRSxvQkFBekIsRUFOMUI7QUFBQSxVQU9NQyxxQkFBcUIsSUFBSVYsa0JBQUosQ0FBdUJDLElBQXZCLEVBQTZCQyxXQUE3QixFQUEwQ0MsZUFBMUMsRUFBMkRDLGlCQUEzRCxDQVAzQjs7QUFTQSxhQUFPTSxrQkFBUDtBQUNEOzs7O0VBdEI4QlgsSTs7QUF5QmpDWSxPQUFPQyxPQUFQLEdBQWlCWixrQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IFJpZ2h0UmVjdXJzdmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yaWdodFJlY3Vyc2l2ZScpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlLCByZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJpZ2h0UmVjdXJzdmVOb2RlLCAvLy9cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSwgcmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUnVsZTtcbiJdfQ==