"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _repeated = _interopRequireDefault(require("../node/repeated"));
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
            key: "fromRule",
            value: function fromRule(rule) {
                var ruleName = rule.getName(), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(ruleName), name = repeatedRuleName, definitions = [], NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vbm9kZS9yZXBlYXRlZFwiO1xuXG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW10sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAvLy9cbiAgICAgICAgICByZXBlYXRlZFJ1bGUgPSBuZXcgUmVwZWF0ZWRSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlcGVhdGVkUnVsZSIsImZyb21SdWxlIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJyZXBlYXRlZFJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVMsR0FBZSxDQUFmLGFBQWU7QUFFWCxHQUFrQixDQUFsQixTQUFrQjtBQUVFLEdBQXVCLENBQXZCLFNBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0NBLFlBQVksaUJBQWxCLFFBQVE7Y0FBRkEsWUFBWTs4QkFBWkEsWUFBWTthQUFaQSxZQUFZOzhCQUFaQSxZQUFZOzs7aUJBQVpBLFlBQVk7O1lBQ3hCQyxHQUFRLEVBQVJBLENBQVE7bUJBQWYsUUFBUSxDQUFEQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUNDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLElBQ3ZCQyxnQkFBZ0IsT0FMbUIsU0FBdUIsK0JBS1ZGLFFBQVEsR0FDeERHLElBQUksR0FBR0QsZ0JBQWdCLEVBQ3ZCRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQ2hCQyxlQUFlLEdBVkEsU0FBa0IsVUFXakNDLFlBQVksR0FBRyxHQUFHLENBQUNULFlBQVksQ0FBQ00sSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0JBRXhFLE1BQU0sQ0FBQ0MsWUFBWTtZQUNyQixDQUFDOzs7V0FWa0JULFlBQVk7RUFOWixhQUFlO2tCQU1mQSxZQUFZIn0=