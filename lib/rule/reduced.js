"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _class = require("../utilities/class");
var _ruleName = require("../utilities/ruleName");
var _types = require("../types");
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
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    var _super = _createSuper(ReducedRule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedRule, [
        {
            key: "isEmpty",
            value: function isEmpty() {
                var definitionsLength = this.definitions.length, empty = definitionsLength === 0;
                return empty;
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
                definitions = definitions.filter(function(definition) {
                    var keep = true;
                    var definitionRecursiveDefinition = (0, _class).isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition, type = recursiveDefinition.getType();
                        keep = type !== _types.DIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
                    }
                    return keep;
                });
                var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlICE9PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgJiZcbiAgICAgICAgICAgICAgICh0eXBlICE9PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWR1Y2VkUnVsZSIsImlzRW1wdHkiLCJkZWZpbml0aW9uc0xlbmd0aCIsImRlZmluaXRpb25zIiwibGVuZ3RoIiwiZW1wdHkiLCJmcm9tUnVsZSIsInJ1bGUiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImZpbHRlciIsImRlZmluaXRpb24iLCJrZWVwIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXFCLEdBQWUsQ0FBZixhQUFlO0FBRVosR0FBaUIsQ0FBakIsUUFBaUI7QUFDVCxHQUF5QixDQUF6QixVQUF5QjtBQUU1QixHQUFvQixDQUFwQixNQUFvQjtBQUNMLEdBQXVCLENBQXZCLFNBQXVCO0FBQzBDLEdBQVUsQ0FBVixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7OERBVHZIO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVdlLEdBQUssQ0FBQ0EsV0FBVyxpQkFBakIsUUFBUTtnQ0FYdkI7O2FBV3FCQSxXQUFXOzBDQVhoQzs7Ozs7WUFZRUMsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sRUFDM0NDLEtBQUssR0FBSUgsaUJBQWlCLEtBQUssQ0FBQztnQkFFdEMsTUFBTSxDQUFDRyxLQUFLO1lBQ2QsQ0FBQzs7OztZQUVNQyxHQUFRLEVBQVJBLENBQVE7bUJBQWYsUUFBUSxDQUFEQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUNKLFdBQVcsR0FBR0ksSUFBSSxDQUFDQyxjQUFjO2dCQUVyQyxHQUFLLENBQUNDLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxPQUFPLElBQ3ZCQyxlQUFlLE9BQUdDLFNBQTJCLDhCQUFDSCxRQUFRO2dCQUU1RE4sV0FBVyxHQUFHQSxXQUFXLENBQUNVLE1BQU0sQ0FBQyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO29CQUNoRCxHQUFHLENBQUNDLElBQUksR0FBRyxJQUFJO29CQUVmLEdBQUssQ0FBQ0MsNkJBQTZCLE9BQUdDLE1BQVksZUFBQ0gsVUFBVSxFQUFFSSxVQUFtQjtvQkFFbEYsRUFBRSxFQUFFRiw2QkFBNkIsRUFBRSxDQUFDO3dCQUNsQyxHQUFLLENBQUNHLG1CQUFtQixHQUFHTCxVQUFVLEVBQ2hDTSxJQUFJLEdBQUdELG1CQUFtQixDQUFDRSxPQUFPO3dCQUV4Q04sSUFBSSxHQUFJSyxJQUFJLEtBQUtFLE1BQTRCLGlDQUNyQ0YsSUFBSSxLQUFLRyxNQUE4QixtQ0FDdkNILElBQUksS0FBS0ksTUFBOEIsK0JBQUMsQ0FBQztvQkFDbkQsQ0FBQztvQkFFRCxNQUFNLENBQUNULElBQUk7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsR0FBSyxDQUFDVSxJQUFJLEdBQUdkLGVBQWUsRUFDdEJlLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxlQUFlLEdBQUdDLFFBQVcsVUFDN0JDLFdBQVcsR0FBRyxHQUFHLENBQUM3QixXQUFXLENBQUN5QixJQUFJLEVBQUVDLFNBQVMsRUFBRXZCLFdBQVcsRUFBRXdCLGVBQWU7Z0JBRWpGLE1BQU0sQ0FBQ0UsV0FBVztZQUNwQixDQUFDOztNQWhESDs7RUFXeUNDLGFBQUk7a0JBQXhCOUIsV0FBVyxBQVhoQyJ9