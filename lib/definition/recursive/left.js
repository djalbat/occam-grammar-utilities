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
var _ruleName = require("../../utilities/ruleName");
var _parts = require("../../utilities/parts");
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
var tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
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
                var reducedRuleName = directlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyReducedRuleName",
            value: function fromIndirectlyReducedRuleName(indirectlyReducedRuleName) {
                var reducedRuleName = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName",
            value: function fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedRuleName = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
                var parts = [];
                parts.push(reducedRuleNamePart);
                push(parts, leftRecursiveDefinitionPartsTail);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition",
            value: function fromLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(leftRecursiveDefinition, directlyLeftRecursiveDefinition) {
                var parts;
                parts = directlyLeftRecursiveDefinition.getParts();
                var partsTail = tail(parts);
                parts = partsTail; ///
                var singlePart = (0, _parts.singlePartFromParts)(parts), part = singlePart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                parts = leftRecursiveDefinition.getParts();
                parts = _toConsumableArray(parts).concat([
                    zeroOrMorePartsPart
                ]);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgc2luZ2xlUGFydEZyb21QYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IHRhaWwsIHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFBhcnRzKHJ1bGVOYW1lLCBwYXJ0cykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIGxldCBwYXJ0cyA9IFtdO1xuXG4gICAgcGFydHMucHVzaChyZWR1Y2VkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHB1c2gocGFydHMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cztcblxuICAgIHBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgY29uc3Qgc2luZ2xlUGFydCA9IHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0LCAgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmcm9tUnVsZU5hbWVBbmRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsImZyb21JbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwiLCJjbG9uZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzVGFpbCIsInNpbmdsZVBhcnQiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsdUJBQXVCOzs7NEJBYnRCLGVBQWU7eUJBQ04sV0FBVzs4REFFViw0QkFBNEI7b0JBRW5CLHNCQUFzQjt3QkFDbkIsMEJBQTBCO3FCQUN3Qyx1QkFBdUI7MEJBQ25CLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUksSUFBUUMsSUFBSSxHQUFXQyxVQUFjLGVBQUEsQ0FBN0JELElBQUksRUFBRUUsSUFBSSxHQUFLRCxVQUFjLGVBQUEsQ0FBdkJDLElBQUksRUFDWixBQUFFQyxtQkFBbUIsR0FBS0MsYUFBSyxNQUFBLENBQTdCRCxtQkFBbUIsQUFBVSxBQUFDO0FBRXZCLElBQUEsQUFBTUosdUJBQXVCLGlCQUE3Qjs7O2FBQU1BLHVCQUF1QixDQUM5Qk0sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0I7OztrQ0FDL0RILEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRTtRQUUzQyxNQUFLQyxzQkFBc0IsR0FBR0Esc0JBQXNCLENBQUM7Ozs7O1lBR3ZEQyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUF6QkEsU0FBQUEseUJBQXlCLEdBQUc7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQzthQUNwQzs7OztZQUVNRSxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUEzQixTQUFPQSxvQkFBb0IsQ0FBQ0osUUFBUSxFQUFFRCxLQUFLLEVBQUU7Z0JBQzNDLElB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