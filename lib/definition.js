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
var _parts = require("./utilities/parts");
var _part = require("./utilities/part");
var _ruleName = require("./utilities/ruleName");
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
var Definition = /*#__PURE__*/ function(DefinitionBase) {
    _inherits(Definition, DefinitionBase);
    var _super = _createSuper(Definition);
    function Definition() {
        _classCallCheck(this, Definition);
        return _super.apply(this, arguments);
    }
    _createClass(Definition, null, [
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
        }
    ]);
    return Definition;
}(_occamParsers.Definition);
function indirectlyRepeatedRuleNamePartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
    return indirectlyRepeatedRuleNamePart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIGFzIERlZmluaXRpb25CYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnRcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uQmFzZSB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZEluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGRlZmluaXRpb24sIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpOyAvLy9cblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24obGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgLi4ucGFydHMsXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRcbiAgICBdO1xuXG4gICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTsgLy8vXG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uQW5kSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJwYXJ0cyIsImdldFBhcnRzIiwiY2xvbmVQYXJ0cyIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsImZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkRlZmluaXRpb25CYXNlIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NEJBTndCO3FCQUVsQjtvQkFDYzt3QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDJCQW9DbEIsQUFwQ1k7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNENBQTRDQyxVQUFVLEVBQUVDLDBCQUEwQixFQUFFO2dCQUN6RixJQUFJQyxRQUFRRixXQUFXRyxRQUFRO2dCQUUvQkQsUUFBUUUsSUFBQUEsaUJBQVUsRUFBQ0Y7Z0JBRW5CLElBQU1HLGlDQUFpQ0MsSUFBQUEsOEJBQXdCLEVBQUNMO2dCQUVoRUMsUUFBUSxBQUNOLG1CQUFHQSxjQURHO29CQUVORztpQkFDRDtnQkFFREwsYUFBYSxJQWJJRixXQWFXSSxRQUFRLEdBQUc7Z0JBRXZDLE9BQU9GO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSx5Q0FBeUNQLFVBQVUsRUFBRVEsdUJBQXVCLEVBQUU7Z0JBQ25GLElBQUlOLFFBQVFGLFdBQVdHLFFBQVE7Z0JBRS9CRCxRQUFRRSxJQUFBQSxpQkFBVSxFQUFDRixRQUFTLEdBQUc7Z0JBRS9CLElBQU1HLGlDQUFpQ0ksMERBQTBERDtnQkFFakdOLFFBQVEsQUFDTixtQkFBR0EsY0FERztvQkFFTkc7aUJBQ0Q7Z0JBRURMLGFBQWEsSUE5QklGLFdBOEJXSSxRQUFRLEdBQUc7Z0JBRXZDLE9BQU9GO1lBQ1Q7OztXQWpDbUJGO0VBQW1CWSx3QkFBYztBQW9DdEQsU0FBU0MsbUVBQW1FQyxRQUFRLEVBQUVDLHFCQUFxQixFQUFFO0lBQzNHLElBQU1aLDZCQUE2QmEsSUFBQUEsd0VBQThELEVBQUNGLFVBQVVDLHdCQUN0R1IsaUNBQWlDQyxJQUFBQSw4QkFBd0IsRUFBQ0w7SUFFaEUsT0FBT0k7QUFDVCJ9