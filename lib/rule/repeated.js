"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                var definitionParts = (0, _definition).definitionPartsFromDefinition(indirectlyLeftRecursiveDefinition), parts = tail(definitionParts), partsLength = parts.length;
                if (partsLength > 0) {
                    var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definition = new _occamParsers.Definition(parts), repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleNameAndIndex(ruleName, index), name = repeatedRuleName, ambiguous = false, definitions = [
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
exports.default = RepeatedRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kSW5kZXggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdGVkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGV4KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpIHtcbiAgICBsZXQgcmVwZWF0ZWRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb25QYXJ0cyA9IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiksXG4gICAgICAgICAgcGFydHMgPSB0YWlsKGRlZmluaXRpb25QYXJ0cyksICAvLy9cbiAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJ0c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpLFxuICAgICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRJbmRleChydWxlTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgbmFtZSA9IHJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGRlZmluaXRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZXBlYXRlZE5vZGU7ICAvLy9cblxuICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiUmVwZWF0ZWRSdWxlIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZEluZGV4IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kZXgiLCJyZXBlYXRlZFJ1bGUiLCJkZWZpbml0aW9uUGFydHMiLCJkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbiIsInBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZEluZGV4IiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUmVwZWF0ZWROb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFDVCxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFdkIsSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFFRyxJQUFBLFdBQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBQ2xCLElBQUEsU0FBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFVBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsWUFBWSxpQkFBbEI7OzthQUFNQSxZQUFZOzs7Ozs7WUFDeEJDLEdBQTZDLEVBQTdDQSwrQ0FBNkM7bUJBQXBELFNBQU9BLDZDQUE2QyxDQUFDQyxpQ0FBaUMsRUFBRUMsS0FBSyxFQUFFO2dCQUM3RixJQUFJQyxZQUFZLEdBQUcsSUFBSSxBQUFDO2dCQUV4QixJQUFNQyxlQUFlLEdBQUdDLENBQUFBLEdBQUFBLFdBQTZCLEFBQW1DLENBQUEsOEJBQW5DLENBQUNKLGlDQUFpQyxDQUFDLEVBQ2xGSyxLQUFLLEdBQUdULElBQUksQ0FBQ08sZUFBZSxDQUFDLEVBQzdCRyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxBQUFDO2dCQUVqQyxJQUFJRCxXQUFXLEdBQUcsQ0FBQyxFQUFFO29CQUNuQixJQUFNRSxRQUFRLEdBQUdSLGlDQUFpQyxDQUFDUyxXQUFXLEVBQUUsRUFDMURDLFVBQVUsR0FBRyxJQUFJQyxhQUFVLFdBQUEsQ0FBQ04sS0FBSyxDQUFDLEVBQ2xDTyxnQkFBZ0IsR0FBR0MsQ0FBQUEsR0FBQUEsU0FBb0MsQUFBaUIsQ0FBQSxxQ0FBakIsQ0FBQ0wsUUFBUSxFQUFFUCxLQUFLLENBQUMsRUFDeEVhLElBQUksR0FBR0YsZ0JBQWdCLEVBQ3ZCRyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO3dCQUNaTixVQUFVO3FCQUNYLEVBQ0RPLGVBQWUsR0FBR0MsU0FBWSxRQUFBLEFBQUMsRUFBRSxHQUFHO29CQUUxQ2hCLFlBQVksR0FBRyxJQUFJSixZQUFZLENBQUNnQixJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlLENBQUMsQ0FBQztpQkFDaEY7Z0JBRUQsT0FBT2YsWUFBWSxDQUFDO2FBQ3JCOzs7O0NBQ0YsQ0F4QnlDaUIsYUFBSSxLQUFBLENBd0I3QztrQkF4Qm9CckIsWUFBWSJ9