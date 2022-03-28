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
                    var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, parts = leftRecursiveDefinition.getParts(), _$ruleName = leftRecursiveDefinition.getRuleName(), definition = null, recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, _$ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBMRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmVwbGFjZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0gfHwgbnVsbCxcbiAgICAgICAgICByZXBsYWNlZERlZmluaXRpb24gPSB0aGlzLmxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbiA9IG51bGwsIC8vL1xuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpO1xuXG4gICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoICE9PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpO1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBudWxsO1xuXG4gIHJlY3Vyc2l2ZURlZmluaXRpb25zLnNvbWUoKHJlY3Vyc2l2ZURlZmluaXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvblJ1bGVOYW1lID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lID0gKHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9PT0gcmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSByZWN1cnNpdmVEZWZpbml0aW9ucy5zbGljZShpbmRleCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBudWxsO1xuXG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAgLy8vXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSBmaW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggIT09IG51bGwpIHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlID0gaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmUpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGggPSByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpLFxuICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoLmV2ZXJ5KChyZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSByZWN1cnNpdmVEZWZpbml0aW9uLmdldFR5cGUoKTtcblxuICAgICAgICAgIGlmICh0eXBlID09PSBMRUZUX1JFQ1VSU0lWRV9UWVBFKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgpIHtcbiAgY29uc3QgcnVsZU5hbWVzID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoLm1hcCgocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgY29uc3QgZmlyc3RSdWxlTmFtZSA9IHJ1bGVOYW1lcy5zaGlmdCgpLFxuICAgICAgICBsYXN0UnVsZU5hbWUgPSBmaXJzdFJ1bGVOYW1lOyAvLy9cblxuICBydWxlTmFtZXMucHVzaChsYXN0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgVU5BU1NJR05FRF9FTlRSWSA9IFwiXi4qJFwiO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ0eXBlIiwicGFydHMiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlcGxhY2UiLCJydWxlTWFwIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwic29tZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2xpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwiaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZXZlcnkiLCJnZXRUeXBlIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJtYXAiLCJwdXNoIiwiZmlyc3RSdWxlTmFtZSIsInNoaWZ0IiwibGFzdFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVOLElBQUEsY0FBZ0Msa0NBQWhDLGdDQUFnQyxFQUFBO0FBRUEsSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQU0sQUFBRUEsS0FBSyxHQUFLQyxVQUFjLGVBQUEsQ0FBeEJELEtBQUssQUFBbUIsQUFBQztBQUVsQixJQUFBLEFBQU1FLGlDQUFpQyxpQkF1Q25ELEFBdkNZOzs7YUFBTUEsaUNBQWlDLENBQ3hDQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRUMsdUJBQXVCOzs7a0NBQzFHTixJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsQ0NadkYsQ0RZeUY7UUFFckYsTUFBS0MsdUJBQXVCLEdBQUdBLHVCQUF1QixDQUFDOzs7OztZQUd6REMsR0FBMEIsRUFBMUJBLDRCQUEwQjttQkFBMUJBLFNBQUFBLDBCQUEwQixHQUFHO2dCQUMzQixJQUFJLENBQUNELHVCQUF1QixHQUFHQSx1QkFBdUIsQ0FBQzthQUN4RDs7O1lBRURFLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsSUFBSSxDQUFDUCxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQ3JDUyxrQkFBa0IsR0FBRyxJQUFJ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