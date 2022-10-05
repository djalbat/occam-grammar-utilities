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
            value: function fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) {
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
                            var definitionUnary = (0, _definition.isDefinitionUnary)(definition), definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionUnary) {
                                var leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every(function(leftRecursiveDefinition) {
                                    var _$definition = leftRecursiveDefinition.getDefinition(), definitionUnary1 = (0, _definition.isDefinitionUnary)(_$definition);
                                    if (definitionUnary1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcblxuaW1wb3J0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIC0gMTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChkZXB0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVwdGggPiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCk7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGVxdWl2YWxlbnRUbyA9IGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW50VG87XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5MSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIGFsbCBvZiBpdHMgaW50ZXJtZWRpYXRlIGRlZmluaXRpb25zIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCBydWxlID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250OyAgLy8vXG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9uc0EsIGRlZmluaXRpb25zQikge1xuICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zQUxlbmd0aCA9IGRlZmluaXRpb25zQS5sZW5ndGgsXG4gICAgICAgIGRlZmluaXRpb25zQkxlbmd0aCA9IGRlZmluaXRpb25zQi5sZW5ndGg7XG5cbiAgaWYgKGRlZmluaXRpb25zQUxlbmd0aCA9PT0gZGVmaW5pdGlvbnNCTGVuZ3RoKSB7XG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uQiA9IGZpcnN0KGRlZmluaXRpb25zQiksXG4gICAgICAgICAgb2Zmc2V0ID0gZGVmaW5pdGlvbnNBLmluZGV4T2YoZmlyc3REZWZpbml0aW9uQik7XG5cbiAgICBpZiAob2Zmc2V0ID4gLTEpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGRlZmluaXRpb25zQUxlbmd0aDsgIC8vL1xuXG4gICAgICBlcXVhbFRvID0gZGVmaW5pdGlvbnNBLmV2ZXJ5KChkZWZpbml0aW9uQSwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5kZXggPSAobGVuZ3RoICsgaW5kZXggLSBvZmZzZXQpICUgbGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25CID0gZGVmaW5pdGlvbnNCW2luZGV4XTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkEgPT09IGRlZmluaXRpb25CKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbFRvO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgIGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGJhY2t3YXJkc0ZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lcy5zaGlmdCgpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoKSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICBjb25zdCBpbmRleCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5pbmRleE9mKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgIHN0YXJ0ID0gMCxcbiAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgYmFja3dhcmRzRXZlcnkocmVjdXJzaXZlRGVmaW5pdGlvbnMsIChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnVuc2hpZnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA8IDIpIHtcbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3QiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImdldERlZmluaXRpb24iLCJwdXNoIiwiZ2V0RGVwdGgiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZXB0aCIsImlzTGVhc3QiLCJsZWFzdCIsImlzR3JlYXRlclRoYW4iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCIsImdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNFcXVpdmFsZW50VG8iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyIsImVxdWl2YWxlbnRUbyIsImNvbXBhcmVEZWZpbml0aW9ucyIsImZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkiLCJldmVyeSIsImRlZmluaXRpb25VbmFyeTEiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImZvckVhY2giLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCIsImZyb250IiwiZ2V0UnVsZSIsImZyb21SdWxlRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25zQSIsImRlZmluaXRpb25zQiIsImVxdWFsVG8iLCJkZWZpbml0aW9uc0FMZW5ndGgiLCJkZWZpbml0aW9uc0JMZW5ndGgiLCJmaXJzdERlZmluaXRpb25CIiwib2Zmc2V0IiwiaW5kZXhPZiIsImRlZmluaXRpb25BIiwiaW5kZXgiLCJkZWZpbml0aW9uQiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJiYWNrd2FyZHNGaW5kIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiYmFja3dhcmRzRXZlcnkiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7eURBTGU7cUJBRThCOzBCQUN3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNJLElBQUEsQUFBTUEsa0RBZ0tsQixBQWhLWTtjQUFNQTs4QkFBQUE7YUFBQUEsa0NBQ1BDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHdCQUF3Qjs4QkFEL0VMOztrQ0FFWEMsTUFBTUMsWUFBWUMsb0JBQW9C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