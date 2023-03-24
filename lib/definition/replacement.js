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
                var rule = indirectlyLeftRecursiveDefinition.getRule(), depth = indirectlyLeftRecursiveDefinition.getDepth(), ruleName = rule.getName(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), zeroOrMoreIndirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(indirectlyRepeatedRuleNamePart); ///
                var parts;
                if (depth === 1) {
                    var implicitlyReducedRuleName = (0, _ruleName.implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), implicitlyReducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(implicitlyReducedRuleName);
                    parts = [
                        implicitlyReducedRuleNamePart,
                        zeroOrMoreIndirectlyRepeatedRuleNamePartsPart
                    ];
                } else {
                    var indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = (0, _array.head)(indirectlyLeftRecursiveDefinitionParts);
                    parts = _toConsumableArray(indirectlyLeftRecursiveDefinitionPartsHead).concat([
                        zeroOrMoreIndirectlyRepeatedRuleNamePartsPart
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGxhY2VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgaGVhZCwgdGFpbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLFxuICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VtZW50RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBpc1ByZXNlbnQocnVsZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuYXNTdHJpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUmVwbGFjZW1lbnREZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBSZXBsYWNlbWVudERlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9ucy5zb21lKChyZXBsYWNlbWVudERlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvblN0cmluZyA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnREZWZpbml0aW9uU3RyaW5nID09PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7ICAvLy9cblxuICAgIGxldCBwYXJ0cztcblxuICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgY29uc3QgaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZSA9IGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgcGFydHMgPSBbXG4gICAgICAgIGltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICB6ZXJvT3JNb3JlSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQgPSBoZWFkKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKTtcblxuICAgICAgcGFydHMgPSBbXG4gICAgICAgIC4uLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCxcbiAgICAgICAgemVyb09yTW9yZUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICBdO1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG4gICAgfVxuXG4gICAgbGV0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgY29uc3QgcHJlc2VudCA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbi5pc1ByZXNlbnQocnVsZSk7XG5cbiAgICBpZiAocHJlc2VudCkge1xuICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kaXJlY3RseVJlZHVjZWRSdWxlKSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoaW5kaXJlY3RseVJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgICBsZXQgcGFydHMgPSBbXG4gICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAgIC4uLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsXG4gICAgICBdO1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlZHVjZWRSdWxlKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVkdWNlZFJ1bGUpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGlmIChkaXJlY3RseVJlZHVjZWRSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZmlyc3QoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICAgIHBhcnQgPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cywgLy8vXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0ID0gZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpLFxuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuXG4gICAgICBsZXQgcGFydHMgPSBbXG4gICAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQsXG4gICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydFxuICAgICAgXTtcblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSBuZXcgUmVwbGFjZW1lbnREZWZpbml0aW9uKHBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCk7ICAvLy9cblxuICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQgPSBoZWFkKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKTtcblxuICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgIC4uLmluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCxcbiAgICAgIC4uLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsXG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IG5ldyBSZXBsYWNlbWVudERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBsYWNlbWVudERlZmluaXRpb24iLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJpc1ByZXNlbnQiLCJydWxlIiwic3RyaW5nIiwiYXNTdHJpbmciLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVwbGFjZW1lbnREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uUmVwbGFjZW1lbnREZWZpbml0aW9uIiwicHJlc2VudCIsInNvbWUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb25TdHJpbmciLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UnVsZSIsImRlcHRoIiwiZ2V0RGVwdGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiLCJpbXBsaWNpdGx5UmVkdWNlZFJ1bGVOYW1lIiwiaW1wbGljaXRseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImltcGxpY2l0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCIsImhlYWQiLCJjbG9uZVBhcnRzIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwidGFpbCIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImdldFJ1bGVOYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJmaXJzdCIsInBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlcGVhdGVkUnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZ2V0RGVmaW5pdGlvbiIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFC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