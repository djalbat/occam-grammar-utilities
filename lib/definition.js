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
            key: "fromLeftRecursiveDefinition",
            value: function fromLeftRecursiveDefinition(leftRecursiveDefinition) {
                var definition = leftRecursiveDefinition.getDefinition();
                var parts = definition.getParts();
                var firstPart = (0, _array.first)(parts);
                firstPart = firstPart.clone(); ///
                var indirectlyRepeatedRuleNamePart = indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition);
                parts = [
                    firstPart,
                    indirectlyRepeatedRuleNamePart
                ];
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
function indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition) {
    var leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(), leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule(), leftRecursiveDefinitionRuleName = leftRecursiveDefinitionRule.getName(), firstLeftRecursiveRuleName = (0, _array.first)(leftRecursiveRuleNames), ruleName = firstLeftRecursiveRuleName, leftRecursiveRuleName = leftRecursiveDefinitionRuleName, indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), indirectlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(indirectlyRepeatedRuleName);
    return indirectlyRepeatedRuleNamePart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIGFzIERlZmluaXRpb25CYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbkJhc2Uge1xuICBzdGF0aWMgZnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBsZXQgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgZmlyc3RQYXJ0ID0gZmlyc3RQYXJ0LmNsb25lKCk7IC8vL1xuXG4gICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0RnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZmlyc3RQYXJ0LFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0XG4gICAgXTtcblxuICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7IC8vL1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydCA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBwYXJ0cyA9IFsgLy8vXG4gICAgICAuLi5wYXJ0cyxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFxuICAgIF07XG5cbiAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpOyAvLy9cblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydEZyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICBydWxlTmFtZSA9IGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUsIC8vL1xuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQ7XG59Il0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJmcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJnZXREZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwiY2xvbmUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsIkRlZmluaXRpb25CYXNlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsImdldE5hbWUiLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NEJBUHdCO3FCQUV2QjtxQkFDSztvQkFDYzt3QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDJCQXdDbEIsQUF4Q1k7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRTtnQkFDMUQsSUFBSUMsYUFBYUQsd0JBQXdCRSxhQUFhO2dCQUV0RCxJQUFJQyxRQUFRRixXQUFXRyxRQUFRO2dCQUUvQixJQUFJQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNIO2dCQUV0QkUsWUFBWUEsVUFBVUUsS0FBSyxJQUFJLEdBQUc7Z0JBRWxDLElBQU1DLGlDQUFpQ0MsMERBQTBEVDtnQkFFakdHLFFBQVE7b0JBQ05FO29CQUNBRztpQkFDRDtnQkFFRFAsYUFBYSxJQWpCSUgsV0FpQldLLFFBQVEsR0FBRztnQkFFdkMsT0FBT0Y7WUFDVDs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLHlDQUF5Q1QsVUFBVSxFQUFFRCx1QkFBdUIsRUFBRTtnQkFDbkYsSUFBSUcsUUFBUUYsV0FBV0csUUFBUTtnQkFFL0JELFFBQVFRLElBQUFBLGlCQUFVLEVBQUNSLFFBQVMsR0FBRztnQkFFL0IsSUFBTUssaUNBQWlDQywwREFBMERUO2dCQUVqR0csUUFBUSxBQUNOLG1CQUFHQSxjQURHO29CQUVOSztpQkFDRDtnQkFFRFAsYUFBYSxJQWxDSUgsV0FrQ1dLLFFBQVEsR0FBRztnQkFFdkMsT0FBT0Y7WUFDVDs7O1dBckNtQkg7RUFBbUJjLHdCQUFjO0FBd0N0RCxTQUFTSCwwREFBMERULHVCQUF1QixFQUFFO0lBQzFGLElBQU1hLHlCQUF5QmIsd0JBQXdCYyx5QkFBeUIsSUFDMUVDLDhCQUE4QmYsd0JBQXdCZ0IsT0FBTyxJQUM3REMsa0NBQWtDRiw0QkFBNEJHLE9BQU8sSUFDckVDLDZCQUE2QmIsSUFBQUEsWUFBSyxFQUFDTyx5QkFDbkNPLFdBQVdELDRCQUNYRSx3QkFBd0JKLGlDQUN4QkssNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ0gsVUFBVUMsd0JBQ3RHYixpQ0FBaUNnQixJQUFBQSw4QkFBd0IsRUFBQ0Y7SUFFaEUsT0FBT2Q7QUFDVCJ9