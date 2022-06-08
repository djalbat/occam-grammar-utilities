"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _definition = require("../utilities/definition");
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var reducedRule = null;
                var definitions = rule.getDefinitions(), nonLeftRecursiveDefinitions = [];
                backwardsForEach(definitions, function(definition, index) {
                    var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                    if (!definitionLeftRecursive) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                        var nonLeftRecursiveDefinition = definition; ///
                        nonLeftRecursiveDefinitions.unshift(nonLeftRecursiveDefinition);
                    }
                });
                var nonLeftRecursiveDefinitionsLength = nonLeftRecursiveDefinitions.length;
                if (nonLeftRecursiveDefinitionsLength > 0) {
                    var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), name = reducedRuleName, ambiguous = false, definitions1 = nonLeftRecursiveDefinitions, NonTerminalNode = _reduced.default; ///
                    reducedRule = new ReducedRule(name, ambiguous, definitions1, NonTerminalNode);
                }
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZWR1Y2VkXCI7XG5cbmltcG9ydCB7IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgcmVkdWNlZFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gW107XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKVxuXG4gICAgICBpZiAoIWRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBkZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb247IC8vL1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IG5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gcmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsICAvLy9cbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsIlJlZHVjZWRSdWxlIiwiZnJvbVJ1bGUiLCJydWxlIiwicmVkdWNlZFJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibm9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImluZGV4IiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidW5zaGlmdCIsIm5vbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDTCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxRQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFQyxJQUFBLFdBQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBQ3ZCLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQSxnQkFBZ0IsR0FBS0MsVUFBYyxlQUFBLENBQW5DRCxnQkFBZ0IsQUFBbUIsQUFBQztBQUU3QixJQUFBLEFBQU1FLFdBQVcsaUJBQWpCOzs7YUFBTUEsV0FBVzs7Ozs7O1lBQ3ZCQyxHQUFRLEVBQVJBLFVBQVE7bUJBQWYsU0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ3BCLElBQUlDLFdBQVcsR0FBRyxJQUFJLEFBQUM7Z0JBRXZCLElBQU1DLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLEVBQUUsRUFDbkNDLDJCQUEyQixHQUFHLEVBQUUsQUFBQztnQkFFdkNSLGdCQUFnQixDQUFDTSxXQUFXLEVBQUUsU0FBQ0csVUFBVSxFQUFFQyxLQUFLLEVBQUs7b0JBQ25ELElBQU1DLHVCQUF1QixHQUFHQyxDQUFBQSxHQUFBQSxXQUF5QixBQUFZLENBQUEsMEJBQVosQ0FBQ0gsVUFBVSxDQUFDO29CQUVyRSxJQUFJLENBQUNFLHVCQUF1QixFQUFFO3dCQUM1QixJQUFNRSxLQUFLLEdBQUdILEtBQUssRUFDYkksV0FBVyxHQUFHLENBQUMsQUFBQzt3QkFFdEJSLFdBQVcsQ0FBQ1MsTUFBTSxDQUFDRixLQUFLLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO3dCQUV2QyxJQUFNRSwwQkFBMEIsR0FBR1AsVUFBVSxBQUFDLEVBQUMsR0FBRzt3QkFFbERELDJCQUEyQixDQUFDUyxPQUFPLENBQUNELDBCQUEwQixDQUFDLENBQUM7cUJBQ2pFO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNRSxpQ0FBaUMsR0FBR1YsMkJBQTJCLENBQUNXLE1BQU0sQUFBQztnQkFFN0UsSUFBSUQsaUNBQWlDLEdBQUcsQ0FBQyxFQUFFO29CQUN6QyxJQUFNRSxRQUFRLEdBQUdoQixJQUFJLENBQUNpQixPQUFPLEVBQUUsRUFDekJDLGVBQWUsR0FBR0MsQ0FBQUEsR0FBQUEsU0FBMkIsQUFBVSxDQUFBLDRCQUFWLENBQUNILFFBQVEsQ0FBQyxFQUN2REksSUFBSSxHQUFHRixlQUFlLEVBQ3RCRyxTQUFTLEdBQUcsS0FBSyxFQUNqQm5CLFlBQVcsR0FBR0UsMkJBQTJCLEVBQ3pDa0IsZUFBZSxHQUFHQyxRQUFXLFFBQUEsQUFBQyxFQUFFLEdBQUc7b0JBRXpDdEIsV0FBVyxHQUFHLElBQUlILFdBQVcsQ0FBQ3NCLElBQUksRUFBRUMsU0FBUyxFQUFFbkIsWUFBVyxFQUFFb0IsZUFBZSxDQUFDLENBQUM7aUJBQzlFO2dCQUVELE9BQU9yQixXQUFXLENBQUM7YUFDcEI7Ozs7Q0FDRixDQXJDd0N1QixhQUFJLEtBQUEsQ0FxQzVDO2tCQXJDb0IxQixXQUFXIn0=