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
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/indirectly"));
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
            key: "fromRuleAndLeftRecursiveRuleName",
            value: function fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
                var definitions = rule.getDefinitions();
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName), firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, parts = indirectlyLeftRecursiveDefinition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var parts = indirectlyLeftRecursiveDefinition.getParts();
                    var firstPart = first(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definition = indirectlyLeftRecursiveDefinition, definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        var definition1 = new _occamParsers.Definition(parts);
                        definitions.push(definition1);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition = new _occamParsers.Definition(parts1);
                    definitions.push(definition);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleName)(ruleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamParsers.Rule);
function findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName) {
    var indirectlyLeftRecursiveDefinitions = find(definitions, function(definition) {
        var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
        if (definitionIndirectlyLeftRecursiveDefinition) {
            var indirectlyLeftRecursiveDefinition = definition, leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), ruleName = firstLeftRecursiveRuleName; ///
            if (ruleName === leftRecursiveRuleName) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkXCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgbWF0Y2hQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgZmlyc3QsIHRhaWwsIGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KTtcblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICAgIGVwc2lsb25QYXJ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sICAvLy9cbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICBpZiAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJmaW5kIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwicmVkdWNlIiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0c1RhaWwiLCJjbG9uZVBhcnRzIiwiRGVmaW5pdGlvbiIsInB1c2giLCJkZWZpbml0aW9uc0xlbmd0aCIsImVwc2lsb25QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFlUUEsc0JBQXNCOzs7eUJBYlosV0FBVzs0QkFDRixlQUFlOzZEQUU5QixxQkFBcUI7K0RBQ0EsNENBQTRDO29CQUUvRCxzQkFBc0I7cUJBQ3RCLHVCQUF1Qjt3QkFDSywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQU0sQUFBRUMsV0FBVyxHQUFLQyxhQUFLLE1BQUEsQ0FBckJELFdBQVcsQUFBVSxFQUNyQkUsS0FBSyxHQUFpQkMsVUFBYyxlQUFBLENBQXBDRCxLQUFLLEVBQUVFLElBQUksR0FBV0QsVUFBYyxlQUFBLENBQTdCQyxJQUFJLEVBQUVDLElBQUksR0FBS0YsVUFBYyxlQUFBLENBQXZCRSxJQUFJLEFBQW9CO0FBRTlCLElBQUEsQUFBTU4sc0JBQXNCLGlCQWlFeEMsQUFqRVk7OzthQUFNQSxzQkFBc0I7Ozs7OztZQUNsQ08sR0FBZ0MsRUFBaENBLGtDQUFnQzttQkFBdkMsU0FBT0EsZ0NBQWdDLENBQUNDLElBQUksRUFBRUMscUJBQXFCLEVBQUU7Z0JBQ25FLElB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