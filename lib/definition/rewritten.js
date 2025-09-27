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
                var rewrittenDefinition = null;
                var reducedRuleName = (0, _path.reducedRuleNameFromPath)(path), reducedRule = ruleMap[reducedRuleName] || null;
                if (reducedRule !== null) {
                    rewrittenDefinition = rewrittenDefinitionFromPath(path);
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
    var reducedRuleNamePart = (0, _path.reducedRuleNamePartFromPath)(path), reversedPath = reversePath(path), ruleNames = reversedPath, ruleNamesLength = ruleNames.length, lastIndex = ruleNamesLength - 1, parts = []; ///
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
    if (ruleNamesLength === 1) {
        var firstRuleName = first(ruleNames), ruleName = firstRuleName, directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
        parts.push(directlyRepeatedPart);
    }
    var precedence = null, rewrittenDefinition = new RewrittenDefinition(parts, precedence);
    return rewrittenDefinition;
}
function directlyRepeatedPartFromRuleName(ruleName) {
    var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = (0, _part.zeroOrMorePartsPartFromPart)(directlyRepeatedRuleNamePart), directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///
    return directlyRepeatedPart;
}
function indirectlyRepeatedPartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart; ///
    return indirectlyRepeatedPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoLCByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcnVsZU1hcCkge1xuICAgIGxldCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2ZXJzZVBhdGgocGF0aCkge1xuICBjb25zdCByZXZlcnNlZFBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcmV2ZXJzZWRQYXRoLnJldmVyc2UoKTtcblxuICByZXR1cm4gcmV2ZXJzZWRQYXRoO1xufVxuXG5mdW5jdGlvbiByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpLFxuICAgICAgICByZXZlcnNlZFBhdGggPSByZXZlcnNlUGF0aChwYXRoKSxcbiAgICAgICAgcnVsZU5hbWVzID0gcmV2ZXJzZWRQYXRoLCAvLy9cbiAgICAgICAgcnVsZU5hbWVzTGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gcnVsZU5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydHMgPSBbXTsgLy8vXG5cbiAgcGFydHMucHVzaChyZWR1Y2VkUnVsZU5hbWVQYXJ0KTtcblxuICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgIHBhcnRzLnB1c2goZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgICBjb25zdCB0ZW1wb3JhcnlSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgcnVsZU5hbWUgPSB0ZW1wb3JhcnlSdWxlTmFtZTsgIC8vL1xuXG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMucHVzaChpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChydWxlTmFtZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFJ1bGVOYW1lID0gZmlyc3QocnVsZU5hbWVzKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGZpcnN0UnVsZU5hbWUsXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcbiAgfVxuXG4gIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gIHJldHVybiByZXdyaXR0ZW5EZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG4iXSwibmFtZXMiOlsiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tUGF0aCIsInBhdGgiLCJydWxlTWFwIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21QYXRoIiwicmVkdWNlZFJ1bGUiLCJyZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVBhdGgiLCJEZWZpbml0aW9uIiwicmV2ZXJzZVBhdGgiLCJyZXZlcnNlZFBhdGgiLCJzbGljZSIsInJldmVyc2UiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwicGFydHMiLCJwdXNoIiwiZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRleCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RSdWxlTmFtZSIsInByZWNlZGVuY2UiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZNO3lCQUNJO3lCQUV5QjtvQkFDYTtvQkFDQzt3QkFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJILElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTUMsa0JBQWtCQyxJQUFBQSw2QkFBdUIsRUFBQ0osT0FDMUNLLGNBQWNKLE9BQU8sQ0FBQ0UsZ0JBQWdCLElBQUk7Z0JBRWhELElBQUlFLGdCQUFnQixNQUFNO29CQUN4Qkgsc0JBQXNCSSw0QkFBNEJOO2dCQUNwRDtnQkFFQSxPQUFPRTtZQUNUOzs7V0FabUJOO0VBQTRCVyx3QkFBVTtBQWUzRCxTQUFTQyxZQUFZUixJQUFJO0lBQ3ZCLElBQU1TLGVBQWVULEtBQUtVLEtBQUs7SUFFL0JELGFBQWFFLE9BQU87SUFFcEIsT0FBT0Y7QUFDVDtBQUVBLFNBQVNILDRCQUE0Qk4sSUFBSTtJQUN2QyxJQUFNWSxzQkFBc0JDLElBQUFBLGlDQUEyQixFQUFDYixPQUNsRFMsZUFBZUQsWUFBWVIsT0FDM0JjLFlBQVlMLGNBQ1pNLGtCQUFrQkQsVUFBVUUsTUFBTSxFQUNsQ0MsWUFBWUYsa0JBQWtCLEdBQzlCRyxRQUFRLEVBQUUsRUFBRSxHQUFHO0lBRXJCQSxNQUFNQyxJQUFJLENBQUNQO0lBRVhRLElBQUFBLGtEQUF1QyxFQUFDTixXQUFXLFNBQUNPLFVBQVVDLHVCQUF1QkM7UUFDbkYsSUFBSUEsVUFBVU4sV0FBVztZQUN2QixJQUFNTyx1QkFBdUJDLGlDQUFpQ0o7WUFFOURILE1BQU1DLElBQUksQ0FBQ0s7WUFFWCxJQUFNRSxvQkFBb0JKLHVCQUF1QixHQUFHO1lBRXBEQSx3QkFBd0JELFVBQVUsR0FBRztZQUVyQ0EsV0FBV0ssbUJBQW9CLEdBQUc7WUFFbEMsSUFBTUMseUJBQXlCQywyREFBMkRQLFVBQVVDO1lBRXBHSixNQUFNQyxJQUFJLENBQUNRO1FBQ2I7SUFDRjtJQUVBLElBQUlaLG9CQUFvQixHQUFHO1FBQ3pCLElBQU1jLGdCQUFnQmhDLE1BQU1pQixZQUN0Qk8sV0FBV1EsZUFDWEwsdUJBQXVCQyxpQ0FBaUNKO1FBRTlESCxNQUFNQyxJQUFJLENBQUNLO0lBQ2I7SUFFQSxJQUFNTSxhQUFhLE1BQ2I1QixzQkFBc0IsSUFBSU4sb0JBQW9Cc0IsT0FBT1k7SUFFM0QsT0FBTzVCO0FBQ1Q7QUFFQSxTQUFTdUIsaUNBQWlDSixRQUFRO0lBQ2hELElBQU1VLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUNYLFdBQ2hFWSwrQkFBK0JDLElBQUFBLDhCQUF3QixFQUFDSCwyQkFDeERJLDhDQUE4Q0MsSUFBQUEsaUNBQTJCLEVBQUNILCtCQUMxRVQsdUJBQXVCVyw2Q0FBNkMsR0FBRztJQUU3RSxPQUFPWDtBQUNUO0FBRUEsU0FBU0ksMkRBQTJEUCxRQUFRLEVBQUVDLHFCQUFxQjtJQUNqRyxJQUFNZSw2QkFBNkJDLElBQUFBLHdFQUE4RCxFQUFDakIsVUFBVUMsd0JBQ3RHaUIsaUNBQWlDTCxJQUFBQSw4QkFBd0IsRUFBQ0csNkJBQzFEVix5QkFBeUJZLGdDQUFpQyxHQUFHO0lBRW5FLE9BQU9aO0FBQ1QifQ==