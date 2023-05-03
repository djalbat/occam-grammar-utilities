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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
                    var ruleNames = ruleNamesFromCycleAndRuleName(cycle, ruleName), parts = partsFromRuleNames(ruleNames);
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
function ruleNamesFromCycleAndRuleName(cycle, ruleName) {
    var ruleNames = cycle, start, end;
    var index = cycle.indexOf(ruleName);
    start = 0;
    end = index;
    var leadingRuleNames = ruleNames.slice(start, end);
    start = index;
    var trailingRuleNames = ruleNames.slice(start);
    ruleNames = _to_consumable_array(trailingRuleNames).concat(_to_consumable_array(leadingRuleNames));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGUocnVsZSwgY3ljbGUpIHtcbiAgICBsZXQgZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBjeWNsZUluY2x1ZGVzUnVsZU5hbWUgPSBjeWNsZS5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAoY3ljbGVJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVBbmRSdWxlTmFtZShjeWNsZSwgcnVsZU5hbWUpLFxuICAgICAgICAgICAgcGFydHMgPSBwYXJ0c0Zyb21SdWxlTmFtZXMocnVsZU5hbWVzKTtcblxuICAgICAgZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBuZXcgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJtdXRlUnVsZU5hbWVzKHJ1bGVOYW1lcykge1xuICBydWxlTmFtZXMgPSBydWxlTmFtZXMuc2xpY2UoKTtcblxuICBydWxlTmFtZXMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzLnBvcCgpO1xuXG4gIHJ1bGVOYW1lcy51bnNoaWZ0KHJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tQ3ljbGVBbmRSdWxlTmFtZShjeWNsZSwgcnVsZU5hbWUpIHtcbiAgbGV0IHJ1bGVOYW1lcyA9IGN5Y2xlLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQ7XG5cbiAgY29uc3QgaW5kZXggPSBjeWNsZS5pbmRleE9mKHJ1bGVOYW1lKTtcblxuICBzdGFydCA9IDA7XG5cbiAgZW5kID0gaW5kZXg7XG5cbiAgY29uc3QgbGVhZGluZ1J1bGVOYW1lcyA9IHJ1bGVOYW1lcy5zbGljZShzdGFydCwgZW5kKTtcblxuICBzdGFydCA9IGluZGV4O1xuXG4gIGNvbnN0IHRyYWlsaW5nUnVsZU5hbWVzID0gcnVsZU5hbWVzLnNsaWNlKHN0YXJ0KTtcblxuICBydWxlTmFtZXMgPSBbIC8vL1xuICAgIC4uLnRyYWlsaW5nUnVsZU5hbWVzLFxuICAgIC4uLmxlYWRpbmdSdWxlTmFtZXNcbiAgXTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21SdWxlTmFtZXMocnVsZU5hbWVzKSB7XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgcnVsZU5hbWVzID0gcGVybXV0ZVJ1bGVOYW1lcyhydWxlTmFtZXMpO1xuXG4gIGZvckVhY2hSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZXMsIChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgdGVtcFJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgIHJ1bGVOYW1lID0gdGVtcFJ1bGVOYW1lOyAgLy8vXG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUGFydCA9IGRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHBhcnRzLnB1c2goaW5kaXJlY3RseVJlcGVhdGVkUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKGRpcmVjdGx5UmVwZWF0ZWRQYXJ0KTtcbiAgfSk7XG5cbiAgcGFydHMucG9wKCk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJldWNyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydDsgIC8vL1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmRDeWNsZSIsInJ1bGUiLCJjeWNsZSIsImRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiY3ljbGVJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVBbmRSdWxlTmFtZSIsInBhcnRzIiwicGFydHNGcm9tUnVsZU5hbWVzIiwiRGVmaW5pdGlvbiIsInBlcm11dGVSdWxlTmFtZXMiLCJzbGljZSIsInJldmVyc2UiLCJwb3AiLCJ1bnNoaWZ0Iiwic3RhcnQiLCJlbmQiLCJpbmRleCIsImluZGV4T2YiLCJsZWFkaW5nUnVsZU5hbWVzIiwidHJhaWxpbmdSdWxlTmFtZXMiLCJmb3JFYWNoUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ0ZW1wUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUGFydEZyb21SdWxlTmFtZUFuZExlZnRSZXVjcnNpdmVSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJwdXNoIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0RnJvbVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0QkFMTTt5QkFDNkI7b0JBQ2M7d0JBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSwyQ0FrQmxCLEFBbEJZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ25DLElBQUlDLDZCQUE2QixJQUFJO2dCQUVyQyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPLElBQ3ZCQyx3QkFBd0JKLE1BQU1LLFFBQVEsQ0FBQ0g7Z0JBRTdDLElBQUlFLHVCQUF1QjtvQkFDekIsSUFBTUUsWUFBWUMsOEJBQThCUCxPQUFPRSxXQUNqRE0sUUFBUUMsbUJBQW1CSDtvQkFFakNMLDZCQUE2QixJQVhkSiwyQkFXNkNXO2dCQUM5RCxDQUFDO2dCQUVELE9BQU9QO1lBQ1Q7OztXQWZtQko7RUFBbUNhLHdCQUFVO0FBa0JsRSxTQUFTQyxpQkFBaUJMLFNBQVMsRUFBRTtJQUNuQ0EsWUFBWUEsVUFBVU0sS0FBSztJQUUzQk4sVUFBVU8sT0FBTztJQUVqQixJQUFNWCxXQUFXSSxVQUFVUSxHQUFHO0lBRTlCUixVQUFVUyxPQUFPLENBQUNiO0lBRWxCLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTQyw4QkFBOEJQLEtBQUssRUFBRUUsUUFBUSxFQUFFO0lBQ3RELElBQUlJLFlBQVlOLE9BQ1pnQixPQUNBQztJQUVKLElBQU1DLFFBQVFsQixNQUFNbUIsT0FBTyxDQUFDakI7SUFFNUJjLFFBQVE7SUFFUkMsTUFBTUM7SUFFTixJQUFNRSxtQkFBbUJkLFVBQVVNLEtBQUssQ0FBQ0ksT0FBT0M7SUFFaERELFFBQVFFO0lBRVIsSUFBTUcsb0JBQW9CZixVQUFVTSxLQUFLLENBQUNJO0lBRTFDVixZQUFZLEFBQ1YscUJBQUdlLDBCQUNILHFCQUFHRDtJQUdMLE9BQU9kO0FBQ1Q7QUFFQSxTQUFTRyxtQkFBbUJILFNBQVMsRUFBRTtJQUNyQyxJQUFNRSxRQUFRLEVBQUU7SUFFaEJGLFlBQVlLLGlCQUFpQkw7SUFFN0JnQixJQUFBQSxrREFBdUMsRUFBQ2hCLFdBQVcsU0FBQ0osVUFBVXFCLHVCQUEwQjtRQUN0RixJQUFNQyxlQUFlRCx1QkFBdUIsR0FBRztRQUUvQ0Esd0JBQXdCckIsVUFBVSxHQUFHO1FBRXJDQSxXQUFXc0IsY0FBZSxHQUFHO1FBRTdCLElBQU1DLHlCQUF5QkMsMkRBQTJEeEIsVUFBVXFCLHdCQUM5RkksdUJBQXVCQyxpQ0FBaUMxQjtRQUU5RE0sTUFBTXFCLElBQUksQ0FBQ0o7UUFFWGpCLE1BQU1xQixJQUFJLENBQUNGO0lBQ2I7SUFFQW5CLE1BQU1NLEdBQUc7SUFFVCxPQUFPTjtBQUNUO0FBRUEsU0FBU29CLGlDQUFpQzFCLFFBQVEsRUFBRTtJQUNsRCxJQUFNNEIsMkJBQTJCQyxJQUFBQSw4Q0FBb0MsRUFBQzdCLFdBQ2hFOEIsK0JBQStCQyxJQUFBQSw4QkFBd0IsRUFBQ0gsMkJBQ3hESSw4Q0FBOENDLElBQUFBLGlDQUEyQixFQUFDSCwrQkFDMUVMLHVCQUF1Qk8sNkNBQTZDLEdBQUc7SUFFN0UsT0FBT1A7QUFDVDtBQUVBLFNBQVNELDJEQUEyRHhCLFFBQVEsRUFBRXFCLHFCQUFxQixFQUFFO0lBQ25HLElBQU1hLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUNuQyxVQUFVcUIsd0JBQ3RHZSxpQ0FBaUNMLElBQUFBLDhCQUF3QixFQUFDRyw2QkFDMURYLHlCQUF5QmEsZ0NBQWlDLEdBQUc7SUFFbkUsT0FBT2I7QUFDVCJ9