'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partsUtilities = require('../utilities/parts');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts;

var RightRecursiveDefinition = function (_Definition) {
  _inherits(RightRecursiveDefinition, _Definition);

  function RightRecursiveDefinition(parts, noWhitespace) {
    _classCallCheck(this, RightRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).call(this, parts));

    _this.noWhitespace = noWhitespace;
    return _this;
  }

  _createClass(RightRecursiveDefinition, [{
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }], [{
    key: 'fromLeftRecursiveDefinition',
    value: function fromLeftRecursiveDefinition(leftRecursiveDefinition) {
      var parts = leftRecursiveDefinition.getParts();

      parts = cloneParts(parts); ///

      var firstPart = parts.shift(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace);

      return rightRecursiveDefinition;
    }
  }]);

  return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydHNVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIlJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwibm9XaGl0ZXNwYWNlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInNoaWZ0IiwiaGFzTm9XaGl0ZXNwYWNlIiwicmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCRixjQURqQixDQUNFRSxVQURGOztJQUdBQyx3Qjs7O0FBQ0osb0NBQVlDLEtBQVosRUFBbUJDLFlBQW5CLEVBQWlDO0FBQUE7O0FBQUEsb0pBQ3pCRCxLQUR5Qjs7QUFHL0IsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFIK0I7QUFJaEM7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7Z0RBRWtDQyx1QixFQUF5QjtBQUMxRCxVQUFJRixRQUFRRSx3QkFBd0JDLFFBQXhCLEVBQVo7O0FBRUFILGNBQVFGLFdBQVdFLEtBQVgsQ0FBUixDQUgwRCxDQUc5Qjs7QUFFNUIsVUFBTUksWUFBWUosTUFBTUssS0FBTixFQUFsQjtBQUFBLFVBQ01KLGVBQWVHLFVBQVVFLGVBQVYsRUFEckI7QUFBQSxVQUVNQywyQkFBMkIsSUFBSVIsd0JBQUosQ0FBNkJDLEtBQTdCLEVBQW9DQyxZQUFwQyxDQUZqQzs7QUFJQSxhQUFPTSx3QkFBUDtBQUNEOzs7O0VBckJvQ1YsVTs7QUF3QnZDVyxPQUFPQyxPQUFQLEdBQWlCVix3QkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZpcnN0UGFydC5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==