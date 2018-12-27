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
      var isEliminateOrphanedRulesCheckboxChecked = this.isChecked.bind(this); ///

      return {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2NoZWNrYm94L2VsaW1pbmF0ZU9ycGhhbmVkUnVsZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiRWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiY2hlY2siLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiYmluZCIsInByb3BlcnRpZXMiLCJlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3giLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLDhCOzs7QUFDSiwwQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLE9BQXJDLEVBQThDO0FBQUE7O0FBQUEsZ0tBQ3RDRixRQURzQzs7QUFHNUMsUUFBSUMsa0JBQWtCRSxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNILGFBQWQ7QUFDRDs7QUFFRCxRQUFJQyxZQUFZQyxTQUFoQixFQUEyQjtBQUN6QixZQUFLRSxLQUFMLENBQVdILE9BQVg7QUFDRDtBQVQyQztBQVU3Qzs7Ozs2QkFFUUQsYSxFQUFlSyxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJSLGFBQWpCLEVBQWdDSyxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNOLGEsRUFBZUssTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVCxhQUFsQixFQUFpQ0ssTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7O2dDQUVXO0FBQ1YsVUFBTUssYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTVYsVUFBVVMsV0FBV1QsT0FEM0I7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7NEJBRXFCO0FBQUEsVUFBaEJBLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCLFVBQU1TLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjs7QUFFQUQsaUJBQVdULE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1XLDBDQUEwQyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEQsQ0FEYyxDQUM2RDs7QUFFM0UsYUFBUTtBQUNORjtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkcsVSxFQUFZO0FBQUEsVUFDeEJaLFFBRHdCLEdBQ0ZZLFVBREUsQ0FDeEJaLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGYyxVQURFLENBQ2RkLE9BRGM7QUFBQSxVQUUxQkQsYUFGMEIsR0FFVkcsUUFGVTtBQUFBLFVBRzFCYSw4QkFIMEIsR0FHT25CLFFBQVFvQixjQUFSLENBQXVCbkIsOEJBQXZCLEVBQXVEaUIsVUFBdkQsRUFBbUVmLGFBQW5FLEVBQWtGQyxPQUFsRixDQUhQOzs7QUFLaEMsYUFBT2UsOEJBQVA7QUFDRDs7OztFQWhEMENuQixPOztBQWtEN0NxQixPQUFPQyxNQUFQLENBQWNyQiw4QkFBZCxFQUE4QztBQUM1Q3NCLFdBQVMsT0FEbUM7QUFFNUNDLHFCQUFtQjtBQUNqQkMsVUFBTSxVQURXO0FBRWpCQyxlQUFXO0FBRk0sR0FGeUI7QUFNNUNDLHFCQUFtQixDQUNqQixVQURpQixFQUVqQixTQUZpQjtBQU55QixDQUE5Qzs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQjVCLDhCQUFqQjs7QUFFQSxTQUFTUyxnQ0FBVCxDQUEwQ1AsYUFBMUMsRUFBeUQyQixLQUF6RCxFQUFnRUMsYUFBaEUsRUFBK0U7QUFDN0UsTUFBTUMsV0FBV0QsYUFBakI7QUFBQSxNQUFnQztBQUMxQjNCLFlBQVU0QixTQUFTaEIsU0FBVCxFQURoQjs7QUFHQWIsZ0JBQWNDLE9BQWQsRUFBdUIwQixLQUF2QixFQUE4QkMsYUFBOUI7QUFDRCIsImZpbGUiOiJlbGltaW5hdGVPcnBoYW5lZFJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hlY2tlZCA9IGRvbUVsZW1lbnQuY2hlY2tlZDtcblxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBpc0VsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgaXNFbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBlbGltaW5hdGVPcnBoYW5lZFJ1bGVzQ2hlY2tib3ggPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG5cbiAgICByZXR1cm4gZWxpbWluYXRlT3JwaGFuZWRSdWxlc0NoZWNrYm94O1xuICB9fVxuXG5PYmplY3QuYXNzaWduKEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgY2xhc3NOYW1lOiAnZWxpbWluYXRlLW9ycGhhbmVkLXJ1bGVzJ1xuICB9LFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsaW1pbmF0ZU9ycGhhbmVkUnVsZXNDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpO1xuXG4gIGNoYW5nZUhhbmRsZXIoY2hlY2tlZCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19