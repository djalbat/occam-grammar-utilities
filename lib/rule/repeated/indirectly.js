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
            key: "fromRuleAndLeftRecursiveRuleName",
            value: function fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
                var definitions = rule.getDefinitions();
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
                var ruleName1 = rule.getName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length, name = indirectlyRepeatedRuleName, ambiguous = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUXVhbGlmaWVkID0gaXNEZWZpbml0aW9uUXVhbGlmaWVkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0c0VxdWFsID0gYXJlRmlyc3RQYXJ0c0VxdWFsKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICB9XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG51bGw7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2U7XG5cbiAgICBkZWZpbml0aW9ucyA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnNGcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVGaXJzdFBhcnRzRXF1YWwoZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0cyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gIHJldHVybiBmaXJzdFBhcnRzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbVByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICBjb25zdCBlcHNpbG9uUGFydCA9IEVwc2lsb25QYXJ0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgIF0sXG4gICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0c0FuZFByZWNlZGVuY2UocGFydHMsIHByZWNlZGVuY2UpLFxuICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICBkZWZpbml0aW9uXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgLy8vXG4gICAgbGV0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzXG4gICAgXVxuXG4gICAgcGFydHMuc2hpZnQoKTtcblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwiZGVmaW5pdGlvblF1YWxpZmllZCIsImlzRGVmaW5pdGlvblF1YWxpZmllZCIsImZpcnN0UGFydHNFcXVhbCIsImFyZUZpcnN0UGFydHNFcXVhbCIsInByZWNlZGVuY2UiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldFByZWNlZGVuY2UiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zRnJvbVByZWNlZGVuY2UiLCJkZWZpbml0aW9uc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsImVwc2lsb25QYXJ0IiwiZnJvbU5vdGhpbmciLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTs0QkFDUztpRUFFTDtxQkFFTDt3QkFDaUQ7MEJBQ29FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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