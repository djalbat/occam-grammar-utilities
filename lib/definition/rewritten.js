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
var _necessary = require("necessary");
var _ruleNames = require("../utilities/ruleNames");
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
var last = _necessary.arrayUtilities.last, second = _necessary.arrayUtilities.second;
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    function RewrittenDefinition() {
        _class_call_check(this, RewrittenDefinition);
        return _call_super(this, RewrittenDefinition, arguments);
    }
    _create_class(RewrittenDefinition, null, [
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
        },
        {
            key: "fromLeftRecursiveRuleNamesAndPath",
            value: function fromLeftRecursiveRuleNamesAndPath(leftRecursiveRuleNames, path, ruleMap) {
                var rewrittenDefinition = null;
                var leftRecursiveRuleName = leftRecursiveRuleNameFromPath(path), leftRecursiveRuleNamesIncludesLeftRecursiveRuleName = leftRecursiveRuleNames.includes(leftRecursiveRuleName);
                if (leftRecursiveRuleNamesIncludesLeftRecursiveRuleName) {
                    var reducedRuleName = reducedRuleNameFromPath(path), reducedRule = ruleMap[reducedRuleName] || null;
                    if (reducedRule !== null) {
                        rewrittenDefinition = rewrittenDefinitionFromPath(path);
                    }
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
function reducedRuleNameFromPath(path) {
    var ruleNames = path, lastRuleName = last(ruleNames), ruleName = lastRuleName, reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
    return reducedRuleName;
}
function rewrittenDefinitionFromPath(path) {
    var reducedRuleNamePart = reducedRuleNamePartFromPath(path), reversedPath = reversePath(path), pathLength = path.length, lastIndex = pathLength - 1, ruleNames = reversedPath, parts = []; ///
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
function reducedRuleNamePartFromPath(path) {
    var reducedRuleName = reducedRuleNameFromPath(path), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
    return reducedRuleNamePart;
}
function leftRecursiveRuleNameFromPath(path) {
    var ruleNames = path, secondRuleName = second(ruleNames), leftRecursiveRuleName = secondRuleName; ///
    return leftRecursiveRuleName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKSB7XG4gICAgbGV0IHJld3JpdHRlbkRlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbkZyb21SdWxlTmFtZShydWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZXNBbmRQYXRoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIHBhdGgsIHJ1bGVNYXApIHtcbiAgICBsZXQgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbkZyb21QYXRoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VQYXRoKHBhdGgpIHtcbiAgY29uc3QgcmV2ZXJzZWRQYXRoID0gcGF0aC5zbGljZSgpO1xuXG4gIHJldmVyc2VkUGF0aC5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHJldmVyc2VkUGF0aDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLCAvLy9cbiAgICAgICAgbGFzdFJ1bGVOYW1lID0gbGFzdChydWxlTmFtZXMpLFxuICAgICAgICBydWxlTmFtZSA9IGxhc3RSdWxlTmFtZSwgLy8vXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gcmV3cml0dGVuRGVmaW5pdGlvbkZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgcmV2ZXJzZWRQYXRoID0gcmV2ZXJzZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhMZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0aExlbmd0aCAtIDEsXG4gICAgICAgIHJ1bGVOYW1lcyA9IHJldmVyc2VkUGF0aCwgLy8vXG4gICAgICAgIHBhcnRzID0gW107IC8vL1xuXG4gIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG5cbiAgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcblxuICAgICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gdGVtcG9yYXJ5UnVsZU5hbWU7ICAvLy9cblxuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIHBhcnRzLnB1c2goaW5kaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGFydDtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLCAvLy9cbiAgICAgICAgc2Vjb25kUnVsZU5hbWUgPSBzZWNvbmQocnVsZU5hbWVzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gc2Vjb25kUnVsZU5hbWU7IC8vL1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHJld3JpdHRlbkRlZmluaXRpb25Gcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydFxuICAgICAgICBdLFxuICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQZXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBlcnQ7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0OyAvLy9cblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiZnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTWFwIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbkZyb21SdWxlTmFtZSIsImZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWVzQW5kUGF0aCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJwYXRoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVBhdGgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlZHVjZWRSdWxlTmFtZUZyb21QYXRoIiwicmV3cml0dGVuRGVmaW5pdGlvbkZyb21QYXRoIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicmV2ZXJzZWRQYXRoIiwic2xpY2UiLCJyZXZlcnNlIiwicnVsZU5hbWVzIiwibGFzdFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJwYXJ0cyIsInB1c2giLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRleCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHJlY2VkZW5jZSIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInNlY29uZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBlcnQiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzRCQVRNO3lCQUNJO3lCQUV5QjtvQkFDYzt3QkFDNEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxKLElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUMsSUFBQSxBQUFNSCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaSSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVDLE9BQU87Z0JBQ25DLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTUMsa0JBQWtCQyxJQUFBQSxxQ0FBMkIsRUFBQ0osV0FDOUNLLGNBQWNKLE9BQU8sQ0FBQ0UsZ0JBQWdCLElBQUk7Z0JBRWhELElBQUlFLGdCQUFnQixNQUFNO29CQUN4Qkgsc0JBQXNCSSxnQ0FBZ0NOO2dCQUN4RDtnQkFFQSxPQUFPRTtZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDQyxzQkFBc0IsRUFBRUMsSUFBSSxFQUFFUixPQUFPO2dCQUM1RSxJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1RLHdCQUF3QkMsOEJBQThCRixPQUN0REcsc0RBQXNESix1QkFBdUJLLFFBQVEsQ0FBQ0g7Z0JBRTVGLElBQUlFLHFEQUFxRDtvQkFDdkQsSUFBTVQsa0JBQWtCVyx3QkFBd0JMLE9BQzFDSixjQUFjSixPQUFPLENBQUNFLGdCQUFnQixJQUFJO29CQUVoRCxJQUFJRSxnQkFBZ0IsTUFBTTt3QkFDeEJILHNCQUFzQmEsNEJBQTRC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