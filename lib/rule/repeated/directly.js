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
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated"));
var _recursive = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/directly"));
var _part = require("../../utilities/part");
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
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default);
                    if (definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                }), firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions), directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, parts = directlyLeftRecursiveDefinition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
                    var parts = directlyLeftRecursiveDefinition.getParts();
                    var firstPart = first(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName1 = directlyLeftRecursiveDefinition.getRuleName(), definition = directlyLeftRecursiveDefinition, definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName1, "' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsTail = tail(parts);
                    parts = partsTail; ///
                    var recursiveDefinition = _recursive.default.fromRuleNameAndParts(ruleName, parts), definition1 = recursiveDefinition !== null ? recursiveDefinition : new _occamParsers.Definition(parts);
                    return definition1;
                });
                var repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IG1hdGNoUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbmQsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gUmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgRGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kIiwidGFpbCIsImZyb21SdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwibWFwIiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJnZXRSdWxlTmFtZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwicGFydHNUYWlsIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmRQYXJ0cyIsIkRlZmluaXRpb24iLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkUnVs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