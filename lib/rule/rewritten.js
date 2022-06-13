"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _class = require("../utilities/class");
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
var find = _necessary.arrayUtilities.find, first = _necessary.arrayUtilities.first, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart;
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
            key: "fromRule",
            value: function fromRule(rule) {
                var name = rule.getName(), ambiguous = rule.isAmbiguous();
                var definitions = rule.getDefinitions();
                var directlyLeftRecursiveDefinitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _directly.default);
                    if (definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                definitions = directlyLeftRecursiveDefinitions; ///
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
        var firstPart = first(parts1), part = firstPart; ///
        var singleParts = directlyLeftRecursiveDefinitions.map(function(directlyLeftRecursiveDefinition) {
            directlyLeftRecursiveDefinition.removeFirstPart();
            var parts = directlyLeftRecursiveDefinition.getParts(), singlePart = (0, _parts).singlePartFromParts(parts);
            return singlePart;
        });
        parts1 = singleParts; ///
        var choiceOfPartsPart = new ChoiceOfPartsPart(parts1);
        parts1 = [
            part,
            choiceOfPartsPart
        ];
        var ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName();
        directlyLeftRecursiveDefinition1 = _directly.default.fromRuleNameAndParts(ruleName, parts1);
    }
    return directlyLeftRecursiveDefinition1;
}
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSwgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHNpbmdsZVBhcnRGcm9tUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5cbmNvbnN0IHsgZmluZCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBDaG9pY2VPZlBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgcmV3cml0ZShydWxlTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucywgLy8vXG4gICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG1lcmdlRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5yZXdyaXRlKHJ1bGVNYXApO1xuXG4gICAgdGhpcy5yZW1vdmVEZWZpbml0aW9ucygpO1xuXG4gICAgdGhpcy5hZGREZWZpbml0aW9uKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSB0aGlzLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucy5zcGxpY2UoMCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCk7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uczsgLy8vXG5cbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcblxuICBjb25zdCBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICB9IGVsc2Uge1xuICAgIGxldCBwYXJ0cztcblxuICAgIHBhcnRzID0gZmlyc3REaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7ICAvLy9cblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgIGNvbnN0IHNpbmdsZVBhcnRzID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLnJlbW92ZUZpcnN0UGFydCgpO1xuXG4gICAgICBjb25zdCBwYXJ0cyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIHNpbmdsZVBhcnQ7XG4gICAgfSk7XG5cbiAgICBwYXJ0cyA9IHNpbmdsZVBhcnRzOyAgLy8vXG5cbiAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICBwYXJ0LFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnRcbiAgICBdXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlJld3JpdHRlblJ1bGUiLCJyZXdyaXRlIiwicnVsZU1hcCIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJtZXJnZURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJhZGREZWZpbml0aW9uIiwic3BsaWNlIiwiZnJvbVJ1bGUiLCJydWxlIiwibmFtZSIsImdldE5hbWUiLCJhbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSIsImZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInBhcnQiLCJzaW5nbGVQYXJ0cyIsIm1hcCIsInJlbW92ZUZpcnN0UGFydCIsInNpbmdsZVBhcnQiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDWixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFRSxJQUFBLFNBQXVDLGtDQUF2Qyx1Q0FBdUMsRUFBQTtBQUV0RCxJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ2IsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQSxJQUFJLEdBQVlDLFVBQWMsZUFBQSxDQUE5QkQsSUFBSSxFQUFFRSxLQUFLLEdBQUtELFVBQWMsZUFBQSxDQUF4QkMsS0FBSyxFQUNiLEFBQUVDLGlCQUFpQixHQUFLQyxhQUFLLE1BQUEsQ0FBM0JELGlCQUFpQixBQUFVLEFBQUM7QUFFckIsSUFBQSxBQUFNRSxhQUFhLGlCQTBDL0IsQUExQ1k7OzthQUFNQSxhQUFhOzs7Ozs7WUFDaENDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQ0MsY0FBYyxFQUFFLEVBQ25DQyxnQ0FBZ0MsR0FBR0YsV0FBVyxFQUM5Q0csK0JBQStCLEdBQUdDLHFDQUFxQyxDQUFDRixnQ0FBZ0MsQ0FBQyxBQUFDO2dCQUVoSEMsK0JBQStCLENBQUNMLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Z0JBRWpELElBQUksQ0FBQ00saUJBQWlCLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxDQUFDQyxhQUFhLENBQUNILCtCQUErQixDQUFDLENBQUM7YUFDckQ7OztZQUVERSxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1MLFdBQVcsR0FBRyxJQUFJLENBQUNDLGNBQWMsRUFBRSxBQUFDO2dCQUUxQ0QsV0FBVyxDQUFDTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7Ozs7WUFFTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNwQixJQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxFQUFFLEVBQ3JCQyxTQUFTLEdBQUdILElBQUksQ0FBQ0ksV0FBVyxFQUFFLEFBQUM7Z0JBRXJDLElBQUliLFdBQVcsR0FBR1MsSUFBSSxDQUFDUixjQUFjLEVBQUUsQUFBQztnQkFFeEMsSUFBTUMsZ0NBQWdDLEdBQUdWLElBQUksQ0FBQ1EsV0FBVyxFQUFFLFNBQUNjLFVBQVUsRUFBSztvQkFDbkUsSUFBTUMseUNBQXlDLEdBQUdDLENBQUFBLEdBQUFBLE1BQVksQUFBNkMsQ0FBQSxhQUE3QyxDQUFDRixVQUFVLEVBQUVHLFNBQStCLFFBQUEsQ0FBQyxBQUFDO29CQUU1RyxJQUFJRix5Q0FBeUMsRUFBRTt3QkFDN0MsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxBQUFDO2dCQUVUZixXQUFXLEdBQUdFLGdDQUFnQyxDQUFDLENBQUMsR0FBRztnQkFFbkQsSUFBTWdCLGVBQWUsR0FBR1QsSUFBSSxDQUFDVSxrQkFBa0IsRUFBRSxFQUMzQ0MsYUFBYSxHQUFHLElBQUl2QixhQUFhLENBQUNhLElBQUksRUFBRUUsU0FBUyxFQUFFWixXQUFXLEVBQUVrQixlQUFlLENBQUMsQUFBQztnQkFFdkYsT0FBT0UsYUFBYSxDQUFDO2FBQ3RCOzs7O0NBQ0YsQ0F4QzBDQyxhQUFJLEtBQUEsQ0F3QzlDO0FBRUQsU0FBU2pCLHFDQUFxQyxDQUFDRixnQ0FBZ0MsRUFBRTtJQUMvRSxJQUFJQyxnQ0FBK0IsQUFBQztJQUVwQyxJQUFNbUIsb0NBQW9DLEdBQUc1QixLQUFLLENBQUNRLGdDQUFnQyxDQUFDLEVBQzlFcUIsc0NBQXNDLEdBQUdyQixnQ0FBZ0MsQ0FBQ3NCLE1BQU0sQUFBQztJQUV2RixJQUFJRCxzQ0FBc0MsS0FBSyxDQUFDLEVBQUU7UUFDaERwQixnQ0FBK0IsR0FBR21CLG9DQUFvQyxDQUFDLENBQUMsR0FBRztLQUM1RSxNQUFNO1FBQ0wsSUFBSUcsTUFBSyxBQUFDO1FBRVZBLE1BQUssR0FBR0gsb0NBQW9DLENBQUNJLFFBQVEsRUFBRSxDQUFDLENBQUUsR0FBRztRQUU3RCxJQUFNQyxTQUFTLEdBQUdqQyxLQUFLLENBQUMrQixNQUFLLENBQUMsRUFDeEJHLElBQUksR0FBR0QsU0FBUyxBQUFDLEVBQUMsR0FBRztRQUUzQixJQUFNRSxXQUFXLEdBQUczQixnQ0FBZ0MsQ0FBQzRCLEdBQUcsQ0FBQyxTQUFDM0IsK0JBQStCLEVBQUs7WUFDNUZBLCtCQUErQixDQUFDNEIsZUFBZSxFQUFFLENBQUM7WUFFbEQsSUFBTU4sS0FBSyxHQUFHdEIsK0JBQStCLENBQUN1QixRQUFRLEVBQUUsRUFDbERNLFVBQVUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBbUIsQUFBTyxDQUFBLG9CQUFQLENBQUNSLEtBQUssQ0FBQyxBQUFDO1lBRTlDLE9BQU9PLFVBQVUsQ0FBQztTQUNuQixDQUFDLEFBQUM7UUFFSFAsTUFBSyxHQUFHSSxXQUFXLENBQUMsQ0FBRSxHQUFHO1FBRXpCLElBQU1LLGlCQUFpQixHQUFHLElBQUl2QyxpQkFBaUIsQ0FBQzhCLE1BQUssQ0FBQyxBQUFDO1FBRXZEQSxNQUFLLEdBQUc7WUFDTkcsSUFBSTtZQUNKTSxpQkFBaUI7U0FDbEI7UUFFRCxJQUFNQyxRQUFRLEdBQUdiLG9DQUFvQyxDQUFDYyxXQUFXLEVBQUUsQUFBQztRQUVwRWpDLGdDQUErQixHQUFHYyxTQUErQixRQUFBLENBQUNvQixvQkFBb0IsQ0FBQ0YsUUFBUSxFQUFFVixNQUFLLENBQUMsQ0FBQztLQUN6RztJQUVELE9BQU90QixnQ0FBK0IsQ0FBQztDQUN4QztrQkFsRm9CTixhQUFhIn0=