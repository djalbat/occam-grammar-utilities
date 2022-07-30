"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyReducedRule;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/indirectly"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var find = _necessary.arrayUtilities.find, EpsilonPart = _occamParsers.Parts.EpsilonPart;
var IndirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyReducedRule, Rule);
    var _super = _createSuper(IndirectlyReducedRule);
    function IndirectlyReducedRule() {
        _classCallCheck(this, IndirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyReducedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly1.default);
                    if (!definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition = new _occamParsers.Definition(parts);
                    definitions.push(definition);
                }
                var ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), name = indirectlyReducedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSdWxlLCBQYXJ0cywgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBJbmRpcmVjdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVkdWNlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaW5kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGUgPSBuZXcgSW5kaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJmcm9tUnVsZSIsInJ1bGUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImVwc2lsb25QYXJ0IiwicGFydHMiLCJEZWZpbml0aW9uIiwicHVzaCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWFRQSxxQkFBcUI7Ozt5QkFYWCxXQUFXOzRCQUNGLGVBQWU7K0RBRXJCLCtCQUErQjtnRUFDbkIsNENBQTRDO3dCQUVwQywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQU0sQUFBRUMsSUFBSSxHQUFLQyxVQUFjLGVBQUEsQ0FBdkJELElBQUksQUFBbUIsRUFDekIsQUFBRUUsV0FBVyxHQUFLQyxhQUFLLE1BQUEsQ0FBckJELFdBQVcsQUFBVSxBQUFDO0FBRWYsSUFBQSxBQUFNSCxxQkFBcUIsaUJBQTNCOzs7YUFBTUEscUJBQXFCOzs7Ozs7WUFDakNLLEdBQVEsRUFBUkEsVUFBUTttQkFBZixTQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtnQkFDcEIsSUFBSUMsV0FBVyxHQUFHRCxJQUFJLENBQUNFLGNBQWMsRUFBRSxBQUFDO2dCQUV4Q0QsV0FBVyxHQUFHTixJQUFJLENBQUNNLFdBQVcsRUFBRSxTQUFDRSxVQUFVLEVBQUs7b0JBQzlDLElBQU1DLDJDQUEyQyxHQUFJRCxBQUFVLFdBQVlFLENBQXRCRixVQUFVLEVBQVlFLFlBQWlDLFFBQUEsQ0FBQSxBQUFDLEFBQUM7b0JBRTlHLElBQUksQ0FBQ0QsMkNBQTJDLEVBQUU7d0JBQ2hELE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFNRSxpQkFBaUIsR0FBR0wsV0FBVyxDQUFDTSxNQUFNLEFBQUM7Z0JBRTdDLElBQUlELGlCQUFpQixLQUFLLENBQUMsRUFBRTtvQkFDM0IsSUFBTUUsV0FBVyxHQUFHLElBQUlYLFdBQVcsRUFBRSxFQUMvQlksS0FBSyxHQUFHO3dCQUNORCxXQUFXO3FCQUNaLEVBQ0RMLFVBQVUsR0FBRyxJQUFJTyxhQUFVLFdBQUEsQ0FBQ0QsS0FBSyxDQUFDLEFBQUM7b0JBRXpDUixXQUFXLENBQUNVLElBQUksQ0FBQ1IsVUFBVSxDQUFDLENBQUM7aUJBQzlCO2dCQUVELElBQU1TLFFBQVEsR0FBR1osSUFBSSxDQUFDYSxPQUFPLEVBQUUsRUFDekJDLHlCQUF5QixHQUFHQyxJQUFBQSxTQUFxQyxzQ0FBQSxFQUFDSCxRQUFRLENBQUMsRUFDM0VJLElBQUksR0FBR0YseUJBQXlCLEVBQ2hDRyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsZUFBZSxHQUFHQyxXQUFxQixRQUFBLEVBQ3ZDQyxxQkFBcUIsR0FBRyxJQUFJMUIscUJBQXFCLENBQUNzQixJQUFJLEVBQUVDLFNBQVMsRUFBRWhCLFdBQVcsRUFBRWlCLGVBQWUsQ0FBQyxBQUFDO2dCQUV2RyxPQUFPRSxxQkFBcUIsQ0FBQzthQUM5Qjs7OztDQUNGLENBakNrREMsYUFBSSxLQUFBLENBaUN0RCJ9