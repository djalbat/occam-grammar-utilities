"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _left = _interopRequireDefault(require("../definition/recursive/left"));
var _class = require("../utilities/class");
var _ruleName = require("../utilities/ruleName");
var _definition = require("../utilities/definition");
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var reducedRule = null;
                var definitions = rule.getDefinitions(), nonLeftRecursiveDefinitions = nonLeftRecursiveDefinitionsFromDefinitions(definitions), nonLeftRecursiveDefinitionsLength = nonLeftRecursiveDefinitions.length;
                if (nonLeftRecursiveDefinitionsLength > 0) {
                    var ruleName = rule.getName(), reducedDefinition = (0, _definition).reducedDefinitionFromRuleName(ruleName), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), definitions1 = nonLeftRecursiveDefinitions, definition1 = reducedDefinition; ///
                    definitions1.forEach(function(definition) {
                        rule.removeDefinition(definition);
                    });
                    rule.addDefinition(definition1);
                    var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, ambiguous, definitions1, NonTerminalNode);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
function nonLeftRecursiveDefinitionsFromDefinitions(definitions) {
    var nonLeftRecursiveDefinitions = [];
    backwardsForEach(definitions, function(definition) {
        var definitionLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _left.default);
        if (!definitionLeftRecursiveDefinition) {
            var nonLeftRecursiveDefinition = definition; ///
            nonLeftRecursiveDefinitions.push(nonLeftRecursiveDefinition);
        }
    });
    return nonLeftRecursiveDefinitions;
}
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbGFzc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgcmVkdWNlZERlZmluaXRpb25Gcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbURlZmluaXRpb25zKGRlZmluaXRpb25zKSxcbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWR1Y2VkRGVmaW5pdGlvbiA9IHJlZHVjZWREZWZpbml0aW9uRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBkZWZpbml0aW9ucyA9IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IHJlZHVjZWREZWZpbml0aW9uOyAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBydWxlLnJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgICB9KTtcblxuICAgICAgcnVsZS5hZGREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb247ICAvLy9cblxuICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnB1c2gobm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJSZWR1Y2VkUnVsZSIsImZyb21SdWxlIiwicnVsZSIsInJlZHVjZWRSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21EZWZpbml0aW9ucyIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWREZWZpbml0aW9uIiwicmVkdWNlZERlZmluaXRpb25Gcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiZm9yRWFjaCIsInJlbW92ZURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwiUnVsZSIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibm9uTGVmdFJl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