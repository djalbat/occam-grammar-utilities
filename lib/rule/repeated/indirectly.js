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
var _occamParsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _ruleName = require("../../utilities/ruleName");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var EpsilonPart = _occamParsers.Parts.EpsilonPart, first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail, find = _necessary.arrayUtilities.find;
var IndirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyRepeatedRule, Rule);
    var _super = _createSuper(IndirectlyRepeatedRule);
    function IndirectlyRepeatedRule() {
        _classCallCheck(this, IndirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyRepeatedRule, null, [
        {
            key: "fromRuleLeftRecursiveRuleNameAndLeftRecursiveDefinitions",
            value: function fromRuleLeftRecursiveRuleNameAndLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions) {
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions), firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///
                var definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var firstDefinition = first(definitions), definition = firstDefinition, parts = definition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = definitions.reduce(function(definitions, definition) {
                    var parts = definition.getParts();
                    var firstPart = first(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        definition = new _occamParsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition1 = new _occamParsers.Definition(parts1);
                    definitions.push(definition1);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamParsers.Rule);
function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions) {
    var indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly1.default);
            if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
                var indirectlyLeftRecursiveDefinition = leftRecursiveDefinition, indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                    return true;
                }
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBmaXJzdCwgdGFpbCwgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnRzICA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJmaW5kIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsInJlZHVjZSIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInB1c2giLCJmaXJzdERlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwicHJldmlvdXNGaXJzdFBhcnQiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwiY2xvbmVQYXJ0cyIsIkRlZmluaXRpb24iLCJkZWZpbml0aW9uc0xlbmd0aCIsImVwc2lsb25QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLHNCQUFzQjs7O3lCQWJaLFdBQVc7NEJBQ0YsZUFBZTsrREFFcEIsZ0NBQWdDO2dFQUNyQiwyQ0FBMkM7b0JBRTlELHNCQUFzQjtxQkFDdEIsdUJBQXVCO3dCQUM2QiwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpHLElBQU0sQUFBRUMsV0FBVyxHQUFLQyxhQUFLLE1BQUEsQ0FBckJELFdBQVcsQUFBVSxFQUNyQkUsS0FBSyxHQUFpQkMsVUFBYyxlQUFBLENBQXBDRCxLQUFLLEVBQUVFLElBQUksR0FBV0QsVUFBYyxlQUFBLENBQTdCQyxJQUFJLEVBQUVDLElBQUksR0FBS0YsVUFBYyxlQUFBLENBQXZCRSxJQUFJLEFBQW9CO0FBRTlCLElBQUEsQUFBTU4sc0JBQXNCLGlCQTRFeEMsQUE1RVk7OzthQUFNQSxzQkFBc0I7Ozs7OztZQUNsQ08sR0FBd0QsRUFBeERBLDBEQUF3RDttQkFBL0QsU0FBT0Esd0RBQXdELENBQUNDLElBQUksRUFBRUMscUJBQXFCLEVBQUVDLHdCQUF3QixFQUFFO2dCQUNy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