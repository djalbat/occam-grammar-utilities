"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _directly = _interopRequireDefault(require("../definition/recursive/left/directly"));
var _class = require("../utilities/class");
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
var find = _necessary.arrayUtilities.find;
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, null, [
        {
            key: "fromDirectlyLeftRecursiveRule",
            value: function fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule) {
                var rule = directlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _directly.default);
                    if (!definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    debugger;
                }
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
                rule.removeDefinitions(definitions);
                var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpc0luc3RhbmNlT2YgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShkaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGlzSW5zdGFuY2VPZihkZWZpbml0aW9uLCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcnVsZS5yZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucyk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiUmVkdWNlZFJ1bGUiLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlbW92ZURlZmluaXRpb25zIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVEsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ0wsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsUUFBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ0csSUFBQSxTQUF1QyxrQ0FBdkMsdUNBQXVDLEVBQUE7QUFFdEQsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNMLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsV0FBVyxpQkFBakI7OzthQUFNQSxXQUFXOzs7Ozs7WUFDdkJDLEdBQTZCLEVBQTdCQSwrQkFBNkI7bUJBQXBDLFNBQU9BLDZCQUE2QixDQUFDQyx5QkFBeUIsRUFBRTtnQkFDOUQsSUFBTUMsSUFBSSxHQUFHRCx5QkFBeUIsQUFBQyxFQUFFLEdBQUc7Z0JBRTVDLElBQUlFLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxjQUFjLEVBQUUsQUFBQztnQkFFeENELFdBQVcsR0FBR04sSUFBSSxDQUFDTSxXQUFXLEVBQUUsU0FBQ0UsVUFBVSxFQUFLO29CQUM5QyxJQUFNQyx5Q0FBeUMsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBWSxBQUE2QyxDQUFBLGFBQTdDLENBQUNGLFVBQVUsRUFBRUcsU0FBK0IsUUFBQSxDQUFDLEFBQUM7b0JBRTVHLElBQUksQ0FBQ0YseUNBQXlDLEVBQUU7d0JBQzlDLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNRyxpQkFBaUIsR0FBR04sV0FBVyxDQUFDTyxNQUFNLEFBQUM7Z0JBRTdDLElBQUlELGlCQUFpQixLQUFLLENBQUMsRUFBRTtvQkFDM0IsUUFBUTtpQkFDVDtnQkFFRCxJQUFNRSxRQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEVBQ3pCQyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFNBQTJCLEFBQVUsQ0FBQSw0QkFBVixDQUFDSCxRQUFRLENBQUMsQUFBQztnQkFFOURULElBQUksQ0FBQ2EsaUJBQWlCLENBQUNaLFdBQVcsQ0FBQyxDQUFDO2dCQUVwQyxJQUFNYSxJQUFJLEdBQUdILGVBQWUsRUFDdEJJLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxlQUFlLEdBQUdDLFFBQVcsUUFBQSxFQUM3QkMsV0FBVyxHQUFHLElBQUlyQixXQUFXLENBQUNpQixJQUFJLEVBQUVDLFNBQVMsRUFBRWQsV0FBVyxFQUFFZSxlQUFlLENBQUMsQUFBQztnQkFFbkYsT0FBT0UsV0FBVyxDQUFDO2FBQ3BCOzs7O0NBQ0YsQ0FoQ3dDQyxhQUFJLEtBQUEsQ0FnQzVDO2tCQWhDb0J0QixXQUFXIn0=