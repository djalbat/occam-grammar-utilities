"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _part = require("../utilities/part");
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
var RuleNameDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RuleNameDefinition, Definition);
    var _super = _createSuper(RuleNameDefinition);
    function RuleNameDefinition() {
        _classCallCheck(this, RuleNameDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(RuleNameDefinition, null, [
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var ruleNamePart = (0, _part).ruleNamePartFromRuleName(ruleName), parts = [
                    ruleNamePart
                ], ruleNameDefinition = new RuleNameDefinition(parts);
                return ruleNameDefinition;
            }
        }
    ]);
    return RuleNameDefinition;
}(_occamParsers.Definition);
exports.default = RuleNameDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJwYXJ0cyIsInJ1bGVOYW1lRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUFlLENBQWYsYUFBZTtBQUVELEdBQW1CLENBQW5CLEtBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZDQSxrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRkEsa0JBQWtCOzhCQUFsQkEsa0JBQWtCO2FBQWxCQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7OztpQkFBbEJBLGtCQUFrQjs7WUFDOUJDLEdBQVksRUFBWkEsQ0FBWTttQkFBbkIsUUFBUSxDQUFEQSxZQUFZLENBQUNDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixHQUFLLENBQUNDLFlBQVksT0FKbUIsS0FBbUIsMkJBSVZELFFBQVEsR0FDaERFLEtBQUssR0FBRyxDQUFDO29CQUNQRCxZQUFZO2dCQUNkLENBQUMsRUFDREUsa0JBQWtCLEdBQUcsR0FBRyxDQUFDTCxrQkFBa0IsQ0FBQ0ksS0FBSztnQkFFdkQsTUFBTSxDQUFDQyxrQkFBa0I7WUFDM0IsQ0FBQzs7O1dBVGtCTCxrQkFBa0I7RUFKWixhQUFlO2tCQUlyQkEsa0JBQWtCIn0=