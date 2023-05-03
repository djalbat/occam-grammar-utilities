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
var _parts = require("../../utilities/parts");
var _array = require("../../utilities/array");
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
                definitions = definitions.filter(function(definition) {
                    var parts = definition.getParts(), partsLength = parts.length;
                    if (partsLength > 1) {
                        parts.shift();
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition = new _occamparsers.Definition(parts);
                    definitions.push(definition);
                }
                var ruleName = rule.getName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHRhaWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgICB9LCBbXSksXG4gICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgIHBhcnRzO1xuXG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpO1xuXG4gICAgZGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbjsgLy8vXG5cbiAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KTtcblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgcGFydHMsXG4gICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgIGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uczsgLy8vXG5cbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyk7XG5cbiAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHByZXZpb3VzRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0OyAgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyAgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0IiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwic2hpZnQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImVwc2lsb25QYXJ0IiwiRGVmaW5pdGlvbiIsInB1c2giLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVkdWNlIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJwYXJ0c1RhaWwiLCJ0YWlsIiwiY2xvbmVQYXJ0cyIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozs0QkFabUI7aUVBRUw7b0JBRVI7cUJBQ0E7cUJBQ0M7d0JBQ21EOzBCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRyxJQUFNLEFBQUVDLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtB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