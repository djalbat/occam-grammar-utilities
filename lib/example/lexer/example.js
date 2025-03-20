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
var _occamlexers = require("occam-lexers");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ExampleLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(ExampleLexer, CommonLexer);
    function ExampleLexer() {
        _class_call_check(this, ExampleLexer);
        return _call_super(this, ExampleLexer, arguments);
    }
    _create_class(ExampleLexer, null, [
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(ExampleLexer, entries);
            }
        }
    ]);
    return ExampleLexer;
}(_occamlexers.CommonLexer);
_define_property(ExampleLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(ExampleLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(ExampleLexer, "RegularExpressionToken", null);
_define_property(ExampleLexer, "EndOfLineCommentToken", null);
_define_property(ExampleLexer, "SingleLineCommentToken", null);
_define_property(ExampleLexer, "EndOfMultiLineCommentToken", null);
_define_property(ExampleLexer, "StartOfMultiLineCommentToken", null);
_define_property(ExampleLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(ExampleLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(ExampleLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2xleGVyL2V4YW1wbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRXhhbXBsZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlTGV4ZXIiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJDb21tb25MZXhlciIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJCQUZtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBcUJaQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9DLHdCQUFXLENBQUNGLFdBQVcsQ0FyQnpDRCxjQXFCd0RFO1lBQVU7OztXQXJCbEVGO0VBQXFCRyx3QkFBVztBQUNuRCxpQkFEbUJILGNBQ1pJLGtCQUFpQkMsc0NBQXlCLEVBQUUsR0FBRzs7QUFFdEQsaUJBSG1CTCxjQUdaTSxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQUxtQk4sY0FLWk8sMEJBQXlCO0FBRWhDLGlCQVBtQlAsY0FPWlEseUJBQXdCO0FBRS9CLGlCQVRtQlIsY0FTWlMsMEJBQXlCO0FBRWhDLGlCQVhtQlQsY0FXWlUsOEJBQTZCO0FBRXBDLGlCQWJtQlYsY0FhWlcsZ0NBQStCO0FBRXRDLGlCQWZtQlgsY0FlWlksaUNBQWdDO0FBRXZDLGlCQWpCbUJaLGNBaUJaYSxrQ0FBaUM7QUFFeEMsaUJBbkJtQmIsY0FtQlpjLGtDQUFpQyJ9