'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var EliminateOrphanedRulesCheckbox = function (_Element) {
  _inherits(EliminateOrphanedRulesCheckbox, _Element);

  function EliminateOrphanedRulesCheckbox(selector, changeHandler, checked) {
    _classCallCheck(this, EliminateOrphanedRulesCheckbox);

    var _this = _possibleConstructorReturn(this, (EliminateOrphanedRulesCheckbox.__proto__ || Object.getPrototypeOf(EliminateOrphanedRulesCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(EliminateOrphanedRulesCheckbox, [{
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
      var checkEliminateOrphanedRulesCheckbox = this.check.bind(this),
          ///
      isEliminateOrphanedRulesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        checkEliminateOrphanedRulesCheckbox: checkEliminateOrphanedRulesCheckbox,
        isEliminateOrphanedRulesCheckboxChecked: isEliminateOrphanedRulesCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          eliminateOrphanedRulesCheckbox = Element.fromProperties(EliminateOrphanedRulesCheckbox, properties, changeHandler, checked);


      return eliminateOrphanedRulesCheckbox;
    }
  }]);

  return EliminateOrphanedRulesCheckbox;
}(Element);

Object.assign(EliminateOrphanedRulesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-orphaned-rules'
  },
  ignoredProperties: ['onChange', 'checked']
});

module.exports = EliminateOrphanedRulesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2hlY2siLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY2hlY2tFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJiaW5kIiwiaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwicHJvcGVydGllcyIsImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsImNoZWNrYm94Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsOEI7OztBQUNKLDBDQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFBQTs7QUFBQSxnS0FDdENGLFFBRHNDOztBQUc1QyxRQUFJQyxrQkFBa0JFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUtFLEtBQUwsQ0FBV0gsT0FBWDtBQUNEO0FBVDJDO0FBVTdDOzs7OzZCQUVRRCxhLEVBQWVLLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDOztBQUM1RixXQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQlIsYUFBakIsRUFBZ0NLLE1BQWhDLEVBQXdDQyx5QkFBeEMsRUFENEYsQ0FDdkI7QUFDdEU7Ozs4QkFFU04sYSxFQUFlSyxNLEVBQVE7QUFDL0IsV0FBS0ksR0FBTCxDQUFTLE9BQVQsRUFBa0JULGFBQWxCLEVBQWlDSyxNQUFqQyxFQUQrQixDQUNZO0FBQzVDOzs7Z0NBRVc7QUFDVixVQUFNSyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNVixVQUFVUyxXQUFXVCxPQUQzQjs7QUFHQSxhQUFPQSxPQUFQO0FBQ0Q7Ozs0QkFFcUI7QUFBQSxVQUFoQkEsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDcEIsVUFBTVMsYUFBYSxLQUFLQyxhQUFMLEVBQW5COztBQUVBRCxpQkFBV1QsT0FBWCxHQUFxQkEsT0FBckI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVcsc0NBQXNDLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQixJQUFoQixDQUE1QztBQUFBLFVBQW1FO0FBQzdEQyxnREFBMEMsS0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQW9CLElBQXBCLENBRGhELENBRGMsQ0FFNkQ7O0FBRTNFLGFBQVE7QUFDTkQsZ0ZBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFBLFVBQ3hCYixRQUR3QixHQUNGYSxVQURFLENBQ3hCYixRQUR3QjtBQUFBLFVBQ2RGLE9BRGMsR0FDRmUsVUFERSxDQUNkZixPQURjO0FBQUEsVUFFMUJELGFBRjBCLEdBRVZHLFFBRlU7QUFBQSxVQUcxQmMsOEJBSDBCLEdBR09wQixRQUFRcUIsY0FBUixDQUF1QnBCLDhCQUF2QixFQUF1RGtCLFVBQXZELEVBQW1FaEIsYUFBbkUsRUFBa0ZDLE9BQWxGLENBSFA7OztBQUtoQyxhQUFPZ0IsOEJBQVA7QUFDRDs7OztFQWxEMENwQixPOztBQW9EN0NzQixPQUFPQyxNQUFQLENBQWN0Qiw4QkFBZCxFQUE4QztBQUM1Q3VCLFdBQVMsT0FEbUM7QUFFNUNDLHFCQUFtQjtBQUNqQkMsVUFBTSxVQURXO0FBRWpCQyxlQUFXO0FBRk0sR0FGeUI7QUFNNUNDLHFCQUFtQixDQUNqQixVQURpQixFQUVqQixTQUZpQjtBQU55QixDQUE5Qzs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQjdCLDhCQUFqQjs7QUFFQSxTQUFTUyxnQ0FBVCxDQUEwQ1AsYUFBMUMsRUFBeUQ0QixLQUF6RCxFQUFnRUMsYUFBaEUsRUFBK0U7QUFDN0UsTUFBTUMsV0FBV0QsYUFBakI7QUFBQSxNQUFnQztBQUMxQjVCLFlBQVU2QixTQUFTZixTQUFULEVBRGhCOztBQUdBZixnQkFBY0MsT0FBZCxFQUF1QjJCLEtBQXZCLEVBQThCQyxhQUE5QjtBQUNEIiwiZmlsZSI6ImVsaW1pbmF0ZU9ycGhhbmVkUnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGVja2VkID0gZG9tRWxlbWVudC5jaGVja2VkO1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNoZWNrRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2hlY2tFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3gsXG4gICAgICBpc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIGVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcblxuICAgIHJldHVybiBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3g7XG4gIH19XG5cbk9iamVjdC5hc3NpZ24oRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBjbGFzc05hbWU6ICdlbGltaW5hdGUtb3JwaGFuZWQtcnVsZXMnXG4gIH0sXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=