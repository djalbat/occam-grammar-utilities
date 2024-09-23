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
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../../definition/epsilon"));
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first;
var IndirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyRepeatedRule, Rule);
    function IndirectlyRepeatedRule() {
        _class_call_check(this, IndirectlyRepeatedRule);
        return _call_super(this, IndirectlyRepeatedRule, arguments);
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
                if (leftRecursiveDefinitionsLength === 0) {
                    var epsilonDefinition = _epsilon.default.fromPrecedence(precedence);
                    definitions = [
                        epsilonDefinition
                    ];
                } else {
                    definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
                    var definitionsEffectivelyUseless = (0, _rule.areDefinitionsEffectivelyUseless)(definitions, ruleMap);
                    if (definitionsEffectivelyUseless) {
                        var epsilonDefinition1 = _epsilon.default.fromPrecedence(precedence);
                        definitions.push(epsilonDefinition1);
                    }
                }
                var NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcHNpbG9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25Mb29rQWhlYWQsIGlzRGVmaW5pdGlvblF1YWxpZmllZCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUXVhbGlmaWVkID0gaXNEZWZpbml0aW9uUXVhbGlmaWVkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0c0VxdWFsID0gYXJlRmlyc3RQYXJ0c0VxdWFsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICB9XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHk7IC8vL1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvbkRlZmluaXRpb24gPSBFcHNpbG9uRGVmaW5pdGlvbi5mcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgIGVwc2lsb25EZWZpbml0aW9uXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKGRlZmluaXRpb25zLCBydWxlTWFwKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKSB7XG4gICAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChlcHNpbG9uRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAgICAgICAuLi5wYXJ0c1xuICAgICAgICAgIF1cblxuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwiZmlyc3RQYXJ0c0VxdWFsIiwiYXJlRmlyc3RQYXJ0c0VxdWFsIiwicHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eSIsImdldE9wYWNpdHkiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibmFtZSIsIm9wYWNpdHkiLCJlcHNpbG9uRGVmaW5pdGlvbiIsIkVwc2lsb25EZWZpbml0aW9uIiwiZnJvbVByZWNlZGVuY2UiLCJkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsImFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzIiwicHVzaCIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImZpcnN0UGFydHMiLCJtYXAiLCJmaXJzdFBhcnQiLCJhcmVQYXJ0c0VxdWFsIiwic2hpZnQiLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eUJBYlU7NEJBQ0U7OERBRUg7aUVBQ0s7cUJBRUw7b0JBQ21CO3dCQUM4QjswQkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5KLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsSUFBSSxFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDbEUsSUFBSUMsY0FBY0gsS0FBS0ksY0FBYztnQkFFckMsSUFBTUMsd0JBQXdCSixrQkFBa0JLLE9BQU87Z0JBRXZELElBQUlDLDJCQUEyQkosWUFBWUssTUFBTSxDQUFDLFNBQUNDO29CQUNqRCxJQUFNQywwQkFBMEJDLElBQUFBLHFDQUF5QixFQUFDRjtvQkFFMUQsSUFBSUMseUJBQXlCO3dCQUMzQixJQUFNRSx5QkFBeUJDLElBQUFBLGdEQUFvQyxFQUFDSixhQUM5REssNkJBQTZCakIsTUFBTWU7d0JB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