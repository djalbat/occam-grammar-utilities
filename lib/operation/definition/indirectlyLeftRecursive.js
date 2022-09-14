"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyLeftRecursiveDefinitionOperation;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../../operation/definition"));
var _replacementDefinition = /*#__PURE__*/ _interopRequireDefault(require("../../replacementDefinition"));
var _context = require("../../utilities/context");
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
var IndirectlyLeftRecursiveDefinitionOperation = /*#__PURE__*/ function(DefinitionOperation) {
    _inherits(IndirectlyLeftRecursiveDefinitionOperation, DefinitionOperation);
    var _super = _createSuper(IndirectlyLeftRecursiveDefinitionOperation);
    function IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition) {
        _classCallCheck(this, IndirectlyLeftRecursiveDefinitionOperation);
        var _this;
        _this = _super.call(this, rule, definition);
        _this.leftRecursiveRuleName = leftRecursiveRuleName;
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _createClass(IndirectlyLeftRecursiveDefinitionOperation, [
        {
            key: "getLeftRecursiveRuleName",
            value: function getLeftRecursiveRuleName() {
                return this.leftRecursiveRuleName;
            }
        },
        {
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                return this.leftRecursiveDefinition;
            }
        },
        {
            key: "apply",
            value: function apply(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyLeftRecursiveDefinitions = (0, _context.findIndirectlyLeftRecursiveDefinitions)(rule, function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();
                    if (leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition && leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName) {
                        return true;
                    }
                }, context), definitions = indirectlyLeftRecursiveDefinitions.map(function(indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition();
                    return definition;
                });
                rule.removeDefinitions(definitions);
                var replacementDefinition = _replacementDefinition.default.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition), replacementDefinitionPresent = replacementDefinition.isPresent(rule);
                if (!replacementDefinitionPresent) {
                    var definition = replacementDefinition; ///
                    rule.addDefinition(definition);
                }
            }
        },
        {
            key: "retrieve",
            value: function retrieve(indirectlyLeftRecursiveDefinition, context) {
            ///
            }
        },
        {
            key: "compare",
            value: function compare(indirectlyLeftRecursiveDefinitionOperation) {
                var rule = this.getRule(), indirectlyLeftRecursiveDefinitionOperationRule = indirectlyLeftRecursiveDefinitionOperation.getRule(), indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveRuleName(), indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveDefinition(), comparesTo = rule === indirectlyLeftRecursiveDefinitionOperationRule && this.leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName && this.leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition;
                return comparesTo;
            }
        }
    ], [
        {
            key: "execute",
            value: function execute(indirectlyLeftRecursiveDefinition, context) {
                var rule = indirectlyLeftRecursiveDefinition.getRule(), definition = indirectlyLeftRecursiveDefinition.getDefinition(), leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(), leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(), indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition);
                indirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);
            }
        }
    ]);
    return IndirectlyLeftRecursiveDefinitionOperation;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vZGVmaW5pdGlvbi9pbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb25PcGVyYXRpb24gZnJvbSBcIi4uLy4uL29wZXJhdGlvbi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUmVwbGFjZW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudERlZmluaXRpb25cIjtcblxuaW1wb3J0IHsgZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbk9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcihydWxlLCBkZWZpbml0aW9uKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWU7XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGFwcGx5KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID09PSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgJiYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBjb250ZXh0KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHJ1bGUucmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gUmVwbGFjZW1lbnREZWZpbml0aW9uLmZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb25QcmVzZW50ID0gcmVwbGFjZW1lbnREZWZpbml0aW9uLmlzUHJlc2VudChydWxlKTtcblxuICAgIGlmICghcmVwbGFjZW1lbnREZWZpbml0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHJlcGxhY2VtZW50RGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgIHJ1bGUuYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXRyaWV2ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBhcmUoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvblJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAoKHJ1bGUgPT09IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvblJ1bGUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5sZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPT09IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSkmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPT09IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIHN0YXRpYyBleGVjdXRlKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25PcGVyYXRpb24uZXhlY3V0ZShpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNvbnRleHQpO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbiIsInJ1bGUiLCJkZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImFwcGx5IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29udGV4dCIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwibWFwIiwiZ2V0RGVmaW5pdGlvbiIsInJlbW92ZURlZmluaXRpb25zIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwiUmVwbGFjZW1lbnREZWZpbml0aW9uIiwiZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvblByZXNlbnQiLCJpc1ByZXNlbnQiLCJhZGREZWZpbml0aW9uIiwicmV0cmlldmUiLCJjb21wYXJlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uT3BlcmF0aW9uUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk9wZXJhdGlvbkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29tcGFyZXNUbyIsImV4ZWN1dGUiLCJEZWZpbml0aW9uT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsMENBQTBDOzs7K0RBTC9CLDRCQUE0QjswRUFDMUIsNkJBQTZCO3VCQUVSLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLDBDQUEwQyxpQkFBaEQ7Y0FBTUEsMENBQTBDOzhCQUExQ0EsMENBQTBDO2FBQTFDQSwwQ0FBMEMsQ0FDakRDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxxQkFBcUIsRUFBRUMsdUJB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