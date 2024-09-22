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
var _constants = require("../../constants");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 12rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    function LexicalEntriesTextarea() {
        _class_call_check(this, LexicalEntriesTextarea);
        return _call_super(this, LexicalEntriesTextarea, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGxleGljYWxFbnRyaWVzU3RyaW5nID0gdmFsdWU7IC8vL1xuXG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNTdHJpbmcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsIERPVUJMRV9TUEFDRSksXG4gICAgICAgICAgdmFsdWUgPSBsZXhpY2FsRW50cmllc1N0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZXhpY2FsRW50cmllc1RleHRhcmVhKWBcblxuICBoZWlnaHQ6IDEycmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJnZXRMZXhpY2FsRW50cmllcyIsImxleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImxleGljYWxFbnRyaWVzU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0NBOzs7ZUFBQTs7O29FQTdDc0I7K0RBRUQ7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQixDQUFDO2dCQUV0QixJQUFJO29CQUNGLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyx1QkFBdUJGLE9BQU8sR0FBRztvQkFFdkNELGlCQUFpQkksS0FBS0MsS0FBSyxDQUFDRjtnQkFDOUIsRUFBRSxPQUFPRyxPQUFPO2dCQUNkLEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JQLGNBQWM7Z0JBQzlCLElBQU1HLHVCQUF1QkMsS0FBS0ksU0FBUyxDQUFDUixnQkFBZ0IsTUFBTVMsdUJBQVksR0FDeEVSLFFBQVFFLHNCQUFzQixHQUFHO2dCQUV2QyxJQUFJLENBQUNPLFFBQVEsQ0FBQ1Q7WUFDaEI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVosb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNhLElBQUksQ0FBQyxJQUFJLEdBQ3BETCxvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0ssSUFBSSxDQUFDLElBQUk7Z0JBRTFELE9BQVE7b0JBQ05iLG1CQUFBQTtvQkFDQVEsbUJBQUFBO2dCQUNGO1lBQ0Y7OztXQS9CSVQ7RUFBK0JlLGlCQUFRO0FBaUMzQyxpQkFqQ0lmLHdCQWlDR2dCLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2Q7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIifQ==