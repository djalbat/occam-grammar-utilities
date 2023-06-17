"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 56rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    var _super = _create_super(ParseTreeTextarea);
    function ParseTreeTextarea() {
        _class_call_check(this, ParseTreeTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(ParseTreeTextarea, [
        {
            key: "setParseTree",
            value: function setParseTree(parseTree) {
                if (parseTree !== null) {
                    parseTree.shiftLine(); //
                    var parseTreeString = parseTree.asString(), value = parseTreeString; ///
                    this.setValue(value);
                } else {
                    this.clearParseTree();
                }
            }
        },
        {
            key: "clearParseTree",
            value: function clearParseTree() {
                var value = "";
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
                return {
                    setParseTree: setParseTree,
                    clearParseTree: clearParseTree
                };
            }
        }
    ]);
    return ParseTreeTextarea;
}(_textarea.default);
_define_property(ParseTreeTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});
var _default = (0, _easywithstyle.default)(ParseTreeTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRQYXJzZVRyZWUgPSB0aGlzLnNldFBhcnNlVHJlZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyUGFyc2VUcmVlID0gdGhpcy5jbGVhclBhcnNlVHJlZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRQYXJzZVRyZWUsXG4gICAgICBjbGVhclBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDU2cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUGFyc2VUcmVlVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkNBOzs7ZUFBQTs7O29FQXpDc0I7K0RBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGtDQXFDSCxBQXJDSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBSUEsY0FBYyxNQUFNO29CQUN0QkEsVUFBVUMsU0FBUyxJQUFLLEVBQUU7b0JBRTFCLElBQU1DLGtCQUFrQkYsVUFBVUcsUUFBUSxJQUNwQ0MsUUFBUUYsaUJBQWtCLEdBQUc7b0JBRW5DLElBQUksQ0FBQ0csUUFBUSxDQUFDRDtnQkFDaEIsT0FBTztvQkFDTCxJQUFJLENBQUNFLGNBQWM7Z0JBQ3JCO1lBQ0Y7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsUUFBUTtnQkFFZCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0Q7WUFDaEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQ1MsSUFBSSxDQUFDLElBQUksR0FDMUNGLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLElBQUk7Z0JBRXBELE9BQVE7b0JBQ05ULGNBQUFBO29CQUNBTyxnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBNUJJUjtFQUEwQlcsaUJBQVE7QUE4QnRDLGlCQTlCSVgsbUJBOEJHWSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxVQUFVO0FBQ1o7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEIifQ==