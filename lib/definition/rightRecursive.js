'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    partsUtilities = require('../utilities/parts');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts,
    optionalRuleNamePartPartFromRuleName = partUtilities.optionalRuleNamePartPartFromRuleName;

var RightRecursiveDefinition = function (_Definition) {
  _inherits(RightRecursiveDefinition, _Definition);

  function RightRecursiveDefinition(parts, noWhitespace, lookAhead) {
    _classCallCheck(this, RightRecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RightRecursiveDefinition.__proto__ || Object.getPrototypeOf(RightRecursiveDefinition)).call(this, parts));

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RightRecursiveDefinition, [{
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }], [{
    key: 'fromRightRecursiveRuleNameAndImmediatelyLeftRecursiveDefinition',
    value: function fromRightRecursiveRuleNameAndImmediatelyLeftRecursiveDefinition(rightRecursiveRuleName, immediatelyLeftRecursiveDefinition) {
      var parts = immediatelyLeftRecursiveDefinition.getParts();

      parts = cloneParts(parts); ///

      var optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

      parts.push(optionalRightRecursiveRuleNamePart);

      var firstPart = parts.shift(),
          lookAhead = firstPart.isLookAhead(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace, lookAhead);

      return rightRecursiveDefinition;
    }
  }]);

  return RightRecursiveDefinition;
}(Definition);

module.exports = RightRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsInBhcnRzVXRpbGl0aWVzIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUiLCJSaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicHVzaCIsImZpcnN0UGFydCIsInNoaWZ0IiwiaXNMb29rQWhlYWQiLCJoYXNOb1doaXRlc3BhY2UiLCJyaWdodFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7O0FBR00sSUFBRUcsVUFBRixHQUFpQkosT0FBakIsQ0FBRUksVUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJGLGNBRGpCLENBQ0VFLFVBREY7QUFBQSxJQUVFQyxvQ0FGRixHQUUyQ0osYUFGM0MsQ0FFRUksb0NBRkY7O0lBSUFDLHdCOzs7QUFDSixvQ0FBWUMsS0FBWixFQUFtQkMsWUFBbkIsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQUEsb0pBQ3BDRixLQURvQzs7QUFHMUMsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFMMEM7QUFNM0M7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0QsWUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O29GQUVzRUMsc0IsRUFBd0JDLGtDLEVBQW9DO0FBQ2pJLFVBQUlKLFFBQVFJLG1DQUFtQ0MsUUFBbkMsRUFBWjs7QUFFQUwsY0FBUUgsV0FBV0csS0FBWCxDQUFSLENBSGlJLENBR3JHOztBQUU1QixVQUFNTSxxQ0FBcUNSLHFDQUFxQ0ssc0JBQXJDLENBQTNDOztBQUVBSCxZQUFNTyxJQUFOLENBQVdELGtDQUFYOztBQUVBLFVBQU1FLFlBQVlSLE1BQU1TLEtBQU4sRUFBbEI7QUFBQSxVQUNNUCxZQUFZTSxVQUFVRSxXQUFWLEVBRGxCO0FBQUEsVUFFTVQsZUFBZU8sVUFBVUcsZUFBVixFQUZyQjtBQUFBLFVBR01DLDJCQUEyQixJQUFJYix3QkFBSixDQUE2QkMsS0FBN0IsRUFBb0NDLFlBQXBDLEVBQWtEQyxTQUFsRCxDQUhqQzs7QUFLQSxhQUFPVSx3QkFBUDtBQUNEOzs7O0VBaENvQ2hCLFU7O0FBbUN2Q2lCLE9BQU9DLE9BQVAsR0FBaUJmLHdCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBwYXJ0c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJ0cycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IGNsb25lUGFydHMgfSA9IHBhcnRzVXRpbGl0aWVzLFxuICAgICAgeyBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmlnaHRSZWN1cnNpdmVSdWxlTmFtZUFuZEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSwgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmaXJzdFBhcnQuaXNMb29rQWhlYWQoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmaXJzdFBhcnQuaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==