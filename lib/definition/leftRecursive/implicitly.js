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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
                var rule = ruleMap[this.ruleName], replacedDefinition = this.leftRecursiveDefinition, replacementDefinition = this; ///
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
                    var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, parts = leftRecursiveDefinition.getParts(), _$ruleName = leftRecursiveDefinition.getRuleName(), definition = null, recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, _$ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
                }
                return implicitlyLeftRecursiveDefinition;
            }
        }
    ]);
    return ImplicitlyLeftRecursiveDefinition;
}(_leftRecursive.default);
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
            var _$ruleName = ruleNames[index], leftRecursiveRuleNames = recursiveDefinition.getLeftRecursiveRuleNames(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(_$ruleName);
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
exports.default = ImplicitlyLeftRecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IExFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXBsYWNlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG51bGwsIC8vL1xuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoICE9PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBudWxsO1xuXG4gIHJlY3Vyc2l2ZURlZmluaXRpb25zLnNvbWUoKHJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9PT0gcmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSByZWN1cnNpdmVEZWZpbml0aW9ucy5zbGljZShpbmRleCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBudWxsO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlID0gaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpLFxuICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoLmV2ZXJ5KChyZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICAgIGlmICh0eXBlID09PSBMRUZUX1JFQ1VSU0lWRV9UWVBFKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoLm1hcCgocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgZmlyc3RSdWxlTmFtZSA9IHJ1bGVOYW1lcy5zaGlmdCgpLFxuICAgICAgICBsYXN0UnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lOyAvLy9cblxuICBydWxlTmFtZXMucHVzaChsYXN0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwbGFjZSIsInJ1bGVNYXAiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZ2V0UGFydHMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJzb21lIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGV4IiwicmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lUmVjdXJzaXZlUnVsZU5hbWUiLCJzbGljZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUiLCJpc1JlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJldmVyeSIsImdldFR5cGUiLCJMRUZUX1JFQ1VSU0lWRV9UWVBFIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsIm1hcCIsInB1c2giLCJmaXJzdFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0UnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlB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