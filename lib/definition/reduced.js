"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parts = require("../utilities/parts");
var _part = require("../utilities/part");
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var RuleNamePart = _occamParsers.Parts.RuleNamePart;
var ReducedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ReducedDefinition, Definition);
    var _super = _createSuper(ReducedDefinition);
    function ReducedDefinition() {
        _classCallCheck(this, ReducedDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedDefinition, null, [
        {
            key: "fromRuleName",
            value: function fromRuleName(ruleName) {
                var ruleNamePart = new RuleNamePart(ruleName), part = ruleNamePart, reducedPart = (0, _part).reducedPartFromPart(part), parts = [
                    reducedPart
                ], reducedDefinition = new ReducedDefinition(parts);
                return reducedDefinition;
            }
        },
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                var part = parts.shift(), reducedPart = (0, _part).reducedPartFromPart(part);
                parts = [
                    reducedPart
                ].concat(_toConsumableArray(parts));
                var reducedDefinition = new ReducedDefinition(parts);
                return reducedDefinition;
            }
        }
    ]);
    return ReducedDefinition;
}(_occamParsers.Definition);
exports.default = ReducedDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFBhcnRGcm9tUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHVjZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0ID0gcnVsZU5hbWVQYXJ0LCAgLy8vXG4gICAgICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcmVkdWNlZFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZHVjZWREZWZpbml0aW9uID0gbmV3IFJlZHVjZWREZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWR1Y2VkRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgcGFydCA9IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVkdWNlZFBhcnQgPSByZWR1Y2VkUGFydEZyb21QYXJ0KHBhcnQpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgICByZWR1Y2VkUGFydCxcbiAgICAgICAgLi4ucGFydHNcbiAgICBdO1xuXG4gICAgY29uc3QgcmVkdWNlZERlZmluaXRpb24gPSBuZXcgUmVkdWNlZERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHJlZHVjZWREZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiUmVkdWNlZERlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsInBhcnQiLCJyZWR1Y2VkUGFydCIsInJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJwYXJ0cyIsInJlZHVjZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJjbG9uZVBhcnRzIiwic2hpZnQiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXFCLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUV0QixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBRVgsSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU0sQUFBRUEsWUFBWSxHQUFLQyxhQUFLLE1BQUEsQ0FBdEJELFlBQVksQUFBVSxBQUFDO0FBRWhCLElBQUEsQUFBTUUsaUJBQWlCLGlCQUF2Qjs7O2FBQU1BLGlCQUFpQjs7Ozs7O1lBQzdCQyxHQUFZLEVBQVpBLGNBQVk7bUJBQW5CLFNBQU9BLFlBQVksQ0FBQ0MsUUFBUSxFQUFFO2dCQUM1QixJQUFNQyxZQUFZLEdBQUcsSUFBSUwsWUFBWSxDQUFDSSxRQUFRLENBQUMsRUFDekNFLElBQUksR0FBR0QsWUFBWSxFQUNuQkUsV0FBVyxHQUFHQyxDQUFBQSxHQUFBQSxLQUFtQixBQUFNLENBQUEsb0JBQU4sQ0FBQ0YsSUFBSSxDQUFDLEVBQ3ZDRyxLQUFLLEdBQUc7b0JBQ05GLFdBQVc7aUJBQ1osRUFDREcsaUJBQWlCLEdBQUcsSUFBSVIsaUJBQWlCLENBQUNPLEtBQUssQ0FBQyxBQUFDO2dCQUV2RCxPQUFPQyxpQkFBaUIsQ0FBQzthQUMxQjs7O1lBRU1DLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQXJCLFNBQU9BLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFO2dCQUNoQyxJQUFJSCxLQUFLLEdBQUdHLFVBQVUsQ0FBQ0MsUUFBUSxFQUFFLEFBQUM7Z0JBRWxDSixLQUFLLEdBQUdLLENBQUFBLEdBQUFBLE1BQVUsQUFBTyxDQUFBLFdBQVAsQ0FBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUUvQixJQUFNSCxJQUFJLEdBQUdHLEtBQUssQ0FBQ00sS0FBSyxFQUFFLEVBQ3BCUixXQUFXLEdBQUdDLENBQUFBLEdBQUFBLEtBQW1CLEFBQU0sQ0FBQSxvQkFBTixDQUFDRixJQUFJLENBQUMsQUFBQztnQkFFOUNHLEtBQUssR0FBRztvQkFDSkYsV0FBVztpQkFFZCxDQUhPLE1BR1AsQ0FERyxtQkFBR0UsS0FBSyxDQUFMQSxDQUNOLENBQUM7Z0JBRUYsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSVIsaUJBQWlCLENBQUNPLEtBQUssQ0FBQyxBQUFDO2dCQUV2RCxPQUFPQyxpQkFBaUIsQ0FBQzthQUMxQjs7OztDQUNGLENBOUI4Q00sYUFBVSxXQUFBLENBOEJ4RDtrQkE5Qm9CZCxpQkFBaUIifQ==