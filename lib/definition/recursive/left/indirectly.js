"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return IndirectlyLeftRecursiveDefinition;
    },
    enumerable: true
});
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _definition = require("../../../utilities/definition");
var _part = require("../../../utilities/part");
var _parts = require("../../../utilities/parts");
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
var last = _necessary.arrayUtilities.last, first = _necessary.arrayUtilities.first, front = _necessary.arrayUtilities.front, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
        _this.leftRecursiveDefinitions = leftRecursiveDefinitions;
        return _this;
    }
    _createClass(IndirectlyLeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveDefinitions",
            value: function getLeftRecursiveDefinitions() {
                return this.leftRecursiveDefinitions;
            }
        }
    ], [
        {
            key: "fromPartsRuleNameAndLeftRecursiveDefinitions",
            value: function fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions) {
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameDefinitionAndRecursiveDefinitions",
            value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
                var indirectlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                    if (!ruleNameLeftRecursiveRuleName) {
                        var leftRecursiveDefinition = _left.default.fromRuleNameAndDefinition(ruleName, definition);
                        recursiveDefinitions = _toConsumableArray(recursiveDefinitions).concat([
                            leftRecursiveDefinition
                        ]); ///
                        var leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);
                        if (leftRecursiveDefinitions !== null) {
                            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                            }
                            var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
                        }
                    }
                }
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, repeatedRuleName) {
                var leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                var leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;
                if (leftRecursiveDefinitionsLength === 1) {
                    indirectlyLeftRecursiveDefinition = null;
                } else {
                    var clonedParts = (0, _definition.cloneDefinitionParts)(indirectlyLeftRecursiveDefinition);
                    var parts = clonedParts; ///
                    var firstPart = first(parts);
                    parts = [
                        firstPart
                    ];
                    if (repeatedRuleName !== null) {
                        var repeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName);
                        parts.push(repeatedRuleNamePart);
                    }
                    var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                    leftRecursiveDefinitions = front(leftRecursiveDefinitions); ///
                    indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
                }
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndLeftRecursiveDefinition",
            value: function fromIndirectlyLeftRecursiveDefinitionAndLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition) {
                var parts = (0, _definition.mergeDefinitionParts)(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///
                return indirectlyLeftRecursiveDefinition;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinition;
}(_left.default);
function findLeftRecursiveDefinition(leftRecursiveDefinitions) {
    var lastLeftRecursiveDefinition = last(leftRecursiveDefinitions), leftRecursiveRuleNames = lastLeftRecursiveDefinition.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), lLeftRecursiveRuleName = firstLeftRecursiveRuleName, leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var ruleName = leftRecursiveDefinition.getRuleName();
        if (ruleName === lLeftRecursiveRuleName) {
            return true;
        }
    }) || null;
    return leftRecursiveDefinition;
}
function matchLeftRecursiveRuleNames(leftRecursiveDefinitions) {
    var ruleNames = leftRecursiveDefinitions.map(function(leftRecursiveDefinition) {
        var ruleName = leftRecursiveDefinition.getRuleName();
        return ruleName;
    }), ruleName = ruleNames.shift();
    ruleNames.push(ruleName);
    var leftRecursiveRuleNamesMatch = leftRecursiveDefinitions.every(function(leftRecursiveDefinition, index) {
        var ruleName = ruleNames[index], leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
        if (leftRecursiveRuleNamesIncludesRuleName) {
            return true;
        }
    });
    return leftRecursiveRuleNamesMatch;
}
function findLeftRecursiveDefinitions(recursiveDefinitions) {
    var leftRecursiveDefinitions = leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions);
    if (leftRecursiveDefinitions !== null) {
        var leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveDefinitions);
        if (leftRecursiveDefinition !== null) {
            truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition);
            var leftRecursiveRuleNamesMatch = matchLeftRecursiveRuleNames(leftRecursiveDefinitions);
            if (leftRecursiveRuleNamesMatch) {
                leftRecursiveDefinitions.pop();
            } else {
                leftRecursiveDefinitions = null;
            }
        } else {
            leftRecursiveDefinitions = null;
        }
    }
    return leftRecursiveDefinitions;
}
function truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition) {
    var index = leftRecursiveDefinitions.indexOf(leftRecursiveDefinition), start = 0, deleteCount = index; ///
    leftRecursiveDefinitions.splice(start, deleteCount);
}
function leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions) {
    var leftRecursiveDefinitions = [];
    backwardsEvery(recursiveDefinitions, function(recursiveDefinition) {
        var recursiveDefinitionLeftRecursiveDefinition = _instanceof(recursiveDefinition, _left.default);
        if (recursiveDefinitionLeftRecursiveDefinition) {
            var leftRecursiveDefinition = recursiveDefinition; ///
            leftRecursiveDefinitions.unshift(leftRecursiveDefinition);
            return true;
        }
    });
    var leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;
    if (leftRecursiveDefinitionsLength < 2) {
        leftRecursiveDefinitions = null;
    }
    return leftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgbWVyZ2VEZWZpbml0aW9uUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCwgY2xvbmVEZWZpbml0aW9uUGFydHMsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBsYXN0LCBmaXJzdCwgZnJvbnQsIGJhY2t3YXJkc0ZpbmQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0c1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHBhcnRzLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCByZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGNsb25lZFBhcnRzID0gY2xvbmVEZWZpbml0aW9uUGFydHMoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgbGV0IHBhcnRzID0gY2xvbmVkUGFydHM7ICAvLy9cblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICBwYXJ0cyA9IFtcbiAgICAgICAgZmlyc3RQYXJ0XG4gICAgICBdO1xuXG4gICAgICBpZiAocmVwZWF0ZWRSdWxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgICBwYXJ0cy5wdXNoKHJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7IC8vL1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBwYXJ0cyA9IG1lcmdlRGVmaW5pdGlvblBhcnRzKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpOyAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmcm9udCIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZnJvbVBhcnRzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImNsb25lZFBhcnRzIiwiY2xvbmVEZWZpbml0aW9uUGFydHMiLCJmaXJzdFBhcnQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJnZXRSdWxlTmFtZSIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIm1lcmdlRGVmaW5pdGlvblBhcnRzIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJydWxlTmFtZXMiLCJtYXAiLCJzaGlmdCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCIsImV2ZXJ5IiwiaW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztlQWFRQSxpQ0FBaUM7Ozs7eUJBWHZCLFdBQVc7MkNBRU4sb0NBQW9DOzBCQUVuQywrQkFBK0I7b0JBQzNCLHlCQUF5QjtxQkFDVywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd2RyxJQUFRQyxJQUFJLEdBQWtEQyxVQUFjLGVBQUEsQ0FBcEVELElBQUksRUFBRUUsS0FBSyxHQUEyQ0QsVUFBYyxlQUFBLENBQTlEQyxLQUFLLEVBQUVDLEtBQUssR0FBb0NGLFVBQWMsZUFBQSxDQUF2REUsS0FBSyxFQUFFQyxhQUFhLEdBQXFCSCxVQUFjLGVBQUEsQ0FB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