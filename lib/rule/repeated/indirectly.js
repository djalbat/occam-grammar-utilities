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
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions), firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(), firstIndirectlyLeftRecursiveDefinitionPart = first(indirectlyLeftRecursiveDefinitionParts), previousFirstPart = firstIndirectlyLeftRecursiveDefinitionPart, definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var parts = indirectlyLeftRecursiveDefinition.getParts();
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
                        var _$definition = new _occamParsers.Definition(parts);
                        definitions.push(_$definition);
                    }
                    return definitions;
                }, []), definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition1 = new _occamParsers.Definition(parts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBmaXJzdCwgdGFpbCwgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydCA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydCwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyAgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sICAvLy9cbiAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwiZmluZCIsImZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwiZGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJwYXJ0cyIsImZpcnN0UGFydCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJkZWZpbml0aW9uIiwiYXNTdHJpbmciLCJFcnJvciIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwiY2xvbmVQYXJ0cyIsIkRlZmluaXRpb24iLCJwdXNoIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJlcHNpbG9uUGFydCIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWVRQSxzQkFBc0I7Ozt5QkFiWixXQUFXOzRCQUNGLGVBQWU7K0RBRXBCLGdDQUFnQztnRUFDckIsMkNBQTJDO29CQUU5RCxzQkFBc0I7cUJBQ3RCLHVCQUF1Qjt3QkFDNkIsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RyxJQUFNLEFBQUVDLFdBQVcsR0FBS0MsYUFBSyxNQUFBLENBQXJCRCxXQUFXLEFBQVUsRUFDckJFLEtBQUssR0FBaUJDLFVBQWMsZUFBQSxDQUFwQ0QsS0FBSyxFQUFFRSxJQUFJLEdBQVdELFVBQWMsZUFBQSxDQUE3QkMsSUFBSSxFQUFFQyxJQUFJLEdBQUtGLFVBQWMsZUFBQSxDQUF2QkUsSUFBSSxBQUFvQjtBQUU5QixJQUFBLEFBQU1OLHNCQUFzQixpQkE0RHhDLEFBNURZOzs7YUFBTUEsc0JBQXNCOzs7Ozs7WUFDbENPLEdBQXdELEVBQXhEQSwwREFBd0Q7bUJBQS9ELFNBQU9BLHdEQUF3RCxDQUFDQyxJQUFJLEVBQUVDLHFCQUFxQixFQUFFQyx3QkFBd0IsRUFBRTtnQkFDckgsSUFBTUMsa0NBQWtDLEdBQUdDLHNDQUFzQyxDQUFDSixJQUFJLEVBQUVDLHFCQUFxQixFQUFFQyx3QkFBd0IsQ0FBQyxFQUNsSUcsc0NBQXNDLEdBQUdWLEtBQUssQ0FBQ1Esa0NBQWtDLENBQUMsRUFDbEZHLGlDQUFpQyxHQUFHRCxzQ0FBc0MsRUFDMUVFLHNDQUFzQyxHQUFHRCxp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