"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rewriteNode;
    }
});
var _occamparsers = require("occam-parsers");
var _reduced = /*#__PURE__*/ _interop_require_default(require("./node/reduced"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/indirectly"));
var _ruleName = require("./utilities/ruleName");
var _array = require("./utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function rewriteNode(node) {
    replaceReducedNodesAndDirectlyRepeatedNodes(node);
    rearrangeIndirectlyRepeatedNodes(node);
    removeEpsilonNodes(node);
}
function replaceReducedNodesAndDirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes();
    var firstChildNode = (0, _array.first)(childNodes);
    if (_instanceof(firstChildNode, _reduced.default)) {
        var parentNode = nonTerminalNode, reducedNode = firstChildNode, childNodesTail = (0, _array.tail)(childNodes), directlyRepeatedNodes = childNodesTail, reducedNodeChildNodes = reducedNode.getChildNodes(), replacementChildNodes = _to_consumable_array(reducedNodeChildNodes);
        (0, _array.backwardsForEach)(directlyRepeatedNodes, function(directlyRepeatedNode) {
            var directlyRepeatedNodeChildNodes = directlyRepeatedNode.getChildNodes();
            (0, _array.push)(replacementChildNodes, directlyRepeatedNodeChildNodes);
        });
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    childNodes = nonTerminalNode.getChildNodes();
    var index = 0, childNode = childNodes[index] || null;
    while(childNode !== null){
        if (_instanceof(childNode, _directly.default)) {
            var parentNode1 = nonTerminalNode, replacedChildNode = childNode, childNodeChildNodes = childNode.getChildNodes(), replacementChildNodes1 = childNodeChildNodes; ///
            replaceChildNode(parentNode1, replacedChildNode, replacementChildNodes1);
        }
        index++;
        childNode = childNodes[index] || null;
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        replaceReducedNodesAndDirectlyRepeatedNodes(_$node);
    });
}
function rearrangeIndirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
    var lastChildNode = (0, _array.last)(childNodes);
    if (_instanceof(lastChildNode, _indirectly.default)) {
        var parentNode = nonTerminalNode, frontChildNodes = (0, _array.front)(childNodes), indirectlyRepeatedNode = lastChildNode, indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName); ///
        childNodes = frontChildNodes; ///
        nonTerminalNode = new _occamparsers.NonTerminalNode(ruleName, childNodes);
        childNodes = indirectlyRepeatedNode.getChildNodes();
        var childNode = nonTerminalNode, replacementChildNodes = [
            childNode
        ].concat(_to_consumable_array(childNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    nonTerminalNode = node; ///
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rearrangeIndirectlyRepeatedNodes(_$node);
    });
}
function removeEpsilonNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
    var index = 0, childNode = childNodes[index] || null;
    while(childNode !== null){
        if (_instanceof(childNode, _occamparsers.EpsilonNode)) {
            var parentNode = nonTerminalNode, removedChildNode = childNode;
            removeChildNode(parentNode, removedChildNode);
        } else {
            index++;
        }
        childNode = childNodes[index] || null;
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        removeEpsilonNodes(_$node);
    });
}
function replaceAllChildNodes(parentNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), start = 0, deleteCount = Infinity;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function replaceChildNode(parentNode, childNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(childNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function removeChildNode(parentNode, removedChildNode) {
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(removedChildNode), start = index, deleteCount = 1;
    childNodes.splice(start, deleteCount);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUsIE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IGZyb250LCBmaXJzdCwgbGFzdCwgdGFpbCwgcHVzaCwgYmFja3dhcmRzRm9yRWFjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZShub2RlKSB7ICAvLy9cbiAgcmVwbGFjZVJlZHVjZWROb2Rlc0FuZERpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc1RhaWwgPSB0YWlsKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGNoaWxkTm9kZXNUYWlsLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucmVkdWNlZE5vZGVDaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIGJhY2t3YXJkc0ZvckVhY2goZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIGRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBjaGlsZE5vZGVDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IGZyb250Q2hpbGROb2RlczsgLy8vXG5cbiAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGNoaWxkTm9kZSxcbiAgICAgICAgICAgIC4uLmNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByZW1vdmVkQ2hpbGROb2RlID0gY2hpbGROb2RlO1xuXG4gICAgICByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlbW92ZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlIiwibm9kZSIsInJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsIlJlZHVjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlZHVjZWROb2RlIiwiY2hpbGROb2Rlc1RhaWwiLCJ0YWlsIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiYmFja3dhcmRzRm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicHVzaCIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwiY2hpbGROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJmb3JFYWNoIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiZnJvbnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJFcHNpbG9uTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzRCQVRxQjs4REFFckI7K0RBQ1M7aUVBQ0U7d0JBRW9CO3FCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxTQUFTQSxZQUFZQyxJQUFJLEVBQUU7SUFDeENDLDRDQUE0Q0Q7SUFFNUNFLGlDQUFpQ0Y7SUFFakNHLG1CQUFtQkg7QUFDckI7QUFFQSxTQUFTQyw0Q0FBNENELElBQUksRUFBRTtJQUN6RCxJQUFNSSxzQkFBc0JKLEtBQUtLLGlCQUFpQjtJQUVsRCxJQUFJLENBQUNELHFCQUFxQjtRQUN4QjtJQUNGLENBQUM7SUFFRCxJQUFNRSxrQkFBa0JOLE1BQU0sR0FBRztJQUVqQyxJQUFJTyxhQUFhRCxnQkFBZ0JFLGFBQWE7SUFFOUMsSUFBTUMsaUJBQWlCQyxJQUFBQSxZQUFLLEVBQUNIO0lBRTdCLElBQUlFLEFBQWMsWUFBZEEsZ0JBQTBCRSxnQkFBVyxHQUFFO1FBQ3pDLElBQU1DLGFBQWFOLGlCQUNiTyxjQUFjSixnQkFDZEssaUJBQWlCQyxJQUFBQSxXQUFJLEVBQUNSLGFBQ3RCUyx3QkFBd0JGLGdCQUN4Qkcsd0JBQXdCSixZQUFZTCxhQUFhLElBQ2pEVSx3QkFDRSxxQkFBR0Q7UUFHWEUsSUFBQUEsdUJBQWdCLEVBQUNILHVCQUF1QixTQUFDSSxzQkFBeUI7WUFDaEUsSUFBTUMsaUNBQWlDRCxxQkFBcUJaLGFBQWE7WUFFekVjLElBQUFBLFdBQUksRUFBQ0osdUJBQXVCRztRQUM5QjtRQUVBRSxxQkFBcUJYLFlBQVlNO0lBQ25DLENBQUM7SUFFRFgsYUFBYUQsZ0JBQWdCRSxhQUFhO0lBRTFDLElBQUlnQixRQUFRLEdBQ1JDLFlBQVlsQixVQUFVLENBQUNpQixNQUFNLElBQUksSUFBSTtJQUV6QyxNQUFPQyxjQUFjLElBQUks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