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
var _parts = require("../../utilities/parts");
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
                    var partsLength = parts.length;
                    if (partsLength === 1) {
                        var ruleName2 = directlyLeftRecursiveDefinition.getRuleName(), definition1 = directlyLeftRecursiveDefinition, definitionString1 = definition1.asString();
                        throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName2, "' rule is unary and therefore cannot be rewritten."));
                    }
                    var partsTail = tail(parts);
                    parts = partsTail; ///
                    parts = (0, _parts.cloneParts)(parts); ///
                    var recursiveDefinition = _recursive.default.fromRuleNameAndParts(ruleName, parts), definition2 = recursiveDefinition !== null ? recursiveDefinition : new _occamParsers.Definition(parts);
                    return definition2;
                });
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbmQsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IERpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmluZCIsInRhaWwiLCJmcm9tUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hcCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwiY2xvbmVQYXJ0cyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJEZWZpbml0aW9uIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLG9CQUFvQjs7O3lCQWJWLFdBQVc7NEJBQ1QsZUFBZTs2REFFdkIscUJBQXFCOzhEQUNkLDRCQUE0Qjs2REFDaEIsMENBQTBDO3FCQUUzRCx1QkFBdUI7b0JBQ3ZCLHNCQUFzQjt3QkFDSSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQVFDLEtBQUss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