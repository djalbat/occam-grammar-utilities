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
var _necessary = require("necessary");
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
    rewriteDirectlyRepeatedNodes(node);
    rewriteIndirectlyRepeatedNodes(node);
    rewriteReducedNodes(node);
    removeEpsilonNodes(node);
}
function rewriteIndirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes();
    var lastChildNode = last(childNodes);
    if (_instanceof(lastChildNode, _indirectly.default)) {
        var parentNode = nonTerminalNode, frontChildNodes = front(childNodes), indirectlyRepeatedNode = lastChildNode, indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName); ///
        childNodes = frontChildNodes; ///
        var rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, childNodes);
        childNodes = indirectlyRepeatedNode.getChildNodes();
        var childNode = rewrittenNode, replacementChildNodes = [
            childNode
        ].concat(_to_consumable_array(childNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rewriteIndirectlyRepeatedNodes(_$node);
    });
}
function rewriteDirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes();
    var index = 0, childNode = childNodes[index] || null;
    while(childNode !== null){
        if (_instanceof(childNode, _directly.default)) {
            var parentNode = nonTerminalNode, replacedChildNode = childNode, childNodeChildNodes = childNode.getChildNodes(), replacementChildNodes = childNodeChildNodes; ///
            replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
        }
        index++;
        childNode = childNodes[index] || null;
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rewriteDirectlyRepeatedNodes(_$node);
    });
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
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rewriteReducedNodes(_$node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSwgcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIGxhc3QsIHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZShub2RlKSB7ICAvLy9cbiAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmV3cml0ZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IGZyb250Q2hpbGROb2RlczsgLy8vXG5cbiAgICBjb25zdCByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHJld3JpdHRlbk5vZGUsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBjaGlsZE5vZGUsXG4gICAgICAgICAgICAuLi5jaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGxldCBpbmRleCA9IDAsXG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsO1xuXG4gIHdoaWxlIChjaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gY2hpbGROb2RlQ2hpbGROb2RlczsgLy8vXG5cbiAgICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcblxuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG4gIH1cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlUnVsZU5hbWUgPSBwYXJlbnROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudFJ1bGVOYW1lID0gcGFyZW50Tm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpO1xuXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMucHVzaChyZXdyaXR0ZW5Ob2RlKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBsZXQgaW5kZXggPSAwLFxuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICB3aGlsZSAoY2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25Ob2RlKSB7XG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJlbW92ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7XG5cbiAgICAgIHJlbW92ZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZW1vdmVkQ2hpbGROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsO1xuICB9XG5cbiAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgY2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZW1vdmVkQ2hpbGROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVtb3ZlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGUiLCJmcm9udCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJsYXN0IiwicHVzaCIsIm5vZGUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJwYXJlbnROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicmV3cml0dGVuTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUFsbENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwiY2hpbGROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJmcm9tUmVkdWNlZE5vZGUiLCJFcHNpbG9uTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQXdCQTs7OzRCQVpJO3lCQUNHOzhEQUVQO2dFQUNFOytEQUNPO2lFQUNFO3dCQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMs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