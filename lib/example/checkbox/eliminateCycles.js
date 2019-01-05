'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var EliminateCyclesCheckbox = function (_Element) {
  _inherits(EliminateCyclesCheckbox, _Element);

  function EliminateCyclesCheckbox(selector, changeHandler, checked) {
    _classCallCheck(this, EliminateCyclesCheckbox);

    var _this = _possibleConstructorReturn(this, (EliminateCyclesCheckbox.__proto__ || Object.getPrototypeOf(EliminateCyclesCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(EliminateCyclesCheckbox, [{
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
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var domElement = this.getDOMElement();

      domElement.checked = checked;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var checkEliminateCyclesCheckbox = this.check.bind(this),
          ///
      isEliminateCyclesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        checkEliminateCyclesCheckbox: checkEliminateCyclesCheckbox,
        isEliminateCyclesCheckboxChecked: isEliminateCyclesCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          eliminateCyclesCheckbox = Element.fromProperties(EliminateCyclesCheckbox, properties, changeHandler, checked);


      return eliminateCyclesCheckbox;
    }
  }]);

  return EliminateCyclesCheckbox;
}(Element);

Object.assign(EliminateCyclesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-cycles'
  },
  ignoredProperties: ['onChange', 'checked']
});

module.exports = EliminateCyclesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZUN5Y2xlcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNoZWNrIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJiaW5kIiwiaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJwcm9wZXJ0aWVzIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLHVCOzs7QUFDSixtQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUEsa0pBQ3RDRixRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7Ozs2QkFFUUQsYSxFQUFlSyxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJSLGFBQWpCLEVBQWdDSyxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNOLGEsRUFBZUssTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVCxhQUFsQixFQUFpQ0ssTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7O2dDQUVXO0FBQ1YsVUFBTUssYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTVYsVUFBVVMsV0FBV1QsT0FEM0I7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7NEJBRXFCO0FBQUEsVUFBaEJBLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCLFVBQU1TLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjs7QUFFQUQsaUJBQVdULE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1XLCtCQUErQixLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBckM7QUFBQSxVQUE0RDtBQUN0REMseUNBQW1DLEtBQUtDLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUR6QyxDQURjLENBRXNEOztBQUVwRSxhQUFRO0FBQ05ELGtFQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCRSxVLEVBQVk7QUFBQSxVQUN4QmIsUUFEd0IsR0FDRmEsVUFERSxDQUN4QmIsUUFEd0I7QUFBQSxVQUNkRixPQURjLEdBQ0ZlLFVBREUsQ0FDZGYsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJjLHVCQUgwQixHQUdBcEIsUUFBUXFCLGNBQVIsQ0FBdUJwQix1QkFBdkIsRUFBZ0RrQixVQUFoRCxFQUE0RGhCLGFBQTVELEVBQTJFQyxPQUEzRSxDQUhBOzs7QUFLaEMsYUFBT2dCLHVCQUFQO0FBQ0Q7Ozs7RUFsRG1DcEIsTzs7QUFvRHRDc0IsT0FBT0MsTUFBUCxDQUFjdEIsdUJBQWQsRUFBdUM7QUFDckN1QixXQUFTLE9BRDRCO0FBRXJDQyxxQkFBbUI7QUFDakJDLFVBQU0sVUFEVztBQUVqQkMsZUFBVztBQUZNLEdBRmtCO0FBTXJDQyxxQkFBbUIsQ0FDakIsVUFEaUIsRUFFakIsU0FGaUI7QUFOa0IsQ0FBdkM7O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUI3Qix1QkFBakI7O0FBRUEsU0FBU1MsZ0NBQVQsQ0FBMENQLGFBQTFDLEVBQXlENEIsS0FBekQsRUFBZ0VDLGFBQWhFLEVBQStFO0FBQzdFLE1BQU1DLFdBQVdELGFBQWpCO0FBQUEsTUFBZ0M7QUFDMUI1QixZQUFVNkIsU0FBU2YsU0FBVCxFQURoQjs7QUFHQWYsZ0JBQWNDLE9BQWQsRUFBdUIyQixLQUF2QixFQUE4QkMsYUFBOUI7QUFDRCIsImZpbGUiOiJlbGltaW5hdGVDeWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpOyAgLy8vXG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2hlY2tFbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IHRoaXMuY2hlY2suYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2hlY2tFbGltaW5hdGVDeWNsZXNDaGVja2JveCxcbiAgICAgIGlzRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBlbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuXG4gICAgcmV0dXJuIGVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94O1xuICB9fVxuXG5PYmplY3QuYXNzaWduKEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBjbGFzc05hbWU6ICdlbGltaW5hdGUtY3ljbGVzJ1xuICB9LFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=