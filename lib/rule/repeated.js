"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return RepeatedRule;
    },
    enumerable: true
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _repeated = _interopRequireDefault(require("../node/repeated"));
var _definition = require("../utilities/definition");
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
                var repeatedRule = null;
                var parts = indirectlyLeftRecursiveDefinition.getParts(), partsLength = parts.length;
                if (partsLength > 1) {
                    var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), clonedParts = (0, _definition.cloneDefinitionParts)(indirectlyLeftRecursiveDefinition), clonedPartsTail = tail(clonedParts), parts1 = clonedPartsTail, definition = new _occamParsers.Definition(parts1), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleNameAndIndex)(ruleName, index), name = repeatedRuleName, ambiguous = false, definitions = [
                        definition
                    ], NonTerminalNode = _repeated.default; ///
                    repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IGNsb25lRGVmaW5pdGlvblBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGV4KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpIHtcbiAgICBsZXQgcmVwZWF0ZWRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgY2xvbmVkUGFydHMgPSBjbG9uZURlZmluaXRpb25QYXJ0cyhpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgICAgY2xvbmVkUGFydHNUYWlsID0gdGFpbChjbG9uZWRQYXJ0cyksXG4gICAgICAgICAgICBwYXJ0cyA9IGNsb25lZFBhcnRzVGFpbCwgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKSxcbiAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXgocnVsZU5hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIG5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgICBkZWZpbml0aW9uXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlOyAgLy8vXG5cbiAgICAgIHJlcGVhdGVkUnVsZSA9IG5ldyBSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlcGVhdGVkUnVsZSIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmRJbmRleCIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGV4IiwicmVwZWF0ZWRSdWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNsb25lZFBhcnRzIiwiY2xvbmVEZWZpbml0aW9uUGFydHMiLCJjbG9uZWRQYXJ0c1RhaWwiLCJkZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXgiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztlQVlRQSxZQUFZOzs7O3lCQVZGLFdBQVc7NEJBQ1QsZUFBZTsrQ0FFdkIsa0JBQWtCOzBCQUVOLHlCQUF5Qjt3QkFDVCx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBTSxBQUFFQyxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUQsWUFBWSxpQkFBbEI7OzthQUFNQSxZQUFZOzs7Ozs7WUFDeEJHLEdBQTZDLEVBQTdDQSwrQ0FBNkM7bUJBQXBELFNBQU9BLDZDQUE2QyxDQUFDQyxpQ0FBaUMsRUFBRUMsS0FBSyxFQUFFO2dCQUM3RixJQUFJQyxZQUFZLEdBQUcsSUFBSSxBQUFDO2dCQUV4QixJQUFNQyxLQUFLLEdBQUdILGlDQUFpQyxDQUFDSSxRQUFRLEVBQUUsRUFDcERDLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLEFBQUM7Z0JBRWpDLElBQUlELFdBQVcsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU1FLFFBQVEsR0FBR1AsaUNBQWlDLENBQUNRLFdBQVcsRUFBRSxFQUMxREMsV0FBVyxHQUFHQyxJQUFBQSxXQUFvQixxQkFBQSxFQUFDVixpQ0FBaUMsQ0FBQyxFQUNyRVcsZUFBZSxHQUFHZCxJQUFJLENBQUNZLFdBQVcsQ0FBQyxFQUNuQ04sTUFBSyxHQUFHUSxlQUFlLEVBQ3ZCQyxVQUFVLEdBQUcsSUFBSUMsYUFBVSxXQUFBLENBQUNWLE1BQUssQ0FBQyxFQUNsQ1csZ0JBQWdCLEdBQUdDLElBQUFBLFNBQW9DLHFDQUFBLEVBQUNSLFFBQVEsRUFBRU4sS0FBSyxDQUFDLEVBQ3hFZSxJQUFJLEdBQUdGLGdCQUFnQixFQUN2QkcsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRzt3QkFDWk4sVUFBVTtxQkFDWCxFQUNETyxlQUFlLEdBQUdDLFNBQVksUUFBQSxBQUFDLEVBQUUsR0FBRztvQkFFMUNsQixZQUFZLEdBQUcsSUFBSU4sWUFBWSxDQUFDb0IsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxDQUFDLENBQUM7aUJBQ2hGO2dCQUVELE9BQU9qQixZQUFZLENBQUM7YUFDckI7Ozs7Q0FDRixDQTFCeUNtQixhQUFJLEtBQUEsQ0EwQjdDIn0=