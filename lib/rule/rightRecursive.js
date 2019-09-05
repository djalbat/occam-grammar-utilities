'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RightRecursveNode = require('../node/rightRecursive'),
    RightRecursiveDefinition = require('../definition/rightRecursive');

var Rule = parsers.Rule;

var RightRecursiveRule = function (_Rule) {
  _inherits(RightRecursiveRule, _Rule);

  function RightRecursiveRule() {
    _classCallCheck(this, RightRecursiveRule);

    return _possibleConstructorReturn(this, (RightRecursiveRule.__proto__ || Object.getPrototypeOf(RightRecursiveRule)).apply(this, arguments));
  }

  _createClass(RightRecursiveRule, [{
    key: 'addRightRecursiveDefinition',
    value: function addRightRecursiveDefinition(rightRecursiveDefinition) {
      var definition = rightRecursiveDefinition; ///

      _get(RightRecursiveRule.prototype.__proto__ || Object.getPrototypeOf(RightRecursiveRule.prototype), 'addDefinition', this).call(this, definition);
    }
  }], [{
    key: 'fromRightRecursiveRuleName',
    value: function fromRightRecursiveRuleName(rightRecursiveRuleName) {
      var name = rightRecursiveRuleName,
          ///
      definitions = [],
          NonTerminalNode = RightRecursveNode,
          ///
      rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

      return rightRecursiveRule;
    }
  }, {
    key: 'fromDefinitionAndRightRecursiveRuleName',
    value: function fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
      var rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,
          ///
      definitions = [rightRecursiveDefinition],
          NonTerminalNode = RightRecursveNode,
          ///
      rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnN2ZU5vZGUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJSdWxlIiwiUmlnaHRSZWN1cnNpdmVSdWxlIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJmcm9tRGVmaW5pdGlvbkFuZFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLG9CQUFvQkQsUUFBUSx3QkFBUixDQUExQjtBQUFBLElBQ01FLDJCQUEyQkYsUUFBUSw4QkFBUixDQURqQzs7SUFHUUcsSSxHQUFTSixPLENBQVRJLEk7O0lBRUZDLGtCOzs7Ozs7Ozs7OztnREFDd0JDLHdCLEVBQTBCO0FBQ3BELFVBQU1DLGFBQWFELHdCQUFuQixDQURvRCxDQUNOOztBQUU5Qyw0SUFBb0JDLFVBQXBCO0FBQ0Q7OzsrQ0FFaUNDLHNCLEVBQXdCO0FBQ3hELFVBQU1DLE9BQU9ELHNCQUFiO0FBQUEsVUFBc0M7QUFDaENFLG9CQUFjLEVBRHBCO0FBQUEsVUFFTUMsa0JBQWtCVCxpQkFGeEI7QUFBQSxVQUUyQztBQUNyQ1UsMkJBQXFCLElBQUlQLGtCQUFKLENBQXVCSSxJQUF2QixFQUE2QkMsV0FBN0IsRUFBMENDLGVBQTFDLENBSDNCOztBQUtBLGFBQU9DLGtCQUFQO0FBQ0Q7Ozs0REFFOENMLFUsRUFBWUMsc0IsRUFBd0I7QUFDakYsVUFBTUYsMkJBQTJCSCx5QkFBeUJVLHVDQUF6QixDQUFpRU4sVUFBakUsRUFBNkVDLHNCQUE3RSxDQUFqQztBQUFBLFVBQ01DLE9BQU9ELHNCQURiO0FBQUEsVUFDc0M7QUFDaENFLG9CQUFjLENBQ1pKLHdCQURZLENBRnBCO0FBQUEsVUFLTUssa0JBQWtCVCxpQkFMeEI7QUFBQSxVQUsyQztBQUNyQ1UsMkJBQXFCLElBQUlQLGtCQUFKLENBQXVCSSxJQUF2QixFQUE2QkMsV0FBN0IsRUFBMENDLGVBQTFDLENBTjNCOztBQVFBLGFBQU9DLGtCQUFQO0FBQ0Q7Ozs7RUExQjhCUixJOztBQTZCakNVLE9BQU9DLE9BQVAsR0FBaUJWLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmlnaHRSZWN1cnN2ZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNvbnN0IHsgUnVsZSB9ID0gcGFyc2VycztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGFkZFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbihyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICBzdXBlci5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmlnaHRSZWN1cnN2ZU5vZGUsIC8vL1xuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSaWdodFJlY3Vyc3ZlTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVJ1bGU7XG4iXX0=