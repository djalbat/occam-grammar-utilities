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
var first = _necessary.arrayUtilities.first;
var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(ImplicitlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(ImplicitlyLeftRecursiveDefinition);
    function ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
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
function isRecursiveDefinitionsPathLeftRecursive(ruleName2, recursiveDefinitionsPath) {
    var ruleNames = ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName2, recursiveDefinitionsPath), recursiveDefinitionsPathLeftRecursive = recursiveDefinitionsPath.every(function(recursiveDefinition, index) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IExFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXBsYWNlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbnVsbCwgLy8vXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgcmVjdXJzaXZlRGVmaW5pdGlvbnMuc29tZSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUgPSAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID09PSByZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zLnNsaWNlKGluZGV4KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCk7XG5cbiAgICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCksXG4gICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGguZXZlcnkoKHJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IExFRlRfUkVDVVJTSVZFX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCkge1xuICBjb25zdCBydWxlTmFtZXMgPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgubWFwKChyZWN1cnNpdmVEZWZpbml0aW9uKSA9PiByZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCkpO1xuXG4gIHJ1bGVOYW1lcy5wdXNoKHJ1bGVOYW1lKTtcblxuICBjb25zdCBmaXJzdFJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCksXG4gICAgICAgIGxhc3RSdWxlTmFtZSA9IGZpcnN0UnVsZU5hbWU7IC8vL1xuXG4gIHJ1bGVOYW1lcy5wdXNoKGxhc3RSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwbGFjZSIsInJ1bGVNYXAiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0UGFydHMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwic29tZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2xpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwiaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZXZlcnkiLCJnZXRUeXBlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1hcCIsInB1c2giLCJmaXJzdFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0UnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRU4sR0FBZ0MsQ0FBaEMsY0FBZ0M7QUFFQSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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