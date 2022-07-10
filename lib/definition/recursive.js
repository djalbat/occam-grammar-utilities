"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RecursiveDefinition;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _definition = require("../utilities/definition");
var _parts = require("../utilities/parts");
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
var first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail;
var RecursiveDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RecursiveDefinition, Definition);
    var _super = _createSuper(RecursiveDefinition);
    function RecursiveDefinition(parts, ruleName, recursiveRuleNames) {
        _classCallCheck(this, RecursiveDefinition);
        var _this;
        _this = _super.call(this, parts);
        _this.ruleName = ruleName;
        _this.recursiveRuleNames = recursiveRuleNames;
        return _this;
    }
    _createClass(RecursiveDefinition, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getRecursiveRuleNames",
            value: function getRecursiveRuleNames() {
                return this.recursiveRuleNames;
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var recursiveDefinition = null;
                var definitionRecursive = (0, _definition.isDefinitionRecursive)(definition);
                if (definitionRecursive) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                    recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        },
        {
            key: "fromDirectlyLeftRecursiveDefinition",
            value: function fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
                var parts = directlyLeftRecursiveDefinition.getParts();
                var firstPart = first(parts), partsTail = tail(parts), part = firstPart; ///
                parts = partsTail; ///
                var directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), repeatedPart = (0, _parts.repeatedPartFromParts)(parts);
                parts = [
                    directlyReducedPart,
                    repeatedPart
                ];
                parts = (0, _parts.cloneParts)(parts); ///
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGlyZWN0bHlSZWR1Y2VkUGFydEZyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25SZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzLCByZXBlYXRlZFBhcnRGcm9tUGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuY29uc3QgeyBmaXJzdCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvblJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydHNUYWlsID0gdGFpbChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgICByZXBlYXRlZFBhcnQgPSByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBkaXJlY3RseVJlZHVjZWRQYXJ0LFxuICAgICAgcmVwZWF0ZWRQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJpc0RlZmluaXRpb25SZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwicGFydHNUYWlsIiwicGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJyZXBlYXRlZFBhcnQiLCJyZXBlYXRlZFBhcnRGcm9tUGFydHMiLCJjbG9uZVBhcnRzIiwicmVjdXJzaXZlUnVs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