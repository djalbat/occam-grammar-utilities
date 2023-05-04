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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift;
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
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), lastChildNode = last(childNodes), lastChildNodeIndirectlyRepeatedNode = _instanceof(lastChildNode, _indirectly.default);
    if (lastChildNodeIndirectlyRepeatedNode) {
        var parentNode = nonTerminalNode, frontChildNodes = front(childNodes), indirectlyRepeatedNode = lastChildNode, indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName), rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, frontChildNodes), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
            rewrittenNode
        ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rewriteIndirectlyRepeatedNodes(_$node);
    });
}
function rewriteDirectlyRepeatedNodes(node) {
    var _loop = function() {
        var parentNode = nonTerminalNode, replacedChildNodes = directlyRepeatedNodes, replacementChildNodes = [];
        directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
            unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
        });
        replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes);
        childNodes = nonTerminalNode.getChildNodes();
        directlyRepeatedNodes = findDirectlyRepeatedChildNodes(nonTerminalNode);
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    };
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes(), directlyRepeatedNodes = findDirectlyRepeatedChildNodes(nonTerminalNode), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    while(directlyRepeatedNodesLength > 0)_loop();
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
    filter(childNodes, function(childNode) {
        var childNodeEpsilonNode = _instanceof(childNode, _occamparsers.EpsilonNode);
        if (!childNodeEpsilonNode) {
            return true;
        }
    });
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        removeEpsilonNodes(_$node);
    });
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
    var index = childNodes.findIndex(callback);
    if (index === -1) {
        childNodes = [];
    } else {
        var start = index, end;
        childNodes = childNodes.slice(start);
        childNodes.every(function(childNode, index) {
            var passed = callback(childNode);
            if (passed) {
                end = index + 1;
                return true;
            }
        });
        start = 0;
        childNodes = childNodes.slice(start, end);
    }
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRXBzaWxvbk5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSwgcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIGxhc3QsIHB1c2gsIGZpbHRlciwgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2RlKG5vZGUpIHsgIC8vL1xuICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICBsYXN0Q2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSA9IChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgaWYgKGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgZnJvbnRDaGlsZE5vZGVzID0gZnJvbnQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGZyb250Q2hpbGROb2RlcyksIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgcmV3cml0dGVuTm9kZSxcbiAgICAgICAgICAgIC4uLmluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZURpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSksXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICB1bnNoaWZ0KHJlcGxhY2VtZW50Q2hpbGROb2RlcywgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZVJlZHVjZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoZmlyc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSk7XG5cbiAgaWYgKGZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IHJlZHVjZWROb2RlLCAvLy9cbiAgICAgICAgICByZWR1Y2VkTm9kZVJ1bGVOYW1lID0gcmVkdWNlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlUnVsZU5hbWUgPSBwYXJlbnROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudFJ1bGVOYW1lID0gcGFyZW50Tm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSByZWR1Y2VkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCByZWR1Y2VkTm9kZUNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpO1xuXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMucHVzaChyZXdyaXR0ZW5Ob2RlKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBmaWx0ZXIoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUVwc2lsb25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25Ob2RlKTtcblxuICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGZpbmRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5O1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBsYXN0UmVwbGFjZWRDaGlsZE5vZGUgPSBsYXN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YobGFzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSBsYXN0SW5kZXggLSBmaXJzdEluZGV4ICsgMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuZmluZEluZGV4KGNhbGxiYWNrKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY2hpbGROb2RlcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGxldCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGVuZDtcblxuICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKHN0YXJ0KTtcblxuICAgIGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZW5kID0gaW5kZXggKyAxO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhcnQgPSAwO1xuXG4gICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH1cblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZSIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwidW5zaGlmdCIsIm5vZGUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsInBhcmVudE5vZGUiLCJmcm9udENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJwYXJlbnROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJwYXJlbnRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWROb2RlQ2hpbGROb2RlcyIsImZyb21SZWR1Y2VkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwiZmluZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5Iiwic3BsaWNlIiwibGFzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwibGFzdEluZGV4IiwiaW5kZXgiLCJjYWxsYmFjayIsImZpbmRJbmRleCIsImVuZCIsInNsaWNlIiwiZXZlcnkiLCJwYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7NEJBWkk7eUJBQ0c7OERBRVA7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUE4Q0MseUJBQWMsQ0FBNURELE9BQU9FLFFBQXVDRCx5QkFBYyxDQUFyREMsT0FBT0MsT0FBZ0NGLHlCQUFjLENBQTlDRSxNQUFN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