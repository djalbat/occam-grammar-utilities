"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyLeftRecursiveDefinition;
    }
});
var _left = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left"));
var _array = require("../../utilities/array");
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
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, rule, definition, recursiveRuleNames, leftRecursiveRuleNames);
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
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                var lastLeftRecursiveDefinition = (0, _array.last)(this.leftRecursiveDefinitions), leftRecursiveDefinition = lastLeftRecursiveDefinition; ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
                return leftRecursiveRuleName;
            }
        },
        {
            key: "getDefinitions",
            value: function getDefinitions() {
                var definitions = this.leftRecursiveDefinitions.map(function(leftRecursiveDefinitions) {
                    var definition = leftRecursiveDefinitions.getDefinition();
                    return definition;
                });
                definitions.push(this.definition);
                return definitions;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, depth = leftRecursiveDefinitionsLength; ///
                return depth;
            }
        },
        {
            key: "isLeast",
            value: function isLeast() {
                var depth = this.getDepth(), least = depth === 1;
                return least;
            }
        },
        {
            key: "isGreaterThan",
            value: function isGreaterThan(indirectlyLeftRecursiveDefinition) {
                var depth = this.getDepth(), indirectlyLeftRecursiveDefinitionDepth = indirectlyLeftRecursiveDefinition.getDepth(), greaterThanIndirectlyLeftRecursiveDefinition = depth > indirectlyLeftRecursiveDefinitionDepth;
                return greaterThanIndirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "isEquivalentTo",
            value: function isEquivalentTo(indirectlyLeftRecursiveDefinition) {
                var definitions = this.getDefinitions(), indirectlyLeftRecursiveDefinitionDefinitions = indirectlyLeftRecursiveDefinition.getDefinitions(), equivalentTo = compareDefinitions(definitions, indirectlyLeftRecursiveDefinitionDefinitions); ///
                return equivalentTo;
            }
        }
    ], [
        {
            key: "fromRuleDefinitionAndRecursiveDefinitions",
            value: function fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions, context) {
                var indirectlyLeftRecursiveDefinition = null;
                var ruleName = rule.getName(), definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                    if (!ruleNameLeftRecursiveRuleName) {
                        var leftRecursiveDefinition = _left.default.fromRuleAndDefinition(rule, definition);
                        recursiveDefinitions = _toConsumableArray(recursiveDefinitions).concat([
                            leftRecursiveDefinition
                        ]); ///
                        var leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);
                        if (leftRecursiveDefinitions !== null) {
                            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore it cannot be rewritten."));
                            }
                            var definitionEffectivelyUnary = (0, _definition.isDefinitionEffectivelyUnary)(definition, context);
                            if (definitionEffectivelyUnary) {
                                var leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every(function(leftRecursiveDefinition) {
                                    var _$definition = leftRecursiveDefinition.getDefinition(), definitionEffectivelyUnary = (0, _definition.isDefinitionEffectivelyUnary)(_$definition, context);
                                    if (definitionEffectivelyUnary) {
                                        return true;
                                    }
                                });
                                if (leftRecursiveDefinitionsUnary) {
                                    var definitionString1 = definition.asString();
                                    throw new Error("The '".concat(definitionString1, "' indirectly left recursive definition of the '").concat(ruleName, "' rule and all of its intermediate definitions are effectively unary and therefore it cannot be rewritten."));
                                }
                            }
                            leftRecursiveDefinitions.forEach(function(leftRecursiveDefinition) {
                                var _$definition = leftRecursiveDefinition.getDefinition(), definitionComplex = (0, _definition.isDefinitionComplex)(_$definition);
                                if (definitionComplex) {
                                    var ruleName = leftRecursiveDefinition.getRuleName(), definitionString = _$definition.asString();
                                    throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                                }
                            });
                            var recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
                        }
                    }
                }
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromDefinitionAndLeftRecursiveDefinitions",
            value: function fromDefinitionAndLeftRecursiveDefinitions(definition, leftRecursiveDefinitions) {
                var lastLeftRecursiveDefinition = (0, _array.last)(leftRecursiveDefinitions), leftRecursiveDefinitionsFront = (0, _array.front)(leftRecursiveDefinitions);
                var rule = lastLeftRecursiveDefinition.getRule();
                leftRecursiveDefinitions = leftRecursiveDefinitionsFront; ///
                var recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition), leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleDefinitionAndLeftRecursiveDefinitions",
            value: function fromRuleDefinitionAndLeftRecursiveDefinitions(rule, definition, leftRecursiveDefinitions) {
                var recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition), leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
                return indirectlyLeftRecursiveDefinition;
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinition;
}(_left.default);
function compareDefinitions(definitionsA, definitionsB) {
    var equalTo = false;
    var definitionsALength = definitionsA.length, definitionsBLength = definitionsB.length;
    if (definitionsALength === definitionsBLength) {
        var firstDefinitionB = (0, _array.first)(definitionsB), offset = definitionsA.indexOf(firstDefinitionB);
        if (offset > -1) {
            var length = definitionsALength; ///
            equalTo = definitionsA.every(function(definitionA, index) {
                index = (length + index - offset) % length;
                var definitionB = definitionsB[index];
                if (definitionA === definitionB) {
                    return true;
                }
            });
        }
    }
    return equalTo;
}
function findLeftRecursiveDefinition(leftRecursiveDefinitions) {
    var lastLeftRecursiveDefinition = (0, _array.last)(leftRecursiveDefinitions), leftRecursiveRuleNames = lastLeftRecursiveDefinition.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), lLeftRecursiveRuleName = firstLeftRecursiveRuleName, leftRecursiveDefinition = (0, _array.backwardsFind)(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
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
    (0, _array.backwardsEvery)(recursiveDefinitions, function(recursiveDefinition) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcblxuaW1wb3J0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsXG4gICAgICAgICBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLFxuICAgICAgICAgaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeSxcbiAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpc0xlYXN0KCkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGxlYXN0ID0gKGRlcHRoID09PSAxKTtcblxuICAgIHJldHVybiBsZWFzdDtcbiAgfVxuXG4gIGlzR3JlYXRlclRoYW4oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGggPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVwdGgoKSxcbiAgICAgICAgICBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZXB0aCA+IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzRXF1aXZhbGVudFRvKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZXF1aXZhbGVudFRvID0gY29tcGFyZURlZmluaXRpb25zKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyk7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbnRUbztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBpdCBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeShkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeShkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VW5hcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgYWxsIG9mIGl0cyBpbnRlcm1lZGlhdGUgZGVmaW5pdGlvbnMgYXJlIGVmZmVjdGl2ZWx5IHVuYXJ5IGFuZCB0aGVyZWZvcmUgaXQgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250ID0gZnJvbnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IHJ1bGUgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQ7ICAvLy9cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZURlZmluaXRpb25zKGRlZmluaXRpb25zQSwgZGVmaW5pdGlvbnNCKSB7XG4gIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgY29uc3QgZGVmaW5pdGlvbnNBTGVuZ3RoID0gZGVmaW5pdGlvbnNBLmxlbmd0aCxcbiAgICAgICAgZGVmaW5pdGlvbnNCTGVuZ3RoID0gZGVmaW5pdGlvbnNCLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNBTGVuZ3RoID09PSBkZWZpbml0aW9uc0JMZW5ndGgpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb25CID0gZmlyc3QoZGVmaW5pdGlvbnNCKSxcbiAgICAgICAgICBvZmZzZXQgPSBkZWZpbml0aW9uc0EuaW5kZXhPZihmaXJzdERlZmluaXRpb25CKTtcblxuICAgIGlmIChvZmZzZXQgPiAtMSkge1xuICAgICAgY29uc3QgbGVuZ3RoID0gZGVmaW5pdGlvbnNBTGVuZ3RoOyAgLy8vXG5cbiAgICAgIGVxdWFsVG8gPSBkZWZpbml0aW9uc0EuZXZlcnkoKGRlZmluaXRpb25BLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCA9IChsZW5ndGggKyBpbmRleCAtIG9mZnNldCkgJSBsZW5ndGg7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkIgPSBkZWZpbml0aW9uc0JbaW5kZXhdO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQSA9PT0gZGVmaW5pdGlvbkIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVxdWFsVG87XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3QiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwibWFwIiwiZ2V0RGVmaW5pdGlvbiIsInB1c2giLCJnZXREZXB0aCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRlcHRoIiwiaXNMZWFzdCIsImxlYXN0IiwiaXNHcmVhdGVyVGhhbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0VxdWl2YWxlbnRUbyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb25zIiwiZXF1aXZhbGVudFRvIiwiY29tcGFyZURlZmluaXRpb25zIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImNvbnRleHQiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VW5hcnkiLCJpc0RlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkiLCJldmVyeSIsImZvckVhY2giLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCIsImZyb250IiwiZ2V0UnVsZSIsImZyb21SdWxlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zQSIsImRlZmluaXRpb25zQiIsImVxdWFsVG8iLCJkZWZpbml0aW9uc0FMZW5ndGgiLCJkZWZpbml0aW9uc0JMZW5ndGgiLCJmaXJzdERlZmluaXRpb25CIiwib2Zmc2V0IiwiaW5kZXhPZiIsImRlZmluaXRpb25BIiwiaW5kZXgiLCJkZWZpbml0aW9uQiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJiYWNrd2FyZHNGaW5kIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiYmFja3dhcmRzRXZlcnkiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eURBVGU7cUJBRThCOzBCQUtiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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