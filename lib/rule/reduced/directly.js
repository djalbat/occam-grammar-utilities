"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyReducedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/directly"));
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
var find = _necessary.arrayUtilities.find;
var DirectlyReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyReducedRule, Rule);
    var _super = _createSuper(DirectlyReducedRule);
    function DirectlyReducedRule() {
        _classCallCheck(this, DirectlyReducedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyReducedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var directlyLeftRecursiveDefinitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default);
                    if (!definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;
                if (directlyLeftRecursiveDefinitionsLength === 0) {
                    var ruleName = rule.getName();
                    throw new Error("The '".concat(ruleName, "' rule is isolated and therefore the rule cannot be rewritten."));
                }
                var ruleName1 = rule.getName(), directlyReducedRuleName = (0, _ruleName.directlyReducedRuleNameFromRuleName)(ruleName1), name = directlyReducedRuleName, ambiguous = false;
                definitions = directlyLeftRecursiveDefinitions; ///
                var NonTerminalNode = _reduced.default, directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                return directlyReducedRule;
            }
        }
    ]);
    return DirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmUvbGVmdC9kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaW5kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0bHlSZWR1Y2VkUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbVJ1bGUocnVsZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGlzb2xhdGVkIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2U7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zOyAvLy9cblxuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBEaXJlY3RseVJlZHVjZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGlyZWN0bHlSZWR1Y2VkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseVJlZHVjZWRSdWxlIiwiZmluZCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiRXJyb3IiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZHVjZWROb2RlIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVlRQSxtQkFBbUI7Ozs0QkFWbkIsZUFBZTt5QkFDTCxXQUFXOzREQUVsQixvQkFBb0I7NkRBQ0EsMENBQTBDO3dCQUVsQywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUMsSUFBSSxHQUFLQyxVQUFjLGVBQUEsQ0FBdkJELElBQUksQUFBbUIsQUFBQztBQUVqQixJQUFBLEFBQU1ELG1CQUFtQixpQkFBekI7OzthQUFNQSxtQkFBbUI7Ozs7OztZQUMvQkcsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNwQixJQUFJQyxXQUFXLEdBQUdELElBQUksQ0FBQ0UsY0FBYyxFQUFFLEFBQUM7Z0JBRXhDLElBQU1DLGdDQUFnQyxHQUFHTixJQUFJLENBQUNJLFdBQVcsRUFBRSxTQUFDRyxVQUFVLEVBQUs7b0JBQ3pFLElBQU1DLHlDQUF5QyxHQUFJRCxBQUFVLFdBQVlFLENBQXRCRixVQUFVLEVBQVlFLFNBQStCLFFBQUEsQ0FBQSxBQUFDLEFBQUM7b0JBRTFHLElBQUksQ0FBQ0QseUNBQXlDLEVBQUU7d0JBQzlDLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQUFBQztnQkFFSCxJQUFNRSxzQ0FBc0MsR0FBR0osZ0NBQWdDLENBQUNLLE1BQU0sQUFBQztnQkFFdkYsSUFBSUQsc0NBQXNDLEtBQUssQ0FBQyxFQUFFO29CQUNoRCxJQUFNRSxRQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEFBQUM7b0JBRWhDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsT0FBSyxDQUFXLE1BQThELENBQXZFRixRQUFRLEVBQUMsZ0VBQThELENBQUMsQ0FBQyxDQUFDO2lCQUNuRztnQkFFRCxJQUFNQSxTQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEVBQ3pCRSx1QkFBdUIsR0FBR0MsSUFBQUEsU0FBbUMsb0NBQUEsRUFBQ0osU0FBUSxDQUFDLEVBQ3ZFSyxJQUFJLEdBQUdGLHVCQUF1QixFQUM5QkcsU0FBUyxHQUFHLEtBQUssQUFBQztnQkFFeEJkLFdBQVcsR0FBR0UsZ0NBQWdDLENBQUMsQ0FBQyxHQUFHO2dCQUVuRCxJQUFNYSxlQUFlLEdBQUdDLFFBQVcsUUFBQSxFQUM3QkMsbUJBQW1CLEdBQUcsSUFBSXRCLG1CQUFtQixDQUFDa0IsSUFBSSxFQUFFQyxTQUFTLEVBQUVkLFdBQVcsRUFBRWUsZUFBZSxDQUFDLEFBQUM7Z0JBRW5HLE9BQU9FLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0FoQ2dEQyxhQUFJLEtBQUEsQ0FnQ3BEIn0=