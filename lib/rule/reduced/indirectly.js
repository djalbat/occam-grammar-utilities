"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReducedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/indirectly"));
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
var IndirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyReducedRule, Rule);
    var _super = _createSuper(IndirectlyReducedRule);
    function IndirectlyReducedRule() {
        _classCallCheck(this, IndirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReducedRule, [
        {
            key: "isVacuous",
            value: function isVacuous() {
                var definitionsLength = this.definitions.length, vacuous = definitionsLength === 0;
                return vacuous;
            }
        }
    ], [
        {
            key: "fromRuleAndIndirectlyLeftRecursiveDefinitions",
            value: function fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions) {
                indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.filter(function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();
                    if (indirectlyLeftRecursiveDefinitionRule === rule) {
                        return true;
                    }
                });
                var definitions = rule.getDefinitions();
                definitions = definitions.slice(0); ///
                indirectlyLeftRecursiveDefinitions.forEach(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), index = definitions.indexOf(definition);
                    if (index > -1) {
                        var start = index, deleteCount = 1;
                        definitions.splice(start, deleteCount);
                    }
                });
                var ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), name = indirectlyReducedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVkdWNlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc1ZhY3VvdXMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB2YWN1b3VzID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB2YWN1b3VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPT09IHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnNsaWNlKDApOyAgLy8vXG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZvckVhY2goKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgICBpbmRleCA9IGRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiaXNWYWN1b3VzIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsInZhY3VvdXMiLCJmcm9tUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbHRlciIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJzbGljZSIsImZvckVhY2giLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJydWxlTmFtZSIsImdldE5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJJbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEscUJBQXFCOzs7NEJBTnJCLGVBQWU7K0RBRUYsK0JBQStCO3dCQUVYLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLHFCQUFxQixpQkFBM0I7Y0FBTUEscUJBQXFCOzhCQUFyQkEscUJBQXFCO2FBQXJCQSxxQkFBcUI7OEJBQXJCQSxxQkFBcUI7OztpQkFBckJBLHFCQUFxQjs7WUFDeENDLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLElBQU1DLGlCQUFpQixHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLEVBQzNDQyxPQUFPLEdBQUlILGlCQUFpQixLQUFLLENBQUMsQUFBQyxBQUFDO2dCQUUxQyxPQUFPRyxPQUFPLENBQUM7WUFDakIsQ0FBQzs7OztZQUVNQyxHQUE2QyxFQUE3Q0EsK0NBQTZDO21CQUFwRCxTQUFPQSw2Q0FBNkMsQ0FBQ0MsSUFBSSxFQUFFQyxrQ0FBa0MsRUFBRTtnQkFDN0ZBLGtDQUFrQyxHQUFHQSxrQ0FBa0MsQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLGlDQUFpQyxFQUFLO29CQUNwSCxJQUFNQyxxQ0FBcUMsR0FBR0QsaUNBQWlDLENBQUNFLE9BQU8sRUFBRSxBQUFDO29CQUUxRixJQUFJRCxxQ0FBcUMsS0FBS0osSUFBSSxFQUFFO3dCQUNsRCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUlKLFdBQVcsR0FBR0ksSUFBSSxDQUFDTSxjQUFjLEVBQUUsQUFBQztnQkFFeENWLFdBQVcsR0FBR0EsV0FBVyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUV4Q04sa0NBQWtDLENBQUNPLE9BQU8sQ0FBQyxTQUFDTCxpQ0FBaUMsRUFBSztvQkFDaEYsSUFBTU0sVUFBVSxHQUFHTixpQ0FBaUMsQ0FBQ08sYUFBYSxFQUFFLEVBQzlEQyxLQUFLLEdBQUdmLFdBQVcsQ0FBQ2dCLE9BQU8sQ0FBQ0gsVUFBVSxDQUFDLEFBQUM7b0JBRTlDLElBQUlFLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDZCxJQUFNRSxLQUFLLEdBQUdGLEtBQUssRUFDYkcsV0FBVyxHQUFHLENBQUMsQUFBQzt3QkFFdEJsQixXQUFXLENBQUNtQixNQUFNLENBQUNGLEtBQUssRUFBRUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBTUUsUUFBUSxHQUFHaEIsSUFBSSxDQUFDaUIsT0FBTyxFQUFFLEVBQ3pCQyx5QkFBeUIsR0FBR0MsSUFBQUEsU0FBcUMsc0NBQUEsRUFBQ0gsUUFBUSxDQUFDLEVBQzNFSSxJQUFJLEdBQUdGLHlCQUF5QixFQUNoQ0csU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsV0FBcUIsUUFBQSxFQUN2Q0MscUJBQXFCLEdBQUcsSUF0Q2IvQixxQkFBcUIsQ0FzQ2tCMkIsSUFBSSxFQUFFQyxTQUFTLEVBQUV6QixXQUFXLEVBQUUwQixlQUFlLENBQUMsQUFBQztnQkFFdkcsT0FBT0UscUJBQXFCLENBQUM7WUFDL0IsQ0FBQzs7O1dBekNrQi9CLHFCQUFxQjtDQTBDekMsQ0ExQ2tEZ0MsYUFBSSxLQUFBLENBMEN0RCJ9