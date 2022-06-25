"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
var _part = require("../../utilities/part");
var _ruleName = require("../../utilities/ruleName");
var _parts = require("../../utilities/parts");
var _definition = require("../../utilities/definition");
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
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var arrayUtilities = require("necessary").arrayUtilities;
var tail = arrayUtilities.tail;
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    var _super = _createSuper(LeftRecursiveDefinition);
    function LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames);
        _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
        return _this;
    }
    _createClass(LeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleNames",
            value: function getLeftRecursiveRuleNames() {
                return this.leftRecursiveRuleNames;
            }
        }
    ], [
        {
            key: "fromReducedRule",
            value: function fromReducedRule(reducedRule) {
                var reducedRuleName = reducedRule.getName(), reducedRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedRuleName), parts = [
                    reducedRuleNamePart
                ], ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName), recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndParts",
            value: function fromRuleNameAndParts(ruleName, parts) {
                var recursiveRuleNames = recursiveRuleNmaesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRecursiveDefinition",
            value: function fromRecursiveDefinition(recursiveDefinition) {
                var leftRecursiveDefinition = null;
                var recursiveDefinitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(recursiveDefinition);
                if (recursiveDefinitionLeftRecursive) {
                    var parts = recursiveDefinition.getParts(), ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(recursiveDefinition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var leftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursiveDefinition = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursiveDefinition) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        },
        {
            key: "fromImplicitlyLeftRecursiveDefinitionAndDefinition",
            value: function fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition) {
                var parts;
                var ruleName = implicitlyLeftRecursiveDefinition.getRuleName(), definitionParts = (0, _definition).definitionPartsFromDefinition(definition), implicitlyLeftRecursiveDefinitionParts = (0, _definition).definitionPartsFromDefinition(implicitlyLeftRecursiveDefinition);
                parts = tail(implicitlyLeftRecursiveDefinitionParts); ///
                parts = _toConsumableArray(definitionParts).concat(_toConsumableArray(parts));
                var recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), leftRecursiveRuleNames = (0, _parts).leftRecursiveRuleNamesFromParts(parts), leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);
exports.default = LeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSByZXF1aXJlKFwibmVjZXNzYXJ5XCIpO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCBkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZWRSdWxlKHJlZHVjZWRSdWxlKSB7XG4gICAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZFBhcnRzKHJ1bGVOYW1lLCBwYXJ0cyl7XG4gICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5tYWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWN1cnNpdmVEZWZpbml0aW9uKHJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKHJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHM7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25QYXJ0cyAgPSBkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0cyA9IGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBwYXJ0cyA9IHRhaWwoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpOyAgLy8vXG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIC4uLmRlZmluaXRpb25QYXJ0cyxcbiAgICAgIC4uLnBhcnRzXG4gICAgXTtcblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJ0YWlsIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmcm9tUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZSIsInJlZHVjZWRSdWxlTmFtZSIsImdldE5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kUGFydHMiLCJyZWN1cnNpdmVSdWxlTm1hZXNGcm9tUGFydHMiLCJmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJnZXRQYXJ0cyIsImdldFJ1bGVOYW1lIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uQW5kRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25QYXJ0cyIsImRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMiLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBSW1CLElBQUEsVUFBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBRW5C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