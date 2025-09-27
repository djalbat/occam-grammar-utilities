"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RewrittenDefinition;
    }
});
var _occamparsers = require("occam-parsers");
var _ruleNames = require("../utilities/ruleNames");
var _path = require("../utilities/path");
var _part = require("../utilities/part");
var _ruleName = require("../utilities/ruleName");
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
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    function RewrittenDefinition() {
        _class_call_check(this, RewrittenDefinition);
        return _call_super(this, RewrittenDefinition, arguments);
    }
    _create_class(RewrittenDefinition, null, [
        {
            key: "fromPath",
            value: function fromPath(path, ruleMap) {
                var rewrittenDefinition = null;
                var reducedRuleName = (0, _path.reducedRuleNameFromPath)(path), reducedRule = ruleMap[reducedRuleName] || null;
                if (reducedRule !== null) {
                    rewrittenDefinition = rewrittenDefinitionFromPath(path);
                }
                return rewrittenDefinition;
            }
        },
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName, ruleMap) {
                var rewrittenDefinition = null;
                var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
                if (reducedRule !== null) {
                    rewrittenDefinition = rewrittenDefinitionFromRuleName(ruleName);
                }
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamparsers.Definition);
function reversePath(path) {
    var reversedPath = path.slice();
    reversedPath.reverse();
    return reversedPath;
}
function rewrittenDefinitionFromPath(path) {
    var reducedRuleNamePart = (0, _path.reducedRuleNamePartFromPath)(path), reversedPath = reversePath(path), pathLength = path.length, lastIndex = pathLength - 1, ruleNames = reversedPath, parts = []; ///
    parts.push(reducedRuleNamePart);
    (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName, index) {
        if (index !== lastIndex) {
            var directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
            parts.push(directlyRepeatedPart);
            var temporaryRuleName = leftRecursiveRuleName; ///
            leftRecursiveRuleName = ruleName; ///
            ruleName = temporaryRuleName; ///
            var indirectlyRepeatedPart = indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);
            parts.push(indirectlyRepeatedPart);
        }
    });
    var precedence = null, rewrittenDefinition = new RewrittenDefinition(parts, precedence);
    return rewrittenDefinition;
}
function rewrittenDefinitionFromRuleName(ruleName) {
    var reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName), directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName), parts = [
        reducedRuleNamePart,
        directlyRepeatedPart
    ], precedence = null, rewrittenDefinition = new RewrittenDefinition(parts, precedence);
    return rewrittenDefinition;
}
function reducedRuleNamePartFromRuleName(ruleName) {
    var reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRuleNamePert = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
    return reducedRuleNamePert;
}
function directlyRepeatedPartFromRuleName(ruleName) {
    var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = (0, _part.zeroOrMorePartsPartFromPart)(directlyRepeatedRuleNamePart), directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///
    return directlyRepeatedPart;
}
function indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart; ///
    return indirectlyRepeatedPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCwgcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBydWxlTWFwKSB7XG4gICAgbGV0IHJld3JpdHRlbkRlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb25Gcm9tUGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXZlcnNlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJldmVyc2VkUGF0aCA9IHBhdGguc2xpY2UoKTtcblxuICByZXZlcnNlZFBhdGgucmV2ZXJzZSgpO1xuXG4gIHJldHVybiByZXZlcnNlZFBhdGg7XG59XG5cbmZ1bmN0aW9uIHJld3JpdHRlbkRlZmluaXRpb25Gcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZVBhcnQgPSByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgocGF0aCksXG4gICAgICAgIHJldmVyc2VkUGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IHBhdGhMZW5ndGggLSAxLFxuICAgICAgICBydWxlTmFtZXMgPSByZXZlcnNlZFBhdGgsIC8vL1xuICAgICAgICBwYXJ0cyA9IFtdOyAvLy9cblxuICBwYXJ0cy5wdXNoKHJlZHVjZWRSdWxlTmFtZVBhcnQpO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICAgIGNvbnN0IHRlbXBvcmFyeVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIHJld3JpdHRlbkRlZmluaXRpb25Gcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydFxuICAgICAgICBdLFxuICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQZXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBlcnQ7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0OyAvLy9cblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbVBhdGgiLCJwYXRoIiwicnVsZU1hcCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbkZyb21QYXRoIiwiZnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVJ1bGVOYW1lIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicmV2ZXJzZWRQYXRoIiwic2xpY2UiLCJyZXZlcnNlIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJydWxlTmFtZXMiLCJwYXJ0cyIsInB1c2giLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRleCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHJlY2VkZW5jZSIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQZXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQTTt5QkFFNkI7b0JBQ2E7b0JBQ0M7d0JBQzRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuSSxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dD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