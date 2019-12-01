'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = require('../types'),
    definitionUtilities = require('../utilities/definition'),
    RecursiveDefinition = require('../definition/recursive');

var LEFT_RECURSIVE_TYPE = types.LEFT_RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var LeftRecursiveDefinition = function (_RecursiveDefinition) {
  _inherits(LeftRecursiveDefinition, _RecursiveDefinition);

  function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    _classCallCheck(this, LeftRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (LeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(LeftRecursiveDefinition)).call(this, type, parts, ruleName, definition, recursiveRuleNames));

    _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
    return _this;
  }

  _createClass(LeftRecursiveDefinition, [{
    key: 'getLeftRecursiveRuleNames',
    value: function getLeftRecursiveRuleNames() {
      return this.leftRecursiveRuleNames;
    }
  }, {
    key: 'rewrite',
    value: function rewrite(rules) {
      ///
    }
  }], [{
    key: 'fromRuleNameAndDefinition',
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var leftRecursiveDefinition = null;

      var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        var type = LEFT_RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

        leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(RecursiveDefinition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsidHlwZXMiLCJyZXF1aXJlIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJydWxlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLHlCQUFSLENBRDVCO0FBQUEsSUFFTUUsc0JBQXNCRixRQUFRLHlCQUFSLENBRjVCOztBQUlNLElBQUVHLG1CQUFGLEdBQTBCSixLQUExQixDQUFFSSxtQkFBRjtBQUFBLElBQ0VDLGdDQURGLEdBQzZFSCxtQkFEN0UsQ0FDRUcsZ0NBREY7QUFBQSxJQUNvQ0Msb0NBRHBDLEdBQzZFSixtQkFEN0UsQ0FDb0NJLG9DQURwQzs7SUFHQUMsdUI7OztBQUNKLG1DQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxrQkFBL0MsRUFBbUVDLHNCQUFuRSxFQUEyRjtBQUFBOztBQUFBLGtKQUNuRkwsSUFEbUYsRUFDN0VDLEtBRDZFLEVBQ3RFQyxRQURzRSxFQUM1REMsVUFENEQsRUFDaERDLGtCQURnRDs7QUFHekYsVUFBS0Msc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUh5RjtBQUkxRjs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLQSxzQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTztBQUNiO0FBQ0Q7Ozs4Q0FFZ0NKLFEsRUFBVUMsVSxFQUFZO0FBQ3JELFVBQUlJLDBCQUEwQixJQUE5Qjs7QUFFQSxVQUFNRix5QkFBeUJQLHFDQUFxQ0ssVUFBckMsQ0FBL0I7QUFBQSxVQUNNSywrQkFBK0JILHVCQUF1QkksTUFENUQ7QUFBQSxVQUVNQywwQkFBMkJGLCtCQUErQixDQUZoRTs7QUFJQSxVQUFJRSx1QkFBSixFQUE2QjtBQUMzQixZQUFNVixPQUFPSixtQkFBYjtBQUFBLFlBQ01LLFFBQVFFLFdBQVdRLFFBQVgsRUFEZDtBQUFBLFlBRU1QLHFCQUFxQlAsaUNBQWlDTSxVQUFqQyxDQUYzQjs7QUFJQUksa0NBQTBCLElBQUlSLHVCQUFKLENBQTRCQyxJQUE1QixFQUFrQ0MsS0FBbEMsRUFBeUNDLFFBQXpDLEVBQW1EQyxVQUFuRCxFQUErREMsa0JBQS9ELEVBQW1GQyxzQkFBbkYsQ0FBMUI7QUFDRDs7QUFFRCxhQUFPRSx1QkFBUDtBQUNEOzs7O0VBL0JtQ1osbUI7O0FBa0N0Q2lCLE9BQU9DLE9BQVAsR0FBaUJkLHVCQUFqQiIsImZpbGUiOiJsZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2RlZmluaXRpb24nKSxcbiAgICAgIFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IExFRlRfUkVDVVJTSVZFX1RZUEUgfSA9IHR5cGVzLFxuICAgICAgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBMRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19