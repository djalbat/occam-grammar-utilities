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
var _ruleNames = require("../../utilities/ruleNames");
var _part = require("../../utilities/part");
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
                var ruleName = rule.getName(), cycleIncludesRuleName = cycle.includes(ruleName);
                if (cycleIncludesRuleName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZShydWxlLCBjeWNsZSkge1xuICAgIGxldCBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGN5Y2xlSW5jbHVkZXNSdWxlTmFtZSA9IGN5Y2xlLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChjeWNsZUluY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoRnJvbVJ1bGVOYW1lQW5kQ3ljbGUocnVsZU5hbWUsIGN5Y2xlKSxcbiAgICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tUGF0aChwYXRoKTtcblxuICAgICAgZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJtdXRlUGF0aChwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKCk7XG5cbiAgcGF0aC5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBwYXRoLnBvcCgpO1xuXG4gIHBhdGgudW5zaGlmdChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIHBhcnRzRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBwYXJ0cyA9IFtdO1xuXG4gIHBhdGggPSBwZXJtdXRlUGF0aChwYXRoKTtcblxuICBjb25zdCBydWxlTmFtZXMgPSBwYXRoLnNsaWNlKCk7IC8vL1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgdGVtcG9yYXJ5UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgcnVsZU5hbWUgPSB0ZW1wb3JhcnlSdWxlTmFtZTsgIC8vL1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gIH0pO1xuXG4gIHBhcnRzLnBvcCgpO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kQ3ljbGUiLCJydWxlIiwiY3ljbGUiLCJkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImN5Y2xlSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicGF0aCIsInBhdGhGcm9tUnVsZU5hbWVBbmRDeWNsZSIsInBhcnRzIiwicGFydHNGcm9tUGF0aCIsIkRlZmluaXRpb24iLCJwZXJtdXRlUGF0aCIsInNsaWNlIiwicmV2ZXJzZSIsInBvcCIsInVuc2hpZnQiLCJydWxlTmFtZXMiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ0ZW1wb3JhcnlSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFBhcnQiLCJkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzRCQU5NO29CQUNjO3lCQUNlO29CQUNjO3dCQUMrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSwyQ0FrQmxCLEFBbEJZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ25DLElBQUlDLDZCQUE2QixJQUFJO2dCQUVyQyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyx3QkFBd0JKLE1BQU1LLFFBQVEsQ0FBQ0g7Z0JBRTdDLElBQUlFLHVCQUF1QjtvQkFDekIsSUFBTUUsT0FBT0MsSUFBQUEsOEJBQXdCLEVBQUNMLFVBQVVGLFFBQzFDUSxRQUFRQyxjQUFjSDtvQkFFNUJMLDZCQUE2QixJQVhkSiwyQkFXNkNXO2dCQUM5RCxDQUFDO2dCQUVELE9BQU9QO1lBQ1Q7OztXQWZtQko7RUFBbUNhLHdCQUFVO0FBa0JsRSxTQUFTQyxZQUFZTCxJQUFJLEVBQUU7SUFDekJBLE9BQU9BLEtBQUtNLEtBQUs7SUFFakJOLEtBQUtPLE9BQU87SUFFWixJQUFNWCxXQUFXSSxLQUFLUSxHQUFHO0lBRXpCUixLQUFLUyxPQUFPLENBQUNiO0lBRWIsT0FBT0k7QUFDVDtBQUVBLFNBQVNHLGNBQWNILElBQUksRUFBRTtJQUMzQixJQUFNRSxRQUFRLEVBQUU7SUFFaEJGLE9BQU9LLFlBQVlMO0lBRW5CLElBQU1VLFlBQVlWLEtBQUtNLEtBQUssSUFBSSxHQUFHO0lBRW5DSyxJQUFBQSxrREFBdUMsRUFBQ0QsV0FBVyxTQUFDZCxVQUFVZ0IsdUJBQTBCO1FBQ3RGLElBQU1DLG9CQUFvQkQsdUJBQXVCLEdBQUc7UUFFcERBLHdCQUF3QmhCLFVBQVUsR0FBRztRQUVyQ0EsV0FBV2lCLG1CQUFvQixHQUFHO1FBRWxDLElBQU1DLHlCQUF5QkMsMkRBQTJEbkIsVUFBVWdCLHdCQUM5RkksdUJBQXVCQyxpQ0FBaUNyQjtRQUU5RE0sTUFBTWdCLElBQUksQ0FBQ0o7UUFFWFosTUFBTWdCLElBQUksQ0FBQ0Y7SUFDYjtJQUVBZCxNQUFNTSxHQUFHO0lBRVQsT0FBT047QUFDVDtBQUVBLFNBQVNlLGlDQUFpQ3JCLFFBQVEsRUFBRTtJQUNsRCxJQUFNdUIsMkJBQTJCQyxJQUFBQSw4Q0FBb0MsRUFBQ3hCLFdBQ2hFeUIsK0JBQStCQyxJQUFBQSw4QkFBd0IsRUFBQ0gsMkJBQ3hESSw4Q0FBOENDLElBQUFBLGlDQUEyQixFQUFDSCwrQkFDMUVMLHVCQUF1Qk8sNkNBQTZDLEdBQUc7SUFFN0UsT0FBT1A7QUFDVDtBQUVBLFNBQVNELDJEQUEyRG5CLFFBQVEsRUFBRWdCLHFCQUFxQixFQUFFO0lBQ25HLElBQU1hLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUM5QixVQUFVZ0Isd0JBQ3RHZSxpQ0FBaUNMLElBQUFBLDhCQUF3QixFQUFDRyw2QkFDMURYLHlCQUF5QmEsZ0NBQWlDLEdBQUc7SUFFbkUsT0FBT2I7QUFDVCJ9