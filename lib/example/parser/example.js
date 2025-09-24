"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExampleParser;
    }
});
var _occamparsers = require("occam-parsers");
var _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("./nonTerminalNodeMap"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var defaultNonTerminalNode = null;
var ExampleParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(ExampleParser, CommonParser);
    function ExampleParser() {
        _class_call_check(this, ExampleParser);
        return _call_super(this, ExampleParser, arguments);
    }
    return ExampleParser;
}(_occamparsers.CommonParser);
_define_property(ExampleParser, "NonTerminalNodeMap", _nonTerminalNodeMap.default);
_define_property(ExampleParser, "defaultNonTerminalNode", defaultNonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3BhcnNlci9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlTWFwIGZyb20gXCIuL25vblRlcm1pbmFsTm9kZU1hcFwiO1xuXG5jb25zdCBkZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG5cbiAgc3RhdGljIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBkZWZhdWx0Tm9uVGVybWluYWxOb2RlO1xufSJdLCJuYW1lcyI6WyJFeGFtcGxlUGFyc2VyIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIkNvbW1vblBhcnNlciIsIk5vblRlcm1pbmFsTm9kZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NEJBTlE7eUVBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNQyx5QkFBeUI7QUFFaEIsSUFBQSxBQUFNRCw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBc0JFLDBCQUFZO0FBQ3JELGlCQURtQkYsZUFDWkcsc0JBQXFCQSwyQkFBa0I7QUFFOUMsaUJBSG1CSCxlQUdaQywwQkFBeUJBIn0=