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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IExFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXBsYWNlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbnVsbCwgLy8vXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgcmVjdXJzaXZlRGVmaW5pdGlvbnMuc29tZSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUgPSAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID09PSByZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zLnNsaWNlKGluZGV4KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCksXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGguZXZlcnkoKHJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IExFRlRfUkVDVVJTSVZFX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgubWFwKChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCkpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBmaXJzdFJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCksXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGZpcnN0UnVsZU5hbWU7IC8vL1xuXG4gIHJ1bGVOYW1lcy5wdXNoKGxhc3RSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwbGFjZSIsInJ1bGVNYXAiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwic29tZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2xpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwiaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZXZlcnkiLCJnZXRUeXBlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1hcCIsInB1c2giLCJmaXJzdFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0UnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRU4sR0FBZ0MsQ0FBaEMsY0FBZ0M7QUFFQSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLEdBQUssQ0FBR0EsS0FBSyxHQU5rQixVQUFXLGdCQU1sQ0EsS0FBSztJQUVRQyxpQ0FBaUMsaUJBQXZDLFFBQVE7Y0FBRkEsaUNBQWlDO2FBQWpDQSxpQ0FBaUMsQ0FDeENDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx1QkFBdUI7OEJBRC9GUCxpQ0FBaUM7O2lFQUFqQ0EsaUNBQWlDLGFBRTVDQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0I7Y0FFOUVDLHVCQUF1QixHQUFHQSx1QkFBdUI7OztpQkFKckNQLGlDQUFpQzs7WUFPcERRLEdBQTBCLEVBQTFCQSxDQUEwQjttQkFBMUJBLFFBQVEsQ0FBUkEsMEJBQTBCLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxDQUFDRCx1QkFBdUIsR0FBR0EsdUJBQXVCO1lBQ3hELENBQUM7OztZQUVERSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFDLENBQVJELE9BQU8sQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRCxPQUFPLENBQUMsSUFBSSxDQUFDUCxRQUFRLEtBQUssSUFBSSxFQUNyQ1Msa0JBQWtCLEdBQUcsSUFBSSxDQUFDTCx1QkFBdUIsRUFDakRNLHFCQUFxQixHQUFHLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZDRixJQUFJLENBQUNHLGlCQUFpQixDQUFDRixrQkFBa0IsRUFBRUMscUJBQXFCO1lBQ2xFLENBQUM7Ozs7WUFFTUUsR0FBd0QsRUFBeERBLENBQXdEO21CQUEvRCxRQUFRLENBQURBLHdEQUF3RCxDQUFDWixRQUFRLEVBQUVhLHFCQUFxQixFQUFFQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUN0SCxHQUFHLENBQUNDLGlDQUFpQyxHQUFHLElBQUk7Z0JBRTVDLEdBQUssQ0FBQ1gsdUJBQXVCLEdBQUdZLDJCQUEyQixDQUFDaEIsUUFBUSxFQUFFYSxxQkFBcUIsRUFBRUMsb0JBQW9CO2dCQUVqSCxFQUFFLEVBQUVWLHVCQUF1QixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNyQyxHQUFLLENBQUNOLElBQUksR0E3Qm9ELE1BQWEsaUNBOEJyRUMsS0FBSyxHQUFHSyx1QkFBdUIsQ0FBQ2EsUUFBUSxJQUN4Q2pCLFNBQVEsR0FBR0ksdUJBQXVCLENBQUNjLFdBQVcsSUFDOUNqQixVQUFVLEdBQUcsSUFBSSxFQUNqQkMsa0JBQWtCLEdBQUdFLHVCQUF1QixDQUFDZSxxQkFBcUIsSUFDbEVoQixzQkFBc0IsR0FBR0MsdUJBQXVCLENBQUNnQix5QkFBeUI7b0JBRWhGTCxpQ0FBaUMsR0FBRyxHQUFHLENBQUNsQixpQ0FBaUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHVCQUF1QjtnQkFDbEwsQ0FBQztnQkFFRCxNQUFNLENBQUNXLGlDQUFpQztZQUMxQyxDQUFDOzs7V0FwQ2tCbEIsaUNBQWlDO0VBTmxCLGNBQWdDO2tCQU0vQ0EsaUNBQWlDO1NBdUM3Q21CLDJCQUEyQixDQUFDaEIsUUFBUSxFQUFFYSxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUUsQ0FBQztJQUMzRixHQUFHLENBQUNWLHVCQUF1QixHQUFHLElBQUk7SUFFbEMsR0FBSyxDQUFDaUIsNEJBQTRCLEdBQUdDLGdDQUFnQyxDQUFDdEIsUUFBUSxFQUFFYSxxQkFBcUIsRUFBRUMsb0JBQW9CO0lBRTNILEVBQUUsRUFBRU8sNEJBQTRCLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUMsR0FBSyxDQUFDRSw0QkFBNEIsR0FBRzNCLEtBQUssQ0FBQ3lCLDRCQUE0QjtRQUV2RWpCLHVCQUF1QixHQUFHbUIsNEJBQTRCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQzdELENBQUM7SUFFRCxNQUFNLENBQUNuQix1QkFBdUI7QUFDaEMsQ0FBQztTQUVRb0IsNEJBQTRCLENBQUN4QixRQUFRLEVBQUV5QixpQkFBaUIsRUFBRVgsb0JBQW9CLEVBQUUsQ0FBQztJQUN4RixHQUFHLENBQUNZLHdCQUF3QixHQUFHLElBQUk7SUFFbkNaLG9CQUFvQixDQUFDYSxJQUFJLENBQUMsUUFBUSxDQUFQQyxtQkFBbUIsRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDekQsR0FBSyxDQUFDQywyQkFBMkIsR0FBR0YsbUJBQW1CLENBQUNWLFdBQVcsSUFDN0RhLDRDQUE0QyxHQUFJRCwyQkFBMkIsS0FBS0wsaUJBQWlCO1FBRXZHLEVBQUUsRUFBRU0sNENBQTRDLEVBQUUsQ0FBQztZQUNqREwsd0JBQXdCLEdBQUdaLG9CQUFvQixDQUFDa0IsS0FBSyxDQUFDSCxLQUFLO1lBRTNELE1BQU0sQ0FBQyxJQUFJO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNILHdCQUF3QjtBQUNqQyxDQUFDO1NBRVFKLGdDQUFnQyxDQUFDdEIsUUFBUSxFQUFFYSxxQkFBcUIsRUFBRUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoRyxHQUFHLENBQUNPLDRCQUE0QixHQUFHLElBQUk7SUFFdkMsR0FBSyxDQUFDSSxpQkFBaUIsR0FBR1oscUJBQXFCLEVBQzNDYSx3QkFBd0IsR0FBR0YsNEJBQTRCLENBQUN4QixRQUFRLEVBQUV5QixpQkFBaUIsRUFBRVgsb0JBQW9CO0lBRTdHLEVBQUUsRUFBRVksd0JBQXdCLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEMsR0FBSyxDQUFDTyxxQ0FBcUMsR0FBR0MsdUNBQXVDLENBQUNsQyxRQUFRLEVBQUUwQix3QkFBd0I7UUFFeEgsRUFBRSxFQUFFTyxxQ0FBcUMsRUFBRSxDQUFDO1lBQzFDWiw0QkFBNEIsR0FBR0ssd0JBQXdCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDTCw0QkFBNEI7QUFDckMsQ0FBQztTQUVRYSx1Q0FBdUMsQ0FBQ2xDLFFBQVEsRUFBRTBCLHdCQUF3QixFQUFFLENBQUM7SUFDcEYsR0FBSyxDQUFDUyxTQUFTLEdBQUdDLGdEQUFnRCxDQUFDcEMsUUFBUSxFQUFFMEIsd0JBQXdCLEdBQy9GTyxxQ0FBcUMsR0FBR1Asd0JBQXdCLENBQUNXLEtBQUssQ0FBQyxRQUFRLENBQVBULG1CQUFtQixFQUFFQyxLQUFLLEVBQUssQ0FBQztRQUN0RyxHQUFLLENBQUMvQixJQUFJLEdBQUc4QixtQkFBbUIsQ0FBQ1UsT0FBTztRQUV4QyxFQUFFLEVBQUV4QyxJQUFJLEtBaEdrRCxNQUFhLHNCQWdHckMsQ0FBQztZQUNqQyxHQUFLLENBQUNFLFFBQVEsR0FBR21DLFNBQVMsQ0FBQ04sS0FBSyxHQUMxQjFCLHNCQUFzQixHQUFHeUIsbUJBQW1CLENBQUNSLHlCQUF5QixJQUN0RW1CLHNDQUFzQyxHQUFHcEMsc0JBQXNCLENBQUNxQyxRQUFRLENBQUN4QyxRQUFRO1lBRXZGLEVBQUUsRUFBRXVDLHNDQUFzQyxFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRVAsTUFBTSxDQUFDTixxQ0FBcUM7QUFDOUMsQ0FBQztTQUVRRyxnREFBZ0QsQ0FBQ3BDLFFBQVEsRUFBRTBCLHdCQUF3QixFQUFFLENBQUM7SUFDN0YsR0FBSyxDQUFDUyxTQUFTLEdBQUdULHdCQUF3QixDQUFDZSxHQUFHLENBQUMsUUFBUSxDQUFQYixtQkFBbUI7UUFBS0EsTUFBTSxDQUFOQSxtQkFBbUIsQ0FBQ1YsV0FBVzs7SUFFdkdpQixTQUFTLENBQUNPLElBQUksQ0FBQzFDLFFBQVE7SUFFdkIsR0FBSyxDQUFDMkMsYUFBYSxHQUFHUixTQUFTLENBQUNTLEtBQUssSUFDL0JDLFlBQVksR0FBR0YsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV2Q1IsU0FBUyxDQUFDTyxJQUFJLENBQUNHLFlBQVk7SUFFM0IsTUFBTSxDQUFDVixTQUFTO0FBQ2xCLENBQUMifQ==