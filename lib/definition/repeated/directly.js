"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedDefinition;
    }
});
var _occamparsers = require("occam-parsers");
var _ruleNames = require("../../utilities/ruleNames");
var _cycle = require("../../utilities/cycle");
var _part = require("../../utilities/part");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyRepeatedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DirectlyRepeatedDefinition, Definition);
    function DirectlyRepeatedDefinition() {
        _class_call_check(this, DirectlyRepeatedDefinition);
        return _call_super(this, DirectlyRepeatedDefinition, arguments);
    }
    _create_class(DirectlyRepeatedDefinition, null, [
        {
            key: "fromRuleAndCycle",
            value: function fromRuleAndCycle(rule, cycle) {
                var directlyRepeatedDefinition = null;
                var ruleName = rule.getName(), ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), ruleNameIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNameIncludesRuleName) {
                    var path = (0, _cycle.pathFromRuleNameAndCycle)(ruleName, cycle), parts = partsFromPath(path), precedence = null;
                    directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts, precedence);
                }
                return directlyRepeatedDefinition;
            }
        }
    ]);
    return DirectlyRepeatedDefinition;
}(_occamparsers.Definition);
function permutePath(path) {
    path = path.slice();
    path.reverse();
    var ruleName = path.pop();
    path.unshift(ruleName);
    return path;
}
function partsFromPath(path) {
    var parts = [];
    path = permutePath(path);
    var ruleNames = path.slice(); ///
    (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName) {
        var temporaryRuleName = leftRecursiveRuleName; ///
        leftRecursiveRuleName = ruleName; ///
        ruleName = temporaryRuleName; ///
        var indirectlyRepeatedPart = indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName), directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
        parts.push(indirectlyRepeatedPart);
        parts.push(directlyRepeatedPart);
    });
    parts.pop();
    return parts;
}
function directlyRepeatedPartFromRuleName(ruleName) {
    var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = (0, _part.zeroOrMorePartsPartFromPart)(directlyRepeatedRuleNamePart), directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///
    return directlyRepeatedPart;
}
function indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart; ///
    return indirectlyRepeatedPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGUsIHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZShydWxlLCBjeWNsZSkge1xuICAgIGxldCBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgICAgcnVsZU5hbWVJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZUluY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSxcbiAgICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgICBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcm11dGVQYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoKTtcblxuICBwYXRoLnJldmVyc2UoKTtcblxuICBjb25zdCBydWxlTmFtZSA9IHBhdGgucG9wKCk7XG5cbiAgcGF0aC51bnNoaWZ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgcGF0aCA9IHBlcm11dGVQYXRoKHBhdGgpO1xuXG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGguc2xpY2UoKTsgLy8vXG5cbiAgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCB0ZW1wb3JhcnlSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2goaW5kaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcbiAgfSk7XG5cbiAgcGFydHMucG9wKCk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmRDeWNsZSIsInJ1bGUiLCJjeWNsZSIsImRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwYXRoIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicGFydHMiLCJwYXJ0c0Zyb21QYXRoIiwicHJlY2VkZW5jZSIsIkRlZmluaXRpb24iLCJwZXJtdXRlUGF0aCIsInNsaWNlIiwicmV2ZXJzZSIsInBvcCIsInVuc2hpZnQiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzRCQU5NO3lCQUM2QjtxQkFDSztvQkFDUzt3QkFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRHLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxJQUFJLEVBQUVDLEtBQUs7Z0JBQ2pDLElBQUlDLDZCQUE2QjtnQkFFakMsSUFBTUMsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsWUFBWUMsSUFBQUEseUJBQWtCLEVBQUNMLFFBQy9CTSwyQkFBMkJGLFVBQVVHLFFBQVEsQ0FBQ0w7Z0JBRXBELElBQUlJLDBCQUEwQjtvQkFDNUIsSUFBTUUsT0FBT0MsSUFBQUEsK0JBQXdCLEVBQUNQLFVBQVVGLFFBQzFDVSxRQUFRQyxjQUFjSCxPQUN0QkksYUFBYTtvQkFFbkJYLDZCQUE2QixJQWJkSiwyQkFhNkNhLE9BQU9FO2dCQUNyRTtnQkFFQSxPQUFPWDtZQUNUOzs7V0FqQm1CSjtFQUFtQ2dCLHdCQUFVO0FBb0JsRSxTQUFTQyxZQUFZTixJQUFJO0lBQ3ZCQSxPQUFPQSxLQUFLTyxLQUFLO0lBRWpCUCxLQUFLUSxPQUFPO0lBRVosSUFBTWQsV0FBV00sS0FBS1MsR0FBRztJQUV6QlQsS0FBS1UsT0FBTyxDQUFDaEI7SUFFYixPQUFPTTtBQUNUO0FBRUEsU0FBU0csY0FBY0gsSUFBSTtJQUN6QixJQUFNRSxRQUFRLEVBQUU7SUFFaEJGLE9BQU9NLFlBQVlOO0lBRW5CLElBQU1KLFlBQVlJLEtBQUtPLEtBQUssSUFBSSxHQUFHO0lBRW5DSSxJQUFBQSxrREFBdUMsRUFBQ2YsV0FBVyxTQUFDRixVQUFVa0I7UUFDNUQsSUFBTUMsb0JBQW9CRCx1QkFBdUIsR0FBRztRQUVwREEsd0JBQXdCbEIsVUFBVSxHQUFHO1FBRXJDQSxXQUFXbUIsbUJBQW9CLEdBQUc7UUFFbEMsSUFBTUMseUJBQXlCQywyREFBMkRyQixVQUFVa0Isd0JBQzlGSSx1QkFBdUJDLGlDQUFpQ3ZCO1FBRTlEUSxNQUFNZ0IsSUFBSSxDQUFDSjtRQUVYWixNQUFNZ0IsSUFBSSxDQUFDRjtJQUNiO0lBRUFkLE1BQU1PLEdBQUc7SUFFVCxPQUFPUDtBQUNUO0FBRUEsU0FBU2UsaUNBQWlDdkIsUUFBUTtJQUNoRCxJQUFNeUIsMkJBQTJCQyxJQUFBQSw4Q0FBb0MsRUFBQzFCLFdBQ2hFMkIsK0JBQStCQyxJQUFBQSw4QkFBd0IsRUFBQ0gsMkJBQ3hESSw4Q0FBOENDLElBQUFBLGlDQUEyQixFQUFDSCwrQkFDMUVMLHVCQUF1Qk8sNkNBQTZDLEdBQUc7SUFFN0UsT0FBT1A7QUFDVDtBQUVBLFNBQVNELDJEQUEyRHJCLFFBQVEsRUFBRWtCLHFCQUFxQjtJQUNqRyxJQUFNYSw2QkFBNkJDLElBQUFBLHdFQUE4RCxFQUFDaEMsVUFBVWtCLHdCQUN0R2UsaUNBQWlDTCxJQUFBQSw4QkFBd0IsRUFBQ0csNkJBQzFEWCx5QkFBeUJhLGdDQUFpQyxHQUFHO0lBRW5FLE9BQU9iO0FBQ1QifQ==