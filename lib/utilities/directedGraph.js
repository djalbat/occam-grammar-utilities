"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "edgesFromStartRuleAndRuleMap", {
    enumerable: true,
    get: function() {
        return edgesFromStartRuleAndRuleMap;
    }
});
var _edge = /*#__PURE__*/ _interopRequireDefault(require("../edge"));
var _rule = require("./rule");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
    var rule = startRule, edges = [], vertexes = [];
    edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    return edges;
}
function edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap) {
    var ruleName = rule.getName(), vertex = ruleName, vertexesIncludesVertex = vertexes.includes(vertex);
    if (vertexesIncludesVertex) {
        return;
    }
    vertexes = _toConsumableArray(vertexes).concat([
        vertex
    ]);
    var recursiveRuleNames = (0, _rule.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = (0, _rule.leftRecursiveRuleNamesFromRule)(rule);
    recursiveRuleNames.forEach(function(recursiveRuleName) {
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);
        if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
            var leftRecursiveRuleName = recursiveRuleName, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
            edges.push(edge);
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRuleAndRuleMap(_$rule, edges, vertexes, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGUgPSBzdGFydFJ1bGUsIC8vL1xuICAgICAgICBlZGdlcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhlcyA9IFtdO1xuXG4gIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcChydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgdmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKHZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2ZXJ0ZXhlcyA9IFtcbiAgICAuLi52ZXJ0ZXhlcyxcbiAgICB2ZXJ0ZXhcbiAgXTtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKTtcblxuICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtyZWN1cnNpdmVSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWN1cnNpdmVSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlID0gcmVjdXJzaXZlUnVsZTsgLy8vXG5cbiAgICAgIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJlZGdlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJ1bGUiLCJlZGdlcyIsInZlcnRleGVzIiwiZWRnZXNGcm9tUnVsZUFuZFJ1bGVNYXAiLCJydWxlTmFtZSIsImdldE5hbWUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleCIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsInB1c2giLCJyZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt5REFKQztvQkFFMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsU0FBU0EsNkJBQTZCQyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtJQUMvRCxJQUFNQyxPQUFPRixXQUNQRyxRQUFRLEVBQUUsRUFDVkMsV0FBVyxFQUFFO0lBRW5CQyx3QkFBd0JILE1BQU1DLE9BQU9DLFVBQVVIO0lBRS9DLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTRSx3QkFBd0JILElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVILE9BQU8sRUFBRTtJQUMvRCxJQUFNSyxXQUFXSixLQUFLSyxPQUFPLElBQ3ZCQyxTQUFTRixVQUNURyx5QkFBeUJMLFNBQVNNLFFBQVEsQ0FBQ0Y7SUFFakQsSUFBSUMsd0JBQXdCO1FBQzFCO0lBQ0YsQ0FBQztJQUVETCxXQUFXLEFBQ1QsbUJBQUdBLGlCQURNO1FBRVRJO0tBQ0Q7SUFFRCxJQUFNRyxxQkFBcUJDLElBQUFBLGdDQUEwQixFQUFDVixPQUNoRFcseUJBQXlCQyxJQUFBQSxvQ0FBOEIsRUFBQ1o7SUFFOURTLG1CQUFtQkksT0FBTyxDQUFDLFNBQUNDLG1CQUFzQjtRQUNoRCxJQUFNQyxrREFBa0RKLHVCQUF1QkgsUUFBUSxDQUFDTTtRQUV4RixJQUFJQyxpREFBaUQ7WUFDbkQsSUFBTUMsd0JBQXdCRixtQkFDeEJHLGVBQWViLFVBQ2ZjLGVBQWVGLHVCQUNmRyxPQUFPQyxhQUFJLENBQUNDLCtCQUErQixDQUFDSixjQUFjQztZQUVoRWpCLE1BQU1xQixJQUFJLENBQUNIO1FBQ2IsQ0FBQztRQUVELElBQU1JLGdCQUFnQnhCLE9BQU8sQ0FBQ2Usa0JBQWtCLElBQUksSUFBSTtRQUV4RCxJQUFJUyxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCLElBQU12QixTQUFPdUIsZUFBZSxHQUFHO1lBRS9CcEIsd0JBQXdCSCxRQUFNQyxPQUFPQyxVQUFVSDtRQUNqRCxDQUFDO0lBQ0g7QUFDRiJ9