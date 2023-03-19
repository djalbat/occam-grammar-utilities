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
                var rule = indirectlyLeftRecursiveDefinition.getRule(), depth = indirectlyLeftRecursiveDefinition.getDepth(), ruleName = rule.getName(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                var parts;
                if (depth === 1) {
                    var implicitlyReducedRuleName = (0, _ruleName.implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), implicitlyReducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(implicitlyReducedRuleName);
                    parts = [
                        implicitlyReducedRuleNamePart,
                        indirectlyRepeatedRuleNamePart
                    ];
                } else {
                    var indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = (0, _array.head)(indirectlyLeftRecursiveDefinitionParts);
                    parts = _toConsumableArray(indirectlyLeftRecursiveDefinitionPartsHead).concat([
                        indirectlyRepeatedRuleNamePart
                    ]);
                    parts = (0, _parts.cloneParts)(parts); ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGxhY2VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgaGVhZCwgdGFpbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBpc1ByZXNlbnQocnVsZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUmVwbGFjZW1lbnREZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBSZXBsYWNlbWVudERlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9ucy5zb21lKChyZXBsYWNlbWVudERlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uU3RyaW5nID09PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgbGV0IHBhcnRzO1xuXG4gICAgaWYgKGRlcHRoID09PSAxKSB7XG4gICAgICBjb25zdCBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cyA9IFtcbiAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgICBwYXJ0cyA9IFtcbiAgICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRcbiAgICAgIF07XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cbiAgICB9XG5cbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICBjb25zdCBwcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9uLmlzUHJlc2VudChydWxlKTtcblxuICAgIGlmIChwcmVzZW50KSB7XG4gICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGlmIChpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICAgIF07XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZWR1Y2VkUnVsZSkge1xuICAgIGxldCByZXBsYWNlbWVudERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVkdWNlZFJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBmaXJzdChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgICAgcGFydCA9IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQgPSBkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCksXG4gICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCxcbiAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0XG4gICAgICBdO1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGUpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTsgIC8vL1xuXG4gICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsImlzUHJlc2VudCIsInJ1bGUiLCJzdHJpbmciLCJhc1N0cmluZyIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25SZXBsYWNlbWVudERlZmluaXRpb24iLCJwcmVzZW50Iiwic29tZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRSdWxlIiwiZGVwdGgiLCJnZXREZXB0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJwYXJ0cyIsImltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImdldFBhcnRzIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkIiwiaGVhZCIsImNsb25lUGFydHMiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwiLCJ0YWlsIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZWR1Y2VkUnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseVJlZHVjZWRSdWxlIiwiZ2V0UnVsZU5hbWUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImZpcnN0IiwicGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJnZXREZWZpbml0aW9uIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7NEJBWGE7cUJBRVA7cUJBQ087b0JBQ29DO3dCQUdTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQU0sQUFBRUMsc0JBQXdCQyxtQkFBSyxDQUE3QkQ7QUFFTyxJQUFB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