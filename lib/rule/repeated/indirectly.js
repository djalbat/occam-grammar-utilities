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
                        var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames);
                        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
                            return true;
                        }
                    }
                });
                definitions.forEach(function(definition) {
                    var parts = definition.getParts();
                    parts.shift();
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHRhaWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgaWYgKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICAgIH0sIFtdKSxcbiAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgcGFydHM7XG5cbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyk7XG5cbiAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHByZXZpb3VzRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0OyAgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyAgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBwYXJ0cyxcbiAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zOyAvLy9cblxuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKTtcblxuICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb247IC8vL1xuXG4gICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnRzICA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KTtcblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0IiwiZm9yRWFjaCIsInBhcnRzIiwiZ2V0UGFydHMiLCJzaGlmdCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWR1Y2UiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInB1c2giLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwidGFpbCIsImNsb25lUGFydHMiLCJEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uUGFydCIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozs0QkFabUI7aUVBRUw7b0JBRVI7cUJBQ0E7cUJBQ0M7d0JBQ21EOzBCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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