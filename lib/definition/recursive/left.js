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
            key: "fromLeftRecursiveDefinitionAndReducedRuleName",
            value: function fromLeftRecursiveDefinitionAndReducedRuleName(leftRecursiveDefinition, reducedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName);
                var parts = [
                    reducedRuleNamePart
                ].concat(_toConsumableArray(leftRecursiveDefinitionPartsTail));
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition",
            value: function fromRuleNameLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(ruleName, leftRecursiveDefinition, directlyLeftRecursiveDefinition) {
                var parts;
                parts = directlyLeftRecursiveDefinition.getParts();
                var lastPart = last(parts), part = lastPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                parts = leftRecursiveDefinition.getParts();
                parts = _toConsumableArray(parts).concat([
                    zeroOrMorePartsPart
                ]);
                parts = (0, _parts.cloneParts)(parts); ///
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCByZWR1Y2VkUnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGNsb25lUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyB0YWlsLCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZFJ1bGUocmVkdWNlZFJ1bGUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SZXBlYXRlZFJ1bGVOYW1lQW5kUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlcGVhdGVkUnVsZU5hbWUsIHJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydCA9IHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgLi4ucGFydHNUYWlsXG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZWR1Y2VkUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBsYXN0UGFydCA9IGxhc3QocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBsYXN0UGFydCwgIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzLFxuICAgICAgemVyb09yTW9yZVBhcnRzUGFydFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZnJvbVJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUmVwZWF0ZWRSdWxlTmFtZUFuZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIiwicGFydHNUYWlsIiwicmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUmVkdWNlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiZ2V0UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdFBhcnQiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsdUJBQXVCOzs7NEJBYnRCLGVBQWU7eUJBQ04sV0FBVzs4REFFViw0QkFBNEI7b0JBRW5CLHNCQUFzQjt3QkFDa0IsMEJBQTBCO3FCQUNsQix1QkFBdUI7MEJBQ0UsNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5SSxJQUFRQyxJQUFJLEdBQVdDLFVBQWMsZUFBQSxDQUE3QkQsSUFBSSxFQUFFRSxJQUFJLEdBQUtELFVBQWMsZUFBQSxDQUF2QkMsSUFBSSxFQUNaLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEFBQUM7QUFFdkIsSUFBQSxBQUFNSix1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCLENBQzlCTSxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQjs7O2tDQUMvREgsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO1FBRTNDLE1BQUtDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQzs7Ozs7WUFHdkRDLEdBQXlC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