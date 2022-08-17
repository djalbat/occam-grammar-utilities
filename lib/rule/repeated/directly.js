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
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/directly"));
var _directly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/directly"));
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
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var ruleName = rule.getName(), directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);
                var definitions = directlyLeftRecursiveDefinitions.reduce(function(definitions, directlyLeftRecursiveDefinition) {
                    var definition = directlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var firstDefinition = first(definitions), definition = firstDefinition, parts = definition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = definitions.map(function(definition) {
                    var parts = definition.getParts();
                    var firstPart = first(parts), partsTail = tail(parts);
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
function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    var directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _directly1.default);
            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return directlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgbWF0Y2hQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbmQsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseVJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IERpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaW5kIiwidGFpbCIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwicHVzaCIsImZpcnN0RGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsIm1hcCIsInBhcnRzVGFpbCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImNsb25lUGFydHMiLCJEZWZpbml0aW9uIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0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