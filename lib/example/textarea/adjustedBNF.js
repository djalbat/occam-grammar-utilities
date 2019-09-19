'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var AdjustedBNFTextarea = function (_InputElement) {
  _inherits(AdjustedBNFTextarea, _InputElement);

  function AdjustedBNFTextarea() {
    _classCallCheck(this, AdjustedBNFTextarea);

    return _possibleConstructorReturn(this, (AdjustedBNFTextarea.__proto__ || Object.getPrototypeOf(AdjustedBNFTextarea)).apply(this, arguments));
  }

  _createClass(AdjustedBNFTextarea, [{
    key: 'clearAdjustedBNF',
    value: function clearAdjustedBNF() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'setAdjustedBNF',
    value: function setAdjustedBNF(adjustedBNF) {
      var value = adjustedBNF; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);

      return {
        setAdjustedBNF: setAdjustedBNF,
        clearAdjustedBNF: clearAdjustedBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(AdjustedBNFTextarea, properties);
    }
  }]);

  return AdjustedBNFTextarea;
}(InputElement);

Object.assign(AdjustedBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'adjusted-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = AdjustedBNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2FkanVzdGVkQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInZhbHVlIiwic2V0VmFsdWUiLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiYmluZCIsImNsZWFyQWRqdXN0ZWRCTkYiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7dUNBQ2U7QUFDakIsVUFBTUMsUUFBUSxFQUFkOztBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7bUNBRWNFLFcsRUFBYTtBQUMxQixVQUFNRixRQUFRRSxXQUFkLENBRDBCLENBQ0U7O0FBRTVCLFdBQUtELFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxpQkFBaUIsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdkI7QUFBQSxVQUNNQyxtQkFBbUIsS0FBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRHpCOztBQUdBLGFBQVE7QUFDTkQsc0NBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9SLGFBQWFTLGNBQWIsQ0FBNEJSLG1CQUE1QixFQUFpRE8sVUFBakQsQ0FBUDtBQUFzRTs7OztFQXZCMUVSLFk7O0FBMEJsQ1UsT0FBT0MsTUFBUCxDQUFjVixtQkFBZCxFQUFtQztBQUNqQ1csV0FBUyxVQUR3QjtBQUVqQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLGNBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVU7QUFITztBQUZjLENBQW5DOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCakIsbUJBQWpCIiwiZmlsZSI6ImFkanVzdGVkQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgQWRqdXN0ZWRCTkZUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsZWFyQWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0QWRqdXN0ZWRCTkYgPSB0aGlzLnNldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJBZGp1c3RlZEJORiA9IHRoaXMuY2xlYXJBZGp1c3RlZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRBZGp1c3RlZEJORixcbiAgICAgIGNsZWFyQWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQWRqdXN0ZWRCTkZUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihBZGp1c3RlZEJORlRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYWRqdXN0ZWQtYm5mJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkanVzdGVkQk5GVGV4dGFyZWE7XG4iXX0=