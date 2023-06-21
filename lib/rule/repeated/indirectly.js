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
var _nodes = require("../../utilities/nodes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
    _create_class(IndirectlyRepeatedRule, [
        {
            key: "parse",
            value: function parse(state, callback, precedence, parentRuleName) {
                var ruleNode = _get(_get_prototype_of(IndirectlyRepeatedRule.prototype), "parse", this).call(this, state, callback, precedence, parentRuleName);
                if (ruleNode !== null) {
                // const nonTerminalNode = ruleNode; ///
                //
                // removeEpsilonNodes(nonTerminalNode);
                }
                return ruleNode;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZW1vdmVFcHNpbG9uTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5vZGUgPSBzdXBlci5wYXJzZShzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcblxuICAgIGlmIChydWxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc3Qgbm9uVGVybWluYWxOb2RlID0gcnVsZU5vZGU7IC8vL1xuICAgICAgLy9cbiAgICAgIC8vIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBpZiAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uTG9va0FoZWFkID0gaXNEZWZpbml0aW9uTG9va0FoZWFkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Mb29rQWhlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGxvb2stYWhlYWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblF1YWxpZmllZCA9IGlzRGVmaW5pdGlvblF1YWxpZmllZChkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uUXVhbGlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBxdWFsaWZpZWQuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25EZWZpbml0aW9ucyA9IGVwc2lsb25EZWZpbml0aW9uc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGRlZmluaXRpb25zID0gZXBzaWxvbkRlZmluaXRpb25zOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0c0VxdWFsID0gYXJlRmlyc3RQYXJ0c0VxdWFsKGRlZmluaXRpb25zKTtcblxuICAgICAgaWYgKCFmaXJzdFBhcnRzRXF1YWwpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0cyBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW4gdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgbm90IGVxdWFsLmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9ucyA9IGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zRnJvbURlZmluaXRpb25zKGRlZmluaXRpb25zKTtcblxuICAgICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uczsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcmVGaXJzdFBhcnRzRXF1YWwoZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0cyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gIHJldHVybiBmaXJzdFBhcnRzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIGVwc2lsb25EZWZpbml0aW9uc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCBlcHNpbG9uUGFydCA9IEVwc2lsb25QYXJ0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgIF0sXG4gICAgICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgIGVwc2lsb25EZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICBdO1xuXG4gIHJldHVybiBlcHNpbG9uRGVmaW5pdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zRnJvbURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIC4uLnBhcnRzXG4gICAgXVxuXG4gICAgcGFydHMuc2hpZnQoKTtcblxuICAgIGRlZmluaXRpb24gPSBEZWZpbml0aW9uLmZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gZGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJwcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTm9kZSIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwiZGVmaW5pdGlvblF1YWxpZmllZCIsImlzRGVmaW5pdGlvblF1YWxpZmllZCIsInBhcnRzIiwiZ2V0UGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25zTGVuZ3RoIiwiZXBzaWxvbkRlZmluaXRpb25zIiwiZXBzaWxvbkRlZmluaXRpb25zRnJvbU5vdGhpbmciLCJmaXJzdFBhcnRzRXF1YWwiLCJhcmVGaXJzdFBhcnRzRXF1YWwiLCJpbmRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9ucyIsImluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zRnJvbURlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiLCJmaXJzdFBhcnRzIiwibWFwIiwiZmlyc3RQYXJ0IiwiYXJlUGFydHNFcXVhbCIsImVwc2lsb25QYXJ0IiwiZnJvbU5vdGhpbmciLCJEZWZpbml0aW9uIiwiZnJvbVBhcnRzIiwiZXBzaWxvbkRlZmluaXRpb24iLCJzaGlmdCIsImluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzRCQUNTO2lFQUVMO3FCQUVMO3FCQUNLO3dCQUM0QzswQkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkosSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxjQUFnQkMsbUJBQUssQ0FBckJEO0FBRU8sSUFBQSxBQUFNSCx1Q0FnR2xCLEFBaEdZO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsY0FBYztnQkFDL0MsSUFBTUMsV0FBVyx1QkFGQVYsbUNBRU1LLFNBQU4sSUFBSyxhQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztnQkFFMUQsSUFBSUMsYUFBYSxNQUFNO2dCQUNyQix3Q0FBd0M7Z0JBQ3hDLEVBQUU7Z0JBQ0YsdUNBQXVDO2dCQUN6QztnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsSUFBSSxFQUFFQyxxQkFBcUI7Z0JBQ2pFLElBQUlDLGNBQWNGLEtBQUtHLGNBQWM7Z0JBRXJDRCxjQUFjQSxZQUFZRSxNQUFNLENBQUMsU0FBQ0M7b0JB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