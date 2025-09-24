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
                var ruleName = rule.getName(), paths = (0, _cycle.pathsFromRuleNameAndCycles)(ruleName, cycles);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jeWNsZVwiO1xuaW1wb3J0IHsgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9sZWZ0UmVjdXJzaXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSkge1xuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IFJld3JpdHRlbk5vZGU7XG5cbiAgICByZXR1cm4gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCkge1xuICAgIGxldCBkZWZpbml0aW9ucztcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcGF0aHMgPSBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzKTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb25zID0gW107XG5cbiAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWVzQW5kUGF0aChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBwYXRoLCBydWxlTWFwKTtcblxuICAgICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb25zLnB1c2gocmV3cml0dGVuRGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICByZXdyaXR0ZW5EZWZpbml0aW9ucy5wdXNoKHJld3JpdHRlbkRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGRlZmluaXRpb25zID0gcmV3cml0dGVuRGVmaW5pdGlvbnM7IC8vL1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IHJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlblJ1bGUiLCJOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsInN0YXRlIiwiTm9uVGVybWluYWxOb2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwicnVsZSIsImN5Y2xlcyIsInJ1bGVNYXAiLCJkZWZpbml0aW9ucyIsImdldE5hbWUiLCJwYXRocyIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwicmV3cml0dGVuRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZvckVhY2giLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInBhdGgiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWVzQW5kUGF0aCIsInB1c2giLCJmcm9tUnVsZU5hbWUiLCJuYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NEJBUkE7Z0VBRUs7aUVBQ007cUJBRVc7NkJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsUUFBUSxFQUFFQyxLQUFLO2dCQUN6QyxJQUFNQyxrQkFBa0JDLGtCQUFhO2dCQUVyQyxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzVDLElBQUlDO2dCQUVKLElBQU1SLFdBQVdLLEtBQUtJLE9BQU8sSUFDdkJDLFFBQVFDLElBQUFBLGlDQUEwQixFQUFDWCxVQUFVTTtnQkFFbkQsSUFBTU0sdUJBQXVCLEVBQUU7Z0JBRS9CSixjQUFjSCxLQUFLUSxjQUFjO2dCQUVqQ0wsWUFBWU0sT0FBTyxDQUFDLFNBQUNDO29CQUNuQixJQUFNQyx5QkFBeUJDLElBQUFBLG1EQUFvQyxFQUFDRixZQUFZZjtvQkFFaEZVLE1BQU1JLE9BQU8sQ0FBQyxTQUFDSTt3QkFDYixJQUFNQyxzQkFBc0JDLG1CQUFtQixDQUFDQyxpQ0FBaUMsQ0FBQ0wsd0JBQXdCRSxNQUFNWDt3QkFFaEgsSUFBSVksd0JBQXdCLE1BQU07NEJBQ2hDUCxxQkFBcUJVLElBQUksQ0FBQ0g7d0JBQzVCO29CQUNGO2dCQUNGO2dCQUVBLElBQU1BLHNCQUFzQkMsbUJBQW1CLENBQUNHLFlBQVksQ0FBQ3ZCLFVBQVVPO2dCQUV2RSxJQUFJWSx3QkFBd0IsTUFBTTtvQkFDaENQLHFCQUFxQlUsSUFBSSxDQUFDSDtnQkFDNUI7Z0JBRUFYLGNBQWNJLHNCQUFzQixHQUFHO2dCQUV2QyxJQUFNWSxPQUFPeEIsVUFDUHlCLFVBQVVwQixLQUFLcUIsVUFBVSxJQUN6QkMsZ0JBQWdCLElBdkNMN0IsY0F1Q3VCMEIsTUFBTUMsU0FBU2pCO2dCQUV2RCxPQUFPbUI7WUFDVDs7O1dBMUNtQjdCO0VBQXNCOEIsa0JBQUkifQ==