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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUGF0aChwYXRoKSB7XG4gICAgY29uc3QgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSBuZXcgUmV3cml0dGVuRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21QYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHJldmVyc2VQYXRoKHBhdGgpOyAvLy9cblxuICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCksIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpO1xuXG4gIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG5cbiAgY29uc3QgcGF0aExlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIGNvbnN0IGxhc3RJbmRleCA9IHBhdGhMZW5ndGggLSAxO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICAgIGNvbnN0IHRlbXBvcmFyeVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlUGF0aChwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcGF0aC5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGguc2xpY2UoKSwgLy8vXG4gICAgICAgIGZpcnN0UnVsZU5hbWUgPSBmaXJzdChydWxlTmFtZXMpLFxuICAgICAgICBydWxlTmFtZSA9IGZpcnN0UnVsZU5hbWUsIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZVBhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGVydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWVQZXJ0O1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbkRlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbVBhdGgiLCJwYXRoIiwicGFydHMiLCJwYXJ0c0Zyb21QYXRoIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicnVsZU5hbWVzIiwic2xpY2UiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGgiLCJwdXNoIiwicGF0aExlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGV4IiwidGVtcG9yYXJ5UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJldmVyc2UiLCJmaXJzdFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGVydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NEJBVE07eUJBQ0k7eUJBRXlCO29CQUNjO3dCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEosSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQXFCbEIsQUFyQlk7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFO2dCQUNwQixJQUFNQyxRQUFRQyxjQUFjRixPQUN0Qkcsc0JBQXNCLElBSFhQLG9CQUdtQ0s7Z0JBRXBELE9BQU9FO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUU7Z0JBQzVCLElBQU1DLHNCQUFzQkMsZ0NBQWdDRixXQUN0REcsdUJBQXVCQyxpQ0FBaUNKLFdBQ3hESixRQUFRO29CQUNOSztvQkFDQUU7aUJBQ0QsRUFDREwsc0JBQXNCLElBZlhQLG9CQWVtQ0s7Z0JBRXBELE9BQU9FO1lBQ1Q7OztXQWxCbUJQO0VBQTRCYyx3QkFBVTtBQXFCM0QsU0FBU1IsY0FBY0YsSUFBSSxFQUFFO0lBQzNCQSxPQUFPVyxZQUFZWCxPQUFPLEdBQUc7SUFFN0IsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZXLFlBQVlaLEtBQUthLEtBQUssSUFDdEJQLHNCQUFzQlEsNEJBQTRCZDtJQUV4REMsTUFBTWMsSUFBSSxDQUFDVDtJQUVYLElBQU1VLGFBQWFoQixLQUFLaUIsTUFBTTtJQUU5QixJQUFNQyxZQUFZRixhQUFhO0lBRS9CRyxJQUFBQSxrREFBdUMsRUFBQ1AsV0FBVyxTQUFDUCxVQUFVZSx1QkFBdUJDLE9BQVU7UUFDN0YsSUFBSUEsVUFBVUgsV0FBVztZQUN2QixJQUFNVix1QkFBdUJDLGlDQUFpQ0o7WUFFOURKLE1BQU1jLElBQUksQ0FBQ1A7WUFFWCxJQUFNYyxvQkFBb0JGLHVCQUF1QixHQUFHO1lBRXBEQSx3QkFBd0JmLFVBQVUsR0FBRztZQUVyQ0EsV0FBV2lCLG1CQUFvQixHQUFHO1lBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEbkIsVUFBVWU7WUFFcEduQixNQUFNYyxJQUFJLENBQUNRO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT3RCO0FBQ1Q7QUFFQSxTQUFTVSxZQUFZWCxJQUFJLEVBQUU7SUFDekJBLE9BQU9BLEtBQUthLEtBQUs7SUFFakJiLEtBQUt5QixPQUFPO0lBRVosT0FBT3pCO0FBQ1Q7QUFFQSxTQUFTYyw0QkFBNEJkLElBQUksRUFBRTtJQUN6QyxJQUFNWSxZQUFZWixLQUFLYSxLQUFLLElBQ3RCYSxnQkFBZ0I3QixNQUFNZSxZQUN0QlAsV0FBV3FCLGVBQ1hwQixzQkFBc0JDLGdDQUFnQ0Y7SUFFNUQsT0FBT0M7QUFDVDtBQUVBLFNBQVNDLGdDQUFnQ0YsUUFBUSxFQUFFO0lBQ2pELElBQU1zQixrQkFBa0JDLElBQUFBLHFDQUEyQixFQUFDdkIsV0FDOUN3QixzQkFBc0JDLElBQUFBLDhCQUF3QixFQUFDSDtJQUVyRCxPQUFPRTtBQUNUO0FBRUEsU0FBU3BCLGlDQUFpQ0osUUFBUSxFQUFFO0lBQ2xELElBQU0wQiwyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDM0IsV0FDaEU0QiwrQkFBK0JILElBQUFBLDhCQUF3QixFQUFDQywyQkFDeERHLDhDQUE4Q0MsSUFBQUEsaUNBQTJCLEVBQUNGLCtCQUMxRXpCLHVCQUF1QjBCLDZDQUE2QyxHQUFHO0lBRTdFLE9BQU8xQjtBQUNUO0FBRUEsU0FBU2dCLDJEQUEyRG5CLFFBQVEsRUFBRWUscUJBQXFCLEVBQUU7SUFDbkcsSUFBTWdCLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUNoQyxVQUFVZSx3QkFDdEdrQixpQ0FBaUNSLElBQUFBLDhCQUF3QixFQUFDTSw2QkFDMURiLHlCQUF5QmUsZ0NBQWlDLEdBQUc7SUFFbkUsT0FBT2Y7QUFDVCJ9