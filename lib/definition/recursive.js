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
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _ruleName = require("../utilities/ruleName");
var _parts = require("../utilities/parts");
var _part = require("../utilities/part");
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
var first = _necessary.arrayUtilities.first, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
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
            key: "fromRuleNameAndParts",
            value: function fromRuleNameAndParts(ruleName, parts) {
                var recursiveDefinition = null;
                var partsRecursive = (0, _parts.arePartsRecursive)(parts);
                if (partsRecursive) {
                    var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts);
                    recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        },
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
                var firstPart = first(parts), part = firstPart, directlyReducedPart = (0, _part.directlyReducedPartFromPart)(part), ruleName = directlyLeftRecursiveDefinition.getRuleName(), directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), directlyRepeatedRuleNamePart = (0, _part.ruleNamePartFromRuleName)(directlyRepeatedRuleName), zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);
                parts = [
                    directlyReducedPart,
                    zeroOrMoreDirectlyRepeatedRuleNamePartPart
                ];
                var recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBEZWZpbml0aW9uLCBQYXJ0cyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGFyZVBhcnRzUmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUsIGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uUmVjdXJzaXZlLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgICBzdXBlcihwYXJ0cyk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRQYXJ0cyhydWxlTmFtZSwgcGFydHMpIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJ0c1JlY3Vyc2l2ZSA9IGFyZVBhcnRzUmVjdXJzaXZlKHBhcnRzKTtcblxuICAgIGlmIChwYXJ0c1JlY3Vyc2l2ZSkge1xuICAgICAgY29uc3QgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvblJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCA9IGRpcmVjdGx5UmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgICBydWxlTmFtZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUoZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlRGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0KTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgZGlyZWN0bHlSZWR1Y2VkUGFydCxcbiAgICAgIHplcm9Pck1vcmVEaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0UGFydFxuICAgIF07XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJQYXJ0cyIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzUmVjdXJzaXZlIiwiYXJlUGFydHNSZWN1cnNpdmUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJpc0RlZmluaXRpb25SZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwicGFydCIsImRpcmVjdGx5UmVkdWNlZFBhcnQiLCJkaXJlY3RseVJlZHVjZWRQYXJ0RnJvbVBhcnQiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiemVyb09yTW9yZURpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZVBhcnRQYXJ0IiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5n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