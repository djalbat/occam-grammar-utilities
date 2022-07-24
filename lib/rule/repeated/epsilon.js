"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonRepeatedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _epsilon = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/epsilon"));
var _ruleName = require("../../utilities/ruleName");
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
var EpsilonPart = _occamParsers.Parts.EpsilonPart;
var EpsilonRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonRepeatedRule, Rule);
    var _super = _createSuper(EpsilonRepeatedRule);
    function EpsilonRepeatedRule() {
        _classCallCheck(this, EpsilonRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonRepeatedRule, null, [
        {
            key: "fromLeftRecursiveRuleName",
            value: function fromLeftRecursiveRuleName(leftRecursiveRuleName) {
                var ruleName = leftRecursiveRuleName, epsilonPart = new EpsilonPart(), indirectlyRepeatedRuleName = (0, _ruleName.epsilonRepeatedRuleNameFromRuleName)(ruleName), parts = [
                    epsilonPart
                ], definition = new _occamParsers.Definition(parts), definitions = [
                    definition
                ], name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _epsilon.default, directlyRepeatedRule = new EpsilonRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return EpsilonRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEVwc2lsb25SZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvZXBzaWxvblwiO1xuXG5pbXBvcnQgeyBlcHNpbG9uUmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBFcHNpbG9uUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25SZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBlcHNpbG9uUmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRXBzaWxvblJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEVwc2lsb25SZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFcHNpbG9uUmVwZWF0ZWRSdWxlIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJydWxlTmFtZSIsImVwc2lsb25QYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJlcHNpbG9uUmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInBhcnRzIiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJOb25UZXJtaW5hbE5vZGUiLCJFcHNpbG9uUmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFVUUEsbUJBQW1COzs7NEJBUkEsZUFBZTs0REFFdkIsNkJBQTZCO3dCQUVULDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVDLFdBQVcsR0FBS0MsYUFBSyxNQUFBLENBQXJCRCxXQUFXLEFBQVUsQUFBQztBQUVmLElBQUEsQUFBTUQsbUJBQW1CLGlCQUF6Qjs7O2FBQU1BLG1CQUFtQjs7Ozs7O1lBQy9CRyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUFoQyxTQUFPQSx5QkFBeUIsQ0FBQ0MscUJBQXFCLEVBQUU7Z0JBQ3RELElBQU1DLFFBQVEsR0FBR0QscUJBQXFCLEVBQ2hDRSxXQUFXLEdBQUcsSUFBSUwsV0FBVyxFQUFFLEVBQy9CTSwwQkFBMEIsR0FBR0MsSUFBQUEsU0FBbUMsb0NBQUEsRUFBQ0gsUUFBUSxDQUFDLEVBQzFFSSxLQUFLLEdBQUc7b0JBQ05ILFdBQVc7aUJBQ1osRUFDREksVUFBVSxHQUFHLElBQUlDLGFBQVUsV0FBQSxDQUFDRixLQUFLLENBQUMsRUFDbENHLFdBQVcsR0FBRztvQkFDWkYsVUFBVTtpQkFDWCxFQUNERyxJQUFJLEdBQUdOLDBCQUEwQixFQUNqQ08sU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsUUFBbUIsUUFBQSxFQUNyQ0Msb0JBQW9CLEdBQUcsSUFBSWpCLG1CQUFtQixDQUFDYSxJQUFJLEVBQUVDLFNBQVMsRUFBRUYsV0FBVyxFQUFFRyxlQUFlLENBQUMsQUFBQztnQkFFcEcsT0FBT0Usb0JBQW9CLENBQUM7YUFDN0I7Ozs7Q0FDRixDQW5CZ0RDLGFBQUksS0FBQSxDQW1CcEQifQ==