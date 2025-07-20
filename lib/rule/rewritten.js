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
var _cycle = require("../utilities/cycle");
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
            value: function fromRuleAndCycles(rule, cycles, ruleMap) {
                var ruleName = rule.getName(), definitions = [], rewrittenDefinition = _rewritten1.default.fromRuleName(ruleName, ruleMap);
                if (rewrittenDefinition !== null) {
                    var definition = rewrittenDefinition; ///
                    definitions.push(definition);
                }
                var paths = (0, _cycle.pathsFromRuleNameAndCycles)(ruleName, cycles);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIE5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSwgc3RhdGUpIHtcbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBSZXdyaXR0ZW5Ob2RlO1xuXG4gICAgcmV0dXJuIE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlcyhydWxlLCBjeWNsZXMsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aHMgPSBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21QYXRoKHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBydWxlLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJzdGF0ZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsInJ1bGUiLCJjeWNsZXMiLCJydWxlTWFwIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicHVzaCIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsImZyb21QYXRoIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzRCQVBBO2dFQUVLO2lFQUNNO3FCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSztnQkFDekMsSUFBTUMsa0JBQWtCQyxrQkFBYTtnQkFFckMsT0FBT0Q7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUM1QyxJQUFNUCxXQUFXSyxLQUFLRyxPQUFPLElBQ3ZCQyxjQUFjLEVBQUUsRUFDaEJDLHNCQUFzQkMsbUJBQW1CLENBQUNDLFlBQVksQ0FBQ1osVUFBVU87Z0JBRXZFLElBQUlHLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNRyxhQUFhSCxxQkFBcUIsR0FBRztvQkFFM0NELFlBQVlLLElBQUksQ0FBQ0Q7Z0JBQ25CO2dCQUVBLElBQU1FLFFBQVFDLElBQUFBLGlDQUEwQixFQUFDaEIsVUFBVU07Z0JBRW5EUyxNQUFNRSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2IsSUFBTVIsc0JBQXNCQyxtQkFBbUIsQ0FBQ1EsUUFBUSxDQUFDRCxNQUFNWDtvQkFFL0QsSUFBSUcsd0JBQXdCLE1BQU07d0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO3dCQUUzQ0QsWUFBWUssSUFBSSxDQUFDRDtvQkFDbkI7Z0JBQ0Y7Z0JBRUEsSUFBTU8sT0FBT3BCLFVBQ1BxQixVQUFVaEIsS0FBS2lCLFVBQVUsSUFDekJDLGdCQUFnQixJQWhDTHpCLGNBZ0N1QnNCLE1BQU1DLFNBQVNaO2dCQUV2RCxPQUFPYztZQUNUOzs7V0FuQ21CekI7RUFBc0IwQixrQkFBSSJ9