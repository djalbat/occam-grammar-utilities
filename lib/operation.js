"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Operation;
    }
});
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var Operation = /*#__PURE__*/ function() {
    function Operation() {
        _classCallCheck(this, Operation);
    }
    _createClass(Operation, [
        {
            key: "isEqualTo",
            value: function isEqualTo(operation) {
                var equalTo = false;
                var constructor = this.constructor;
                if (_instanceof(operation, constructor)) {
                    var comparesTo = this.compare(operation);
                    equalTo = comparesTo; ///
                }
                return equalTo;
            }
        },
        {
            key: "execute",
            value: function execute() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var context = remainingArguments.pop();
                var result;
                var operations = context.operations;
                var operation = this.find(context);
                if (operation === null) {
                    var _operation;
                    operation = this; ///
                    operations.push(operation);
                    result = (_operation = operation).apply.apply(_operation, _toConsumableArray(remainingArguments).concat([
                        context
                    ]));
                } else {
                    var _operation1;
                    result = (_operation1 = operation).retrieve.apply(_operation1, _toConsumableArray(remainingArguments).concat([
                        context
                    ]));
                }
                return result;
            }
        },
        {
            key: "find",
            value: function find(context) {
                var _this = this;
                var operations = context.operations, operation = operations.find(function(operation) {
                    var equalTo = _this.isEqualTo(operation);
                    if (equalTo) {
                        return true;
                    }
                }) || null;
                return operation;
            }
        }
    ]);
    return Operation;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcGVyYXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdGlvbiB7XG4gIGlzRXF1YWxUbyhvcGVyYXRpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjb25zdHJ1Y3RvciB9ID0gdGhpcztcblxuICAgIGlmIChvcGVyYXRpb24gaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgY29tcGFyZXNUbyA9IHRoaXMuY29tcGFyZShvcGVyYXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gY29tcGFyZXNUbzsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBleGVjdXRlKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0O1xuXG4gICAgbGV0IG9wZXJhdGlvbiA9IHRoaXMuZmluZChjb250ZXh0KTtcblxuICAgIGlmIChvcGVyYXRpb24gPT09IG51bGwpIHtcbiAgICAgIG9wZXJhdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgb3BlcmF0aW9ucy5wdXNoKG9wZXJhdGlvbik7XG5cbiAgICAgIHJlc3VsdCA9IG9wZXJhdGlvbi5hcHBseSguLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBvcGVyYXRpb24ucmV0cmlldmUoLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnMuZmluZCgob3BlcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8ob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsVG8pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBvcGVyYXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiT3BlcmF0aW9uIiwiaXNFcXVhbFRvIiwib3BlcmF0aW9uIiwiZXF1YWxUbyIsImNvbnN0cnVjdG9yIiwiY29tcGFyZXNUbyIsImNvbXBhcmUiLCJleGVjdXRlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY29udGV4dCIsInBvcCIsInJlc3VsdCIsIm9wZXJhdGlvbnMiLCJmaW5kIiwicHVzaCIsImFwcGx5IiwicmV0cmlldmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwwQkFBTjthQUFNQTs4QkFBQUE7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUlDLFVBQVUsS0FBSztnQkFFbkIsSUFBTSxBQUFFQyxjQUFnQixJQUFJLENBQXBCQTtnQkFFUixJQUFJRixBQUFTLFlBQVRBLFdBQXFCRSxjQUFhO29CQUNwQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsT0FBTyxDQUFDSjtvQkFFaENDLFVBQVVFLFlBQVksR0FBRztnQkFDM0IsQ0FBQztnQkFFRCxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQStCO2dCQUF2QixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsUUFBQSxTQUFBLENBQUEsS0FBcUI7Z0JBQUQ7Z0JBQzFCLElBQU1DLFVBQVVELG1CQUFtQkUsR0FBRztnQkFFdEMsSUFBSUM7Z0JBRUosSUFBTSxBQUFFQyxhQUFlSCxRQUFmRztnQkFFUixJQUFJVixZQUFZLElBQUksQ0FBQ1csSUFBSSxDQUFDSjtnQkFFMUIsSUFBSVAsY0FBYyxJQUFJLEVBQUU7d0JBS2JBO29CQUpUQSxZQUFZLElBQUksRUFBRyxHQUFHO29CQUV0QlUsV0FBV0UsSUFBSSxDQUFDWjtvQkFFaEJTLFNBQVNULENBQUFBLGFBQUFBLFdBQVVhLEtBQUssQ0FBZmIsTUFBQUEsWUFBQUEsQUFBZ0IsbUJBQUdNLDJCQUFuQk47d0JBQXVDTztxQkFBUTtnQkFDMUQsT0FBTzt3QkFDSVA7b0JBQVRTLFNBQVNULENBQUFBLGNBQUFBLFdBQVVjLFFBQVEsQ0FBbEJkLE1BQUFBLGFBQUFBLEFBQW1CLG1CQUFHTSwyQkFBdEJOO3dCQUEwQ087cUJBQVE7Z0JBQzdELENBQUM7Z0JBRUQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLSixPQUFPLEVBQUU7O2dCQUNaLElBQU0sQUFBRUcsYUFBZUgsUUFBZkcsWUFDRlYsWUFBWVUsV0FBV0MsSUFBSSxDQUFDLFNBQUNYLFdBQWM7b0JBQ3pDLElBQU1DLFVBQVUsTUFBS0YsU0FBUyxDQUFDQztvQkFFL0IsSUFBSUMsU0FBUzt3QkFDWCxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLE9BQU9EO1lBQ1Q7OztXQWhEbUJGIn0=