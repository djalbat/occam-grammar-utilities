"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
var _ruleName = require("../../utilities/ruleName");
var _types = require("../../types");
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
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    var _super = _createSuper(LeftRecursiveDefinition);
    function LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, type, ruleName, definition, recursiveRuleNames);
        _this.leftRecursiveRuleNames = leftRecursiveRuleNames;
        return _this;
    }
    _createClass(LeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveRuleNames",
            value: function getLeftRecursiveRuleNames() {
                return this.leftRecursiveRuleNames;
            }
        },
        {
            key: "isLeftRecursiveDefinition",
            value: function isLeftRecursiveDefinition() {
                var leftRecursiveDefinition = true;
                return leftRecursiveDefinition;
            }
        },
        {
            key: "isUnary",
            value: function isUnary() {
                var definition = this.getDefinition(), definitionUnary = (0, _definition).isDefinitionUnary(definition), unary = definitionUnary; ///
                return unary;
            }
        },
        {
            key: "isComplex",
            value: function isComplex() {
                var definition = this.getDefinition(), definitionComplex = (0, _definition).isDefinitionComplex(definition), complex = definitionComplex; ///
                return complex;
            }
        },
        {
            key: "isIsolated",
            value: function isIsolated(ruleMap) {
                var ruleName = this.getRuleName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRule = ruleMap[reducedRuleName] || null, isolated = reducedRule === null;
                return isolated;
            }
        }
    ], [
        {
            key: "fromRecursiveDefinition",
            value: function fromRecursiveDefinition(recursiveDefinition) {
                var leftRecursiveDefinition = null;
                var definition = recursiveDefinition.getDefinition(), definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var type = _types.LEFT_RECURSIVE_TYPE, parts = recursiveDefinition.getParts(), ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
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
                    var parts = [], type = _types.RECURSIVE_TYPE, recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);
exports.default = LeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgTEVGVF9SRUNVUlNJVkVfVFlQRSwgUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgaXNVbmFyeSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4gICAgICAgICAgdW5hcnkgPSBkZWZpbml0aW9uVW5hcnk7ICAvLy9cblxuICAgIHJldHVybiB1bmFyeTtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgIGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKSxcbiAgICAgICAgY29tcGxleCA9IGRlZmluaXRpb25Db21wbGV4OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzSXNvbGF0ZWQocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGUgPSBydWxlTWFwW3JlZHVjZWRSdWxlTmFtZV0gfHwgbnVsbCxcbiAgICAgICAgICBpc29sYXRlZCA9IChyZWR1Y2VkUnVsZSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaXNvbGF0ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCB0eXBlID0gTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHBhcnRzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzVW5hcnkiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvblVuYXJ5IiwiaXNEZWZpbml0aW9uVW5hcnkiLCJ1bmFyeSIsImlzQ29tcGxleCIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImNvbXBsZXgiLCJpc0lzb2xhdGVkIiwicnVsZU1hcCIsImdldFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGUiLCJpc29sYXRlZCIsImZyb21SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsIkxFRlRfUkVDVVJTSVZFX1RZUEUiLCJnZXRQYXJ0cyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIlJlY3Vyc2l2ZURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFbUIsSUFBQSxVQUE0QixrQ0FBNUIsNEJBQTRCLEVBQUE7QUFFaEIsSUFBQSxTQUEwQixXQUExQiwwQkFBMEIsQ0FBQTtBQUNsQixJQUFBLE1BQWEsV0FBYixhQUFhLENBQUE7QUFDeUYsSUFBQSxXQUE0QixXQUE1Qiw0QkFBNEIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2SyxJQUFBLEFBQU1BLHVCQUF1QixpQkFBN0I7OzthQUFNQSx1QkFBdUIsQ0FDOUJDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQjs7O2tDQUNqRkwsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxF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