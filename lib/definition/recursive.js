"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                var definitionRecursive = (0, _definition).isDefinitionRecursive(definition);
                if (definitionRecursive) {
                    var parts = definition.getParts(), recursiveRuleNames = (0, _definition).recursiveRuleNamesFromDefinition(definition);
                    recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        },
        {
            key: "fromDirectlyLeftRecursiveDefinition",
            value: function fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
                var directlyLeftRecursiveDefinitionParts = (0, _definition).definitionPartsFromDefinition(directlyLeftRecursiveDefinition);
                var firstDirectlyLeftRecursiveDefinitionPart = first(directlyLeftRecursiveDefinitionParts), part = firstDirectlyLeftRecursiveDefinitionPart, reducedPart = (0, _part).reducedPartFromPart(part);
                var parts = directlyLeftRecursiveDefinitionParts; ///
                var repeatedPart = (0, _parts).repeatedPartFromParts(parts);
                parts = [
                    reducedPart,
                    repeatedPart
                ];
                var ruleName = directlyLeftRecursiveDefinition.getRuleName(), recursiveRuleNames = (0, _parts).recursiveRuleNamesFromParts(parts), recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);
exports.default = RecursiveDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVkdWNlZFBhcnRGcm9tUGFydCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25SZWN1cnNpdmUsIGRlZmluaXRpb25QYXJ0c0Zyb21EZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjdXJzaXZlUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlID0gaXNEZWZpbml0aW9uUmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMgPSBkZWZpbml0aW9uUGFydHNGcm9tRGVmaW5pdGlvbihkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGNvbnN0IGZpcnN0RGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnQgPSBmaXJzdChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHMpLFxuICAgICAgICAgIHBhcnQgPSBmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0LCAvLy9cbiAgICAgICAgICByZWR1Y2VkUGFydCA9IHJlZHVjZWRQYXJ0RnJvbVBhcnQocGFydCk7XG5cbiAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUGFydHM7IC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWRQYXJ0ID0gcmVwZWF0ZWRQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHBhcnRzID0gW1xuICAgICAgcmVkdWNlZFBhcnQsXG4gICAgICByZXBlYXRlZFBhcnRcbiAgICBdXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMpLFxuICAgICAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cywgcnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZyb21SdWxlTmFtZUFuZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJpc0RlZmluaXRpb25SZWN1cnNpdmUiLCJnZXRQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblBhcnRzIiwiZGVmaW5pdGlvblBhcnRzRnJvbURlZmluaXRpb24iLCJmaXJzdERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25QYXJ0IiwicGFydCIsInJlZHVjZWRQYXJ0IiwicmVkdWNlZFBhcnRGcm9tUGFydCIsInJlcGVhdGVkUGFydCIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDWCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFTixJQUFBLEtBQW1CLFdBQW5CLG1CQUFtQixDQUFBO0FBQ1ksSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNnQixJQUFBLFdBQXlCLFdBQXpCLHlCQUF5QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoSSxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxtQkFBbUIsaUJBQXpCOzs7YUFBTUEsbUJBQW1CLENBQzFCQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCOzs7a0NBQ3ZDRixLQUFLLEVBQUU7UUFFYixNQUFLQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUV6QixNQUFLQyxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUM7Ozs7O1lBRy9DQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUSxDQUFDO2FBQ3RCOzs7WUFFREcsR0FBcUIsRUFBckJBLHVCQUFxQjttQkFBckJBLFNBQUFBLHFCQUFxQixHQUFHO2dCQUN0QixPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCLENBQUM7YUFDaEM7Ozs7WUFFTUcsR0FBeUIsRUFBekJBLDJCQUF5QjttQkFBaEMsU0FBT0EseUJBQXlCLENBQUNKLFFBQVEsRUFBRUssVUFBVSxFQUFFO2dCQUNyRCxJQUFJQyxtQkFBbUIsR0FBRyxJQUFJLEFBQUM7Z0JBRS9CLElBQU1DLG1CQUFtQixHQUFHQyxDQUFBQSxHQUFBQSxXQUFxQixBQUFZLENBQUEsc0JBQVosQ0FBQ0gsVUFBVSxDQUFDLEFBQUM7Z0JBRTlELElBQUlFLG1CQUFtQixFQUFFO29CQUN2QixJQUFNUixLQUFLLEdBQUdNLFVBQVUsQ0FBQ0ksUUFBUSxFQUFFLEVBQzdCUixrQkFBa0IsR0FBR1MsQ0FBQUEsR0FBQUEsV0FBZ0MsQUFBWSxDQUFBLGlDQUFaLENBQUNMLFVBQVUsQ0FBQyxBQUFDO29CQUV4RUMsbUJBQW1CLEdBQUcsSUFBSVIsbUJBQW1CLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNwRjtnQkFFRCxPQUFPSyxtQkFBbUIsQ0FBQzthQUM1Qjs7O1lBRU1LLEdBQW1DLEVBQW5DQSxxQ0FBbUM7bUJBQTFDLFNBQU9BLG1DQUFtQyxDQUFDQywrQkFBK0IsRUFBRTtnQkFDMUUsSUFBSUMsb0NBQW9DLEdBQUdDLENBQUFBLEdBQUFBLFdBQTZCLEFBQWlDLENBQUEsOEJBQWpDLENBQUNGLCtCQUErQixDQUFDLEFBQUM7Z0JBRTFHLElBQU1HLHdDQUF3QyxHQUFHbkIsS0FBSyxDQUFDaUIsb0NBQW9DLENBQUMsRUFDdEZHLElBQUksR0FBR0Qsd0NBQXdDLEVBQy9DRSxXQUFXLEdBQUdDLENBQUFBLEdBQUFBLEtBQW1CLEFBQU0sQ0FBQSxvQkFBTixDQUFDRixJQUFJLENBQUMsQUFBQztnQkFFOUMsSUFBSWpCLEtBQUssR0FBR2Msb0NBQW9DLEFBQUMsRUFBQyxHQUFHO2dCQUVyRCxJQUFNTSxZQUFZLEdBQUdDLENBQUFBLEdBQUFBLE1BQXFCLEFBQU8sQ0FBQSxzQkFBUCxDQUFDckIsS0FBSyxDQUFDLEFBQUM7Z0JBRWxEQSxLQUFLLEdBQUc7b0JBQ05rQixXQUFXO29CQUNYRSxZQUFZO2lCQUNiO2dCQUVELElBQU1uQixRQUFRLEdBQUdZLCtCQUErQixDQUFDVixXQUFXLEVBQUUsRUFDeERELGtCQUFrQixHQUFHb0IsQ0FBQUEsR0FBQUEsTUFBMkIsQUFBTyxDQUFBLDRCQUFQLENBQUN0QixLQUFLLENBQUMsRUFDdkRPLG1CQUFtQixHQUFHLElBQUlSLG1CQUFtQixDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLENBQUMsQUFBQztnQkFFekYsT0FBT0ssbUJBQW1CLENBQUM7YUFDNUI7Ozs7Q0FDRixDQXREZ0RnQixhQUFVLFdBQUEsQ0FzRDFEO2tCQXREb0J4QixtQkFBbUIifQ==