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
                    rewrittenDefinition = new RewrittenDefinition(parts);
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
                    ];
                    rewrittenDefinition = new RewrittenDefinition(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoLCBydWxlTWFwKSB7XG4gICAgcGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpOyAvLy9cblxuICAgIGxldCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gW10sXG4gICAgICAgICAgICBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICAgICAgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0aExlbmd0aCAtIDEsXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpO1xuXG4gICAgICBwYXJ0cy5wdXNoKHJlZHVjZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIHBhcnRzLnB1c2goZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgICAgICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZW1wb3JhcnlSdWxlTmFtZTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZVBhcnQgPSByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0XG4gICAgICAgICAgICBdO1xuXG4gICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VQYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoKTtcblxuICBwYXRoLnJldmVyc2UoKTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICBmaXJzdFJ1bGVOYW1lID0gZmlyc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICBmaXJzdFJ1bGVOYW1lID0gZmlyc3QocnVsZU5hbWVzKSxcbiAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQYXJ0O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBlcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lUGVydDtcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21QYXRoIiwicGF0aCIsInJ1bGVNYXAiLCJyZXZlcnNlUGF0aCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlIiwicGFydHMiLCJydWxlTmFtZXMiLCJzbGljZSIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIiwicHVzaCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kZXgiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwidGVtcG9yYXJ5UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJEZWZpbml0aW9uIiwicmV2ZXJzZSIsImZpcnN0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQZXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0QkFU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