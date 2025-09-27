"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedDefinition;
    }
});
var _occamparsers = require("occam-parsers");
var _cycle = require("../../utilities/cycle");
var _path = require("../../utilities/path");
var _ruleNames = require("../../utilities/ruleNames");
var _part = require("../../utilities/part");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyRepeatedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DirectlyRepeatedDefinition, Definition);
    function DirectlyRepeatedDefinition() {
        _class_call_check(this, DirectlyRepeatedDefinition);
        return _call_super(this, DirectlyRepeatedDefinition, arguments);
    }
    _create_class(DirectlyRepeatedDefinition, null, [
        {
            key: "fromRuleAndCycle",
            value: function fromRuleAndCycle(rule, cycle) {
                var directlyRepeatedDefinition = null;
                var ruleName = rule.getName(), ruleNames = (0, _cycle.ruleNamesFromCycle)(cycle), ruleNameIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNameIncludesRuleName) {
                    var path = (0, _path.pathFromRuleNameAndCycle)(ruleName, cycle), parts = partsFromPath(path), precedence = null;
                    directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts, precedence);
                }
                return directlyRepeatedDefinition;
            }
        }
    ]);
    return DirectlyRepeatedDefinition;
}(_occamparsers.Definition);
function permutePath(path) {
    var permutedPath = path.slice(); ///
    permutedPath.reverse();
    var ruleName = permutedPath.pop();
    permutedPath.unshift(ruleName);
    return permutedPath;
}
function partsFromPath(path) {
    var permutedPath = permutePath(path), ruleNames = permutedPath, parts = [];
    (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName) {
        var temporaryRuleName = leftRecursiveRuleName; ///
        leftRecursiveRuleName = ruleName; ///
        ruleName = temporaryRuleName; ///
        var indirectlyRepeatedPart = indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName), directlyRepeatedPart = directlyRepeatedPartFromRuleName(ruleName);
        parts.push(indirectlyRepeatedPart);
        parts.push(directlyRepeatedPart);
    });
    parts.pop();
    return parts;
}
function directlyRepeatedPartFromRuleName(ruleName) {
    var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = (0, _part.zeroOrMorePartsPartFromPart)(directlyRepeatedRuleNamePart), directlyRepeatedPart = zeroOrMoreDirectlyRepeatedRuleNamePartsPart; ///
    return directlyRepeatedPart;
}
function indirectlyRepeatedPartFromRuleNameAndLeftReucrsiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), indirectlyRepeatedPart = indirectlyRepeatedRuleNamePart; ///
    return indirectlyRepeatedPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY3ljbGVcIjtcbmltcG9ydCB7IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZShydWxlLCBjeWNsZSkge1xuICAgIGxldCBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21DeWNsZShjeWNsZSksXG4gICAgICAgICAgcnVsZU5hbWVJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTmFtZUluY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSxcbiAgICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgICBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cywgcHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcm11dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGVybXV0ZWRQYXRoID0gcGF0aC5zbGljZSgpOyAgLy8vXG5cbiAgcGVybXV0ZWRQYXRoLnJldmVyc2UoKTtcblxuICBjb25zdCBydWxlTmFtZSA9IHBlcm11dGVkUGF0aC5wb3AoKTtcblxuICBwZXJtdXRlZFBhdGgudW5zaGlmdChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHBlcm11dGVkUGF0aDtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBlcm11dGVkUGF0aCA9IHBlcm11dGVQYXRoKHBhdGgpLFxuICAgICAgICBydWxlTmFtZXMgPSBwZXJtdXRlZFBhdGgsIC8vL1xuICAgICAgICBwYXJ0cyA9IFtdO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgcnVsZU5hbWUgPSB0ZW1wb3JhcnlSdWxlTmFtZTsgIC8vL1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gIH0pO1xuXG4gIHBhcnRzLnBvcCgpO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kQ3ljbGUiLCJydWxlIiwiY3ljbGUiLCJkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZSIsInJ1bGVOYW1lSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicGF0aCIsInBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSIsInBhcnRzIiwicGFydHNGcm9tUGF0aCIsInByZWNlZGVuY2UiLCJEZWZpbml0aW9uIiwicGVybXV0ZVBhdGgiLCJwZXJtdXRlZFBhdGgiLCJzbGljZSIsInJldmVyc2UiLCJwb3AiLCJ1bnNoaWZ0IiwiZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwidGVtcG9yYXJ5UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJwdXNoIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQTTtxQkFDUTtvQkFDTTt5QkFDZTtvQkFDYzt3QkFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRHLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxJQUFJLEVBQUVDLEtBQUs7Z0JBQ2pDLElBQUlDLDZCQUE2QjtnQkFFakMsSUFBTUMsV0FBV0gsS0FBS0ksT0FBTyxJQUN2QkMsWUFBWUMsSUFBQUEseUJBQWtCLEVBQUNMLFFBQy9CTSwyQkFBMkJGLFVBQVVHLFFBQVEsQ0FBQ0w7Z0JBRXBELElBQUlJLDBCQUEwQjtvQkFDNUIsSUFBTUUsT0FBT0MsSUFBQUEsOEJBQXdCLEVBQUNQLFVBQVVGLFFBQzFDVSxRQUFRQyxjQUFjSCxPQUN0QkksYUFBYTtvQkFFbkJYLDZCQUE2QixJQWJkSiwyQkFhNkNhLE9BQU9FO2dCQUNyRTtnQkFFQSxPQUFPWDtZQUNUOzs7V0FqQm1CSjtFQUFtQ2dCLHdCQUFVO0FBb0JsRSxTQUFTQyxZQUFZTixJQUFJO0lBQ3ZCLElBQU1PLGVBQWVQLEtBQUtRLEtBQUssSUFBSyxHQUFHO0lBRXZDRCxhQUFhRSxPQUFPO0lBRXBCLElBQU1mLFdBQVdhLGFBQWFHLEdBQUc7SUFFakNILGFBQWFJLE9BQU8sQ0FBQ2pCO0lBRXJCLE9BQU9hO0FBQ1Q7QUFFQSxTQUFTSixjQUFjSCxJQUFJO0lBQ3pCLElBQU1PLGVBQWVELFlBQVlOLE9BQzNCSixZQUFZVyxjQUNaTCxRQUFRLEVBQUU7SUFFaEJVLElBQUFBLGtEQUF1QyxFQUFDaEIsV0FBVyxTQUFDRixVQUFVbUI7UUFDNUQsSUFBTUMsb0JBQW9CRCx1QkFBdUIsR0FBRztRQUVwREEsd0JBQXdCbkIsVUFBVSxHQUFHO1FBRXJDQSxXQUFXb0IsbUJBQW9CLEdBQUc7UUFFbEMsSUFBTUMseUJBQXlCQywyREFBMkR0QixVQUFVbUIsd0JBQzlGSSx1QkFBdUJDLGlDQUFpQ3hCO1FBRTlEUSxNQUFNaUIsSUFBSSxDQUFDSjtRQUVYYixNQUFNaUIsSUFBSSxDQUFDRjtJQUNiO0lBRUFmLE1BQU1RLEdBQUc7SUFFVCxPQUFPUjtBQUNUO0FBRUEsU0FBU2dCLGlDQUFpQ3hCLFFBQVE7SUFDaEQsSUFBTTBCLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUMzQixXQUNoRTRCLCtCQUErQkMsSUFBQUEsOEJBQXdCLEVBQUNILDJCQUN4REksOENBQThDQyxJQUFBQSxpQ0FBMkIsRUFBQ0gsK0JBQzFFTCx1QkFBdUJPLDZDQUE2QyxHQUFHO0lBRTdFLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTRCwyREFBMkR0QixRQUFRLEVBQUVtQixxQkFBcUI7SUFDakcsSUFBTWEsNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ2pDLFVBQVVtQix3QkFDdEdlLGlDQUFpQ0wsSUFBQUEsOEJBQXdCLEVBQUNHLDZCQUMxRFgseUJBQXlCYSxnQ0FBaUMsR0FBRztJQUVuRSxPQUFPYjtBQUNUIn0=