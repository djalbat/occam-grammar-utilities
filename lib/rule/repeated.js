"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _repeated = _interopRequireDefault(require("../node/repeated"));
var _indirectly = _interopRequireDefault(require("../definition/recursive/left/indirectly"));
var _class = require("../utilities/class");
var _part = require("../utilities/part");
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
var RepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(RepeatedRule, Rule);
    var _super = _createSuper(RepeatedRule);
    function RepeatedRule() {
        _classCallCheck(this, RepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(RepeatedRule, null, [
        {
            key: "fromNonDirectlyLeftRecursiveRule",
            value: function fromNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule) {
                var rule = nonDirectlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                var indirectlyLeftRecursiveDefinition = definitions.find(function(definition) {
                    var definitionIndirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _indirectly.default);
                    if (definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var ruleName = rule.getName(), repeatedPart = (0, _part).repeatedPartFromRuleName(ruleName), parts = indirectlyLeftRecursiveDefinition.rewrite(repeatedPart), definition1 = new _occamParsers.Definition(parts), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(ruleName), name = repeatedRuleName, ambiguous = false;
                definitions = [
                    definition1
                ];
                var NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZXBlYXRlZFwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlcGVhdGVkUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZShub25EaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IG5vbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLmZpbmQoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ucmV3cml0ZShyZXBlYXRlZFBhcnQpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2U7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgIGRlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBlYXRlZFJ1bGUiLCJmcm9tTm9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsIm5vbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmQiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21SdWxlTmFtZSIsInBhcnRzIiwicmV3cml0ZSIsIkRlZmluaXRpb24iLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRW9CLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUV2QixJQUFBLFNBQWtCLGtDQUFsQixrQkFBa0IsRUFBQTtBQUNHLElBQUEsV0FBeUMsa0NBQXpDLHlDQUF5QyxFQUFBO0FBRTFELElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7QUFDUixJQUFBLEtBQW1CLFdBQW5CLG1CQUFtQixDQUFBO0FBQ2YsSUFBQSxTQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLFlBQVksaUJBQWxCOzs7YUFBTUEsWUFBWTs7Ozs7O1lBQ3hCQyxHQUFnQyxFQUFoQ0Esa0NBQWdDO21CQUF2QyxTQUFPQSxnQ0FBZ0MsQ0FBQ0MsNEJBQTRCLEVBQUU7Z0JBQ3BFLElBQU1DLElBQUksR0FBR0QsNEJBQTRCLEFBQUMsRUFBRSxHQUFHO2dCQUUvQyxJQUFJRSxXQUFXLEdBQUdELElBQUksQ0FBQ0UsY0FBYyxFQUFFLEFBQUM7Z0JBRXhDLElBQU1DLGlDQUFpQyxHQUFHRixXQUFXLENBQUNHLElBQUksQ0FBQyxTQUFDQyxVQUFVLEVBQUs7b0JBQ25FLElBQU1DLDJDQUEyQyxHQUFHQyxDQUFBQSxHQUFBQSxNQUFZLEFBQStDLENBQUEsYUFBL0MsQ0FBQ0YsVUFBVSxFQUFFRyxXQUFpQyxRQUFBLENBQUMsQUFBQztvQkFFaEgsSUFBSUYsMkNBQTJDLEVBQUU7d0JBQy9DLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQUFBQztnQkFFVCxJQUFNRyxRQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEVBQ3pCQyxZQUFZLEdBQUdDLENBQUFBLEdBQUFBLEtBQXdCLEFBQVUsQ0FBQSx5QkFBVixDQUFDSCxRQUFRLENBQUMsRUFDakRJLEtBQUssR0FBR1YsaUNBQWlDLENBQUNXLE9BQU8sQ0FBQ0gsWUFBWSxDQUFDLEVBQy9ETixXQUFVLEdBQUcsSUFBSVUsYUFBVSxXQUFBLENBQUNGLEtBQUssQ0FBQyxFQUNsQ0csZ0JBQWdCLEdBQUdDLENBQUFBLEdBQUFBLFNBQTRCLEFBQVUsQ0FBQSw2QkFBVixDQUFDUixRQUFRLENBQUMsRUFDekRTLElBQUksR0FBR0YsZ0JBQWdCLEVBQ3ZCRyxTQUFTLEdBQUcsS0FBSyxBQUFDO2dCQUV4QmxCLFdBQVcsR0FBRztvQkFDWkksV0FBVTtpQkFDWCxDQUFDO2dCQUVGLElBQU1lLGVBQWUsR0FBR0MsU0FBWSxRQUFBLEVBQzlCQyxZQUFZLEdBQUcsSUFBSXpCLFlBQVksQ0FBQ3FCLElBQUksRUFBRUMsU0FBUyxFQUFFbEIsV0FBVyxFQUFFbUIsZUFBZSxDQUFDLEFBQUM7Z0JBRXJGLE9BQU9FLFlBQVksQ0FBQzthQUNyQjs7OztDQUNGLENBL0J5Q0MsYUFBSSxLQUFBLENBK0I3QztrQkEvQm9CMUIsWUFBWSJ9