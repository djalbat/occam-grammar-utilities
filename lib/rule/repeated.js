'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var RepeatedNode = require('../node/repeated');

var Rule = parsers.Rule;

var RepeatedRule = function (_Rule) {
  _inherits(RepeatedRule, _Rule);

  function RepeatedRule() {
    _classCallCheck(this, RepeatedRule);

    return _possibleConstructorReturn(this, (RepeatedRule.__proto__ || Object.getPrototypeOf(RepeatedRule)).apply(this, arguments));
  }

  _createClass(RepeatedRule, null, [{
    key: 'fromRepeatedRuleName',
    value: function fromRepeatedRuleName(repeatedRuleName) {
      var name = repeatedRuleName,
          ///
      definitions = [],
          NonTerminalNode = RepeatedNode,
          ///
      repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);

      return repeatedRule;
    }
  }]);

  return RepeatedRule;
}(Rule);

module.exports = RepeatedRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiUmVwZWF0ZWROb2RlIiwiUnVsZSIsIlJlcGVhdGVkUnVsZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJyZXBlYXRlZFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLGtCQUFSLENBQXJCOztJQUVRRSxJLEdBQVNILE8sQ0FBVEcsSTs7SUFFRkMsWTs7Ozs7Ozs7Ozs7eUNBQ3dCQyxnQixFQUFrQjtBQUM1QyxVQUFNQyxPQUFPRCxnQkFBYjtBQUFBLFVBQWdDO0FBQzFCRSxvQkFBYyxFQURwQjtBQUFBLFVBRU1DLGtCQUFrQk4sWUFGeEI7QUFBQSxVQUVzQztBQUNoQ08scUJBQWUsSUFBSUwsWUFBSixDQUFpQkUsSUFBakIsRUFBdUJDLFdBQXZCLEVBQW9DQyxlQUFwQyxDQUhyQjs7QUFLQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7RUFSd0JOLEk7O0FBVzNCTyxPQUFPQyxPQUFQLEdBQWlCUCxZQUFqQiIsImZpbGUiOiJyZXBlYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgUmVwZWF0ZWROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZXBlYXRlZCcpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZXBlYXRlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGVhdGVkUnVsZSA9IG5ldyBSZXBlYXRlZFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0ZWRSdWxlO1xuIl19