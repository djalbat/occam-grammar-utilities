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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
            key: "fromLeftRecursiveRuleNameAndRuleName",
            value: function fromLeftRecursiveRuleNameAndRuleName(leftRecursiveRuleName, ruleName) {
                var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleName)(ruleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName), directlyReducedLeftRecursiveRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(leftRecursiveRuleName), directlyRepeatedLeftRecursiveRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(leftRecursiveRuleName), directlyReducedLeftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyReducedLeftRecursiveRuleName), directlyRepeatedLeftRecursiveRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedLeftRecursiveRuleName), zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedLeftRecursiveRuleNamePart), parts = [
                    directlyReducedLeftRecursiveRuleNamePart,
                    zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart,
                    indirectlyRepeatedRuleNamePart
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
                ], ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName",
            value: function fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), reducedRuleName1 = indirectlyReducedRuleName, reducedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(reducedRuleName1);
                var parts = [];
                parts.push(reducedRuleNamePart);
                push(parts, leftRecursiveDefinitionPartsTail);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLFxuICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsXG4gICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyB0YWlsLCBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUpIHtcbiAgICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseVJlZHVjZWRSdWxlTmFtZUFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVjdXJzaXZlUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlY3Vyc2l2ZVJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBsZXQgcGFydHMgPSBbXTtcblxuICAgIHBhcnRzLnB1c2gocmVkdWNlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICBwdXNoKHBhcnRzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwicHVzaCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJmcm9tSW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwiZnJvbUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsImRpcmVjdGx5UmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQiLCJkaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydHNQYXJ0IiwiZnJvbURpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlY3Vyc2l2ZVJ1bGVOYW1lUGFydHNQYXJ0IiwiZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCIsImNsb25lUGFydHMiLCJnZXRSdWxlTmFtZSIsIlJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWtCUUEsdUJBQXVCOzs7NEJBaEJ0QixlQUFlO3lCQUNOLFdBQVc7OERBRVYsNEJBQTRCO29CQUVuQixzQkFBc0I7cUJBQzBCLHVCQUF1QjswQkFDRSw0QkFBNEI7d0JBSXZGLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixJQUFRQyxJQUFJLEdBQVdDLFVBQWMsZUFBQSxDQUE3QkQsSUFBSSxFQUFFRSxJQUFJLEdBQUtELFVBQWMsZUFBQSxDQUF2QkMsSUFBSSxFQUNaLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEFBQUM7QUFFdkIsSUFBQSxBQUFNSix1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCLENBQzlCTSxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQjs7O2tDQUMvREgsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO1FBRTNDLE1BQUtDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQzs7Ozs7WUFHdkRDLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsR0FBRztnQkFDMUIsT0FBTyxJQUFJLENBQUNELHNCQUFz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