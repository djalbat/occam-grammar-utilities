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
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _left = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
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
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgaGVhZCwgdGFpbCwgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgaXNHcmVhdGVyVGhhbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZXB0aCgpLFxuICAgICAgICAgIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlcHRoID4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGgpO1xuXG4gICAgcmV0dXJuIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIC0gMTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChkZXB0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5MSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIGFsbCBvZiBpdHMgaW50ZXJtZWRpYXRlIGRlZmluaXRpb25zIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGVmaW5pdGlvbiwgZGlyZWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBydWxlLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBpZiAoZGlyZWN0bHkpIHtcbiAgICAgIHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIHJ1bGUgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8vIHN0YXRpYyBmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhwYXJ0cywgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAvLyAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gIC8vICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAvLyAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgLy8gfVxuXG4gIC8vIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSkge1xuICAvLyAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAvLyAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgLy8gICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAvLyAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuICAvL1xuICAvLyAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG4gIC8vXG4gIC8vICAgbGV0IHBhcnRzID0gW1xuICAvLyAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAvLyAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAvLyAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgLy8gICBdO1xuICAvL1xuICAvLyAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cbiAgLy9cbiAgLy8gICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gIC8vICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgLy8gICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG4gIC8vXG4gIC8vICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKTtcbiAgLy9cbiAgLy8gICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gIC8vXG4gIC8vICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQ7IC8vL1xuICAvL1xuICAvLyAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7IC8vL1xuICAvL1xuICAvLyAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwiaGVhZCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImxhc3QiLCJmcm9udCIsImZpcnN0IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0V2ZXJ5IiwicnVsZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImlzR3JlYXRlclRoYW4iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZXB0aCIsImdldERlcHRoIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGgiLCJncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImlzTGVhc3QiLCJsZWFzdCIsImZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkiLCJldmVyeSIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uVW5hcnkxIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREZWZpbml0aW9uIiwiZGlyZWN0bHkiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJwdXNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwiaW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFjUUEsaUNBQWlDOzs7NEJBWmhDLGVBQWU7eUJBQ04sV0FBVzt5REFFTixnQ0FBZ0M7b0JBRTNCLHNCQUFzQjtxQkFDMEIsdUJBQXVCOzBCQUMwQyw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0TCxJQUFNLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEVBQzdCRSxJQUFJLEdBQThEQyxVQUFjLGVBQUEsQ0FBaEZELElBQUksRUFBRUUsSUFBSSxHQUF3REQsVUFBYyxlQUFBLENBQTFFQyxJQUFJLEVBQUVDLElBQUksR0FBa0RGLFVBQWMsZUFBQSxDQUFwRUUsSUFBSSxFQUFFQyxLQUFLLEdBQTJDSCxVQUFjLGVBQUEsQ0FBOURHLEtBQUssRUFBRUMsS0FBSyxHQUFvQ0osVUFBYyxlQUFBLENBQXZESSxLQUFLLEVBQUVDLGFBQWEsR0FBcUJMLFVBQWMsZUFBQSxDQUFoREssYUFBYSxFQUFFQyxjQUFjLEdBQUtOLFVBQWMsZUFBQSxDQUFqQ00sY0FBYyxBQUFvQjtBQUUxRSxJQUFBLEFBQU1WLGlDQUFpQyxpQkFtTG5ELEFBbkxZ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