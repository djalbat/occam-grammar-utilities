"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
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
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target1, property1, receiver1 || target1);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, [
        {
            key: "prune",
            value: function prune(ruleMap, RewrittenDefinition) {
                var name = this.getName(), ruleName = name, definitions = this.getDefinitions(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRule = ruleMap[reducedRuleName], reducedRuleDefinitions = [];
                backwardsForEach(definitions, function(definition, index) {
                    var definitionRewrittenDefinition = _instanceof(definition, RewrittenDefinition);
                    if (!definitionRewrittenDefinition) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                        var reducedRuleDefinition = definition; ///
                        reducedRuleDefinitions.unshift(reducedRuleDefinition);
                    }
                });
                reducedRuleDefinitions.forEach(function(reducedRuleDefinition) {
                    var definition = reducedRuleDefinition; ///
                    reducedRule.addDefinition(definition);
                });
            }
        },
        {
            key: "replaceDefinition",
            value: function replaceDefinition(definition, rewrittenDefinition) {
                var replacedDefinition = definition, replacementDefinition = rewrittenDefinition; ///
                _get(_getPrototypeOf(RewrittenRule.prototype), "replaceDefinition", this).call(this, replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var ruleName = rule.getName(), name = ruleName, ambiguous = rule.isAmbiguous(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHBydW5lKHJ1bGVNYXAsIFJld3JpdHRlbkRlZmluaXRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZSA9IHJ1bGVNYXBbcmVkdWNlZFJ1bGVOYW1lXSxcbiAgICAgICAgICByZWR1Y2VkUnVsZURlZmluaXRpb25zID0gW107XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZXdyaXR0ZW5EZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBSZXdyaXR0ZW5EZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uUmV3cml0dGVuRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgY29uc3QgcmVkdWNlZFJ1bGVEZWZpbml0aW9uID0gZGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgcmVkdWNlZFJ1bGVEZWZpbml0aW9ucy51bnNoaWZ0KHJlZHVjZWRSdWxlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZWR1Y2VkUnVsZURlZmluaXRpb25zLmZvckVhY2goKHJlZHVjZWRSdWxlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHJlZHVjZWRSdWxlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJlZHVjZWRSdWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZXdyaXR0ZW5EZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcmVwbGFjZWREZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgc3VwZXIucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJSZXdyaXR0ZW5SdWxlIiwicHJ1bmUiLCJydWxlTWFwIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsIm5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImluZGV4IiwiZGVmaW5pdGlvblJld3JpdHRlbkRlZmluaXRpb24iLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVkdWNlZFJ1bGVEZWZpbml0aW9uIiwidW5zaGlmdCIsImZvckVhY2giLCJhZGREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZnJvbVJ1bGUiLCJydWxlIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVRLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNMLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVFLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7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