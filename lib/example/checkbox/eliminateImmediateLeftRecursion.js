'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var EliminateImmediateLeftRecursionCheckbox = function (_Element) {
  _inherits(EliminateImmediateLeftRecursionCheckbox, _Element);

  function EliminateImmediateLeftRecursionCheckbox(selector, changeHandler, checked) {
    _classCallCheck(this, EliminateImmediateLeftRecursionCheckbox);

    var _this = _possibleConstructorReturn(this, (EliminateImmediateLeftRecursionCheckbox.__proto__ || Object.getPrototypeOf(EliminateImmediateLeftRecursionCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(EliminateImmediateLeftRecursionCheckbox, [{
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
      var checkEliminateImmediateLeftRecursionCheckbox = this.check.bind(this),
          ///
      enableEliminateImmediateLeftRecursionCheckbox = this.enable.bind(this),
          ///
      disableEliminateImmediateLeftRecursionCheckbox = this.disable.bind(this),
          ///
      isEliminateImmediateLeftRecursionCheckboxChecked = this.isChecked.bind(this); ///

      return {
        checkEliminateImmediateLeftRecursionCheckbox: checkEliminateImmediateLeftRecursionCheckbox,
        enableEliminateImmediateLeftRecursionCheckbox: enableEliminateImmediateLeftRecursionCheckbox,
        disableEliminateImmediateLeftRecursionCheckbox: disableEliminateImmediateLeftRecursionCheckbox,
        isEliminateImmediateLeftRecursionCheckboxChecked: isEliminateImmediateLeftRecursionCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          eliminateImmediateLeftRecursionCheckbox = Element.fromProperties(EliminateImmediateLeftRecursionCheckbox, properties, changeHandler, checked);


      return eliminateImmediateLeftRecursionCheckbox;
    }
  }]);

  return EliminateImmediateLeftRecursionCheckbox;
}(Element);

Object.assign(EliminateImmediateLeftRecursionCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-immediate-left-recursion'
  },
  ignoredProperties: ['onChange', 'checked']
});

module.exports = EliminateImmediateLeftRecursionCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2hlY2siLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY2hlY2tFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3giLCJiaW5kIiwiZW5hYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZW5hYmxlIiwiZGlzYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCIsImRpc2FibGUiLCJpc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJwcm9wZXJ0aWVzIiwiZWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiY2hlY2tib3giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyx1Qzs7O0FBQ0osbURBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxPQUFyQyxFQUE4QztBQUFBOztBQUFBLGtMQUN0Q0YsUUFEc0M7O0FBRzVDLFFBQUlDLGtCQUFrQkUsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjSCxhQUFkO0FBQ0Q7O0FBRUQsUUFBSUMsWUFBWUMsU0FBaEIsRUFBMkI7QUFDekIsWUFBS0UsS0FBTCxDQUFXSCxPQUFYO0FBQ0Q7QUFUMkM7QUFVN0M7Ozs7NkJBRVFELGEsRUFBZUssTSxFQUFzRTtBQUFBLFVBQTlEQyx5QkFBOEQsdUVBQWxDQyxnQ0FBa0M7O0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCUixhQUFqQixFQUFnQ0ssTUFBaEMsRUFBd0NDLHlCQUF4QyxFQUQ0RixDQUN2QjtBQUN0RTs7OzhCQUVTTixhLEVBQWVLLE0sRUFBUTtBQUMvQixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlQsYUFBbEIsRUFBaUNLLE1BQWpDLEVBRCtCLENBQ1k7QUFDNUM7OztnQ0FFVztBQUNWLFVBQU1LLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01WLFVBQVVTLFdBQVdULE9BRDNCOztBQUdBLGFBQU9BLE9BQVA7QUFDRDs7OzRCQUVxQjtBQUFBLFVBQWhCQSxPQUFnQix1RUFBTixJQUFNOztBQUNwQixVQUFNUyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7O0FBRUFELGlCQUFXVCxPQUFYLEdBQXFCQSxPQUFyQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNVywrQ0FBK0MsS0FBS1IsS0FBTCxDQUFXUyxJQUFYLENBQWdCLElBQWhCLENBQXJEO0FBQUEsVUFBNEU7QUFDdEVDLHNEQUFnRCxLQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FEdEQ7QUFBQSxVQUM4RTtBQUN4RUcsdURBQWlELEtBQUtDLE9BQUwsQ0FBYUosSUFBYixDQUFrQixJQUFsQixDQUZ2RDtBQUFBLFVBRWdGO0FBQzFFSyx5REFBbUQsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSHpELENBRGMsQ0FJc0U7O0FBRXBGLGFBQVE7QUFDTkQsa0dBRE07QUFFTkUsb0dBRk07QUFHTkUsc0dBSE07QUFJTkU7QUFKTSxPQUFSO0FBTUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLFVBQ3hCakIsUUFEd0IsR0FDRmlCLFVBREUsQ0FDeEJqQixRQUR3QjtBQUFBLFVBQ2RGLE9BRGMsR0FDRm1CLFVBREUsQ0FDZG5CLE9BRGM7QUFBQSxVQUUxQkQsYUFGMEIsR0FFVkcsUUFGVTtBQUFBLFVBRzFCa0IsdUNBSDBCLEdBR2dCeEIsUUFBUXlCLGNBQVIsQ0FBdUJ4Qix1Q0FBdkIsRUFBZ0VzQixVQUFoRSxFQUE0RXBCLGFBQTVFLEVBQTJGQyxPQUEzRixDQUhoQjs7O0FBS2hDLGFBQU9vQix1Q0FBUDtBQUNEOzs7O0VBdERtRHhCLE87O0FBd0R0RDBCLE9BQU9DLE1BQVAsQ0FBYzFCLHVDQUFkLEVBQXVEO0FBQ3JEMkIsV0FBUyxPQUQ0QztBQUVyREMscUJBQW1CO0FBQ2pCQyxVQUFNLFVBRFc7QUFFakJDLGVBQVc7QUFGTSxHQUZrQztBQU1yREMscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCO0FBTmtDLENBQXZEOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCakMsdUNBQWpCOztBQUVBLFNBQVNTLGdDQUFULENBQTBDUCxhQUExQyxFQUF5RGdDLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNQyxXQUFXRCxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCaEMsWUFBVWlDLFNBQVNmLFNBQVQsRUFEaEI7O0FBR0FuQixnQkFBY0MsT0FBZCxFQUF1QitCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGVja2VkID0gZG9tRWxlbWVudC5jaGVja2VkO1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNoZWNrRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBlbmFibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBkaXNhYmxlRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94ID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCxcbiAgICAgIGVuYWJsZUVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCxcbiAgICAgIGRpc2FibGVFbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3gsXG4gICAgICBpc0VsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIGVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBlbGltaW5hdGVJbW1lZGlhdGVMZWZ0UmVjdXJzaW9uQ2hlY2tib3g7XG4gIH19XG5cbk9iamVjdC5hc3NpZ24oRWxpbWluYXRlSW1tZWRpYXRlTGVmdFJlY3Vyc2lvbkNoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBjbGFzc05hbWU6ICdlbGltaW5hdGUtaW1tZWRpYXRlLWxlZnQtcmVjdXJzaW9uJ1xuICB9LFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsaW1pbmF0ZUltbWVkaWF0ZUxlZnRSZWN1cnNpb25DaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpO1xuXG4gIGNoYW5nZUhhbmRsZXIoY2hlY2tlZCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19