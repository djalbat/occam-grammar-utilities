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
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly1.default);
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
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IG1hdGNoUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaXJzdCwgZmluZCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gUmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbmQiLCJ0YWlsIiwiZnJvbVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwicHJldmlvdXNGaXJzdFBhcnQiLCJtYXAiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRzVGFpbCIsImNsb25lUGFydHMiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwiRGVmaW5pdGlvbiIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLG9CQUFvQjs7O3lCQWJWLFdBQVc7NEJBQ1QsZUFBZTs4REFFaEIsNEJBQTRCOzZEQUMzQiw4QkFBOEI7OERBQ25CLDBDQUEwQztxQkFFM0QsdUJBQXVCO29CQUN2QixzQkFBc0I7d0JBQ0ksMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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