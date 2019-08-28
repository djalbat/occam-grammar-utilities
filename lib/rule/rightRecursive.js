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
          NonTerminalNode = RightRecursveNode,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnN2ZU5vZGUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiUmlnaHRSZWN1cnNpdmVSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwibm9uVGVybWluYWxOb2RlIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiZGVmaW5pdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJoYXNOb1doaXRlc3BhY2UiLCJpc0xvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLG9CQUFvQkQsUUFBUSx3QkFBUixDQUExQjtBQUFBLElBQ01FLDJCQUEyQkYsUUFBUSw4QkFBUixDQURqQzs7SUFHUUcsSSxHQUFTSixPLENBQVRJLEk7O0lBRUZDLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdEQyxZQUFoRCxFQUE4REMsU0FBOUQsRUFBeUU7QUFBQTs7QUFBQSx3SUFDakVKLElBRGlFLEVBQzNEQyxXQUQyRCxFQUM5Q0MsZUFEOEM7O0FBR3ZFLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBTHVFO0FBTXhFOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxTQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRCxZQUFaO0FBQ0Q7Ozs0REFFOENFLFUsRUFBWUMsc0IsRUFBd0I7QUFDakYsVUFBTUMsMkJBQTJCVix5QkFBeUJXLHVDQUF6QixDQUFpRUgsVUFBakUsRUFBNkVDLHNCQUE3RSxDQUFqQztBQUFBLFVBQ01OLE9BQU9NLHNCQURiO0FBQUEsVUFDc0M7QUFDaENMLG9CQUFjLENBQ1pNLHdCQURZLENBRnBCO0FBQUEsVUFLTUUsa0JBQWtCYixpQkFMeEI7QUFBQSxVQUsyQztBQUNyQ08scUJBQWVJLHlCQUF5QkcsZUFBekIsRUFOckI7QUFBQSxVQU9NTixZQUFZRyx5QkFBeUJJLFdBQXpCLEVBUGxCO0FBQUEsVUFRTUMscUJBQXFCLElBQUliLGtCQUFKLENBQXVCQyxJQUF2QixFQUE2QkMsV0FBN0IsRUFBMENRLGVBQTFDLEVBQTJETixZQUEzRCxFQUF5RUMsU0FBekUsQ0FSM0I7O0FBVUEsYUFBT1Esa0JBQVA7QUFDRDs7OztFQTdCOEJkLEk7O0FBZ0NqQ2UsT0FBT0MsT0FBUCxHQUFpQmYsa0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBSaWdodFJlY3Vyc3ZlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmlnaHRSZWN1cnNpdmUnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSaWdodFJlY3Vyc3ZlTm9kZSwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmhhc05vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xvb2tBaGVhZCgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUnVsZTtcbiJdfQ==