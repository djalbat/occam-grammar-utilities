"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parts = require("../utilities/parts");
var _ruleName = require("../utilities/ruleName");
var _part = require("../utilities/part");
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var ReducedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ReducedDefinition, Definition);
    var _super = _createSuper(ReducedDefinition);
    function ReducedDefinition() {
        _classCallCheck(this, ReducedDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ReducedDefinition, null, [
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                var part = parts.shift(), ruleNamePart = part, lookAhead = ruleNamePart.isLookAhead(), ruleName = ruleNamePart.getRuleName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName), reducedRuleNamePart = (0, _part).ruleNamePartFromRuleNameAndLookAhead(reducedRuleName, lookAhead);
                parts = [
                    reducedRuleNamePart
                ].concat(_toConsumableArray(parts));
                var unaryDefinition = new ReducedDefinition(parts);
                return unaryDefinition;
            }
        }
    ]);
    return ReducedDefinition;
}(_occamParsers.Definition);
exports.default = ReducedDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlZHVjZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuXG5pbXBvcnQgeyByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWVBbmRMb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlZERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBwYXJ0ID0gcGFydHMuc2hpZnQoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgbG9va0FoZWFkID0gcnVsZU5hbWVQYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWVBbmRMb29rQWhlYWQocmVkdWNlZFJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgcGFydHMgPSBbIC8vL1xuICAgICAgICByZWR1Y2VkUnVsZU5hbWVQYXJ0LFxuICAgICAgICAuLi5wYXJ0c1xuICAgIF07XG5cbiAgICBjb25zdCB1bmFyeURlZmluaXRpb24gPSBuZXcgUmVkdWNlZERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuYXJ5RGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWR1Y2VkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJjbG9uZVBhcnRzIiwicGFydCIsInNoaWZ0IiwicnVsZU5hbWVQYXJ0IiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZUFuZExvb2tBaGVhZCIsInVuYXJ5RGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFZixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBRUgsSUFBQSxTQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTtBQUNkLElBQUEsS0FBbUIsV0FBbkIsbUJBQW1CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFBLEFBQU1BLGlCQUFpQixpQkFBdkI7OzthQUFNQSxpQkFBaUI7Ozs7OztZQUM3QkMsR0FBYyxFQUFkQSxnQkFBYzttQkFBckIsU0FBT0EsY0FBYyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQUlDLEtBQUssR0FBR0QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsQUFBQztnQkFFbENELEtBQUssR0FBR0UsQ0FBQUEsR0FBQUEsTUFBVSxBQUFPLENBQUEsV0FBUCxDQUFDRixLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRS9CLElBQU1HLElBQUksR0FBR0gsS0FBSyxDQUFDSSxLQUFLLEVBQUUsRUFDcEJDLFlBQVksR0FBR0YsSUFBSSxFQUNuQkcsU0FBUyxHQUFHRCxZQUFZLENBQUNFLFdBQVcsRUFBRSxFQUN0Q0MsUUFBUSxHQUFHSCxZQUFZLENBQUNJLFdBQVcsRUFBRSxFQUNyQ0MsZUFBZSxHQUFHQyxDQUFBQSxHQUFBQSxTQUEyQixBQUFVLENBQUEsNEJBQVYsQ0FBQ0gsUUFBUSxDQUFDLEVBQ3ZESSxtQkFBbUIsR0FBR0MsQ0FBQUEsR0FBQUEsS0FBb0MsQUFBNEIsQ0FBQSxxQ0FBNUIsQ0FBQ0gsZUFBZSxFQUFFSixTQUFTLENBQUMsQUFBQztnQkFFN0ZOLEtBQUssR0FBRztvQkFDSlksbUJBQW1CO2lCQUV0QixDQUhPLE1BR1AsQ0FERyxtQkFBR1osS0FBSyxDQUFMQSxDQUNOLENBQUM7Z0JBRUYsSUFBTWMsZUFBZSxHQUFHLElBQUlqQixpQkFBaUIsQ0FBQ0csS0FBSyxDQUFDLEFBQUM7Z0JBRXJELE9BQU9jLGVBQWUsQ0FBQzthQUN4Qjs7OztDQUNGLENBdEI4Q0MsYUFBVSxXQUFBLENBc0J4RDtrQkF0Qm9CbEIsaUJBQWlCIn0=