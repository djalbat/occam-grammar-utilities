"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    rewriteIndirectlyRepeatedNodes: function() {
        return rewriteIndirectlyRepeatedNodes;
    },
    rewriteDirectlyRepeatedNodes: function() {
        return rewriteDirectlyRepeatedNodes;
    },
    rewriteReducedNodes: function() {
        return rewriteReducedNodes;
    },
    removeEpsilonNodes: function() {
        return removeEpsilonNodes;
    }
});
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var _reduced = /*#__PURE__*/ _interop_require_default(require("../node/reduced"));
var _rewritten = /*#__PURE__*/ _interop_require_default(require("../node/rewritten"));
var _directly = /*#__PURE__*/ _interop_require_default(require("../node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("../node/repeated/indirectly"));
var _ruleName = require("../utilities/ruleName");
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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift, find = _necessary.arrayUtilities.find, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
    var parentNode;
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNodes = find(childNodes, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    });
    parentNode = nonTerminalNode; ///
    backwardsSome(indirectlyRepeatedNodes, function(indirectlyRepeatedNode) {
        var childNodes = parentNode.getChildNodes(), frontChildNodes = front(childNodes), indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName), rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, frontChildNodes), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
            rewrittenNode
        ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
        parentNode = rewrittenNode; ///
    });
    return parentNode;
}
function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), directlyRepeatedNodes = find(childNodes, function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    }), replacementChildNodes = [], replacedChildNodes = directlyRepeatedNodes; ///
    directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
        var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
        unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });
    replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes);
}
function rewriteReducedNodes(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    var firstChildNode = first(childNodes), firstChildNodeReducedNode = _instanceof(firstChildNode, _reduced.default);
    if (firstChildNodeReducedNode) {
        var parentNode = nonTerminalNode, reducedNode = firstChildNode, replacedChildNode = reducedNode, reducedNodeRuleName = reducedNode.getRuleName(), parentNodeRuleName = parentNode.getRuleName(), reducedRuleName = reducedNodeRuleName, parentRuleName = parentNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName), replacementChildNodes = []; ///
        if (ruleName === parentRuleName) {
            var reducedNodeChildNodes = reducedNode.getChildNodes();
            push(replacementChildNodes, reducedNodeChildNodes);
        } else {
            var rewrittenNode = _rewritten.default.fromReducedNode(reducedNode);
            replacementChildNodes.push(rewrittenNode);
        }
        replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
    }
}
function removeEpsilonNodes(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    filter(childNodes, function(childNode) {
        var childNodeEpsilonNode = _instanceof(childNode, _occamparsers.EpsilonNode);
        if (!childNodeEpsilonNode) {
            return true;
        }
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
function replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes) {
    var _childNodes;
    var replacedChildNodesLength = replacedChildNodes.length;
    if (replacedChildNodesLength === 0) {
        return;
    }
    var firstReplacedChildNode = first(replacedChildNodes), firstIndex = childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = replacedChildNodesLength; ///
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIHB1c2gsIGZpbHRlciwgdW5zaGlmdCwgZmluZCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBwYXJlbnROb2RlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmQoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICBiYWNrd2FyZHNTb21lKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBmcm9udENoaWxkTm9kZXMpLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIHJld3JpdHRlbk5vZGUsXG4gICAgICAgICAgICAuLi5pbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlc1xuICAgICAgICAgIF07XG5cbiAgICByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuXG4gICAgcGFyZW50Tm9kZSA9IHJld3JpdHRlbk5vZGU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdLFxuICAgICAgICByZXBsYWNlZENoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXM7IC8vL1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIHVuc2hpZnQocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzKTtcbiAgfSk7XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZVJlZHVjZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoZmlyc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSk7XG5cbiAgaWYgKGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IHJlZHVjZWROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlUnVsZU5hbWUgPSBwYXJlbnROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudFJ1bGVOYW1lID0gcGFyZW50Tm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpO1xuXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMucHVzaChyZXdyaXR0ZW5Ob2RlKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFcHNpbG9uTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRXBzaWxvbk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvbk5vZGUpO1xuXG4gICAgaWYgKCFjaGlsZE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5O1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVwbGFjZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHVzaCIsImZpbHRlciIsInVuc2hpZnQiLCJmaW5kIiwiYmFja3dhcmRzU29tZSIsIm5vblRlcm1pbmFsTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImZvckVhY2giLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLDhCQUE4QjtlQUE5QkE7O0lBbUNBQyw0QkFBNEI7ZUFBNUJBOztJQXFCQUMsbUJBQW1CO2VBQW5CQTs7SUErQkFDLGtCQUFrQjtlQUFsQkE7Ozs0QkFuR1k7eUJBQ0c7OERBRVA7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUE2REMsMEJBQTdERCxPQUFPRSxRQUFzREQsMEJBQXREQyxPQUFPQyxPQUErQ0YsMEJBQS9DRSxNQUFNQyxTQUF5Q0gsMEJBQXpDRyxRQUFRQyxVQUFpQ0osMEJBQWpDSSxTQUFTQyxPQUF3QkwsMEJBQXhCSyxNQUFNQyxnQkFBa0JOLDBCQUFsQk07QUFFNUMsU0FBU1gsK0JBQStCWSxlQUFlO0lBQzVELElBQUlDO0lBRUosSUFBTUMsYUFBYUYsZ0JBQWdCRyxpQkFDN0JDLDBCQUEwQk4sS0FBS0ksWUFBWSxTQUFDRztRQUMxQyxJQUFNQyxrQ0FBbUNELEFBQVMsWUFBVEEsV0FBcUJFO1FBRTlELElBQUlELGlDQUFpQztZQUNuQyxPQUFPO1FBQ1Q7SUFDRjtJQUVOTCxhQUFhRCxpQkFBaUIsR0FBRztJQUVqQ0QsY0FBY0sseUJBQXlCLFNBQUNJO1FBQ3RDLElBQU1OLGFBQWFELFdBQVdFLGlCQUN4Qk0sa0JBQWtCakIsTUFBTVUsYUFDeEJRLGlDQUFpQ0YsdUJBQXVCRyxlQUN4REMsNkJBQTZCRixnQ0FDN0JHLFdBQVdDLElBQUFBLGtE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