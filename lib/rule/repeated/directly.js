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
var _occamParsers = require("occam-parsers");
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/directly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _array = require("../../utilities/array");
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
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _createSuper(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _classCallCheck(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatedRule, null, [
        {
            key: "fromRuleAndDirectlyLeftRecursiveDefinitions",
            value: function fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions) {
                var ruleName = rule.getName();
                var definitions = directlyLeftRecursiveDefinitions.reduce(function(definitions, directlyLeftRecursiveDefinition) {
                    var definition = directlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var firstDefinition = (0, _array.first)(definitions), definition = firstDefinition, parts = definition.getParts(), firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
                definitions = definitions.map(function(definition) {
                    var parts = definition.getParts();
                    var firstPart = (0, _array.first)(parts), partsTail = (0, _array.tail)(parts);
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
                    definition = new _occamParsers.Definition(parts);
                    return definition;
                });
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IG1hdGNoUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgdGFpbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICBjb25zdCBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KSxcbiAgICAgICAgICAgIGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVBbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwicmVkdWNlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInB1c2giLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdCIsInBhcnRzIiwiZ2V0UGFydHMiLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hcCIsInBhcnRzVGFpbCIsInRhaWwiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJjbG9uZVBhcnRzIiwiRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBWVFBLG9CQUFvQjs7OzRCQVZSLGVBQWU7NkRBRWYsOEJBQThCO29CQUVwQyxzQkFBc0I7cUJBQ3RCLHVCQUF1Qjtx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