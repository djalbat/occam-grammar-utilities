"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RepeatedRule;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../node/repeated"));
var _parts = require("../utilities/parts");
var _ruleName = require("../utilities/ruleName");
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
var first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail;
var RepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(RepeatedRule, Rule);
    var _super = _createSuper(RepeatedRule);
    function RepeatedRule() {
        _classCallCheck(this, RepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(RepeatedRule, null, [
        {
            key: "fromDirectlyLeftRecursiveDefinitions",
            value: function fromDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
                var definitions = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
                    var parts = directlyLeftRecursiveDefinition.getParts();
                    var partsTail = tail(parts);
                    parts = partsTail; ///
                    parts = (0, _parts.cloneParts)(parts); ///
                    var definition = new _occamParsers.Definition(parts);
                    return definition;
                });
                var firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions), directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, ruleName = directlyLeftRecursiveDefinition.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinitions",
            value: function fromIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
                var repeatedRule = null;
                var definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var parts = indirectlyLeftRecursiveDefinition.getParts();
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        var definition = new _occamParsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default; ///
                    repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IHJlcGVhdGVkUnVsZSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZTsgIC8vL1xuXG4gICAgICByZXBlYXRlZFJ1bGUgPSBuZXcgUmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBlYXRlZFJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbnMiLCJtYXAiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzVGFpbCIsImNsb25lUGFydHMiLCJkZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsImZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZFJ1bGUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJkZWZpbml0aW9uc0xlbmd0aCIsImZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBWVFBLFlBQVk7Ozt5QkFWRixXQUFXOzRCQUNULGVBQWU7NkRBRXZCLGtCQUFrQjtxQkFFaEIs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