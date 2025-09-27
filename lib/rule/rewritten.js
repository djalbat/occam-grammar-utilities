"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RewrittenRule;
    }
});
var _occamparsers = require("occam-parsers");
var _rewritten = /*#__PURE__*/ _interop_require_default(require("../node/rewritten"));
var _rewritten1 = /*#__PURE__*/ _interop_require_default(require("../definition/rewritten"));
var _path = require("../utilities/path");
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    function RewrittenRule() {
        _class_call_check(this, RewrittenRule);
        return _call_super(this, RewrittenRule, arguments);
    }
    _create_class(RewrittenRule, [
        {
            key: "NonTerminalNodeFromRuleName",
            value: function NonTerminalNodeFromRuleName(ruleName, state) {
                var NonTerminalNode = _rewritten.default;
                return NonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles, ruleMap, ruleNamesMap) {
                var definitions = [], ruleName = rule.getName(), paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles, ruleMap, ruleNamesMap);
                paths.forEach(function(path) {
                    var rewrittenDefinition = _rewritten1.default.fromPath(path, ruleMap);
                    if (rewrittenDefinition !== null) {
                        var definition = rewrittenDefinition; ///
                        definitions.push(definition);
                    }
                });
                var name = ruleName, opacity = rule.getOpacity(), rewrittenRule = new RewrittenRule(name, opacity, definitions);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSkge1xuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IFJld3JpdHRlbk5vZGU7XG5cbiAgICByZXR1cm4gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHBhdGhzID0gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21QYXRoKHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBydWxlLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJzdGF0ZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTWFwIiwicnVsZU5hbWVzTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXROYW1lIiwicGF0aHMiLCJwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyIsImZvckVhY2giLCJwYXRoIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUGF0aCIsImRlZmluaXRpb24iLCJwdXNoIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBO2dFQUVLO2lFQUNNO29CQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSztnQkFDekMsSUFBTUMsa0JBQWtCQyxrQkFBYTtnQkFFckMsT0FBT0Q7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7Z0JBQzFELElBQU1DLGNBQWMsRUFBRSxFQUNoQlQsV0FBV0ssS0FBS0ssT0FBTyxJQUN2QkMsUUFBUUMsSUFBQUEsZ0NBQTBCLEVBQUNaLFVBQVVNLFFBQVFDLFNBQVNDO2dCQUVwRUcsTUFBTUUsT0FBTyxDQUFDLFNBQUNDO29CQUNiLElBQU1DLHNCQUFzQkMsbUJBQW1CLENBQUNDLFFBQVEsQ0FBQ0gsTUFBTVA7b0JBRS9ELElBQUlRLHdCQUF3QixNQUFNO3dCQUNoQyxJQUFNRyxhQUFhSCxxQkFBcUIsR0FBRzt3QkFFM0NOLFlBQVlVLElBQUksQ0FBQ0Q7b0JBQ25CO2dCQUNGO2dCQUVBLElBQU1FLE9BQU9wQixVQUNQcUIsVUFBVWhCLEtBQUtpQixVQUFVLElBQ3pCQyxnQkFBZ0IsSUF4Qkx6QixjQXdCdUJzQixNQUFNQyxTQUFTWjtnQkFFdkQsT0FBT2M7WUFDVDs7O1dBM0JtQnpCO0VBQXNCMEIsa0JBQUkifQ==