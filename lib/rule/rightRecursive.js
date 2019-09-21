'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RightRecursiveNode = require('../node/rightRecursive');

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

      this.addDefinition(definition);
    }
  }], [{
    key: 'fromRightRecursiveRuleName',
    value: function fromRightRecursiveRuleName(rightRecursiveRuleName) {
      var name = rightRecursiveRuleName,
          ///
      definitions = [],
          NonTerminalNode = RightRecursiveNode,
          ///
      rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

      return rightRecursiveRule;
    }
  }]);

  return RightRecursiveRule;
}(Rule);

module.exports = RightRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmlnaHRSZWN1cnNpdmVOb2RlIiwiUnVsZSIsIlJpZ2h0UmVjdXJzaXZlUnVsZSIsInJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLHFCQUFxQkQsUUFBUSx3QkFBUixDQUEzQjs7SUFFUUUsSSxHQUFTSCxPLENBQVRHLEk7O0lBRUZDLGtCOzs7Ozs7Ozs7OztnREFDd0JDLHdCLEVBQTBCO0FBQ3BELFVBQU1DLGFBQWFELHdCQUFuQixDQURvRCxDQUNOOztBQUU5QyxXQUFLRSxhQUFMLENBQW1CRCxVQUFuQjtBQUNEOzs7K0NBRWlDRSxzQixFQUF3QjtBQUN4RCxVQUFNQyxPQUFPRCxzQkFBYjtBQUFBLFVBQXNDO0FBQ2hDRSxvQkFBYyxFQURwQjtBQUFBLFVBRU1DLGtCQUFrQlQsa0JBRnhCO0FBQUEsVUFFNEM7QUFDdENVLDJCQUFxQixJQUFJUixrQkFBSixDQUF1QkssSUFBdkIsRUFBNkJDLFdBQTdCLEVBQTBDQyxlQUExQyxDQUgzQjs7QUFLQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBZDhCVCxJOztBQWlCakNVLE9BQU9DLE9BQVAsR0FBaUJWLGtCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmlnaHRSZWN1cnNpdmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBhZGRSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24ocmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgdGhpcy5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lKHJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmlnaHRSZWN1cnNpdmVOb2RlLCAvLy9cbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUnVsZTtcbiJdfQ==