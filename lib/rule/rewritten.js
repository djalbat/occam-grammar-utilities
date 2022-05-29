"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
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
function _get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target1, property1, receiver1 || target1);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    var _super = _createSuper(RewrittenRule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _super.apply(this, arguments);
    }
    _createClass(RewrittenRule, [
        {
            key: "replaceDefinition",
            value: function replaceDefinition(definition, rewrittenDefinition) {
                var replacedDefinition = definition, replacementDefinition = rewrittenDefinition; ///
                _get(_getPrototypeOf(RewrittenRule.prototype), "replaceDefinition", this).call(this, replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var ruleName = rule.getName(), name = ruleName, ambiguous = rule.isAmbiguous(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgcmVwbGFjZURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IHJlcGxhY2VkRGVmaW5pdGlvbiA9IGRlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHJld3JpdHRlbkRlZmluaXRpb247ICAvLy9cblxuICAgIHN1cGVyLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJld3JpdHRlblJ1bGUgPSBuZXcgUmV3cml0dGVuUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmV3cml0dGVuUnVsZSIsInJlcGxhY2VEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJld3JpdHRlbkRlZmluaXRpb24iLCJyZXBsYWNlZERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJmcm9tUnVsZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiaXNBbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0dGVuUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUSxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxhQUFhLGlCQ0ovQixBRElZOzs7YUFBTUEsYUFBYTs7Ozs7O1lBQ2hDQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLENBQUNDLFVBQVUsRUFBRUMsbUJBQW1CLEVBQUU7Z0JBQ2pELElBQU1DLGtCQUFrQixHQUFHRixVQUFVLEVBQy9CRyxxQkFBcUIsR0FBR0YsbUJBQW1CLEFBQUMsRUFBRSxHQUFHO2dCQUV2RCxxQkFMaUJILGFBQWEsYUFLeEJDLG1CQUFpQixFQUF2QixJQUFLLENBQUEsWUFBbUJHLGtCQUFrQixFQUFFQyxxQkFBcUIsRUFBRTthQUNwRTs7OztZQUVNQyxHQUFRLEVBQVJBLFVBQVE7bUJBQWYsU0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQ3BCLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsRUFDekJDLElBQUksR0FBR0YsUUFBUSxFQUNmRyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssV0FBVyxFQUFFLEVBQzlCQyxXQUFXLEdBQUdOLElBQUksQ0FBQ08sY0FBYyxFQUFFLEVBQ25DQyxlQUFlLEdBQUdSLElBQUksQ0FBQ1Msa0JBQWtCLEVBQUUsRUFDM0NDLGFBQWEsR0FBRyxJQUFJakIsYUFBYSxDQUFDVSxJQUFJLEVBQUVDLFNBQVMsRUFBRUUsV0FBVyxFQUFFRSxlQUFlLENBQUMsQUFBQztnQkFFdkYsT0FBT0UsYUFBYSxDQUFDO2FBQ3RCOzs7O0NBQ0YsQ0FsQjBDQyxhQUFJLEtBQUEsQ0FrQjlDO2tCQWxCb0JsQixhQUFhIn0=