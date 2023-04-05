"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Definition;
    }
});
var _occamParsers = require("occam-parsers");
var _array = require("./utilities/array");
var _parts = require("./utilities/parts");
var _ruleName = require("./utilities/ruleName");
var _part = require("./utilities/part");
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
var ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
var Definition = /*#__PURE__*/ function(DefinitionBase) {
    _inherits(Definition, DefinitionBase);
    var _super = _createSuper(Definition);
    function Definition() {
        _classCallCheck(this, Definition);
        return _super.apply(this, arguments);
    }
    _createClass(Definition, null, [
        {
            key: "fromDefinitionAndLeftRecursiveDefinition",
            value: function fromDefinitionAndLeftRecursiveDefinition(definition, leftRecursiveDefinition) {
                var parts = definition.getParts();
                parts = (0, _parts.cloneParts)(parts); ///
                var indirectlyRepeatedRuleNamePart = indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition);
                parts = _toConsumableArray(parts).concat([
                    indirectlyRepeatedRuleNamePart
                ]);
                definition = new Definition(parts); ///
                return definition;
            }
        },
        {
            key: "fromDefinitionAndIndirectlyRepeatedRuleName",
            value: function fromDefinitionAndIndirectlyRepeatedRuleName(definition, indirectlyRepeatedRuleName) {
                var parts = definition.getParts();
                parts = (0, _parts.cloneParts)(parts);
                var indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
                parts = _toConsumableArray(parts).concat([
                    indirectlyRepeatedRuleNamePart
                ]);
                definition = new Definition(parts); ///
                return definition;
            }
        },
        {
            key: "fromRuleNameAndDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule",
            value: function fromRuleNameAndDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(ruleName, directlyLeftRecursiveDefinition) {
                var definition = directlyLeftRecursiveDefinition, parts = definition.getParts();
                var firstPart = (0, _array.first)(parts), part = firstPart, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
                parts = [
                    directlyReducedPart,
                    zeroOrMoreDirectlyRepeatedRuleNamePartPart
                ];
                parts = (0, _parts.cloneParts)(parts); ///
                definition = new Definition(parts); ///
                return definition;
            }
        }
    ]);
    return Definition;
}(_occamParsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0cywgRGVmaW5pdGlvbiBhcyBEZWZpbml0aW9uQmFzZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBaZXJvT3JNb3JlUGFydHNQYXJ0IH0gPSBQYXJ0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb25CYXNlIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTsgLy8vXG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGRlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpOyAvLy9cblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25BbmREaXJlY3RseVJlZHVjZWRSdWxlKHJ1bGVOYW1lLCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzID0gWyAvLy9cbiAgICAgIGRpcmVjdGx5UmVkdWNlZFBhcnQsXG4gICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnRcbiAgICBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTsgLy8vXG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIlBhcnRzIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJjbG9uZVBhcnRzIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0RnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkFuZERpcmVjdGx5UmVkdWNlZFJ1bGUiLCJydWxlTmFtZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdFBhcnQiLCJmaXJzdCIsInBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0IiwiZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydCIsIkRlZmluaXRpb25CYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0QkFUK0I7cUJBRTlCO3FCQUNLO3dCQUMwQjtvQkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFNLEFBQUVDLHNCQUF3QkMsbUJBQUssQ0FBN0JEO0FBRU8sSUFBQSxBQUFNRCwyQkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNDLFVBQVUsRUFBRUMsdUJBQXVCLEVBQUU7Z0JBQ25GLElBQUlDLFFBQVFGLFdBQVdHLFFBQVE7Z0JBRS9CRCxRQUFRRSxJQUFBQSxpQkFBVSxFQUFDRixRQUFTLEdBQUc7Z0JBRS9CLElBQU1HLGlDQUFpQ0MsMERBQTBETDtnQkFFakdDLFFBQVEsQUFDTixtQkFBR0EsY0FERztvQkFFTkc7aUJBQ0Q7Z0JBRURMLGFBQWEsSUFiSUosV0FhV00sUUFBUSxHQUFHO2dCQUV2QyxPQUFPRjtZQUNUOzs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsNENBQTRDUCxVQUFVLEVBQUVRLDBCQUEwQixFQUFFO2dCQUN6RixJQUFJTixRQUFRRixXQUFXRyxRQUFRO2dCQUUvQkQsUUFBUUUsSUFBQUEsaUJBQVUsRUFBQ0Y7Z0JBRW5CLElBQU1HLGlDQUFpQ0ksSUFBQUEsOEJBQXdCLEVBQUNEO2dCQUVoRU4sUUFBUSxBQUNOLG1CQUFHQSxjQURHO29CQUVORztpQkFDRDtnQkFFREwsYUFBYSxJQTlCSUosV0E4QldNLFFBQVEsR0FBRztnQkFFdkMsT0FBT0Y7WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLHFFQUFxRUMsUUFBUSxFQUFFQywrQkFBK0IsRUFBRTtnQkFDckgsSUFBSVosYUFBYVksaUNBQ2JWLFFBQVFGLFdBQVdHLFFBQVE7Z0JBRS9CLElBQU1VLFlBQVlDLElBQUFBLFlBQUssRUFBQ1osUUFDbEJhLE9BQU9GLFdBQ1BHLHNCQUFzQkMsSUFBQUEsaUNBQTJCLEVBQUNGLE9BQ2xERywyQkFBMkJDLElBQUFBLDhDQUFvQyxFQUFDUixXQUNoRVMsK0JBQStCWCxJQUFBQSw4QkFBd0IsRUFBQ1MsMkJBQ3hERyw2Q0FBNkMsSUFBSXhCLG9CQUFvQnVCO2dCQUUzRWxCLFFBQVE7b0JBQ05jO29CQUNBSztpQkFDRDtnQkFFRG5CLFFBQVFFLElBQUFBLGlCQUFVLEVBQUNGLFFBQVMsR0FBRztnQkFFL0JGLGFBQWEsSUFyRElKLFdBcURXTSxRQUFRLEdBQUc7Z0JBRXZDLE9BQU9GO1lBQ1Q7OztXQXhEbUJKO0VBQW1CMEIsd0JBQWMifQ==