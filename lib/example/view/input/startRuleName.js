"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartRuleNameInput;
    }
});
var _input = /*#__PURE__*/ _interop_require_default(require("../input"));
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
var StartRuleNameInput = /*#__PURE__*/ function(Input) {
    _inherits(StartRuleNameInput, Input);
    function StartRuleNameInput() {
        _class_call_check(this, StartRuleNameInput);
        return _call_super(this, StartRuleNameInput, arguments);
    }
    _create_class(StartRuleNameInput, [
        {
            key: "getStartRuleName",
            value: function getStartRuleName() {
                var value = this.getValue(), startRuleName = value; ///
                return startRuleName;
            }
        },
        {
            key: "setStartRuleName",
            value: function setStartRuleName(startRuleName) {
                var value = startRuleName; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getStartRuleName = this.getStartRuleName.bind(this), setStartRuleName = this.setStartRuleName.bind(this);
                return {
                    getStartRuleName: getStartRuleName,
                    setStartRuleName: setStartRuleName
                };
            }
        }
    ]);
    return StartRuleNameInput;
}(_input.default);
_define_property(StartRuleNameInput, "defaultProperties", {
    className: "start-rule-name",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFN0YXJ0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBzdGFydFJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRTdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0U3RhcnRSdWxlTmFtZSA9IHRoaXMuc2V0U3RhcnRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTdGFydFJ1bGVOYW1lLFxuICAgICAgc2V0U3RhcnRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzdGFydC1ydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTdGFydFJ1bGVOYW1lSW5wdXQiLCJnZXRTdGFydFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInN0YXJ0UnVsZU5hbWUiLCJzZXRTdGFydFJ1bGVOYW1lIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGdCQUFnQkYsT0FBTyxHQUFHO2dCQUVoQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkQsYUFBYTtnQkFDNUIsSUFBTUYsUUFBUUUsZUFBZSxHQUFHO2dCQUVoQyxJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7WUFDaEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQ2xESCxtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDLElBQUk7Z0JBRXhELE9BQVE7b0JBQ05QLGtCQUFBQTtvQkFDQUksa0JBQUFBO2dCQUNGO1lBQ0Y7OztXQXRCbUJMO0VBQTJCUyxjQUFLO0FBd0JuRCxpQkF4Qm1CVCxvQkF3QlpVLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2QifQ==