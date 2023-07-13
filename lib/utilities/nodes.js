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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes), indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
    while(indirectlyRepeatedNodesLength > 0){
        backwardsSome(indirectlyRepeatedNodes, function(indirectlyRepeatedNode) {
            var indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, frontChildNodes = front(childNodes), ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName);
            childNodes = frontChildNodes; ///
            var precedence = indirectlyRepeatedNode.getPrecedence(), rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, childNodes), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
                rewrittenNode
            ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
            nonTerminalNode.setPrecedence(precedence);
            childNodes = nonTerminalNode.getChildNodes();
            replaceAllChildNodes(childNodes, replacementChildNodes);
            removeEpsilonNodes(nonTerminalNode);
            nonTerminalNode = rewrittenNode; ///
            childNodes = nonTerminalNode.getChildNodes();
        });
        childNodes = nonTerminalNode.getChildNodes();
        indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);
        indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
    }
    var parentNode = nonTerminalNode; ///
    return parentNode;
}
function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
    var _loop = function() {
        var replacementChildNodes = [], replacedChildNodes = directlyRepeatedNodes; ///
        directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
            push(replacementChildNodes, directlyRepeatedNodesChildNodes);
        });
        replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes);
        childNodes = nonTerminalNode.getChildNodes();
        directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    };
    var childNodes = nonTerminalNode.getChildNodes(), directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    while(directlyRepeatedNodesLength > 0)_loop();
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
function replaceAllChildNodes(childNodes, replacementChildNodes) {
    clear(childNodes);
    push(childNodes, replacementChildNodes);
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
function findIndirectlyRepeatedNodes(childNodes) {
    var indirectlyRepeatedNodes = findRepeatedNodes(childNodes, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    });
    return indirectlyRepeatedNodes;
}
function findDirectlyRepeatedNodes(childNodes) {
    var directlyRepeatedNodes = findRepeatedNodes(childNodes, function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    });
    return directlyRepeatedNodes;
}
function findRepeatedNodes(childNodes, callback) {
    var repeatedNodes = [], lastIndex = childNodes.findLastIndex(callback);
    if (lastIndex !== null) {
        for(var index = lastIndex; index >= 0; index--){
            var childNode = childNodes[index], childNodeRepeatedNode = callback(childNode);
            if (!childNodeRepeatedNode) {
                break;
            }
            var repeatedNode = childNode; ///
            repeatedNodes.unshift(repeatedNode);
        }
    }
    return repeatedNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIHB1c2gsIGNsZWFyLCBmaWx0ZXIsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBiYWNrd2FyZHNTb21lKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgIGNoaWxkTm9kZXMgPSBmcm9udENoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAgIHJld3JpdHRlbk5vZGUsXG4gICAgICAgICAgICAgIC4uLmluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMpLFxuICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICB3aGlsZSAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlczsgLy8vXG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZm9yRWFjaCgoZGlyZWN0bHlSZXBlYXRlZE5vZGVzKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMpO1xuICAgIH0pO1xuXG4gICAgcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZVJlZHVjZWROb2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoZmlyc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSk7XG5cbiAgaWYgKGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IHJlZHVjZWROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlUnVsZU5hbWUgPSBwYXJlbnROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudFJ1bGVOYW1lID0gcGFyZW50Tm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpO1xuXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMucHVzaChyZXdyaXR0ZW5Ob2RlKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFcHNpbG9uTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRXBzaWxvbk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvbk5vZGUpO1xuXG4gICAgaWYgKCFjaGlsZE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbENoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNsZWFyKGNoaWxkTm9kZXMpO1xuXG4gIHB1c2goY2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVwbGFjZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZFJlcGVhdGVkTm9kZXMoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZE5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzLCBjYWxsYmFjaykge1xuICBjb25zdCByZXBlYXRlZE5vZGVzID0gW10sXG4gICAgICAgIGxhc3RJbmRleCA9IGNoaWxkTm9kZXMuZmluZExhc3RJbmRleChjYWxsYmFjayk7XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGluZGV4ID0gbGFzdEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IGNhbGxiYWNrKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXBlYXRlZE5vZGVzLnVuc2hpZnQocmVwZWF0ZWROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVwZWF0ZWROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInB1c2giLCJjbGVhciIsImZpbHRlciIsImJhY2t3YXJkc1NvbWUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZmluZEluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImZyb250Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwic2V0UHJlY2VkZW5jZSIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImZvckVhY2giLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsInBhcmVudE5vZGVSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInBhcmVudFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwiZnJvbVJlZHVjZWROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaW5kZXgiLCJmaW5kUmVwZWF0ZWROb2RlcyIsImNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImNhbGxiYWNrIiwicmVwZWF0ZWROb2RlcyIsImxhc3RJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJjaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGUiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLDhCQUE4QjtlQUE5QkE7O0lBK0NBQyw0QkFBNEI7ZUFBNUJBOztJQXlCQUMsbUJBQW1CO2VBQW5CQTs7SUErQkFDLGtCQUFrQjtlQUFsQkE7Ozs0QkFuSFk7eUJBQ0c7OERBRVA7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUFxREMseUJBQWMsQ0FBbkVELE9BQU9FLFFBQThDRCx5QkFBYyxDQUE1REMsT0FBT0MsT0FBdUNGLHlCQUFjLENBQXJERSxNQUFNQyxRQUFpQ0gseUJBQWMsQ0FBL0NHLE9BQU9DLFNBQTBCSix5QkFBYyxDQUF4Q0ksUUFBUUMsZ0JBQWtCTCx5QkFBYyxDQUFoQ0s7QUFFcEMsU0FBU1YsK0JBQStCVyxlQUFlO0lBQzVELElBQUlDLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsMEJBQTBCQyw0QkFBNEJILGFBQ3RESSxnQ0FBZ0NGLHdCQUF3QkcsTUFBTTtJQUVsRSxNQUFPRCxnQ0FBZ0MsRUFBRztRQUN4Q04sY0FBY0kseUJBQXlCLFNBQUNJO1lBQ3RDLElBQU1DLGlDQUFpQ0QsdUJBQXVCRSxXQUFXLElBQ25FQyw2QkFBNkJGLGdDQUM3Qkcsa0JBQWtCbEIsTUFBTVEsYUFD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