"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get edgeFromRuleNameAndLeftRecursiveRuleName () {
        return edgeFromRuleNameAndLeftRecursiveRuleName;
    },
    get edgesFromRuleNames () {
        return edgesFromRuleNames;
    },
    get edgesFromStartRule () {
        return edgesFromStartRule;
    }
});
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
var _directedGraph = require("../directedGraph");
var _recursive = require("../utilities/recursive");
var _labels = require("../labels");
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
function edgesFromRuleNames(ruleNames) {
    var length = ruleNames.length, edges = ruleNames.map(function(ruleName, index) {
        var nextIndex = (index + 1) % length, nextRuleName = ruleNames[nextIndex], leftRecursiveRuleName = nextRuleName, edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);
        return edge;
    });
    return edges;
}
function edgesFromStartRule(startRule, ruleMap, ruleNamesMap) {
    var rule = startRule, edges = [], vertexes = [];
    edgesFromRule(rule, edges, vertexes, ruleMap, ruleNamesMap);
    return edges;
}
function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var label = _labels.LEFT_RECURSIVE_LABEL, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);
    return edge;
}
function edgesFromRule(rule, edges, vertexes, ruleMap, ruleNamesMap) {
    var ruleName = rule.getName(), vertex = ruleName, vertexesIncludesVertex = vertexes.includes(vertex);
    if (vertexesIncludesVertex) {
        return;
    }
    vertexes = _to_consumable_array(vertexes).concat([
        vertex
    ]);
    var ruleNames = ruleNamesMap[ruleName], recursiveRuleNames = (0, _recursive.recursiveRuleNamesFromRule)(rule), leftRecursiveRuleNames = ruleNames; ///
    recursiveRuleNames.forEach(function(recursiveRuleName) {
        var leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName), leftRecursiveRuleName = recursiveRuleName, label = leftRecursiveRuleNamesIncludesRecursiveRuleName ? _labels.LEFT_RECURSIVE_LABEL : _labels.RECURSIVE_LABEL, sourceVertex = ruleName, targetVertex = leftRecursiveRuleName, edge = _edge.default.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex), matches = (0, _directedGraph.edgesMatchEdge)(edges, edge);
        if (!matches) {
            edges.push(edge);
        }
        var recursiveRule = ruleMap[recursiveRuleName] || null;
        if (recursiveRule !== null) {
            var _$rule = recursiveRule; ///
            edgesFromRule(_$rule, edges, vertexes, ruleMap, ruleNamesMap);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgZWRnZXNNYXRjaEVkZ2UgfSBmcm9tIFwiLi4vZGlyZWN0ZWRHcmFwaFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlY3Vyc2l2ZVwiO1xuaW1wb3J0IHsgUkVDVVJTSVZFX0xBQkVMLCBMRUZUX1JFQ1VSU0lWRV9MQUJFTCB9IGZyb20gXCIuLi9sYWJlbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gcnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZWRnZXMgPSBydWxlTmFtZXMubWFwKChydWxlTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXggKyAxKSAlIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBuZXh0UnVsZU5hbWUgPSBydWxlTmFtZXNbbmV4dEluZGV4XSxcbiAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBuZXh0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIGVkZ2UgPSBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VzRnJvbVN0YXJ0UnVsZShzdGFydFJ1bGUsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCkge1xuICBjb25zdCBydWxlID0gc3RhcnRSdWxlLCAvLy9cbiAgICAgICAgZWRnZXMgPSBbXSxcbiAgICAgICAgdmVydGV4ZXMgPSBbXTtcblxuICBlZGdlc0Zyb21SdWxlKHJ1bGUsIGVkZ2VzLCB2ZXJ0ZXhlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgbGFiZWwgPSBMRUZUX1JFQ1VSU0lWRV9MQUJFTCxcbiAgICAgICAgc291cmNlVmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbUxhYmVsU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KGxhYmVsLCBzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG5cbiAgcmV0dXJuIGVkZ2U7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVJ1bGUocnVsZSwgZWRnZXMsIHZlcnRleGVzLCBydWxlTWFwLCBydWxlTmFtZXNNYXApIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgdmVydGV4ID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgdmVydGV4ZXNJbmNsdWRlc1ZlcnRleCA9IHZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgaWYgKHZlcnRleGVzSW5jbHVkZXNWZXJ0ZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2ZXJ0ZXhlcyA9IFtcbiAgICAuLi52ZXJ0ZXhlcyxcbiAgICB2ZXJ0ZXhcbiAgXTtcblxuICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNNYXBbcnVsZU5hbWVdLFxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJ1bGVOYW1lczsgLy8vXG5cbiAgcmVjdXJzaXZlUnVsZU5hbWVzLmZvckVhY2goKHJlY3Vyc2l2ZVJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVsID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUmVjdXJzaXZlUnVsZU5hbWUgP1xuICAgICAgICAgICAgICAgICAgICBMRUZUX1JFQ1VSU0lWRV9MQUJFTCA6XG4gICAgICAgICAgICAgICAgICAgICAgUkVDVVJTSVZFX0xBQkVMLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tTGFiZWxTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgobGFiZWwsIHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICBtYXRjaGVzID0gZWRnZXNNYXRjaEVkZ2UoZWRnZXMsIGVkZ2UpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGUgPSBydWxlTWFwW3JlY3Vyc2l2ZVJ1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZVJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSByZWN1cnNpdmVSdWxlOyAvLy9cblxuICAgICAgZWRnZXNGcm9tUnVsZShydWxlLCBlZGdlcywgdmVydGV4ZXMsIHJ1bGVNYXAsIHJ1bGVOYW1lc01hcCk7XG4gICAgfVxuICB9KTtcbn1cblxuIl0sIm5hbWVzIjpbImVkZ2VGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJlZGdlc0Zyb21SdWxlTmFtZXMiLCJlZGdlc0Zyb21TdGFydFJ1bGUiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJlZGdlcyIsIm1hcCIsInJ1bGVOYW1lIiwiaW5kZXgiLCJuZXh0SW5kZXgiLCJuZXh0UnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJlZGdlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsInJ1bGUiLCJ2ZXJ0ZXhlcyIsImVkZ2VzRnJvbVJ1bGUiLCJsYWJlbCIsIkxFRlRfUkVDVVJTSVZFX0xBQkVMIiwic291cmNlVmVydGV4IiwidGFyZ2V0VmVydGV4IiwiRWRnZSIsImZyb21MYWJlbFNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImdldE5hbWUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhlc0luY2x1ZGVzVmVydGV4IiwiaW5jbHVkZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSZWN1cnNpdmVSdWxlTmFtZSIsIlJFQ1VSU0lWRV9MQUJFTCIsIm1hdGNoZXMiLCJlZGdlc01hdGNoRWRnZSIsInB1c2giLCJyZWN1cnNpdmVSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnQ2dCQTtlQUFBQTs7UUF4QkFDO2VBQUFBOztRQWNBQztlQUFBQTs7OzJEQXBCQzs2QkFFYzt5QkFDWTtzQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxTQUFTRCxtQkFBbUJFLFNBQVM7SUFDMUMsSUFBTUMsU0FBU0QsVUFBVUMsTUFBTSxFQUN6QkMsUUFBUUYsVUFBVUcsR0FBRyxDQUFDLFNBQUNDLFVBQVVDO1FBQy9CLElBQU1DLFlBQVksQUFBQ0QsQ0FBQUEsUUFBUSxDQUFBLElBQUtKLFFBQzFCTSxlQUFlUCxTQUFTLENBQUNNLFVBQVUsRUFDbkNFLHdCQUF3QkQsY0FDeEJFLE9BQU9aLHlDQUF5Q08sVUFBVUk7UUFFaEUsT0FBT0M7SUFDVDtJQUVOLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTSCxtQkFBbUJXLFNBQVMsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQ2pFLElBQU1DLE9BQU9ILFdBQ1BSLFFBQVEsRUFBRSxFQUNWWSxXQUFXLEVBQUU7SUFFbkJDLGNBQWNGLE1BQU1YLE9BQU9ZLFVBQVVILFNBQVNDO0lBRTlDLE9BQU9WO0FBQ1Q7QUFFTyxTQUFTTCx5Q0FBeUNPLFFBQVEsRUFBRUkscUJBQXFCO0lBQ3RGLElBQU1RLFFBQVFDLDRCQUFvQixFQUM1QkMsZUFBZWQsVUFDZmUsZUFBZVgsdUJBQ2ZDLE9BQU9XLGFBQUksQ0FBQ0Msb0NBQW9DLENBQUNMLE9BQU9FLGNBQWNDO0lBRTVFLE9BQU9WO0FBQ1Q7QUFFQSxTQUFTTSxjQUFjRixJQUFJLEVBQUVYLEtBQUssRUFBRVksUUFBUSxFQUFFSCxPQUFPLEVBQUVDLFlBQVk7SUFDakUsSUFBTVIsV0FBV1MsS0FBS1MsT0FBTyxJQUN2QkMsU0FBU25CLFVBQ1RvQix5QkFBeUJWLFNBQVNXLFFBQVEsQ0FBQ0Y7SUFFakQsSUFBSUMsd0JBQXdCO1FBQzFCO0lBQ0Y7SUFFQVYsV0FBVyxBQUNULHFCQUFHQSxpQkFETTtRQUVUUztLQUNEO0lBRUQsSUFBTXZCLFlBQVlZLFlBQVksQ0FBQ1IsU0FBUyxFQUNsQ3NCLHFCQUFxQkMsSUFBQUEscUNBQTBCLEVBQUNkLE9BQ2hEZSx5QkFBeUI1QixXQUFXLEdBQUc7SUFFN0MwQixtQkFBbUJHLE9BQU8sQ0FBQyxTQUFDQztRQUMxQixJQUFNQyxrREFBa0RILHVCQUF1QkgsUUFBUSxDQUFDSyxvQkFDbEZ0Qix3QkFBd0JzQixtQkFDeEJkLFFBQVFlLGtEQUNFZCw0QkFBb0IsR0FDbEJlLHVCQUFlLEVBQzNCZCxlQUFlZCxVQUNmZSxlQUFlWCx1QkFDZkMsT0FBT1csYUFBSSxDQUFDQyxvQ0FBb0MsQ0FBQ0wsT0FBT0UsY0FBY0MsZUFDdEVjLFVBQVVDLElBQUFBLDZCQUFjLEVBQUNoQyxPQUFPTztRQUV0QyxJQUFJLENBQUN3QixTQUFTO1lBQ1ovQixNQUFNaUMsSUFBSSxDQUFDMUI7UUFDYjtRQUVBLElBQU0yQixnQkFBZ0J6QixPQUFPLENBQUNtQixrQkFBa0IsSUFBSTtRQUVwRCxJQUFJTSxrQkFBa0IsTUFBTTtZQUMxQixJQUFNdkIsU0FBT3VCLGVBQWUsR0FBRztZQUUvQnJCLGNBQWNGLFFBQU1YLE9BQU9ZLFVBQVVILFNBQVNDO1FBQ2hEO0lBQ0Y7QUFDRiJ9