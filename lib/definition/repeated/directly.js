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
var _path = require("../../utilities/path");
var _part = require("../../utilities/part");
var _ruleNames = require("../../utilities/ruleNames");
var _ruleName = require("../../utilities/ruleName");
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
var DirectlyRepeatedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DirectlyRepeatedDefinition, Definition);
    var _super = _create_super(DirectlyRepeatedDefinition);
    function DirectlyRepeatedDefinition() {
        _class_call_check(this, DirectlyRepeatedDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(DirectlyRepeatedDefinition, null, [
        {
            key: "fromRuleAndCycle",
            value: function fromRuleAndCycle(rule, cycle) {
                var directlyRepeatedDefinition = null;
                var ruleName = rule.getName(), ruleNames = (0, _ruleNames.ruleNamesFromCycle)(cycle), ruleNameIncludesRuleName = ruleNames.includes(ruleName);
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
    path = path.slice();
    path.reverse();
    var ruleName = path.pop();
    path.unshift(ruleName);
    return path;
}
function partsFromPath(path) {
    var parts = [];
    path = permutePath(path);
    var ruleNames = path.slice(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSwgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlKHJ1bGUsIGN5Y2xlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZUluY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZShydWxlTmFtZSwgY3ljbGUpLFxuICAgICAgICAgICAgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgpLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gbmV3IERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVybXV0ZVBhdGgocGF0aCkge1xuICBwYXRoID0gcGF0aC5zbGljZSgpO1xuXG4gIHBhdGgucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcGF0aC5wb3AoKTtcblxuICBwYXRoLnVuc2hpZnQocnVsZU5hbWUpO1xuXG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgcGFydHMgPSBbXTtcblxuICBwYXRoID0gcGVybXV0ZVBhdGgocGF0aCk7XG5cbiAgY29uc3QgcnVsZU5hbWVzID0gcGF0aC5zbGljZSgpOyAvLy9cblxuICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBvcmFyeVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgIHJ1bGVOYW1lID0gdGVtcG9yYXJ5UnVsZU5hbWU7ICAvLy9cblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcGFydHMucHVzaChpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcblxuICAgIHBhcnRzLnB1c2goZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuICB9KTtcblxuICBwYXJ0cy5wb3AoKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0OyAvLy9cblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQ7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iLCJmcm9tUnVsZUFuZEN5Y2xlIiwicnVsZSIsImN5Y2xlIiwiZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGUiLCJydWxlTmFtZUluY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInBhdGgiLCJwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUiLCJwYXJ0cyIsInBhcnRzRnJvbVBhdGgiLCJwcmVjZWRlbmNlIiwiRGVmaW5pdGlvbiIsInBlcm11dGVQYXRoIiwic2xpY2UiLCJyZXZlcnNlIiwicG9wIiwidW5zaGlmdCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInRlbXBvcmFyeVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicHVzaCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NEJBTk07b0JBQ2M7b0JBQzZCO3lCQUNNO3dCQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSwyQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLO2dCQUNqQyxJQUFJQyw2QkFBNkI7Z0JBRWpDLElBQU1DLFdBQVdILEtBQUtJLE9BQU8sSUFDdkJDLFlBQVlDLElBQUFBLDZCQUFrQixFQUFDTCxRQUMvQk0sMkJBQTJCRixVQUFVRyxRQUFRLENBQUNMO2dCQUVwRCxJQUFJSSwwQkFBMEI7b0JBQzVCLElBQU1FLE9BQU9DLElBQUFBLDhCQUF3QixFQUFDUCxVQUFVRixRQUMxQ1UsUUFBUUMsY0FBY0gsT0FDdEJJLGFBQWE7b0JBRW5CWCw2QkFBNkIsSUFiZEosMkJBYTZDYSxPQUFPRTtnQkFDckU7Z0JBRUEsT0FBT1g7WUFDVDs7O1dBakJtQko7RUFBbUNnQix3QkFBVTtBQW9CbEUsU0FBU0MsWUFBWU4sSUFBSTtJQUN2QkEsT0FBT0EsS0FBS08sS0FBSztJQUVqQlAsS0FBS1EsT0FBTztJQUVaLElBQU1kLFdBQVdNLEtBQUtTLEdBQUc7SUFFekJULEtBQUtVLE9BQU8sQ0FBQ2hCO0lBRWIsT0FBT007QUFDVDtBQUVBLFNBQVNHLGNBQWNILElBQUk7SUFDekIsSUFBTUUsUUFBUSxFQUFFO0lBRWhCRixPQUFPTSxZQUFZTjtJQUVuQixJQUFNSixZQUFZSSxLQUFLTyxLQUFLLElBQUksR0FBRztJQUVuQ0ksSUFBQUEsa0RBQXVDLEVBQUNmLFdBQVcsU0FBQ0YsVUFBVWtCO1FBQzVELElBQU1DLG9CQUFvQkQsdUJBQXVCLEdBQUc7UUFFcERBLHdCQUF3QmxCLFVBQVUsR0FBRztRQUVyQ0EsV0FBV21CLG1CQUFvQixHQUFHO1FBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEckIsVUFBVWtCLHdCQUM5RkksdUJBQXVCQyxpQ0FBaUN2QjtRQUU5RFEsTUFBTWdCLElBQUksQ0FBQ0o7UUFFWFosTUFBTWdCLElBQUksQ0FBQ0Y7SUFDYjtJQUVBZCxNQUFNTyxHQUFHO0lBRVQsT0FBT1A7QUFDVDtBQUVBLFNBQVNlLGlDQUFpQ3ZCLFFBQVE7SUFDaEQsSUFBTXlCLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUMxQixXQUNoRTJCLCtCQUErQkMsSUFBQUEsOEJBQXdCLEVBQUNILDJCQUN4REksOENBQThDQyxJQUFBQSxpQ0FBMkIsRUFBQ0gsK0JBQzFFTCx1QkFBdUJPLDZDQUE2QyxHQUFHO0lBRTdFLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTRCwyREFBMkRyQixRQUFRLEVBQUVrQixxQkFBcUI7SUFDakcsSUFBTWEsNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ2hDLFVBQVVrQix3QkFDdEdlLGlDQUFpQ0wsSUFBQUEsOEJBQXdCLEVBQUNHLDZCQUMxRFgseUJBQXlCYSxnQ0FBaUMsR0FBRztJQUVuRSxPQUFPYjtBQUNUIn0=