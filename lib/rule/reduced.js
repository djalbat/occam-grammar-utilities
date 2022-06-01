"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _definition = require("../utilities/definition");
var _ruleName = require("../utilities/ruleName");
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
    _createClass(ReducedRule, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var _this = this;
                var name = this.getName(), reducedRuleName = name, ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName), rule = ruleMap[ruleName], definitions = rule.getDefinitions(), nonLeftRecursiveDefinitions = [];
                var reducedDefinition = null;
                backwardsForEach(definitions, function(definition, index) {
                    var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                    if (!definitionLeftRecursive) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                        var nonLeftRecursiveDefinition = definition; ///
                        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);
                    } else {
                        debugger;
                    }
                });
                if (reducedDefinition !== null) {
                    var definition1 = reducedDefinition; ///
                    this.addDefinition(definition1);
                }
                nonLeftRecursiveDefinitions.forEach(function(nonLeftRecursiveDefinition) {
                    var definition = nonLeftRecursiveDefinition; ///
                    _this.addDefinition(definition);
                });
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), name = reducedRuleName, ambiguous = false, definitions = [], NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgICBsZXQgcmVkdWNlZERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzRm9yRWFjaChkZWZpbml0aW9ucywgKGRlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbilcblxuICAgICAgaWYgKCFkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHJlZHVjZWREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gcmVkdWNlZERlZmluaXRpb247IC8vL1xuXG4gICAgICB0aGlzLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgICB0aGlzLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBuZXcgUmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZWR1Y2VkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJSZWR1Y2VkUnVsZSIsInJld3JpdGUiLCJydWxlTWFwIiwibmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVkdWNlZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiaW5kZXgiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0IiwiYWRkRGVmaW5pdGlvbiIsImZvckVhY2giLCJmcm9tUnVsZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgs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