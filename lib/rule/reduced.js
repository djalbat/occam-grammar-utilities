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
                var name = reducedRuleName, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsIElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQga2VlcCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gaXNJbnN0YW5jZU9mKGRlZmluaXRpb24sIFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAga2VlcCA9ICh0eXBlICE9PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSAmJlxuICAgICAgICAgICAgICAgKHR5cGUgIT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgJiZcbiAgICAgICAgICAgICAgICh0eXBlICE9PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2VlcFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJpc0VtcHR5IiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwiZnJvbVJ1bGUiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiaXNJbnN0YW5jZU9mIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwiZ2V0VHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVMsR0FBZSxDQUFmLGFBQWU7QUFFWixHQUFpQixDQUFqQixRQUFpQjtBQUNULEdBQXlCLENBQXpCLFVBQXlCO0FBRTVCLEdBQW9CLENBQXBCLE1BQW9CO0FBQ0wsR0FBdUIsQ0FBdkIsU0FBdUI7QUFDMEMsR0FBVSxDQUFWLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEdBLFdBQVcsaUJBQWpCLFFBQVE7OzthQUFGQSxXQUFXOzs7Ozs7WUFDOUJDLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLEVBQzNDQyxLQUFLLEdBQUlILGlCQUFpQixLQUFLLENBQUM7Z0JBRXRDLE1BQU0sQ0FBQ0csS0FBSztZQUNkLENBQUM7Ozs7WUFFTUMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDSixXQUFXLEdBQUdJLElBQUksQ0FBQ0MsY0FBYztnQkFFckMsR0FBSyxDQUFDQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTyxJQUN2QkMsZUFBZSxPQUFHQyxTQUEyQiw4QkFBQ0gsUUFBUTtnQkFFNUROLFdBQVcsR0FBR0EsV0FBVyxDQUFDVSxNQUFNLENBQUMsUUFBUSxDQUFQQyxVQUFVLEVBQUssQ0FBQztvQkFDaEQsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSTtvQkFFZixHQUFLLENBQUNDLDZCQUE2QixPQUFHQyxNQUFZLGVBQUNILFVBQVUsRUFBRUksVUFBbUI7b0JBRWxGLEVBQUUsRUFBRUYsNkJBQTZCLEVBQUUsQ0FBQzt3QkFDbEMsR0FBSyxDQUFDRyxtQkFBbUIsR0FBR0wsVUFBVSxFQUNoQ00sSUFBSSxHQUFHRCxtQkFBbUIsQ0FBQ0UsT0FBTzt3QkFFeENOLElBQUksR0FBSUssSUFBSSxLQUFLRSxNQUE0QixpQ0FDckNGLElBQUksS0FBS0csTUFBOEIsbUNBQ3ZDSCxJQUFJLEtBQUtJLE1BQThCO29CQUNqRCxDQUFDO29CQUVELE1BQU0sQ0FBQ1QsSUFBSTtnQkFDYixDQUFDO2dCQUVELEdBQUssQ0FBQ1UsSUFBSSxHQUFHZCxlQUFlLEVBQ3RCZSxlQUFlLEdBQUdDLFFBQVcsVUFDN0JDLFdBQVcsR0FBRyxHQUFHLENBQUM1QixXQUFXLENBQUN5QixJQUFJLEVBQUV0QixXQUFXLEVBQUV1QixlQUFlO2dCQUV0RSxNQUFNLENBQUNFLFdBQVc7WUFDcEIsQ0FBQzs7OztFQXBDc0NDLGFBQUk7a0JBQXhCN0IsV0FBVyJ9