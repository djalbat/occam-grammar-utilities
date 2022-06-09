"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var first = _necessary.arrayUtilities.first, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart;
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, [
        {
            key: "removeDefinitions",
            value: function removeDefinitions() {
                var definitions = this.getDefinitions();
                definitions.splice(0);
            }
        },
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var definitions = this.getDefinitions(), directlyLeftRecursiveDefinitions = definitions, directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);
                directlyLeftRecursiveDefinition.rewrite(ruleMap);
                this.removeDefinitions();
                this.addDefinition(directlyLeftRecursiveDefinition);
            }
        }
    ], [
        {
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var name = rule.getName(), ambiguous = rule.isAmbiguous();
                var definitions = rule.getDefinitions();
                definitions = definitions.map(function(definition) {
                    definition = leftRecursiveDefinitions.find(function(leftRecursiveDefinition) {
                        var leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinition.match(definition);
                        if (leftRecursiveDefinitionMatchesDefinition) {
                            return true;
                        }
                    });
                    return definition;
                });
                var NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
    var directlyLeftRecursiveDefinition1;
    var firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions), directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;
    if (directlyLeftRecursiveDefinitionsLength === 1) {
        directlyLeftRecursiveDefinition1 = firstDirectlyLeftRecursiveDefinition; ///
    } else {
        var parts1;
        var firstDirectlyLeftRecursiveDefinitionParts = firstDirectlyLeftRecursiveDefinition.getParts();
        parts1 = firstDirectlyLeftRecursiveDefinitionParts; ///
        var firstPart1 = first(parts1);
        parts1 = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
            var part, parts;
            var directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts();
            parts = directlyLeftRecursiveDefinitionParts; ///
            parts.shift();
            var partsLength = parts.length;
            if (partsLength === 1) {
                var firstPart = first(parts);
                part = firstPart; ///
            } else {
                var sequenceOfPartsPart = new SequenceOfPartsPart(parts);
                part = sequenceOfPartsPart; ///
            }
            return part;
        });
        var choiceOfPartsPart = new ChoiceOfPartsPart(parts1);
        parts1 = [
            firstPart1,
            choiceOfPartsPart
        ];
        var ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName(), definition = new _occamParsers.Definition(parts1);
        directlyLeftRecursiveDefinition1 = _directly.default.fromRuleNameAndDefinition(ruleName, definition);
    }
    return directlyLeftRecursiveDefinition1;
}
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSdWxlLCBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBDaG9pY2VPZlBhcnRzUGFydCwgU2VxdWVuY2VPZlBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgcmVtb3ZlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucy5zcGxpY2UoMCk7XG4gIH1cblxuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLCAvLy9cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbWVyZ2VEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLnJld3JpdGUocnVsZU1hcCk7XG5cbiAgICB0aGlzLnJlbW92ZURlZmluaXRpb25zKCk7XG5cbiAgICB0aGlzLmFkZERlZmluaXRpb24oZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKTtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbmQoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5tYXRjaChkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25NYXRjaGVzRGVmaW5pdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcblxuICBjb25zdCBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICB9IGVsc2Uge1xuICAgIGxldCBwYXJ0cztcblxuICAgIGNvbnN0IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzOyAgLy8vXG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLm1hcCgoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnQsXG4gICAgICAgICAgcGFydHM7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHM7IC8vL1xuXG4gICAgICBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZmlyc3RQYXJ0LFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJSZXdyaXR0ZW5SdWxlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwic3BsaWNlIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtZXJnZURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiYWRkRGVmaW5pdGlvbiIsImZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIm5hbWUiLCJnZXROYW1lIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJtYXAiLCJkZWZpbml0aW9uIiwiZmluZCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25NYXRjaGVzRGVmaW5pdGlvbiIsIm1hdGNoIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiLCJmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzIiwiZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInBhcnQiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJzaGlmdCIsInBhcnRzTGVuZ3RoIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIkRlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFDRixJQUFB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