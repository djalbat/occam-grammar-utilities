"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeOrRenameIntermediateNodes;
    }
});
var _necessary = require("necessary");
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced"));
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated"));
var _ruleName = require("./utilities/ruleName");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var first = _necessary.arrayUtilities.first, unshift = _necessary.arrayUtilities.unshift;
function removeOrRenameIntermediateNodes(node) {
    rearrangeNodes(node);
    removeRepeatedNodes(node);
    renameReducedNodesAndRepeatedNodes(node);
}
function rearrangeNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node; ///
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rearrangeNodes(_$node);
        });
        var rearranged = rearrangeChildNodes(childNodes);
        while(rearranged){
            childNodes = nonTerminalNode.getChildNodes();
            rearranged = rearrangeChildNodes(childNodes);
        }
    }
}
function removeRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node; ///
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            removeRepeatedNodes(_$node);
        });
        var childNodesLength = childNodes.length;
        if (childNodesLength === 1) {
            var firstChildNode = first(childNodes), childNode = firstChildNode, childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var ruleName = node.getRuleName(), repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName);
                if (repeatedNodeRuleName === repeatedRuleName) {
                    var _childNodes;
                    var repeatedNodeChildNodes = repeatedNode.getChildNodes(), start = 0, deleteCount = 1;
                    (_childNodes = childNodes).splice.apply(_childNodes, [
                        start,
                        deleteCount
                    ].concat(_toConsumableArray(repeatedNodeChildNodes)));
                }
            }
        }
    }
}
function rearrangeChildNodes(childNodes) {
    var rearranged = childNodes.some(function(childNode, index) {
        if (index > 0) {
            var childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var start = 0, deleteCount = index; ///
                childNodes = childNodes.splice(start, deleteCount);
                var repeatedNode = childNode, repeatedNodeChildNodes = repeatedNode.getChildNodes();
                unshift(repeatedNodeChildNodes, childNodes);
                return true;
            }
        }
    });
    return rearranged;
}
function renameReducedNodesAndRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeReducedNode = _instanceof(childNode, _reduced.default), childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (false) {
            ///
            } else if (childNodeReducedNode) {
                var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
                reducedNode.setRuleName(ruleName);
            } else if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = repeatedNodeRuleName, ruleName1 = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName);
                repeatedNode.setRuleName(ruleName1);
            }
            renameReducedNodesAndRepeatedNodes(childNode);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSwgcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSwgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZpcnN0LCB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKSB7XG4gIHJlYXJyYW5nZU5vZGVzKG5vZGUpO1xuXG4gIHJlbW92ZVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlYXJyYW5nZU5vZGVzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IHJlYXJyYW5nZWQgPSByZWFycmFuZ2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgd2hpbGUgKHJlYXJyYW5nZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICByZWFycmFuZ2VkID0gcmVhcnJhbmdlQ2hpbGROb2RlcyhjaGlsZE5vZGVzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocmVwZWF0ZWROb2RlUnVsZU5hbWUgPT09IHJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gcmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBlYXRlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZWFycmFuZ2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY29uc3QgcmVhcnJhbmdlZCA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBpbmRleDsgIC8vL1xuXG4gICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIHVuc2hpZnQocmVwZWF0ZWROb2RlQ2hpbGROb2RlcywgY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVhcnJhbmdlZDtcbn1cblxuZnVuY3Rpb24gcmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSksXG4gICAgICAgICAgICBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgICAgICBjb25zdCByZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgICAgIHJlZHVjZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICAgIHJlcGVhdGVkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9XG4gICAgICByZW5hbWVSZWR1Y2VkTm9kZXNBbmRSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInVuc2hpZnQiLCJub2RlIiwicmVhcnJhbmdlTm9kZXMiLCJyZW1vdmVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInJlYXJyYW5nZWQiLCJyZWFycmFuZ2VDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNvbWUiLCJpbmRleCIsImNoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFXYixTQU1DOzs7ZUFOdUJBLCtCQUErQjs7O3lCQVR4QixXQUFXOzREQUVsQixnQkFBZ0I7NkRBQ2YsaUJBQWlCO3dCQUU4RCxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlILElBQVFDLEtBQUssR0FBY0MsVUFBYyxlQUFBLENBQWpDRCxLQUFLLEVBQUVFLE9BQU8sR0FBS0QsVUFBYyxlQUFBLENBQTFCQyxPQUFPLEFBQW9CO0FBRTNCLFNBQVNILCtCQUErQixDQUFDSSxJQUFJLEVBQUU7SUFDNURDLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFFckJFLG1CQUFtQixDQUFDRixJQUFJLENBQUMsQ0FBQztJQUUxQkcsa0NBQWtDLENBQUNILElBQUksQ0FBQyxDQUFDO0NBQzFDO0FBRUQsU0FBU0MsY0FBYyxDQUFDRCxJQUFJLEVBQUU7SUFDNUIsSUFBTUksbUJBQW1CLEdBQUdKLElBQUksQ0FBQ0ssaUJBQWlCLEVBQUUsQUFBQztJQUVyRCxJQUFJRCxtQkFBbUIsRUFBRTtRQUN2QixJQUFNRSxlQUFl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