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
            key: "fromLeftRecursiveDefinitionsAndRepeatedRuleName",
            value: function fromLeftRecursiveDefinitionsAndRepeatedRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName) {
                debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBtZXJnZVBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgaGVhZCwgdGFpbCwgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIHN1cGVyKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldExhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGlzR3JlYXRlclRoYW4oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZW5ndGggPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVuZ3RoID4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgaXNMYXN0KCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBsYXN0ID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSk7XG5cbiAgICByZXR1cm4gbGFzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNSdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhwYXJ0cywgcnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pO1xuXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zID0gWyAuLi5yZWN1cnNpdmVEZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gXTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNBbmRSZXBlYXRlZFJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25CLCByZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIHJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCA9IHRhaWwobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQgPSBoZWFkKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKTtcblxuICAgIGlmIChyZXBlYXRlZFJ1bGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLnB1c2gocmVwZWF0ZWRSdWxlTmFtZVBhcnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gbWVyZ2VQYXJ0cyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsKSxcbiAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQgPSBmcm9udChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQ7IC8vL1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImhlYWQiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJsYXN0IiwiZnJvbnQiLCJmaXJzdCIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZ2V0TGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaXNHcmVhdGVyVGhhbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlbmd0aCIsImdldExlbmd0aCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlbmd0aCIsImdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwiaXNMYXN0IiwiZnJvbVBhcnRzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImZvckVhY2giLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkNvbXBsZXgiLCJnZXRSdWxlTmFtZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zQW5kUmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQiIsInJlcGVhdGVkUnVsZU5hbWUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRSZXBlYXRlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNUYWlsIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c0hlYWQiLCJyZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInB1c2giLCJtZXJnZVBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2giLCJldmVyeSIsImluZGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFZUUEsaUNBQWlDOzs7O3lCQVZ2QixXQUFXOzJDQUVOLG9DQUFvQztvQkFFL0IseUJBQXlCO3FCQUN1QiwwQkFBMEI7MEJBQ29CLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRLLElBQVFDLElBQUksR0FBOERDLFVBQWMsZUFBQSxDQUFoRkQsSUFBSSxFQUFFRSxJQUFJLEdBQXdERCxVQUFjLGVBQUEsQ0FBMUVDLElBQUksRUFB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