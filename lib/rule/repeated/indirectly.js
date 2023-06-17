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
                        var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);
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
                var ruleName = rule.getName(), definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition = new _occamparsers.Definition(parts);
                    definitions.push(definition);
                } else {
                    var firstPartsEqual = (0, _parts.arePartsEqual)(firstParts);
                    if (!firstPartsEqual) {
                        throw new Error("The first parts of the '".concat(leftRecursiveRuleName, "' left recursive definitions in the '").concat(ruleName, "' rule are not equal."));
                    }
                }
                var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamparsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZW1vdmVFcHNpbG9uTm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlTm9kZSA9IHN1cGVyLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocnVsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4LmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkxvb2tBaGVhZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgbG9vay1haGVhZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25RdWFsaWZpZWQgPSBpc0RlZmluaXRpb25RdWFsaWZpZWQoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25RdWFsaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0IG9mIHRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHF1YWxpZmllZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgaWYgKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0cyA9IFtdO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblxuICAgICAgICBmaXJzdFBhcnRzLnB1c2goZmlyc3RQYXJ0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gICAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0cyBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW4gdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgbm90IGVxdWFsLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwicGFyc2UiLCJzdGF0ZSIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZGVmaW5pdGlvbkxvb2tBaGVhZCIsImlzRGVmaW5pdGlvbkxvb2tBaGVhZCIsImRlZmluaXRpb25RdWFsaWZpZWQiLCJpc0RlZmluaXRpb25RdWFsaWZpZWQiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdFBhcnRzIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQYXJ0Iiwic2hpZnQiLCJwdXNoIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uUGFydCIsIkRlZmluaXRpb24iLCJmaXJzdFBhcnRzRXF1YWwiLCJhcmVQYXJ0c0VxdWFsIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzRCQUNTO2lFQUVMO3FCQUVMO3FCQUNLO3dCQUM0QzswQkFDb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuSixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNGLEFBQUVFLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ILHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSyxLQUFB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