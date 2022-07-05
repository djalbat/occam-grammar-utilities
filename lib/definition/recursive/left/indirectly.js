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
var head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
            key: "getLastLeftRecursiveDefinition",
            value: function getLastLeftRecursiveDefinition() {
                var lastLeftRecursiveDefinition = last(this.leftRecursiveDefinitions);
                return lastLeftRecursiveDefinition;
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
            key: "fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
                if (repeatedRuleName !== null) {
                    var repeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(repeatedRuleName);
                    indirectlyLeftRecursiveDefinitionPartsHead.push(repeatedRuleNamePart);
                }
                var parts = (0, _parts.mergeParts)(indirectlyLeftRecursiveDefinitionPartsHead, leftRecursiveDefinitionPartsTail), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBtZXJnZVBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgaGVhZCwgdGFpbCwgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIHN1cGVyKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldExhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGlzR3JlYXRlclRoYW4oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZW5ndGggPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVuZ3RoID4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgaXNMYXN0KCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBsYXN0ID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSk7XG5cbiAgICByZXR1cm4gbGFzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhwYXJ0cywgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsID0gdGFpbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCA9IGhlYWQoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpO1xuXG4gICAgaWYgKHJlcGVhdGVkUnVsZU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQucHVzaChyZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBtZXJnZVBhcnRzKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzSGVhZCwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udCA9IGZyb250KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9udDsgLy8vXG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpOyAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVOYW1lID09PSBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBtYXRjaExlZnRSZWN1cnNpdmVSdWxlTmFtZXMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCkge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgY29uc3QgaW5kZXggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuaW5kZXhPZihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICBzdGFydCA9IDAsXG4gICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPCAyKSB7XG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaGVhZCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImxhc3QiLCJmcm9udCIsImZpcnN0IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0V2ZXJ5IiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJpc0xhc3QiLCJmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZm9yRWFjaCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCIsImdldFJ1bGVOYW1lIiwiZ2V0UGFydHMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZFJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJtZXJnZVBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJldmVyeSIsImluZGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFZUUEsaUNBQWlDOzs7O3lCQVZ2QixXQUFXOzJDQUVOLG9DQUFvQztvQkFFL0IseUJBQXlCO3FCQUN1QiwwQkFBMEI7MEJBQ29CLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRLLElBQVFDLElBQUksR0FBOERDLFVBQWMsZUFBQSxDQUFoRkQsSUFBSSxFQUFFRSxJQUFJLEdBQXdERCxVQUFjLGVBQUEsQ0FBMUVDLElBQUksRUFBRUMsSUFBSSxHQUFrREYsVUFBYyxlQUFBLENBQXBFRSxJQUFJLEVBQUVDLEtBQUssR0FBMkNILFVBQWMsZUFBQSxDQUE5REcsS0FBSyxFQUFFQyxLQUFLLEdBQW9DSixVQUFjLGVBQUEsQ0FBdkRJLEtBQUssRUFBRUMsYUFBYSxHQUFxQkwsVUFBYyxlQUFBLENBQWhESyxhQUFhLEVBQUVDLGNBQWMsR0FBS04sVUFBYyxlQUFBLENBQWpDTSxjQUFjLEFBQW9CO0FBRTFFLElBQUEsQUFBTVIsaUNBQWlDLGlCQXNJbkQsQUF0SVk7OzthQUFNQSxpQ0FBaUMs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