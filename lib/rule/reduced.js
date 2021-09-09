"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _reduced = _interopRequireDefault(require("../node/reduced"));
var _recursive = _interopRequireDefault(require("../definition/recursive"));
var _class = require("../utilities/class");
var _ruleName = require("../utilities/ruleName");
var _types = require("../types");
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
var ReducedRule = /*#__PURE__*/ function(Rule) {
    _inherits(ReducedRule, Rule);
    function ReducedRule() {
        _classCallCheck(this, ReducedRule);
        return _possibleConstructorReturn(this, _getPrototypeOf(ReducedRule).apply(this, arguments));
    }
    _createClass(ReducedRule, [
        {
            key: "isEmpty",
            value: function isEmpty() {
                var definitionsLength = this.definitions.length, empty = definitionsLength === 0;
                return empty;
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var definitions = rule.getDefinitions();
                var ruleName = rule.getName(), reducedRuleName = (0, _ruleName).reducedRuleNameFromRuleName(ruleName);
                definitions = definitions.filter(function(definition) {
                    var keep = true;
                    var definitionRecursiveDefinition = (0, _class).isInstanceOf(definition, _recursive.default);
                    if (definitionRecursiveDefinition) {
                        var recursiveDefinition = definition, type = recursiveDefinition.getType();
                        keep = type !== _types.DIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.INDIRECTLY_LEFT_RECURSIVE_TYPE && type !== _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
                    }
                    return keep;
                });
                var name = reducedRuleName, NonTerminalNode = _reduced.default, reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
                return reducedRule;
            }
        }
    ]);
    return ReducedRule;
}(_occamParsers.Rule);
exports.default = ReducedRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZHVjZWQuanMiXSwibmFtZXMiOlsiUnVsZSIsIlJlZHVjZWROb2RlIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzSW5zdGFuY2VPZiIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJSZWR1Y2VkUnVsZSIsImlzRW1wdHkiLCJkZWZpbml0aW9uc0xlbmd0aCIsImRlZmluaXRpb25zIiwibGVuZ3RoIiwiZW1wdHkiLCJmcm9tUnVsZSIsInJ1bGUiLCJnZXREZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsImZpbHRlciIsImRlZmluaXRpb24iLCJrZWVwIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsImdldFR5cGUiLCJuYW1lIiwiTm9uVGVybWluYWxOb2RlIiwicmVkdWNlZFJ1bGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVMsR0FBZSxDQUFmLGFBQWU7QUFFWixHQUFpQixDQUFqQixRQUFpQjtBQUNULEdBQXlCLENBQXpCLFVBQXlCO0FBRTVCLEdBQW9CLENBQXBCLE1BQW9CO0FBQ0wsR0FBdUIsQ0FBdkIsU0FBdUI7QUFDMEMsR0FBVSxDQUFWLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRyxXQUFXLGlCQUFqQixRQUFRO2NBQUYsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUM5QixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUMzQyxLQUFLLEdBQUksaUJBQWlCLEtBQUssQ0FBQztnQkFFdEMsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7O1lBRU0sR0FBUSxHQUFSLFFBQVE7bUJBQWYsUUFBUSxDQUFELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYztnQkFFckMsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUN2QixlQUFlLE9BZm1CLFNBQXVCLDhCQWVYLFFBQVE7Z0JBRTVELFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQztvQkFDaEQsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJO29CQUVmLEdBQUssQ0FBQyw2QkFBNkIsT0FyQlosTUFBb0IsZUFxQlEsVUFBVSxFQXZCbkMsVUFBeUI7b0JBeUJuRCxFQUFFLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQzt3QkFDbEMsR0FBSyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsRUFDaEMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE9BQU87d0JBRXhDLElBQUksR0FBSSxJQUFJLEtBekJ5RixNQUFVLGlDQTBCdkcsSUFBSSxLQTFCeUYsTUFBVSxtQ0EyQnZHLElBQUksS0EzQnlGLE1BQVU7b0JBNEJqSCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsR0FBSyxDQUFDLElBQUksR0FBRyxlQUFlLEVBQ3RCLGVBQWUsR0F2Q0QsUUFBaUIsVUF3Qy9CLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZTtnQkFFdEUsTUFBTSxDQUFDLFdBQVc7WUFDcEIsQ0FBQzs7O1dBcENrQixXQUFXO0VBVFgsYUFBZTtrQkFTZixXQUFXIn0=