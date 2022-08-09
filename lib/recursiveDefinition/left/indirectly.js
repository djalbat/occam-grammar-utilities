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
                var height = this.getHeight(), indirectlyLeftRecursiveDefinitionHeight = indirectlyLeftRecursiveDefinition.getHeight(), greaterThanIndirectlyLeftRecursiveDefinition = height > indirectlyLeftRecursiveDefinitionHeight;
                return greaterThanIndirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, height = leftRecursiveDefinitionsLength - 1; ///
                return height;
            }
        },
        {
            key: "isLowest",
            value: function isLowest() {
                var height = this.getHeight(), lowest = height === 0;
                return lowest;
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
                        var leftRecursiveDefinition = _left.default.fromRuleNameAndDefinition(ruleName, definition);
                        recursiveDefinitions = _toConsumableArray(recursiveDefinitions).concat([
                            leftRecursiveDefinition
                        ]); ///
                        var leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);
                        if (leftRecursiveDefinitions !== null) {
                            var definitionUnary = (0, _definition.isDefinitionUnary)(definition), definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionUnary) {
                                var leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every(function(leftRecursiveDefinition) {
                                    var leftRecursiveDefinitionUnary = (0, _definition.isDefinitionUnary)(leftRecursiveDefinition);
                                    if (leftRecursiveDefinitionUnary) {
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
                                var leftRecursiveDefinitionComplex = (0, _definition.isDefinitionComplex)(leftRecursiveDefinition);
                                if (leftRecursiveDefinitionComplex) {
                                    var ruleName = leftRecursiveDefinition.getRuleName(), _$definition = leftRecursiveDefinition, definitionString = _$definition.asString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cywgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgaGVhZCwgdGFpbCwgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgaXNHcmVhdGVyVGhhbihpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkhlaWdodCA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChoZWlnaHQgPiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25IZWlnaHQpO1xuXG4gICAgcmV0dXJuIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBoZWlnaHQgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggLSAxOyAgLy8vXG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgaXNMb3dlc3QoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBsb3dlc3QgPSAoaGVpZ2h0ID09PSAwKTtcblxuICAgIHJldHVybiBsb3dlc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYW5kIGFsbCBvZiBpdHMgaW50ZXJtZWRpYXRlIGRlZmluaXRpb25zIGFyZSB1bmFyeSBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGl0IGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICAvLyBzdGF0aWMgZnJvbVBhcnRzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocGFydHMsIHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgLy8gICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAvLyAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgLy8gICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuICAvL1xuICAvLyAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIC8vIH1cblxuICAvLyBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSkge1xuICAvLyAgIGxldCBwYXJ0cztcbiAgLy9cbiAgLy8gICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gIC8vICAgICAgICAgemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQpOyAgLy8vXG4gIC8vXG4gIC8vXG4gIC8vICAgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcbiAgLy9cbiAgLy8gICBwYXJ0cyA9IFsgLy8vXG4gIC8vICAgICAuLi5wYXJ0cyxcbiAgLy8gICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnRcbiAgLy8gICBdO1xuICAvL1xuICAvLyAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cbiAgLy9cbiAgLy8gICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAvLyAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gIC8vICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAvLyAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKTtcbiAgLy9cbiAgLy8gICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAvLy9cbiAgLy9cbiAgLy8gICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICAvLyB9XG5cbiAgLy8gc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gIC8vICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gIC8vICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAvLyAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gIC8vICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkID0gaGVhZChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7XG4gIC8vXG4gIC8vICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTtcbiAgLy9cbiAgLy8gICBsZXQgcGFydHMgPSBbXG4gIC8vICAgICAuLi5pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQsXG4gIC8vICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQsXG4gIC8vICAgICAuLi5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbFxuICAvLyAgIF07XG4gIC8vXG4gIC8vICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuICAvL1xuICAvLyAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgLy8gICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAvLyAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcbiAgLy9cbiAgLy8gICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuICAvL1xuICAvLyAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250ID0gZnJvbnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgLy9cbiAgLy8gICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgLy8vXG4gIC8vXG4gIC8vICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgIGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGJhY2t3YXJkc0ZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lcy5zaGlmdCgpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoKSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICBjb25zdCBpbmRleCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5pbmRleE9mKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgIHN0YXJ0ID0gMCxcbiAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgYmFja3dhcmRzRXZlcnkocmVjdXJzaXZlRGVmaW5pdGlvbnMsIChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnVuc2hpZnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA8IDIpIHtcbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJoZWFkIiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwibGFzdCIsImZyb250IiwiZmlyc3QiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJydWxlIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaXNHcmVhdGVyVGhhbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImhlaWdodCIsImdldEhlaWdodCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkhlaWdodCIsImdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiaXNMb3dlc3QiLCJsb3dlc3QiLCJmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSIsImV2ZXJ5IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZm9yRWFjaCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJwdXNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwiaW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zIiwidHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJwb3AiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFjUUEsaUNBQWlDOzs7NEJBWmhDLGVBQWU7eUJBQ04sV0FBVzt5REFFTixnQ0FBZ0M7b0JBRTNCLHNCQUFzQjtxQkFDMEIsdUJBQXVCOzBCQUMwQyw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0TCxJQUFNLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1CQUFtQixBQUFVLEVBQzdCRSxJQUFJLEdBQThEQyxVQUFjLGVBQUEsQ0FBaEZELElBQUksRUFBRUUsSUFBSSxHQUF3REQsVUFBYyxlQUFBLENBQTFFQyxJQUFJLEVBQUVDLElBQUksR0FBa0RGLFVBQWMsZUFBQSxDQUFwRUUsSUFBSSxFQUFFQyxLQUFLLEdBQTJDSCxVQUFjLGVBQUEsQ0FBOURHLEtBQUssRUFBRUMsS0FBSyxHQUFvQ0osVUFBYyxlQUFBLENBQXZESSxLQUFLLEVBQUVDLGFBQWEsR0FBcUJMLFVBQWMsZUFBQSxDQUFoREssYUFBYSxFQUFFQyxjQUFjLEdBQUtOLFVBQWMsZUFBQSxDQUFqQ00sY0FBYyxBQUFvQjtBQUUxRSxJQUFBLEFBQU1WLGlDQUFpQyxpQkFxTG5ELEFBckxZOzs7YUFBTUEsaUNBQWlDLENBQ3hDVyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0I7OztrQ0FDMUZKLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUU7UUFFcEUsTUFBS0Msd0JBQXdCLEdBQUdBLHdCQUF3QixDQUFDOzs7OztZQUczREMsR0FBMkIsRUFBM0JBLDZCQUEyQjttQkFBM0JBLFNBQUFBLDJCQUEyQixHQUFHO2dCQUM1QixPQUFPLElBQUksQ0FBQ0Qsd0JBQXdCLENBQUM7YUFDdEM7OztZQUVERSxHQUEwQixFQUExQkEsNEJBQTBCO21CQUExQkEsU0FBQUEsMEJBQTBCLEdBQUc7Z0JBQzNCLElBQU1DLDJCQUEyQixHQUFHWixJQUFJLENBQUMsSUFBSSxDQUFDUyx3QkFBd0IsQ0FBQyxFQUNqRUksdUJBQXVCLEdBQUdELDJCQUEyQixBQUFDLEVBQUUsR0FBRztnQkFFakUsT0FBT0MsdUJBQXVCLENBQUM7YUFDaEM7OztZQUVEQyxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pCLElBQU1OLHNCQUFzQixHQUFHLElBQUksQ0FBQ08seUJBQXlCLEVBQUUsRUFDekRDLDBCQUEwQixHQUFHZCxLQUFLLENBQUNNLHNCQUFzQixDQUFDLEVBQzFEUyxxQkFBcUIsR0FBR0QsMEJBQTBCLEFBQUMsRUFBQyxHQUFHO2dCQUU3RCxPQUFPQyxxQkFBcUIsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxDQUFDQyxpQ0FBaUMsRUFBRTtnQkFDL0MsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFLEVBQ3pCQyx1Q0FBdUMsR0FBR0gsaUNBQWlDLENBQUNFLFNBQVMsRUFBRSxFQUN2RkUsNENBQTRDLEdBQUlILE1BQU0sR0FBR0UsdUNBQXVDLEFBQUMsQUFBQztnQkFFeEcsT0FBT0MsNENBQTRDLENBQUM7YUFDckQ7OztZQUVERixHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixJQUFNRyw4QkFBOEIsR0FBRyxJQUFJLENBQUNmLHdCQUF3QixDQUFDZ0IsTUFBTSxFQUNyRUwsTUFBTSxHQUFHSSw4QkFBOEIsR0FBRyxDQUFDLEFBQUMsRUFBRSxHQUFHO2dCQUV2RCxPQUFPSixNQUFNLENBQUM7YUFDZjs7O1lBRURNLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1OLE1BQU0sR0FBRyxJQUFJLENBQUNDLFNBQVMsRUFBRSxFQUN6Qk0sTUFBTSxHQUFJUCxNQUFNLEtBQUssQ0FBQyxBQUFDLEFBQUM7Z0JBRTlCLE9BQU9PLE1BQU0sQ0FBQzthQUNmOzs7O1lBRU1DLEdBQXlDLEVBQXpDQSwyQ0FBeUM7bUJBQWhELFNBQU9BLHlDQUF5QyxDQUFDdkIsSUFBSSxFQUFFQyxVQUFVLEVBQUV1QixvQkFBb0IsRUFBRTtnQkFDdkYsSUFBSVYsaUNBQWlDLEdBQUcsSUFBSSxBQUFDO2dCQUU3QyxJQUFNVyxRQUFRLEdBQUd6QixJQUFJLENBQUMwQixPQUFPLEVBQUUsRUFDekJDLHVCQUF1QixHQUFHQyxJQUFBQSxXQUF5QiwwQkFBQSxFQUFDM0IsVUFBVSxDQUFDLEFBQUM7Z0JBRXRFLElBQUkwQix1QkFBdUIsRUFBRTtvQkFDM0IsSUFBTXhCLHNCQUFzQixHQUFHMEIsSUFBQUEsV0FBb0MscUNBQUEsRUFBQzVCLFVBQVUsQ0FBQyxFQUN6RVUsMEJBQTBCLEdBQUdkLEtBQUssQ0FBQ00sc0JBQXNCLENBQUMsRUFDMURTLHFCQUFxQixHQUFHRCwwQkFBMEIsRUFDbERtQiw2QkFBNkIsR0FBSUwsUUFBUSxLQUFLYixxQkFBcUIsQUFBQyxBQUFDO29CQUUzRSxJQUFJLENBQUNrQiw2QkFBNkIsRUFBRTt3QkFDbEMsSUFBTXRCLHVCQUF1QixHQUFHdUIsS0FBdUIsUUFBQSxDQUFDQyx5QkFBeUIsQ0FBQ1AsUUFBUSxFQUFFeEIsVUFBVSxDQUFDLEFBQUM7d0JBRXhHdUIsb0JBQW9CLEdBQUcsQUFBRSxtQkFBR0Esb0JBQW9CLENBQXBCQSxRQUFMOzRCQUEyQmhCLHVCQUF1Qjt5QkFBRSxDQUFBLENBQUMsQ0FBRSxHQUFHO3dCQUVqRixJQUFNSix3QkFBd0IsR0FBRzZCLDRCQUE0QixDQUFDVCxvQkFBb0IsQ0FBQyxBQUFDO3dCQUVwRixJQUFJcEIsd0JBQXdCLEtBQUssSUFBSSxFQUFFOzRCQUNyQyxJQUFNOEIsZUFBZSxHQUFHQyxJQUFBQSxXQUFpQixrQkFBQSxFQUFDbEMsVUFBVSxDQUFDLEVBQy9DbUMsaUJBQWlCLEdBQUdDLElBQUFBLFdBQW1CLG9CQUFBLEVBQUNwQyxVQUFVLENBQUMsQUFBQzs0QkFFMUQsSUFBSWlDLGVBQWUsRUFBRTtnQ0FDbkIsSUFBTUksNkJBQTZCLEdBQUdsQyx3QkFBd0IsQ0FBQ21DLEtBQUssQ0FBQyxTQUFDL0IsdUJBQXVCLEVBQUs7b0NBQ2hHLElBQU1nQyw0QkFBNEIsR0FBR0wsSUFBQUEsV0FBaUIsa0JBQUEsRUFBQzNCLHVCQUF1QixDQUFDLEFBQUM7b0NBRWhGLElBQUlnQyw0QkFBNEIsRUFBRTt3Q0FDaEMsT0FBTyxJQUFJLENBQUM7cUNBQ2I7aUNBQ0YsQ0FBQyxBQUFDO2dDQUVILElBQUlGLDZCQUE2QixFQUFFO29DQUNqQyxJQUFNRyxnQkFBZ0IsR0FBR3hDLFVBQVUsQ0FBQ3lDLFFBQVEsRUFBRSxBQUFDO29DQUUvQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxBQUFDLE9BQUssQ0FBb0VsQixNQUFRLENBQTFFZ0IsZ0JBQWdCLEVBQUMsaURBQStDLENBQVcsQ0FBQSxNQUE4RixDQUF2R2hCLFFBQVEsRUFBQyxnR0FBOEYsQ0FBQyxDQUFDLENBQUM7aUNBQ3JNOzZCQUNGOzRCQUVELElBQUlXLGlCQUFpQixFQUFFO2dDQUNyQixJQUFNSyxpQkFBZ0IsR0FBR3hDLFVBQVUsQ0FBQ3lDLFFBQVEsRUFBRSxBQUFDO2dDQUUvQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxBQUFDLE9BQUssQ0FBb0VsQixNQUFRLENBQTFFZ0IsaUJBQWdCLEVBQUMsaURBQStDLENBQVcsQ0FBQSxNQUF1RCxDQUFoRWhCLFFBQVEsRUFBQyx5REFBdUQsQ0FBQyxDQUFDLENBQUM7NkJBQzlKOzRCQUVEckIsd0JBQXdCLENBQUN3QyxPQUFPLENBQUMsU0FBQ3BDLHVCQUF1QixFQUFLO2dDQUM1RCxJQUFNcUMsOEJBQThCLEdBQUdSLElBQUFBLFdBQW1CLG9CQUFBLEVBQUM3Qix1QkFBdUIsQ0FBQyxBQUFDO2dDQUVwRixJQUFJcUMsOEJBQThCLEVBQUU7b0NBQ2xDLElBQU1wQixRQUFRLEdBQUdqQix1QkFBdUIsQ0FBQ3NDLFdBQVcsRUFBRSxFQUNoRDdDLFlBQVUsR0FBR08sdUJBQXVCLEVBQ3BDaUMsZ0JBQWdCLEdBQUd4QyxZQUFVLENBQUN5QyxRQUFRLEVBQUUsQUFBQztvQ0FFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxPQUFLLENBQW9FbEIsTUFBUSxDQUExRWdCLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBb0QsQ0FBN0RoQixRQUFRLEVBQUMsc0RBQW9ELENBQUMsQ0FBQyxDQUFDO2lDQUMzSjs2QkFDRixDQUFDLENBQUM7NEJBRUgsSUFBTXZCLGtCQUFrQixHQUFHNkMsSUFBQUEsV0FBZ0MsaUNBQUEsRUFBQzlDLFVBQVUsQ0FBQyxBQUFDOzRCQUV4RWEsaUNBQWlDLEdBQUcsSUFBSXpCLGlDQUFpQyxDQUFDVyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx3QkFBd0IsQ0FBQyxDQUFDO3lCQUNuSztxQkFDRjtpQkFDRjtnQkFFRCxPQUFPVSxpQ0FBaUMsQ0FBQzthQUMxQzs7OztDQWtFRixDQW5MOERpQixLQUF1QixRQUFBLENBbUxyRjtBQUVELFNBQVNpQiwyQkFBMkIsQ0FBQzVDLHdCQUF3QixFQUFFO0lBQzdELElBQU1HLDJCQUEyQixHQUFHWixJQUFJLENBQUNTLHdCQUF3QixDQUFDLEVBQzVERCxzQkFBc0IsR0FBR0ksMkJBQTJCLENBQUNHLHlCQUF5QixFQUFFLEVBQ2hGQywwQkFBMEIsR0FBR2QsS0FBSyxDQUFDTSxzQkFBc0IsQ0FBQyxFQUMxRDhDLHNCQUFzQixHQUFHdEMsMEJBQTBCLEVBQ25ESCx1QkFBdUIsR0FBR1YsYUFBYSxDQUFDTSx3QkFBd0IsRUFBRSxTQUFDSSx1QkFBdUIsRUFBSztRQUM3RixJQUFNaUIsUUFBUSxHQUFHakIsdUJBQXVCLENBQUNzQyxXQUFXLEVBQUUsQUFBQztRQUV2RCxJQUFJckIsUUFBUSxLQUFLd0Isc0JBQXNCLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUM7SUFFakIsT0FBT3pDLHVCQUF1QixDQUFDO0NBQ2hDO0FBRUQsU0FBUzBDLDJCQUEyQixDQUFDOUMsd0JBQXdCLEVBQUU7SUFDN0QsSUFBTStDLFNBQVMsR0FBRy9DLHdCQUF3QixDQUFDZ0QsR0FBRyxDQUFDLFNBQUM1Qyx1QkFBdUIsRUFBSztRQUNwRSxJQUFNaUIsUUFBUSxHQUFHakIsdUJBQXVCLENBQUNzQyxXQUFXLEVBQUUsQUFBQztRQUV2RCxPQUFPckIsUUFBUSxDQUFDO0tBQ2pCLENBQUMsRUFDRkEsUUFBUSxHQUFHMEIsU0FBUyxDQUFDRSxLQUFLLEVBQUUsQUFBQztJQUVuQ0YsU0FBUyxDQUFDRyxJQUFJLENBQUM3QixRQUFRLENBQUMsQ0FBQztJQUV6QixJQUFNOEIsMkJBQTJCLEdBQUduRCx3QkFBd0IsQ0FBQ21DLEtBQUssQ0FBQyxTQUFDL0IsdUJBQXVCLEVBQUVnRCxLQUFLLEVBQUs7UUFDckcsSUFBTS9CLFFBQVEsR0FBRzBCLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDLEVBQzNCckQsc0JBQXNCLEdBQUdLLHVCQUF1QixDQUFDRSx5QkFBeUIsRUFBRSxFQUM1RStDLHNDQUFzQyxHQUFHdEQsc0JBQXNCLENBQUN1RCxRQUFRLENBQUNqQyxRQUFRLENBQUMsQUFBQztRQUV6RixJQUFJZ0Msc0NBQXNDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQUFBQztJQUVILE9BQU9GLDJCQUEyQixDQUFDO0NBQ3BDO0FBRUQsU0FBU3RCLDRCQUE0QixDQUFDVCxvQkFBb0IsRUFBRTtJQUMxRCxJQUFJcEIsd0JBQXdCLEdBQUd1RCxnREFBZ0QsQ0FBQ25DLG9CQUFvQixDQUFDLEFBQUM7SUFFdEcsSUFBSXBCLHdCQUF3QixLQUFLLElBQUksRUFBRTtRQUNyQyxJQUFNSSx1QkFBdUIsR0FBR3dDLDJCQUEyQixDQUFDNUMsd0JBQXdCLENBQUMsQUFBQztRQUV0RixJQUFJSSx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7WUFDcENvRCxnQ0FBZ0MsQ0FBQ3hELHdCQUF3QixFQUFFSSx1QkFBdUIsQ0FBQyxDQUFDO1lBRXBGLElBQU0rQywyQkFBMkIsR0FBR0wsMkJBQTJCLENBQUM5Qyx3QkFBd0IsQ0FBQyxBQUFDO1lBRTFGLElBQUltRCwyQkFBMkIsRUFBRTtnQkFDL0JuRCx3QkFBd0IsQ0FBQ3lELEdBQUcsRUFBRSxDQUFDO2FBQ2hDLE1BQU07Z0JBQ0x6RCx3QkFBd0IsR0FBRyxJQUFJLENBQUM7YUFDakM7U0FDRixNQUFNO1lBQ0xBLHdCQUF3QixHQUFHLElBQUksQ0FBQztTQUNqQztLQUNGO0lBRUQsT0FBT0Esd0JBQXdCLENBQUM7Q0FDakM7QUFFRCxTQUFTd0QsZ0NBQWdDLENBQUN4RCx3QkFBd0IsRUFBRUksdUJBQXVCLEVBQUU7SUFDM0YsSUFBTWdELEtBQUssR0FBR3BELHdCQUF3QixDQUFDMEQsT0FBTyxDQUFDdEQsdUJBQXVCLENBQUMsRUFDbkV1RCxLQUFLLEdBQUcsQ0FBQyxFQUNUQyxXQUFXLEdBQUdSLEtBQUssQUFBQyxFQUFFLEdBQUc7SUFFN0JwRCx3QkFBd0IsQ0FBQzZELE1BQU0sQ0FBQ0YsS0FBSyxFQUFFQyxXQUFXLENBQUMsQ0FBQztDQUNyRDtBQUVELFNBQVNMLGdEQUFnRCxDQUFDbkMsb0JBQW9CLEVBQUU7SUFDOUUsSUFBSXBCLHdCQUF3QixHQUFHLEVBQUUsQUFBQztJQUVsQ0wsY0FBYyxDQUFDeUIsb0JBQW9CLEVBQUUsU0FBQzBDLG1CQUFtQixFQUFLO1FBQzVELElBQU1DLDBDQUEwQyxHQUFJRCxBQUFtQixXQUFZbkMsQ0FBL0JtQyxtQkFBbUIsRUFBWW5DLEtBQXVCLFFBQUEsQ0FBQSxBQUFDLEFBQUM7UUFFNUcsSUFBSW9DLDBDQUEwQyxFQUFFO1lBQzlDLElBQU0zRCx1QkFBdUIsR0FBRzBELG1CQUFtQixBQUFDLEVBQUUsR0FBRztZQUV6RDlELHdCQUF3QixDQUFDZ0UsT0FBTyxDQUFDNUQsdUJBQXVCLENBQUMsQ0FBQztZQUUxRCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBTVcsOEJBQThCLEdBQUdmLHdCQUF3QixDQUFDZ0IsTUFBTSxBQUFDO0lBRXZFLElBQUlELDhCQUE4QixHQUFHLENBQUMsRUFBRTtRQUN0Q2Ysd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDO0lBRUQsT0FBT0Esd0JBQXdCLENBQUM7Q0FDakMifQ==