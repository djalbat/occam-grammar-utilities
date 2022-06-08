"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _part = require("../../../utilities/part");
var _ruleName = require("../../../utilities/ruleName");
var _types = require("../../../types");
var _definition = require("../../../utilities/definition");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var first = _necessary.arrayUtilities.first, RuleNamePart = _occamParsers.Parts.RuleNamePart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart;
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(DirectlyLeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "isIsolated",
            value: function isIsolated(ruleMap) {
                var ruleName = this.getRuleName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRule = ruleMap[reducedRuleName] || null, isolated = reducedRule === null;
                return isolated;
            }
        },
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var unary = this.isUnary(), complex = this.isComplex(), isolated = this.isIsolated(ruleMap);
                if (unary) {
                    var definitionString = this.asString();
                    throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName2, "' rule is unary and therefore cannot be rewritten."));
                }
                if (complex) {
                    var ruleName = this.getRuleName(), definitionString1 = this.asString();
                    throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                }
                if (isolated) {
                    var ruleName1 = this.getRuleName(), definitionString2 = this.asString();
                    throw new Error("The '".concat(definitionString2, "' directly left recursive definition of the '").concat(ruleName1, "' rule is isolated and therefore cannot be rewritten."));
                }
                var parts = this.getParts();
                parts.shift();
                parts = parts.splice(0); ///
                var ruleName2 = this.getRuleName(), reducedPart = reducedPartFromRuleName(ruleName2), repeatedPart = repeatedPartFromParts(parts);
                this.addPart(reducedPart);
                this.addPart(repeatedPart);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (ruleNameLeftRecursiveRuleName) {
                            var type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_left.default);
function repeatedPartFromParts(parts) {
    var repeatedPart;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = first(parts), part = firstPart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
        repeatedPart = zeroOrMorePartsPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts), zeroOrMoreSequenceOfPartsPart = new ZeroOrMorePartsPart(sequenceOfPartsPart);
        repeatedPart = zeroOrMoreSequenceOfPartsPart; ///
    }
    return repeatedPart;
}
function reducedPartFromRuleName(ruleName) {
    var ruleNamePart = new RuleNamePart(ruleName), part = ruleNamePart, reducedPart = (0, _part).reducedPartFromPart(part);
    return reducedPart;
}
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0XCI7XG5cbmltcG9ydCB7IHJlZHVjZWRQYXJ0RnJvbVBhcnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCwgU2VxdWVuY2VPZlBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGlzSXNvbGF0ZWQocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbCxcbiAgICAgICAgICBpc29sYXRlZCA9IChyZWR1Y2VkUnVsZSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaXNvbGF0ZWQ7XG4gIH1cblxuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCB1bmFyeSA9IHRoaXMuaXNVbmFyeSgpLFxuICAgICAgICAgIGNvbXBsZXggPSB0aGlzLmlzQ29tcGxleCgpLFxuICAgICAgICAgIGlzb2xhdGVkID0gdGhpcy5pc0lzb2xhdGVkKHJ1bGVNYXApO1xuXG4gICAgaWYgKHVuYXJ5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGxleCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGlmIChpc29sYXRlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gdGhpcy5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFydHMgPSB0aGlzLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgcGFydHMgPSBwYXJ0cy5zcGxpY2UoMCk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICB0aGlzLmFkZFBhcnQocmVkdWNlZFBhcnQpO1xuXG4gICAgdGhpcy5hZGRQYXJ0KHJlcGVhdGVkUGFydCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGVhdGVkUGFydEZyb21QYXJ0cyhwYXJ0cykge1xuICBsZXQgcmVwZWF0ZWRQYXJ0O1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICByZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlU2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHNlcXVlbmNlT2ZQYXJ0c1BhcnQpO1xuXG4gICAgcmVwZWF0ZWRQYXJ0ID0gemVyb09yTW9yZVNlcXVlbmNlT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiByZXBlYXRlZFBhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUpLFxuICAgICAgICBwYXJ0ID0gcnVsZU5hbWVQYXJ0LCAgLy8vXG4gICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KTtcblxuICByZXR1cm4gcmVkdWNlZFBhcnQ7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNJc29sYXRlZCIsInJ1bGVNYXAiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGUiLCJpc29sYXRlZCIsInJld3JpdGUiLCJ1bmFyeSIsImlzVW5hcnkiLCJjb21wbGV4IiwiaXNDb21wbGV4IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJzcGxpY2UiLCJyZWR1Y2VkUGFydCIsInJlZHVjZWRQYXJ0RnJvbVJ1bGVOYW1lIiwicmVwZWF0ZWRQYXJ0IiwicmVwZWF0ZWRQYXJ0RnJvbVBhcnRzIiwiYWRkUGFydCIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJzb21lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ0eXBlIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UGFydCIsInBhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInplcm9Pck1vcmVTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicnVsZU5hbWVQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNOLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVOLElBQUEsS0FBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRXBDLElBQUEsS0FBeUIsV0FBekIseUJBQXlCLENBQUE7QUFDakIsSUFBQSxTQUE2QixXQUE3Qiw2QkFBNkIsQ0FBQTtBQUM1QixJQUFBLE1BQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ3FE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