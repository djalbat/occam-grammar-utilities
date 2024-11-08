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
                var ruleName1 = rule.getName(), leftRecursiveRuleOpacity = leftRecursiveRule.getOpacity(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, opacity = leftRecursiveRuleOpacity; ///
                definitions = definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
                var NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions, NonTerminalNode), indirectlyRepeatedRuleNonProducing = (0, _rule.isRuleNonProducing)(indirectlyRepeatedRule, ruleMap);
                if (indirectlyRepeatedRuleNonProducing) {
                    var epsilonDefinition = _epsilon.default.fromPrecedence(precedence);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcHNpbG9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc1J1bGVOb25Qcm9kdWNpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTG9va0FoZWFkLCBpc0RlZmluaXRpb25RdWFsaWZpZWQsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBpZiAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uTG9va0FoZWFkID0gaXNEZWZpbml0aW9uTG9va0FoZWFkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Mb29rQWhlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGxvb2stYWhlYWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblF1YWxpZmllZCA9IGlzRGVmaW5pdGlvblF1YWxpZmllZChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uUXVhbGlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVPcGFjaXR5ID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IGxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eTsgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uUHJvZHVjaW5nID0gaXNSdWxlTm9uUHJvZHVjaW5nKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Qcm9kdWNpbmcpIHtcbiAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZXBzaWxvbkRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAgICAgICAuLi5wYXJ0c1xuICAgICAgICAgIF1cblxuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlTWFwIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldE5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwiZmlyc3RQYXJ0c0VxdWFsIiwiYXJlRmlyc3RQYXJ0c0VxdWFsIiwicHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UHJlY2VkZW5jZSIsImxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eSIsImdldE9wYWNpdHkiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Qcm9kdWNpbmciLCJpc1J1bGVOb25Qcm9kdWNpbmciLCJlcHNpbG9uRGVmaW5pdGlvbiIsIkVwc2lsb25EZWZpbml0aW9uIiwiZnJvbVByZWNlZGVuY2UiLCJwdXNoIiwiUnVsZSIsImZpcnN0UGFydHMiLCJtYXAiLCJmaXJzdFBhcnQiLCJhcmVQYXJ0c0VxdWFsIiwic2hpZnQiLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7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