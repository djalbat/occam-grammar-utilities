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
            value: function parse(state, callback) {
                var ruleNode = _get(_get_prototype_of(IndirectlyRepeatedRule.prototype), "parse", this).call(this, state, callback);
                if (ruleNode !== null) {
                    var nonTerminalNode = ruleNode; ///
                    (0, _nodes.removeEpsilonNodes)(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZW1vdmVFcHNpbG9uTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlTm9kZSA9IHN1cGVyLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocnVsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb29rQWhlYWQgPSBpc0RlZmluaXRpb25Mb29rQWhlYWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uUXVhbGlmaWVkID0gaXNEZWZpbml0aW9uUXVhbGlmaWVkKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvbkRlZmluaXRpb25zID0gZXBzaWxvbkRlZmluaXRpb25zRnJvbU5vdGhpbmcoKTtcblxuICAgICAgZGVmaW5pdGlvbnMgPSBlcHNpbG9uRGVmaW5pdGlvbnM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnRzRXF1YWwgPSBhcmVGaXJzdFBhcnRzRXF1YWwoZGVmaW5pdGlvbnMpO1xuXG4gICAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zID0gaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnNGcm9tRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFyZUZpcnN0UGFydHNFcXVhbChkZWZpbml0aW9ucykge1xuICBjb25zdCBmaXJzdFBhcnRzID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgcmV0dXJuIGZpcnN0UGFydHNFcXVhbDtcbn1cblxuZnVuY3Rpb24gZXBzaWxvbkRlZmluaXRpb25zRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGVwc2lsb25QYXJ0ID0gRXBzaWxvblBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgZXBzaWxvbkRlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgZXBzaWxvbkRlZmluaXRpb25zID0gW1xuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGVwc2lsb25EZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnNGcm9tRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHNcbiAgICBdXG5cbiAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gPSBkZWZpbml0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsInBhcnNlIiwic3RhdGUiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImRlZmluaXRpb25Mb29rQWhlYWQiLCJpc0RlZmluaXRpb25Mb29rQWhlYWQiLCJkZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uRGVmaW5pdGlvbnMiLCJlcHNpbG9uRGVmaW5pdGlvbnNGcm9tTm90aGluZyIsImZpcnN0UGFydHNFcXVhbCIsImFyZUZpcnN0UGFydHNFcXVhbCIsImluZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb25zIiwiaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbnNGcm9tRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImZpcnN0UGFydHMiLCJtYXAiLCJmaXJzdFBhcnQiLCJhcmVQYXJ0c0VxdWFsIiwiZXBzaWxvblBhcnQiLCJmcm9tTm90aGluZyIsIkRlZmluaXRpb24iLCJmcm9tUGFydHMiLCJlcHNpbG9uRGVmaW5pdGlvbiIsInNoaWZ0IiwiaW5kaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eUJBYlU7NEJBQ1M7aUVBRUw7cUJBRUw7cUJBQ0s7d0JBQzRDOzBCQUNvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuSixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNGLEFBQUVFLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ILHVDQWdHbEIsQUFoR1k7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLFFBQVE7Z0JBQ25CLElBQU1DLFdBQVcsdUJBRkFSLG1DQUVNSyxTQUFOLElBQUssYUFBT0MsT0FBT0M7Z0JBRXBDLElBQUlDLGFBQWEsTUFBTTtvQkFDckIsSUFBTUMsa0JBQWtCRCxVQUFVLEdBQUc7b0JBRXJDRSxJQUFBQSx5QkFBa0IsRUFBQ0Q7Z0JBQ3JCO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxJQUFJLEVBQUVDLHFCQUFxQjtnQkFDakUsSUFBSUMsY0FBY0YsS0FBS0csY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQztvQkFDaEMsSUFBTUMsMEJBQTBCQyxJQUFBQSxxQ0FBeUIsRUFBQ0Y7b0JBRTFELElBQUlDLHlCQUF5Qjt3QkFDM0IsSUFBTUUseUJBQXlC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