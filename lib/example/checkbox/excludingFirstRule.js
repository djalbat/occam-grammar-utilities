'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var ExcludingFirstRuleCheckbox = function (_Element) {
  _inherits(ExcludingFirstRuleCheckbox, _Element);

  function ExcludingFirstRuleCheckbox(selector, changeHandler, checked) {
    _classCallCheck(this, ExcludingFirstRuleCheckbox);

    var _this = _possibleConstructorReturn(this, (ExcludingFirstRuleCheckbox.__proto__ || Object.getPrototypeOf(ExcludingFirstRuleCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(ExcludingFirstRuleCheckbox, [{
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
      var checkExcludingFirstRuleCheckbox = this.check.bind(this),
          ///
      enableExcludingFirstRuleCheckbox = this.enable.bind(this),
          ///
      disableExcludingFirstRuleCheckbox = this.disable.bind(this),
          ///
      isExcludingFirstRuleCheckboxChecked = this.isChecked.bind(this); ///

      return {
        checkExcludingFirstRuleCheckbox: checkExcludingFirstRuleCheckbox,
        enableExcludingFirstRuleCheckbox: enableExcludingFirstRuleCheckbox,
        disableExcludingFirstRuleCheckbox: disableExcludingFirstRuleCheckbox,
        isExcludingFirstRuleCheckboxChecked: isExcludingFirstRuleCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          excludingFirstRuleCheckbox = Element.fromProperties(ExcludingFirstRuleCheckbox, properties, changeHandler, checked);


      return excludingFirstRuleCheckbox;
    }
  }]);

  return ExcludingFirstRuleCheckbox;
}(Element);

Object.assign(ExcludingFirstRuleCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'excluding-first-rule'
  },
  ignoredProperties: ['onChange', 'checked']
});

module.exports = ExcludingFirstRuleCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2V4Y2x1ZGluZ0ZpcnN0UnVsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNoZWNrIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNoZWNrRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJiaW5kIiwiZW5hYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJlbmFibGUiLCJkaXNhYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJkaXNhYmxlIiwiaXNFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJwcm9wZXJ0aWVzIiwiZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3giLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLDBCOzs7QUFDSixzQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUEsd0pBQ3RDRixRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7Ozs2QkFFUUQsYSxFQUFlSyxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJSLGFBQWpCLEVBQWdDSyxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNOLGEsRUFBZUssTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVCxhQUFsQixFQUFpQ0ssTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7O2dDQUVXO0FBQ1YsVUFBTUssYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTVYsVUFBVVMsV0FBV1QsT0FEM0I7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7NEJBRXFCO0FBQUEsVUFBaEJBLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCLFVBQU1TLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjs7QUFFQUQsaUJBQVdULE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1XLGtDQUFrQyxLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBeEM7QUFBQSxVQUErRDtBQUN6REMseUNBQW1DLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUR6QztBQUFBLFVBQ2lFO0FBQzNERywwQ0FBb0MsS0FBS0MsT0FBTCxDQUFhSixJQUFiLENBQWtCLElBQWxCLENBRjFDO0FBQUEsVUFFbUU7QUFDN0RLLDRDQUFzQyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FINUMsQ0FEYyxDQUl5RDs7QUFFdkUsYUFBUTtBQUNORCx3RUFETTtBQUVORSwwRUFGTTtBQUdORSw0RUFITTtBQUlORTtBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsVUFDeEJqQixRQUR3QixHQUNGaUIsVUFERSxDQUN4QmpCLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGbUIsVUFERSxDQUNkbkIsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJrQiwwQkFIMEIsR0FHR3hCLFFBQVF5QixjQUFSLENBQXVCeEIsMEJBQXZCLEVBQW1Ec0IsVUFBbkQsRUFBK0RwQixhQUEvRCxFQUE4RUMsT0FBOUUsQ0FISDs7O0FBS2hDLGFBQU9vQiwwQkFBUDtBQUNEOzs7O0VBdERzQ3hCLE87O0FBd0R6QzBCLE9BQU9DLE1BQVAsQ0FBYzFCLDBCQUFkLEVBQTBDO0FBQ3hDMkIsV0FBUyxPQUQrQjtBQUV4Q0MscUJBQW1CO0FBQ2pCQyxVQUFNLFVBRFc7QUFFakJDLGVBQVc7QUFGTSxHQUZxQjtBQU14Q0MscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCO0FBTnFCLENBQTFDOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCakMsMEJBQWpCOztBQUVBLFNBQVNTLGdDQUFULENBQTBDUCxhQUExQyxFQUF5RGdDLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNQyxXQUFXRCxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCaEMsWUFBVWlDLFNBQVNmLFNBQVQsRUFEaEI7O0FBR0FuQixnQkFBY0MsT0FBZCxFQUF1QitCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImV4Y2x1ZGluZ0ZpcnN0UnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hlY2tlZCA9IGRvbUVsZW1lbnQuY2hlY2tlZDtcblxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjaGVja0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBlbmFibGVFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGRpc2FibGVFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94LFxuICAgICAgZW5hYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3gsXG4gICAgICBkaXNhYmxlRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3gsXG4gICAgICBpc0V4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94Q2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgZXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEV4Y2x1ZGluZ0ZpcnN0UnVsZUNoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBleGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveDtcbiAgfX1cblxuT2JqZWN0LmFzc2lnbihFeGNsdWRpbmdGaXJzdFJ1bGVDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgY2xhc3NOYW1lOiAnZXhjbHVkaW5nLWZpcnN0LXJ1bGUnXG4gIH0sXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhjbHVkaW5nRmlyc3RSdWxlQ2hlY2tib3g7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIGNoZWNrZWQgPSBjaGVja2JveC5pc0NoZWNrZWQoKTtcblxuICBjaGFuZ2VIYW5kbGVyKGNoZWNrZWQsIGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbn1cbiJdfQ==