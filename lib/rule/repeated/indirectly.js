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
                definitions = definitions.filter(function(definition) {
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
                definitions = definitions.filter(function(definition) {
                    var parts = definition.getParts(), partsLength = parts.length;
                    if (partsLength > 1) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonDefinitions = epsilonDefinitionsFromNothing();
                    definitions = epsilonDefinitions; ///
                } else {
                    var firstPartsEqual = areFirstPartsEqual(definitions);
                    if (!firstPartsEqual) {
                        var ruleName = rule.getName();
                        throw new Error("The first parts of the '".concat(leftRecursiveRuleName, "' left recursive definitions in the '").concat(ruleName, "' rule are not equal."));
                    }
                    var indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitions(definitions);
                    definitions = indirectlyRepeatedDefinitions; ///
                }
                var ruleName1 = rule.getName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName1, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
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
function epsilonDefinitionsFromNothing() {
    var epsilonPart = EpsilonPart.fromNothing(), parts = [
        epsilonPart
    ], definition = _occamparsers.Definition.fromParts(parts), epsilonDefinition = definition, epsilonDefinitions = [
        epsilonDefinition
    ];
    return epsilonDefinitions;
}
function indirectlyRepeatedDefinitionsFromDefinitions(definitions) {
    var indirectlyRepeatedDefinitions = definitions.map(function(definition) {
        var parts = definition.getParts();
        parts = _to_consumable_array(parts);
        parts.shift();
        definition = _occamparsers.Definition.fromParts(parts);
        var indirectlyRepeatedDefinition = definition; ///
        return indirectlyRepeatedDefinition;
    });
    return indirectlyRepeatedDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgaWYgKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uTG9va0FoZWFkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBsb29rLWFoZWFkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25RdWFsaWZpZWQgPSBpc0RlZmluaXRpb25RdWFsaWZpZWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvblF1YWxpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgcXVhbGlmaWVkLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlcHNpbG9uRGVmaW5pdGlvbnMgPSBlcHNpbG9uRGVmaW5pdGlvbnNGcm9tTm90aGluZygpO1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGVwc2lsb25EZWZpbml0aW9uczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucyk7XG5cbiAgICAgIGlmICghZmlyc3RQYXJ0c0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uc0Zyb21EZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICAgIGRlZmluaXRpb25zID0gaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnM7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJlRmlyc3RQYXJ0c0VxdWFsKGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IGZpcnN0UGFydHMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICAgICAgICB9KSxcbiAgICAgICAgZmlyc3RQYXJ0c0VxdWFsID0gYXJlUGFydHNFcXVhbChmaXJzdFBhcnRzKTtcblxuICByZXR1cm4gZmlyc3RQYXJ0c0VxdWFsO1xufVxuXG5mdW5jdGlvbiBlcHNpbG9uRGVmaW5pdGlvbnNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZXBzaWxvblBhcnQgPSBFcHNpbG9uUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICBdLFxuICAgICAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHMocGFydHMpLFxuICAgICAgICBlcHNpbG9uRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICBlcHNpbG9uRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgZXBzaWxvbkRlZmluaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gZXBzaWxvbkRlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uc0Zyb21EZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0c1xuICAgIF1cblxuICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tUGFydHMocGFydHMpO1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiA9IGRlZmluaXRpb247ICAvLy9cblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uO1xuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uRGVmaW5pdGlvbnMiLCJlcHNpbG9uRGVmaW5pdGlvbnNGcm9tTm90aGluZyIsImZpcnN0UGFydHNFcXVhbCIsImFyZUZpcnN0UGFydHNFcXVhbCIsImluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnNGcm9tRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImZpcnN0UGFydHMiLCJtYXAiLCJmaXJzdFBhcnQiLCJhcmVQYXJ0c0VxdWFsIiwiZXBzaWxvblBhcnQiLCJmcm9tTm90aGluZyIsIkRlZmluaXRpb24iLCJmcm9tUGFydHMiLCJlcHNpbG9uRGVmaW5pdGlvbiIsInNoaWZ0IiwiaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7eUJBWlU7NEJBQ1M7aUVBRUw7cUJBRUw7d0JBQ2lEOzBCQUNvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkosSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxj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