"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _types = require("../types");
var _definition = require("../utilities/definition");
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
var RecursiveDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RecursiveDefinition, Definition);
    var _super = _createSuper(RecursiveDefinition);
    function RecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames) {
        _classCallCheck(this, RecursiveDefinition);
        var _this;
        _this = _super.call(this, parts);
        _this.type = type;
        _this.ruleName = ruleName;
        _this.definition = definition;
        _this.recursiveRuleNames = recursiveRuleNames;
        return _this;
    }
    _createClass(RecursiveDefinition, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                return this.definition;
            }
        },
        {
            key: "getRecursiveRuleNames",
            value: function getRecursiveRuleNames() {
                return this.recursiveRuleNames;
            }
        },
        {
            key: "isLeftRecursiveDefinition",
            value: function isLeftRecursiveDefinition() {
                var leftRecursiveDefinition = false;
                return leftRecursiveDefinition;
            }
        },
        {
            key: "match",
            value: function match(definition) {
                var matches = this.definition === definition;
                return matches;
            }
        },
        {
            key: "rewrite",
            value: function rewrite(ruleMap) {
            ///
            }
        },
        {
            key: "replace",
            value: function replace(ruleMap) {
                var rule = ruleMap[this.ruleName], replacedDefinition = this.definition, replacementDefinition = this; ///
                rule.replaceDefinition(replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var recursiveDefinition = null;
                var recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition), recursiveRuleNamesLength = recursiveRuleNames.length, definitionRecursiveDefinition = recursiveRuleNamesLength > 0;
                if (definitionRecursiveDefinition) {
                    var parts = [], type = _types.RECURSIVE_TYPE;
                    recursiveDefinition = new RecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);
exports.default = RecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IFJFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCB0eXBlLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGlzTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIG1hdGNoKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuZGVmaW5pdGlvbiA9PT0gZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVwbGFjZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFO1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRUeXBlIiwiZ2V0UnVsZU5hbWUiLCJnZXREZWZpbml0aW9uIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibWF0Y2giLCJtYXRjaGVzIiwicmV3cml0ZSIsInJ1bGVNYXAiLCJyZXBsYWNlIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uIiwiUkVDVVJTSVZFX1RZUEUiLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWMsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRVgsSUFBQSxNQUFVLFdBQVYsVUFBVSxDQUFBO0FBQ1EsSUFBQSxXQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBQSxBQUFNQSxtQkFBbUIs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