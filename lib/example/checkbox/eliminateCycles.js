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
      enableEliminateCyclesCheckbox = this.enable.bind(this),
          ///
      disableEliminateCyclesCheckbox = this.disable.bind(this),
          ///
      isEliminateCyclesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        checkEliminateCyclesCheckbox: checkEliminateCyclesCheckbox,
        enableEliminateCyclesCheckbox: enableEliminateCyclesCheckbox,
        disableEliminateCyclesCheckbox: disableEliminateCyclesCheckbox,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZUN5Y2xlcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJFbGltaW5hdGVDeWNsZXNDaGVja2JveCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNoZWNrIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNoZWNrRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJiaW5kIiwiZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJlbmFibGUiLCJkaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJkaXNhYmxlIiwiaXNFbGltaW5hdGVDeWNsZXNDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJwcm9wZXJ0aWVzIiwiZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3giLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLHVCOzs7QUFDSixtQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUEsa0pBQ3RDRixRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7Ozs2QkFFUUQsYSxFQUFlSyxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJSLGFBQWpCLEVBQWdDSyxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNOLGEsRUFBZUssTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVCxhQUFsQixFQUFpQ0ssTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7O2dDQUVXO0FBQ1YsVUFBTUssYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTVYsVUFBVVMsV0FBV1QsT0FEM0I7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7NEJBRXFCO0FBQUEsVUFBaEJBLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCLFVBQU1TLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjs7QUFFQUQsaUJBQVdULE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1XLCtCQUErQixLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBckM7QUFBQSxVQUE0RDtBQUN0REMsc0NBQWdDLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUR0QztBQUFBLFVBQzhEO0FBQ3hERyx1Q0FBaUMsS0FBS0MsT0FBTCxDQUFhSixJQUFiLENBQWtCLElBQWxCLENBRnZDO0FBQUEsVUFFZ0U7QUFDMURLLHlDQUFtQyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FIekMsQ0FEYyxDQUlzRDs7QUFFcEUsYUFBUTtBQUNORCxrRUFETTtBQUVORSxvRUFGTTtBQUdORSxzRUFITTtBQUlORTtBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsVUFDeEJqQixRQUR3QixHQUNGaUIsVUFERSxDQUN4QmpCLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGbUIsVUFERSxDQUNkbkIsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJrQix1QkFIMEIsR0FHQXhCLFFBQVF5QixjQUFSLENBQXVCeEIsdUJBQXZCLEVBQWdEc0IsVUFBaEQsRUFBNERwQixhQUE1RCxFQUEyRUMsT0FBM0UsQ0FIQTs7O0FBS2hDLGFBQU9vQix1QkFBUDtBQUNEOzs7O0VBdERtQ3hCLE87O0FBd0R0QzBCLE9BQU9DLE1BQVAsQ0FBYzFCLHVCQUFkLEVBQXVDO0FBQ3JDMkIsV0FBUyxPQUQ0QjtBQUVyQ0MscUJBQW1CO0FBQ2pCQyxVQUFNLFVBRFc7QUFFakJDLGVBQVc7QUFGTSxHQUZrQjtBQU1yQ0MscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCO0FBTmtCLENBQXZDOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCakMsdUJBQWpCOztBQUVBLFNBQVNTLGdDQUFULENBQTBDUCxhQUExQyxFQUF5RGdDLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNQyxXQUFXRCxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCaEMsWUFBVWlDLFNBQVNmLFNBQVQsRUFEaEI7O0FBR0FuQixnQkFBY0MsT0FBZCxFQUF1QitCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImVsaW1pbmF0ZUN5Y2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFbGltaW5hdGVDeWNsZXNDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hlY2tlZCA9IGRvbUVsZW1lbnQuY2hlY2tlZDtcblxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBlbmFibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGRpc2FibGVFbGltaW5hdGVDeWNsZXNDaGVja2JveCA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94LFxuICAgICAgZW5hYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3gsXG4gICAgICBkaXNhYmxlRWxpbWluYXRlQ3ljbGVzQ2hlY2tib3gsXG4gICAgICBpc0VsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94Q2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgZWxpbWluYXRlQ3ljbGVzQ2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEVsaW1pbmF0ZUN5Y2xlc0NoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBlbGltaW5hdGVDeWNsZXNDaGVja2JveDtcbiAgfX1cblxuT2JqZWN0LmFzc2lnbihFbGltaW5hdGVDeWNsZXNDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgY2xhc3NOYW1lOiAnZWxpbWluYXRlLWN5Y2xlcydcbiAgfSxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnLFxuICAgICdjaGVja2VkJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGltaW5hdGVDeWNsZXNDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpO1xuXG4gIGNoYW5nZUhhbmRsZXIoY2hlY2tlZCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19