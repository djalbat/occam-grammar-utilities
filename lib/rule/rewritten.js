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
var _leftRecursive = require("../utilities/leftRecursive");
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
                var definitions;
                var ruleName = rule.getName(), paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles);
                var rewrittenDefinitions = [];
                definitions = rule.getDefinitions();
                definitions.forEach(function(definition) {
                    var leftRecursiveRuleNames = (0, _leftRecursive.leftRecursiveRuleNamesFromDefinition)(definition, ruleName);
                    paths.forEach(function(path) {
                        var rewrittenDefinition = _rewritten1.default.fromLeftRecursiveRuleNamesAndPath(leftRecursiveRuleNames, path, ruleMap);
                        if (rewrittenDefinition !== null) {
                            rewrittenDefinitions.push(rewrittenDefinition);
                        }
                    });
                });
                var rewrittenDefinition = _rewritten1.default.fromRuleName(ruleName, ruleMap);
                if (rewrittenDefinition !== null) {
                    rewrittenDefinitions.push(rewrittenDefinition);
                }
                definitions = rewrittenDefinitions; ///
                var name = ruleName, opacity = rule.getOpacity(), rewrittenRule = new RewrittenRule(name, opacity, definitions);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2xlZnRSZWN1cnNpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUsIHN0YXRlKSB7XG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gUmV3cml0dGVuTm9kZTtcblxuICAgIHJldHVybiBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBwYXRocyA9IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzKHJ1bGVOYW1lLCBjeWNsZXMpO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbnMgPSBbXTtcblxuICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBydWxlTmFtZSk7XG5cbiAgICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZXNBbmRQYXRoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbnMucHVzaChyZXdyaXR0ZW5EZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKHJld3JpdHRlbkRlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHJld3JpdHRlbkRlZmluaXRpb25zLnB1c2gocmV3cml0dGVuRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgZGVmaW5pdGlvbnMgPSByZXdyaXR0ZW5EZWZpbml0aW9uczsgLy8vXG5cbiAgICBjb25zdCBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gcnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5SdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmV3cml0dGVuUnVsZSIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwic3RhdGUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0TmFtZSIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJyZXdyaXR0ZW5EZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicGF0aCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZXNBbmRQYXRoIiwicHVzaCIsImZyb21SdWxlTmFtZSIsIm5hbWUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsInJld3JpdHRlblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozs0QkFSQTtnRUFFSztpRUFDTTtvQkFFVzs2QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxRQUFRLEVBQUVDLEtBQUs7Z0JBQ3pDLElBQU1DLGtCQUFrQkMsa0JBQWE7Z0JBRXJDLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDNUMsSUFBSUM7Z0JBRUosSUFBTVIsV0FBV0ssS0FBS0ksT0FBTyxJQUN2QkMsUUFBUUMsSUFBQUEsZ0NBQTBCLEVBQUNYLFVBQVVNO2dCQUVuRCxJQUFNTSx1QkFBdUIsRUFBRTtnQkFFL0JKLGNBQWNILEtBQUtRLGNBQWM7Z0JBRWpDTCxZQUFZTSxPQUFPLENBQUMsU0FBQ0M7b0JBQ25CLElBQU1DLHlCQUF5QkMsSUFBQUEsbURBQW9DLEVBQUNGLFlBQVlmO29CQUVoRlUsTUFBTUksT0FBTyxDQUFDLFNBQUNJO3dCQUNiLElBQU1DLHNCQUFzQkMsbUJBQW1CLENBQUNDLGlDQUFpQyxDQUFDTCx3QkFBd0JFLE1BQU1YO3dCQUVoSCxJQUFJWSx3QkFBd0IsTUFBTTs0QkFDaENQLHFCQUFxQlUsSUFBSSxDQUFDSDt3QkFDNUI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBTUEsc0JBQXNCQyxtQkFBbUIsQ0FBQ0csWUFBWSxDQUFDdkIsVUFBVU87Z0JBRXZFLElBQUlZLHdCQUF3QixNQUFNO29CQUNoQ1AscUJBQXFCVSxJQUFJLENBQUNIO2dCQUM1QjtnQkFFQVgsY0FBY0ksc0JBQXNCLEdBQUc7Z0JBRXZDLElBQU1ZLE9BQU94QixVQUNQeUIsVUFBVXBCLEtBQUtxQixVQUFVLElBQ3pCQyxnQkFBZ0IsSUF2Q0w3QixjQXVDdUIwQixNQUFNQyxTQUFTakI7Z0JBRXZELE9BQU9tQjtZQUNUOzs7V0ExQ21CN0I7RUFBc0I4QixrQkFBSSJ9