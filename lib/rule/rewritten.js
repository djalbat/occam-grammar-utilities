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
    _create_class(RewrittenRule, null, [
        {
            key: "fromRuleAndCycles",
            value: function fromRuleAndCycles(rule, cycles, ruleMap) {
                var ruleName = rule.getName(), definitions = [], rewrittenDefinition = _rewritten1.default.fromRuleName(ruleName, ruleMap);
                if (rewrittenDefinition !== null) {
                    var definition = rewrittenDefinition; ///
                    definitions.push(definition);
                }
                var paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles);
                paths.forEach(function(path) {
                    var rewrittenDefinition = _rewritten1.default.fromPath(path, ruleMap);
                    if (rewrittenDefinition !== null) {
                        var definition = rewrittenDefinition; ///
                        definitions.push(definition);
                    }
                });
                var name = ruleName, opacity = rule.getOpacity(), NonTerminalNode = _rewritten.default, rewrittenRule = new RewrittenRule(name, opacity, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHJld3JpdHRlbkRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRocyA9IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpO1xuXG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVBhdGgocGF0aCwgcnVsZU1hcCk7XG5cbiAgICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IHJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJld3JpdHRlbk5vZGUsXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicHVzaCIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsImZyb21QYXRoIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIiwiUmV3cml0dGVuTm9kZSIsInJld3JpdHRlblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQQTtnRUFFSztpRUFDTTtvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDNUMsSUFBTUMsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsY0FBYyxFQUFFLEVBQ2hCQyxzQkFBc0JDLG1CQUFtQixDQUFDQyxZQUFZLENBQUNMLFVBQVVEO2dCQUV2RSxJQUFJSSx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUcsYUFBYUgscUJBQXFCLEdBQUc7b0JBRTNDRCxZQUFZSyxJQUFJLENBQUNEO2dCQUNuQjtnQkFFQSxJQUFNRSxRQUFRQyxJQUFBQSxnQ0FBMEIsRUFBQ1QsVUFBVUY7Z0JBRW5EVSxNQUFNRSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2IsSUFBTVIsc0JBQXNCQyxtQkFBbUIsQ0FBQ1EsUUFBUSxDQUFDRCxNQUFNWjtvQkFFL0QsSUFBSUksd0JBQXdCLE1BQU07d0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO3dCQUUzQ0QsWUFBWUssSUFBSSxDQUFDRDtvQkFDbkI7Z0JBQ0Y7Z0JBRUEsSUFBTU8sT0FBT2IsVUFDUGMsVUFBVWpCLEtBQUtrQixVQUFVLElBQ3pCQyxrQkFBa0JDLGtCQUFhLEVBQy9CQyxnQkFBZ0IsSUEzQkx2QixjQTJCdUJrQixNQUFNQyxTQUFTWixhQUFhYztnQkFFcEUsT0FBT0U7WUFDVDs7O1dBOUJtQnZCO0VBQXNCd0Isa0JBQUkifQ==