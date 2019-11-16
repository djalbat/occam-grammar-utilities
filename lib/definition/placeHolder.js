'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var Definition = parsers.Definition;

var PlaceHolderDefinition = function (_Definition) {
  _inherits(PlaceHolderDefinition, _Definition);

  function PlaceHolderDefinition(parts, leftRecursiveDefinition) {
    _classCallCheck(this, PlaceHolderDefinition);

    var _this = _possibleConstructorReturn(this, (PlaceHolderDefinition.__proto__ || Object.getPrototypeOf(PlaceHolderDefinition)).call(this, parts));

    _this.leftRecursiveDefinition = leftRecursiveDefinition;
    return _this;
  }

  _createClass(PlaceHolderDefinition, [{
    key: 'getLeftRecursiveDefinition',
    value: function getLeftRecursiveDefinition() {
      return this.leftRecursiveDefinition;
    }
  }], [{
    key: 'fromLeftRecursiveDefinition',
    value: function fromLeftRecursiveDefinition(leftRecursiveDefinition) {
      var parts = [],
          placeHolderDefinition = new PlaceHolderDefinition(parts, leftRecursiveDefinition);

      return placeHolderDefinition;
    }
  }]);

  return PlaceHolderDefinition;
}(Definition);

module.exports = PlaceHolderDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3BsYWNlSG9sZGVyLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIlBsYWNlSG9sZGVyRGVmaW5pdGlvbiIsInBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwbGFjZUhvbGRlckRlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsVSxHQUFlRixPLENBQWZFLFU7O0lBRUZDLHFCOzs7QUFDSixpQ0FBWUMsS0FBWixFQUFtQkMsdUJBQW5CLEVBQTRDO0FBQUE7O0FBQUEsOElBQ3BDRCxLQURvQzs7QUFHMUMsVUFBS0MsdUJBQUwsR0FBK0JBLHVCQUEvQjtBQUgwQztBQUkzQzs7OztpREFFNEI7QUFDM0IsYUFBTyxLQUFLQSx1QkFBWjtBQUNEOzs7Z0RBRWtDQSx1QixFQUF5QjtBQUMxRCxVQUFNRCxRQUFRLEVBQWQ7QUFBQSxVQUNNRSx3QkFBd0IsSUFBSUgscUJBQUosQ0FBMEJDLEtBQTFCLEVBQWlDQyx1QkFBakMsQ0FEOUI7O0FBR0EsYUFBT0MscUJBQVA7QUFDRDs7OztFQWhCaUNKLFU7O0FBbUJwQ0ssT0FBT0MsT0FBUCxHQUFpQkwscUJBQWpCIiwiZmlsZSI6InBsYWNlSG9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIFBsYWNlSG9sZGVyRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgIHBsYWNlSG9sZGVyRGVmaW5pdGlvbiA9IG5ldyBQbGFjZUhvbGRlckRlZmluaXRpb24ocGFydHMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHJldHVybiBwbGFjZUhvbGRlckRlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGFjZUhvbGRlckRlZmluaXRpb247XG4iXX0=