'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var RemoveIntermediateNodesCheckbox = function (_Element) {
  _inherits(RemoveIntermediateNodesCheckbox, _Element);

  function RemoveIntermediateNodesCheckbox(selector, changeHandler) {
    _classCallCheck(this, RemoveIntermediateNodesCheckbox);

    var _this = _possibleConstructorReturn(this, (RemoveIntermediateNodesCheckbox.__proto__ || Object.getPrototypeOf(RemoveIntermediateNodesCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(RemoveIntermediateNodesCheckbox, [{
    key: 'onChange',
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;

      return checked;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var isRemoveIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        isRemoveIntermediateNodesCheckboxChecked: isRemoveIntermediateNodesCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          removeIntermediateNodesCheckbox = Element.fromProperties(RemoveIntermediateNodesCheckbox, properties, changeHandler);


      return removeIntermediateNodesCheckbox;
    }
  }]);

  return RemoveIntermediateNodesCheckbox;
}(Element);

Object.assign(RemoveIntermediateNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'remove-intermediate-nodes'
  },
  ignoredProperties: ['onChange']
});

module.exports = RemoveIntermediateNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L3JlbW92ZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjaGVja2VkIiwiaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsImJpbmQiLCJwcm9wZXJ0aWVzIiwicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImNoZWNrYm94Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsK0I7OztBQUNKLDJDQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQztBQUFBOztBQUFBLGtLQUM3QkQsUUFENkI7O0FBR25DLFFBQUlDLGtCQUFrQkMsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7NkJBRVFBLGEsRUFBZUcsTSxFQUFzRTtBQUFBLFVBQTlEQyx5QkFBOEQsdUVBQWxDQyxnQ0FBa0M7O0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCTixhQUFqQixFQUFnQ0csTUFBaEMsRUFBd0NDLHlCQUF4QyxFQUQ0RixDQUN2QjtBQUN0RTs7OzhCQUVTSixhLEVBQWVHLE0sRUFBUTtBQUMvQixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlAsYUFBbEIsRUFBaUNHLE1BQWpDLEVBRCtCLENBQ1k7QUFDNUM7OztnQ0FFVztBQUNWLFVBQU1LLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFVBQVVGLFdBQVdFLE9BRDNCOztBQUdBLGFBQU9BLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsMkNBQTJDLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFqRCxDQURjLENBQzhEOztBQUU1RSxhQUFRO0FBQ05GO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRyxVLEVBQVk7QUFDMUIsVUFBRVosUUFBRixHQUFlWSxVQUFmLENBQUVaLFFBQUY7QUFBQSxVQUNBRixhQURBLEdBQ2dCRSxRQURoQjtBQUFBLFVBRUFhLCtCQUZBLEdBRWtDbEIsUUFBUW1CLGNBQVIsQ0FBdUJsQiwrQkFBdkIsRUFBd0RnQixVQUF4RCxFQUFvRWQsYUFBcEUsQ0FGbEM7OztBQUlOLGFBQU9lLCtCQUFQO0FBQ0Q7Ozs7RUF0QzJDbEIsTzs7QUF3QzlDb0IsT0FBT0MsTUFBUCxDQUFjcEIsK0JBQWQsRUFBK0M7QUFDN0NxQixXQUFTLE9BRG9DO0FBRTdDQyxxQkFBbUI7QUFDakJDLFVBQU0sVUFEVztBQUVqQkMsZUFBVztBQUZNLEdBRjBCO0FBTTdDQyxxQkFBbUIsQ0FDakIsVUFEaUI7QUFOMEIsQ0FBL0M7O0FBV0FDLE9BQU9DLE9BQVAsR0FBaUIzQiwrQkFBakI7O0FBRUEsU0FBU08sZ0NBQVQsQ0FBMENMLGFBQTFDLEVBQXlEMEIsS0FBekQsRUFBZ0VDLGFBQWhFLEVBQStFO0FBQzdFLE1BQU1DLFdBQVdELGFBQWpCO0FBQUEsTUFBZ0M7QUFDMUJqQixZQUFVa0IsU0FBU2hCLFNBQVQsRUFEaEI7O0FBR0FaLGdCQUFjVSxPQUFkLEVBQXVCZ0IsS0FBdkIsRUFBOEJDLGFBQTlCO0FBQ0QiLCJmaWxlIjoicmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUmVtb3ZlSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpOyAgLy8vXG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBpc1JlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICByZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcblxuICAgIHJldHVybiByZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94O1xuICB9fVxuXG5PYmplY3QuYXNzaWduKFJlbW92ZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3gsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGNsYXNzTmFtZTogJ3JlbW92ZS1pbnRlcm1lZGlhdGUtbm9kZXMnXG4gIH0sXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW1vdmVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=