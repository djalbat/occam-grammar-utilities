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
            key: "getParts",
            value: function getParts() {
                return this.definition.getParts();
            }
        },
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
                    var parts = null, type = _types.LEFT_RECURSIVE_TYPE, ruleName = recursiveDefinition.getRuleName(), recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcblxuaW1wb3J0IHtMRUZUX1JFQ1VSU0lWRV9UWVBFLCBSRUNVUlNJVkVfVFlQRX0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25VbmFyeSwgaXNEZWZpbml0aW9uQ29tcGxleCwgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSwgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5nZXRQYXJ0cygpOyB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IHRydWU7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKSxcbiAgICAgICAgICBjb21wbGV4ID0gZGVmaW5pdGlvbkNvbXBsZXg7ICAvLy9cblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNVbmFyeSgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvblVuYXJ5ID0gaXNEZWZpbml0aW9uVW5hcnkoZGVmaW5pdGlvbiksXG4gICAgICAgICAgdW5hcnkgPSBkZWZpbml0aW9uVW5hcnk7ICAvLy9cblxuICAgIHJldHVybiB1bmFyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbihyZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgICB0eXBlID0gTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbihydWxlTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgIHR5cGUgPSBSRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgdHlwZSwgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJ0eXBlIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFBhcnRzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzQ29tcGxleCIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uQ29tcGxleCIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJjb21wbGV4IiwiaXNVbmFyeSIsImRlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvblVuYXJ5IiwidW5hcnkiLCJmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJFQ1VSU0lWRV9UWVBFIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJSZWN1cnNpdmVEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRW1CLElBQUEsVUFBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBRVYsSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBQzJGLElBQUEsV0FBNEIsV0FBNUIsNEJBQTRCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkssSUFBQSxBQUFNQSx1QkFBdUIsaUJBQTdCOzs7YUFBTUEsdUJBQXVCLENBQzlCQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0I7OztrQ0FDakZMLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUU7UUFFN0QsTUFBS0Msc0JBQXNCLEdBQUdBLHNCQUFzQixDQUFDOzs7OztZQUd2REMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQUUsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csUUFBUSxFQUFFLENBQUM7YUFBRTs7O1lBRWpEQyxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUF6QkEsU0FBQUEseUJBQXlCLEdBQUc7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDRixzQkFBc0IsQ0FBQzthQUNwQzs7O1lBRURHLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsR0FBRztnQkFDMUIsSUFBTUMsdUJBQXVCLEdBQUcsSUFBSSxBQUFDO2dCQUVyQyxPQUFPQSx1QkFBdUIsQ0FBQzthQUNoQzs7O1lBRURDLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLElBQU1QLFVBQVUsR0FBRyxJ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