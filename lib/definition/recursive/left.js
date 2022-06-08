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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHtMRUZUX1JFQ1VSU0lWRV9UWVBFLCBSRUNVUlNJVkVfVFlQRX0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdHJ1ZTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pLFxuICAgICAgICAgIGNvbXBsZXggPSBkZWZpbml0aW9uQ29tcGxleDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc1VuYXJ5KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKSxcbiAgICAgICAgICB1bmFyeSA9IGRlZmluaXRpb25VbmFyeTsgIC8vL1xuXG4gICAgcmV0dXJuIHVuYXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWN1cnNpdmVEZWZpbml0aW9uKHJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgdHlwZSA9IExFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgIHR5cGUgPSBSRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJ0eXBlIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpc0xlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpc0NvbXBsZXgiLCJnZXREZWZpbml0aW9uIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiY29tcGxleCIsImlzVW5hcnkiLCJkZWZpbml0aW9uVW5hcnkiLCJpc0RlZmluaXRpb25VbmFyeSIsInVuYXJ5IiwiZnJvbVJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJv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