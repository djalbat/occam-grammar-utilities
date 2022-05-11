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
                    var recursiveDefinitionLeftRecursiveDefinition = false;
                    var definitionRecursiveDefinition = (0, _class).isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition; ///
                        recursiveDefinitionLeftRecursiveDefinition = recursiveDefinition.isLeftRecursiveDefinition();
                    }
                    if (!recursiveDefinitionLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var name = reducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGRlZmluaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmYWxzZTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgUmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5pc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZSA9IHJlZHVjZWRSdWxlTmFtZSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJlZHVjZWRSdWxlID0gbmV3IFJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVkdWNlZFJ1bGUiLCJpc0VtcHR5IiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJkZWZpbml0aW9ucyIsImxlbmd0aCIsImVtcHR5IiwiZnJvbVJ1bGUiLCJydWxlIiwiZ2V0RGVmaW5pdGlvbnMiLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFWixJQUFBLFFBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUNULElBQUEsVUFBeUIsa0NBQXpCLHlCQUF5QixFQUFBO0FBRTVCLElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7QUFDTCxJQUFBLFNBQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQUEsQUFBTUEsV0FBVyxpQkNWN0IsQURVWTs7O2FBQU1BLFdBQVc7Ozs7OztZQUM5QkMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sRUFDM0NDLEtBQUssR0FBSUgsaUJBQWlCLEtBQUssQ0FBQyxBQUFDLEFBQUM7Z0JBRXhDLE9BQU9HLEtBQUssQ0FBQzthQUNkOzs7O1lBRU1DLEdBQVEsRUFBUkEsVUFBUTttQkFBZixTQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtnQkFDcEIsSUFBSUosV0FBVyxHQUFHSSxJQUFJLENBQUNDLGNBQWMsRUFBRSxBQUFDO2dCQUV4QyxJQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTyxFQUFFLEVBQ3pCQyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFNBQTJCLEFBQVUsQ0FBQSw0QkFBVixDQUFDSCxRQUFRLENBQUMsQUFBQztnQkFFOUROLFdBQVcsR0FBR0EsV0FBVyxDQUFDVSxNQUFNLENBQUMsU0FBQ0MsVUFBVSxFQUFLO29CQUMvQyxJQUFJQywwQ0FBMEMsR0FBRyxLQUFLLEFBQUM7b0JBRXZELElBQU1DLDZCQUE2QixHQUFHQyxDQUFBQSxHQUFBQSxNQUFZLEFBQWlDLENBQUEsYUFBakMsQ0FBQ0gsVUFBVSxFQUFFSSxVQUFtQixRQUFBLENBQUMsQUFBQztvQkFFcEYsSUFBSUYsNkJBQTZCLEVBQUU7d0JBQ2pDLElBQU1HLG1CQUFtQixHQUFHTCxVQUFVLEFBQUMsRUFBQyxHQUFHO3dCQUUzQ0MsMENBQTBDLEdBQUdJLG1CQUFtQixDQUFDQyx5QkFBeUIsRUFBRSxDQUFDO3FCQUM5RjtvQkFFRCxJQUFJLENBQUNMLDBDQUEwQyxFQUFFO3dCQUMvQyxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBTU0sSUFBSSxHQUFHVixlQUFlLEVBQ3RCVyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsZUFBZSxHQUFHQyxRQUFXLFFBQUEsRUFDN0JDLFdBQVcsR0FBRyxJQUFJekIsV0FBVyxDQUFDcUIsSUFBSSxFQUFFQyxTQUFTLEVBQUVuQixXQUFXLEVBQUVvQixlQUFlLENBQUMsQUFBQztnQkFFbkYsT0FBT0UsV0FBVyxDQUFDO2FBQ3BCOzs7O0NBQ0YsQ0FyQ3dDQyxhQUFJLEtBQUEsQ0FxQzVDO2tCQXJDb0IxQixXQUFXIn0=