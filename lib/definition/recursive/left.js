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
            key: "fromReducedRule",
            value: function fromReducedRule(reducedRule) {
                var reducedRuleName = reducedRule.getName(), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName), parts = [
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
                var lastPart = last(parts), part = lastPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGNsb25lUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyB0YWlsLCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGUocmVkdWNlZFJ1bGUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlcGVhdGVkUnVsZU5hbWUsIHJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydCA9IHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgLi4ucGFydHNUYWlsXG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUmVkdWNlZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCByZXBlYXRlZFJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0ID0gcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0LCAgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IGxhc3RQYXJ0ID0gbGFzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGxhc3RQYXJ0LCAgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmcm9tUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJwYXJ0c1RhaWwiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQiLCJwYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImNsb25lUGFydHMiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUmVkdWNlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiZ2V0UnVsZU5hbWUiLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3RQYXJ0IiwiUmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLHVCQUF1Qjs7OzRCQWJ0QixlQUFlO3lCQUNOLFdBQVc7OERBRVYsNEJBQTRCO29CQUVuQixzQkFBc0I7d0JBQ2tCLDBCQUEwQjtxQkFDbEIsdUJBQXVCOzBCQUNFLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUksSUFBUUMsSUFBSSxHQUFXQyxVQUFjLGVBQUEsQ0FBN0JELElBQUksRUFBRUUsSUFBSSxHQUFLRCxVQUFjLGVBQUEsQ0FBdkJDLElBQUksRUFDWixBQUFFQyxtQkFBbUIsR0FBS0MsYUFBSyxNQUFBLENBQTdCRCxtQkFBbUIsQUFBVSxBQUFDO0FBRXZCLElBQUEsQUFBTUosdUJBQXVCLGlCQUE3Qjs7O2FBQU1BLHVCQUF1QixDQUM5Qk0sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0I7OztrQ0FDL0RILEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRTtRQUUzQyxNQUFLQyxzQkFBc0IsR0FBR0Esc0JBQXNCLENBQUM7Ozs7O1lBR3ZEQyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUF6QkEsU0FBQUEseUJBQXlCLEdBQUc7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDRCxzQkFBc0IsQ0FBQzthQUNwQzs7OztZQUVNRSxHQUFlLEVBQWZBLGlCQUFlO21CQUF0QixTQUFPQSxlQUFlLENBQUNDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTUMsZUFBZSxHQUFHRCxXQUFXLENBQUNFLE9BQU8sRUFBRSxFQUN2Q0MsbUJBQW1CLEdBQUdDLElBQUFBLEtBQXdCLHlCQUFBLEVBQUNILGVBQWUsQ0FBQyxFQUMvRFAsS0FBSyxHQUFHO29CQUNOUyxtQkFBbUI7aUJBQ3BCLEVBQ0RSLFFBQVEsR0FBR1UsSUFBQUEsU0FBMkIsNEJBQUEsRUFBQ0osZUFBZSxDQUFDLEVBQ3ZETCxrQkFBa0IsR0FBR1UsSUFBQUEsTUFBMkIsNEJBQUEsRUFBQ1osS0FBSyxDQUFDLEVBQ3ZERyxzQkFBc0IsR0FBR1UsSUFBQUEsTUFBK0IsZ0NBQUEsRUFBQ2IsS0FBSyxDQUFDLEVBQy9EYyx1QkFBdUIsR0FBRyxJQUFJcEIsdUJBQXVCLENBQUNNLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLENBQUMsQUFBQztnQkFFekgsT0FBT1csdUJBQXVCLENBQUM7YUFDaEM7OztZQUVNQyxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUEzQixTQUFPQSxvQkFBb0IsQ0FBQ2QsUUFBUSxFQUFFRCxLQUFLLEVBQUU7Z0JBQzNDLElBQU1FLGtCQUFrQixHQUFHVSxJQUFBQSxNQUEyQiw0QkFBQSxFQUFDWixLQUFLLENBQUMsRUFDdkRHLHNCQUFzQixHQUFHVSxJQUFBQSxNQUErQixnQ0FBQSxFQUFDYixLQUFLLENBQUMsRUFDL0RjLHVCQUF1QixHQUFHLElBQUlwQix1QkFBdUIsQ0FBQ00sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUV6SCxPQUFPVyx1QkFBdUIsQ0FBQzthQUNoQzs7O1lBRU1FLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQWhDLFNBQU9BLHlCQUF5QixDQUFDZixRQUFRLEVBQUVnQixVQUFVLEVBQUU7Z0JBQ3JELElBQUlILHVCQUF1QixHQUFHLElBQUksQUFBQztnQkFFbkMsSUFBTUksdUJBQXVCLEdBQUdDLElBQUFBLFdBQXlCLDBCQUFBLEVBQUNGLFVBQVUsQ0FBQyxBQUFDO2dCQUV0RSxJQUFJQyx1QkFBdUIsRUFBRTtvQkFDM0IsSUFBTWxCLEtBQUssR0FBR2lCLFVBQVUsQ0FBQ0csUUFBUSxFQUFFLEVBQzdCbEIsa0JBQWtCLEdBQUdtQixJQUFBQSxXQUFnQyxpQ0FBQSxFQUFDSixVQUFVLENBQUMsRUFDakVkLHNCQUFzQixHQUFHbUIsSUFBQUEsV0FBb0MscUNBQUEsRUFBQ0wsVUFBVSxDQUFDLEFBQUM7b0JBRWhGSCx1QkFBdUIsR0FBRyxJQUFJcEIsdUJBQXVCLENBQUNNLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDcEg7Z0JBRUQsT0FBT1csdUJBQXVCLENBQUM7YUFDaEM7OztZQUVNUyxHQUFzRCxFQUF0REEsd0RBQXNEO21CQUE3RCxTQUFPQSxzREFBc0QsQ0FBQ1QsdUJBQXVCLEVBQUVVLGdCQUFnQixFQUFFdkIsUUFBUSxFQUFFO2dCQUNqSCxJQUFJRCxLQUFLLEFBQUM7Z0JBRVYsSUFBTU8sZUFBZSxHQUFHa0IsSUFBQUEsU0FBbUMsb0NBQUEsRUFBQ0QsZ0JBQWdCLENBQUMsRUFDdkVmLG1CQUFtQixHQUFHQyxJQUFBQSxLQUF3Qix5QkFBQSxFQUFDSCxlQUFlLENBQUMsQUFBQztnQkFFdEVQLEtBQUssR0FBR2MsdUJBQXVCLENBQUNNLFFBQVEsRUFBRSxDQUFDO2dCQUUzQyxJQUFNTSxTQUFTLEdBQUcvQixJQUFJLENBQUNLLEtBQUssQ0FBQyxBQUFDO2dCQUU5QixJQUFNMkIsd0JBQXdCLEdBQUdqQixJQUFBQSxLQUF3Qix5QkFBQSxFQUFDYyxnQkFBZ0IsQ0FBQyxFQUNyRUksSUFBSSxHQUFHRCx3QkFBd0IsRUFDL0JFLG1CQUFtQixHQUFHLElBQUkvQixtQkFBbUIsQ0FBQzhCLElBQUksQ0FBQyxBQUFDO2dCQUUxRDVCLEtBQUssR0FBRztvQkFDTlMsbUJBQW1CO29CQUNuQm9CLG1CQUFtQjtpQkFFcEIsQ0FKTyxNQUlQLENBREMsbUJBQUdILFNBQVMsQ0FBVEEsQ0FDSixDQUFDO2dCQUVGMUIsS0FBSyxHQUFHOEIsSUFBQUEsTUFBVSxXQUFBLEVBQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRS9CLElBQU1FLGtCQUFrQixHQUFHVSxJQUFBQSxNQUEyQiw0QkFBQSxFQUFDWixLQUFLLENBQUMsRUFDdkRHLHNCQUFzQixHQUFHVSxJQUFBQSxNQUErQixnQ0FBQSxFQUFDYixLQUFLLENBQUMsQUFBQztnQkFFdEVjLHVCQUF1QixHQUFHLElBQUlwQix1QkFBdUIsQ0FBQ00sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFFdkgsT0FBT1csdUJBQXVCLENBQUM7YUFDaEM7OztZQUVNaUIsR0FBNkQsRUFBN0RBLCtEQUE2RDttQkFBcEUsU0FBT0EsNkRBQTZELENBQUNqQix1QkFBdUIsRUFBRVUsZ0JBQWdCLEVBQUVqQixlQUFlLEVBQUU7Z0JBQy9ILElBQU15Qiw0QkFBNEIsR0FBR2xCLHVCQUF1QixDQUFDTSxRQUFRLEVBQUUsRUFDakVhLGdDQUFnQyxHQUFHdEMsSUFBSSxDQUFDcUMsNEJBQTRCLENBQUMsRUFDckVMLHdCQUF3QixHQUFHakIsSUFBQUEsS0FBd0IseUJBQUEsRUFBQ2MsZ0JBQWdCLENBQUMsRUFDckVmLG1CQUFtQixHQUFHQyxJQUFBQSxLQUF3Qix5QkFBQSxFQUFDSCxlQUFlLENBQUMsRUFDL0RxQixJQUFJLEdBQUdELHdCQUF3QixFQUMvQkUsbUJBQW1CLEdBQUcsSUFBSS9CLG1CQUFtQixDQUFDOEIsSUFBSSxDQUFDLEFBQUM7Z0JBRTFELElBQUk1QixLQUFLLEdBQUc7b0JBQ1ZTLG1CQUFtQjtvQkFDbkJvQixtQkFBbUI7aUJBRXBCLENBSlcsTUFJWCxDQURDLG1CQUFHSSxnQ0FBZ0MsQ0FBaENBLENBQ0osQUFBQztnQkFFRmpDLEtBQUssR0FBRzhCLElBQUFBLE1BQVUsV0FBQSxFQUFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUUvQixJQUFNQyxRQUFRLEdBQUdhLHVCQUF1QixDQUFDb0IsV0FBVyxFQUFFLEVBQ2hEaEMsa0JBQWtCLEdBQUdVLElBQUFBLE1BQTJCLDRCQUFBLEVBQUNaLEtBQUssQ0FBQyxFQUN2REcsc0JBQXNCLEdBQUdVLElBQUFBLE1BQStCLGdDQUFBLEVBQUNiLEtBQUssQ0FBQyxBQUFDO2dCQUV0RWMsdUJBQXVCLEdBQUcsSUFBSXBCLHVCQUF1QixDQUFDTSxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUV2SCxPQUFPVyx1QkFBdUIsQ0FBQzthQUNoQzs7O1lBRU1xQixHQUE2RCxFQUE3REEsK0RBQTZEO21CQUFwRSxTQUFPQSw2REFBNkQsQ0FBQ3JCLHVCQUF1QixFQUFFc0IsK0JBQStCLEVBQUU7Z0JBQzdILElBQUlwQyxLQUFLLEFBQUM7Z0JBRVZBLEtBQUssR0FBR29DLCtCQUErQixDQUFDaEIsUUFBUSxFQUFFLENBQUM7Z0JBRW5ELElBQU1pQixRQUFRLEdBQUd4QyxJQUFJLENBQUNHLEtBQUssQ0FBQyxFQUN0QjRCLElBQUksR0FBR1MsUUFBUSxFQUNmUixtQkFBbUIsR0FBRyxJQUFJL0IsbUJBQW1CLENBQUM4QixJQUFJLENBQUMsQUFBQztnQkFFMUQ1QixLQUFLLEdBQUdjLHVCQUF1QixDQUFDTSxRQUFRLEVBQUUsQ0FBQztnQkFFM0NwQixLQUFLLEdBQUcsQUFDTixtQkFBR0EsS0FBSyxDQUFMQSxRQURHO29CQUVONkIsbUJBQW1CO2lCQUNwQixDQUFBLENBQUM7Z0JBRUY3QixLQUFLLEdBQUc4QixJQUFBQSxNQUFVLFdBQUEsRUFBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUUsR0FBRztnQkFFL0IsSUFBTUMsUUFBUSxHQUFHbUMsK0JBQStCLENBQUNGLFdBQVcsRUFBRSxFQUN4RGhDLGtCQUFrQixHQUFHVSxJQUFBQSxNQUEyQiw0QkFBQSxFQUFDWixLQUFLLENBQUMsRUFDdkRHLHNCQUFzQixHQUFHVSxJQUFBQSxNQUErQixnQ0FBQSxFQUFDYixLQUFLLENBQUMsQUFBQztnQkFFdEVjLHVCQUF1QixHQUFHLElBQUlwQix1QkFBdUIsQ0FBQ00sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFFdkgsT0FBT1csdUJBQXVCLENBQUM7YUFDaEM7Ozs7Q0FDRixDQWxJb0R3QixVQUFtQixRQUFBLENBa0l2RSJ9