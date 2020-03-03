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

var Element = easy.Element;

var RemoveOrRenameIntermediateNodesCheckbox = /*#__PURE__*/function (_Element) {
  _inherits(RemoveOrRenameIntermediateNodesCheckbox, _Element);

  function RemoveOrRenameIntermediateNodesCheckbox(selector, changeHandler) {
    var _this;

    _classCallCheck(this, RemoveOrRenameIntermediateNodesCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RemoveOrRenameIntermediateNodesCheckbox).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(RemoveOrRenameIntermediateNodesCheckbox, [{
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;
      return checked;
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var isRemoveOrRenameIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        isRemoveOrRenameIntermediateNodesCheckboxChecked: isRemoveOrRenameIntermediateNodesCheckboxChecked
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          removeOrRenameIntermediateNodesCheckbox = Element.fromProperties(RemoveOrRenameIntermediateNodesCheckbox, properties, changeHandler);
      return removeOrRenameIntermediateNodesCheckbox;
    }
  }]);

  return RemoveOrRenameIntermediateNodesCheckbox;
}(Element);

Object.assign(RemoveOrRenameIntermediateNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'remove-or-rename-intermediate-nodes'
  },
  ignoredProperties: ['onChange']
});
module.exports = RemoveOrRenameIntermediateNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();
  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Iiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJvbiIsIm9mZiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsImJpbmQiLCJwcm9wZXJ0aWVzIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiY2hlY2tib3giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyx1Qzs7O0FBQ0osbURBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLGlIQUFNRCxRQUFOOztBQUVBLFFBQUlDLGFBQWEsS0FBS0MsU0FBdEIsRUFBaUM7QUFDL0IsWUFBS0MsUUFBTCxDQUFjRixhQUFkO0FBQ0Q7O0FBTGtDO0FBTXBDOzs7OzZCQUVRQSxhLEVBQWVHLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDO0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCTixhQUFqQixFQUFnQ0csTUFBaEMsRUFBd0NDLHlCQUF4QyxFQUQ0RixDQUN2QjtBQUN0RTs7OzhCQUVTSixhLEVBQWVHLE0sRUFBUTtBQUMvQixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlAsYUFBbEIsRUFBaUNHLE1BQWpDLEVBRCtCLENBQ1k7QUFDNUM7OztnQ0FFVztBQUNWLFVBQU1LLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixVQUFVLENBQUNFLE9BRDNCO0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxnREFBZ0QsR0FBRyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBekQsQ0FEYyxDQUNzRTs7QUFFcEYsYUFBUTtBQUNORixRQUFBQSxnREFBZ0QsRUFBaERBO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRyxVLEVBQVk7QUFDMUIsVUFBRVosUUFBRixHQUFlWSxVQUFmLENBQUVaLFFBQUY7QUFBQSxVQUNBRixhQURBLEdBQ2dCRSxRQURoQjtBQUFBLFVBRUFhLHVDQUZBLEdBRTBDbEIsT0FBTyxDQUFDbUIsY0FBUixDQUF1QmxCLHVDQUF2QixFQUFnRWdCLFVBQWhFLEVBQTRFZCxhQUE1RSxDQUYxQztBQUlOLGFBQU9lLHVDQUFQO0FBQ0Q7Ozs7RUF0Q21EbEIsTzs7QUF3Q3REb0IsTUFBTSxDQUFDQyxNQUFQLENBQWNwQix1Q0FBZCxFQUF1RDtBQUNyRHFCLEVBQUFBLE9BQU8sRUFBRSxPQUQ0QztBQUVyREMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLElBQUksRUFBRSxVQURXO0FBRWpCQyxJQUFBQSxTQUFTLEVBQUU7QUFGTSxHQUZrQztBQU1yREMsRUFBQUEsaUJBQWlCLEVBQUUsQ0FDakIsVUFEaUI7QUFOa0MsQ0FBdkQ7QUFXQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0IsdUNBQWpCOztBQUVBLFNBQVNPLGdDQUFULENBQTBDTCxhQUExQyxFQUF5RDBCLEtBQXpELEVBQWdFQyxhQUFoRSxFQUErRTtBQUM3RSxNQUFNQyxRQUFRLEdBQUdELGFBQWpCO0FBQUEsTUFBZ0M7QUFDMUJqQixFQUFBQSxPQUFPLEdBQUdrQixRQUFRLENBQUNoQixTQUFULEVBRGhCO0FBR0FaLEVBQUFBLGFBQWEsQ0FBQ1UsT0FBRCxFQUFVZ0IsS0FBVixFQUFpQkMsYUFBakIsQ0FBYjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBvYmplY3QpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QpOyAgLy8vXG4gIH1cblxuICBpc0NoZWNrZWQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveDtcbiAgfX1cblxuT2JqZWN0LmFzc2lnbihSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3gsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIGNsYXNzTmFtZTogJ3JlbW92ZS1vci1yZW5hbWUtaW50ZXJtZWRpYXRlLW5vZGVzJ1xuICB9LFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=