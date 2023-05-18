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
var _constants = require("../constants");
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
        "\n\n  height: 32rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    var _super = _create_super(LexicalEntriesTextarea);
    function LexicalEntriesTextarea() {
        _class_call_check(this, LexicalEntriesTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(LexicalEntriesTextarea, [
        {
            key: "getLexicalEntries",
            value: function getLexicalEntries() {
                var lexicalEntries = {};
                try {
                    var value = this.getValue(), lexicalEntriesString = value; ///
                    lexicalEntries = JSON.parse(lexicalEntriesString);
                } catch (error) {
                ///
                }
                return lexicalEntries;
            }
        },
        {
            key: "setLexicalEntries",
            value: function setLexicalEntries(lexicalEntries) {
                var lexicalEntriesString = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE), value = lexicalEntriesString; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
                return {
                    getLexicalEntries: getLexicalEntries,
                    setLexicalEntries: setLexicalEntries
                };
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
_define_property(LexicalEntriesTextarea, "defaultProperties", {
    className: "lexical-entries",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(LexicalEntriesTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0ge307XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICBsZXhpY2FsRW50cmllc1N0cmluZyA9IHZhbHVlOyAvLy9cblxuICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKGxleGljYWxFbnRyaWVzU3RyaW5nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xuICB9XG5cbiAgc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCBET1VCTEVfU1BBQ0UpLFxuICAgICAgICAgIHZhbHVlID0gbGV4aWNhbEVudHJpZXNTdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGV4aWNhbEVudHJpZXNUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAzMnJlbTtcblxuYDtcbiJdLCJuYW1lcyI6WyJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJsZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllc1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwic2V0TGV4aWNhbEVudHJpZXMiLCJzdHJpbmdpZnkiLCJET1VCTEVfU1BBQ0UiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStDQTs7O2VBQUE7OztvRUE3Q3NCOytEQUVEO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSx1Q0F1Q0gsQUF2Q0g7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBSUMsaUJBQWlCLENBQUM7Z0JBRXRCLElBQUk7b0JBQ0YsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLHVCQUF1QkYsT0FBTyxHQUFHO29CQUV2Q0QsaUJBQWlCSSxLQUFLQyxLQUFLLENBQUNGO2dCQUM5QixFQUFFLE9BQU9HLE9BQU87Z0JBQ2QsR0FBRztnQkFDTDtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsY0FBYyxFQUFFO2dCQUNoQyxJQUFNRyx1QkFBdUJDLEtBQUtJLFNBQVMsQ0FBQ1IsZ0JBQWdCLElBQUksRUFBRVMsdUJBQVksR0FDeEVSLFFBQVFFLHNCQUFzQixHQUFHO2dCQUV2QyxJQUFJLENBQUNPLFFBQVEsQ0FBQ1Q7WUFDaEI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1aLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDYSxJQUFJLENBQUMsSUFBSSxHQUNwREwsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNLLElBQUksQ0FBQyxJQUFJO2dCQUUxRCxPQUFRO29CQUNOYixtQkFBQUE7b0JBQ0FRLG1CQUFBQTtnQkFDRjtZQUNGOzs7V0EvQklUO0VBQStCZSxpQkFBUTtBQWlDM0MsaUJBakNJZix3QkFpQ0dnQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtBQUNkO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CIn0=