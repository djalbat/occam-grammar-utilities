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
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./node/rewritten"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/indirectly"));
var _array = require("./utilities/array");
var _ruleName = require("./utilities/ruleName");
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
        var reducedNode = firstChildNode, parentNode = nonTerminalNode, reducedNodeRuleName = reducedNode.getRuleName(), parentNodeRuleName = parentNode.getRuleName(), reducedRuleName = reducedNodeRuleName, parentRuleName = parentNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), replacementChildNodes = []; ///
        if (ruleName === parentRuleName) {
            var reducedNodeChildNodes = reducedNode.getChildNodes();
            (0, _array.push)(replacementChildNodes, reducedNodeChildNodes);
        } else {
            var rewrittenNode = _rewritten.default.fromReducedNode(reducedNode);
            replacementChildNodes.push(rewrittenNode);
        }
        var childNodesTail = (0, _array.tail)(childNodes), directlyRepeatedNodes = childNodesTail; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUsIE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IGZyb250LCBmaXJzdCwgbGFzdCwgdGFpbCwgcHVzaCwgYmFja3dhcmRzRm9yRWFjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZShub2RlKSB7ICAvLy9cbiAgcmVwbGFjZVJlZHVjZWROb2Rlc0FuZERpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKSB7XG4gICAgY29uc3QgcmVkdWNlZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcGFyZW50Tm9kZVJ1bGVOYW1lID0gcGFyZW50Tm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnRSdWxlTmFtZSA9IHBhcmVudE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW107IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBwYXJlbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcmVkdWNlZE5vZGVDaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBwdXNoKHJlcGxhY2VtZW50Q2hpbGROb2RlcywgcmVkdWNlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKTtcblxuICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzLnB1c2gocmV3cml0dGVuTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc1RhaWwgPSB0YWlsKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGNoaWxkTm9kZXNUYWlsOyAvLy9cblxuICAgIGJhY2t3YXJkc0ZvckVhY2goZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIGRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBjaGlsZE5vZGVDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IGZyb250Q2hpbGROb2RlczsgLy8vXG5cbiAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGNoaWxkTm9kZSxcbiAgICAgICAgICAgIC4uLmNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByZW1vdmVkQ2hpbGROb2RlID0gY2hpbGROb2RlO1xuXG4gICAgICByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlbW92ZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlIiwibm9kZSIsInJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlZHVjZWROb2RlQ2hpbGROb2RlcyIsInB1c2giLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SZWR1Y2VkTm9kZSIsImNoaWxkTm9kZXNUYWlsIiwidGFpbCIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImJhY2t3YXJkc0ZvckVhY2giLCJkaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwiY2hpbGROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJmb3JFYWNoIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiZnJvbnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25Ob2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NEJBVnFCOzhEQUVyQjtnRUFDRTsrREFDTztpRUFDRTtxQkFFOEI7d0JBQ21COzs7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