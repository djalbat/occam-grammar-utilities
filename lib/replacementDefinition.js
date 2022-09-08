"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReplacementDefinition;
    }
});
var _occamParsers = require("occam-parsers");
var _parts = require("./utilities/parts");
var _array = require("./utilities/array");
var _part = require("./utilities/part");
var _ruleName = require("./utilities/ruleName");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
var ReplacementDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ReplacementDefinition, Definition);
    var _super = _createSuper(ReplacementDefinition);
    function ReplacementDefinition() {
        _classCallCheck(this, ReplacementDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ReplacementDefinition, null, [
        {
            key: "fromRuleAndDefinition",
            value: function fromRuleAndDefinition(rule, definition) {
                var ruleName = rule.getName();
                var parts = definition.getParts();
                var firstPart = (0, _array.first)(parts), part = firstPart, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
                parts = [
                    directlyReducedPart,
                    zeroOrMoreDirectlyRepeatedRuleNamePartPart
                ];
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        },
        {
            key: "fromDirectlyLeftRecursiveDefinition",
            value: function fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts(), firstDirectlyLeftRecursiveDefinitionParts = (0, _array.first)(directlyLeftRecursiveDefinitionParts), part = firstDirectlyLeftRecursiveDefinitionParts, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
                var parts = [
                    directlyReducedPart,
                    zeroOrMoreDirectlyRepeatedRuleNamePartPart
                ];
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinition",
            value: function fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), ruleName = rule.getName(), leftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(leftRecursiveRuleName), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                var parts = [
                    leftRecursiveRuleNamePart,
                    indirectlyRepeatedRuleNamePart
                ];
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule",
            value: function fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule) {
                var parts;
                var definition = indirectlyLeftRecursiveDefinition.getDefinition(), directlyRepeatedRuleName = directlyRepeatedRule.getName(), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart); ///
                parts = definition.getParts();
                parts = _toConsumableArray(parts).concat([
                    zeroOrMoreDirectlyRepeatedRuleNamePartsPart
                ]);
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule",
            value: function fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyReducedRuleName = indirectlyReducedRule.getName(), leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = (0, _array.tail)(leftRecursiveDefinitionParts), reducedRuleName = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
                var parts = [
                    reducedRuleNamePart
                ].concat(_toConsumableArray(leftRecursiveDefinitionPartsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule",
            value: function fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName(), leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), leftRecursiveDefinitionPartsTail = (0, _array.tail)(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = (0, _array.head)(indirectlyLeftRecursiveDefinitionParts);
                var parts = _toConsumableArray(indirectlyLeftRecursiveDefinitionPartsHead).concat([
                    indirectlyRepeatedRuleNamePart
                ], _toConsumableArray(leftRecursiveDefinitionPartsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var replacementDefinition = new ReplacementDefinition(parts);
                return replacementDefinition;
            }
        }
    ]);
    return ReplacementDefinition;
}(_occamParsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudERlZmluaXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgZmlyc3QsIGhlYWQsIHRhaWwgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZW1lbnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKClcblxuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0LFxuICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZmlyc3QoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMsIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0LFxuICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpOyAgLy8vXG5cbiAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzLFxuICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsInJ1bGUiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwicGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwiY2xvbmVQYXJ0cyIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGVOYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJnZXREZWZpbml0aW9uIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCIsInRhaWwiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJoZWFkIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBV1FBLHFCQUFxQjs7OzRCQVRSLGVBQWU7cUJBRXRCLG1CQUFtQjtxQkFDWixtQkFBbUI7b0JBQ2lCLGtCQUFrQjt3QkFDNkIsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0ksSUFBTSxBQUFFQyxtQkFBbUIsR0FBS0MsYUFBSyxNQUFBLENBQTdCRCxtQkFBbUIsQUFBVSxBQUFDO0FBRXZCLElBQUEsQUFBTUQscUJBQXFCLGlCQUEzQjtjQUFNQSxxQkFBcUI7OEJBQXJCQSxxQkFBcUI7YUFBckJBLHFCQUFxQjs4QkFBckJBLHFCQUFxQjs7O2lCQUFyQkEscUJBQXFCOztZQUNqQ0csR0FBcUIsRUFBckJBLHVCQUFxQjttQkFBNUIsU0FBT0EscUJBQXFCLENBQUNDLElBQUksRUFBRUMsVUFBVSxFQUFFO2dCQUM3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