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
            value: function fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule) {
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
                var ruleName1 = rule.getName(), leftRecursiveRuleOpacity = leftRecursiveRule.isOpacity(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length, name = indirectlyRepeatedRuleName, opacity = leftRecursiveRuleOpacity; ///
                definitions = leftRecursiveDefinitionsLength === 0 ? definitionsFromPrecedence(precedence) : definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
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
function definitionsFromPrecedence(precedence) {
    var epsilonPart = EpsilonPart.fromNothing(), parts = [
        epsilonPart
    ], definition = _occamparsers.Definition.fromPartsAndPrecedence(parts, precedence), definitions = [
        definition
    ];
    return definitions;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBpZiAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uTG9va0FoZWFkID0gaXNEZWZpbml0aW9uTG9va0FoZWFkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Mb29rQWhlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGxvb2stYWhlYWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblF1YWxpZmllZCA9IGlzRGVmaW5pdGlvblF1YWxpZmllZChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uUXVhbGlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVPcGFjaXR5ID0gbGVmdFJlY3Vyc2l2ZVJ1bGUuaXNPcGFjaXR5KCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHk7IC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zRnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZGVmaW5pdGlvbnNGcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gIGNvbnN0IGVwc2lsb25QYXJ0ID0gRXBzaWxvblBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSksXG4gICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgIGRlZmluaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHNcbiAgICBdXG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHNBbmRQcmVjZWRlbmNlKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9KTtcblxuICByZXR1cm4gZGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXROYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwiZGVmaW5pdGlvblF1YWxpZmllZCIsImlzRGVmaW5pdGlvblF1YWxpZmllZCIsImZpcnN0UGFydHNFcXVhbCIsImFyZUZpcnN0UGFydHNFcXVhbCIsInByZWNlZGVuY2UiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldFByZWNlZGVuY2UiLCJsZWZ0UmVjdXJzaXZlUnVsZU9wYWNpdHkiLCJpc09wYWNpdHkiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9uc0Zyb21QcmVjZWRlbmNlIiwiZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIiwiZmlyc3RQYXJ0cyIsIm1hcCIsImZpcnN0UGFydCIsImFyZVBhcnRzRXF1YWwiLCJlcHNpbG9uUGFydCIsImZyb21Ob3RoaW5nIiwi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