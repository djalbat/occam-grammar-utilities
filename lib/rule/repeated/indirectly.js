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
                        var definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                        if (definitionComplex) {
                            var ruleName = rule.getName(), definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' definition of the '").concat(ruleName, "' rule is complex."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGFyZVBhcnRzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvbkNvbXBsZXgsIGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uQ29tcGxleCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICAgICAgaWYgKGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0cyA9IFtdO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblxuICAgICAgICBmaXJzdFBhcnRzLnB1c2goZmlyc3RQYXJ0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnRzRXF1YWwgPSBhcmVQYXJ0c0VxdWFsKGZpcnN0UGFydHMpO1xuXG4gICAgICBpZiAoIWZpcnN0UGFydHNFcXVhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmaXJzdCBwYXJ0cyBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW4gdGhlICcke3J1bGVOYW1lfScgcnVsZSBhcmUgbm90IGVxdWFsLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImZpcnN0UGFydHMiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFBhcnQiLCJzaGlmdCIsInB1c2giLCJkZWZpbml0aW9uc0xlbmd0aCIsImVwc2lsb25QYXJ0IiwiRGVmaW5pdGlvbiIsImZpcnN0UGFydHNFcXVhbCIsImFyZVBhcnRzRXF1YWwiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7eUJBWlU7NEJBQ1M7aUVBRUw7cUJBRUw7d0JBQ2lEOzBCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNGLEFBQUVFLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ILHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pLLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsSUFBSSxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDbkUsSUFBSUMsY0FBY0YsS0FBS0csY0FBYztnQkFFckNELGNBQWNBLFlBQVlFLE1BQU0sQ0FBQyxTQUFDQyxZQUFlO29CQUMvQyxJQUFNQywwQkFBMEJDLElBQUFBLHFDQUF5QixFQUFDRjtvQkFFMUQsSUFBSUMseUJBQXlCO3dCQUMzQixJQUFNRSxvQkFBb0JDLElBQUFBLCtCQUFtQixFQUFDSjt3QkFFOUMsSUFBSUcsbUJBQW1COzRCQUNyQixJQUFNRSxXQUFXVixLQUFLVyxPQUFPLElBQ3ZCQyxtQkFBbUJQLFdBQVdRLFFBQVE7NEJBRTVDLE1BQU0sSUFBSUMsTUFBTSxBQUFDLFFBQStDSixPQUF4Q0Usa0JBQWlCLHlCQUFnQyxPQUFURixVQUFTLHVCQUFxQjt3QkFDaEcsQ0FBQzt3QkFFRCxJQUFNSyx5QkFBeUJDLElBQUFBLGdEQUFvQyxFQUFDWCxhQUM5RFksNkJBQTZCdEIsTUFBTW9CO3dCQUV6QyxJQUFJRSwrQkFBK0JoQix1QkFBdUI7NEJBQ3hELE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNILENBQUM7Z0JBQ0g7Z0JBRUEsSUFBTWlCLGFBQWEsRUFBRTtnQkFFckJoQixjQUFjQSxZQUFZRSxNQUFNLENBQUMsU0FBQ0MsWUFBZTtvQkFDL0MsSUFBTWMsUUFBUWQsV0FBV2UsUUFBUSxJQUMzQkMsY0FBY0YsTUFBTUcsTUFBTTtvQkFFaEMsSUFBSUQsY0FBYyxHQUFHO3dCQUNuQixJQUFNRSxZQUFZSixNQUFNSyxLQUFLO3dCQUU3Qk4sV0FBV08sSUFBSSxDQUFDRjt3QkFFaEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBTWIsV0FBV1YsS0FBS1csT0FBTyxJQUN2QmUsb0JBQW9CeEIsWUFBWW9CLE1BQU07Z0JBRTVDLElBQUlJLHNCQUFzQixHQUFHO29CQUMzQixJQUFNQyxjQUFjLElBQUk5QixlQUNsQnNCLFFBQVE7d0JBQ05RO3FCQUNELEVBQ0R0QixhQUFhLElBQUl1Qix3QkFBVSxDQUFDVDtvQkFFbENqQixZQUFZdUIsSUFBSSxDQUFDcEI7Z0JBQ25CLE9BQU87b0JBQ0wsSUFBTXdCLGtCQUFrQkMsSUFBQUEsb0JBQWEsRUFBQ1o7b0JBRXRDLElBQUksQ0FBQ1csaUJBQWlCO3dCQUNwQixNQUFNLElBQUlmLE1BQU0sQUFBQywyQkFBdUZKLE9BQTdEVCx1QkFBc0IseUNBQWdELE9BQVRTLFVBQVMsMEJBQXdCO29CQUMzSSxDQUFDO2dCQUNILENBQUM7Z0JBRUQsSUFBTXFCLDZCQUE2QkMsSUFBQUEsd0VBQThELEVBQUN0QixVQUFVVCx3QkFDdEdnQyxPQUFPRiw0QkFDUEcsWUFBWSxLQUFLLEVBQ2pCQyxrQkFBa0JDLG1CQUFzQixFQUN4Q0MseUJBQXlCLElBaEVkM0MsdUJBZ0V5Q3VDLE1BQU1DLFdBQVdoQyxhQUFhaUM7Z0JBRXhGLE9BQU9FO1lBQ1Q7OztXQW5FbUIzQztFQUErQjRDLGtCQUFJIn0=