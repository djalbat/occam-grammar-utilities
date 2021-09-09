"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));
var _types = require("../../types");
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
var first = _necessary.arrayUtilities.first;
var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(ImplicitlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    function ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ImplicitlyLeftRecursiveDefinition).call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames));
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _createClass(ImplicitlyLeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                this.leftRecursiveDefinition = leftRecursiveDefinition;
            }
        },
        {
            key: "replace",
            value: function replace(ruleMap) {
                var rule = ruleMap[this.ruleName] || null, replacedDefinition = this.leftRecursiveDefinition, replacementDefinition = this; ///
                rule.replaceDefinition(replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions",
            value: function fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
                var implicitlyLeftRecursiveDefinition = null;
                var leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);
                if (leftRecursiveDefinition !== null) {
                    var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, parts = leftRecursiveDefinition.getParts(), ruleName = leftRecursiveDefinition.getRuleName(), definition = null, recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
                }
                return implicitlyLeftRecursiveDefinition;
            }
        }
    ]);
    return ImplicitlyLeftRecursiveDefinition;
}(_leftRecursive.default);
exports.default = ImplicitlyLeftRecursiveDefinition;
function findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    var leftRecursiveDefinition = null;
    var leftRecursiveDefinitionsPath = findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions);
    if (leftRecursiveDefinitionsPath !== null) {
        var firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsPath);
        leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
    }
    return leftRecursiveDefinition;
}
function findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions) {
    var recursiveDefinitionsPath = null;
    recursiveDefinitions.some(function(recursiveDefinition, index) {
        var recursiveDefinitionRuleName = recursiveDefinition.getRuleName(), recursiveDefinitionRuleNameRecursiveRuleName = recursiveDefinitionRuleName === recursiveRuleName;
        if (recursiveDefinitionRuleNameRecursiveRuleName) {
            recursiveDefinitionsPath = recursiveDefinitions.slice(index);
            return true;
        }
    });
    return recursiveDefinitionsPath;
}
function findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    var leftRecursiveDefinitionsPath = null;
    var recursiveRuleName = leftRecursiveRuleName, recursiveDefinitionsPath = findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions);
    if (recursiveDefinitionsPath !== null) {
        var recursiveDefinitionsPathLeftRecursive = isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath);
        if (recursiveDefinitionsPathLeftRecursive) {
            leftRecursiveDefinitionsPath = recursiveDefinitionsPath; ///
        }
    }
    return leftRecursiveDefinitionsPath;
}
function isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath) {
    var ruleNames = ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath), recursiveDefinitionsPathLeftRecursive = recursiveDefinitionsPath.every(function(recursiveDefinition, index) {
        var type = recursiveDefinition.getType();
        if (type === _types.LEFT_RECURSIVE_TYPE) {
            var ruleName = ruleNames[index], leftRecursiveRuleNames = recursiveDefinition.getLeftRecursiveRuleNames(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
            if (leftRecursiveRuleNamesIncludesRuleName) {
                return true;
            }
        }
    });
    return recursiveDefinitionsPathLeftRecursive;
}
function ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath) {
    var ruleNames = recursiveDefinitionsPath.map(function(recursiveDefinition) {
        return recursiveDefinition.getRuleName();
    });
    ruleNames.push(ruleName);
    var firstRuleName = ruleNames.shift(), lastRuleName = firstRuleName; ///
    ruleNames.push(lastRuleName);
    return ruleNames;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpcnN0IiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJ0eXBlIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcGxhY2UiLCJydWxlTWFwIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInNvbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kZXgiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSIsInNsaWNlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsImlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImV2ZXJ5IiwiZ2V0VHlwZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJtYXAiLCJwdXNoIiwiZmlyc3RSdWxlTmFtZSIsInNoaWZ0IiwibGFzdFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUVOLEdBQWdDLENBQWhDLGNBQWdDO0FBRUEsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixHQUFLLENBQUcsS0FBSyxHQU5rQixVQUFXLGdCQU1sQyxLQUFLO0lBRVEsaUNBQWlDLGlCQUF2QyxRQUFRO2NBQUYsaUNBQWlDO2FBQWpDLGlDQUFpQyxDQUN4QyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCOzhCQUQvRixpQ0FBaUM7O2lFQUFqQyxpQ0FBaUMsYUFFNUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQjtjQUU5RSx1QkFBdUIsR0FBRyx1QkFBdUI7OztpQkFKckMsaUNBQWlDOztZQU9wRCxHQUEwQixHQUExQiwwQkFBMEI7bUJBQTFCLFFBQVEsQ0FBUiwwQkFBMEIs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