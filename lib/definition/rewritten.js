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
var _array = require("../utilities/array");
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
            value: function fromPath(path) {
                var parts = partsFromPath(path), rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        },
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName), directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName), parts = [
                    reducedRuleNamePart,
                    directlyRepeatedPart
                ], rewrittenDefinition = new RewrittenDefinition(parts);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamparsers.Definition);
function partsFromPath(path) {
    path = reversePath(path); ///
    var parts = [], ruleNames = path.slice(), reducedRuleNamePart = reducedRuleNamePartFromPath(path);
    parts.push(reducedRuleNamePart);
    var pathLength = path.length;
    var lastIndex = pathLength - 1;
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
function reducedRuleNamePartFromPath(path) {
    var ruleNames = path.slice(), firstRuleName = (0, _array.first)(ruleNames), ruleName = firstRuleName, reducedRuleNamePart = reducedRuleNamePartFromRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQge1xuICByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSxcbiAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVcbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21QYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpOyAvLy9cblxuICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpO1xuXG4gIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG5cbiAgY29uc3QgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIGNvbnN0IGxhc3RJbmRleCA9IHBhdGhMZW5ndGggLSAxO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICAgIGNvbnN0IHRlbXBvcmFyeVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlUGF0aChwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcGF0aC5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGguc2xpY2UoKSwgLy8vXG4gICAgICAgIGZpcnN0UnVsZU5hbWUgPSBmaXJzdChydWxlTmFtZXMpLFxuICAgICAgICBydWxlTmFtZSA9IGZpcnN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGVydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQZXJ0O1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUGF0aCIsInBhdGgiLCJwYXJ0cyIsInBhcnRzRnJvbVBhdGgiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJEZWZpbml0aW9uIiwicmV2ZXJzZVBhdGgiLCJydWxlTmFtZXMiLCJzbGljZSIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsInB1c2giLCJwYXRoTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kZXgiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmV2ZXJzZSIsImZpcnN0UnVsZU5hbWUiLCJmaXJzdCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBlcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzRCQVhNO3FCQUVMO3lCQUNrQztvQkFDYzt3QkFLL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVEsSUFBQSxBQUFNQSxvQ0FxQmxCLEFBckJZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRTtnQkFDcEIsSUFBTUMsUUFBUUMsY0FBY0YsT0FDdEJHLHNCQUFzQixJQUhYTCxvQkFHbUNHO2dCQUVwRCxPQUFPRTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFO2dCQUM1QixJQUFNQyxzQkFBc0JDLGdDQUFnQ0YsV0FDdERHLHVCQUF1QkMsaUNBQWlDSixXQUN4REosUUFBUTtvQkFDTks7b0JBQ0FFO2lCQUNELEVBQ0RMLHNCQUFzQixJQWZYTCxvQkFlbUNHO2dCQUVwRCxPQUFPRTtZQUNUOzs7V0FsQm1CTDtFQUE0Qlksd0JBQVU7QUFxQjNELFNBQVNSLGNBQWNGLElBQUksRUFBRTtJQUMzQkEsT0FBT1csWUFBWVgsT0FBTyxHQUFHO0lBRTdCLElBQU1DLFFBQVEsRUFBRSxFQUNWVyxZQUFZWixLQUFLYSxLQUFLLElBQ3RCUCxzQkFBc0JRLDRCQUE0QmQ7SUFFeERDLE1BQU1jLElBQUksQ0FBQ1Q7SUFFWCxJQUFNVSxhQUFhaEIsS0FBS2lCLE1BQU07SUFFOUIsSUFBTUMsWUFBWUYsYUFBYTtJQUUvQkcsSUFBQUEsa0RBQXVDLEVBQUNQLFdBQVcsU0FBQ1AsVUFBVWUsdUJBQXVCQyxPQUFVO1FBQzdGLElBQUlBLFVBQVVILFdBQVc7WUFDdkIsSUFBTVYsdUJBQXVCQyxpQ0FBaUNKO1lBRTlESixNQUFNYyxJQUFJLENBQUNQO1lBRVgsSUFBTWMsb0JBQW9CRix1QkFBdUIsR0FBRztZQUVwREEsd0JBQXdCZixVQUFVLEdBQUc7WUFFckNBLFdBQVdpQixtQkFBb0IsR0FBRztZQUVsQyxJQUFNQyx5QkFBeUJDLDJEQUEyRG5CLFVBQVVlO1lBRXBHbkIsTUFBTWMsSUFBSSxDQUFDUTtRQUNiLENBQUM7SUFDSDtJQUVBLE9BQU90QjtBQUNUO0FBRUEsU0FBU1UsWUFBWVgsSUFBSSxFQUFFO0lBQ3pCQSxPQUFPQSxLQUFLYSxLQUFLO0lBRWpCYixLQUFLeUIsT0FBTztJQUVaLE9BQU96QjtBQUNUO0FBRUEsU0FBU2MsNEJBQTRCZCxJQUFJLEVBQUU7SUFDekMsSUFBTVksWUFBWVosS0FBS2EsS0FBSyxJQUN0QmEsZ0JBQWdCQyxJQUFBQSxZQUFLLEVBQUNmLFlBQ3RCUCxXQUFXcUIsZUFDWHBCLHNCQUFzQkMsZ0NBQWdDRjtJQUU1RCxPQUFPQztBQUNUO0FBRUEsU0FBU0MsZ0NBQWdDRixRQUFRLEVBQUU7SUFDakQsSUFBTXVCLGtCQUFrQkMsSUFBQUEscUNBQTJCLEVBQUN4QixXQUM5Q3lCLHNCQUFzQkMsSUFBQUEsOEJBQXdCLEVBQUNIO0lBRXJELE9BQU9FO0FBQ1Q7QUFFQSxTQUFTckIsaUNBQWlDSixRQUFRLEVBQUU7SUFDbEQsSUFBTTJCLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUM1QixXQUNoRTZCLCtCQUErQkgsSUFBQUEsOEJBQXdCLEVBQUNDLDJCQUN4REcsOENBQThDQyxJQUFBQSxpQ0FBMkIsRUFBQ0YsK0JBQzFFMUIsdUJBQXVCMkIsNkNBQTZDLEdBQUc7SUFFN0UsT0FBTzNCO0FBQ1Q7QUFFQSxTQUFTZ0IsMkRBQTJEbkIsUUFBUSxFQUFFZSxxQkFBcUIsRUFBRTtJQUNuRyxJQUFNaUIsNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ2pDLFVBQVVlLHdCQUN0R21CLGlDQUFpQ1IsSUFBQUEsOEJBQXdCLEVBQUNNLDZCQUMxRGQseUJBQXlCZ0IsZ0NBQWlDLEdBQUc7SUFFbkUsT0FBT2hCO0FBQ1QifQ==