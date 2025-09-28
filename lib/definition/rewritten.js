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
        if (index < lastIndex) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoLCByZWR1Y2VkUnVsZU5hbWVQYXJ0RnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVBhdGgocGF0aCwgcnVsZU1hcCkge1xuICAgIGxldCByZXdyaXR0ZW5EZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcnVsZU1hcFtyZWR1Y2VkUnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAocmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdHRlbkRlZmluaXRpb24gPSByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJld3JpdHRlbkRlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2ZXJzZVBhdGgocGF0aCkge1xuICBjb25zdCByZXZlcnNlZFBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcmV2ZXJzZWRQYXRoLnJldmVyc2UoKTtcblxuICByZXR1cm4gcmV2ZXJzZWRQYXRoO1xufVxuXG5mdW5jdGlvbiByZXdyaXR0ZW5EZWZpbml0aW9uRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcmVkdWNlZFJ1bGVOYW1lUGFydEZyb21QYXRoKHBhdGgpLFxuICAgICAgICByZXZlcnNlZFBhdGggPSByZXZlcnNlUGF0aChwYXRoKSxcbiAgICAgICAgcnVsZU5hbWVzID0gcmV2ZXJzZWRQYXRoLCAvLy9cbiAgICAgICAgcnVsZU5hbWVzTGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gcnVsZU5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydHMgPSBbXTsgLy8vXG5cbiAgcGFydHMucHVzaChyZWR1Y2VkUnVsZU5hbWVQYXJ0KTtcblxuICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcblxuICAgICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gdGVtcG9yYXJ5UnVsZU5hbWU7ICAvLy9cblxuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIHBhcnRzLnB1c2goaW5kaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAocnVsZU5hbWVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RSdWxlTmFtZSA9IGZpcnN0KHJ1bGVOYW1lcyksXG4gICAgICAgICAgcnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gIH1cblxuICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IG5ldyBSZXdyaXR0ZW5EZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuIl0sIm5hbWVzIjpbIlJld3JpdHRlbkRlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbVBhdGgiLCJwYXRoIiwicnVsZU1hcCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUGF0aCIsInJlZHVjZWRSdWxlIiwicmV3cml0dGVuRGVmaW5pdGlvbkZyb21QYXRoIiwiRGVmaW5pdGlvbiIsInJldmVyc2VQYXRoIiwicmV2ZXJzZWRQYXRoIiwic2xpY2UiLCJyZXZlcnNlIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJlZHVjZWRSdWxlTmFtZVBhcnRGcm9tUGF0aCIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsInBhcnRzIiwicHVzaCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kZXgiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwidGVtcG9yYXJ5UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozs0QkFWTTt5QkFDSTt5QkFFeUI7b0JBQ2E7b0JBQ0M7d0JBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUMzQixJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLGtCQUFrQkMsSUFBQUEsNkJBQXVCLEVBQUNKLE9BQzFDSyxjQUFjSixPQUFPLENBQUNFLGdCQUFnQixJQUFJO2dCQUVoRCxJQUFJRSxnQkFBZ0IsTUFBTTtvQkFDeEJILHNCQUFzQkksNEJBQTRCTjtnQkFDcEQ7Z0JBRUEsT0FBT0U7WUFDVDs7O1dBWm1CTjtFQUE0Qlcsd0JBQVU7QUFlM0QsU0FBU0MsWUFBWVIsSUFBSTtJQUN2QixJQUFNUyxlQUFlVCxLQUFLVSxLQUFLO0lBRS9CRCxhQUFhRSxPQUFPO0lBRXBCLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTSCw0QkFBNEJOLElBQUk7SUFDdkMsSUFBTVksc0JBQXNCQyxJQUFBQSxpQ0FBMkIsRUFBQ2IsT0FDbERTLGVBQWVELFlBQVlSLE9BQzNCYyxZQUFZTCxjQUNaTSxrQkFBa0JELFVBQVVFLE1BQU0sRUFDbENDLFlBQVlGLGtCQUFrQixHQUM5QkcsUUFBUSxFQUFFLEVBQUUsR0FBRztJQUVyQkEsTUFBTUMsSUFBSSxDQUFDUDtJQUVYUSxJQUFBQSxrREFBdUMsRUFBQ04sV0FBVyxTQUFDTyxVQUFVQyx1QkFBdUJDO1FBQ25GLElBQUlBLFFBQVFOLFdBQVc7WUFDckIsSUFBTU8sdUJBQXVCQyxpQ0FBaUNKO1lBRTlESCxNQUFNQyxJQUFJLENBQUNLO1lBRVgsSUFBTUUsb0JBQW9CSix1QkFBdUIsR0FBRztZQUVwREEsd0JBQXdCRCxVQUFVLEdBQUc7WUFFckNBLFdBQVdLLG1CQUFvQixHQUFHO1lBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEUCxVQUFVQztZQUVwR0osTUFBTUMsSUFBSSxDQUFDUTtRQUNiO0lBQ0Y7SUFFQSxJQUFJWixvQkFBb0IsR0FBRztRQUN6QixJQUFNYyxnQkFBZ0JoQyxNQUFNaUIsWUFDdEJPLFdBQVdRLGVBQ1hMLHVCQUF1QkMsaUNBQWlDSjtRQUU5REgsTUFBTUMsSUFBSSxDQUFDSztJQUNiO0lBRUEsSUFBTU0sYUFBYSxNQUNiNUIsc0JBQXNCLElBQUlOLG9CQUFvQnNCLE9BQU9ZO0lBRTNELE9BQU81QjtBQUNUO0FBRUEsU0FBU3VCLGlDQUFpQ0osUUFBUTtJQUNoRCxJQUFNVSwyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDWCxXQUNoRVksK0JBQStCQyxJQUFBQSw4QkFBd0IsRUFBQ0gsMkJBQ3hESSw4Q0FBOENDLElBQUFBLGlDQUEyQixFQUFDSCwrQkFDMUVULHVCQUF1QlcsNkNBQTZDLEdBQUc7SUFFN0UsT0FBT1g7QUFDVDtBQUVBLFNBQVNJLDJEQUEyRFAsUUFBUSxFQUFFQyxxQkFBcUI7SUFDakcsSUFBTWUsNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ2pCLFVBQVVDLHdCQUN0R2lCLGlDQUFpQ0wsSUFBQUEsOEJBQXdCLEVBQUNHLDZCQUMxRFYseUJBQXlCWSxnQ0FBaUMsR0FBRztJQUVuRSxPQUFPWjtBQUNUIn0=