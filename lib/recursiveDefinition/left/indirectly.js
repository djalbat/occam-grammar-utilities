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
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, depth = leftRecursiveDefinitionsLength - 1; ///
                return depth;
            }
        },
        {
            key: "isLeast",
            value: function isLeast() {
                var depth = this.getDepth(), least = depth === 0;
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
                            var definitionUnary = (0, _definition.isDefinitionUnary)(definition, context), definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionUnary) {
                                var leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every(function(leftRecursiveDefinition) {
                                    var _$definition = leftRecursiveDefinition.getDefinition(), definitionUnary = (0, _definition.isDefinitionUnary)(_$definition, context);
                                    if (definitionUnary) {
                                        return true;
                                    }
                                });
                                if (leftRecursiveDefinitionsUnary) {
                                    var definitionString = definition.asString();
                                    throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule and all of its intermediate definitions are unary and therefore it cannot be rewritten."));
                                }
                            }
                            if (definitionComplex) {
                                var definitionString1 = definition.asString();
                                throw new Error("The '".concat(definitionString1, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore it cannot be rewritten."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcblxuaW1wb3J0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIC0gMTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChkZXB0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVwdGggPiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCk7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGVxdWl2YWxlbnRUbyA9IGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW50VG87XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFuZCBhbGwgb2YgaXRzIGludGVybWVkaWF0ZSBkZWZpbml0aW9ucyBhcmUgdW5hcnkgYW5kIHRoZXJlZm9yZSBpdCBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBpdCBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5mb3JFYWNoKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQgPSBmcm9udChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgcnVsZSA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgIC8vL1xuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnNBLCBkZWZpbml0aW9uc0IpIHtcbiAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbml0aW9uc0FMZW5ndGggPSBkZWZpbml0aW9uc0EubGVuZ3RoLFxuICAgICAgICBkZWZpbml0aW9uc0JMZW5ndGggPSBkZWZpbml0aW9uc0IubGVuZ3RoO1xuXG4gIGlmIChkZWZpbml0aW9uc0FMZW5ndGggPT09IGRlZmluaXRpb25zQkxlbmd0aCkge1xuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbkIgPSBmaXJzdChkZWZpbml0aW9uc0IpLFxuICAgICAgICAgIG9mZnNldCA9IGRlZmluaXRpb25zQS5pbmRleE9mKGZpcnN0RGVmaW5pdGlvbkIpO1xuXG4gICAgaWYgKG9mZnNldCA+IC0xKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBkZWZpbml0aW9uc0FMZW5ndGg7ICAvLy9cblxuICAgICAgZXF1YWxUbyA9IGRlZmluaXRpb25zQS5ldmVyeSgoZGVmaW5pdGlvbkEsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4ID0gKGxlbmd0aCArIGluZGV4IC0gb2Zmc2V0KSAlIGxlbmd0aDtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uQiA9IGRlZmluaXRpb25zQltpbmRleF07XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25BID09PSBkZWZpbml0aW9uQikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXF1YWxUbztcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJnZXREZWZpbml0aW9uIiwicHVzaCIsImdldERlcHRoIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZGVwdGgiLCJpc0xlYXN0IiwibGVhc3QiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGgiLCJncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzRXF1aXZhbGVudFRvIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMiLCJlcXVpdmFsZW50VG8iLCJjb21wYXJlRGVmaW5pdGlvbnMiLCJmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiY29udGV4dCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSIsImV2ZXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmcm9udCIsImdldFJ1bGUiLCJmcm9tUnVsZURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0EiLCJkZWZpbml0aW9uc0IiLCJlcXVhbFRvIiwiZGVmaW5pdGlvbnNBTGVuZ3RoIiwiZGVmaW5pdGlvbnNCTGVuZ3RoIiwiZmlyc3REZWZpbml0aW9uQiIsIm9mZnNldCIsImluZGV4T2YiLCJkZWZpbml0aW9uQSIsImluZGV4IiwiZGVmaW5pdGlvbkIiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiYmFja3dhcmRzRmluZCIsIm1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVOYW1lcyIsInNoaWZ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImJhY2t3YXJkc0V2ZXJ5IiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3lEQUxlO3FCQUU4QjswQkFDd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzSSxJQUFBLEFBQU1BLGtEQWdLbEIsQUFoS1k7Y0FBTUE7OEJBQUFBO2FBQUFBLGtDQUNQQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0I7OEJBRC9FTDs7a0NBRVhDLE1B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