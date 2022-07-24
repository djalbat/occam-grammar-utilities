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
var _ruleName = require("../../../utilities/ruleName");
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
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
        },
        {
            key: "removeTail",
            value: function removeTail() {
                var parts = this.getParts(), start = 1;
                parts.splice(start);
            //       deleteCount = Infinity
            //       leftRecursiveRuleName = this.getLeftRecursiveRuleName(),
            //       ruleName = leftRecursiveRuleName, ///
            //       epsilonRepeatedRuleName = epsilonRepeatedRuleNameFromRuleName(ruleName),
            //       epsilonRepeatedRuleNamePart = ruleNamePartFromRuleName(epsilonRepeatedRuleName);
            //
            // parts.splice(start, deleteCount, epsilonRepeatedRuleNamePart);
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
            key: "fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, directlyRepeatedRuleName) {
                var parts;
                var directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart); ///
                parts = indirectlyLeftRecursiveDefinition.getParts();
                parts = _toConsumableArray(parts).concat([
                    zeroOrMoreDirectlyRepeatedRuleNamePartsPart
                ]);
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts), leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
                indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
                return indirectlyLeftRecursiveDefinition;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName",
            value: function fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) {
                var leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(), leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts), indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
                var indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                var parts = _toConsumableArray(indirectlyLeftRecursiveDefinitionPartsHead).concat([
                    indirectlyRepeatedRuleNamePart
                ], _toConsumableArray(leftRecursiveDefinitionPartsTail));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBlcHNpbG9uUmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGNsb25lUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgaGVhZCwgdGFpbCwgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIHN1cGVyKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QodGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZTtcbiAgfVxuXG4gIGlzR3JlYXRlclRoYW4oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZW5ndGggPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVuZ3RoID4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgaXNMZWFzdCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpLFxuICAgICAgICAgIGxlYXN0ID0gKGxlbmd0aCA9PT0gMSk7XG5cbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cblxuICByZW1vdmVUYWlsKCkge1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRQYXJ0cygpLFxuICAgICAgICAgIHN0YXJ0ID0gMTtcblxuICAgIHBhcnRzLnNwbGljZShzdGFydCk7XG5cbiAgICAvLyAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5XG4gICAgLy8gICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAvLyAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgLy8gICAgICAgZXBzaWxvblJlcGVhdGVkUnVsZU5hbWUgPSBlcHNpbG9uUmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgLy8gICAgICAgZXBzaWxvblJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKGVwc2lsb25SZXBlYXRlZFJ1bGVOYW1lKTtcbiAgICAvL1xuICAgIC8vIHBhcnRzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVwc2lsb25SZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocGFydHMsIHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVEZWZpbml0aW9uQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKTtcblxuICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9ucyA9IFsgLi4ucmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIF07ICAvLy9cblxuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTsgIC8vL1xuXG5cbiAgICBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucygpO1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTsgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWwgPSB0YWlsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkID0gaGVhZChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyk7XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgbGV0IHBhcnRzID0gW1xuICAgICAgLi4uaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkLFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0LFxuICAgICAgLi4ubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0c1RhaWxcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250ID0gZnJvbnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250OyAvLy9cblxuICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7IC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxhc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgIGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGJhY2t3YXJkc0ZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IGxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lcy5zaGlmdCgpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2ggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IG1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoKSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICBjb25zdCBpbmRleCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5pbmRleE9mKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgIHN0YXJ0ID0gMCxcbiAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgYmFja3dhcmRzRXZlcnkocmVjdXJzaXZlRGVmaW5pdGlvbnMsIChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnVuc2hpZnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA8IDIpIHtcbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiUGFydHMiLCJoZWFkIiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwibGFzdCIsImZyb250IiwiZmlyc3QiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpc0dyZWF0ZXJUaGFuIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVuZ3RoIiwiZ3JlYXRlclRoYW5JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJpc0xlYXN0IiwibGVhc3QiLCJyZW1vdmVUYWlsIiwiZ2V0UGFydHMiLCJzdGFydCIsInNwbGljZSIsImZyb21QYXJ0c1J1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZm9yRWFjaCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQ29tcGxleCIsImdldFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzVGFpbCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHNIZWFkIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwicnVsZU5hbWVzIiwibWFwIiwic2hpZnQiLCJwdXNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwiZXZlcnkiLCJpbmRleCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJ0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInBvcCIsImluZGV4T2YiLCJkZWxldGVDb3VudCIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsaUNBQWlDOzs7NEJBYmhDLGVBQWU7eUJBQ04sV0FBVzt5REFFTixvQ0FBb0M7b0JBRS9CLHlCQUF5Qjt3QkFDZCw2QkFBNkI7cUJBQ1EsMEJBQTBCOzBCQUNvQiwrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0SyxJQUFNLEFBQUVDLG1CQUFtQixHQUFLQyxhQUFLLE1BQUEsQ0FBN0JELG1C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