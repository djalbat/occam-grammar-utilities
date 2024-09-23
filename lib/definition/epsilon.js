"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonDefinition;
    }
});
var _occamparsers = require("occam-parsers");
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
var EpsilonPart = _occamparsers.Parts.EpsilonPart;
var EpsilonDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(EpsilonDefinition, Definition);
    function EpsilonDefinition() {
        _class_call_check(this, EpsilonDefinition);
        return _call_super(this, EpsilonDefinition, arguments);
    }
    _create_class(EpsilonDefinition, null, [
        {
            key: "fromPrecedence",
            value: function fromPrecedence(precedence) {
                var epsilonPart = EpsilonPart.fromNothing(), parts = [
                    epsilonPart
                ], epsilonDefinition = EpsilonDefinition.fromPartsAndPrecedence(parts, precedence);
                return epsilonDefinition;
            }
        }
    ]);
    return EpsilonDefinition;
}(_occamparsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBFcHNpbG9uUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBFcHNpbG9uUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZXBzaWxvbkRlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcHNpbG9uRGVmaW5pdGlvbiIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJmcm9tUHJlY2VkZW5jZSIsInByZWNlZGVuY2UiLCJlcHNpbG9uUGFydCIsImZyb21Ob3RoaW5nIiwicGFydHMiLCJlcHNpbG9uRGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0QkFKYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQyxjQUFnQkMsbUJBQUssQ0FBckJEO0FBRU8sSUFBQSxBQUFNRCxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQzlCLElBQU1DLGNBQWNKLFlBQVlLLFdBQVcsSUFDckNDLFFBQVE7b0JBQ05GO2lCQUNELEVBQ0RHLG9CQUFvQlIsQUFOVEEsa0JBTTJCUyxzQkFBc0IsQ0FBQ0YsT0FBT0g7Z0JBRTFFLE9BQU9JO1lBQ1Q7OztXQVRtQlI7RUFBMEJVLHdCQUFVIn0=