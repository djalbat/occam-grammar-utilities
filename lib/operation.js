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
var Operation = /*#__PURE__*/ function() {
    function Operation(rule) {
        _classCallCheck(this, Operation);
        this.rule = rule;
    }
    _createClass(Operation, [
        {
            key: "getRule",
            value: function getRule() {
                return this.rule;
            }
        },
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
            value: function execute(context) {
                var operations = context.operations;
                var operation = this.find(context);
                if (operation === null) {
                    operation = this; ///
                    operations.push(operation);
                    operation.apply(context);
                }
                var result = operation.retrieve(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcGVyYXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGUgPSBydWxlO1xuICB9XG5cbiAgZ2V0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKG9wZXJhdGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IGNvbnN0cnVjdG9yIH0gPSB0aGlzO1xuXG4gICAgaWYgKG9wZXJhdGlvbiBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCBjb21wYXJlc1RvID0gdGhpcy5jb21wYXJlKG9wZXJhdGlvbik7XG5cbiAgICAgIGVxdWFsVG8gPSBjb21wYXJlc1RvOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGV4ZWN1dGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgb3BlcmF0aW9ucyB9ID0gY29udGV4dDtcblxuICAgIGxldCBvcGVyYXRpb24gPSB0aGlzLmZpbmQoY29udGV4dCk7XG5cbiAgICBpZiAob3BlcmF0aW9uID09PSBudWxsKSB7XG4gICAgICBvcGVyYXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIG9wZXJhdGlvbnMucHVzaChvcGVyYXRpb24pO1xuXG4gICAgICBvcGVyYXRpb24uYXBwbHkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gb3BlcmF0aW9uLnJldHJpZXZlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZpbmQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgb3BlcmF0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zLmZpbmQoKG9wZXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbFRvKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gb3BlcmF0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk9wZXJhdGlvbiIsInJ1bGUiLCJnZXRSdWxlIiwiaXNFcXVhbFRvIiwib3BlcmF0aW9uIiwiZXF1YWxUbyIsImNvbnN0cnVjdG9yIiwiY29tcGFyZXNUbyIsImNvbXBhcmUiLCJleGVjdXRlIiwiY29udGV4dCIsIm9wZXJhdGlvbnMiLCJmaW5kIiwicHVzaCIsImFwcGx5IiwicmVzdWx0IiwicmV0cmlldmUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUVRQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFmLElBQUEsQUFBTUEsU0FBUyxpQkFBZjthQUFNQSxTQUFTLENBQ2hCQyxJQUFJOzhCQURHRCxTQUFTO1FBRTFCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7O2lCQUZBRCxTQUFTOztZQUs1QkUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUksQ0FBQztZQUNuQixDQUFDOzs7WUFFREUsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSUMsT0FBTyxHQUFHLEtBQUssQUFBQztnQkFFcEIsSUFBTSxBQUFFQyxXQUFXLEdBQUssSUFBSSxDQUFwQkEsV0FBVyxBQUFTLEFBQUM7Z0JBRTdCLElBQUlGLEFBQVMsV0FBWUUsQ0FBckJGLFNBQVMsRUFBWUUsV0FBVyxDQUFBLEVBQUU7b0JBQ3BDLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0osU0FBUyxDQUFDLEFBQUM7b0JBRTNDQyxPQUFPLEdBQUdFLFVBQVUsQ0FBQyxDQUFDLEdBQUc7Z0JBQzNCLENBQUM7Z0JBRUQsT0FBT0YsT0FBTyxDQUFDO1lBQ2pCLENBQUM7OztZQUVESSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO2dCQUNmLElBQU0sQUFBRUMsVUFBVSxHQUFLRCxPQUFPLENBQXRCQyxVQUFVLEFBQVksQUFBQztnQkFFL0IsSUFBSVAsU0FBUyxHQUFHLElBQUksQ0FBQ1EsSUFBSSxDQUFDRixPQUFPLENBQUMsQUFBQztnQkFFbkMsSUFBSU4sU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDdEJBLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBRSxHQUFHO29CQUV0Qk8sVUFBVSxDQUFDRSxJQUFJLENBQUNULFNBQVMsQ0FBQyxDQUFDO29CQUUzQkEsU0FBUyxDQUFDVSxLQUFLLENBQUNKLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELElBQU1LLE1BQU0sR0FBR1gsU0FBUyxDQUFDWSxRQUFRLENBQUNOLE9BQU8sQ0FBQyxBQUFDO2dCQUUzQyxPQUFPSyxNQUFNLENBQUM7WUFDaEIsQ0FBQzs7O1lBRURILEdBQUksRUFBSkEsTUFBSTttQkFBSkEsU0FBQUEsSUFBSSxDQUFDRixPQUFPLEVBQUU7O2dCQUNaLElBQU0sQUFBRUMsVUFBVSxHQUFLRCxPQUFPLENBQXRCQyxVQUFVLEFBQVksRUFDeEJQLFNBQVMsR0FBR08sVUFBVSxDQUFDQyxJQUFJLENBQUMsU0FBQ1IsU0FBUyxFQUFLO29CQUN6QyxJQUFNQyxPQUFPLEdBQUcsTUFBS0YsU0FBUyxDQUFDQyxTQUFTLENBQUMsQUFBQztvQkFFMUMsSUFBSUMsT0FBTyxFQUFFO3dCQUNYLE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksSUFBSSxBQUFDO2dCQUVqQixPQUFPRCxTQUFTLENBQUM7WUFDbkIsQ0FBQzs7O1dBcERrQkosU0FBUztDQXFEN0IsRUFBQSJ9