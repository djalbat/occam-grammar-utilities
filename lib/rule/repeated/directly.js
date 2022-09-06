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
                directlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions.filter(function(directlyLeftRecursiveDefinition) {
                    var directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();
                    if (directlyLeftRecursiveDefinitionRule === rule) {
                        return true;
                    }
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IG1hdGNoUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgdGFpbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgaWYgKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpLFxuICAgICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgdW5hcnkgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IERpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZmlsdGVyIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZ2V0UnVsZSIsImRlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwicHVzaCIsImZpcnN0RGVmaW5pdGlvbiIsImZpcnN0IiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwibWFwIiwicGFydHNUYWlsIiwidGFpbCIsIm1hdGNoZXMiLCJtYXRjaFBhcnRzIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsImNsb25lUGFydHMiLCJEZWZpbml0aW9uIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFZUUEsb0JBQW9COzs7NEJBVlIsZUFBZTs2REFFZiw4QkFBOEI7b0JBRXBDLHNCQUFzQjtxQkFDdEIsdUJBQXVCO3FCQUN0Qix1QkFBdUI7MEJBQ2pCLDRCQUE0Qjt3QkFDVCwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSxvQkFBb0IsaUJBQTFCO2NBQU1BLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjthQUFwQkEsb0JBQW9COzhCQUFwQkEsb0JBQW9COzs7aUJBQXBCQSxvQkFBb0I7O1lBQ2hDQyxHQUEyQyxFQUEzQ0EsNkNBQTJDO21CQUFsRCxTQUFPQSwyQ0FBMkMsQ0FBQ0MsSUFBSSxFQUFFQyxnQ0FBZ0MsRUFBRTtnQkFDekYsSUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQU8sRUFBRSxBQUFDO2dCQUVoQ0YsZ0NBQWdDLEdBQUdBLGdDQUFnQyxDQUFDRyxNQUFNLENBQUMsU0FBQ0MsK0JBQStCLEVBQUs7b0JBQzlHLElBQU1DLG1DQUFtQyxHQUFHRCwrQkFBK0IsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7b0JBRXRGLElBQUlELG1DQUFtQyxLQUFLTixJQUFJLEVBQUU7d0JBQ2hELE9B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