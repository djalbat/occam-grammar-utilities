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
var _necessary = require("necessary");
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
var last = _necessary.arrayUtilities.last;
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
                var rewrittenDefinition = _rewritten1.default.fromRuleName(ruleName, ruleMap);
                if (rewrittenDefinition !== null) {
                    var definition = rewrittenDefinition; ///
                    definitions.push(definition);
                }
                var name = ruleName, opacity = rule.getOpacity(), rewrittenRule = new RewrittenRule(name, opacity, definitions);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIjtcblxuaW1wb3J0IHsgcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICBOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUsIHN0YXRlKSB7XG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gUmV3cml0dGVuTm9kZTtcblxuICAgIHJldHVybiBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcGF0aHMgPSBwYXRoc0Zyb21SdWxlTmFtZUFuZEN5Y2xlcyhydWxlTmFtZSwgY3ljbGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApO1xuXG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVBhdGgocGF0aCwgcnVsZU1hcCk7XG5cbiAgICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKTtcblxuICAgIGlmIChyZXdyaXR0ZW5EZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IHJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlblJ1bGUiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsInN0YXRlIiwiTm9uVGVybWluYWxOb2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlQW5kQ3ljbGVzIiwicnVsZSIsImN5Y2xlcyIsInJ1bGVNYXAiLCJydWxlTmFtZXNNYXAiLCJkZWZpbml0aW9ucyIsImdldE5hbWUiLCJwYXRocyIsInBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIiwiZm9yRWFjaCIsInBhdGgiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21QYXRoIiwiZGVmaW5pdGlvbiIsInB1c2giLCJmcm9tUnVsZU5hbWUiLCJuYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7NEJBVkE7eUJBQ1U7Z0VBRUw7aUVBQ007b0JBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxRQUFRLEVBQUVDLEtBQUs7Z0JBQ3pDLElBQU1DLGtCQUFrQkMsa0JBQWE7Z0JBRXJDLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZO2dCQUMxRCxJQUFNQyxjQUFjLEVBQUUsRUFDaEJULFdBQVdLLEtBQUtLLE9BQU8sSUFDdkJDLFFBQVFDLElBQUFBLGdDQUEwQixFQUFDWixVQUFVTSxRQUFRQyxTQUFTQztnQkFFcEVHLE1BQU1FLE9BQU8sQ0FBQyxTQUFDQztvQkFDYixJQUFNQyxzQkFBc0JDLG1CQUFtQixDQUFDQyxRQUFRLENBQUNILE1BQU1QO29CQUUvRCxJQUFJUSx3QkFBd0IsTUFBTTt3QkFDaEMsSUFBTUcsYUFBYUgscUJBQXFCLEdBQUc7d0JBRTNDTixZQUFZVSxJQUFJLENBQUNEO29CQUNuQjtnQkFDRjtnQkFFQSxJQUFNSCxzQkFBc0JDLG1CQUFtQixDQUFDSSxZQUFZLENBQUNwQixVQUFVTztnQkFFdkUsSUFBSVEsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1HLGFBQWFILHFCQUFxQixHQUFHO29CQUUzQ04sWUFBWVUsSUFBSSxDQUFDRDtnQkFDbkI7Z0JBRUEsSUFBTUcsT0FBT3JCLFVBQ1BzQixVQUFVakIsS0FBS2tCLFVBQVUsSUFDekJDLGdCQUFnQixJQWhDTDVCLGNBZ0N1QnlCLE1BQU1DLFNBQVNiO2dCQUV2RCxPQUFPZTtZQUNUOzs7V0FuQ21CNUI7RUFBc0I2QixrQkFBSSJ9