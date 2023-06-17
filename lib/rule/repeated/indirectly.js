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
var _rewriteNodes = require("../../rewriteNodes");
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
                    var node = ruleNode, recursively = false;
                    (0, _rewriteNodes.removeEpsilonNodes)(node, recursively);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZW1vdmVFcHNpbG9uTm9kZXMgfSBmcm9tIFwiLi4vLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxvb2tBaGVhZCwgaXNEZWZpbml0aW9uUXVhbGlmaWVkLCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlTm9kZSA9IHN1cGVyLnBhcnNlKHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocnVsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVjdXJzaXZlbHkgPSBmYWxzZTtcblxuICAgICAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUsIHJlY3Vyc2l2ZWx5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXguYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uTG9va0FoZWFkID0gaXNEZWZpbml0aW9uTG9va0FoZWFkKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uTG9va0FoZWFkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlyc3QgcGFydCBvZiB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBsb29rLWFoZWFkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblF1YWxpZmllZCA9IGlzRGVmaW5pdGlvblF1YWxpZmllZChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvblF1YWxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnQgb2YgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgcXVhbGlmaWVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgICAgICBpZiAoZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnRzID0gW107XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgICAgIGZpcnN0UGFydHMucHVzaChmaXJzdFBhcnQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydHNFcXVhbCA9IGFyZVBhcnRzRXF1YWwoZmlyc3RQYXJ0cyk7XG5cbiAgICAgIGlmICghZmlyc3RQYXJ0c0VxdWFsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZpcnN0IHBhcnRzIG9mIHRoZSAnJHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGFyZSBub3QgZXF1YWwuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsIm5vZGUiLCJyZWN1cnNpdmVseSIsInJlbW92ZUVwc2lsb25Ob2RlcyIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwiZGVmaW5pdGlvblF1YWxpZmllZCIsImlzRGVmaW5pdGlvblF1YWxpZmllZCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydHMiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnQiLCJzaGlmdCIsInB1c2giLCJkZWZpbml0aW9uc0xlbmd0aCIsImVwc2lsb25QYXJ0IiwiRGVmaW5pdGlvbiIsImZpcnN0UGFydHNFcXVhbCIsImFyZVBhcnRzRXF1YWwiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eUJBYlU7NEJBQ1M7aUVBRUw7cUJBRUw7NEJBQ0s7d0JBQzRDOzBCQUNvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5KLElBQU0sQUFBRUMsUUFBVUMsMEJBQVZELE9BQ0YsQUFBRUUsY0FBZ0JDLG9CQUFoQkQ7QUFFTyxJQUFBLEFBQU1ILHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFB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