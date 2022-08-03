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
var _ruleName = require("../../utilities/ruleName");
var _definition = require("../../utilities/definition");
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
var tail = _necessary.arrayUtilities.tail, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
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
                var leftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(leftRecursiveRuleName), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), parts = [
                    leftRecursiveRuleNamePart,
                    indirectlyRepeatedRuleNamePart
                ];
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyB0YWlsIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gWyAvLy9cbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZUFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVjdXJzaXZlUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlY3Vyc2l2ZVJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tRGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsImZyb21JbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZVBhcnQiLCJmcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsImZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZUFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJ6ZXJvT3JNb3JlRGlyZWN0bHlSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydCIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwiLCJjbG9uZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsdUJBQXVCOzs7NEJBYnRCLGVBQWU7eUJBQ04sV0FBVzs4REFFViw0QkFBNEI7b0JBRW5CLHNCQUFzQjtxQkFDMEIsdUJBQXVCO3dCQUNKLDBCQUEwQjswQkFDcEIsNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5SSxJQUFNLEFBQUVDLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEVBQ3pCLEFBQUVFLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEFBQUM7QUFFdkIsSUFBQSxBQUFNSCx1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCLENBQzlCSyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQjs7O2tDQUMvREgsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO1FBRTNDLE1BQUtDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQzs7Ozs7WUFHdkRDLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJB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