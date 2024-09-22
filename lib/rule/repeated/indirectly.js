"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedRule;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interop_require_default(require("../../node/repeated/indirectly"));
var _parts = require("../../utilities/parts");
var _rule = require("../../utilities/rule");
var _ruleName = require("../../utilities/ruleName");
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
var first = _necessary.arrayUtilities.first, EpsilonPart = _occamparsers.Parts.EpsilonPart;
var IndirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyRepeatedRule, Rule);
    var _super = _create_super(IndirectlyRepeatedRule);
    function IndirectlyRepeatedRule() {
        _class_call_check(this, IndirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _create_class(IndirectlyRepeatedRule, null, [
        {
            key: "fromRuleAndLeftRecursiveRule",
            value: function fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
                var definitions = rule.getDefinitions();
                var leftRecursiveRuleName = leftRecursiveRule.getName();
                var leftRecursiveDefinitions = definitions.filter(function(definition) {
                    var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
                    if (definitionLeftRecursive) {
                        var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);
                        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
                            var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                var ruleName = rule.getName(), definitionString = definition.asString();
                                throw new Error("The '".concat(definitionString, "' definition of the '").concat(ruleName, "' rule is complex."));
                            }
                            var definitionLookAhead = (0, _definition.isDefinitionLookAhead)(definition);
                            if (definitionLookAhead) {
                                var ruleName1 = rule.getName(), definitionString1 = definition.asString();
                                throw new Error("The first part of the '".concat(definitionString1, "' definition of the '").concat(ruleName1, "' rule is look-ahead."));
                            }
                            var definitionQualified = (0, _definition.isDefinitionQualified)(definition);
                            if (definitionQualified) {
                                var ruleName2 = rule.getName(), definitionString2 = definition.asString();
                                throw new Error("The first part of the '".concat(definitionString2, "' definition of the '").concat(ruleName2, "' rule is qualified."));
                            }
                            return true;
                        }
                    }
                });
                var firstPartsEqual = areFirstPartsEqual(leftRecursiveDefinitions);
                if (!firstPartsEqual) {
                    var ruleName = rule.getName();
                    throw new Error("The first parts of the '".concat(leftRecursiveRuleName, "' left recursive definitions in the '").concat(ruleName, "' rule are not equal."));
                }
                var precedence = null;
                leftRecursiveDefinitions = leftRecursiveDefinitions.filter(function(leftRecursiveDefinition) {
                    var parts = leftRecursiveDefinition.getParts(), partsLength = parts.length;
                    if (partsLength === 1) {
                        precedence = leftRecursiveDefinition.getPrecedence();
                    } else {
                        return true;
                    }
                });
                var ruleName1 = rule.getName(), leftRecursiveRuleOpacity = leftRecursiveRule.getOpacity(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length, name = indirectlyRepeatedRuleName, opacity = leftRecursiveRuleOpacity; ///
                definitions = leftRecursiveDefinitionsLength === 0 ? definitionsFromPrecedence(precedence) : definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
                var NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions, NonTerminalNode), indirectlyRepeatedRuleEffectivelyUseless = (0, _rule.isRuleEffectivelyUseless)(indirectlyRepeatedRule, ruleMap);
                if (indirectlyRepeatedRuleEffectivelyUseless) {
                    var epsilonDefinition = epsilonDefinitionFromPrecedence(precedence);
                    definitions.push(epsilonDefinition);
                }
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamparsers.Rule);
function areFirstPartsEqual(definitions) {
    var firstParts = definitions.map(function(definition) {
        var parts = definition.getParts(), firstPart = first(parts);
        return firstPart;
    }), firstPartsEqual = (0, _parts.arePartsEqual)(firstParts);
    return firstPartsEqual;
}
function definitionsFromPrecedence(precedence) {
    var epsilonDefinition = epsilonDefinitionFromPrecedence(precedence), definitions = [
        epsilonDefinition
    ];
    return definitions;
}
function epsilonDefinitionFromPrecedence(precedence) {
    var epsilonPart = EpsilonPart.fromNothing(), parts = [
        epsilonPart
    ], definition = _occamparsers.Definition.fromPartsAndPrecedence(parts, precedence), epsilonDefinition = definition; ///
    return epsilonDefinition;
}
function definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions) {
    var definitions = leftRecursiveDefinitions.map(function(leftRecursiveDefinition) {
        var parts = leftRecursiveDefinition.getParts();
        parts = _to_consumable_array(parts);
        parts.shift();
        var precedence = leftRecursiveDefinition.getPrecedence(), definition = _occamparsers.Definition.fromPartsAndPrecedence(parts, precedence);
        return definition;
    });
    return definitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc1J1bGVFZmZlY3RpdmVseVVzZWxlc3MgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTG9va0FoZWFkLCBpc0RlZmluaXRpb25RdWFsaWZpZWQsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUXVhbGlmaWVkID0gaXNEZWZpbml0aW9uUXVhbGlmaWVkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0c0VxdWFsID0gYXJlRmlyc3RQYXJ0c0VxdWFsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICB9XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHk7IC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zRnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlVc2VsZXNzID0gaXNSdWxlRWZmZWN0aXZlbHlVc2VsZXNzKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseVVzZWxlc3MpIHtcbiAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gZXBzaWxvbkRlZmluaXRpb25Gcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChlcHNpbG9uRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJlRmlyc3RQYXJ0c0VxdWFsKGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IGZpcnN0UGFydHMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICAgICAgICB9KSxcbiAgICAgICAgZmlyc3RQYXJ0c0VxdWFsID0gYXJlUGFydHNFcXVhbChmaXJzdFBhcnRzKTtcblxuICByZXR1cm4gZmlyc3RQYXJ0c0VxdWFsO1xufVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21QcmVjZWRlbmNlKHByZWNlZGVuY2UpIHtcbiAgY29uc3QgZXBzaWxvbkRlZmluaXRpb24gPSBlcHNpbG9uRGVmaW5pdGlvbkZyb21QcmVjZWRlbmNlKHByZWNlZGVuY2UpLFxuICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICBdO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gZXBzaWxvbkRlZmluaXRpb25Gcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gIGNvbnN0IGVwc2lsb25QYXJ0ID0gRXBzaWxvblBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSksXG4gICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gZGVmaW5pdGlvbjsgLy8vXG5cbiAgcmV0dXJuIGVwc2lsb25EZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICAgICAgbGV0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICAgIHBhcnRzID0gWyAvLy9cbiAgICAgICAgICAgIC4uLnBhcnRzXG4gICAgICAgICAgXVxuXG4gICAgICAgICAgcGFydHMuc2hpZnQoKTtcblxuICAgICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwiZmlyc3RQYXJ0c0VxdWFsIiwiYXJlRmlyc3RQYXJ0c0VxdWFsIiwicHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eSIsImdldE9wYWNpdHkiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9uc0Zyb21QcmVjZWRlbmNlIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlRWZmZWN0aXZlbHlVc2VsZXNzIiwiaXNSdWxlRWZmZWN0aXZlbHlVc2VsZXNzIiwiZXBzaWxvbkRlZmluaXRpb24iLCJlcHNpbG9uRGVmaW5pdGlvbkZyb21QcmVjZWRlbmNlIiwicHVzaCIsIlJ1bGUiLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsImVwc2lsb25QYXJ0IiwiZnJvbU5vdGhpbmciLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7Ozt5QkFiVTs0QkFDUztpRUFFTDtxQkFFTDtvQkFDVzt3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