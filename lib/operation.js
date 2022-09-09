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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcGVyYXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdGlvbiB7XG4gIGlzRXF1YWxUbyhvcGVyYXRpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjb25zdHJ1Y3RvciB9ID0gdGhpcztcblxuICAgIGlmIChvcGVyYXRpb24gaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgY29tcGFyZXNUbyA9IHRoaXMuY29tcGFyZShvcGVyYXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gY29tcGFyZXNUbzsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBleGVjdXRlKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0O1xuXG4gICAgbGV0IG9wZXJhdGlvbiA9IHRoaXMuZmluZChjb250ZXh0KTtcblxuICAgIGlmIChvcGVyYXRpb24gPT09IG51bGwpIHtcbiAgICAgIG9wZXJhdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgb3BlcmF0aW9ucy5wdXNoKG9wZXJhdGlvbik7XG5cbiAgICAgIHJlc3VsdCA9IG9wZXJhdGlvbi5hcHBseSguLi5yZW1haW5pbmdBcmd1bWVudHMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBvcGVyYXRpb24ucmV0cmlldmUoLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnMuZmluZCgob3BlcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8ob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsVG8pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBvcGVyYXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiT3BlcmF0aW9uIiwiaXNFcXVhbFRvIiwib3BlcmF0aW9uIiwiZXF1YWxUbyIsImNvbnN0cnVjdG9yIiwiY29tcGFyZXNUbyIsImNvbXBhcmUiLCJleGVjdXRlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY29udGV4dCIsInBvcCIsInJlc3VsdCIsIm9wZXJhdGlvbnMiLCJmaW5kIiwicHVzaCIsImFwcGx5IiwicmV0cmlldmUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUVRQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZixJQUFBLEFBQU1BLFNBQVMsaUJBQWY7YUFBTUEsU0FBUzs4QkFBVEEsU0FBUzs7aUJBQVRBLFNBQVM7O1lBQzVCQyxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO2dCQUNuQixJQUFJQyxPQUFPLEdBQUcsS0FBSyxBQUFDO2dCQUVwQixJQUFNLEFBQUVDLFdBQVcsR0FBSyxJQUFJLENBQXBCQSxXQUFXLEFBQVMsQUFBQztnQkFFN0IsSUFBSUYsQUFBUyxXQUFZRSxDQUFyQkYsU0FBUyxFQUFZRSxXQUFXLENBQUEsRUFBRTtvQkFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDSixTQUFTLENBQUMsQUFBQztvQkFFM0NDLE9BQU8sR0FBR0UsVUFBVSxDQUFDLENBQUMsR0FBRztnQkFDM0IsQ0FBQztnQkFFRCxPQUFPRixPQUFPLENBQUM7WUFDakIsQ0FBQzs7O1lBRURJLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUF3QjtnQkFBdkIsSUFBQSxJQUFBLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQXJCLEFBQUdDLGtCQUFrQixHQUFyQixVQUFBLElBQXFCLENBQUEsRUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsRUFBQSxDQUFyQjtvQkFBQSxBQUFHQSxrQkFBa0IsQ0FBckIsSUFBcUIsSUFBckIsU0FBcUIsQUFBckIsQ0FBQSxJQUFxQixDQUFBLENBQUE7Z0JBQUQsQ0FBQztnQkFDM0IsSUFBTUMsT0FBTyxHQUFHRCxrQkFBa0IsQ0FBQ0UsR0FBRyxFQUFFLEFBQUM7Z0JBRXpDLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFNLEFBQUVDLFVBQVUsR0FBS0gsT0FBTyxDQUF0QkcsVUFBVSxBQUFZLEFBQUM7Z0JBRS9CLElBQUlWLFNBQVMsR0FBRyxJQUFJLENBQUNXLElBQUksQ0FBQ0osT0FBTyxDQUFDLEFBQUM7Z0JBRW5DLElBQUlQLFNBQVMsS0FBSyxJQUFJLEVBQUU7d0JBS2JBLFVBQVM7b0JBSmxCQSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUUsR0FBRztvQkFFdEJVLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDWixTQUFTLENBQUMsQ0FBQztvQkFFM0JTLE1BQU0sR0FBR1QsQ0FBQUEsVUFBUyxHQUFUQSxTQUFTLEVBQUNhLEtBQUssQ0FBZmIsS0FBK0MsQ0FBL0NBLFVBQVMsRUFBVEEsQUFBZ0IsbUJBQUdNLGtCQUFrQixDQUFsQkEsUUFBbkJOO3dCQUF1Q08sT0FBTztxQkFBQyxDQUFBLENBQUEsQ0FBQztnQkFDM0QsT0FBTzt3QkFDSVAsV0FBUztvQkFBbEJTLE1BQU0sR0FBR1QsQ0FBQUEsV0FBUyxHQUFUQSxTQUFTLEVBQUNjLFFBQVEsQ0FBbEJkLEtBQWtELENBQWxEQSxXQUFTLEVBQVRBLEFBQW1CLG1CQUFHTSxrQkFBa0IsQ0FBbEJBLFFBQXRCTjt3QkFBMENPLE9BQU87cUJBQUMsQ0FBQSxDQUFBLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsT0FBT0UsTUFBTSxDQUFDO1lBQ2hCLENBQUM7OztZQUVERSxHQUFJLEVBQUpBLE1BQUk7bUJBQUpBLFNBQUFBLElBQUksQ0FBQ0osT0FBTyxFQUFFOztnQkFDWixJQUFNLEFBQUVHLFVBQVUsR0FBS0gsT0FBTyxDQUF0QkcsVUFBVSxBQUFZLEVBQ3hCVixTQUFTLEdBQUdVLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNYLFNBQVMsRUFBSztvQkFDekMsSUFBTUMsT0FBTyxHQUFHLE1BQUtGLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEFBQUM7b0JBRTFDLElBQUlDLE9BQU8sRUFBRTt3QkFDWCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLElBQUksQUFBQztnQkFFakIsT0FBT0QsU0FBUyxDQUFDO1lBQ25CLENBQUM7OztXQWhEa0JGLFNBQVM7Q0FpRDdCLEVBQUEifQ==