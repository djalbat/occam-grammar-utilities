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
    key: 'fromImmediatelyLeftRecursiveDefinition',
    value: function fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
      var parts = immediatelyLeftRecursiveDefinition.getParts();

      parts = cloneParts(parts); ///

      parts.shift(); ///

      var repeatedDefinition = new RepeatedDefinition(parts);

      return repeatedDefinition;
    }
  }]);

  return RepeatedDefinition;
}(Definition);

module.exports = RepeatedDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlcGVhdGVkLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydHNVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsImltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJyZXBlYXRlZERlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FBdkI7O0FBRU0sSUFBRUUsVUFBRixHQUFpQkgsT0FBakIsQ0FBRUcsVUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJGLGNBRGpCLENBQ0VFLFVBREY7O0lBR0FDLGtCOzs7Ozs7Ozs7OzsyREFDMENDLGtDLEVBQW9DO0FBQ2hGLFVBQUlDLFFBQVFELG1DQUFtQ0UsUUFBbkMsRUFBWjs7QUFFQUQsY0FBUUgsV0FBV0csS0FBWCxDQUFSLENBSGdGLENBR3BEOztBQUU1QkEsWUFBTUUsS0FBTixHQUxnRixDQUtoRTs7QUFFaEIsVUFBTUMscUJBQXFCLElBQUlMLGtCQUFKLENBQXVCRSxLQUF2QixDQUEzQjs7QUFFQSxhQUFPRyxrQkFBUDtBQUNEOzs7O0VBWDhCUCxVOztBQWNqQ1EsT0FBT0MsT0FBUCxHQUFpQlAsa0JBQWpCIiwiZmlsZSI6InJlcGVhdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0cycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGNsb25lUGFydHMgfSA9IHBhcnRzVXRpbGl0aWVzO1xuXG5jbGFzcyBSZXBlYXRlZERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21JbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cy5zaGlmdCgpOyAgLy8vXG5cbiAgICBjb25zdCByZXBlYXRlZERlZmluaXRpb24gPSBuZXcgUmVwZWF0ZWREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBlYXRlZERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRlZERlZmluaXRpb247XG4iXX0=