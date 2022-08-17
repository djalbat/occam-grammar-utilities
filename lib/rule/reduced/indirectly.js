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
var _necessary = require("necessary");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
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
var find = _necessary.arrayUtilities.find;
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
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);
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
function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    var indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionRule === rule) {
            var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly1.default);
            if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBpc1ZhY3VvdXMoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB2YWN1b3VzID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB2YWN1b3VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5zbGljZSgwKTsgIC8vL1xuXG4gICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5mb3JFYWNoKChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgaW5kZXggPSBkZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBkZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPT09IHJ1bGUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlZHVjZWRSdWxlIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiaXNWYWN1b3VzIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsInZhY3VvdXMiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInNsaWNlIiwiZm9yRWFjaCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIlJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSIsImdldFJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBWVFBLHFCQUFxQjs7OzRCQVZyQixlQUFlO3lCQUNMLFdBQVc7K0RBRVIsK0JBQStCO2dFQUNuQiwyQ0FBMkM7d0JBRW5DLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBTSxBQUFFQyxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUQscUJBQXFCLGlCQXNDdkMsQUF0Q1k7OzthQUFNQSxxQkFBcUI7Ozs7OztZQUN4Q0csR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sRUFDM0NDLE9BQU8sR0FBSUgsaUJBQWlCLEtBQUssQ0FBQyxBQUFDLEFBQUM7Z0JBRTFDLE9BQU9HLE9BQU8sQ0FBQzthQUNoQjs7OztZQUVNQyxHQUFtQyxFQUFuQ0EscUNBQW1DO21CQUExQyxTQUFPQSxtQ0FBbUMsQ0FBQ0MsSUFBSSxFQUFFQyx3QkFBd0IsRUFBRTtnQkFDekUsSUFBTUMsa0NBQWtDLEdBQUdDLHNDQUFzQyxDQUFDSCxJQUFJLEVBQUVDLHdCQUF3QixDQUFDLEFBQUM7Z0JBRWxILElBQUlMLFdBQVcsR0FBR0ksSUFBSSxDQUFDSSxjQUFjLEVBQUUsQUFBQztnQkFFeENSLFdBQVcsR0FBR0EsV0FBVyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUV4Q0gsa0NBQWtDLENBQUNJLE9BQU8sQ0FBQyxTQUFDQyxpQ0FBaUMsRUFBSztvQkFDaEYsSUFBTUMsVUFBVSxHQUFHRCxpQ0FBaUMsQ0FBQ0UsYUFBYSxFQUFFLEVBQzlEQyxLQUFLLEdBQUdkLFdBQVcsQ0FBQ2UsT0FBTyxDQUFDSCxVQUFVLENBQUMsQUFBQztvQkFFOUMsSUFBSUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLElBQU1FLEtBQUssR0FBR0YsS0FBSyxFQUNiRyxXQUFXLEdBQUcsQ0FBQyxBQUFDO3dCQUV0QmpCLFdBQVcsQ0FBQ2tCLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFQyxXQUFXLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQU1FLFFBQVEsR0FBR2YsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFLEVBQ3pCQyx5QkFBeUIsR0FBR0MsSUFBQUEsU0FBcUMsc0NBQUEsRUFBQ0gsUUFBUSxDQUFDLEVBQzNFSSxJQUFJLEdBQUdGLHlCQUF5QixFQUNoQ0csU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsV0FBcUIsUUFBQSxFQUN2Q0MscUJBQXFCLEdBQUcsSUFBSWhDLHFCQUFxQixDQUFDNEIsSUFBSSxFQUFFQyxTQUFTLEVBQUV4QixXQUFXLEVBQUV5QixlQUFlLENBQUMsQUFBQztnQkFFdkcsT0FBT0UscUJBQXFCLENBQUM7YUFDOUI7Ozs7Q0FDRixDQXBDa0RDLGFBQUksS0FBQSxDQW9DdEQ7QUFFRCxTQUFTckIsc0NBQXNDLENBQUNILElBQUksRUFBRUMsd0JBQXdCLEVBQUU7SUFDOUUsSUFBTUMsa0NBQWtDLEdBQUdWLElBQUksQ0FBQ1Msd0JBQXdCLEVBQUUsU0FBQ3dCLHVCQUF1QixFQUFLO1FBQ3JHLElBQU1DLDJCQUEyQixHQUFHRCx1QkFBdUIsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFdEUsSUFBSUQsMkJBQTJCLEtBQUsxQixJQUFJLEVBQUU7WUFDeEMsSUFBTTRCLHdEQUF3RCxHQUFJSCxBQUF1QixXQUFZSSxDQUFuQ0osdUJBQXVCLEVBQVlJLFlBQWlDLFFBQUEsQ0FBQSxBQUFDLEFBQUM7WUFFeEksSUFBSUQsd0RBQXdELEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtLQUNGLENBQUMsQUFBQztJQUVILE9BQU8xQixrQ0FBa0MsQ0FBQztDQUMzQyJ9