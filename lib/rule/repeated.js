"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _repeated = _interopRequireDefault(require("../node/repeated"));
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
            key: "fromIndirectlyLeftRecursiveDefinitionAndIndex",
            value: function fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index) {
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), repeatedPart = (0, _part).repeatedPartFromRuleNameAndIndex(ruleName, index), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleNameAndIndex(ruleName, index), parts = indirectlyLeftRecursiveDefinition.rewrite(repeatedPart), definition = new _occamParsers.Definition(parts), name = repeatedRuleName, ambiguous = false, definitions = [
                    definition
                ], NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZXBlYXRlZFwiO1xuXG5pbXBvcnQgeyByZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRJbmRleCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZEluZGV4IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRleChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFBhcnQgPSByZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRJbmRleChydWxlTmFtZSwgaW5kZXgpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXgocnVsZU5hbWUsIGluZGV4KSxcbiAgICAgICAgICBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5yZXdyaXRlKHJlcGVhdGVkUGFydCksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKSxcbiAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBlYXRlZFJ1bGUiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kZXgiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZXBlYXRlZFBhcnQiLCJyZXBlYXRlZFBhcnRGcm9tUnVsZU5hbWVBbmRJbmRleCIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXgiLCJwYXJ0cyIsInJld3JpdGUiLCJkZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlcGVhdGVkTm9kZSIsInJlcGVhdGVkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFb0IsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRXZCLElBQUEsU0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBRU0sSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTtBQUNmLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBQSxBQUFNQSxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVk7Ozs7OztZQUN4QkMsR0FBNkMsRUFBN0NBLCtDQUE2QzttQkFBcEQsU0FBT0EsNkNBQTZDLENBQUNDLGlDQUFpQyxFQUFFQyxLQUFLLEVBQUU7Z0JBQzdGLElBQU1DLFFBQVEsR0FBR0YsaUNBQWlDLENBQUNHLFdBQVcsRUFBRSxFQUMxREMsWUFBWSxHQUFHQyxDQUFBQSxHQUFBQSxLQUFnQyxBQUFpQixDQUFBLGlDQUFqQixDQUFDSCxRQUFRLEVBQUVELEtBQUssQ0FBQyxFQUNoRUssZ0JBQWdCLEdBQUdDLENBQUFBLEdBQUFBLFNBQW9DLEFBQWlCLENBQUEscUNBQWpCLENBQUNMLFFBQVEsRUFBRUQsS0FBSyxDQUFDLEVBQ3hFTyxLQUFLLEdBQUdSLGlDQUFpQyxDQUFDUyxPQUFPLENBQUNMLFlBQVksQ0FBQyxFQUMvRE0sVUFBVSxHQUFHLElBQUlDLGFBQVUsV0FBQSxDQUFDSCxLQUFLLENBQUMsRUFDbENJLElBQUksR0FBR04sZ0JBQWdCLEVBQ3ZCTyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO29CQUNaSixVQUFVO2lCQUNYLEVBQ0RLLGVBQWUsR0FBR0MsU0FBWSxRQUFBLEVBQzlCQyxZQUFZLEdBQUcsSUFBSW5CLFlBQVksQ0FBQ2MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxDQUFDLEFBQUM7Z0JBRXJGLE9BQU9FLFlBQVksQ0FBQzthQUNyQjs7OztDQUNGLENBakJ5Q0MsYUFBSSxLQUFBLENBaUI3QztrQkFqQm9CcEIsWUFBWSJ9