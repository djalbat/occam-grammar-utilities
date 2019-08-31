'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName;

var RightRecursiveDefinition = function (_Definition) {
  _inherits(RightRecursiveDefinition, _Definition);

  function RightRecursiveDefinition(parts, recursiveRuleName) {
    _classCallCheck(this, RightRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).call(this, parts));

    _this.recursiveRuleName = recursiveRuleName;
    return _this;
  }

  _createClass(RightRecursiveDefinition, [{
    key: 'getRecursiveRuleName',
    value: function getRecursiveRuleName() {
      return this.recursiveRuleName;
    }
  }], [{
    key: 'fromDefinitionAndRightRecursiveRuleName',
    value: function fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
      var parts = definition.getParts(),
          optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

      parts.push(optionalRightRecursiveRuleNamePart);

      var firstPart = parts.shift(),
          ruleNamePart = firstPart,
          ///
      ruleName = ruleNamePart.getRuleName(),
          recursiveRuleName = ruleName,
          ///
      rightRecursiveDefinition = new RightRecursiveDefinition(parts, recursiveRuleName);

      return rightRecursiveDefinition;
    }
  }]);

  return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRQYXJ0cyIsIm9wdGlvbmFsUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJwdXNoIiwiZmlyc3RQYXJ0Iiwic2hpZnQiLCJydWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyxvQ0FERixHQUMyQ0YsYUFEM0MsQ0FDRUUsb0NBREY7O0lBR0FDLHdCOzs7QUFDSixvQ0FBWUMsS0FBWixFQUFtQkMsaUJBQW5CLEVBQXNDO0FBQUE7O0FBQUEsb0pBQzlCRCxLQUQ4Qjs7QUFHcEMsVUFBS0MsaUJBQUwsR0FBeUJBLGlCQUF6QjtBQUhvQztBQUlyQzs7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQSxpQkFBWjtBQUNEOzs7NERBRThDQyxVLEVBQVlDLHNCLEVBQXdCO0FBQ2pGLFVBQU1ILFFBQVFFLFdBQVdFLFFBQVgsRUFBZDtBQUFBLFVBQ01DLHFDQUFxQ1AscUNBQXFDSyxzQkFBckMsQ0FEM0M7O0FBR0FILFlBQU1NLElBQU4sQ0FBV0Qsa0NBQVg7O0FBRUEsVUFBTUUsWUFBWVAsTUFBTVEsS0FBTixFQUFsQjtBQUFBLFVBQ01DLGVBQWVGLFNBRHJCO0FBQUEsVUFDZ0M7QUFDMUJHLGlCQUFXRCxhQUFhRSxXQUFiLEVBRmpCO0FBQUEsVUFHTVYsb0JBQW9CUyxRQUgxQjtBQUFBLFVBR29DO0FBQzlCRSxpQ0FBMkIsSUFBSWIsd0JBQUosQ0FBNkJDLEtBQTdCLEVBQW9DQyxpQkFBcEMsQ0FKakM7O0FBTUEsYUFBT1csd0JBQVA7QUFDRDs7OztFQXhCb0NmLFU7O0FBMkJ2Q2dCLE9BQU9DLE9BQVAsR0FBaUJmLHdCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0Jyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIH0gPSBwYXJ0VXRpbGl0aWVzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRSaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gb3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=