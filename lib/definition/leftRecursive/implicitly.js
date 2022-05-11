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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZVwiO1xuXG5pbXBvcnQgeyBMRUZUX1JFQ1VSU0lWRV9UWVBFLCBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgcmVwbGFjZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBudWxsLCAvLy9cbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICByZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChyZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSA9IChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPT09IHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnMuc2xpY2UoaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSxcbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5ldmVyeSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gTEVGVF9SRUNVUlNJVkVfVFlQRSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmU7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5tYXAoKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGZpcnN0UnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKSxcbiAgICAgICAgbGFzdFJ1bGVOYW1lID0gZmlyc3RSdWxlTmFtZTsgLy8vXG5cbiAgcnVsZU5hbWVzLnB1c2gobGFzdFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFVOQVNTSUdORURfRU5UUlkgPSBcIl4uKiRcIjtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwidHlwZSIsInBhcnRzIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZXBsYWNlIiwicnVsZU1hcCIsInJ1bGUiLCJyZXBsYWNlZERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUiLCJnZXRQYXJ0cyIsImdldFJ1bGVOYW1lIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJyZWN1cnNpdmVSdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInNvbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kZXgiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSIsInNsaWNlIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsImlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsImV2ZXJ5IiwiZ2V0VHlwZSIsIkxFRlRfUkVDVVJTSVZFX1RZUEUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwibWFwIiwicHVzaCIsImZpcnN0UnVsZU5hbWUiLCJzaGlmdCIsImxhc3RSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFTixJQUFBLGNBQWdDLGtDQUFoQyxnQ0FBZ0MsRUFBQTtBQUVBLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxpQ0FBaUMsaUJBdUNuRCxBQXZDWTs7O2FBQU1BLGlDQUFpQyxDQUN4Q0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUVDLHVCQUF1Qjs7O2tDQUMxR04sSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLENDWnZGLENEWXlGO1FBRXJGLE1BQUtDLHVCQUF1QixHQUFHQSx1QkFBdUIsQ0FBQzs7Ozs7WUFHekRDLEdBQTBCLEVBQTFCQSw0QkFBMEI7bUJBQTFCQSxTQUFBQSwwQkFBMEIsR0FBRztnQkFDM0IsSUFBSSxDQUFDRCx1QkFBdUIsR0FBR0EsdUJBQXVCLENBQUM7YUFDeEQ7OztZQUVERSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO2dCQUNmLElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDLElBQUksQ0FBQ1AsUUFBUSxDQUFDLEVBQzdCUyxrQkFBa0IsR0FBRyxJQUFJLENBQUNMLHVCQUF1QixFQUNq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