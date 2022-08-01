"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRule;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _recursive = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/directly"));
var _directly1 = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/directly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _definition = require("../../utilities/definition");
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
var first = _necessary.arrayUtilities.first, find = _necessary.arrayUtilities.find, tail = _necessary.arrayUtilities.tail;
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _createSuper(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _classCallCheck(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), directlyLeftRecursiveDefinitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly1.default);
                    if (definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                }), firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions), directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, parts = directlyLeftRecursiveDefinition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
                    var parts = directlyLeftRecursiveDefinition.getParts(), definition;
                    var ruleName = directlyLeftRecursiveDefinition.getRuleName(), firstPart = first(parts), partsTail = tail(parts);
                    definition = directlyLeftRecursiveDefinition; ///
                    var matches = (0, _part.matchParts)(firstPart, previousFirstPart), definitionUnary = (0, _definition.isDefinitionUnary)(definition);
                    if (!matches) {
                        var definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    if (definitionUnary) {
                        var definitionString1 = definition.asString();
                        throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                    }
                    parts = partsTail; ///
                    parts = (0, _parts.cloneParts)(parts); ///
                    var recursiveDefinition = _recursive.default.fromRuleNameAndParts(ruleName, parts);
                    definition = recursiveDefinition !== null ? recursiveDefinition : new _occamParsers.Definition(parts);
                    return definition;
                });
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgbWF0Y2hQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbmQsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgZGVmaW5pdGlvbjtcblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgICBjb25zdCBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KSxcbiAgICAgICAgICAgIGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gUmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9uID0gKHJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IERpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmluZCIsInRhaWwiLCJmcm9tUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hcCIsImdldFJ1bGVOYW1lIiwicGFydHNUYWlsIiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiY2xvbmVQYXJ0cyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJEZWZpbml0aW9uIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFnQlFBLG9CQUFvQjs7O3lCQWRWLFdBQVc7NEJBQ1QsZUFBZTs4REFFaEIsNEJBQTRCOzZEQUMzQiw4QkFBOEI7OERBQ25CLDBDQUEwQztvQkFFM0Qsc0JBQXNCO3FCQUN0Qix1QkFBdUI7MEJBQ2hCLDRCQUE0Qjt3QkFDVCwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElB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