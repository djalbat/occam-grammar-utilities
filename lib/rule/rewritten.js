"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _class = require("../utilities/class");
var _ruleName1 = require("../utilities/ruleName");
var _types = require("../types");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName1).reducedRuleNameFromRuleName(ruleName), reducedRuleNameDefinition = _ruleName.default.fromRuleName(reducedRuleName);
                definitions = definitions.filter(function(definition) {
                    var keep = false;
                    var definitionRecursiveDefinition = (0, _class).isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition, type = recursiveDefinition.getType();
                        keep = type === _types.DIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.INDIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
                    }
                    return keep;
                });
                definitions = _toConsumableArray(definitions).concat([
                    reducedRuleNameDefinition
                ]);
                var name = ruleName, NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcbmltcG9ydCBSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBpc0luc3RhbmNlT2YgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdyaXR0ZW5SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24gPSBSdWxlTmFtZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IGtlZXAgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICBrZWVwID0gKHR5cGUgPT09IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpIHx8XG4gICAgICAgICAgICAgICAodHlwZSA9PT0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgKHR5cGUgPT09IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBrZWVwO1xuICAgIH0pO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAuLi5kZWZpbml0aW9ucyxcbiAgICAgIHJlZHVjZWRSdWxlTmFtZURlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJld3JpdHRlblJ1bGUiLCJmcm9tUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsImZpbHRlciIsImRlZmluaXRpb24iLCJrZWVwIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRVEsR0FBZSxDQUFmLGFBQWU7QUFFTCxHQUF3QixDQUF4QixTQUF3QjtBQUN2QixHQUF5QixDQUF6QixVQUF5QjtBQUU1QixHQUFvQixDQUFwQixNQUFvQjtBQUNMLEdBQXVCLENBQXZCLFVBQXVCO0FBQzBDLEdBQVUsQ0FBVixNQUFVOzt5RDt1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7Ozs7OzsyQjs7Ozs7OzsrRDs7Ozs7Ozs7O3FGOzs7Ozs7Ozs7Ozs7bUU7O2lEOzs7OztJQUVsR0EsYUFBYSxpQkFBbkIsUUFBUTtrQzs7YUFBRkEsYUFBYTs0Qzs7Ozs7WUFDekJDLEdBQVEsRUFBUkEsQ0FBUTttQkFBZixRQUFRLENBQURBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQWM7Z0JBRXJDLEdBQUssQ0FBQ0MsUUFBUSxHQUFHSCxJQUFJLENBQUNJLE9BQU8sSUFDdkJDLGVBQWUsT0FBR0MsVUFBMkIsOEJBQUNILFFBQVEsR0FDdERJLHlCQUF5QixHQUFHQyxTQUFrQixTQUFDQyxZQUFZLENBQUNKLGVBQWU7Z0JBRWpGSixXQUFXLEdBQUdBLFdBQVcsQ0FBQ1MsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7b0JBQ2hELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLEtBQUs7b0JBRWhCLEdBQUssQ0FBQ0MsNkJBQTZCLE9BQUdDLE1BQVksZUFBQ0gsVUFBVSxFQUFFSSxVQUFtQjtvQkFFbEYsRUFBRSxFQUFFRiw2QkFBNkIsRUFBRSxDQUFDO3dCQUNsQyxHQUFLLENBQUNHLG1CQUFtQixHQUFHTCxVQUFVLEVBQ2hDTSxJQUFJLEdBQUdELG1CQUFtQixDQUFDRSxPQUFPO3dCQUV4Q04sSUFBSSxHQUFJSyxJQUFJLEtBQUtFLE1BQTRCLGlDQUNyQ0YsSUFBSSxLQUFLRyxNQUE4QixtQ0FDdkNILElBQUksS0FBS0ksTUFBOEIsK0JBQUMsQ0FBQztvQkFDbkQsQ0FBQztvQkFFRCxNQUFNLENBQUNULElBQUk7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBRUhYLFdBQVcsc0JBQ05BLFdBQVcsU0FERixDQUFDO29CQUViTSx5QkFBeUI7Z0JBQzNCLENBQUMsQ0FBQSxDQUFDO2dCQUVGLEdBQUssQ0FBQ2UsSUFBSSxHQUFHbkIsUUFBUSxFQUNmb0IsZUFBZSxHQUFHdkIsSUFBSSxDQUFDd0Isa0JBQWtCLElBQ3pDQyxhQUFhLEdBQUcsR0FBRyxDQUFDM0IsYUFBYSxDQUFDd0IsSUFBSSxFQUFFckIsV0FBVyxFQUFFc0IsZUFBZTtnQkFFMUUsTUFBTSxDQUFDRSxhQUFhO1lBQ3RCLENBQUM7O007O0VBbkN3Q0MsYUFBSTtrQkFBMUI1QixhQUFhLEEifQ==