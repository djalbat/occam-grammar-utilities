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
var _necessary = require("necessary");
var _left = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left"));
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
var last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
                var lastLeftRecursiveDefinition = last(this.leftRecursiveDefinitions), leftRecursiveDefinition = lastLeftRecursiveDefinition; ///
                return leftRecursiveDefinition;
            }
        },
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
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
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
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
                    var lastLeftRecursiveDefinition = last(leftRecursiveDefinitions), leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);
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
        var firstDefinitionB = first(definitionsB), offset = definitionsA.indexOf(firstDefinitionB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0XCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIC0gMTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChkZXB0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlcHRoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVwdGggPiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCk7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0VxdWl2YWxlbnRUbyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGVxdWl2YWxlbnRUbyA9IGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW50VG87XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5MSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIGFsbCBvZiBpdHMgaW50ZXJtZWRpYXRlIGRlZmluaXRpb25zIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGVmaW5pdGlvbiwgZGlyZWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBydWxlLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBpZiAoZGlyZWN0bHkpIHtcbiAgICAgIHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIHJ1bGUgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnNBLCBkZWZpbml0aW9uc0IpIHtcbiAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbml0aW9uc0FMZW5ndGggPSBkZWZpbml0aW9uc0EubGVuZ3RoLFxuICAgICAgICBkZWZpbml0aW9uc0JMZW5ndGggPSBkZWZpbml0aW9uc0IubGVuZ3RoO1xuXG4gIGlmIChkZWZpbml0aW9uc0FMZW5ndGggPT09IGRlZmluaXRpb25zQkxlbmd0aCkge1xuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbkIgPSBmaXJzdChkZWZpbml0aW9uc0IpLFxuICAgICAgICAgIG9mZnNldCA9IGRlZmluaXRpb25zQS5pbmRleE9mKGZpcnN0RGVmaW5pdGlvbkIpO1xuXG4gICAgaWYgKG9mZnNldCA+IC0xKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBkZWZpbml0aW9uc0FMZW5ndGg7ICAvLy9cblxuICAgICAgZXF1YWxUbyA9IGRlZmluaXRpb25zQS5ldmVyeSgoZGVmaW5pdGlvbkEsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4ID0gKGxlbmd0aCArIGluZGV4IC0gb2Zmc2V0KSAlIGxlbmd0aDtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uQiA9IGRlZmluaXRpb25zQltpbmRleF07XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25BID09PSBkZWZpbml0aW9uQikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXF1YWxUbztcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbnQiLCJmaXJzdCIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsInJ1bGUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zIiwibWFwIiwiZ2V0RGVmaW5pdGlvbiIsInB1c2giLCJnZXREZXB0aCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRlcHRoIiwiaXNMZWFzdCIsImxlYXN0IiwiaXNHcmVhdGVyVGhhbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0VxdWl2YWxlbnRUbyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb25zIiwiZXF1aXZhbGVudFRvIiwiY29tcGFyZURlZmluaXRpb25zIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZUFuZERlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSIsImV2ZXJ5IiwiZGVmaW5pdGlvblVuYXJ5MSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZm9yRWFjaCIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsImRpcmVjdGx5IiwiZ2V0UnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250IiwiZGVmaW5pdGlvbnNBIiwiZGVmaW5pdGlvbnNCIiwiZXF1YWxUbyIsImRlZmluaXRpb25zQUxlbmd0aCIsImRlZmluaXRpb25zQkxlbmd0aCIsImZpcnN0RGVmaW5pdGlvbkIiLCJvZmZzZXQiLCJpbmRleE9mIiwiZGVmaW5pdGlvbkEiLCJpbmRleCIsImRlZmluaXRpb25CIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVOYW1lcyIsInNoaWZ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFVUUEsaUNBQWlDOzs7eUJBUnZCLFdBQVc7eURBRU4sZ0NBQWdDOzBCQUVzRiw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0TCxJQUFRQyxJQUFJLEdBQWtEQyxVQUFjLGVBQUEsQ0FBcEVELElBQUksRUFBRUUsS0FBSyxHQUEyQ0QsVUFBYyxlQUFBLENBQTlEQyxLQUFLLEVBQUVDLEtBQUssR0FBb0NGLFVBQWMsZUFBQSxDQUF2REUsS0FBSyxFQUFFQyxhQUFhLEdBQXFCSCxVQUFjLGVBQUEsQ0FBaERHLGFBQWEsRUFBRUMsY0FBYyxHQUFLSixVQUFjLGVBQUEsQ0FBakNJLGNBQWMsQUFBb0I7QUFFOUQsSUFBQSxBQUFNTixpQ0FBaUMsaUJBZ0tuRCxBQWhLWTs7O2FBQU1BLGlDQUFpQyxDQUN4Q08sSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRUMsd0JBQXdCOzs7a0NBQzFG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