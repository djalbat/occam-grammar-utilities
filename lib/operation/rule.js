"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleOperation;
    }
});
var _operation = /*#__PURE__*/ _interopRequireDefault(require("../operation"));
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
var RuleOperation = /*#__PURE__*/ function(Operation) {
    _inherits(RuleOperation, Operation);
    var _super = _createSuper(RuleOperation);
    function RuleOperation(rule) {
        _classCallCheck(this, RuleOperation);
        var _this;
        _this = _super.call(this);
        _this.rule = rule;
        return _this;
    }
    _createClass(RuleOperation, [
        {
            key: "getRule",
            value: function getRule() {
                return this.rule;
            }
        },
        {
            key: "compare",
            value: function compare(ruleOperation) {
                var rule = ruleOperation.getRule(), comparesTo = this.rule === rule;
                return comparesTo;
            }
        }
    ]);
    return RuleOperation;
}(_operation.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vcnVsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVPcGVyYXRpb24gZXh0ZW5kcyBPcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gIH1cblxuICBnZXRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGU7XG4gIH1cblxuICBjb21wYXJlKHJ1bGVPcGVyYXRpb24pIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU9wZXJhdGlvbi5nZXRSdWxlKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICh0aGlzLnJ1bGUgPT09IHJ1bGUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJnZXRSdWxlIiwiY29tcGFyZSIsInJ1bGVPcGVyYXRpb24iLCJjb21wYXJlc1RvIiwiT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7OEJBQUFBO2FBQUFBLGNBQ1BDLElBQUk7OEJBREdEOzs7UUFJakIsTUFBS0MsSUFBSSxHQUFHQTs7O2lCQUpLRDs7WUFPbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGFBQWEsRUFBRTtnQkFDckIsSUFBTUgsT0FBT0csY0FBY0YsT0FBTyxJQUM1QkcsYUFBYyxJQUFJLENBQUNKLElBQUksS0FBS0E7Z0JBRWxDLE9BQU9JO1lBQ1Q7OztXQWhCbUJMO0VBQXNCTSxrQkFBUyJ9