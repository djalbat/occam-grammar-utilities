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
    function ImplicitlyLeftRecursiveDefinition() {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(ImplicitlyLeftRecursiveDefinition, null, [
        {
            key: "fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions",
            value: function fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
                var implicitlyLeftRecursiveDefinition = null;
                var leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);
                if (leftRecursiveDefinition !== null) {
                    var parts = [], type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE, _$ruleName = leftRecursiveDefinition.getRuleName(), definition = null, recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                    implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, type, _$ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmUvaW1wbGljaXRseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCI7XG5cbmltcG9ydCB7IExFRlRfUkVDVVJTSVZFX1RZUEUsIElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFydHMgPSBbXSxcbiAgICAgICAgICAgIHR5cGUgPSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbnVsbCwgLy8vXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCk7XG5cbiAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICByZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChyZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSA9IChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPT09IHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnMuc2xpY2UoaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSxcbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5ldmVyeSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gTEVGVF9SRUNVUlNJVkVfVFlQRSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmU7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5tYXAoKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGZpcnN0UnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKSxcbiAgICAgICAgbGFzdFJ1bGVOYW1lID0gZmlyc3RSdWxlTmFtZTsgLy8vXG5cbiAgcnVsZU5hbWVzLnB1c2gobGFzdFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwidHlwZSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwic29tZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2xpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwiaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZXZlcnkiLCJnZXRUeXBlIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJt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