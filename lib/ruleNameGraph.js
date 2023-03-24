"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameGraph;
    }
});
var _ruleNamesEdge = /*#__PURE__*/ _interopRequireDefault(require("./ruleNamesEdge"));
var _rule = require("./utilities/rule");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var RuleNameGraph = /*#__PURE__*/ function() {
    function RuleNameGraph(ruleNamesEdges) {
        _classCallCheck(this, RuleNameGraph);
        this.ruleNamesEdges = ruleNamesEdges;
    }
    _createClass(RuleNameGraph, [
        {
            key: "getRuleNamesEdges",
            value: function getRuleNamesEdges() {
                return this.ruleNamesEdges;
            }
        }
    ], [
        {
            key: "fromRuleMapAndStartRule",
            value: function fromRuleMapAndStartRule(ruleMap, startRule) {
                var rule = startRule, ruleNames = [], ruleNamesEdges = [];
                addRuleNamesEdges(rule, ruleNames, ruleNamesEdges, ruleMap);
                var ruleNameGraph = new RuleNameGraph(ruleNamesEdges);
                return ruleNameGraph;
            }
        }
    ]);
    return RuleNameGraph;
}();
function addRuleNamesEdges(rule, ruleNames, ruleNamesEdges, ruleMap) {
    var ruleName = rule.getName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
    if (ruleNamesIncludesRuleName) {
        return;
    }
    ruleNames = _toConsumableArray(ruleNames).concat([
        ruleName
    ]);
    var recursiveRuleNames = (0, _rule.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = (0, _rule.leftRecursiveRuleNamesFromRule)(rule);
    recursiveRuleNames.forEach(function(recursiveRuleName) {
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);
        if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
            var leftRecursiveRuleName = recursiveRuleName, sourceRuleName = ruleName, targetRuleName = leftRecursiveRuleName, ruleNamesEdge = _ruleNamesEdge.default.fromSourceRuleNameAndTargetRuleName(sourceRuleName, targetRuleName);
            ruleNamesEdges.push(ruleNamesEdge);
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            addRuleNamesEdges(_$rule, ruleNames, ruleNamesEdges, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZUdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVzRWRnZSBmcm9tIFwiLi9ydWxlTmFtZXNFZGdlXCI7XG5cbmltcG9ydCB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZUdyYXBoIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzRWRnZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lc0VkZ2VzID0gcnVsZU5hbWVzRWRnZXM7XG4gIH1cblxuICBnZXRSdWxlTmFtZXNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZXNFZGdlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU1hcEFuZFN0YXJ0UnVsZShydWxlTWFwLCBzdGFydFJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gc3RhcnRSdWxlLCAvLy9cbiAgICAgICAgICBydWxlTmFtZXMgPSBbXSxcbiAgICAgICAgICBydWxlTmFtZXNFZGdlcyA9IFtdO1xuXG4gICAgYWRkUnVsZU5hbWVzRWRnZXMocnVsZSwgcnVsZU5hbWVzLCBydWxlTmFtZXNFZGdlcywgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBydWxlTmFtZUdyYXBoID0gbmV3IFJ1bGVOYW1lR3JhcGgocnVsZU5hbWVzRWRnZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lR3JhcGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUnVsZU5hbWVzRWRnZXMocnVsZSwgcnVsZU5hbWVzLCBydWxlTmFtZXNFZGdlcywgcnVsZU1hcCkge1xuICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJ1bGVOYW1lcyA9IFtcbiAgICAuLi5ydWxlTmFtZXMsXG4gICAgcnVsZU5hbWVcbiAgXTtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKTtcblxuICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc291cmNlUnVsZU5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdGFyZ2V0UnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWVzRWRnZSA9IFJ1bGVOYW1lc0VkZ2UuZnJvbVNvdXJjZVJ1bGVOYW1lQW5kVGFyZ2V0UnVsZU5hbWUoc291cmNlUnVsZU5hbWUsIHRhcmdldFJ1bGVOYW1lKTtcblxuICAgICAgcnVsZU5hbWVzRWRnZXMucHVzaChydWxlTmFtZXNFZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtyZWN1cnNpdmVSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWN1cnNpdmVSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlID0gcmVjdXJzaXZlUnVsZTsgLy8vXG5cbiAgICAgIGFkZFJ1bGVOYW1lc0VkZ2VzKHJ1bGUsIHJ1bGVOYW1lcywgcnVsZU5hbWVzRWRnZXMsIHJ1bGVNYXApO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVHcmFwaCIsInJ1bGVOYW1lc0VkZ2VzIiwiZ2V0UnVsZU5hbWVzRWRnZXMiLCJmcm9tUnVsZU1hcEFuZFN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJydWxlIiwicnVsZU5hbWVzIiwiYWRkUnVsZU5hbWVzRWRnZXMiLCJydWxlTmFtZUdyYXBoIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJzb3VyY2VSdWxlTmFtZSIsInRhcmdldFJ1bGVOYW1lIiwicnVsZU5hbWVzRWRnZSIsIlJ1bGVOYW1lc0VkZ2UiLCJmcm9tU291cmNlUnVsZU5hbWVBbmRUYXJnZXRSdWxlTmFtZSIsInB1c2giLCJyZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKSztvQkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQUEsQUFBTUEsOEJBc0JsQixBQXRCWTthQUFNQSxjQUNQQyxjQUFjOzhCQURQRDtRQUVqQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7O2lCQUZMRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDRCxjQUFjO1lBQzVCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QkMsT0FBTyxFQUFFQyxTQUFTLEVBQUU7Z0JBQ2pELElBQU1DLE9BQU9ELFdBQ1BFLFlBQVksRUFBRSxFQUNkTixpQkFBaUIsRUFBRTtnQkFFekJPLGtCQUFrQkYsTUFBTUMsV0FBV04sZ0JBQWdCRztnQkFFbkQsSUFBTUssZ0JBQWdCLElBaEJMVCxjQWdCdUJDO2dCQUV4QyxPQUFPUTtZQUNUOzs7V0FuQm1CVDs7QUFzQnJCLFNBQVNRLGtCQUFrQkYsSUFBSSxFQUFFQyxTQUFTLEVBQUVOLGNBQWMsRUFBRUcsT0FBTyxFQUFFO0lBQ25FLElBQU1NLFdBQVdKLEtBQUtLLE9BQU8sSUFDdkJDLDRCQUE0QkwsVUFBVU0sUUFBUSxDQUFDSDtJQUVyRCxJQUFJRSwyQkFBMkI7UUFDN0I7SUFDRixDQUFDO0lBRURMLFlBQVksQUFDVixtQkFBR0Esa0JBRE87UUFFVkc7S0FDRDtJQUVELElBQU1JLHFCQUFxQkMsSUFBQUEsZ0NBQTBCLEVBQUNULE9BQ2hEVSx5QkFBeUJDLElBQUFBLG9DQUE4QixFQUFDWDtJQUU5RFEsbUJBQW1CSSxPQUFPLENBQUMsU0FBQ0MsbUJBQXNCO1FBQ2hELElBQU1DLGtEQUFrREosdUJBQXVCSCxRQUFRLENBQUNNO1FBRXhGLElBQUlDLGlEQUFpRDtZQUNuRCxJQUFNQyx3QkFBd0JGLG1CQUN4QkcsaUJBQWlCWixVQUNqQmEsaUJBQWlCRix1QkFDakJHLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsbUNBQW1DLENBQUNKLGdCQUFnQkM7WUFFeEZ0QixlQUFlMEIsSUFBSSxDQUFDSDtRQUN0QixDQUFDO1FBRUQsSUFBTUksZ0JBQWdCeEIsT0FBTyxDQUFDZSxrQkFBa0IsSUFBSSxJQUFJO1FBRXhELElBQUlTLGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsSUFBTXRCLFNBQU9zQixlQUFlLEdBQUc7WUFFL0JwQixrQkFBa0JGLFFBQU1DLFdBQVdOLGdCQUFnQkc7UUFDckQsQ0FBQztJQUNIO0FBQ0YifQ==