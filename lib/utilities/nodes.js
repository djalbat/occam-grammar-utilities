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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift, find = _necessary.arrayUtilities.find, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
    var indirectlyRepeatedNodes = findIndirectlyRepeatedChildNodes(nonTerminalNode);
    var parentNode = nonTerminalNode; ///
    backwardsSome(indirectlyRepeatedNodes, function(indirectlyRepeatedNode) {
        var childNodes = parentNode.getChildNodes(), frontChildNodes = front(childNodes), indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName), rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, frontChildNodes), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
            rewrittenNode
        ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
        parentNode = rewrittenNode; ///
    });
    // const lastChildNode = last(childNodes),
    //       lastChildNodeIndirectlyRepeatedNode = (lastChildNode instanceof IndirectlyRepeatedNode);
    // if (lastChildNodeIndirectlyRepeatedNode) {
    //   const parentNode = nonTerminalNode, ///
    //         frontChildNodes = front(childNodes),
    //         indirectlyRepeatedNode = lastChildNode, ///
    //         indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
    //         indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
    //         ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
    //         rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, frontChildNodes), ///
    //         indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
    //         replacementChildNodes = [
    //           rewrittenNode,
    //           ...indirectlyRepeatedNodeChildNodes
    //         ];
    //
    //   replaceAllChildNodes(parentNode, replacementChildNodes);
    //
    //   counter++;
    // }
    return parentNode;
}
function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
    // let childNodes = nonTerminalNode.getChildNodes(),
    //     directlyRepeatedNodes = findDirectlyRepeatedChildNodes(nonTerminalNode),
    //     directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    var directlyRepeatedNodes = findDirectlyRepeatedChildNodes(nonTerminalNode), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    if (directlyRepeatedNodesLength > 0) {
        var parentNode = nonTerminalNode, replacedChildNodes = directlyRepeatedNodes, replacementChildNodes = [];
        directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
            unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
        });
        replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes);
    // childNodes = nonTerminalNode.getChildNodes();
    //
    // directlyRepeatedNodes = findDirectlyRepeatedChildNodes(nonTerminalNode);
    //
    // directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    }
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
function findIndirectlyRepeatedChildNodes(nonTerminalNode) {
    var childNodes = findChildNodes(nonTerminalNode, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    });
    return childNodes;
}
function findDirectlyRepeatedChildNodes(nonTerminalNode) {
    var childNodes = findChildNodes(nonTerminalNode, function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    });
    return childNodes;
}
function replaceAllChildNodes(parentNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), start = 0, deleteCount = Infinity;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), lastReplacedChildNode = last(replacedChildNodes), firstReplacedChildNode = first(replacedChildNodes), firstIndex = childNodes.indexOf(firstReplacedChildNode), lastIndex = childNodes.indexOf(lastReplacedChildNode), start = firstIndex, deleteCount = lastIndex - firstIndex + 1;
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
function findChildNodes(nonTerminalNode, callback) {
    var childNodes = nonTerminalNode.getChildNodes();
    childNodes = find(childNodes, callback);
    // const index = childNodes.findIndex(callback);
    //
    // if (index === -1) {
    //   childNodes = [];
    // } else {
    //   let start = index,  ///
    //       end;
    //
    //   childNodes = childNodes.slice(start);
    //
    //   childNodes.every((childNode, index) => {
    //     const passed = callback(childNode);
    //
    //     if (passed) {
    //       end = index + 1;
    //
    //       return true;
    //     }
    //   });
    //
    //   start = 0;
    //
    //   childNodes = childNodes.slice(start, end);
    // }
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIGxhc3QsIHB1c2gsIGZpbHRlciwgdW5zaGlmdCwgZmluZCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZEluZGlyZWN0bHlSZXBlYXRlZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlKTtcblxuICBsZXQgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgYmFja3dhcmRzU29tZShpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcywgKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZnJvbnRDaGlsZE5vZGVzID0gZnJvbnQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgZnJvbnRDaGlsZE5vZGVzKSwgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlLFxuICAgICAgICAgICAgLi4uaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIHBhcmVudE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAvLy9cbiAgfSk7XG5cbiAgLy8gY29uc3QgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gIC8vICAgICAgIGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGxhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAvLyBpZiAobGFzdENoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgLy8gICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgLy8gICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgLy8gICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gIC8vICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAvLyAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gIC8vICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gIC8vICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgZnJvbnRDaGlsZE5vZGVzKSwgLy8vXG4gIC8vICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgLy8gICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gIC8vICAgICAgICAgICByZXdyaXR0ZW5Ob2RlLFxuICAvLyAgICAgICAgICAgLi4uaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXNcbiAgLy8gICAgICAgICBdO1xuICAvL1xuICAvLyAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIC8vXG4gIC8vICAgY291bnRlcisrO1xuICAvLyB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICAvLyBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gIC8vICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kRGlyZWN0bHlSZXBlYXRlZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlKSxcbiAgLy8gICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdO1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmZvckVhY2goKGRpcmVjdGx5UmVwZWF0ZWROb2RlcykgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHVuc2hpZnQocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIHJlcGxhY2VDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIC8vIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuICAgIC8vXG4gICAgLy8gZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG4gICAgLy9cbiAgICAvLyBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kaXJlY3RseVJlcGVhdGVkQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGZpbmRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gZmluZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGxhc3RSZXBsYWNlZENoaWxkTm9kZSA9IGxhc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIGxhc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IGxhc3RJbmRleCAtIGZpcnN0SW5kZXggKyAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMgPSBmaW5kKGNoaWxkTm9kZXMsIGNhbGxiYWNrKTtcblxuICAvLyBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuZmluZEluZGV4KGNhbGxiYWNrKTtcbiAgLy9cbiAgLy8gaWYgKGluZGV4ID09PSAtMSkge1xuICAvLyAgIGNoaWxkTm9kZXMgPSBbXTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBsZXQgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAvLyAgICAgICBlbmQ7XG4gIC8vXG4gIC8vICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc2xpY2Uoc3RhcnQpO1xuICAvL1xuICAvLyAgIGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGNoaWxkTm9kZSk7XG4gIC8vXG4gIC8vICAgICBpZiAocGFzc2VkKSB7XG4gIC8vICAgICAgIGVuZCA9IGluZGV4ICsgMTtcbiAgLy9cbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgc3RhcnQgPSAwO1xuICAvL1xuICAvLyAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAvLyB9XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJmcm9udCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJsYXN0IiwicHVzaCIsImZpbHRlciIsInVuc2hpZnQiLCJmaW5kIiwiYmFja3dhcmRzU29tZSIsIm5vblRlcm1pbmFsTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZmluZEluZGlyZWN0bHlSZXBlYXRlZENoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZnJvbnRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJwYXJlbnROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJwYXJlbnRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWROb2RlQ2hpbGROb2RlcyIsImZyb21SZWR1Y2VkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwiZmluZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlIiwiRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJsYXN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJsYXN0SW5kZXgiLCJpbmRleCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLDhCQUE4QjtlQUE5QkE7O0lBZ0RBQyw0QkFBNEI7ZUFBNUJBOztJQTZCQUMsbUJBQW1CO2VBQW5CQTs7SUErQkFDLGtCQUFrQjtlQUFsQkE7Ozs0QkF4SFk7eUJBQ0c7OERBRVA7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUFtRUMsMEJBQW5FRCxPQUFPRSxRQUE0REQsMEJBQTVEQyxPQUFPQyxPQUFxREYsMEJBQXJERSxNQUFNQyxPQUErQ0gsMEJBQS9DRyxNQUFNQyxTQUF5Q0osMEJBQXpDSSxRQUFRQyxVQUFpQ0wsMEJBQWpDSyxTQUFTQyxPQUF3Qk4sMEJBQXhCTSxNQUFNQyxnQkFBa0JQLDBCQUFsQk87QUFFbEQsU0FBU1osK0JBQStCYSxlQUFlO0lBQzVELElBQU1DLDBCQUEwQkMsaUNBQWlDRjtJQUVqRSxJQUFJRyxhQUFhSCxpQkFBaUIsR0FBRztJQUVyQ0QsY0FBY0UseUJBQXlCLFNBQUNHO1FBQ3RDLElBQU1DLGFBQWFGLFdBQVdHLGlCQUN4QkMsa0JBQWtCaEIsTUFBTWMsYUFDeEJHLGlDQUFpQ0osdUJBQXVCSyxlQUN4REMsNkJBQTZCRixnQ0FDN0JHLFdBQVdDLElBQUFBLGtEQUF1Q0YsNkJBQ2xERyxnQkFBZ0JDLG1CQUFjQywwQkFBMEJKLFVBQVVKLGtCQUNsRVMsbUNBQW1DWix1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