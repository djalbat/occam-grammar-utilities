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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgICBsZXQgcmVkdWNlZERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzRm9yRWFjaChkZWZpbml0aW9ucywgKGRlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbilcblxuICAgICAgaWYgKCFkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uOyAvLy9cblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocmVkdWNlZERlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSByZWR1Y2VkRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHRoaXMuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHRoaXMuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IG5ldyBSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsIlJlZHVjZWRSdWxlIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJuYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWR1Y2VkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJpbmRleCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJhZGREZWZpbml0aW9uIiwiZm9yRWFjaCIsImZyb21SdWxlIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDTCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxRQUFpQixrQ0FBakIs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