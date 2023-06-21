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
        var childNodes = parentNode.getChildNodes();
        var frontChildNodes = front(childNodes), indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName);
        childNodes = frontChildNodes; ///
        var precedence = indirectlyRepeatedNode.getPrecedence(), rewrittenNode = _rewritten.default.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
            rewrittenNode
        ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
        parentNode = rewrittenNode; ///
    });
    return parentNode;
}
function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
    var _loop = function() {
        var replacementChildNodes = [], replacedChildNodes = directlyRepeatedNodes; ///
        directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
            unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
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
function findDirectlyRepeatedNodes(childNodes) {
    var directlyRepeatedNodes = [];
    var lastIndex = childNodes.findLastIndex(function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    });
    if (lastIndex !== null) {
        for(var index = lastIndex; index >= 0; index--){
            var childNode = childNodes[index], childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
            if (!childNodeDirectlyRepeatedNode) {
                break;
            }
            var directlyRepeatedNode = childNode; ///
            directlyRepeatedNodes.unshift(directlyRepeatedNode);
        }
    }
    return directlyRepeatedNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIHB1c2gsIGZpbHRlciwgdW5zaGlmdCwgZmluZCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBwYXJlbnROb2RlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmQoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICBiYWNrd2FyZHNTb21lKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSkgPT4ge1xuICAgIGxldCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjb25zdCBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgIGNoaWxkTm9kZXMgPSBmcm9udENoaWxkTm9kZXM7IC8vL1xuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIHJld3JpdHRlbk5vZGUsXG4gICAgICAgICAgICAuLi5pbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlc1xuICAgICAgICAgIF07XG5cbiAgICByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuXG4gICAgcGFyZW50Tm9kZSA9IHJld3JpdHRlbk5vZGU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzOyAvLy9cblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICB1bnNoaWZ0KHJlcGxhY2VtZW50Q2hpbGROb2RlcywgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gW107XG5cbiAgY29uc3QgbGFzdEluZGV4ID0gY2hpbGROb2Rlcy5maW5kTGFzdEluZGV4KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGluZGV4ID0gbGFzdEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKCFjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMudW5zaGlmdChkaXJlY3RseVJlcGVhdGVkTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5O1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVwbGFjZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHVzaCIsImZpbHRlciIsInVuc2hpZnQiLCJmaW5kIiwiYmFja3dhcmRzU29tZSIsIm5vblRlcm1pbmFsTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImxhc3RJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kZXgiLCJkaXJlY3RseVJlcGVhdGVkTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2dCQSw4QkFBOEI7ZUFBOUJBOztJQXdDQUMsNEJBQTRCO2VBQTVCQTs7SUF5QkFDLG1CQUFtQjtlQUFuQkE7O0lBK0JBQyxrQkFBa0I7ZUFBbEJBOzs7NEJBNUdZO3lCQUNHOzhEQUVQO2dFQUNFOytEQUNPO2lFQUNFO3dCQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsUUFBNkRDLHlCQUFjLENBQTNFRCxPQUFPRSxRQUFzREQseUJBQWMsQ0FBcEVDLE9BQU9DLE9BQStDRix5QkFBYyxDQUE3REUsTUFBTUMsU0FBeUNILHlCQUFjLENBQXZERyxRQUFRQyxVQUFpQ0oseUJBQWMsQ0FBL0NJLFNBQVNDLE9BQXdCTCx5QkFBYyxDQUF0Q0ssTUFBTUMsZ0JBQWtCTix5QkFBYyxDQUFoQ007QUFFNUMsU0FBU1gsK0JBQStCWSxlQUFlO0lBQzVELElBQUlDO0lBRUosSUFBTUMsYUFBYUYsZ0JBQWdCRyxhQUFhLElBQzFDQywwQkFBMEJOLEtBQUtJLFlBQVksU0FBQ0c7UUFDMUMsSUFBTUMsa0NBQW1DRCxBQUFTLFlBQVRBLFdBQXFCRSxtQkFBc0I7UUFFcEYsSUFBSUQsaUNBQWlDO1lBQ25DLE9BQU87UUFDVDtJQUNGO0lBRU5MLGFBQWFELGlCQUFpQixHQUFHO0lBRWpDRCxjQUFjSyx5QkFBeUIsU0FBQ0k7UUFDdEMsSUFBSU4sYUFBYUQsV0FBV0UsYUFBYTtRQUV6QyxJQUFNTSxrQkFBa0JqQixNQUFNVSxhQUN4QlEsaUNBQWlDRix1QkFBdUJHLFdBQVcsSUFDbkVDLDZCQUE2QkYsZ0NBQzdCRyxXQUFXQyxJQUFBQSxnREFBc0MsRUFBQ0Y7UUFFeERWLGFBQWFPLGlCQUFpQixHQUFHO1FBRWpDLElBQU1NLGFBQWFQLHVCQUF1QlEsYUFBYSxJQUNqREMsZ0JBQWdCQyxrQkFBYSxDQUFDQyxtQ0FBbUMsQ0FBQ04sVUFBVVgsWUFBWWEsYUFDeEZLLG1DQUFtQ1osdUJBQXVCTCxhQUFhLElBQ3ZFa0Isd0JBQXdCO1lBQ3RCSjtTQUVELENBSHVCLE9BRXRCLHFCQUFHRztRQUdYRSxxQkFBcUJyQixZQUFZb0I7UUFFakNwQixhQUFhZ0IsZUFBZSxHQUFHO0lBQ2pDO0lBRUEsT0FBT2hCO0FBQ1Q7QUFFTyxTQUFTWiw2QkFBNkJXLGVBQWU7O1FBTXhELElBQU1xQix3QkFBd0IsRUFBRSxFQUMxQkUscUJBQXFCQyx1QkFBdUIsR0FBRztRQUVyREEsc0JBQXNCQyxPQUFPLENBQUMsU0FBQ0Q7WUFDN0IsSUFBTUUsa0NBQWtDRixzQkFBc0JyQixhQUFhO1lBRTNFTixRQUFRd0IsdUJBQXVCSztRQUNqQztRQUVBQyxrQkFBa0J6QixZQUFZcUIsb0JBQW9CRjtRQUVsRG5CLGFBQWFGLGdCQUFnQkcsYUFBYTtRQUUxQ3FCLHdCQUF3QkksMEJBQTBCMUI7UUFFbEQyQiw4QkFBOEJMLHNCQUFzQk0sTUFBTTtJQUM1RDtJQXJCQSxJQUFJNUIsYUFBYUYsZ0JBQWdCRyxhQUFhLElBQzFDcUIsd0JBQXdCSSwwQkFBMEIxQixhQUNsRDJCLDhCQUE4Qkwsc0JBQXNCTSxNQUFNO0lBRTlELE1BQU9ELDhCQUE4QjtBQWtCdkM7QUFFTyxTQUFTdkMsb0JBQW9CVSxlQUFlO0lBQ2pELElBQUlFLGFBQWFGLGdCQUFnQkcsYUFBYTtJQUU5QyxJQUFNNEIsaUJBQWlCckMsTUFBTVEsYUFDdkI4Qiw0QkFBNkJELEFBQWMsWUFBZEEsZ0JBQTBCRSxnQkFBVztJQUV4RSxJQUFJRCwyQkFBMkI7UUFDN0IsSUFBTS9CLGFBQWFELGlCQUNia0MsY0FBY0gsZ0JBQ2RJLG9CQUFvQkQsYUFDcEJFLHNCQUFzQkYsWUFBWXZCLFdBQVcsSUFDN0MwQixxQkFBcUJwQyxXQUFXVSxXQUFXLElBQzNDMkIsa0JBQWtCRixxQkFDbEJHLGlCQUFpQkYsb0JBQ2pCeEIsV0FBVzJCLElBQUFBLHFDQUEyQixFQUFDRixrQkFDdkNqQix3QkFBd0IsRUFBRSxFQUFFLEdBQUc7UUFFckMsSUFBSVIsYUFBYTBCLGdCQUFnQjtZQUMvQixJQUFNRSx3QkFBd0JQLFlBQVkvQixhQUFhO1lBRXZEUixLQUFLMEIsdUJBQXVCb0I7UUFDOUIsT0FBTztZQUNMLElBQU14QixnQkFBZ0JDLGtCQUFhLENBQUN3QixlQUFlLENBQUNSO1lBRXBEYixzQkFBc0IxQixJQUFJLENBQUNzQjtRQUM3QjtRQUVBMEIsaUJBQWlCMUMsWUFBWWtDLG1CQUFtQmQ7SUFDbEQ7QUFDRjtBQUVPLFNBQVM5QixtQkFBbUJTLGVBQWU7SUFDaEQsSUFBTUUsYUFBYUYsZ0JBQWdCRyxhQUFhO0lBRWhEUCxPQUFPTSxZQUFZLFNBQUNHO1FBQ2xCLElBQU11Qyx1QkFBd0J2QyxBQUFTLFlBQVRBLFdBQXFCd0MseUJBQVc7UUFFOUQsSUFBSSxDQUFDRCxzQkFBc0I7WUFDekIsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLFNBQVNoQiwwQkFBMEIxQixVQUFVO0lBQzNDLElBQU1zQix3QkFBd0IsRUFBRTtJQUVoQyxJQUFNc0IsWUFBWTVDLFdBQVc2QyxhQUFhLENBQUMsU0FBQzFDO1FBQzFDLElBQU0yQyxnQ0FBaUMzQyxBQUFTLFlBQVRBLFdBQXFCNEMsaUJBQW9CO1FBRWhGLElBQUlELCtCQUErQjtZQUNqQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlGLGNBQWMsTUFBTTtRQUN0QixJQUFLLElBQUlJLFFBQVFKLFdBQVdJLFNBQVMsR0FBR0EsUUFBUztZQUMvQyxJQUFNN0MsWUFBWUgsVUFBVSxDQUFDZ0QsTUFBTSxFQUM3QkYsZ0NBQWlDM0MsQUFBUyxZQUFUQSxXQUFxQjRDLGlCQUFvQjtZQUVoRixJQUFJLENBQUNELCtCQUErQjtnQkFDbEM7WUFDRjtZQUVBLElBQU1HLHVCQUF1QjlDLFdBQVcsR0FBRztZQUUzQ21CLHNCQUFzQjNCLE9BQU8sQ0FBQ3NEO1FBQ2hDO0lBQ0Y7SUFFQSxPQUFPM0I7QUFDVDtBQUVBLFNBQVNGLHFCQUFxQnJCLFVBQVUsRUFBRW9CLHFCQUFxQjtRQUs3RG5CO0lBSkEsSUFBTUEsYUFBYUQsV0FBV0UsYUFBYSxJQUNyQ2lELFFBQVEsR0FDUkMsY0FBY0M7SUFFcEJwRCxDQUFBQSxjQUFBQSxZQUFXcUQsTUFBTSxDQUFqQnJELE1BQUFBLGFBQUFBO1FBQWtCa0Q7UUFBT0M7S0FBc0MsQ0FBL0RuRCxPQUFzQyxxQkFBR21CO0FBQzNDO0FBRUEsU0FBU00sa0JBQWtCekIsVUFBVSxFQUFFcUIsa0JBQWtCLEVBQUVGLHFCQUFxQjtRQVk5RW5CO0lBWEEsSUFBTXNELDJCQUEyQmpDLG1CQUFtQk8sTUFBTTtJQUUxRCxJQUFJMEIsNkJBQTZCLEdBQUc7UUFDbEM7SUFDRjtJQUVBLElBQU1DLHlCQUF5Qi9ELE1BQU02QixxQkFDL0JtQyxhQUFheEQsV0FBV3lELE9BQU8sQ0FBQ0YseUJBQ2hDTCxRQUFRTSxZQUNSTCxjQUFjRywwQkFBMEIsR0FBRztJQUVqRHRELENBQUFBLGNBQUFBLFlBQVdxRCxNQUFNLENBQWpCckQsTUFBQUEsYUFBQUE7UUFBa0JrRDtRQUFPQztLQUFzQyxDQUEvRG5ELE9BQXNDLHFCQUFHbUI7QUFDM0M7QUFFQSxTQUFTc0IsaUJBQWlCMUMsVUFBVSxFQUFFa0MsaUJBQWlCLEVBQUVkLHFCQUFxQjtRQU01RW5CO0lBTEEsSUFBTUEsYUFBYUQsV0FBV0UsYUFBYSxJQUNyQytDLFFBQVFoRCxXQUFXeUQsT0FBTyxDQUFDeEIsb0JBQzNCaUIsUUFBUUYsT0FDUkcsY0FBYztJQUVwQm5ELENBQUFBLGNBQUFBLFlBQVdxRCxNQUFNLENBQWpCckQsTUFBQUEsYUFBQUE7UUFBa0JrRDtRQUFPQztLQUFzQyxDQUEvRG5ELE9BQXNDLHFCQUFHbUI7QUFDM0MifQ==