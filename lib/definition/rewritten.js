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
        }
    ]);
    return RewrittenDefinition;
}(_occamparsers.Definition);
function partsFromPath(path) {
    path = reversePath(path); ///
    var parts = [], ruleNames = path.slice(), reducedRuleNamePart = reducedRuleNamePartFromPath(path);
    parts.push(reducedRuleNamePart);
    var pathLength = path.length;
    if (pathLength === 1) {
        var firstRuleName = (0, _array.first)(ruleNames), ruleName = firstRuleName, directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
        parts.push(directlyRepeatedPart);
    } else {
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
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQge1xuICByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSxcbiAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVcbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21QYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpOyAvLy9cblxuICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpO1xuXG4gIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG5cbiAgY29uc3QgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIGlmIChwYXRoTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RSdWxlTmFtZSA9IGZpcnN0KHJ1bGVOYW1lcyksXG4gICAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2goZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHBhdGhMZW5ndGggLSAxO1xuXG4gICAgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcblxuICAgICAgICBjb25zdCB0ZW1wb3JhcnlSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgIHJ1bGVOYW1lID0gdGVtcG9yYXJ5UnVsZU5hbWU7ICAvLy9cblxuICAgICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlUGF0aChwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcGF0aC5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGguc2xpY2UoKSwgLy8vXG4gICAgICAgIGZpcnN0UnVsZU5hbWUgPSBmaXJzdChydWxlTmFtZXMpLFxuICAgICAgICBydWxlTmFtZSA9IGZpcnN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGVydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQZXJ0O1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tUGF0aCIsInBhdGgiLCJwYXJ0cyIsInBhcnRzRnJvbVBhdGgiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicnVsZU5hbWVzIiwic2xpY2UiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIiwicHVzaCIsInBhdGhMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGVOYW1lIiwiZmlyc3QiLCJydWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJsYXN0SW5kZXgiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRleCIsInRlbXBvcmFyeVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXZlcnNlIiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBlcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7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