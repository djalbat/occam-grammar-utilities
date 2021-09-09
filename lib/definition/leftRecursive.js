"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _types = require("../types");
var _definition = require("../utilities/definition");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var LeftRecursiveDefinition = /*#__PURE__*/ function(RecursiveDefinition) {
    _inherits(LeftRecursiveDefinition, RecursiveDefinition);
    function LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
        _classCallCheck(this, LeftRecursiveDefinition);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftRecursiveDefinition).call(this, type, parts, ruleName, definition, recursiveRuleNames));
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
            key: "rewrite",
            value: function rewrite(ruleMap) {
            ///
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var leftRecursiveDefinition = null;
                var leftRecursiveRuleNames = (0, _definition).leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;
                if (definitionLeftRecursive) {
                    var type = _types.LEFT_RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
                }
                return leftRecursiveDefinition;
            }
        }
    ]);
    return LeftRecursiveDefinition;
}(_recursive.default);
exports.default = LeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsiUmVjdXJzaXZlRGVmaW5pdGlvbiIsIkxFRlRfUkVDVVJTSVZFX1RZUEUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJ0eXBlIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJld3JpdGUiLCJydWxlTWFwIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiZ2V0UGFydHMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW9CLEdBQXlCLENBQXpCLFVBQXlCO0FBRXJCLEdBQVUsQ0FBVixNQUFVO0FBQ3lDLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0YsdUJBQXVCLGlCQUE3QixRQUFRO2NBQUYsdUJBQXVCO2FBQXZCLHVCQUF1QixDQUM5QixJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCOzhCQUR0RSx1QkFBdUI7O2lFQUF2Qix1QkFBdUIsYUFFbEMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGtCQUFrQjtjQUV0RCxzQkFBc0IsR0FBRyxzQkFBc0I7OztpQkFKbkMsdUJBQXVCOztZQU8xQyxHQUF5QixHQUF6Qix5QkFBeUI7bUJBQXpCLFFBQVEsQ0FBUix5QkFBeUIsR0FBRyxDQUFDO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQjtZQUNwQyxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hCLEVBQUcsQUFBSCxDQUFHO1lBQ0wsQ0FBQzs7OztZQUVNLEdBQXlCLEdBQXpCLHlCQUF5QjttQkFBaEMsUUFBUSxDQUFELHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUk7Z0JBRWxDLEdBQUssQ0FBQyxzQkFBc0IsT0FwQnVELFdBQXlCLHVDQW9CeEMsVUFBVSxHQUN4RSw0QkFBNEIsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLEVBQzVELHVCQUF1QixHQUFJLDRCQUE0QixHQUFHLENBQUM7Z0JBRWpFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxDQUFDO29CQUM1QixHQUFLLENBQUMsSUFBSSxHQTFCb0IsTUFBVSxzQkEyQmxDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxJQUMzQixrQkFBa0IsT0EzQnlELFdBQXlCLG1DQTJCOUMsVUFBVTtvQkFFdEUsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0I7Z0JBQ3JJLENBQUM7Z0JBRUQsTUFBTSxDQUFDLHVCQUF1QjtZQUNoQyxDQUFDOzs7V0EvQmtCLHVCQUF1QjtFQUxaLFVBQXlCO2tCQUtwQyx1QkFBdUIifQ==