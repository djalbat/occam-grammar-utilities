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
var RepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(RepeatedRule, Rule);
    var _super = _createSuper(RepeatedRule);
    function RepeatedRule() {
        _classCallCheck(this, RepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(RepeatedRule, null, [
        {
            key: "fromIndirectlyLeftRecursiveRule",
            value: function fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
                var rule = indirectlyLeftRecursiveRule; ///
                var definitions = rule.getDefinitions();
                var indirectlyLeftRecursiveDefinition = definitions.find(function(definition) {
                    var definitionIndirectlyLeftRecursiveDefinition = (0, _class).isInstanceOf(definition, _indirectly.default);
                    if (definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var ruleName = rule.getName(), repeatedPart = (0, _part).repeatedPartFromRuleName(ruleName), parts = indirectlyLeftRecursiveDefinition.rewrite(repeatedPart), definition = new _occamParsers.Definition(parts), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(ruleName), name = repeatedRuleName, ambiguous = false;
                definitions = [
                    definition
                ];
                var NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZXBlYXRlZFwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGlzSW5zdGFuY2VPZiB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IHJlcGVhdGVkUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGRlZmluaXRpb25zLmZpbmQoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpc0luc3RhbmNlT2YoZGVmaW5pdGlvbiwgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkUGFydCA9IHJlcGVhdGVkUGFydEZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ucmV3cml0ZShyZXBlYXRlZFBhcnQpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyksXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2U7XG5cbiAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgIGRlZmluaXRpb25cbiAgICBdO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBlYXRlZFJ1bGUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlIiwicnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0luc3RhbmNlT2YiLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldE5hbWUiLCJyZXBlYXRlZFBhcnQiLCJyZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWUiLCJwYXJ0cyIsInJld3JpdGUiLCJEZWZpbml0aW9uIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVvQixJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFdkIsSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFDRyxJQUFBLFdBQXlDLGtDQUF6Qyx5Q0FBeUMsRUFBQTtBQUUxRCxJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ1IsSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTtBQUNmLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBQSxBQUFNQSxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVk7Ozs7OztZQUN4QkMsR0FBK0IsRUFBL0JBLGlDQUErQjttQkFBdEMsU0FBT0EsK0JBQStCLENBQUNDLDJCQUEyQixFQUFFO2dCQUNsRSxJQUFNQyxJQUFJLEdBQUdELDJCQUEyQixBQUFDLEVBQUUsR0FBRztnQkFFOUMsSUFBSUUsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQWMsRUFBRSxBQUFDO2dCQUV4QyxJQUFNQyxpQ0FBaUMsR0FBR0YsV0FBVyxDQUFDRyxJQUFJLENBQUMsU0FBQ0MsVUFBVSxFQUFLO29CQUNuRSxJQUFNQywyQ0FBMkMsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBWSxBQUErQyxDQUFBLGFBQS9DLENBQUNGLFVBQVUsRUFBRUcsV0FBaUMsUUFBQSxDQUFDLEFBQUM7b0JBRWhILElBQUlGLDJDQUEyQyxFQUFFO3dCQUMvQyxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRixDQUFDLEFBQUM7Z0JBRVQsSUFBTUcsUUFBUSxHQUFHVCxJQUFJLENBQUNVLE9BQU8sRUFBRSxFQUN6QkMsWUFBWSxHQUFHQyxDQUFBQSxHQUFBQSxLQUF3QixBQUFVLENBQUEseUJBQVYsQ0FBQ0gsUUFBUSxDQUFDLEVBQ2pESSxLQUFLLEdBQUdWLGlDQUFpQyxDQUFDVyxPQUFPLENBQUNILFlBQVksQ0FBQyxFQUMvRE4sVUFBVSxHQUFHLElBQUlVLGFBQVUsV0FBQSxDQUFDRixLQUFLLENBQUMsRUFDbENHLGdCQUFnQixHQUFHQyxDQUFBQSxHQUFBQSxTQUE0QixBQUFVLENBQUEsNkJBQVYsQ0FBQ1IsUUFBUSxDQUFDLEVBQ3pEUyxJQUFJLEdBQUdGLGdCQUFnQixFQUN2QkcsU0FBUyxHQUFHLEtBQUssQUFBQztnQkFFeEJsQixXQUFXLEdBQUc7b0JBQ1pJLFVBQVU7aUJBQ1gsQ0FBQztnQkFFRixJQUFNZSxlQUFlLEdBQUdDLFNBQVksUUFBQSxFQUM5QkMsWUFBWSxHQUFHLElBQUl6QixZQUFZLENBQUNxQixJQUFJLEVBQUVDLFNBQVMsRUFBRWxCLFdBQVcsRUFBRW1CLGVBQWUsQ0FBQyxBQUFDO2dCQUVyRixPQUFPRSxZQUFZLENBQUM7YUFDckI7Ozs7Q0FDRixDQS9CeUNDLGFBQUksS0FBQSxDQStCN0M7a0JBL0JvQjFCLFlBQVkifQ==