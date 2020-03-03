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

var ParseTreeTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: "setParseTree",
    value: function setParseTree(parseTree) {
      if (parseTree !== null) {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString(),
            value = parseTreeString; ///

        this.setValue(value);
      } else {
        this.clearParseTree();
      }
    }
  }, {
    key: "clearParseTree",
    value: function clearParseTree() {
      var value = '';
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);
      return {
        setParseTree: setParseTree,
        clearParseTree: clearParseTree
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ParseTreeTextarea, properties);
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});
module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJiaW5kIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsaUI7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBSUEsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCQSxRQUFBQSxTQUFTLENBQUNDLFNBQVYsR0FEc0IsQ0FDRTs7QUFFeEIsWUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVYsRUFBeEI7QUFBQSxZQUNNQyxLQUFLLEdBQUdGLGVBRGQsQ0FIc0IsQ0FJVTs7QUFFaEMsYUFBS0csUUFBTCxDQUFjRCxLQUFkO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS0UsY0FBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFBQSxVQUNNRixjQUFjLEdBQUcsS0FBS0EsY0FBTCxDQUFvQkUsSUFBcEIsQ0FBeUIsSUFBekIsQ0FEdkI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLFlBQVksRUFBWkEsWUFETTtBQUVORCxRQUFBQSxjQUFjLEVBQWRBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPWCxZQUFZLENBQUNZLGNBQWIsQ0FBNEJYLGlCQUE1QixFQUErQ1UsVUFBL0MsQ0FBUDtBQUFvRTs7OztFQTlCMUVYLFk7O0FBaUNoQ2EsTUFBTSxDQUFDQyxNQUFQLENBQWNiLGlCQUFkLEVBQWlDO0FBQy9CYyxFQUFBQSxPQUFPLEVBQUUsVUFEc0I7QUFFL0JDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsWUFETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFLE9BRks7QUFHakJDLElBQUFBLFFBQVEsRUFBRTtBQUhPO0FBRlksQ0FBakM7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsaUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gJyc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFyc2VUcmVlVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUGFyc2VUcmVlVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdwYXJzZS10cmVlJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZVRleHRhcmVhO1xuIl19