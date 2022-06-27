"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return RecursiveDefinition;
    },
    enumerable: true
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _parts = require("../utilities/parts");
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
var first = _necessary.arrayUtilities.first;
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
                var definition = directlyLeftRecursiveDefinition, clonedParts = (0, _definition.cloneDefinitionParts)(definition);
                var parts = clonedParts; ///
                var firstPart = first(parts), part = firstPart, reducedPart = (0, _part.reducedPartFromPart)(part), repeatedPart = (0, _parts.repeatedPartFromParts)(parts);
                parts = [
                    reducedPart,
                    repeatedPart
                ];
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts), recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFBhcnRGcm9tUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25SZWN1cnNpdmUsIGNsb25lRGVmaW5pdGlvblBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlID0gaXNEZWZpbml0aW9uUmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBjbG9uZWRQYXJ0cyA9IGNsb25lRGVmaW5pdGlvblBhcnRzKGRlZmluaXRpb24pO1xuXG4gICAgbGV0IHBhcnRzID0gY2xvbmVkUGFydHM7IC8vL1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgIHJlZHVjZWRQYXJ0ID0gcmVkdWNlZFBhcnRGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgICByZXBlYXRlZFBhcnQgPSByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICByZWR1Y2VkUGFydCxcbiAgICAgIHJlcGVhdGVkUGFydFxuICAgIF1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyksXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJydWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJ1bGVOYW1lIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZnJvbVJ1bGVOYW1lQW5kRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvblJlY3Vyc2l2ZSIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmcm9tRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjbG9uZWRQYXJ0cyIsImNsb25lRGVmaW5pdGlvblBhcnRzIiwiZmlyc3RQYXJ0IiwicGFydCIsInJlZHVjZWRQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUGFydCIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVks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