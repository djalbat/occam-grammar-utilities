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
                    var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, parts = leftRecursiveDefinition.getParts(), ruleName1 = leftRecursiveDefinition.getRuleName(), definition = null, recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, ruleName1, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImZpcnN0IiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJ0eXBlIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcGxhY2UiLCJydWxlTWFwIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInNvbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kZXgiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSIsInNsaWNlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsImlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImV2ZXJ5IiwiZ2V0VHlwZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJtYXAiLCJwdXNoIiwiZmlyc3RSdWxlTmFtZSIsInNoaWZ0IiwibGFzdFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUVOLEdBQWdDLENBQWhDLGNBQWdDO0FBRUEsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixHQUFLLENBQUcsS0FBSyxHQU5rQixVQUFXLGdCQU1sQyxLQUFLO0lBRVEsaUNBQWlDLGlCQUF2QyxRQUFRO2NBQUYsaUNBQWlDO2FBQWpDLGlDQUFpQyxDQUN4QyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCOzhCQUQvRixpQ0FBaUM7O2lFQUFqQyxpQ0FBaUMsYUFFNUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQjtjQUU5RSx1QkFBdUIsR0FBRyx1QkFBdUI7OztpQkFKckMsaUNBQWlDOztZQU9wRCxHQUEwQixFQUExQixDQUEwQjttQkFBMUIsUUFBUSxDQUFSLDBCQUEwQixH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QUcsd0JBQXdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxtQkFBbUI7UUFBSyxNQUFNLENBQU4sbUJBQW1CLENBQUMsV0FBVzs7SUFFdkcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRO0lBRXZCLEdBQUssQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssSUFDL0IsWUFBWSxHQUFHLGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZO0lBRTNCLE1BQU0sQ0FBQyxTQUFTO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IExFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXBsYWNlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbnVsbCwgLy8vXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgcmVjdXJzaXZlRGVmaW5pdGlvbnMuc29tZSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUgPSAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID09PSByZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zLnNsaWNlKGluZGV4KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCksXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGguZXZlcnkoKHJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IExFRlRfUkVDVVJTSVZFX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgubWFwKChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCkpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBmaXJzdFJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCksXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGZpcnN0UnVsZU5hbWU7IC8vL1xuXG4gIHJ1bGVOYW1lcy5wdXNoKGxhc3RSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdfQ==