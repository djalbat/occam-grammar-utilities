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
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("../../node/reduced"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/indirectly"));
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
                var indirectlyReducedRule = null;
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
                    if (!definitionIndirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName = rule.getName(), indirectlyReducedRuleName = (0, _ruleName.indirectlyReducedRuleNameFromRuleName)(ruleName), name = indirectlyReducedRuleName, ambiguous = false, NonTerminalNode = _reduced.default; ///
                    indirectlyReducedRule = new IndirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return indirectlyReducedRule;
            }
        }
    ]);
    return IndirectlyReducedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlZHVjZWQvaW5kaXJlY3RseS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgaW5kaXJlY3RseVJlZHVjZWRSdWxlID0gbnVsbDtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGRlZmluaXRpb24gaW5zdGFuY2VvZiBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICBpZiAoIWRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlZHVjZWROb2RlOyAgLy8vXG5cbiAgICAgIGluZGlyZWN0bHlSZWR1Y2VkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVkdWNlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsImZyb21SdWxlIiwicnVsZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiTm9uVGVybWluYWxOb2RlIiwiUmVkdWNlZE5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFZUUEscUJBQXFCOzs7NEJBVnJCLGVBQWU7eUJBQ0wsV0FBVzs0REFFbEIsb0JBQW9COytEQUNFLDRDQUE0Qzt3QkFFcEMsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFNLEFBQUVDLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEFBQUM7QUFFakIsSUFBQSxBQUFNRCxxQkFBcUIsaUJBQTNCOzs7YUFBTUEscUJBQXFCOzs7Ozs7WUFDakNHLEdBQVEsRUFBUkEsVUFBUTttQkFBZixTQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtnQkFDcEIsSUFBSUMscUJBQXFCLEdBQUcsSUFBSSxBQUFDO2dCQUVqQyxJQUFJQyxXQUFXLEdBQUdGLElBQUksQ0FBQ0csY0FBYyxFQUFFLEFBQUM7Z0JBRXhDRCxXQUFXLEdBQUdMLElBQUksQ0FBQ0ssV0FBVyxFQUFFLFNBQUNFLFVBQVUsRUFBSztvQkFDOUMsSUFBTUMsMkNBQTJDLEdBQUlELEFBQVUsV0FBWUUsQ0FBdEJGLFVBQVUsRUFBWUUsV0FBaUMsUUFBQSxDQUFBLEFBQUMsQUFBQztvQkFFOUcsSUFBSSxDQUFDRCwyQ0FBMkMsRUFBRTt3QkFDaEQsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQU1FLGlCQUFpQixHQUFHTCxXQUFXLENBQUNNLE1BQU0sQUFBQztnQkFFN0MsSUFBSUQsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO29CQUN6QixJQUFNRSxRQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEVBQ3pCQyx5QkFBeUIsR0FBR0MsSUFBQUEsU0FBcUMsc0NBQUEsRUFBQ0gsUUFBUSxDQUFDLEVBQzNFSSxJQUFJLEdBQUdGLHlCQUF5QixFQUNoQ0csU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsUUFBVyxRQUFBLEFBQUMsRUFBRSxHQUFHO29CQUV6Q2YscUJBQXFCLEdBQUcsSUFBSUwscUJBQXFCLENBQUNpQixJQUFJLEVBQUVDLFNBQVMsRUFBRVosV0FBVyxFQUFFYSxlQUFlLENBQUMsQ0FBQztpQkFDbEc7Z0JBRUQsT0FBT2QscUJBQXFCLENBQUM7YUFDOUI7Ozs7Q0FDRixDQTVCa0RnQixhQUFJLEtBQUEsQ0E0QnREIn0=