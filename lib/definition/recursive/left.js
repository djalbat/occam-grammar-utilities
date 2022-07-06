"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return LeftRecursiveDefinition;
    },
    enumerable: true
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
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
                parts = (0, _parts.cloneParts)(parts);
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition",
            value: function fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition(reducedLeftRecursiveDefinition, leftRecursiveDefinition) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedLeftRecursiveDefinitionParts = reducedLeftRecursiveDefinition.getParts();
                var parts = (0, _parts.mergeParts)(reducedLeftRecursiveDefinitionParts, leftRecursiveDefinitionPartsTail), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgbWVyZ2VQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IHRhaWwsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VkUnVsZShyZWR1Y2VkUnVsZSkge1xuICAgIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJlcGVhdGVkUnVsZU5hbWVBbmRSdWxlTmFtZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0ID0gcmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0LFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gICAgICAuLi5wYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocmVkdWNlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IHJlZHVjZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcGFydHMgPSBtZXJnZVBhcnRzKHJlZHVjZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBsYXN0UGFydCA9IGxhc3QocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBsYXN0UGFydCwgIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzLFxuICAgICAgemVyb09yTW9yZVBhcnRzUGFydFxuICAgIF07XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZnJvbVJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUmVwZWF0ZWRSdWxlTmFtZUFuZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIiwicGFydHNUYWlsIiwicmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIiwiZnJvbVJlZHVjZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVkdWNlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwicmVkdWNlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJtZXJnZVBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdFBhcnQiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztlQWVRQSx1QkFBdUI7Ozs7NEJBYnRCLGVBQWU7eUJBQ04sV0FBVztnREFFViw0QkFBNEI7b0JBRXBCLHNCQUFzQjt3QkFDbUIsMEJBQTBCO3FCQUNOLHVCQUF1QjswQkFDViw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlJLElBQVFDLElBQUksR0FBV0MsVUFBYyxlQUFBLENBQTdCRCxJQUFJLEVBQUVFLElBQUksR0FBS0QsVUFBYyxlQUFBLENBQXZCQyxJQUFJLEVBQ1osQUFBRUMsbUJBQW1CLEdBQUtDLGFBQUssTUFBQSxDQUE3QkQsbUJBQW1CLEFBQVUsQUFBQztBQUV2QixJQUFBLEFBQU1KLHVCQUF1QixpQkFBN0I7OzthQUFNQSx1QkFBdUIsQ0FDOUJNLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFB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