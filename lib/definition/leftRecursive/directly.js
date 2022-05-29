"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reduced = _interopRequireDefault(require("../../rule/reduced"));
var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));
var _rewritten1 = _interopRequireDefault(require("../../definition/rewritten"));
var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));
var _types = require("../../types");
var _rule = require("../../utilities/rule");
var _definition = require("../../utilities/definition");
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
var DirectlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(DirectlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(DirectlyLeftRecursiveDefinition);
    function DirectlyLeftRecursiveDefinition() {
        _classCallCheck(this, DirectlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyLeftRecursiveDefinition, [
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
                var ruleName = this.getRuleName(), definition = this.getDefinition(), rule = ruleMap[ruleName], reducedRule = (0, _rule).reducedRuleFromRule(rule, ruleMap, _reduced.default), rewrittenRule = (0, _rule).rewrittenRuleFromRule(rule, ruleMap, _rewritten.default), leftRecursiveRuleName = ruleName, rewrittenDefinition = _rewritten1.default.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);
                reducedRule.removeDefinition(definition);
                rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var directlyLeftRecursiveDefinition = null;
                var definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveRuleNames.some(function(leftRecursiveRuleName) {
                        var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;
                        if (ruleNameLeftRecursiveRuleName) {
                            // const definitionUnary = isDefinitionUnary(definition);
                            //
                            // if (definitionUnary) {
                            //   const definitionString = definition.asString();
                            //
                            //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
                            // }
                            //
                            // const definitionComplex = isDefinitionComplex(definition);
                            //
                            // if (definitionComplex) {
                            //   const definitionString = definition.asString();
                            //
                            //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
                            // }
                            var parts = [], type = _types.DIRECTLY_LEFT_RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                            directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                            return true;
                        }
                    });
                }
                return directlyLeftRecursiveDefinition;
            }
        }
    ]);
    return DirectlyLeftRecursiveDefinition;
}(_leftRecursive.default);
exports.default = DirectlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1Y2VkUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuUnVsZSBmcm9tIFwiLi4vLi4vcnVsZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBSZXdyaXR0ZW5EZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmV3cml0dGVuUnVsZUZyb21SdWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICByZXdyaXRlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmV3cml0dGVuUnVsZSA9IHJld3JpdHRlblJ1bGVGcm9tUnVsZShydWxlLCBydWxlTWFwLCBSZXdyaXR0ZW5SdWxlKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIHJlZHVjZWRSdWxlLnJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXdyaXR0ZW5SdWxlLnJlcGxhY2VEZWZpbml0aW9uKGRlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuc29tZSgobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIC8vIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgIC8vICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgLy8gICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGNvbnN0IHBhcnRzID0gW10sXG4gICAgICAgICAgICAgICAgdHlwZSA9IERJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXdyaXRlIiwicnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsInJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlRnJvbVJ1bGUiLCJSZWR1Y2VkUnVsZSIsInJld3JpdHRlblJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmV3cml0dGVuRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlbW92ZURlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInNvbWUiLCJydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInBhcnRzIiwidHlwZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVcsSUFBQSxRQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDbEIsSUFBQSxVQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7QUFDaEIsSUFBQSxXQUE0QixrQ0FBNUIsNEJBQTRCLEVBQUE7QUFDeEIsSUFBQSxjQUFnQyxrQ0FBaEMsZ0NBQWdDLEVBQUE7QUFFdkIsSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0MsSUFBQSxLQUFzQixXQUF0QixzQkFBc0IsQ0FBQTtBQUN5RSxJQUFBLFdBQTRCLFdBQTVCLDRCQUE0QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZLLElBQUEsQUFBTUEsK0JBQStCLGlCQ1hqRCxBRFdZOzs7YUFBTUEsK0JBQStCOzs7Ozs7WUFDbERDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEVBQzdCQyxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsRUFDakNDLElBQUksR0FBR0wsT0FBTyxDQUFDQyxRQUFRLENBQUMsRUFDeEJLLFdBQVcsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBbUIsQUFBNEIsQ0FBQSxvQkFBNUIsQ0FBQ0YsSUFBSSxFQUFFTCxPQUFPLEVBQUVRLFFBQVcsUUFBQSxDQUFDLEVBQzdEQyxhQUFhLEdBQUdDLENBQUFBLEdBQUFBLEtBQXFCLEFBQThCLENBQUEsc0JBQTlCLENBQUNMLElBQUksRUFBRUwsT0FBTyxFQUFFVyxVQUFhLFFBQUEsQ0FBQyxFQUNuRUMscUJBQXFCLEdBQUdYLFFBQVEsRUFDaENZLG1CQUFtQixHQUFHQyxXQUFtQixRQUFBLENBQUNDLHNDQUFzQyxDQUFDWixVQUFVLEVBQUVTLHFCQUFxQixDQUFDLEFBQUM7Z0JBRTFITixXQUFXLENBQUNVLGdCQUFnQixDQUFDYixVQUFVLENBQUMsQ0FBQztnQkFFekNNLGFBQWEsQ0FBQ1EsaUJBQWlCLENBQUNkLFVBQVUsRUFBRVUsbUJBQW1CLENBQUMsQ0FBQzthQUNsRTs7OztZQUVNSyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUFoQyxTQUFPQSx5QkFBeUIsQ0FBQ2pCLFFBQVEsRUFBRUUsVUFBVSxFQUFFO2dCQUNyRCxJQUFJZ0IsK0JBQStCLEdBQUcsSUFBSSxBQUFDO2dCQUUzQyxJQUFNQyx1QkFBdUIsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBeUIsQUFBWSxDQUFBLDBCQUFaLENBQUNsQixVQUFVLENBQUMsQUFBQztnQkFFdEUsSUFBSWlCLHVCQUF1QixFQUFFO29CQUMzQixJQUFNRSxzQkFBc0IsR0FBR0MsQ0FBQUEsR0FBQUEsV0FBb0MsQUFBWSxDQUFBLHFDQUFaLENBQUNwQixVQUFVLENBQUMsQUFBQztvQkFFaEZtQixzQkFBc0IsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNaLHFCQUFxQixFQUFLO3dCQUNyRCxJQUFNYSw2QkFBNkIsR0FBSXhCLFFBQVEsS0FBS1cscUJBQXFCLEFBQUMsQUFBQzt3QkFFM0UsSUFBSWEsNkJBQTZCLEVBQUU7NEJBQ2pDLHlEQUF5RDs0QkFDekQsRUFBRTs0QkFDRix5QkFBeUI7NEJBQ3pCLG9EQUFvRDs0QkFDcEQsRUFBRTs0QkFDRiwySkFBMko7NEJBQzNKLElBQUk7NEJBQ0osRUFBRTs0QkFDRiw2REFBNkQ7NEJBQzdELEVBQUU7NEJBQ0YsMkJBQTJCOzRCQUMzQixvREFBb0Q7NEJBQ3BELEVBQUU7NEJBQ0YsNkpBQTZKOzRCQUM3SixJQUFJOzRCQUVKLElBQU1DLEtBQUssR0FBRyxFQUFFLEVBQ1ZDLElBQUksR0FBR0MsTUFBNEIsNkJBQUEsRUFDbkNDLGtCQUFrQixHQUFHQyxDQUFBQSxHQUFBQSxXQUFnQyxBQUFZLENBQUEsaUNBQVosQ0FBQzNCLFVBQVUsQ0FBQyxBQUFDOzRCQUV4RWdCLCtCQUErQixHQUFHLElBQUlyQiwrQkFBK0IsQ0FBQzRCLEtBQUssRUFBRUMsSUFBSSxFQUFFMUIsUUFBUSxFQUFFRSxVQUFVLEVBQUUwQixrQkFBa0IsRUFBRVAsc0JBQXNCLENBQUMsQ0FBQzs0QkFFckosT0FBTyxJQUFJLENBQUM7eUJBQ2I7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELE9BQU9ILCtCQUErQixDQUFDO2FBQ3hDOzs7O0NBQ0YsQ0F4RDREWSxjQUF1QixRQUFBLENBd0RuRjtrQkF4RG9CakMsK0JBQStCIn0=