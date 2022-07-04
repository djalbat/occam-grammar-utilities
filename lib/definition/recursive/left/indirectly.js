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
        },
        {
            key: "isLast",
            value: function isLast() {
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, last = leftRecursiveDefinitionsLength === 1;
                return last;
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
                var parts = (0, _definition.mergeDefinitionParts)(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgbWVyZ2VEZWZpbml0aW9uUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCwgY2xvbmVEZWZpbml0aW9uUGFydHMsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBsYXN0LCBmaXJzdCwgZnJvbnQsIGJhY2t3YXJkc0ZpbmQsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgaXNMYXN0KCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBsYXN0ID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSk7XG5cbiAgICByZXR1cm4gbGFzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhwYXJ0cywgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjbG9uZWRQYXJ0cyA9IGNsb25lRGVmaW5pdGlvblBhcnRzKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGxldCBwYXJ0cyA9IGNsb25lZFBhcnRzOyAgLy8vXG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgcGFydHMgPSBbXG4gICAgICAgIGZpcnN0UGFydFxuICAgICAgXTtcblxuICAgICAgaWYgKHJlcGVhdGVkUnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcGFydHMucHVzaChyZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmcm9udChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcGFydHMgPSBtZXJnZURlZmluaXRpb25QYXJ0cyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZnJvbnQiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImlzTGFzdCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZyb21QYXJ0c1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kUmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJjbG9uZWRQYXJ0cyIsImNsb25lRGVmaW5pdGlvblBhcnRzIiwiZmlyc3RQYXJ0IiwicmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJwdXNoIiwiZ2V0UnVsZU5hbWUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtZXJnZURlZmluaXRpb25QYXJ0cyIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJldmVyeSIsImluZGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFhUUEsaUNBQWlDOzs7O3lCQVh2QixXQUFXOzJDQUVOLG9DQUFvQzswQkFFbkMsK0JBQStCO29CQUMzQix5QkFBeUI7cUJBQ1csMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdkcsSUFBUUMsSUFBSSxHQUFrREMsVUFBYyxlQUFBLENBQXBFRCxJQUFJLEVBQUVFLEtBQUssR0FBMkNELFVBQWMsZUFBQSxDQUE5REMsS0FBSyxFQUFFQyxLQUFLLEdBQW9DRixVQUFjLGVBQUEsQ0FBdkRFLEtBQUssRUFBRUMsYUFBYSxHQUFxQkgsVUFBYyxlQUFBLENBQWhERyxhQUFhLEVBQUVDLGNBQWMsR0FBS0osVUFBYyxlQUFBLENBQWpDSSxjQUFjLEFBQW9CO0FBRTlELElBQUEsQUFBTU4saUNBQWlDLGlCQWtIbkQsQUFsSFk7OzthQUFNQSxpQ0FBaUMsQ0FDeENPLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHdCQUF3Qjs7O2tDQUN6RkosS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRTtRQUVuRSxNQUFLQyx3QkFBd0IsR0FBR0Esd0JBQXdCLENBQUM7Ozs7O1lBRzNEQyxHQUEyQixFQUEzQkEsNkJBQTJCO21CQUEzQkEsU0FBQUEsMkJBQTJCLEdBQUc7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDRCx3QkFBd0IsQ0FBQzthQUN0Qzs7O1lBRURFLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLDhCQUE4QixHQUFHLElBQUksQ0FBQ0gsd0JBQXdCLENBQUNJLE1BQU0sRUFDckVkLElBQUksR0FBSWEsOEJBQThCLEtBQUssQ0FBQyxBQUFDLEFBQUM7Z0JBRXBELE9BQU9iLElBQUksQ0FBQzthQUNiOzs7O1lBRU1lLEdBQTRDLEVBQTVDQSw4Q0FBNEM7bUJBQW5ELFNBQU9BLDRDQUE0QyxDQUFDVCxLQUFLLEVBQUVDLFFBQVEsRUFBRUcsd0JBQXdCLEVBQUU7Z0JBQzdGLElBQU1GLGtCQUFrQixHQUFHUSxJQUFBQSxNQUEyQiw0QkFBQSxFQUFDVixLQUFLLENBQUMsRUFDdkRHLHNCQUFzQixHQUFHUSxJQUFBQSxNQUErQixnQ0FBQSxFQUFDWCxLQUFLLENBQUMsRUFDL0RZLGlDQUFpQyxHQUFHLElBQUluQixpQ0FBaUMsQ0FBQ08sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRUMsd0JBQXdCLENBQUMsQUFBQztnQkFFdkssT0FBT1EsaUNBQWlDLENBQUM7YUFDMUM7OztZQUVNQyxHQUE2QyxFQUE3Q0EsK0NBQTZDO21CQUFwRCxTQUFPQSw2Q0FBNkMsQ0FBQ1osUUFBUSxFQUFFYSxVQUFVLEVBQUVDLG9CQUFvQixFQUFFO2dCQUMvRixJQUFJSCxpQ0FBaUMsR0FBRyxJQUFJLEFBQUM7Z0JBRTdDLElBQU1JLHVCQUF1QixHQUFHQyxJQUFBQSxXQUF5QiwwQkFBQSxFQUFDSCxVQUFVLENBQUMsQUFBQztnQkFFdEUsSUFBSUUsdUJBQXVCLEVBQUU7b0JBQzNCLElBQU1iLHNCQUFzQixHQUFHZSxJQUFBQSxXQUFvQyxxQ0FBQSxFQUFDSixVQUFVLENBQUMsRUFDekVLLDBCQUEwQixHQUFHdkIsS0FBSyxDQUFDTyxzQkFBc0IsQ0FBQyxFQUMxRGlCLHFCQUFxQixHQUFHRCwwQkFBMEIsRUFDbERFLDZCQUE2QixHQUFJcEIsUUFBUSxLQUFLbUIscUJBQXFCLEFBQUMsQUFBQztvQkFFM0UsSUFBSSxDQUFDQyw2QkFBNkIsRUFBRTt3QkFDbEMsSUFBTUMsdUJBQXVCLEdBQUdDLEtBQXVCLFFBQUEsQ0FBQ0MseUJBQXlCLENBQUN2QixRQUFRLEVBQUVhLFVBQVUsQ0FBQyxBQUFDO3dCQUV4R0Msb0JBQW9CLEdBQUcsQUFBRSxtQkFBR0Esb0JBQW9CLENBQXBCQSxRQUFMOzRCQUEyQk8sdUJBQXVCO3lCQUFFLENBQUEsQ0FBQyxDQUFFLEdBQUc7d0JBRWpGLElBQU1sQix3QkFBd0IsR0FBR3FCLDRCQUE0QixDQUFDVixvQkFBb0IsQ0FBQyxBQUFDO3dCQUVwRixJQUFJWCx3QkFBd0IsS0FBSyxJQUFJLEVBQUU7NEJBQ3JDLElBQU1zQixpQkFBaUIsR0FBR0MsSUFBQUEsV0FBbUIsb0JBQUEsRUFBQ2IsVUFBVSxDQUFDLEFBQUM7NEJBRTFELElBQUlZLGlCQUFpQixFQUFFO2dDQUNyQixJQUFNRSxnQkFBZ0IsR0FBR2QsVUFBVSxDQUFDZSxRQUFRLEVBQUUsQUFBQztnQ0FFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxPQUFLLENBQW9FN0IsTUFBUSxDQUExRTJCLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBb0QsQ0FBN0QzQixRQUFRLEVBQUMsc0RBQW9ELENBQUMsQ0FBQyxDQUFDOzZCQUMzSjs0QkFFRCxJQUFNRCxLQUFLLEdBQUdjLFVBQVUsQ0FBQ2lCLFFBQVEsRUFBRSxFQUM3QjdCLGtCQUFrQixHQUFHOEIsSUFBQUEsV0FBZ0MsaUNBQUEsRUFBQ2xCLFVBQVUsQ0FBQyxBQUFDOzRCQUV4RUYsaUNBQWlDLEdBQUcsSUFBSW5CLGlDQUFpQyxDQUFDTyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0IsQ0FBQyxDQUFDO3lCQUNsSztxQkFDRjtpQkFDRjtnQkFFRCxPQUFPUSxpQ0FBaUMsQ0FBQzthQUMxQzs7O1lBRU1xQixHQUF3RCxFQUF4REEsMERBQXdEO21CQUEvRCxTQUFPQSx3REFBd0QsQ0FBQ3JCLGlDQUFpQyxFQUFFc0IsZ0JBQWdCLEVBQUU7Z0JBQ25ILElBQUk5Qix3QkFBd0IsR0FBR1EsaUNBQWlDLENBQUNQLDJCQUEyQixFQUFFLEFBQUM7Z0JBRS9GLElBQU1FLDhCQUE4QixHQUFHSCx3QkFBd0IsQ0FBQ0ksTUFBTSxBQUFDO2dCQUV2RSxJQUFJRCw4QkFBOEIsS0FBSyxDQUFDLEVBQUU7b0JBQ3hDSyxpQ0FBaUMsR0FBRyxJQUFJLENBQUM7aUJBQzFDLE1BQ0k7b0JBQ0gsSUFBTXVCLFdBQVcsR0FBR0MsSUFBQUEsV0FBb0IscUJBQUEsRUFBQ3hCLGlDQUFpQyxDQUFDLEFBQUM7b0JBRTVFLElBQUlaLEtBQUssR0FBR21DLFdBQVcsQUFBQyxFQUFFLEdBQUc7b0JBRTdCLElBQU1FLFNBQVMsR0FBR3pDLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLEFBQUM7b0JBRS9CQSxLQUFLLEdBQUc7d0JBQ05xQyxTQUFTO3FCQUNWLENBQUM7b0JBRUYsSUFBSUgsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO3dCQUM3QixJQUFNSSxvQkFBb0IsR0FBR0MsSUFBQUEsS0FBd0IseUJBQUEsRUFBQ0wsZ0JBQWdCLENBQUMsQUFBQzt3QkFFeEVsQyxLQUFLLENBQUN3QyxJQUFJLENBQUNGLG9CQUFvQixDQUFDLENBQUM7cUJBQ2xDO29CQUVELElBQU1yQyxRQUFRLEdBQUdXLGlDQUFpQyxDQUFDNkIsV0FBVyxFQUFFLEVBQzFEdkMsa0JBQWtCLEdBQUdRLElBQUFBLE1BQTJCLDRCQUFBLEVBQUNWLEtBQUssQ0FBQyxFQUN2REcsc0JBQXNCLEdBQUdRLElBQUFBLE1BQStCLGdDQUFBLEVBQUNYLEtBQUssQ0FBQyxBQUFDO29CQUV0RUksd0JBQXdCLEdBQUdQLEtBQUssQ0FBQ08sd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBRS9EUSxpQ0FBaUMsR0FBRyxJQUFJbkIsaUNBQWlDLENBQUNPLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHdCQUF3QixDQUFDLENBQUM7aUJBQ2xLO2dCQUVELE9BQU9RLGlDQUFpQyxDQUFDO2FBQzFDOzs7WUFFTThCLEdBQStELEVBQS9EQSxpRUFBK0Q7bUJBQXRFLFNBQU9BLCtEQUErRCxDQUFDOUIsaUNBQWlDLEVBQUVVLHVCQUF1QixFQUFFO2dCQUNqSSxJQUFNdEIsS0FBSyxHQUFHMkMsSUFBQUEsV0FBb0IscUJBQUEsRUFBQy9CLGlDQUFpQyxFQUFFVSx1QkFBdUIsQ0FBQyxFQUN4RnJCLFFBQVEsR0FBR3FCLHVCQUF1QixDQUFDbUIsV0FBVyxFQUFFLEVBQ2hEdkMsa0JBQWtCLEdBQUdRLElBQUFBLE1BQTJCLDRCQUFBLEVBQUNWLEtBQUssQ0FBQyxFQUN2REcsc0JBQXNCLEdBQUdRLElBQUFBLE1BQStCLGdDQUFBLEVBQUNYLEtBQUssQ0FBQyxFQUMvREksd0JBQXdCLEdBQUdRLGlDQUFpQyxDQUFDUCwyQkFBMkIsRUFBRSxBQUFDO2dCQUVqR08saUNBQWlDLEdBQUcsSUFBSW5CLGlDQUFpQyxDQUFDTyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFFckssT0FBT1EsaUNBQWlDLENBQUM7YUFDMUM7Ozs7Q0FDRixDQWhIOERXLEtBQXVCLFFBQUEsQ0FnSHJGO0FBRUQsU0FBU3FCLDJCQUEyQixDQUFDeEMsd0JBQXdCLEVBQUU7SUFDN0QsSUFBTXlDLDJCQUEyQixHQUFHbkQsSUFBSSxDQUFDVSx3QkFBd0IsQ0FBQyxFQUM1REQsc0JBQXNCLEdBQUcwQywyQkFBMkIsQ0FBQ0MseUJBQXlCLEVBQUUsRUFDaEYzQiwwQkFBMEIsR0FBR3ZCLEtBQUssQ0FBQ08sc0JBQXNCLENBQUMsRUFDMUQ0QyxzQkFBc0IsR0FBRzVCLDBCQUEwQixFQUNuREcsdUJBQXVCLEdBQUd4QixhQUFhLENBQUNNLHdCQUF3QixFQUFFLFNBQUNrQix1QkFBdUIsRUFBSztRQUM3RixJQUFNckIsUUFBUSxHQUFHcUIsdUJBQXVCLENBQUNtQixXQUFXLEVBQUUsQUFBQztRQUV2RCxJQUFJeEMsUUFBUSxLQUFLOEMsc0JBQXNCLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUM7SUFFakIsT0FBT3pCLHVCQUF1QixDQUFDO0NBQ2hDO0FBRUQsU0FBUzBCLDJCQUEyQixDQUFDNUMsd0JBQXdCLEVBQUU7SUFDN0QsSUFBTTZDLFNBQVMsR0FBRzdDLHdCQUF3QixDQUFDOEMsR0FBRyxDQUFDLFNBQUM1Qix1QkFBdUIsRUFBSztRQUNwRSxJQUFNckIsUUFBUSxHQUFHcUIsdUJBQXVCLENBQUNtQixXQUFXLEVBQUUsQUFBQztRQUV2RCxPQUFPeEMsUUFBUSxDQUFDO0tBQ2pCLENBQUMsRUFDRkEsUUFBUSxHQUFHZ0QsU0FBUyxDQUFDRSxLQUFLLEVBQUUsQUFBQztJQUVuQ0YsU0FBUyxDQUFDVCxJQUFJLENBQUN2QyxRQUFRLENBQUMsQ0FBQztJQUV6QixJQUFNbUQsMkJBQTJCLEdBQUdoRCx3QkFBd0IsQ0FBQ2lELEtBQUssQ0FBQyxTQUFDL0IsdUJBQXVCLEVBQUVnQyxLQUFLLEVBQUs7UUFDckcsSUFBTXJELFFBQVEsR0FBR2dELFNBQVMsQ0FBQ0ssS0FBSyxDQUFDLEVBQzNCbkQsc0JBQXNCLEdBQUdtQix1QkFBdUIsQ0FBQ3dCLHlCQUF5QixFQUFFLEVBQzVFUyxzQ0FBc0MsR0FBR3BELHNCQUFzQixDQUFDcUQsUUFBUSxDQUFDdkQsUUFBUSxDQUFDLEFBQUM7UUFFekYsSUFBSXNELHNDQUFzQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLEFBQUM7SUFFSCxPQUFPSCwyQkFBMkIsQ0FBQztDQUNwQztBQUVELFNBQVMzQiw0QkFBNEIsQ0FBQ1Ysb0JBQW9CLEVBQUU7SUFDMUQsSUFBSVgsd0JBQXdCLEdBQUdxRCxnREFBZ0QsQ0FBQzFDLG9CQUFvQixDQUFDLEFBQUM7SUFFdEcsSUFBSVgsd0JBQXdCLEtBQUssSUFBSSxFQUFFO1FBQ3JDLElBQU1rQix1QkFBdUIsR0FBR3NCLDJCQUEyQixDQUFDeEMsd0JBQXdCLENBQUMsQUFBQztRQUV0RixJQUFJa0IsdUJBQXVCLEtBQUssSUFBSSxFQUFFO1lBQ3BDb0MsZ0NBQWdDLENBQUN0RCx3QkFBd0IsRUFBRWtCLHVCQUF1QixDQUFDLENBQUM7WUFFcEYsSUFBTThCLDJCQUEyQixHQUFHSiwyQkFBMkIsQ0FBQzVDLHdCQUF3QixDQUFDLEFBQUM7WUFFMUYsSUFBSWdELDJCQUEyQixFQUFFO2dCQUMvQmhELHdCQUF3QixDQUFDdUQsR0FBRyxFQUFFLENBQUM7YUFDaEMsTUFBTTtnQkFDTHZELHdCQUF3QixHQUFHLElBQUksQ0FBQzthQUNqQztTQUNGLE1BQU07WUFDTEEsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0tBQ0Y7SUFFRCxPQUFPQSx3QkFBd0IsQ0FBQztDQUNqQztBQUVELFNBQVNzRCxnQ0FBZ0MsQ0FBQ3RELHdCQUF3QixFQUFFa0IsdUJBQXVCLEVBQUU7SUFDM0YsSUFBTWdDLEtBQUssR0FBR2xELHdCQUF3QixDQUFDd0QsT0FBTyxDQUFDdEMsdUJBQXVCLENBQUMsRUFDbkV1QyxLQUFLLEdBQUcsQ0FBQyxFQUNUQyxXQUFXLEdBQUdSLEtBQUssQUFBQyxFQUFFLEdBQUc7SUFFN0JsRCx3QkFBd0IsQ0FBQzJELE1BQU0sQ0FBQ0YsS0FBSyxFQUFFQyxXQUFXLENBQUMsQ0FBQztDQUNyRDtBQUVELFNBQVNMLGdEQUFnRCxDQUFDMUMsb0JBQW9CLEVBQUU7SUFDOUUsSUFBSVgsd0JBQXdCLEdBQUcsRUFBRSxBQUFDO0lBRWxDTCxjQUFjLENBQUNnQixvQkFBb0IsRUFBRSxTQUFDaUQsbUJBQW1CLEVBQUs7UUFDNUQsSUFBTUMsMENBQTBDLEdBQUlELEFBQW1CLFdBQVl6QyxDQUEvQnlDLG1CQUFtQixFQUFZekMsS0FBdUIsUUFBQSxDQUFBLEFBQUMsQUFBQztRQUU1RyxJQUFJMEMsMENBQTBDLEVBQUU7WUFDOUMsSUFBTTNDLHVCQUF1QixHQUFHMEMsbUJBQW1CLEFBQUMsRUFBRSxHQUFHO1lBRXpENUQsd0JBQXdCLENBQUM4RCxPQUFPLENBQUM1Qyx1QkFBdUIsQ0FBQyxDQUFDO1lBRTFELE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFNZiw4QkFBOEIsR0FBR0gsd0JBQXdCLENBQUNJLE1BQU0sQUFBQztJQUV2RSxJQUFJRCw4QkFBOEIsR0FBRyxDQUFDLEVBQUU7UUFDdENILHdCQUF3QixHQUFHLElBQUksQ0FBQztLQUNqQztJQUVELE9BQU9BLHdCQUF3QixDQUFDO0NBQ2pDIn0=