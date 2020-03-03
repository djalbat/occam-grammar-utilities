'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var InputElement = easy.InputElement;

var AdjustedBNFTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(AdjustedBNFTextarea, _InputElement);

  function AdjustedBNFTextarea() {
    _classCallCheck(this, AdjustedBNFTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdjustedBNFTextarea).apply(this, arguments));
  }

  _createClass(AdjustedBNFTextarea, [{
    key: "clearAdjustedBNF",
    value: function clearAdjustedBNF() {
      var value = '';
      this.setValue(value);
    }
  }, {
    key: "setAdjustedBNF",
    value: function setAdjustedBNF(adjustedBNF) {
      var value = adjustedBNF; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);
      return {
        setAdjustedBNF: setAdjustedBNF,
        clearAdjustedBNF: clearAdjustedBNF
      };
    }
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkanVzdGVkQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInZhbHVlIiwic2V0VmFsdWUiLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiYmluZCIsImNsZWFyQWRqdXN0ZWRCTkYiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7dUNBQ2U7QUFDakIsVUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRDs7O21DQUVjRSxXLEVBQWE7QUFDMUIsVUFBTUYsS0FBSyxHQUFHRSxXQUFkLENBRDBCLENBQ0U7O0FBRTVCLFdBQUtELFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxjQUFjLEdBQUcsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdkI7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBRyxLQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEekI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLGNBQWMsRUFBZEEsY0FETTtBQUVORSxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPUixZQUFZLENBQUNTLGNBQWIsQ0FBNEJSLG1CQUE1QixFQUFpRE8sVUFBakQsQ0FBUDtBQUFzRTs7OztFQXZCMUVSLFk7O0FBMEJsQ1UsTUFBTSxDQUFDQyxNQUFQLENBQWNWLG1CQUFkLEVBQW1DO0FBQ2pDVyxFQUFBQSxPQUFPLEVBQUUsVUFEd0I7QUFFakNDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsY0FETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFLE9BRks7QUFHakJDLElBQUFBLFFBQVEsRUFBRTtBQUhPO0FBRmMsQ0FBbkM7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgQWRqdXN0ZWRCTkZUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsZWFyQWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkanVzdGVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0QWRqdXN0ZWRCTkYgPSB0aGlzLnNldEFkanVzdGVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJBZGp1c3RlZEJORiA9IHRoaXMuY2xlYXJBZGp1c3RlZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRBZGp1c3RlZEJORixcbiAgICAgIGNsZWFyQWRqdXN0ZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQWRqdXN0ZWRCTkZUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihBZGp1c3RlZEJORlRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYWRqdXN0ZWQtYm5mJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkanVzdGVkQk5GVGV4dGFyZWE7XG4iXX0=