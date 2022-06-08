"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, null, [
        {
            key: "fromRuleAndLeftRecursiveDefinitions",
            value: function fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
                var name = rule.getName(), ambiguous = rule.isAmbiguous();
                var definitions = rule.getDefinitions();
                definitions = definitions.map(function(definition) {
                    definition = leftRecursiveDefinitions.find(function(leftRecursiveDefinition) {
                        var leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinition.match(definition);
                        if (leftRecursiveDefinitionMatchesDefinition) {
                            return true;
                        }
                    });
                    return definition;
                });
                var NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCk7XG5cbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLm1hcCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5maW5kKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ubWF0Y2goZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiByZXdyaXR0ZW5SdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJld3JpdHRlblJ1bGUiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJuYW1lIiwiZ2V0TmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb24iLCJmaW5kIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uIiwibWF0Y2giLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJyZXdyaXR0ZW5SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVRLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxhQUFhLGlCQUFuQjs7O2FBQU1BLGFBQWE7Ozs7OztZQUN6QkMsR0FBbUMsRUFBbkNBLHFDQUFtQzttQkFBMUMsU0FBT0EsbUNBQW1DLENBQUNDLElBQUksRUFBRUMsd0JBQXdCLEVBQUU7Z0JBQ3pFLElBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxPQUFPLEVBQUUsRUFDckJDLFNBQVMsR0FBR0osSUFBSSxDQUFDSyxXQUFXLEVBQUUsQUFBQztnQkFFckMsSUFBSUMsV0FBVyxHQUFHTixJQUFJLENBQUNPLGNBQWMsRUFBRSxBQUFDO2dCQUV4Q0QsV0FBVyxHQUFHQSxXQUFXLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxVQUFVLEVBQUs7b0JBQzVDQSxVQUFVLEdBQUdSLHdCQUF3QixDQUFDUyxJQUFJLENBQUMsU0FBQ0MsdUJBQXVCLEVBQUs7d0JBQ3RFLElBQU1DLHdDQUF3QyxHQUFHRCx1QkFBdUIsQ0FBQ0UsS0FBSyxDQUFDSixVQUFVLENBQUMsQUFBQzt3QkFFM0YsSUFBSUcsd0NBQXdDLEVBQUU7NEJBQzVDLE9BQU8sSUFBSSxDQUFDO3lCQUNiO3FCQUNGLENBQUMsQ0FBQztvQkFFSCxPQUFPSCxVQUFVLENBQUM7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxJQUFNSyxlQUFlLEdBQUdkLElBQUksQ0FBQ2Usa0JBQWtCLEVBQUUsRUFDM0NDLGFBQWEsR0FBRyxJQUFJbEIsYUFBYSxDQUFDSSxJQUFJLEVBQUVFLFNBQVMsRUFBRUUsV0FBVyxFQUFFUSxlQUFlLENBQUMsQUFBQztnQkFFdkYsT0FBT0UsYUFBYSxDQUFDO2FBQ3RCOzs7O0NBQ0YsQ0F4QjBDQyxhQUFJLEtBQUEsQ0F3QjlDO2tCQXhCb0JuQixhQUFhIn0=