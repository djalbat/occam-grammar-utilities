"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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
var tail = _necessary.arrayUtilities.tail;
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
                var parts = indirectlyLeftRecursiveDefinition.getParts();
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleNameAndIndex(ruleName, index);
                parts = tail(parts); ///
                var definition = new _occamParsers.Definition(parts), name = repeatedRuleName, ambiguous = false, definitions = [
                    definition
                ], NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRJbmRleCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kSW5kZXgoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkge1xuICAgIGxldCBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZEluZGV4KHJ1bGVOYW1lLCBpbmRleCk7XG5cbiAgICBwYXJ0cyA9IHRhaWwocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpLFxuICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXBlYXRlZFJ1bGUgPSBuZXcgUmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInRhaWwiLCJhcnJheVV0aWxpdGllcyIsIlJlcGVhdGVkUnVsZSIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRleCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGV4IiwicGFydHMiLCJnZXRQYXJ0cyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZEluZGV4IiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZFJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUNULElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUV2QixJQUFBLFNBQWtCLGtDQUFsQixrQkFBa0IsRUFBQTtBQUVVLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsWUFBWSxpQkFBbEI7OzthQUFNQSxZQUFZOzs7Ozs7WUFDeEJDLEdBQTZDLEVBQTdDQSwrQ0FBNkM7bUJBQXBELFNBQU9BLDZDQUE2QyxDQUFDQyxpQ0FBaUMsRUFBRUMsS0FBSyxFQUFFO2dCQUM3RixJQUFJQyxLQUFLLEdBQUdGLGlDQUFpQyxDQUFDRyxRQUFRLEVBQUUsQUFBQztnQkFFekQsSUFBTUMsUUFBUSxHQUFHSixpQ0FBaUMsQ0FBQ0ssV0FBVyxFQUFFLEVBQzFEQyxnQkFBZ0IsR0FBR0MsQ0FBQUEsR0FBQUEsU0FBb0MsQUFBaUIsQ0FBQSxxQ0FBakIsQ0FBQ0gsUUFBUSxFQUFFSCxLQUFLLENBQUMsQUFBQztnQkFFL0VDLEtBQUssR0FBR04sSUFBSSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRXpCLElBQU1NLFVBQVUsR0FBRyxJQUFJQyxhQUFVLFdBQUEsQ0FBQ1AsS0FBSyxDQUFDLEVBQ2xDUSxJQUFJLEdBQUdKLGdCQUFnQixFQUN2QkssU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztvQkFDWkosVUFBVTtpQkFDWCxFQUNESyxlQUFlLEdBQUdDLFNBQVksUUFBQSxFQUM5QkMsWUFBWSxHQUFHLElBQUlqQixZQUFZLENBQUNZLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxBQUFDO2dCQUVyRixPQUFPRSxZQUFZLENBQUM7YUFDckI7Ozs7Q0FDRixDQXBCeUNDLGFBQUksS0FBQSxDQW9CN0M7a0JBcEJvQmxCLFlBQVkifQ==