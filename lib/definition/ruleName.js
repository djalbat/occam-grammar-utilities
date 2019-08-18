'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var RuleNameDefinition = function (_Definition) {
  _inherits(RuleNameDefinition, _Definition);

  function RuleNameDefinition() {
    _classCallCheck(this, RuleNameDefinition);

    return _possibleConstructorReturn(this, (RuleNameDefinition.__proto__ || Object.getPrototypeOf(RuleNameDefinition)).apply(this, arguments));
  }

  _createClass(RuleNameDefinition, null, [{
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var ruleNamePart = ruleNamePartFromRuleName(ruleName),
          parts = [ruleNamePart],
          nonRecursiveDefinition = new RuleNameDefinition(parts);

      return nonRecursiveDefinition;
    }
  }]);

  return RuleNameDefinition;
}(Definition);

module.exports = RuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJSdWxlTmFtZURlZmluaXRpb24iLCJydWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsInBhcnRzIiwibm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxtQkFBUixDQUF0Qjs7QUFFTSxJQUFFRSxVQUFGLEdBQWlCSCxPQUFqQixDQUFFRyxVQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDK0JGLGFBRC9CLENBQ0VFLHdCQURGOztJQUdBQyxrQjs7Ozs7Ozs7Ozs7aUNBQ2dCQyxRLEVBQVU7QUFDNUIsVUFBTUMsZUFBZUgseUJBQXlCRSxRQUF6QixDQUFyQjtBQUFBLFVBQ01FLFFBQVEsQ0FDTkQsWUFETSxDQURkO0FBQUEsVUFJTUUseUJBQXlCLElBQUlKLGtCQUFKLENBQXVCRyxLQUF2QixDQUovQjs7QUFNQSxhQUFPQyxzQkFBUDtBQUNEOzs7O0VBVDhCTixVOztBQVlqQ08sT0FBT0MsT0FBUCxHQUFpQk4sa0JBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIG5vblJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZURlZmluaXRpb247XG4iXX0=