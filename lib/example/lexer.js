"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExampleLexer;
    }
});
var _occamLexers = require("occam-lexers");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ExampleLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(ExampleLexer, CommonLexer);
    var _super = _createSuper(ExampleLexer);
    function ExampleLexer() {
        _classCallCheck(this, ExampleLexer);
        return _super.apply(this, arguments);
    }
    _createClass(ExampleLexer, null, [
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(ExampleLexer, entries);
            }
        }
    ]);
    return ExampleLexer;
}(_occamLexers.CommonLexer);
_defineProperty(ExampleLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken) ///
;
_defineProperty(ExampleLexer, "WhitespaceToken", null);
_defineProperty(ExampleLexer, "RegularExpressionToken", null);
_defineProperty(ExampleLexer, "EndOfLineCommentToken", null);
_defineProperty(ExampleLexer, "SingleLineCommentToken", null);
_defineProperty(ExampleLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(ExampleLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(ExampleLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(ExampleLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(ExampleLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2xleGVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRXhhbXBsZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRXhhbXBsZUxleGVyIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsWUFBWTs7OzJCQUZzQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBQSxBQUFNQSxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVk7Ozs7OztZQXFCeEJDLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0MsWUFBVyxZQUFBLENBQUNGLFdBQVcsQ0FBQ0QsWUFBWSxFQUFFRSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O0NBQ3ZGLENBdEJ5Q0MsWUFBVyxZQUFBLENBc0JwRDtBQXJCQyxnQkFEbUJILFlBQVksRUFDeEJJLGdCQUFjLEVBQUdDLFlBQXlCLDBCQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV0RCxnQkFIbUJMLFlBQVksRUFHeEJNLGlCQUFlLEVBQUcsSUFBSSxDQUFDO0FBRTlCLGdCQUxtQk4sWUFBWSxFQUt4Qk8sd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVBtQlAsWUFBWSxFQU94QlEsdUJBQXFCLEVBQUcsSUFBSSxDQUFDO0FBRXBDLGdCQVRtQlIsWUFBWSxFQVN4QlMsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVhtQlQsWUFBWSxFQVd4QlUsNEJBQTBCLEVBQUcsSUFBSSxDQUFDO0FBRXpDLGdCQWJtQlYsWUFBWSxFQWF4QlcsOEJBQTRCLEVBQUcsSUFBSSxDQUFDO0FBRTNDLGdCQWZtQlgsWUFBWSxFQWV4QlksK0JBQTZCLEVBQUcsSUFBSSxDQUFDO0FBRTVDLGdCQWpCbUJaLFlBQVksRUFpQnhCYSxnQ0FBOEIsRUFBRyxJQUFJLENBQUM7QUFFN0MsZ0JBbkJtQmIsWUFBWSxFQW1CeEJjLGdDQUE4QixFQUFHLElBQUksQ0FBQyJ9