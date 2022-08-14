"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReducedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _replacementDefinition = /*#__PURE__*/ _interopRequireDefault(require("../../replacementDefinition"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter;
var IndirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyReducedRule, Rule);
    var _super = _createSuper(IndirectlyReducedRule);
    function IndirectlyReducedRule() {
        _classCallCheck(this, IndirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReducedRule, null, [
        {
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var indirectlyReducedRule = null;
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);
                var definitions = rule.getDefinitions();
                definitions = definitions.slice(0); ///
                filter(definitions, function(definition) {
                    var definitionReplacementDefinition = _instanceof(definition, _replacementDefinition.default);
                    if (!definitionReplacementDefinition) {
                        return true;
                    }
                });
                indirectlyLeftRecursiveDefinitions.forEach(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition), start = index, deleteCount = 1;
                    definitions.splice(start, deleteCount);
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), name = indirectlyReducedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default; ///
                    indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRule;
}(_occamParsers.Rule);
function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    var indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly1.default);
            if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50RGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnREZWZpbml0aW9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlZHVjZWQvaW5kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaW5kLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnNsaWNlKDApOyAgLy8vXG5cbiAgICBmaWx0ZXIoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uUmVwbGFjZW1lbnREZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBSZXBsYWNlbWVudERlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25SZXBsYWNlbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVkdWNlZE5vZGU7ICAvLy9cblxuICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZWR1Y2VkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJmaW5kIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwic2xpY2UiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlcGxhY2VtZW50RGVmaW5pdGlvbiIsIlJlcGxhY2VtZW50RGVmaW5pdGlvbiIsImZvckVhY2giLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlZHVjZWROb2RlIiwiUnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEscUJBQXFCOzs7NEJBWHJCLGVBQWU7eUJBQ0wsV0FBVzswRUFFUiw2QkFBNkI7K0RBQzdCLCtCQUErQjtnRUFDbkIsMkNB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