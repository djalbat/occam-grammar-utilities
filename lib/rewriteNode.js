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
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
var _reduced = /*#__PURE__*/ _interop_require_default(require("./node/reduced"));
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./node/rewritten"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/indirectly"));
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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push;
function rewriteNode(node) {
    rewriteReducedNodes(node);
// rearrangeIndirectlyRepeatedNodes(node);
// removeEpsilonNodes(node);
}
function rewriteReducedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes();
    var firstChildNode = first(childNodes);
    if (_instanceof(firstChildNode, _reduced.default)) {
        var parentNode = nonTerminalNode, childNode = firstChildNode, reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), parentNodeRuleName = parentNode.getRuleName(), reducedRuleName = reducedNodeRuleName, parentRuleName = parentNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), replacementChildNodes = []; ///
        if (ruleName === parentRuleName) {
            var reducedNodeChildNodes = reducedNode.getChildNodes();
            push(replacementChildNodes, reducedNodeChildNodes);
        } else {
            var rewrittenNode = _rewritten.default.fromReducedNode(reducedNode);
            replacementChildNodes.push(rewrittenNode);
        }
        replaceChildNode(parentNode, childNode, replacementChildNodes);
    }
    childNodes = nonTerminalNode.getChildNodes();
    var index = 0, childNode1 = childNodes[index] || null;
    while(childNode1 !== null){
        if (_instanceof(childNode1, _directly.default)) {
            var parentNode1 = nonTerminalNode, replacedChildNode = childNode1, childNodeChildNodes = childNode1.getChildNodes(), replacementChildNodes1 = childNodeChildNodes; ///
            replaceChildNode(parentNode1, replacedChildNode, replacementChildNodes1);
        }
        index++;
        childNode1 = childNodes[index] || null;
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rewriteReducedNodes(_$node);
    });
}
function rearrangeIndirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
    var lastChildNode = last(childNodes);
    if (_instanceof(lastChildNode, _indirectly.default)) {
        var parentNode = nonTerminalNode, frontChildNodes = front(childNodes), indirectlyRepeatedNode = lastChildNode, indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFcHNpbG9uTm9kZSwgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4vbm9kZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZyb250LCBmaXJzdCwgbGFzdCwgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2RlKG5vZGUpIHsgIC8vL1xuICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpO1xuXG4gIC8vIHJlYXJyYW5nZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIC8vIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZVJlZHVjZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgaWYgKGZpcnN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgY2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBjaGlsZE5vZGVDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IGZyb250Q2hpbGROb2RlczsgLy8vXG5cbiAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGNoaWxkTm9kZSxcbiAgICAgICAgICAgIC4uLmNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgd2hpbGUgKGNoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSkge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByZW1vdmVkQ2hpbGROb2RlID0gY2hpbGROb2RlO1xuXG4gICAgICByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVtb3ZlZENoaWxkTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlbW92ZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwibGFzdCIsInB1c2giLCJub2RlIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhcmVudE5vZGVSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInBhcmVudFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SZWR1Y2VkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJpbmRleCIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJjaGlsZE5vZGVDaGlsZE5vZGVzIiwiZm9yRWFjaCIsInJlYXJyYW5nZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJmcm9udENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiRXBzaWxvbk5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5Iiwic3BsaWNlIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozt5QkFaTzs0QkFDYzs4REFFckI7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUE2QkMseUJBQWMsQ0FBM0NELE9BQU9FLFFBQXNCRCx5QkFBYyxDQUFwQ0MsT0FBT0MsT0FBZUYseUJBQWMsQ0FBN0JFLE1BQU1DLE9BQVNILHlCQUFjLENBQXZCRztBQUViLFNBQVNMLFlBQVlNLElBQUksRUFBRTtJQUN4Q0Msb0JBQW9CRDtBQUVwQiwwQ0FBMEM7QUFFMUMsNEJBQTRCO0FBQzlCO0FBRUEsU0FBU0Msb0JBQW9CRCxJQUFJLEVBQUU7SUFDakMsSUFBTUUsc0JBQXNCRixLQUFLRyxpQkFBaUI7SUFFbEQsSUFBSSxDQUFDRCxxQkFBcUI7UUFDeEI7SUFDRixDQUFDO0lBRUQsSUFBTUUsa0JBQWtCSixNQUFNLEdBQUc7SUFFakMsSUFBSUssYUFBYUQsZ0JBQWdCRSxhQUFhO0lBRTlDLElBQU1DLGlCQUFpQlYsTUFBTVE7SUFFN0IsSUFBSUUsQUFBYyxZQUFkQSxnQkFBMEJDLGdCQUFXLEdBQUU7UUFDekMsSUFBTUMsYUFBYUwsaUJBQ2JNLFlBQVlILGdC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