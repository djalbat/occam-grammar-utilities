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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first;
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    var _super = _create_super(RewrittenDefinition);
    function RewrittenDefinition() {
        _class_call_check(this, RewrittenDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(RewrittenDefinition, null, [
        {
            key: "fromPath",
            value: function fromPath(path, ruleMap) {
                var parts = partsFromPath(path, ruleMap), rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName, ruleMap) {
                var parts = [], reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName), reducedRule = ruleMap[reducedRuleName] || null;
                if (reducedRule !== null) {
                    var reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName);
                    parts.push(reducedRuleNamePart);
                }
                var directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
                parts.push(directlyRepeatedPart);
                var rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamparsers.Definition);
function partsFromPath(path, ruleMap) {
    path = reversePath(path); ///
    var parts = [], reducedRuleName = reducedRuleNameFromPath(path), reducedRule = ruleMap[reducedRuleName] || null;
    if (reducedRule !== null) {
        var reducedRuleNamePart = reducedRuleNamePartFromPath(path);
        parts.push(reducedRuleNamePart);
    }
    var ruleNames = path.slice(), pathLength = path.length, lastIndex = pathLength - 1;
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
    return parts;
}
function reversePath(path) {
    path = path.slice();
    path.reverse();
    return path;
}
function reducedRuleNameFromPath(path) {
    var ruleNames = path.slice(), firstRuleName = first(ruleNames), ruleName = firstRuleName, reducedRuleName = (0, _ruleName.reducedRuleNameFromRuleName)(ruleName);
    return reducedRuleName;
}
function reducedRuleNamePartFromPath(path) {
    var ruleNames = path.slice(), firstRuleName = first(ruleNames), ruleName = firstRuleName, reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName);
    return reducedRuleNamePart;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBydWxlTWFwKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgsIHJ1bGVNYXApLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApIHtcbiAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKHJlZHVjZWRSdWxlTmFtZVBhcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tUGF0aChwYXRoLCBydWxlTWFwKSB7XG4gIHBhdGggPSByZXZlcnNlUGF0aChwYXRoKTsgLy8vXG5cbiAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKTtcblxuICAgIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG4gIH1cblxuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IHBhdGhMZW5ndGggLSAxO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICAgIGNvbnN0IHRlbXBvcmFyeVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlUGF0aChwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcGF0aC5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aC5zbGljZSgpLCAvLy9cbiAgICAgICAgZmlyc3RSdWxlTmFtZSA9IGZpcnN0KHJ1bGVOYW1lcyksXG4gICAgICAgIHJ1bGVOYW1lID0gZmlyc3RSdWxlTmFtZSwgLy8vXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aC5zbGljZSgpLCAvLy9cbiAgICAgICAgZmlyc3RSdWxlTmFtZSA9IGZpcnN0KHJ1bGVOYW1lcyksXG4gICAgICAgIHJ1bGVOYW1lID0gZmlyc3RSdWxlTmFtZSwgLy8vXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGFydDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQZXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBlcnQ7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0OyAvLy9cblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG4iXSwibmFtZXMiOlsiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tUGF0aCIsInBhdGgiLCJydWxlTWFwIiwicGFydHMiLCJwYXJ0c0Zyb21QYXRoIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgiLCJydWxlTmFtZXMiLCJzbGljZSIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRleCIsInRlbXBvcmFyeVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXZlcnNlIiwiZmlyc3RSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBlcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzRCQVRNO3lCQUNJO3lCQUV5QjtvQkFD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