'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var EliminateImplicitLeftRecursionCheckbox = function (_Element) {
  _inherits(EliminateImplicitLeftRecursionCheckbox, _Element);

  function EliminateImplicitLeftRecursionCheckbox(selector, changeHandler, checked) {
    _classCallCheck(this, EliminateImplicitLeftRecursionCheckbox);

    var _this = _possibleConstructorReturn(this, (EliminateImplicitLeftRecursionCheckbox.__proto__ || Object.getPrototypeOf(EliminateImplicitLeftRecursionCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(EliminateImplicitLeftRecursionCheckbox, [{
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
      var isEliminateImplicitLeftRecursionCheckboxChecked = this.isChecked.bind(this); ///

      return {
        isEliminateImplicitLeftRecursionCheckboxChecked: isEliminateImplicitLeftRecursionCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          eliminateImplicitLeftRecursionCheckbox = Element.fromProperties(EliminateImplicitLeftRecursionCheckbox, properties, changeHandler, checked);


      return eliminateImplicitLeftRecursionCheckbox;
    }
  }]);

  return EliminateImplicitLeftRecursionCheckbox;
}(Element);

Object.assign(EliminateImplicitLeftRecursionCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-implicit-left-recursion'
  },
  ignoredProperties: ['onChange', 'checked']
});

module.exports = EliminateImplicitLeftRecursionCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNoZWNrIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImlzRWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiYmluZCIsInByb3BlcnRpZXMiLCJlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImNoZWNrYm94Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsc0M7OztBQUNKLGtEQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFBQTs7QUFBQSxnTEFDdENGLFFBRHNDOztBQUc1QyxRQUFJQyxrQkFBa0JFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUtFLEtBQUwsQ0FBV0gsT0FBWDtBQUNEO0FBVDJDO0FBVTdDOzs7OzZCQUVRRCxhLEVBQWVLLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDOztBQUM1RixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQlIsYUFBakIsRUFBZ0NLLE1BQWhDLEVBQXdDQyx5QkFBeEMsRUFENEYsQ0FDdkI7QUFDdEU7Ozs4QkFFU04sYSxFQUFlSyxNLEVBQVE7QUFDL0IsV0FBS0ksR0FBTCxDQUFTLE9BQVQsRUFBa0JULGFBQWxCLEVBQWlDSyxNQUFqQyxFQUQrQixDQUNZO0FBQzVDOzs7Z0NBRVc7QUFDVixVQUFNSyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNVixVQUFVUyxXQUFXVCxPQUQzQjs7QUFHQSxhQUFPQSxPQUFQO0FBQ0Q7Ozs0QkFFcUI7QUFBQSxVQUFoQkEsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDcEIsVUFBTVMsYUFBYSxLQUFLQyxhQUFMLEVBQW5COztBQUVBRCxpQkFBV1QsT0FBWCxHQUFxQkEsT0FBckI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVcsa0RBQWtELEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUF4RCxDQURjLENBQ3FFOztBQUVuRixhQUFRO0FBQ05GO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRyxVLEVBQVk7QUFBQSxVQUN4QlosUUFEd0IsR0FDRlksVUFERSxDQUN4QlosUUFEd0I7QUFBQSxVQUNkRixPQURjLEdBQ0ZjLFVBREUsQ0FDZGQsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJhLHNDQUgwQixHQUdlbkIsUUFBUW9CLGNBQVIsQ0FBdUJuQixzQ0FBdkIsRUFBK0RpQixVQUEvRCxFQUEyRWYsYUFBM0UsRUFBMEZDLE9BQTFGLENBSGY7OztBQUtoQyxhQUFPZSxzQ0FBUDtBQUNEOzs7O0VBaERrRG5CLE87O0FBa0RyRHFCLE9BQU9DLE1BQVAsQ0FBY3JCLHNDQUFkLEVBQXNEO0FBQ3BEc0IsV0FBUyxPQUQyQztBQUVwREMscUJBQW1CO0FBQ2pCQyxVQUFNLFVBRFc7QUFFakJDLGVBQVc7QUFGTSxHQUZpQztBQU1wREMscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCO0FBTmlDLENBQXREOztBQVlBQyxPQUFPQyxPQUFQLEdBQWlCNUIsc0NBQWpCOztBQUVBLFNBQVNTLGdDQUFULENBQTBDUCxhQUExQyxFQUF5RDJCLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNQyxXQUFXRCxhQUFqQjtBQUFBLE1BQWdDO0FBQzFCM0IsWUFBVTRCLFNBQVNoQixTQUFULEVBRGhCOztBQUdBYixnQkFBY0MsT0FBZCxFQUF1QjBCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hlY2tlZCA9IGRvbUVsZW1lbnQuY2hlY2tlZDtcblxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBpc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBpc0VsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94Q2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgZWxpbWluYXRlSW1wbGljaXRMZWZ0UmVjdXJzaW9uQ2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBlbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveDtcbiAgfX1cblxuT2JqZWN0LmFzc2lnbihFbGltaW5hdGVJbXBsaWNpdExlZnRSZWN1cnNpb25DaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgY2xhc3NOYW1lOiAnZWxpbWluYXRlLWltcGxpY2l0LWxlZnQtcmVjdXJzaW9uJ1xuICB9LFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsaW1pbmF0ZUltcGxpY2l0TGVmdFJlY3Vyc2lvbkNoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=