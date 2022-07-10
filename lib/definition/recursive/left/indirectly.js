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
var _left = /*#__PURE__*/ _interopRequireDefault(require("../../../definition/recursive/left"));
var _part = require("../../../utilities/part");
var _parts = require("../../../utilities/parts");
var _definition = require("../../../utilities/definition");
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
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, push = _necessary.arrayUtilities.push, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
                var length = this.getLength(), indirectlyLeftRecursiveDefinitionLength = indirectlyLeftRecursiveDefinition.getLength(), greaterThanIndirectlyLeftRecursiveDefinition = length > indirectlyLeftRecursiveDefinitionLength;
                return greaterThanIndirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, length = leftRecursiveDefinitionsLength; ///
                return length;
            }
        },
        {
            key: "isLeast",
            value: function isLeast() {
                var length = this.getLength(), least = length === 1;
                return least;
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
                            leftRecursiveDefinitions.forEach(function(leftRecursiveDefinition) {
                                var leftRecursiveDefinitionComplex = (0, _definition.isDefinitionComplex)(leftRecursiveDefinition);
                                if (leftRecursiveDefinitionComplex) {
                                    var _$ruleName = leftRecursiveDefinition.getRuleName(), _$definition = leftRecursiveDefinition, definitionString = _$definition.asString();
                                    throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(_$ruleName, "' rule is complex and therefore cannot be rewritten."));
                                }
                            });
                            var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
                        }
                    }
                }
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition",
            value: function fromIndirectlyLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, directlyLeftRecursiveDefinition) {
                var parts;
                parts = directlyLeftRecursiveDefinition.getParts();
                var partsTail = tail(parts);
                parts = partsTail; ///
                var singlePart = (0, _parts.singlePartFromParts)(parts), part = singlePart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
                parts = indirectlyLeftRecursiveDefinition.getParts();
                parts = _toConsumableArray(parts).concat([
                    zeroOrMorePartsPart
                ]);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
                var parts = [];
                push(parts, indirectlyLeftRecursiveDefinitionPartsHead);
                if (repeatedRuleName !== null) {
                    var repeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName);
                    parts.push(repeatedRuleNamePart);
                }
                push(parts, leftRecursiveDefinitionPartsTail);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
                var leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                var leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);
                leftRecursiveDefinitions = leftRecursiveDefinitionsFront; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzLCBzaW5nbGVQYXJ0RnJvbVBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHMsXG4gICAgICB7IHB1c2gsIGhlYWQsIHRhaWwsIGxhc3QsIGZyb250LCBmaXJzdCwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lOyAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBpc0dyZWF0ZXJUaGFuKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlbmd0aCgpLFxuICAgICAgICAgIGdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlbmd0aCA+IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlbmd0aCk7XG5cbiAgICByZXR1cm4gZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGlzTGVhc3QoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBsZWFzdCA9IChsZW5ndGggPT09IDEpO1xuXG4gICAgcmV0dXJuIGxlYXN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0c1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHBhcnRzLCBydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5mb3JFYWNoKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICBjb25zdCBzaW5nbGVQYXJ0ID0gc2luZ2xlUGFydEZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IHNpbmdsZVBhcnQsICAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgbGV0IHBhcnRzID0gW107XG5cbiAgICBwdXNoKHBhcnRzLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQpO1xuXG4gICAgaWYgKHJlcGVhdGVkUnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0cy5wdXNoKHJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcbiAgICB9XG5cbiAgICBwdXNoKHBhcnRzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQgPSBmcm9udChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQ7IC8vL1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImhlYWQiLCJ0YWlsIiwibGFzdCIsImZyb250IiwiZmlyc3QiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJpc0xlYXN0IiwibGVhc3QiLCJmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImZvckVhY2giLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkNvbXBsZXgiLCJnZXRSdWxlTmFtZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0c1RhaWwiLCJzaW5nbGVQYXJ0Iiwic2luZ2xlUGFydEZyb21QYXJ0cyIsInBhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiY2xvbmVQYXJ0cyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250IiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVOYW1lcyIsIm1hcCIsInNoaWZ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwiZXZlcnkiLCJpbmRleCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJ0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInBvcCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vy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