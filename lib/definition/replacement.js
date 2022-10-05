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
var _parts = require("../utilities/parts");
var _array = require("../utilities/array");
var _part = require("../utilities/part");
var _ruleName = require("../utilities/ruleName");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
    _createClass(ReplacementDefinition, [
        {
            key: "isPresent",
            value: function isPresent(rule) {
                var string = this.asString(), definitions = rule.getDefinitions(), replacementDefinitions = definitions.filter(function(definition) {
                    var definitionReplacementDefinition = _instanceof(definition, ReplacementDefinition);
                    if (definitionReplacementDefinition) {
                        return true;
                    }
                }), present = replacementDefinitions.some(function(replacementDefinition) {
                    var replacementDefinitionString = replacementDefinition.asString();
                    if (replacementDefinitionString === string) {
                        return true;
                    }
                });
                return present;
            }
        }
    ], [
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
                var present = replacementDefinition.isPresent(rule);
                if (present) {
                    replacementDefinition = null;
                }
                return replacementDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionAndIndirectlyReducedRule",
            value: function fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule) {
                var replacementDefinition = null;
                if (indirectlyReducedRule !== null) {
                    var indirectlyReducedRuleName = indirectlyReducedRule.getName(), leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = (0, _array.tail)(leftRecursiveDefinitionParts), reducedRuleName = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
                    var parts = [
                        reducedRuleNamePart
                    ].concat(_toConsumableArray(leftRecursiveDefinitionPartsTail));
                    parts = (0, _parts.cloneParts)(parts); ///
                    replacementDefinition = new ReplacementDefinition(parts);
                }
                return replacementDefinition;
            }
        },
        {
            key: "fromDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule",
            value: function fromDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(directlyLeftRecursiveDefinition, directlyReducedRule) {
                var replacementDefinition = null;
                if (directlyReducedRule !== null) {
                    var ruleName = directlyLeftRecursiveDefinition.getRuleName(), directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts(), firstDirectlyLeftRecursiveDefinitionParts = (0, _array.first)(directlyLeftRecursiveDefinitionParts), part = firstDirectlyLeftRecursiveDefinitionParts, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
                    var parts = [
                        directlyReducedPart,
                        zeroOrMoreDirectlyRepeatedRuleNamePartPart
                    ];
                    parts = (0, _parts.cloneParts)(parts); ///
                    replacementDefinition = new ReplacementDefinition(parts);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGxhY2VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgaGVhZCwgdGFpbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlbWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgaXNQcmVzZW50KHJ1bGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmFzU3RyaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgUmVwbGFjZW1lbnREZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25SZXBsYWNlbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlc2VudCA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbnMuc29tZSgocmVwbGFjZW1lbnREZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb25TdHJpbmcgPSByZXBsYWNlbWVudERlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyA9PT0gc3RyaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBjb25zdCBwcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9uLmlzUHJlc2VudChydWxlKTtcblxuICAgIGlmIChwcmVzZW50KSB7XG4gICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICAgIF07XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZWR1Y2VkUnVsZSkge1xuICAgIGxldCByZXBsYWNlbWVudERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBmaXJzdChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgICAgcGFydCA9IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICBdO1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTsgIC8vL1xuXG4gICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsImlzUHJlc2VudCIsInJ1bGUiLCJzdHJpbmciLCJhc1N0cmluZyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25SZXBsYWNlbWVudERlZmluaXRpb24iLCJwcmVzZW50Iiwic29tZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJnZXROYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJwYXJ0cyIsImNsb25lUGFydHMiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZ2V0UGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCIsInRhaWwiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlZHVjZWRSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJnZXRSdWxlTmFtZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZmlyc3QiLCJwYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImdldERlZmluaXRpb24iLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCIsImhlYWQiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0QkFUYTtxQkFFUDtxQkFDTztvQkFDb0M7d0JBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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