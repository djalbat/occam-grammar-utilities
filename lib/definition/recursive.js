"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _definition = require("../utilities/definition");
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
                var leftRecursiveDefinition = this.type === _types.DIRECTLY_LEFT_RECURSIVE_TYPE || this.type === _types.INDIRECTLY_LEFT_RECURSIVE_TYPE || this.type === _types.IMPLICITLY_LEFT_RECURSIVE_TYPE;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBSRUNVUlNJVkVfVFlQRSwgRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLCAgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9ICgodGhpcy50eXBlID09PSBESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnR5cGUgPT09IElORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy50eXBlID09PSBJTVBMSUNJVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUpKTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIG1hdGNoKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHRoaXMuZGVmaW5pdGlvbiA9PT0gZGVmaW5pdGlvbik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUocnVsZU1hcCkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVwbGFjZShydWxlTWFwKSB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFO1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHR5cGUsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsInR5cGUiLCJydWxlTmFtZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRUeXBlIiwiZ2V0UnVsZU5hbWUiLCJnZXREZWZpbml0aW9uIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwiaXNMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIm1hdGNoIiwibWF0Y2hlcyIsInJld3JpdGUiLCJydWxlTWFwIiwicmVwbGFjZSIsInJ1bGUiLCJyZXBsYWNlZERlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIlJFQ1VSU0lWRV9UWVBFIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVjLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUVPLElBQUEsV0FBeUIsV0FBekIseUJBQXlCLENBQUE7QUFDb0QsSUFBQSxNQUFVLFdBQVYsVUFBVSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6SCxJQUFBLEFBQU1BLG1CQUFtQixpQkNQckMsQURPWTs7O2FBQU1BLG1CQUFtQixDQUMxQkMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0I7OztrQ0FDekRKLEtBQUssRUFBRTtRQUViLE1BQUtDLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLE1BQUtDLFFBQVEsR0FBR0EsUUFBUSxDQUFDO1FBQ3pCLE1BQUtDLFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQzdCLE1BQUtDLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQzs7Ozs7WUFHL0NDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7YUFDbEI7OztZQUVESyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0osUUFBUSxDQUFDO2FBQ3RCOzs7WUFFREssR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVUsQ0FBQzthQUN4Qjs7O1lBRURLLEdBQXFCLEVBQXJCQSx1QkFBcUI7bUJBQXJCQSxTQUFBQSxxQkFBcUIsR0FBRztnQkFDdEIsT0FBTyxJQUFJLENBQUNKLGtCQUFrQixDQUFDO2FBQ2hDOzs7WUFFREssR0FBeUIsRUFBekJBLDJCQUF5QjttQkFBekJBLFNBQUFBLHlCQUF5QixHQUFHO2dCQUMxQixJQUFNQyx1QkFBdUIsR0FBSSxBQUFDLElBQUksQ0FBQ1QsSUFBSSxLQUFLVSxNQUE0Qiw2QkFBQSxJQUMxQyxJQUFJLENBQUNWLElBQUksS0FBS1csTUFBOEIsK0JBQUEsSUFDNUMsSUFBSSxDQUFDWCxJQUFJLEtBQUtZLE1BQThCLCtCQUFBLEFBQUMsQUFBQyxBQUFDO2dCQUVqRixPQUFPSCx1QkFBdUIsQ0FBQzthQUNoQzs7O1lBRURJLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDWCxVQUFVLEVBQUU7Z0JBQ2hCLElBQU1ZLE9BQU8sR0FBSSxJQUFJLENBQUNaLFVBQVUsS0FBS0EsVUFBVSxBQUFDLEFBQUM7Z0JBRWpELE9BQU9ZLE9BQU8sQ0FBQzthQUNoQjs7O1lBRURDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7WUFDZixHQUFHO2FBQ0o7OztZQUVEQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0QsT0FBTyxFQUFFO2dCQUNmLElBQU1FLElBQUksR0FBR0YsT0FBTyxDQUFDLElBQUksQ0FBQ2YsUUFBUSxDQUFDLEVBQzdCa0Isa0JBQWtCLEdBQUcsSUFBSSxDQUFDakIsVUFBVSxFQUNwQ2tCLHFCQUFxQixHQUFHLElBQUksQUFBQyxFQUFDLEdBQUc7Z0JBRXZDRixJQUFJLENBQUNHLGlCQUFpQixDQUFDRixrQkFBa0IsRUFBRUMscUJBQXFCLENBQUMsQ0FBQzthQUNuRTs7OztZQUVNRSxHQUF5QixFQUF6QkEsMkJBQXlCO21CQUFoQyxTQUFPQSx5QkFBeUIsQ0FBQ3JCLFFBQVEsRUFBRUMsVUFBVSxFQUFFO2dCQUNyRCxJQUFJcUIsbUJBQW1CLEdBQUcsSUFBSSxBQUFDO2dCQUUvQixJQUFNcEIsa0JBQWtCLEdBQUdxQixDQUFBQSxHQUFBQSxXQUFnQyxBQUFZLENBQUEsaUNBQVosQ0FBQ3RCLFVBQVUsQ0FBQyxFQUNqRXVCLHdCQUF3QixHQUFHdEIsa0JBQWtCLENBQUN1QixNQUFNLEVBQ3BEQyw2QkFBNkIsR0FBSUYsd0JBQXdCLEdBQUcsQ0FBQyxBQUFDLEFBQUM7Z0JBRXJFLElBQUlFLDZCQUE2QixFQUFFO29CQUNqQyxJQUFNNUIsS0FBSyxHQUFHLEVBQUUsRUFDVkMsSUFBSSxHQUFHNEIsTUFBYyxlQUFBLEFBQUM7b0JBRTVCTCxtQkFBbUIsR0FBRyxJQUFJekIsbUJBQW1CLENBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDdEc7Z0JBRUQsT0FBT29CLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0FwRWdETSxhQUFVLFdBQUEsQ0FvRTFEO2tCQXBFb0IvQixtQkFBbUIifQ==