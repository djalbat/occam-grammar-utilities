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
            key: "isGreaterThan",
            value: function isGreaterThan(indirectlyLeftRecursiveDefinition) {
                var depth = this.getDepth(), indirectlyLeftRecursiveDefinitionDepth = indirectlyLeftRecursiveDefinition.getDepth(), greaterThanIndirectlyLeftRecursiveDefinition = depth > indirectlyLeftRecursiveDefinitionDepth;
                return greaterThanIndirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(indirectlyLeftRecursiveDefinition) {
                var definitions = this.getDefinitions(), indirectlyLeftRecursiveDefinitionDefinitions = indirectlyLeftRecursiveDefinition.getDefinitions(), equalTo = compareDefinitions(definitions, indirectlyLeftRecursiveDefinitionDefinitions);
                return equalTo;
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
function compareDefinitions(definitionsA, definitionsB) {
    var equalTo = false;
    var definitionsALength = definitionsA.length, definitionsBLength = definitionsB.length;
    if (definitionsALength === definitionsBLength) {
        equalTo = definitionsA.every(function(definitionA, index) {
            var definitionB = definitionsB[index];
            if (definitionA === definitionB) {
                return true;
            }
        });
    }
    return equalTo;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0XCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgaXNHcmVhdGVyVGhhbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZXB0aCgpLFxuICAgICAgICAgIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlcHRoID4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGgpO1xuXG4gICAgcmV0dXJuIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZXF1YWxUbyA9IGNvbXBhcmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmdldERlZmluaXRpb24oKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICBkZWZpbml0aW9ucy5wdXNoKHRoaXMuZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggLSAxOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpc0xlYXN0KCkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGxlYXN0ID0gKGRlcHRoID09PSAwKTtcblxuICAgIHJldHVybiBsZWFzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uVW5hcnkxID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgYWxsIG9mIGl0cyBpbnRlcm1lZGlhdGUgZGVmaW5pdGlvbnMgYXJlIHVuYXJ5IGFuZCB0aGVyZWZvcmUgaXQgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgaXQgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkZWZpbml0aW9uLCBkaXJlY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IHJ1bGUsXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKTtcblxuICAgIGlmIChkaXJlY3RseSkge1xuICAgICAgcnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250ID0gZnJvbnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgcnVsZSA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250OyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnNBLCBkZWZpbml0aW9uc0IpIHtcbiAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbml0aW9uc0FMZW5ndGggPSBkZWZpbml0aW9uc0EubGVuZ3RoLFxuICAgICAgICBkZWZpbml0aW9uc0JMZW5ndGggPSBkZWZpbml0aW9uc0IubGVuZ3RoO1xuXG4gIGlmIChkZWZpbml0aW9uc0FMZW5ndGggPT09IGRlZmluaXRpb25zQkxlbmd0aCkge1xuICAgIGVxdWFsVG8gPSBkZWZpbml0aW9uc0EuZXZlcnkoKGRlZmluaXRpb25BLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkIgPSBkZWZpbml0aW9uc0JbaW5kZXhdO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkEgPT09IGRlZmluaXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVxdWFsVG87XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbnQiLCJmaXJzdCIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsInJ1bGUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVwdGgiLCJnZXREZXB0aCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0VxdWFsVG8iLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVmaW5pdGlvbnMiLCJlcXVhbFRvIiwiY29tcGFyZURlZmluaXRpb25zIiwibWFwIiwiZ2V0RGVmaW5pdGlvbiIsInB1c2giLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJpc0xlYXN0IiwibGVhc3QiLCJmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5IiwiZXZlcnkiLCJkZWZpbml0aW9uVW5hcnkxIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uIiwiZGlyZWN0bHkiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJpbmRleCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJ0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInBvcCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJkZWZpbml0aW9uc0EiLCJkZWZpbml0aW9uc0IiLCJkZWZpbml0aW9uc0FMZW5ndGgiLCJkZWZpbml0aW9uc0JMZW5ndGgi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