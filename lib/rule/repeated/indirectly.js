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
var _nonProducing = require("../../utilities/nonProducing");
var _complex = require("../../utilities/complex");
var _occluded = require("../../utilities/occluded");
var _callAhead = require("../../utilities/callAhead");
var _qualified = require("../../utilities/qualified");
var _ruleName = require("../../utilities/ruleName");
var _leftRecursive = require("../../utilities/leftRecursive");
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
    _create_class(IndirectlyRepeatedRule, [
        {
            key: "NonTerminalNodeFromRuleName",
            value: function NonTerminalNodeFromRuleName(ruleName, state) {
                var NonTerminalNode = _indirectly.default;
                return NonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleAndLeftRecursiveRule",
            value: function fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap) {
                var definitions = rule.getDefinitions();
                var leftRecursiveRuleName = leftRecursiveRule.getName();
                var leftRecursiveDefinitions = definitions.filter(function(definition) {
                    var definitionLeftRecursive = (0, _leftRecursive.isDefinitionLeftRecursive)(definition, ruleMap);
                    if (definitionLeftRecursive) {
                        var leftRecursiveRuleNames = (0, _leftRecursive.leftRecursiveRuleNamesFromDefinition)(definition, ruleMap), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);
                        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
                            var ruleName = rule.getName(), definitionString = definition.asString();
                            var definitionComplex = (0, _complex.isDefinitionComplex)(definition);
                            if (definitionComplex) {
                                throw new Error("The '".concat(definitionString, "' left recursive-definition of the '").concat(ruleName, "' rule is complex."));
                            }
                            var definitionOccluded = (0, _occluded.isDefinitionOccluded)(definition, ruleMap);
                            if (definitionOccluded) {
                                var definitionString1 = definition.asString();
                                throw new Error("The '".concat(definitionString1, "' left recursive definition of the '").concat(ruleName, "' rule is occluded."));
                            }
                            var definitionCallAhead = (0, _callAhead.isDefinitionCallAhead)(definition);
                            if (definitionCallAhead) {
                                throw new Error("The first part of the '".concat(definitionString, "' left recursive definition of the '").concat(ruleName, "' rule is look-ahead."));
                            }
                            var definitionQualified = (0, _qualified.isDefinitionQualified)(definition);
                            if (definitionQualified) {
                                throw new Error("The first part of the '".concat(definitionString, "' left recursive definition of the '").concat(ruleName, "' rule is qualified."));
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
                var indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions), indirectlyRepeatedRuleNonProducing = (0, _nonProducing.isRuleNonProducing)(indirectlyRepeatedRule, ruleMap);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcHNpbG9uXCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc1J1bGVOb25Qcm9kdWNpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vblByb2R1Y2luZ1wiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29tcGxleFwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uT2NjbHVkZWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL29jY2x1ZGVkXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25DYWxsQWhlYWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NhbGxBaGVhZFwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uUXVhbGlmaWVkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWFsaWZpZWRcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sZWZ0UmVjdXJzaXZlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIE5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSwgc3RhdGUpIHtcbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlO1xuXG4gICAgcmV0dXJuIE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbiwgcnVsZU1hcCk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGVNYXApLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUtZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbk9jY2x1ZGVkID0gaXNEZWZpbml0aW9uT2NjbHVkZWQoZGVmaW5pdGlvbiwgcnVsZU1hcCk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbk9jY2x1ZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIG9jY2x1ZGVkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25DYWxsQWhlYWQgPSBpc0RlZmluaXRpb25DYWxsQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNhbGxBaGVhZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBsb29rLWFoZWFkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25RdWFsaWZpZWQgPSBpc0RlZmluaXRpb25RdWFsaWZpZWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblF1YWxpZmllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVPcGFjaXR5ID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0T3BhY2l0eSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IGxlZnRSZWN1cnNpdmVSdWxlT3BhY2l0eTsgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uUHJvZHVjaW5nID0gaXNSdWxlTm9uUHJvZHVjaW5nKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOb25Qcm9kdWNpbmcpIHtcbiAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZXBzaWxvbkRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAgICAgICAuLi5wYXJ0c1xuICAgICAgICAgIF1cblxuICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwic3RhdGUiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGVNYXAiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJFcnJvciIsImRlZmluaXRpb25PY2NsdWRlZCIsImlzRGVmaW5pdGlvbk9jY2x1ZGVkIiwiZGVmaW5pdGlvbkNhbGxBaGVhZCIsImlzRGVmaW5pdGlvbkNhbGxBaGVhZCIsImRlZmluaXRpb25RdWFsaWZpZWQiLCJpc0RlZmluaXRpb25RdWFsaWZpZWQiLCJmaXJzdFBhcnRzRXF1YWwiLCJhcmVGaXJzdFBhcnRzRXF1YWwiLCJwcmVjZWRlbmNlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJnZXRQcmVjZWRlbmNlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVPcGFjaXR5IiwiZ2V0T3BhY2l0eSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTm9uUHJvZHVjaW5nIiwiaXNSdWxlTm9uUHJvZHVjaW5nIiwiZXBzaWxvbkRlZmluaXRpb24iLCJFcHNpbG9uRGVmaW5pdGlvbiIsImZyb21QcmVjZWRlbmNlIiwicHVzaCIsIlJ1bGUiLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsInNoaWZ0IiwiRGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7Ozt5QkFqQlU7NEJBQ0U7OERBRUg7aUVBQ0s7cUJBRUw7NEJBQ0s7dUJBQ0M7d0JBQ0M7eUJBQ0M7eUJBQ0E7d0JBQ3lDOzZCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSztnQkFDekMsSUFBTUMsa0JBQWtCQyxtQkFBc0I7Z0JB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