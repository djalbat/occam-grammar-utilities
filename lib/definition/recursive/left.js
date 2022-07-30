"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LeftRecursiveDefinition;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _recursive = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _definition = require("../../utilities/definition");
var _ruleName = require("../../utilities/ruleName");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var tail = _necessary.arrayUtilities.tail, OptionalPartPart = _occamParsers.Parts.OptionalPartPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    var _super = _createSuper(LeftRecursiveDefinition);
    function LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames);
        _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
        return _this;
    }
    _createClass(LeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleNames",
            value: function getLeftRecursiveRuleNames() {
                return this.leftRecursiveRuleNames;
            }
        }
    ], [
        {
            key: "fromRuleNameAndParts",
            value: function fromRuleNameAndParts(ruleName, parts) {
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var leftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition), leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromDirectlyReducedRuleName",
            value: function fromDirectlyReducedRuleName(directlyReducedRuleName) {
                var directlyReducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyReducedRuleName), parts = [
                    directlyReducedRuleNamePart
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyReducedRuleName",
            value: function fromIndirectlyReducedRuleName(indirectlyReducedRuleName) {
                var reducedRuleName1 = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName1), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName1), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndLeftRecursiveRuleName",
            value: function fromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
                var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), directlyReducedLeftRecursiveRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(leftRecursiveRuleName), directlyRepeatedLeftRecursiveRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(leftRecursiveRuleName), directlyReducedLeftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyReducedLeftRecursiveRuleName), directlyRepeatedLeftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedLeftRecursiveRuleName), optionalIndirectlyRepeatedRuleNamePartPart = new OptionalPartPart(indirectlyRepeatedRuleNamePart), zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedLeftRecursiveRuleNamePart), parts = [
                    directlyReducedLeftRecursiveRuleNamePart,
                    zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart,
                    optionalIndirectlyRepeatedRuleNamePartPart
                ], recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromDirectlyReducedRuleNameAndDirectlyRepeatedRuleName",
            value: function fromDirectlyReducedRuleNameAndDirectlyRepeatedRuleName(directlyReducedRuleName, directlyRepeatedRuleName) {
                var directlyReducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyReducedRuleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRecursiveRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart), parts = [
                    directlyReducedRuleNamePart,
                    zeroOrMoreDirectlyRecursiveRuleNamePartsPart
                ], reducedRuleName1 = directlyReducedRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName1), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName",
            value: function fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedRuleName1 = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName1);
                var parts = [
                    reducedRuleNamePart
                ].concat(_toConsumableArray(leftRecursiveDefinitionPartsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyB0YWlsIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgT3B0aW9uYWxQYXJ0UGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBvcHRpb25hbEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVBbmREaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlY3Vyc2l2ZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsIk9wdGlvbmFsUGFydFBhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmcm9tUnVsZU5hbWVBbmRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwiZnJvbUluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsImZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJvcHRpb25hbEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydCIsImZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZUFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydCIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwiLCJjbG9uZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFrQlFBLHVCQUF1Qjs7OzRCQWhCdEIsZUFBZTt5QkFDTixXQUFXOzhEQUVWLDRCQUE0QjtvQkFFbkIsc0JBQXNCO3FCQUMwQix1QkFBdUI7MEJBQ0UsNEJBQTRCO3dCQUkvRCwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpHLElBQU0sQUFBRUMsSUFBSSxHQUFLQyxVQUFjLGVBQUEsQ0FBdkJELElBQUks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