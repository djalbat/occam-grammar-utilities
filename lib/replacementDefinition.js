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
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _parts = require("./utilities/parts");
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
var first = _necessary.arrayUtilities.first, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
var ReplacementDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ReplacementDefinition, Definition);
    var _super = _createSuper(ReplacementDefinition);
    function ReplacementDefinition() {
        _classCallCheck(this, ReplacementDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ReplacementDefinition, null, [
        {
            key: "fromDirectlyLeftRecursiveDefinition",
            value: function fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts(), firstDirectlyLeftRecursiveDefinitionParts = first(directlyLeftRecursiveDefinitionParts), part = firstDirectlyLeftRecursiveDefinitionParts, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
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
            key: "fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule",
            value: function fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule) {
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyReducedRuleName = indirectlyReducedRule.getName(), leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedRuleName = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
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
                var leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName(), leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBsYWNlbWVudERlZmluaXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGhlYWQsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZW1lbnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZmlyc3QoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMsIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0LFxuICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlZHVjZWRSdWxlKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkID0gaGVhZChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICAuLi5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQsXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQsXG4gICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImhlYWQiLCJ0YWlsIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImdldFBhcnRzIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJwYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQiLCJwYXJ0cyIsImNsb25lUGFydHMiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZSIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXROYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFZUUEscUJBQXFCOzs7eUJBVlgsV0FBVzs0QkFDUixlQUFlO3FCQUV0QixtQkFBbUI7b0JBQ3dCLGtCQUFrQjt3QkFDNkIsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0ksSUFBUUMsS0FBSyxHQUFpQkMsVUFBYyxlQUFBLENBQXBDRCxLQUFLLEVBQUVFLElBQUksR0FBV0QsVUFBYyxlQUFBLENBQTdCQyxJQUFJLEVBQUVDLElBQUksR0FBS0YsVUFBYyxlQUFBLENBQXZCRSxJQUFJLEVBQ25CLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEFBQUM7QUFFdkIsSUFBQSxBQUFNTCxxQkFBcUIs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