"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../../definition/recursive"));
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
            key: "isComplex",
            value: function isComplex() {
                var definition = this.getDefinition(), definitionComplex = (0, _definition).isDefinitionComplex(definition), complex = definitionComplex; ///
                return complex;
            }
        },
        {
            key: "isUnary",
            value: function isUnary() {
                var definition = this.getDefinition(), definitionUnary = (0, _definition).isDefinitionUnary(definition), unary = definitionUnary; ///
                return unary;
            }
        }
    ], [
        {
            key: "fromRecursiveDefinition",
            value: function fromRecursiveDefinition(recursiveDefinition) {
                var leftRecursiveDefinition = null;
                var definition = recursiveDefinition.getDefinition(), definitionLeftRecursive = (0, _definition).isDefinitionLeftRecursive(definition);
                if (definitionLeftRecursive) {
                    var parts = [], type = _types.LEFT_RECURSIVE_TYPE, ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHtMRUZUX1JFQ1VSU0lWRV9UWVBFLCBSRUNVUlNJVkVfVFlQRX0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdHJ1ZTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pLFxuICAgICAgICAgIGNvbXBsZXggPSBkZWZpbml0aW9uQ29tcGxleDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc1VuYXJ5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICB1bmFyeSA9IGRlZmluaXRpb25VbmFyeTsgIC8vL1xuXG4gICAgcmV0dXJuIHVuYXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWN1cnNpdmVEZWZpbml0aW9uKHJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgIHR5cGUgPSBMRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzQ29tcGxleCIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJjb21wbGV4IiwiaXNVbmFyeSIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwidW5hcnkiLCJmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1h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