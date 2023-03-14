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
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), ruleName = rule.getName(), implicitlyReducedRuleName = (0, _ruleName.implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), implicitlyReducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(implicitlyReducedRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                var parts = [
                    implicitlyReducedRuleNamePart,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGxhY2VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgaGVhZCwgdGFpbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBpc1ByZXNlbnQocnVsZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUmVwbGFjZW1lbnREZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBSZXBsYWNlbWVudERlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9ucy5zb21lKChyZXBsYWNlbWVudERlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uU3RyaW5nID09PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWUgPSBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgIGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGxldCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIGNvbnN0IHByZXNlbnQgPSByZXBsYWNlbWVudERlZmluaXRpb24uaXNQcmVzZW50KHJ1bGUpO1xuXG4gICAgaWYgKHByZXNlbnQpIHtcbiAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSkge1xuICAgIGxldCByZXBsYWNlbWVudERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgbGV0IHBhcnRzID0gW1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgICAgXTtcblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZWR1Y2VkUnVsZShkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlZHVjZWRSdWxlKSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoZGlyZWN0bHlSZWR1Y2VkUnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgICBwYXJ0ID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMsIC8vL1xuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgICAgbGV0IHBhcnRzID0gW1xuICAgICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnRcbiAgICAgIF07XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbmV3IFJlcGxhY2VtZW50RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseVJlcGVhdGVkUnVsZSkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpOyAgLy8vXG5cbiAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzLFxuICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkID0gaGVhZChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICAuLi5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQsXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQsXG4gICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwiaXNQcmVzZW50IiwicnVsZSIsInN0cmluZyIsImFzU3RyaW5nIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJlcGxhY2VtZW50RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInByZXNlbnQiLCJzb21lIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uU3RyaW5nIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInBhcnRzIiwiY2xvbmVQYXJ0cyIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwidGFpbCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImdldFJ1bGVOYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJmaXJzdCIsInBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZ2V0RGVmaW5pdGlvbiIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkIiwiaGVhZCIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzRCQVhhO3FCQUVQO3FCQUNPO29CQUNvQzt3QkFHUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNLEFBQUVDLHNCQUF3QkMsbUJBQUssQ0FBN0JEO0FBRU8sSUFBQSxBQUFNRCxzQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRTtnQkFDZCxJQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUSxJQUN0QkMsY0FBY0gsS0FBS0ksY0FBYyxJQUNqQ0MseUJBQXlCRixZQUFZRyxNQUFNLENBQUMsU0FBQ0MsWUFBZTtvQkFDMUQsSUFBTUMsa0NBQW1DRCxBQUxoQ1gsWUFLZ0NXLFlBTGhDWDtvQkFPVCxJQUFJWSxpQ0FBaUM7d0JBQ25DLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNILElBQ0FDLFVBQVVKLHVCQUF1QkssSUFBSSxDQUFDLFNBQUNDLHVCQUEwQjtvQkFDL0QsSUFBTUMsOEJBQThCRCxzQkFBc0JULFFBQVE7b0JBRWxFLElBQUlVLGdDQUFnQ1gsUUFBUTt3QkFDMUMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRU4sT0FBT1E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLGlDQUFpQyxFQUFFO2dC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