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
var _left = /*#__PURE__*/ _interop_require_default(require("../../recursiveDefinition/left"));
var _definition = require("../../utilities/definition");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(IndirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _create_super(IndirectlyLeftRecursiveDefinition);
    function IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions) {
        _class_call_check(this, IndirectlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, rule, definition, recursiveRuleNames, leftRecursiveRuleNames);
        _this.leftRecursiveDefinitions = leftRecursiveDefinitions;
        return _this;
    }
    _create_class(IndirectlyLeftRecursiveDefinition, [
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
                var leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length, depth = leftRecursiveDefinitionsLength; ///
                return depth;
            }
        },
        {
            key: "isLeast",
            value: function isLeast() {
                var depth = this.getDepth(), least = depth === 1;
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
            value: function fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions, context) {
                var indirectlyLeftRecursiveDefinition = null;
                var ruleName = rule.getName(), definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), leftRecursiveRuleName = firstLeftRecursiveRuleName, ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                    if (!ruleNameLeftRecursiveRuleName) {
                        var leftRecursiveDefinition = _left.default.fromRuleAndDefinition(rule, definition);
                        recursiveDefinitions = _to_consumable_array(recursiveDefinitions).concat([
                            leftRecursiveDefinition
                        ]); ///
                        var leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);
                        if (leftRecursiveDefinitions !== null) {
                            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                var definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore it cannot be rewritten."));
                            }
                            var definitionEffectivelyUnary = (0, _definition.isDefinitionEffectivelyUnary)(definition, context);
                            if (definitionEffectivelyUnary) {
                                var leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every(function(leftRecursiveDefinition) {
                                    var _$definition = leftRecursiveDefinition.getDefinition(), definitionEffectivelyUnary = (0, _definition.isDefinitionEffectivelyUnary)(_$definition, context);
                                    if (definitionEffectivelyUnary) {
                                        return true;
                                    }
                                });
                                if (leftRecursiveDefinitionsUnary) {
                                    var definitionString1 = definition.asString();
                                    throw new Error("The '".concat(definitionString1, "' indirectly left recursive definition of the '").concat(ruleName, "' rule and all of its intermediate definitions are effectively unary and therefore it cannot be rewritten."));
                                }
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
                var lastLeftRecursiveDefinition = last(leftRecursiveDefinitions), leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0XCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsXG4gICAgICAgICBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLFxuICAgICAgICAgaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeSxcbiAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLFxuICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgbGFzdCwgZnJvbnQsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdCh0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLmRlZmluaXRpb24pO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpc0xlYXN0KCkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGxlYXN0ID0gKGRlcHRoID09PSAxKTtcblxuICAgIHJldHVybiBsZWFzdDtcbiAgfVxuXG4gIGlzR3JlYXRlclRoYW4oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGVwdGggPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVwdGgoKSxcbiAgICAgICAgICBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZXB0aCA+IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlcHRoKTtcblxuICAgIHJldHVybiBncmVhdGVyVGhhbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzRXF1aXZhbGVudFRvKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZXF1aXZhbGVudFRvID0gY29tcGFyZURlZmluaXRpb25zKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyk7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbnRUbztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgIGlmICghcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZUFuZERlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbik7XG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbIC4uLnJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBdOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBpdCBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeShkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zVW5hcnkgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5ID0gaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeShkZWZpbml0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkVmZmVjdGl2ZWx5VW5hcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNVbmFyeSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBhbmQgYWxsIG9mIGl0cyBpbnRlcm1lZGlhdGUgZGVmaW5pdGlvbnMgYXJlIGVmZmVjdGl2ZWx5IHVuYXJ5IGFuZCB0aGVyZWZvcmUgaXQgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb250ID0gZnJvbnQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGNvbnN0IHJ1bGUgPSBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQ7ICAvLy9cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZURlZmluaXRpb25zKGRlZmluaXRpb25zQSwgZGVmaW5pdGlvbnNCKSB7XG4gIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgY29uc3QgZGVmaW5pdGlvbnNBTGVuZ3RoID0gZGVmaW5pdGlvbnNBLmxlbmd0aCxcbiAgICAgICAgZGVmaW5pdGlvbnNCTGVuZ3RoID0gZGVmaW5pdGlvbnNCLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNBTGVuZ3RoID09PSBkZWZpbml0aW9uc0JMZW5ndGgpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb25CID0gZmlyc3QoZGVmaW5pdGlvbnNCKSxcbiAgICAgICAgICBvZmZzZXQgPSBkZWZpbml0aW9uc0EuaW5kZXhPZihmaXJzdERlZmluaXRpb25CKTtcblxuICAgIGlmIChvZmZzZXQgPiAtMSkge1xuICAgICAgY29uc3QgbGVuZ3RoID0gZGVmaW5pdGlvbnNBTGVuZ3RoOyAgLy8vXG5cbiAgICAgIGVxdWFsVG8gPSBkZWZpbml0aW9uc0EuZXZlcnkoKGRlZmluaXRpb25BLCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCA9IChsZW5ndGggKyBpbmRleCAtIG9mZnNldCkgJSBsZW5ndGg7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkIgPSBkZWZpbml0aW9uc0JbaW5kZXhdO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQSA9PT0gZGVmaW5pdGlvbkIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVxdWFsVG87XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGFzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGFzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgbExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gYmFja3dhcmRzRmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNNYXRjaCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5ldmVyeSgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNGcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoID0gbWF0Y2hMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgc3RhcnQgPSAwLFxuICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIDwgMikge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb250IiwiZmlyc3QiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJydWxlIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImdldERlZmluaXRpb24iLCJwdXNoIiwiZ2V0RGVwdGgiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZXB0aCIsImlzTGVhc3QiLCJsZWFzdCIsImlzR3JlYXRlclRoYW4iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZXB0aCIsImdyZWF0ZXJUaGFuSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNFcXVpdmFsZW50VG8iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EZWZpbml0aW9ucyIsImVxdWl2YWxlbnRUbyIsImNvbXBhcmVEZWZpbml0aW9ucyIsImZyb21SdWxlRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJjb250ZXh0IiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25FZmZlY3RpdmVseVVuYXJ5IiwiaXNEZWZpbml0aW9uRWZmZWN0aXZlbHlVbmFyeSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1VuYXJ5IiwiZXZlcnkiLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zRnJvbnQiLCJnZXRSdWxlIiwiZnJvbVJ1bGVEZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNBIiwiZGVmaW5pdGlvbnNCIiwiZXF1YWxUbyIsImRlZmluaXRpb25zQUxlbmd0aCIsImRlZmluaXRpb25zQkxlbmd0aCIsImZpcnN0RGVmaW5pdGlvbkIiLCJvZmZzZXQiLCJpbmRleE9mIiwiZGVmaW5pdGlvbkEiLCJpbmRleCIsImRlZmluaXRpb25CIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm1hdGNoTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVOYW1lcyIsInNoaWZ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc01hdGNoIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0Zyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicG9wIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTsyREFFSzswQkFNaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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