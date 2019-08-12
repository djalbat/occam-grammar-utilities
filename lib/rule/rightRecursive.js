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
            key: 'fromRuleNameDefinitionAndNonTerminalNodeAndCount',
            value: function fromRuleNameDefinitionAndNonTerminalNodeAndCount(ruleName, definition, nonTerminalNode, count) {
                  var rightRecursiveDefinition = RightRecursiveDefinition.fromDefinition(definition),
                      name = '' + ruleName + (count + 1) + '~',
                      definitions = [rightRecursiveDefinition],
                      rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

                  return rightRecursiveRule;
            }
      }]);

      return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiZmlyc3QiLCJSaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmaXJzdERlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vV2hpdGVzcGFjZSIsImhhc05vV2hpdGVzcGFjZSIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsIm5vblRlcm1pbmFsTm9kZSIsImNvdW50IiwiZnJvbURlZmluaXRpb24iLCJuYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCO0FBQUEsSUFDTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRGpDOztBQUdNLElBQUVHLElBQUYsR0FBV0osT0FBWCxDQUFFSSxJQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZSCxjQURaLENBQ0VHLEtBREY7O0lBR0FDLGtCOzs7Ozs7Ozs7Ozs4Q0FDYztBQUNoQixzQkFBTUMsa0JBQWtCRixNQUFNLEtBQUtHLFdBQVgsQ0FBeEI7QUFBQSxzQkFDTUMsMkJBQTJCRixlQURqQztBQUFBLHNCQUNrRDtBQUM1Q0csaUNBQWVELHlCQUF5QkUsZUFBekIsRUFGckI7O0FBSUEseUJBQU9ELFlBQVA7QUFDRDs7OzZFQUV1REUsUSxFQUFVQyxVLEVBQVlDLGUsRUFBaUJDLEssRUFBTztBQUNwRyxzQkFBTU4sMkJBQTJCTix5QkFBeUJhLGNBQXpCLENBQXdDSCxVQUF4QyxDQUFqQztBQUFBLHNCQUNNSSxZQUFVTCxRQUFWLElBQXFCRyxRQUFRLENBQTdCLE9BRE47QUFBQSxzQkFFTVAsY0FBYyxDQUNaQyx3QkFEWSxDQUZwQjtBQUFBLHNCQUtNUyxxQkFBcUIsSUFBSVosa0JBQUosQ0FBdUJXLElBQXZCLEVBQTZCVCxXQUE3QixFQUEwQ00sZUFBMUMsQ0FMM0I7O0FBT0EseUJBQU9JLGtCQUFQO0FBQ0Q7Ozs7RUFsQjhCZCxJOztBQXFCakNlLE9BQU9DLE9BQVAsR0FBaUJkLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QodGhpcy5kZWZpbml0aW9ucyksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24uaGFzTm9XaGl0ZXNwYWNlKCk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmROb25UZXJtaW5hbE5vZGVBbmRDb3VudChydWxlTmFtZSwgZGVmaW5pdGlvbiwgbm9uVGVybWluYWxOb2RlLCBjb3VudCkge1xuICAgIGNvbnN0IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBuYW1lID0gYCR7cnVsZU5hbWV9JHtjb3VudCArIDF9fmAsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVSdWxlO1xuIl19