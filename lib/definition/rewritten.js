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
var first = _necessary.arrayUtilities.first;
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
                path = reversePath(path); ///
                var rewrittenDefinition = null;
                var reducedRuleName = reducedRuleNameFromPath(path), reducedRule = ruleMap[reducedRuleName] || null;
                if (reducedRule !== null) {
                    var parts = [], ruleNames = path.slice(), pathLength = path.length, lastIndex = pathLength - 1, reducedRuleNamePart = reducedRuleNamePartFromPath(path);
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
                    var precedence = null;
                    rewrittenDefinition = new RewrittenDefinition(parts, precedence);
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
                    var reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName), directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName), parts = [
                        reducedRuleNamePart,
                        directlyRepeatedPart
                    ], precedence = null;
                    rewrittenDefinition = new RewrittenDefinition(parts, precedence);
                }
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamparsers.Definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBydWxlTWFwKSB7XG4gICAgcGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpOyAvLy9cblxuICAgIGxldCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gW10sXG4gICAgICAgICAgICBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICAgICAgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0aExlbmd0aCAtIDEsXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBwYXJ0cy5wdXNoKHJlZHVjZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIHBhcnRzLnB1c2goZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgICAgICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZW1wb3JhcnlSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBydWxlTWFwKSB7XG4gICAgbGV0IHJld3JpdHRlbkRlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VQYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoKTtcblxuICBwYXRoLnJldmVyc2UoKTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICBmaXJzdFJ1bGVOYW1lID0gZmlyc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICBmaXJzdFJ1bGVOYW1lID0gZmlyc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQYXJ0O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBlcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGVydDtcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21QYXRoIiwicGF0aCIsInJ1bGVNYXAiLCJyZXZlcnNlUGF0aCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlIiwicGFydHMiLCJydWxlTmFtZXMiLCJzbGljZSIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIiwicHVzaCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kZXgiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwidGVtcG9yYXJ5UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInByZWNlZGVuY2UiLCJmcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiRGVmaW5pdGlvbiIsInJldmVyc2UiLCJmaXJzdFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGVydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NEJBVE07eUJBQ0k7eUJBRXlCO29CQUNjO3dCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEosSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQzNCRCxPQUFPRSxZQUFZRixPQUFPLEdBQUc7Z0JBRTdCLElBQUlHLHNCQUFzQjtnQkFFMUIsSUFBTUMsa0JBQWtCQyx3QkFBd0JMLE9BQzFDTSxjQUFjTCxPQUFPLENBQUNHLGdCQUFnQixJQUFJO2dCQUVoRCxJQUFJRSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLFlBQVlSLEtBQUtTLEtBQUssSUFDdEJDLGFBQWFWLEtBQUtXLE1BQU0sRUFDeEJDLFlBQVlGLGFBQWEsR0FDekJHLHNCQUFzQkMsNEJBQTRCZDtvQkFFeERPLE1BQU1RLElBQUksQ0FBQ0Y7b0JBRVhHLElBQUFBLGtEQUF1QyxFQUFDUixXQUFXLFNBQUNTLFVBQVVDLHVCQUF1QkM7d0JBQ25GLElBQUlBLFVBQVVQLFdBQVc7NEJBQ3ZCLElBQU1RLHVCQUF1QkMsaUNBQWlDSjs0QkFFOURWLE1BQU1RLElBQUksQ0FBQ0s7NEJBRVgsSUFBTUUsb0JBQW9CSix1QkFBdUIsR0FBRzs0QkFFcERBLHdCQUF3QkQsVUFBVSxHQUFHOzRCQUVyQ0EsV0FBV0ssbUJBQW9CLEdBQUc7NEJBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEUCxVQUFVQzs0QkFFcEdYLE1BQU1RLElBQUksQ0FBQ1E7d0JBQ2I7b0JBQ0Y7b0JBRUEsSUFBTUUsYUFBYTtvQkFFbkJ0QixzQkFBc0IsSUF0Q1BQLG9CQXNDK0JXLE9BQU9rQjtnQkFDdkQ7Z0JBRUEsT0FBT3RCO1lBQ1Q7OztZQUVPdUIsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYVQsUUFBUSxFQUFFaEIsT0FBTztnQkFDbkMsSUFBSUUsc0JBQXNCO2dCQUUxQixJQUFNQyxrQkFBa0J1QixJQUFBQSxxQ0FBMkIsRUFBQ1YsV0FDOUNYLGNBQWNMLE9BQU8sQ0FBQ0csZ0JBQWdCLElBQUk7Z0JBRWhELElBQUlFLGdCQUFnQixNQUFNO29CQUN4QixJQUFNTyxzQkFBc0JlLGdDQUFnQ1gsV0FDdERHLHVCQUF1QkMsaUNBQWlDSixXQUN4RFYsUUFBUTt3QkFDTk07d0JBQ0FPO3FCQUNELEVBQ0RLLGFBQWE7b0JBRW5CdEIsc0JBQXNCLElBM0RQUCxvQkEyRCtCVyxPQUFPa0I7Z0JBQ3ZEO2dCQUVBLE9BQU90QjtZQUNUOzs7V0EvRG1CUDtFQUE0QmlDLHdCQUFVO0FBa0UzRCxTQUFTM0IsWUFBWUYsSUFBSTtJQUN2QkEsT0FBT0EsS0FBS1MsS0FBSztJQUVqQlQsS0FBSzhCLE9BQU87SUFFWixPQUFPOUI7QUFDVDtBQUVBLFNBQVNLLHdCQUF3QkwsSUFBSTtJQUNuQyxJQUFNUSxZQUFZUixLQUFLUyxLQUFLLElBQ3RCc0IsZ0JBQWdCbEMsTUFBTVcsWUFDdEJTLFdBQVdjLGVBQ1gzQixrQkFBa0J1QixJQUFBQSxxQ0FBMkIsRUFBQ1Y7SUFFcEQsT0FBT2I7QUFDVDtBQUVBLFNBQVNVLDRCQUE0QmQsSUFBSTtJQUN2QyxJQUFNUSxZQUFZUixLQUFLUyxLQUFLLElBQ3RCc0IsZ0JBQWdCbEMsTUFBTVcsWUFDdEJTLFdBQVdjLGVBQ1hsQixzQkFBc0JlLGdDQUFnQ1g7SUFFNUQsT0FBT0o7QUFDVDtBQUVBLFNBQVNlLGdDQUFnQ1gsUUFBUTtJQUMvQyxJQUFNYixrQkFBa0J1QixJQUFBQSxxQ0FBMkIsRUFBQ1YsV0FDOUNlLHNCQUFzQkMsSUFBQUEsOEJBQXdCLEVBQUM3QjtJQUVyRCxPQUFPNEI7QUFDVDtBQUVBLFNBQVNYLGlDQUFpQ0osUUFBUTtJQUNoRCxJQUFNaUIsMkJBQTJCQyxJQUFBQSw4Q0FBb0MsRUFBQ2xCLFdBQ2hFbUIsK0JBQStCSCxJQUFBQSw4QkFBd0IsRUFBQ0MsMkJBQ3hERyw4Q0FBOENDLElBQUFBLGlDQUEyQixFQUFDRiwrQkFDMUVoQix1QkFBdUJpQiw2Q0FBNkMsR0FBRztJQUU3RSxPQUFPakI7QUFDVDtBQUVBLFNBQVNJLDJEQUEyRFAsUUFBUSxFQUFFQyxxQkFBcUI7SUFDakcsSUFBTXFCLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUN2QixVQUFVQyx3QkFDdEd1QixpQ0FBaUNSLElBQUFBLDhCQUF3QixFQUFDTSw2QkFDMURoQix5QkFBeUJrQixnQ0FBaUMsR0FBRztJQUVuRSxPQUFPbEI7QUFDVCJ9