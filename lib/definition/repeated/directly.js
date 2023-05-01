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
                var ruleName = rule.getName(), ruleNames = cycle, ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    var parts = partsFromRuleNames(ruleNames);
                    directlyRepeatedDefinition = new DirectlyRepeatedDefinition(parts);
                }
                return directlyRepeatedDefinition;
            }
        }
    ]);
    return DirectlyRepeatedDefinition;
}(_occamparsers.Definition);
function permuteRuleNames(ruleNames) {
    ruleNames = ruleNames.slice();
    ruleNames.reverse();
    var ruleName = ruleNames.pop();
    ruleNames.unshift(ruleName);
    return ruleNames;
}
function partsFromRuleNames(ruleNames) {
    var parts = [];
    ruleNames = permuteRuleNames(ruleNames);
    (0, _ruleNames.forEachRuleNameAndLeftRecursiveRuleName)(ruleNames, function(ruleName, leftRecursiveRuleName) {
        var tempRuleName = leftRecursiveRuleName; ///
        leftRecursiveRuleName = ruleName; ///
        ruleName = tempRuleName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGUocnVsZSwgY3ljbGUpIHtcbiAgICBsZXQgZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZXMgPSBjeWNsZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcGFydHNGcm9tUnVsZU5hbWVzKHJ1bGVOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gbmV3IERpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uKHBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgcnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKCk7XG5cbiAgcnVsZU5hbWVzLnJldmVyc2UoKTtcblxuICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lcy5wb3AoKTtcblxuICBydWxlTmFtZXMudW5zaGlmdChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICBjb25zdCBwYXJ0cyA9IFtdO1xuXG4gIHJ1bGVOYW1lcyA9IHBlcm11dGVSdWxlTmFtZXMocnVsZU5hbWVzKTtcblxuICBmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWVzLCAocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICBydWxlTmFtZSA9IHRlbXBSdWxlTmFtZTsgIC8vL1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBwYXJ0cy5wdXNoKGluZGlyZWN0bHlSZXBlYXRlZFBhcnQpO1xuXG4gICAgcGFydHMucHVzaChkaXJlY3RseVJlcGVhdGVkUGFydCk7XG4gIH0pO1xuXG4gIHBhcnRzLnBvcCgpO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQ7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7ICAvLy9cblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUGFydDtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kQ3ljbGUiLCJydWxlIiwiY3ljbGUiLCJkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInBhcnRzIiwicGFydHNGcm9tUnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsInBlcm11dGVSdWxlTmFtZXMiLCJzbGljZSIsInJldmVyc2UiLCJwb3AiLCJ1bnNoaWZ0IiwiZm9yRWFjaFJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwidGVtcFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmV1Y3JzaXZlUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicHVzaCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydEZyb21QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NEJBTE07eUJBQzZCO29CQUNjO3dCQUMrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSwyQ0FrQmxCLEFBbEJZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ25DLElBQUlDLDZCQUE2QixJQUFJO2dCQUVyQyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyxZQUFZSixPQUNaSyw0QkFBNEJELFVBQVVFLFFBQVEsQ0FBQ0o7Z0JBRXJELElBQUlHLDJCQUEyQjtvQkFDN0IsSUFBTUUsUUFBUUMsbUJBQW1CSjtvQkFFakNILDZCQUE2QixJQVhkSiwyQkFXNkNVO2dCQUM5RCxDQUFDO2dCQUVELE9BQU9OO1lBQ1Q7OztXQWZtQko7RUFBbUNZLHdCQUFVO0FBa0JsRSxTQUFTQyxpQkFBaUJOLFNBQVMsRUFBRTtJQUNuQ0EsWUFBWUEsVUFBVU8sS0FBSztJQUUzQlAsVUFBVVEsT0FBTztJQUVqQixJQUFNVixXQUFXRSxVQUFVUyxHQUFHO0lBRTlCVCxVQUFVVSxPQUFPLENBQUNaO0lBRWxCLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTSSxtQkFBbUJKLFNBQVMsRUFBRTtJQUNyQyxJQUFNRyxRQUFRLEVBQUU7SUFFaEJILFlBQVlNLGlCQUFpQk47SUFFN0JXLElBQUFBLGtEQUF1QyxFQUFDWCxXQUFXLFNBQUNGLFVBQVVjLHVCQUEwQjtRQUN0RixJQUFNQyxlQUFlRCx1QkFBdUIsR0FBRztRQUUvQ0Esd0JBQXdCZCxVQUFVLEdBQUc7UUFFckNBLFdBQVdlLGNBQWUsR0FBRztRQUU3QixJQUFNQyx5QkFBeUJDLDJEQUEyRGpCLFVBQVVjLHdCQUM5RkksdUJBQXVCQyxpQ0FBaUNuQjtRQUU5REssTUFBTWUsSUFBSSxDQUFDSjtRQUVYWCxNQUFNZSxJQUFJLENBQUNGO0lBQ2I7SUFFQWIsTUFBTU0sR0FBRztJQUVULE9BQU9OO0FBQ1Q7QUFFQSxTQUFTYyxpQ0FBaUNuQixRQUFRLEVBQUU7SUFDbEQsSUFBTXFCLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUN0QixXQUNoRXVCLCtCQUErQkMsSUFBQUEsOEJBQXdCLEVBQUNILDJCQUN4REksOENBQThDQyxJQUFBQSxpQ0FBMkIsRUFBQ0gsK0JBQzFFTCx1QkFBdUJPLDZDQUE2QyxHQUFHO0lBRTdFLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTRCwyREFBMkRqQixRQUFRLEVBQUVjLHFCQUFxQixFQUFFO0lBQ25HLElBQU1hLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUM1QixVQUFVYyx3QkFDdEdlLGlDQUFpQ0wsSUFBQUEsOEJBQXdCLEVBQUNHLDZCQUMxRFgseUJBQXlCYSxnQ0FBaUMsR0FBRztJQUVuRSxPQUFPYjtBQUNUIn0=