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
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
var _rule = require("./rule");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    vertexes = _to_consumable_array(vertexes).concat([
        vertex
    ]);
    var recursiveRuleNames = (0, _rule.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = (0, _rule.leftRecursiveRuleNamesFromRule)(rule);
    recursiveRuleNames.forEach(function(recursiveRuleName) {
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);
        if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
            var leftRecursiveRuleName = recursiveRuleName, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex), edgeB = edge, edgesIncludesEdge = edges.some(function(edge) {
                var edgeA = edge, edgeAMatchesEdgeB = edgeA.match(edgeB);
                if (edgeAMatchesEdgeB) {
                    return true;
                }
            });
            if (!edgesIncludesEdge) {
                edges.push(edge);
            }
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRuleAndRuleMap(_$rule, edges, vertexes, ruleMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSB9IGZyb20gXCIuL3J1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gIGNvbnN0IHJ1bGUgPSBzdGFydFJ1bGUsIC8vL1xuICAgICAgICBlZGdlcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhlcyA9IFtdO1xuXG4gIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcChydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXApIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgdmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKHZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2ZXJ0ZXhlcyA9IFtcbiAgICAuLi52ZXJ0ZXhlcyxcbiAgICB2ZXJ0ZXhcbiAgXTtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKTtcblxuICByZWN1cnNpdmVSdWxlTmFtZXMuZm9yRWFjaCgocmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICAgIGVkZ2VCID0gZWRnZSwgLy8vXG4gICAgICAgICAgICBlZGdlc0luY2x1ZGVzRWRnZSA9IGVkZ2VzLnNvbWUoKGVkZ2UpID0+IHsgIC8vL1xuICAgICAgICAgICAgICBjb25zdCBlZGdlQSA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgICAgICBlZGdlQU1hdGNoZXNFZGdlQiA9IGVkZ2VBLm1hdGNoKGVkZ2VCKTtcblxuICAgICAgICAgICAgICBpZiAoZWRnZUFNYXRjaGVzRWRnZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICghZWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWN1cnNpdmVSdWxlID0gcnVsZU1hcFtyZWN1cnNpdmVSdWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChyZWN1cnNpdmVSdWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlID0gcmVjdXJzaXZlUnVsZTsgLy8vXG5cbiAgICAgIGVkZ2VzRnJvbVJ1bGVBbmRSdWxlTWFwKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCk7XG4gICAgfVxuICB9KTtcbn1cblxuIl0sIm5hbWVzIjpbImVkZ2VzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicnVsZSIsImVkZ2VzIiwidmVydGV4ZXMiLCJlZGdlc0Zyb21SdWxlQW5kUnVsZU1hcCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInZlcnRleCIsInZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1JlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwic291cmNlVmVydGV4IiwidGFyZ2V0VmVydGV4IiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiZWRnZUIiLCJlZGdlc0luY2x1ZGVzRWRnZSIsInNvbWUiLCJlZGdlQSIsImVkZ2VBTWF0Y2hlc0VkZ2VCIiwibWF0Y2giLCJwdXNoIiwicmVjdXJzaXZlUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7MkRBSkM7b0JBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLFNBQVNBLDZCQUE2QkMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDL0QsSUFBTUMsT0FBT0YsV0FDUEcsUUFBUSxFQUFFLEVBQ1ZDLFdBQVcsRUFBRTtJQUVuQkMsd0JBQXdCSCxNQUFNQyxPQUFPQyxVQUFVSDtJQUUvQyxPQUFPRTtBQUNUO0FBRUEsU0FBU0Usd0JBQXdCSCxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFSCxPQUFPLEVBQUU7SUFDL0QsSUFBTUssV0FBV0osS0FBS0ssT0FBTyxJQUN2QkMsU0FBU0YsVUFDVEcseUJBQXlCTCxTQUFTTSxRQUFRLENBQUNGO0lBRWpELElBQUlDLHdCQUF3QjtRQUMxQjtJQUNGLENBQUM7SUFFREwsV0FBVyxBQUNULHFCQUFHQSxpQkFETTtRQUVUSTtLQUNEO0lBRUQsSUFBTUcscUJBQXFCQyxJQUFBQSxnQ0FBMEIsRUFBQ1YsT0FDaERXLHlCQUF5QkMsSUFBQUEsb0NBQThCLEVBQUNaO0lBRTlEUyxtQkFBbUJJLE9BQU8sQ0FBQyxTQUFDQyxtQkFBc0I7UUFDaEQsSUFBTUMsa0RBQWtESix1QkFBdUJILFFBQVEsQ0FBQ007UUFFeEYsSUFBSUMsaURBQWlEO1lBQ25ELElBQU1DLHdCQUF3QkYsbUJBQ3hCRyxlQUFlYixVQUNmYyxlQUFlRix1QkFDZkcsT0FBT0MsYUFBSSxDQUFDQywrQkFBK0IsQ0FBQ0osY0FBY0MsZUFDMURJLFFBQVFILE1BQ1JJLG9CQUFvQnRCLE1BQU11QixJQUFJLENBQUMsU0FBQ0wsTUFBUztnQkFDdkMsSUFBTU0sUUFBUU4sTUFDUk8sb0JBQW9CRCxNQUFNRSxLQUFLLENBQUNMO2dCQUV0QyxJQUFJSSxtQkFBbUI7b0JBQ3JCLE9BQU8sSUFBSTtnQkFDYixDQUFDO1lBQ0g7WUFFTixJQUFJLENBQUNILG1CQUFtQjtnQkFDdEJ0QixNQUFNMkIsSUFBSSxDQUFDVDtZQUNiLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBTVUsZ0JBQWdCOUIsT0FBTyxDQUFDZSxrQkFBa0IsSUFBSSxJQUFJO1FBRXhELElBQUllLGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsSUFBTTdCLFNBQU82QixlQUFlLEdBQUc7WUFFL0IxQix3QkFBd0JILFFBQU1DLE9BQU9DLFVBQVVIO1FBQ2pELENBQUM7SUFDSDtBQUNGIn0=