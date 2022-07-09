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
var tail = _necessary.arrayUtilities.tail, last = _necessary.arrayUtilities.last, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
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
            key: "fromReducedRuleName",
            value: function fromReducedRuleName(reducedRuleName) {
                var reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
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
            key: "fromLeftRecursiveDefinitionRepeatedRuleNameAndRuleName",
            value: function fromLeftRecursiveDefinitionRepeatedRuleNameAndRuleName(leftRecursiveDefinition, repeatedRuleName, ruleName) {
                var parts;
                var reducedRuleName = (0, _ruleName.reducedRuleNameFromRepeatedRuleName)(repeatedRuleName), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
                parts = leftRecursiveDefinition.getParts();
                var partsTail = tail(parts);
                var repeatedRuleNamePartPart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName), part = repeatedRuleNamePartPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                parts = [
                    reducedRuleNamePart,
                    zeroOrMorePartsPart
                ].concat(_toConsumableArray(partsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionRepeatedRuleNameAndReducedRuleName",
            value: function fromLeftRecursiveDefinitionRepeatedRuleNameAndReducedRuleName(leftRecursiveDefinition, repeatedRuleName, reducedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), repeatedRuleNamePartPart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName), part = repeatedRuleNamePartPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                var parts = [
                    reducedRuleNamePart,
                    zeroOrMorePartsPart
                ].concat(_toConsumableArray(leftRecursiveDefinitionPartsTail));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGNsb25lUGFydHMsIHNpbmdsZVBhcnRGcm9tUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyB0YWlsLCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFBhcnRzKHJ1bGVOYW1lLCBwYXJ0cykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUmVwZWF0ZWRSdWxlTmFtZUFuZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCByZXBlYXRlZFJ1bGVOYW1lLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnQgPSByZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgemVyb09yTW9yZVBhcnRzUGFydCxcbiAgICAgIC4uLnBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUmVwZWF0ZWRSdWxlTmFtZUFuZFJlZHVjZWRSdWxlTmFtZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSwgcmVkdWNlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydCA9IHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCwgIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIGxldCBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IHNpbmdsZVBhcnQsICAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJwYXJ0c1RhaWwiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQiLCJwYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImNsb25lUGFydHMiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUmVkdWNlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiZ2V0UnVsZU5hbWUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInNpbmdsZVBhcnQiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLHVCQUF1Qjs7OzRCQWJ0QixlQUFlO3lCQUNOLFdBQVc7OERBRVYsNEJBQTRCO29CQUVuQixzQkFBc0I7d0JBQ2tCLDBCQUEwQjtxQkFDRyx1QkFBdUI7MEJBQ25CLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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