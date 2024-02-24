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
                var ruleName1 = rule.getName(), leftRecursiveRuleAmbiguous = leftRecursiveRule.isAmbiguous(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length, name = indirectlyRepeatedRuleName, ambiguous = leftRecursiveRuleAmbiguous; ///
                definitions = leftRecursiveDefinitionsLength === 0 ? definitionsFromPrecedence(precedence) : definitionsFromLeftRecursiveDefinitions(leftRecursiveDefinitions);
                var NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBpZiAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uTG9va0FoZWFkID0gaXNEZWZpbml0aW9uTG9va0FoZWFkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Mb29rQWhlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGxvb2stYWhlYWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblF1YWxpZmllZCA9IGlzRGVmaW5pdGlvblF1YWxpZmllZChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uUXVhbGlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgfVxuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBudWxsO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVBbWJpZ3VvdXMgPSBsZWZ0UmVjdXJzaXZlUnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBsZWZ0UmVjdXJzaXZlUnVsZUFtYmlndW91czsgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnNGcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVGaXJzdFBhcnRzRXF1YWwoZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0cyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gIHJldHVybiBmaXJzdFBhcnRzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICBjb25zdCBlcHNpbG9uUGFydCA9IEVwc2lsb25QYXJ0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgIF0sXG4gICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpLFxuICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICBkZWZpbml0aW9uXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgLy8vXG4gICAgbGV0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzXG4gICAgXVxuXG4gICAgcGFydHMuc2hpZnQoKTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJydWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZGVmaW5pdGlvbkxvb2tBaGVhZCIsImlzRGVmaW5pdGlvbkxvb2tBaGVhZCIsImRlZmluaXRpb25RdWFsaWZpZWQiLCJpc0RlZmluaXRpb25RdWFsaWZpZWQiLCJmaXJzdFBhcnRzRXF1YWwiLCJhcmVGaXJzdFBhcnRzRXF1YWwiLCJwcmVjZWRlbmNlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJnZXRQcmVjZWRlbmNlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVBbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnNGcm9tUHJlY2VkZW5jZSIsImRlZmluaXRpb25zRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImZpcnN0UGFydHMiLCJtYXAiLCJmaXJzdFBhcnQiLCJhcmVQYXJ0c0VxdWFsIiwiZXBzaWxvblBhcnQiLCJmcm9tTm90aGluZyIsIkRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIiwic2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVpVOzRCQUNTO2lFQUVMO3FCQUVMO3dCQUNpRDswQkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5KLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsY0FBZ0JDLG1CQUFLLENBQXJCRDtBQUVPLElBQUEsQUFBTUgsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaSyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLElBQUksRUFBRUMsaUJBQWlCO2dCQUN6RCxJQUFJQyxjQUFjRixLQUFLRyxjQUFjO2dCQUVyQyxJQUFNQyx3QkFBd0JILGtCQUFrQkksT0FBTztnQkFFdkQsSUFBSUMsMkJBQTJCSixZQUFZSyxNQUFNLENBQUMsU0FBQ0M7b0JBQ2pELElBQU1DLDBCQUEwQkMsSUFBQUEscUNBQXlCLEVBQUNGO29CQUUxRCxJQUFJQyx5QkFBeUI7d0JBQzNCLElBQU1FLHlCQUF5QkMsSUFBQUEsZ0RBQW9DLEVBQUNKLGFBQzlESyw2QkFBNkJsQixNQUFNZ0I7d0JBRXpDLElBQUlFLCtCQUErQlQsdUJBQXVCOzRCQUN4RCxJQUFNVSxvQkFBb0JDLElBQUFBLCtCQUFtQixFQUFDUDs0QkFFOUMsSUFBSU0sbUJBQW1CO2dDQUNyQixJQUFNRSxXQUFXaEIsS0FBS0ssT0FBTyxJQUN2QlksbUJBQW1CVCxXQUFXVSxRQUFRO2dDQUU1QyxNQUFNLElBQUlDLE1BQU0sQUFBQyxRQUErQ0gsT0FBeENDLGtCQUFpQix5QkFBZ0MsT0FBVEQsVUFBUzs0QkFDM0U7NEJBRUEsSUFBTUksc0JBQXNCQyxJQUFB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