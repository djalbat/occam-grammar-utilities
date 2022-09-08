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
            value: function execute(context) {
                var result;
                var operations = context.operations;
                var operation = this.find(context);
                if (operation === null) {
                    operation = this; ///
                    operations.push(operation);
                    result = operation.apply(context);
                } else {
                    result = operation.retrieve(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcGVyYXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdGlvbiB7XG4gIGlzRXF1YWxUbyhvcGVyYXRpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjb25zdHJ1Y3RvciB9ID0gdGhpcztcblxuICAgIGlmIChvcGVyYXRpb24gaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgY29tcGFyZXNUbyA9IHRoaXMuY29tcGFyZShvcGVyYXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gY29tcGFyZXNUbzsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBleGVjdXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0O1xuXG4gICAgbGV0IG9wZXJhdGlvbiA9IHRoaXMuZmluZChjb250ZXh0KTtcblxuICAgIGlmIChvcGVyYXRpb24gPT09IG51bGwpIHtcbiAgICAgIG9wZXJhdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgb3BlcmF0aW9ucy5wdXNoKG9wZXJhdGlvbik7XG5cbiAgICAgIHJlc3VsdCA9IG9wZXJhdGlvbi5hcHBseShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gb3BlcmF0aW9uLnJldHJpZXZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmaW5kKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG9wZXJhdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9ucy5maW5kKChvcGVyYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyhvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxUbykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJPcGVyYXRpb24iLCJpc0VxdWFsVG8iLCJvcGVyYXRpb24iLCJlcXVhbFRvIiwiY29uc3RydWN0b3IiLCJjb21wYXJlc1RvIiwiY29tcGFyZSIsImV4ZWN1dGUiLCJjb250ZXh0IiwicmVzdWx0Iiwib3BlcmF0aW9ucyIsImZpbmQiLCJwdXNoIiwiYXBwbHkiLCJyZXRyaWV2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBRVFBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWYsSUFBQSxBQUFNQSxTQUFTLGlCQUFmO2FBQU1BLFNBQVM7OEJBQVRBLFNBQVM7O2lCQUFUQSxTQUFTOztZQUM1QkMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSUMsT0FBTyxHQUFHLEtBQUssQUFBQztnQkFFcEIsSUFBTSxBQUFFQyxXQUFXLEdBQUssSUFBSSxDQUFwQkEsV0FBVyxBQUFTLEFBQUM7Z0JBRTdCLElBQUlGLEFBQVMsV0FBWUUsQ0FBckJGLFNBQVMsRUFBWUUsV0FBVyxDQUFBLEVBQUU7b0JBQ3BDLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0osU0FBUyxDQUFDLEFBQUM7b0JBRTNDQyxPQUFPLEdBQUdFLFVBQVUsQ0FBQyxDQUFDLEdBQUc7Z0JBQzNCLENBQUM7Z0JBRUQsT0FBT0YsT0FBTyxDQUFDO1lBQ2pCLENBQUM7OztZQUVESSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO2dCQUNmLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFNLEFBQUVDLFVBQVUsR0FBS0YsT0FBTyxDQUF0QkUsVUFBVSxBQUFZLEFBQUM7Z0JBRS9CLElBQUlSLFNBQVMsR0FBRyxJQUFJLENBQUNTLElBQUksQ0FBQ0gsT0FBTyxDQUFDLEFBQUM7Z0JBRW5DLElBQUlOLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQ3RCQSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUUsR0FBRztvQkFFdEJRLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDVixTQUFTLENBQUMsQ0FBQztvQkFFM0JPLE1BQU0sR0FBR1AsU0FBUyxDQUFDVyxLQUFLLENBQUNMLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxPQUFPO29CQUNMQyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ1ksUUFBUSxDQUFDTixPQUFPLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxPQUFPQyxNQUFNLENBQUM7WUFDaEIsQ0FBQzs7O1lBRURFLEdBQUksRUFBSkEsTUFBSTttQkFBSkEsU0FBQUEsSUFBSSxDQUFDSCxPQUFPLEVBQUU7O2dCQUNaLElBQU0sQUFBRUUsVUFBVSxHQUFLRixPQUFPLENBQXRCRSxVQUFVLEFBQVksRUFDeEJSLFNBQVMsR0FBR1EsVUFBVSxDQUFDQyxJQUFJLENBQUMsU0FBQ1QsU0FBUyxFQUFLO29CQUN6QyxJQUFNQyxPQUFPLEdBQUcsTUFBS0YsU0FBUyxDQUFDQyxTQUFTLENBQUMsQUFBQztvQkFFMUMsSUFBSUMsT0FBTyxFQUFFO3dCQUNYLE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksSUFBSSxBQUFDO2dCQUVqQixPQUFPRCxTQUFTLENBQUM7WUFDbkIsQ0FBQzs7O1dBOUNrQkYsU0FBUztDQStDN0IsRUFBQSJ9