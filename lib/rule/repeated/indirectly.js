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
var _occamparsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interop_require_default(require("../../node/repeated/indirectly"));
var _part = require("../../utilities/part");
var _array = require("../../utilities/array");
var _parts = require("../../utilities/parts");
var _ruleName = require("../../utilities/ruleName");
var _definition = require("../../utilities/definition");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var EpsilonPart = _occamparsers.Parts.EpsilonPart;
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
                        var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                        if (definitionComplex) {
                            var ruleName = rule.getName(), definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' definition of the '").concat(ruleName, "' rule is complex."));
                        }
                        var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames);
                        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
                            return true;
                        }
                    }
                });
                var firstParts = [];
                definitions = definitions.filter(function(definition) {
                    var parts = definition.getParts(), partsLength = parts.length;
                    if (partsLength > 1) {
                        var firstPart = parts.shift();
                        firstParts.push(firstPart);
                        return true;
                    }
                });
                var ruleName = rule.getName(), firstPartsEqual = (0, _parts.arePartsEqual)(firstParts);
                if (!firstPartsEqual) {
                    throw new Error("The first parts of the '".concat(leftRecursiveRuleName, "' left recursive definitions in the '").concat(ruleName, "' rule are not equal."));
                }
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition = new _occamparsers.Definition(parts);
                    definitions.push(definition);
                }
                var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions",
            value: function fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions) {
                var firstIndirectlyLeftRecursiveDefinition = (0, _array.first)(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///
                var definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []), definition, parts;
                var firstDefinition = (0, _array.first)(definitions);
                definition = firstDefinition; ///
                parts = definition.getParts();
                var firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
                definitions = definitions.reduce(function(definitions, definition) {
                    var parts = definition.getParts();
                    var firstPart = (0, _array.first)(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = (0, _array.tail)(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        definition = new _occamparsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition1 = new _occamparsers.Definition(parts1);
                    definitions.push(definition1);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        },
        {
            key: "fromRuleNameLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions",
            value: function fromRuleNameLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions) {
                var parts, definition, definitions = indirectlyLeftRecursiveDefinitions; ///
                var firstDefinition = (0, _array.first)(definitions);
                definition = firstDefinition; ///
                parts = definition.getParts();
                var firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
                definitions = definitions.reduce(function(definitions, definition) {
                    var parts = definition.getParts();
                    var firstPart = (0, _array.first)(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = (0, _array.tail)(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        definition = new _occamparsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition1 = new _occamparsers.Definition(parts1);
                    definitions.push(definition1);
                }
                var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBmaXJzdCwgdGFpbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNsb25lUGFydHMsIGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0UGFydHMgPSBbXTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgZmlyc3RQYXJ0cy5wdXNoKGZpcnN0UGFydCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydHMgb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgYXJlIG5vdCBlcXVhbC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgICAgfSwgW10pLFxuICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICBwYXJ0cztcblxuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKTtcblxuICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb247IC8vL1xuXG4gICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnRzICA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IHBhcnRzLFxuICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7IC8vL1xuXG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpO1xuXG4gICAgZGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbjsgLy8vXG5cbiAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdCIsImZpcnN0UGFydHMiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnQiLCJzaGlmdCIsInB1c2giLCJmaXJzdFBhcnRzRXF1YWwiLCJhcmVQYXJ0c0VxdWFsIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uUGFydCIsIkRlZmluaXRpb24iLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVkdWNlIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJmaXJzdERlZmluaXRpb24iLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJwYXJ0c1RhaWwiLCJ0YWlsIiwiY2xvbmVQYXJ0cyIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozs0QkFabUI7aUVBRUw7b0JBRVI7cUJBQ0M7cUJBQ2M7d0JBQ3FDOzBCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRyxJQUFNLEFBQUVDLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsSUFBSSxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDbkUsSUFBSUMsY0FBY0YsS0FBS0csY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQyxZQUFlO29CQUMvQyxJQUFNQywwQkFBMEJDLElBQUFBLHFDQUF5QixFQUFDRjtvQkFFMUQsSUFBSUMseUJBQXlCO3dCQUMzQixJQUFNRSxvQkFBb0JDLElBQUFBLCtCQUFtQixFQUFDSjt3QkFFOUMsSUFBSUcsbUJBQW1COzRCQUNyQixJQUFNRSxXQUFXVixLQUFLVyxPQUFPLElBQ3ZCQyxtQkFBbUJQLFdBQVdRLFFBQVE7NEJBRTVDLE1BQU0sSUFBSUMsTUFBTSxBQUFDLFFBQStDSixPQUF4Q0Usa0JBQWlCLHlCQUFnQyxPQUFURixVQUFTLHVCQUFxQjt3QkFDaEcsQ0FBQzt3QkFFRCxJQUFNSyx5QkFBeUJDLElBQUFBLGdEQUFvQyxFQUFDWCxhQUM5RFksNkJBQTZCQyxJQUFBQSxZQUFLLEVBQUNIO3dCQUV6QyxJQUFJRSwrQkFBK0JoQix1QkFBdUI7NEJBQ3hELE9BQU8sSUFBSTt3QkFDYixDQUFDO29C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