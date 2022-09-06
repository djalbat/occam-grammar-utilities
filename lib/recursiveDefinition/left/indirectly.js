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
            key: "fromIndirectlyLeftRecursiveDefinitionAndDefinition",
            value: function fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition) {
                var directly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var rule, leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                if (directly) {
                    rule = indirectlyLeftRecursiveDefinition.getRule();
                } else {
                    var lastLeftRecursiveDefinition = (0, _array.last)(leftRecursiveDefinitions), leftRecursiveDefinitionsFront = (0, _array.front)(leftRecursiveDefinitions);
                    rule = lastLeftRecursiveDefinition.getRule();
                    leftRecursiveDefinitions = leftRecursiveDefinitionsFront; ///
                }
                var recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition), leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition);
                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnRcIjtcblxuaW1wb3J0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIC0gMTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChkZXB0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVwdGggPiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCk7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGVxdWl2YWxlbnRUbyA9IGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW50VG87XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5MSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIGFsbCBvZiBpdHMgaW50ZXJtZWRpYXRlIGRlZmluaXRpb25zIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGVmaW5pdGlvbiwgZGlyZWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBydWxlLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBpZiAoZGlyZWN0bHkpIHtcbiAgICAgIHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIHJ1bGUgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnNBLCBkZWZpbml0aW9uc0IpIHtcbiAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbml0aW9uc0FMZW5ndGggPSBkZWZpbml0aW9uc0EubGVuZ3RoLFxuICAgICAgICBkZWZpbml0aW9uc0JMZW5ndGggPSBkZWZpbml0aW9uc0IubGVuZ3RoO1xuXG4gIGlmIChkZWZpbml0aW9uc0FMZW5ndGggPT09IGRlZmluaXRpb25zQkxlbmd0aCkge1xuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbkIgPSBmaXJzdChkZWZpbml0aW9uc0IpLFxuICAgICAgICAgIG9mZnNldCA9IGRlZmluaXRpb25zQS5pbmRleE9mKGZpcnN0RGVmaW5pdGlvbkIpO1xuXG4gICAgaWYgKG9mZnNldCA+IC0xKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBkZWZpbml0aW9uc0FMZW5ndGg7ICAvLy9cblxuICAgICAgZXF1YWxUbyA9IGRlZmluaXRpb25zQS5ldmVyeSgoZGVmaW5pdGlvbkEsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4ID0gKGxlbmd0aCArIGluZGV4IC0gb2Zmc2V0KSAlIGxlbmd0aDtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uQiA9IGRlZmluaXRpb25zQltpbmRleF07XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25BID09PSBkZWZpbml0aW9uQikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXF1YWxUbztcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJnZXREZWZpbml0aW9uIiwicHVzaCIsImdldERlcHRoIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZGVwdGgiLCJpc0xlYXN0IiwibGVhc3QiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGgiLCJncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzRXF1aXZhbGVudFRvIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMiLCJlcXVpdmFsZW50VG8iLCJjb21wYXJlRGVmaW5pdGlvbnMiLCJmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5IiwiZXZlcnkiLCJkZWZpbml0aW9uVW5hcnkxIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uIiwiZGlyZWN0bHkiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmcm9udCIsImRlZmluaXRpb25zQSIsImRlZmluaXRpb25zQiIsImVxdWFsVG8iLCJkZWZpbml0aW9uc0FMZW5ndGgiLCJkZWZpbml0aW9uc0JMZW5ndGgiLCJmaXJzdERlZmluaXRpb25CIiwib2Zmc2V0IiwiaW5kZXhPZiIsImRlZmluaXRpb25BIiwiaW5kZXgiLCJkZWZpbml0aW9uQiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJiYWNrd2FyZHNGaW5kIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiYmFja3dhcmRzRXZlcnkiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLGlDQUFpQzs7O3lEQUxsQixnQ0FBZ0M7cUJBRUYsdUJBQXVCOzBCQUNpRSw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2SyxJQUFBLEFBQU1BLGlDQUFpQyxpQkFnS25ELEFBaEtZO2NBQU1BLGlDQUFpQzs4QkFBakNBLGlDQUFpQzthQUFqQ0EsaUNBQWlDLENBQ3hDQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0I7OEJBRC9FTCxpQ0FBaUM7O2tDQUU1Q0MsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRTtRQUVwRSxNQUFLQyx3QkFBd0IsR0FBR0Esd0JBQXdCLENBQUM7OztpQkFKeENMLGlDQUFpQzs7WUFPcERNLEdBQTJCLEVBQTNCQSw2QkFBMkI7bUJBQTNCQSxTQUFBQSwyQkFBMkIsR0FBRztnQkFDNUIsT0FBTyxJQUFJLENBQUNELHdCQUF3QixDQUFDO1lBQ3ZDLENBQUM7OztZQUVERSxHQUEwQixFQUEx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