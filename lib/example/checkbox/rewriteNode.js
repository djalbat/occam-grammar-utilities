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
var _easy = require("easy");
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
        "\n\n  zoom: 1.5;\n  margin-right: 0.5rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RewriteNodeCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(RewriteNodeCheckbox, Checkbox);
    var _super = _create_super(RewriteNodeCheckbox);
    function RewriteNodeCheckbox() {
        _class_call_check(this, RewriteNodeCheckbox);
        return _super.apply(this, arguments);
    }
    _create_class(RewriteNodeCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var isRewriteNodeCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    isRewriteNodeCheckboxChecked: isRewriteNodeCheckboxChecked
                };
            }
        }
    ]);
    return RewriteNodeCheckbox;
}(_easy.Checkbox);
_define_property(RewriteNodeCheckbox, "defaultProperties", {
    className: "rewrite-node",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(RewriteNodeCheckbox)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NoZWNrYm94L3Jld3JpdGVOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFJld3JpdGVOb2RlQ2hlY2tib3ggZXh0ZW5kcyBDaGVja2JveCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNSZXdyaXRlTm9kZUNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBpc1Jld3JpdGVOb2RlQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJld3JpdGUtbm9kZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmV3cml0ZU5vZGVDaGVja2JveClgXG5cbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlJld3JpdGVOb2RlQ2hlY2tib3giLCJwYXJlbnRDb250ZXh0IiwiaXNSZXdyaXRlTm9kZUNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsImJpbmQiLCJDaGVja2JveCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBQTs7O29FQW5Cc0I7b0JBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLG9DQWVILEFBZkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFbkUsT0FBUTtvQkFDTkYsOEJBQUFBO2dCQUNGO1lBQ0Y7OztXQVBJRjtFQUE0QkssY0FBUTtBQVN4QyxpQkFUSUwscUJBU0dNLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2Q7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDVCJ9