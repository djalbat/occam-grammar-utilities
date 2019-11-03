'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partsUtilities = require('../utilities/parts');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts;

var RepeatedDefinition = function (_Definition) {
  _inherits(RepeatedDefinition, _Definition);

  function RepeatedDefinition() {
    _classCallCheck(this, RepeatedDefinition);

    return _possibleConstructorReturn(this, (RepeatedDefinition.__proto__ || Object.getPrototypeOf(RepeatedDefinition)).apply(this, arguments));
  }

  _createClass(RepeatedDefinition, null, [{
    key: 'fromLeftRecursiveDefinition',
    value: function fromLeftRecursiveDefinition(leftRecursiveDefinition) {
      var parts = leftRecursiveDefinition.getParts();

      parts = cloneParts(parts); ///

      parts.shift(); ///

      var repeatedDefinition = new RepeatedDefinition(parts);

      return repeatedDefinition;
    }
  }]);

  return RepeatedDefinition;
}(Definition);

module.exports = RepeatedDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydHNVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInNoaWZ0IiwicmVwZWF0ZWREZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCRixjQURqQixDQUNFRSxVQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7Z0RBQytCQyx1QixFQUF5QjtBQUMxRCxVQUFJQyxRQUFRRCx3QkFBd0JFLFFBQXhCLEVBQVo7O0FBRUFELGNBQVFILFdBQVdHLEtBQVgsQ0FBUixDQUgwRCxDQUc5Qjs7QUFFNUJBLFlBQU1FLEtBQU4sR0FMMEQsQ0FLMUM7O0FBRWhCLFVBQU1DLHFCQUFxQixJQUFJTCxrQkFBSixDQUF1QkUsS0FBdkIsQ0FBM0I7O0FBRUEsYUFBT0csa0JBQVA7QUFDRDs7OztFQVg4QlAsVTs7QUFjakNRLE9BQU9DLE9BQVAsR0FBaUJQLGtCQUFqQiIsImZpbGUiOiJyZXBlYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydHMnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBjbG9uZVBhcnRzIH0gPSBwYXJ0c1V0aWxpdGllcztcblxuY2xhc3MgUmVwZWF0ZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWREZWZpbml0aW9uID0gbmV3IFJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0ZWREZWZpbml0aW9uO1xuIl19