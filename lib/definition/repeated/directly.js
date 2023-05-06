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
                    var path = (0, _path.pathFromRuleNameAndCycle)(ruleName, cycle), parts = partsFromPath(path);
                    directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZSwgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZEN5Y2xlKHJ1bGUsIGN5Y2xlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUN5Y2xlKGN5Y2xlKSxcbiAgICAgICAgICBydWxlTmFtZUluY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZShydWxlTmFtZSwgY3ljbGUpLFxuICAgICAgICAgICAgcGFydHMgPSBwYXJ0c0Zyb21QYXRoKHBhdGgpO1xuXG4gICAgICBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcm11dGVQYXRoKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoKTtcblxuICBwYXRoLnJldmVyc2UoKTtcblxuICBjb25zdCBydWxlTmFtZSA9IHBhdGgucG9wKCk7XG5cbiAgcGF0aC51bnNoaWZ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgcGF0aCA9IHBlcm11dGVQYXRoKHBhdGgpO1xuXG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHBhdGguc2xpY2UoKTsgLy8vXG5cbiAgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lcywgKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCB0ZW1wb3JhcnlSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBydWxlTmFtZSA9IHRlbXBvcmFyeVJ1bGVOYW1lOyAgLy8vXG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2goaW5kaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcbiAgfSk7XG5cbiAgcGFydHMucG9wKCk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmRDeWNsZSIsInJ1bGUiLCJjeWNsZSIsImRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUN5Y2xlIiwicnVsZU5hbWVJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJwYXRoIiwicGF0aEZyb21SdWxlTmFtZUFuZEN5Y2xlIiwicGFydHMiLCJwYXJ0c0Zyb21QYXRoIiwiRGVmaW5pdGlvbiIsInBlcm11dGVQYXRoIiwic2xpY2UiLCJyZXZlcnNlIiwicG9wIiwidW5zaGlmdCIsImZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInRlbXBvcmFyeVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicHVzaCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NEJBTk07b0JBQ2M7b0JBQzZCO3lCQUNNO3dCQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSwyQ0FtQmxCLEFBbkJZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ25DLElBQUlDLDZCQUE2QixJQUFJO2dCQUVyQyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyxZQUFZQyxJQUFBQSw2QkFBa0IsRUFBQ0wsUUFDL0JNLDJCQUEyQkYsVUFBVUcsUUFBUSxDQUFDTDtnQkFFcEQsSUFBSUksMEJBQTBCO29CQUM1QixJQUFNRSxPQUFPQyxJQUFBQSw4QkFBd0IsRUFBQ1AsVUFBVUYsUUFDMUNVLFFBQVFDLGNBQWNIO29CQUU1QlAsNkJBQTZCLElBWmRKLDJCQVk2Q2E7Z0JBQzlELENBQUM7Z0JBRUQsT0FBT1Q7WUFDVDs7O1dBaEJtQko7RUFBbUNlLHdCQUFVO0FBbUJsRSxTQUFTQyxZQUFZTCxJQUFJLEVBQUU7SUFDekJBLE9BQU9BLEtBQUtNLEtBQUs7SUFFakJOLEtBQUtPLE9BQU87SUFFWixJQUFNYixXQUFXTSxLQUFLUSxHQUFHO0lBRXpCUixLQUFLUyxPQUFPLENBQUNmO0lBRWIsT0FBT007QUFDVDtBQUVBLFNBQVNHLGNBQWNILElBQUksRUFBRTtJQUMzQixJQUFNRSxRQUFRLEVBQUU7SUFFaEJGLE9BQU9LLFlBQVlMO0lBRW5CLElBQU1KLFlBQVlJLEtBQUtNLEtBQUssSUFBSSxHQUFHO0lBRW5DSSxJQUFBQSxrREFBdUMsRUFBQ2QsV0FBVyxTQUFDRixVQUFVaUIsdUJBQTBCO1FBQ3RGLElBQU1DLG9CQUFvQkQsdUJBQXVCLEdBQUc7UUFFcERBLHdCQUF3QmpCLFVBQVUsR0FBRztRQUVyQ0EsV0FBV2tCLG1CQUFvQixHQUFHO1FBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEcEIsVUFBVWlCLHdCQUM5RkksdUJBQXVCQyxpQ0FBaUN0QjtRQUU5RFEsTUFBTWUsSUFBSSxDQUFDSjtRQUVYWCxNQUFNZSxJQUFJLENBQUNGO0lBQ2I7SUFFQWIsTUFBTU0sR0FBRztJQUVULE9BQU9OO0FBQ1Q7QUFFQSxTQUFTYyxpQ0FBaUN0QixRQUFRLEVBQUU7SUFDbEQsSUFBTXdCLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUN6QixXQUNoRTBCLCtCQUErQkMsSUFBQUEsOEJBQXdCLEVBQUNILDJCQUN4REksOENBQThDQyxJQUFBQSxpQ0FBMkIsRUFBQ0gsK0JBQzFFTCx1QkFBdUJPLDZDQUE2QyxHQUFHO0lBRTdFLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTRCwyREFBMkRwQixRQUFRLEVBQUVpQixxQkFBcUIsRUFBRTtJQUNuRyxJQUFNYSw2QkFBNkJDLElBQUFBLHdFQUE4RCxFQUFDL0IsVUFBVWlCLHdCQUN0R2UsaUNBQWlDTCxJQUFBQSw4QkFBd0IsRUFBQ0csNkJBQzFEWCx5QkFBeUJhLGdDQUFpQyxHQUFHO0lBRW5FLE9BQU9iO0FBQ1QifQ==