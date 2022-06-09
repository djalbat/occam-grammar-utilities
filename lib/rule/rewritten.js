"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _parts = require("../utilities/parts");
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
var first = _necessary.arrayUtilities.first, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart;
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var definitions = this.getDefinitions(), directlyLeftRecursiveDefinitions = definitions, directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);
                directlyLeftRecursiveDefinition.rewrite(ruleMap);
                this.removeDefinitions();
                this.addDefinition(directlyLeftRecursiveDefinition);
            }
        },
        {
            key: "removeDefinitions",
            value: function removeDefinitions() {
                var definitions = this.getDefinitions();
                definitions.splice(0);
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
        parts1 = firstDirectlyLeftRecursiveDefinition.getParts(); ///
        var firstPart = first(parts1), remainingParts = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
            directlyLeftRecursiveDefinition.removeFirstPart();
            var parts = directlyLeftRecursiveDefinition.getParts(), singlePart = (0, _parts).singlePartFromParts(parts), part = singlePart; ///
            return part;
        }), choiceOfRemainingPartsPart = new ChoiceOfPartsPart(remainingParts);
        parts1 = [
            firstPart,
            choiceOfRemainingPartsPart
        ];
        var ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName(), definition = new _occamParsers.Definition(parts1);
        directlyLeftRecursiveDefinition1 = _directly.default.fromRuleNameAndDefinition(ruleName, definition);
    }
    return directlyLeftRecursiveDefinition1;
}
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSdWxlLCBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5pbXBvcnQge3NpbmdsZVBhcnRGcm9tUGFydHN9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IENob2ljZU9mUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuUnVsZSBleHRlbmRzIFJ1bGUge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLCAvLy9cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbWVyZ2VEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLnJld3JpdGUocnVsZU1hcCk7XG5cbiAgICB0aGlzLnJlbW92ZURlZmluaXRpb25zKCk7XG5cbiAgICB0aGlzLmFkZERlZmluaXRpb24oZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zLnNwbGljZSgwKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmluZCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25NYXRjaGVzRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLm1hdGNoKGRlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IG5ldyBSZXdyaXR0ZW5SdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuXG4gIGNvbnN0IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSxcbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGggPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgbGV0IHBhcnRzO1xuXG4gICAgcGFydHMgPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTsgIC8vL1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHJlbWFpbmluZ1BhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLnJlbW92ZUZpcnN0UGFydCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICAgIHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICAgICAgICAgIHBhcnQgPSBzaW5nbGVQYXJ0OyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUmVtYWluaW5nUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJlbWFpbmluZ1BhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZmlyc3RQYXJ0LFxuICAgICAgY2hvaWNlT2ZSZW1haW5pbmdQYXJ0c1BhcnRcbiAgICBdO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbik7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlJld3JpdHRlblJ1bGUiLCJyZXdyaXRlIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtZXJnZURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJhZGREZWZpbml0aW9uIiwic3BsaWNlIiwiZnJvbVJ1bGVBbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibmFtZSIsImdldE5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsIm1hcCIsImRlZmluaXRpb24iLCJmaW5kIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uIiwibWF0Y2giLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSIsImZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInJlbWFpbmluZ1BhcnRzIiwicmVtb3ZlRmlyc3RQYXJ0Iiwic2luZ2xlUGFydCIsInNpbmdsZVBhcnRGcm9tUGFydHMiLCJwYXJ0IiwiY2hvaWNlT2ZSZW1haW5pbmdQYXJ0c1BhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiRGVmaW5pdGlvbiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUNGLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUVYLElBQUEsU0FBdUMsa0NBQXZDLHVDQUF1QyxFQUFBO0FBQ2pELElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixFQUMxQixBQUFFRSxpQkFBaUIsR0FBS0MsYUFBSyxNQUFBLENBQTNCRCxpQkFBaUIsQUFBVSxBQUFDO0FBRXJCLElBQUEsQUFBTUUsYUFBYSxpQkE0Qy9CLEFBNUNZOzs7YUFBTUEsYUFBYTs7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