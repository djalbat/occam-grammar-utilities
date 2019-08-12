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


var count = 1; ///

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
            key: 'fromRuleNameDefinitionAndNonTerminalNode',
            value: function fromRuleNameDefinitionAndNonTerminalNode(ruleName, definition, nonTerminalNode) {
                  var rightRecursiveDefinition = RightRecursiveDefinition.fromDefinition(definition),
                      name = '' + ruleName + count++ + '~',
                      definitions = [rightRecursiveDefinition],
                      rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJjb3VudCIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsImZpcnN0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwiaGFzTm9XaGl0ZXNwYWNlIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbURlZmluaXRpb24iLCJuYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRGpDOztBQUdNLElBQUVHLElBQUYsR0FBV0osT0FBWCxDQUFFSSxJQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZSCxjQURaLENBQ0VHLEtBREY7OztBQUdOLElBQUlDLFFBQVEsQ0FBWixDLENBQWdCOztJQUVWQyxrQjs7Ozs7Ozs7Ozs7OENBQ2M7QUFDaEIsc0JBQU1DLGtCQUFrQkgsTUFBTSxLQUFLSSxXQUFYLENBQXhCO0FBQUEsc0JBQ01DLDJCQUEyQkYsZUFEakM7QUFBQSxzQkFDa0Q7QUFDNUNHLGlDQUFlRCx5QkFBeUJFLGVBQXpCLEVBRnJCOztBQUlBLHlCQUFPRCxZQUFQO0FBQ0Q7OztxRUFFK0NFLFEsRUFBVUMsVSxFQUFZQyxlLEVBQWlCO0FBQ3JGLHNCQUFNTCwyQkFBMkJQLHlCQUF5QmEsY0FBekIsQ0FBd0NGLFVBQXhDLENBQWpDO0FBQUEsc0JBQ01HLFlBQVVKLFFBQVYsR0FBcUJQLE9BQXJCLE1BRE47QUFBQSxzQkFFTUcsY0FBYyxDQUNaQyx3QkFEWSxDQUZwQjtBQUFBLHNCQUtNUSxxQkFBcUIsSUFBSVgsa0JBQUosQ0FBdUJVLElBQXZCLEVBQTZCUixXQUE3QixFQUEwQ00sZUFBMUMsQ0FMM0I7O0FBT0EseUJBQU9HLGtCQUFQO0FBQ0Q7Ozs7RUFsQjhCZCxJOztBQXFCakNlLE9BQU9DLE9BQVAsR0FBaUJiLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmxldCBjb3VudCA9IDE7ICAvLy9cblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGhhc05vV2hpdGVzcGFjZSgpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdCh0aGlzLmRlZmluaXRpb25zKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5oYXNOb1doaXRlc3BhY2UoKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZE5vblRlcm1pbmFsTm9kZShydWxlTmFtZSwgZGVmaW5pdGlvbiwgbm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIG5hbWUgPSBgJHtydWxlTmFtZX0ke2NvdW50Kyt9fmAsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVSdWxlO1xuIl19