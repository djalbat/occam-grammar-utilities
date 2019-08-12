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
            key: 'hasNoWhitespace',
            value: function hasNoWhitespace() {
                  var firstDefinition = first(this.definitions),
                      rightRecursiveDefinition = firstDefinition,
                      ///
                  noWhitespace = rightRecursiveDefinition.hasNoWhitespace();

                  return noWhitespace;
            }
      }], [{
            key: 'fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode',
            value: function fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode(leftRecursiveDefinition, rightRecursiveRuleName, nonTerminalNode) {
                  var name = rightRecursiveRuleName,
                      ///
                  rightRecursiveDefinition = RightRecursiveDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
                      definitions = [rightRecursiveDefinition],
                      rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdERlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsImhhc05vV2hpdGVzcGFjZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5hbWUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FEakM7O0FBR00sSUFBRUcsSUFBRixHQUFXSixPQUFYLENBQUVJLElBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lILGNBRFosQ0FDRUcsS0FERjs7SUFHQUMsa0I7Ozs7Ozs7Ozs7OzhDQUNjO0FBQ2hCLHNCQUFNQyxrQkFBa0JGLE1BQU0sS0FBS0csV0FBWCxDQUF4QjtBQUFBLHNCQUNNQywyQkFBMkJGLGVBRGpDO0FBQUEsc0JBQ2tEO0FBQzVDRyxpQ0FBZUQseUJBQXlCRSxlQUF6QixFQUZyQjs7QUFJQSx5QkFBT0QsWUFBUDtBQUNEOzs7Z0dBRTBFRSx1QixFQUF5QkMsc0IsRUFBd0JDLGUsRUFBaUI7QUFDM0ksc0JBQU1DLE9BQU9GLHNCQUFiO0FBQUEsc0JBQXNDO0FBQ2hDSiw2Q0FBMkJOLHlCQUF5QmEsMkJBQXpCLENBQXFESix1QkFBckQsQ0FEakM7QUFBQSxzQkFFTUosY0FBYyxDQUNaQyx3QkFEWSxDQUZwQjtBQUFBLHNCQUtNUSxxQkFBcUIsSUFBSVgsa0JBQUosQ0FBdUJTLElBQXZCLEVBQTZCUCxXQUE3QixFQUEwQ00sZUFBMUMsQ0FMM0I7O0FBT0EseUJBQU9HLGtCQUFQO0FBQ0Q7Ozs7RUFsQjhCYixJOztBQXFCakNjLE9BQU9DLE9BQVAsR0FBaUJiLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QodGhpcy5kZWZpbml0aW9ucyksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uaGFzTm9XaGl0ZXNwYWNlKCk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVBbmRub25UZXJtaW5hbE5vZGUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUsIG5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5hbWUgPSByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVSdWxlO1xuIl19