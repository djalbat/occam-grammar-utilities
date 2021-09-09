"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _ruleName = _interopRequireDefault(require("../definition/ruleName"));
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _class = require("../utilities/class");
var _ruleName1 = require("../utilities/ruleName");
var _types = require("../types");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RewrittenRule = /*#__PURE__*/ function(Rule) {
    _inherits(RewrittenRule, Rule);
    function RewrittenRule() {
        _classCallCheck(this, RewrittenRule);
        return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenRule).apply(this, arguments));
    }
    _createClass(RewrittenRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName1).reducedRuleNameFromRuleName(ruleName), reducedRuleNameDefinition = _ruleName.default.fromRuleName(reducedRuleName);
                definitions = definitions.filter(function(definition) {
                    var keep = false;
                    var definitionRecursiveDefinition = (0, _class).isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition, type = recursiveDefinition.getType();
                        keep = type === _types.DIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.INDIRECTLY_LEFT_RECURSIVE_TYPE || type === _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
                    }
                    return keep;
                });
                definitions = _toConsumableArray(definitions).concat([
                    reducedRuleNameDefinition
                ]);
                var name = ruleName, NonTerminalNode = rule.getNonTerminalNode(), rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);
                return rewrittenRule;
            }
        }
    ]);
    return RewrittenRule;
}(_occamParsers.Rule);
exports.default = RewrittenRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwiUnVsZU5hbWVEZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJSZXdyaXR0ZW5SdWxlIiwiZnJvbVJ1bGUiLCJydWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWUiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwia2VlcCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJnZXRUeXBlIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdHRlblJ1bGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVMsR0FBZSxDQUFmLGFBQWU7QUFFTCxHQUF3QixDQUF4QixTQUF3QjtBQUN2QixHQUF5QixDQUF6QixVQUF5QjtBQUU1QixHQUFvQixDQUFwQixNQUFvQjtBQUNMLEdBQXVCLENBQXZCLFVBQXVCO0FBQzBDLEdBQVUsQ0FBVixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRyxhQUFhLGlCQUFuQixRQUFRO2NBQUYsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUN6QixHQUFRLEdBQVIsUUFBUTttQkFBZixRQUFRLENBQUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUVyQyxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ3ZCLGVBQWUsT0FSbUIsVUFBdUIsOEJBUVgsUUFBUSxHQUN0RCx5QkFBeUIsR0FiSixTQUF3QixTQWFFLFlBQVksQ0FBQyxlQUFlO2dCQUVqRixXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7b0JBQ2hELEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSztvQkFFaEIsR0FBSyxDQUFDLDZCQUE2QixPQWZaLE1BQW9CLGVBZVEsVUFBVSxFQWpCbkMsVUFBeUI7b0JBbUJuRCxFQUFFLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzt3QkFDbEMsR0FBSyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsRUFDaEMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU87d0JBRXhDLElBQUksR0FBSSxJQUFJLEtBbkJ5RixNQUFVLGlDQW9CdkcsSUFBSSxLQXBCeUYsTUFBVSxtQ0FxQnZHLElBQUksS0FyQnlGLE1BQVU7b0JBc0JqSCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsV0FBVyxzQkFDTixXQUFXLFNBREYsQ0FBQztvQkFFYix5QkFBeUI7Z0JBQzNCLENBQUM7Z0JBRUQsR0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQ2YsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsSUFDekMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxlQUFlO2dCQUUxRSxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7V0FuQ2tCLGFBQWE7RUFUYixhQUFlO2tCQVNmLGFBQWEifQ==