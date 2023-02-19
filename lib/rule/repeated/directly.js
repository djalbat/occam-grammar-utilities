"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/directly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _array = require("../../utilities/array");
var _definition = require("../../utilities/definition");
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
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _createSuper(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _classCallCheck(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatedRule, null, [
        {
            key: "fromRuleAndDirectlyLeftRecursiveDefinitions",
            value: function fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions, context) {
                var ruleName = rule.getName();
                var definitions = directlyLeftRecursiveDefinitions.reduce(function(definitions, directlyLeftRecursiveDefinition) {
                    var definition = directlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var firstDefinition = (0, _array.first)(definitions), definition = firstDefinition, parts = definition.getParts(), firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
                definitions = definitions.map(function(definition) {
                    var parts = definition.getParts();
                    var firstPart = (0, _array.first)(parts), partsTail = (0, _array.tail)(parts);
                    var matches = (0, _part.matchParts)(firstPart, previousFirstPart), definitionUnary = (0, _definition.isDefinitionUnary)(definition, context);
                    if (!matches) {
                        var definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling directly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    if (definitionUnary) {
                        var definitionString1 = definition.asString();
                        throw new Error("The '".concat(definitionString1, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
                    }
                    parts = partsTail; ///
                    parts = (0, _parts.cloneParts)(parts); ///
                    definition = new _occamParsers.Definition(parts);
                    return definition;
                });
                var directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _directly.default, directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IG1hdGNoUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgdGFpbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZpcnN0RGVmaW5pdGlvbiA9IGZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcHJldmlvdXNGaXJzdFBhcnQgPSBmaXJzdFBhcnQ7ICAvLy9cblxuICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICBjb25zdCBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KSxcbiAgICAgICAgICAgIGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhbmQgdGhlcmVmb3JlIHRoZSBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWZpbml0aW9uVW5hcnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiZnJvbVJ1bGVBbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImNvbnRleHQiLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsInJlZHVjZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJwdXNoIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwicHJldmlvdXNGaXJzdFBhcnQiLCJtYXAiLCJwYXJ0c1RhaWwiLCJ0YWlsIiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiY2xvbmVQYXJ0cyIsIkRlZmluaXRpb24iLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzRCQVZZOzZEQUVBO29CQUVOO3FCQUNBO3FCQUNDOzBCQUNNO3dCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDRDQUE0Q0MsSUFBSSxFQUFFQyxnQ0FBZ0MsRUFBRUMsT0FBTyxFQUFFO2dCQUNsRyxJQUFNQyxXQUFXSCxLQUFLSSxPQUFPO2dCQUU3QixJQUFJQyxjQUFjSixpQ0FBaUNLLE1BQU0sQ0FBQyxTQUFDRCxhQUFhRSxpQ0FBb0M7b0JBQzFHLElBQU1DLGFBQWFELGdDQUFnQ0UsYUFBYSxJQUMxREMsZ0NBQWdDTCxZQUFZTSxRQUFRLENBQUNIO29CQUUzRCxJQUFJLENBQUNFLCtCQUErQjt3QkFDbENMLFlBQVlPLElBQUksQ0FBQ0o7b0JBQ25CLENBQUM7b0JBRUQsT0FBT0g7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVMLElBQU1RLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDVCxjQUN4QkcsYUFBYUssaUJBQ2JFLFFBQVFQLFdBQVdRLFFBQVEsSUFDM0JDLFlBQVlILElBQUFBLFlBQUssRUFBQ0MsUUFDbEJHLG9CQUFvQkQsV0FBWSxHQUFHO2dCQUV6Q1osY0FBY0EsWUFBWWMsR0FBRyxDQUFDLFNBQUNYLFlBQWU7b0JBQzVDLElBQUlPLFFBQVFQLFdBQVdRLFFBQVE7b0JBRS9CLElBQU1DLFlBQVlILElBQUFBLFlBQUssRUFBQ0MsUUFDbEJLLFlBQVlDLElBQUFBLFdBQUksRUFBQ047b0JBRXZCLElBQU1PLFVBQVVDLElBQUFBLGdCQUFVLEVBQUNOLFdBQVdDLG9CQUNoQ00sa0JBQWtCQyxJQUFBQSw2QkFBaUIsRUFBQ2pCLFlBQVlOO29CQUV0RCxJQUFJLENBQUNvQixTQUFTO3dCQUNaLElBQU1JLG1CQUFtQmxCLFdBQVdtQixRQUFRO3dCQUU1QyxNQUFNLElBQUlDLE1BQU0sQUFBQyxRQUF1RXpCLE9BQWhFdUIsa0JBQWlCLGlEQUF3RCxPQUFUdkIsVUFBUyw2SEFBMkg7b0JBQzlOLENBQUM7b0JBRUQsSUFBSXFCLGlCQUFpQjt3QkFDbkIsSUFBTUUsb0JBQW1CbEIsV0FBV21CLFFBQVE7d0JBRTVDLE1BQU0sSUFBSUMsTUFBTSxBQUFDLFFBQXVFekIsT0FBaEV1QixtQkFBaUIsaURBQXdELE9BQVR2QixVQUFTLHVEQUFxRDtvQkFDeEosQ0FBQztvQkFFRFksUUFBUUssV0FBWSxHQUFHO29CQUV2QkwsUUFBUWMsSUFBQUEsaUJBQVUsRUFBQ2QsUUFBUyxHQUFHO29CQUUvQlAsYUFBYSxJQUFJc0Isd0JBQVUsQ0FBQ2Y7b0JBRTVCLE9BQU9QO2dCQUNUO2dCQUVBLElBQU11QiwyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDN0IsV0FDaEU4QixPQUFPRiwwQkFDUEcsWUFBWSxLQUFLLEVBQ2pCQyxrQkFBa0JDLGlCQUFvQixFQUN0Q0MsdUJBQXVCLElBdkRadkMscUJBdURxQ21DLE1BQU1DLFdBQVc3QixhQUFhOEI7Z0JBRXBGLE9BQU9FO1lBQ1Q7OztXQTFEbUJ2QztFQUE2QndDLGtCQUFJIn0=