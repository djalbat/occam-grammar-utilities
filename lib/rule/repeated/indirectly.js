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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcHNpbG9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25Mb29rQWhlYWQsIGlzRGVmaW5pdGlvblF1YWxpZmllZCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUXVhbGlmaWVkID0gaXNEZWZpbml0aW9uUXVhbGlmaWVkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0c0VxdWFsID0gYXJlRmlyc3RQYXJ0c0VxdWFsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICB9XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHk7IC8vL1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvbkRlZmluaXRpb24gPSBFcHNpbG9uRGVmaW5pdGlvbi5mcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgIGVwc2lsb25EZWZpbml0aW9uXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyA9IGFyZURlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKGRlZmluaXRpb25zLCBydWxlTWFwKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25zRWZmZWN0aXZlbHlVc2VsZXNzKSB7XG4gICAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChlcHNpbG9uRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVGaXJzdFBhcnRzRXF1YWwoZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0cyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gIHJldHVybiBmaXJzdFBhcnRzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgICAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMgPSBbIC8vL1xuICAgICAgICAgICAgLi4ucGFydHNcbiAgICAgICAgICBdXG5cbiAgICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHNBbmRQcmVjZWRlbmNlKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXROYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwiZGVmaW5pdGlvblF1YWxpZmllZCIsImlzRGVmaW5pdGlvblF1YWxpZmllZCIsImZpcnN0UGFydHNFcXVhbCIsImFyZUZpcnN0UGFydHNFcXVhbCIsInByZWNlZGVuY2UiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldFByZWNlZGVuY2UiLCJsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsIm5hbWUiLCJvcGFjaXR5IiwiZXBzaWxvbkRlZmluaXRpb24iLCJFcHNpbG9uRGVmaW5pdGlvbiIsImZyb21QcmVjZWRlbmNlIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNFZmZlY3RpdmVseVVzZWxlc3MiLCJhcmVEZWZpbml0aW9uc0VmZmVjdGl2ZWx5VXNlbGVzcyIsInB1c2giLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsInNoaWZ0IiwiRGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzRCQUNFOzhEQUVIO2lFQUNLO3FCQUVMO29CQUNtQjt3QkFDOEI7MEJBQ29FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuSixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLElBQUksRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ2xFLElBQUlDLGNBQWNILEtBQUtJLGNBQWM7Z0JBRXJDLElBQU1DLHdCQUF3Qkosa0JBQWtCSyxPQUFPO2dCQUV2RCxJQUFJQywyQkFBMkJKLFlBQVlLLE1BQU0sQ0FBQyxTQUFDQztvQkFDakQsSUFBTUMsMEJBQTBCQyxJQUFBQSxxQ0FBeUIsRUFBQ0Y7b0JBRTFELElBQUlDLHlCQUF5Qjt3QkFDM0IsSUFBTUUseUJBQXlCQyxJQUFBQSxnREFBb0MsRUFBQ0osYUFDOURLLDZCQUE2QmpCLE1BQU1l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