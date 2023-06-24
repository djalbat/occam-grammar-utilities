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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift, backwardsSome = _necessary.arrayUtilities.backwardsSome;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIHB1c2gsIGNsZWFyLCBmaWx0ZXIsIHVuc2hpZnQsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBiYWNrd2FyZHNTb21lKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgIGNoaWxkTm9kZXMgPSBmcm9udENoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAgIHJld3JpdHRlbk5vZGUsXG4gICAgICAgICAgICAgIC4uLmluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHJld3JpdHRlbk5vZGU7ICAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZEluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2RlcyksXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzOyAvLy9cblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICB1bnNoaWZ0KHJlcGxhY2VtZW50Q2hpbGROb2RlcywgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY2xlYXIoY2hpbGROb2Rlcyk7XG5cbiAgcHVzaChjaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZFJlcGVhdGVkTm9kZXMoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJlcGVhdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgbGFzdEluZGV4ID0gY2hpbGROb2Rlcy5maW5kTGFzdEluZGV4KGNhbGxiYWNrKTtcblxuICBpZiAobGFzdEluZGV4ICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gY2FsbGJhY2soY2hpbGROb2RlKTtcblxuICAgICAgaWYgKCFjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlcGVhdGVkTm9kZXMudW5zaGlmdChyZXBlYXRlZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXBlYXRlZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHVzaCIsImNsZWFyIiwiZmlsdGVyIiwidW5zaGlmdCIsImJhY2t3YXJkc1NvbWUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZmluZEluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImZyb250Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwic2V0UHJlY2VkZW5jZSIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImZvckVhY2giLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJmaW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsInBhcmVudE5vZGVSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInBhcmVudFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwiZnJvbVJlZHVjZWROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaW5kZXgiLCJmaW5kUmVwZWF0ZWROb2RlcyIsImNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImNhbGxiYWNrIiwicmVwZWF0ZWROb2RlcyIsImxhc3RJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJjaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsOEJBQThCO2VBQTlCQTs7SUE2Q0FDLDRCQUE0QjtlQUE1QkE7O0lBeUJBQyxtQkFBbUI7ZUFBbkJBOztJQStCQUMsa0JBQWtCO2VBQWxCQTs7OzRCQWpIWTt5QkFDRzs4REFFUDtnRUFDRTsrREFDTztpRUFDRTt3QkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLFFBQThEQyx5QkFBYyxDQUE1RUQsT0FBT0UsUUFBdURELHlCQUFjLENBQXJFQyxPQUFPQyxPQUFnREYseUJBQWMsQ0FBOURFLE1BQU1DLFFBQTBDSCx5QkFBYyxDQUF4REcsT0FBT0MsU0FBbUNKLHlCQUFjLENBQWpESSxRQUFRQyxVQUEyQkwseUJBQWMsQ0FBekNLLFNBQVNDLGdCQUFrQk4seUJBQWMsQ0FBaENNO0FBRTdDLFNBQVNYLCtCQUErQlksZUFBZTtJQUM1RCxJQUFJQyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLDBCQUEwQkMsNEJBQTRCSCxhQUN0REksZ0NBQWdDRix3QkFBd0JHLE1BQU07SUFFbEUsTUFBT0QsZ0NBQWdDLEVBQUc7UUFDeENOLGNBQWNJLHlCQUF5QixTQUFDSTtZQUN0QyxJQUFNQyxpQ0FBaUNELHVCQUF1QkUsV0FBVyxJQUNuRUMsNkJBQTZCRixnQ0FDN0JHLGtCQUFrQm5CLE1BQU1TLGFBQ3hCVyxXQUFXQyxJQUFBQSxnREFBc0MsRUFBQ0g7WUFFeERULGFBQWFVLGlCQUFpQixHQUFHO1lBRWpDLElBQU1HLGFBQWFQLHVCQUF1QlEsYUFBYSxJQUNqREMsZ0JBQWdCQyxrQkFBYSxDQUFDQyx5QkFBeUIsQ0FBQ04sVUFBVVgsYUFDbEVrQixtQ0FBbUNaLHVCQUF1QkwsYUFBYSxJQUN2RWtCLHdCQUF3QjtnQkFDdEJKO2FBRUQsQ0FIdUIsT0FFdEIscUJBQUdHO1lBR1huQixnQkFBZ0JxQixhQUFhLENBQUNQO1lBRTlCYixhQUFhRCxnQkFBZ0JFLGFBQWE7WUFFMUNvQixxQkFBcUJyQixZQUFZbUI7WUFFakNwQixrQkFBa0JnQixlQUFnQixHQUFHO1lBRXJDZixhQUFhRCxnQkFBZ0JFLGFBQWE7UUFDNUM7UUFFQUQsYUFBYUQsZ0JBQWdCRSxhQUFhO1FBRTFDQywwQkFBMEJDLDRCQUE0Qkg7UUFFdERJLGdDQUFnQ0Ysd0JBQXdCRyxNQUFNO0lBQ2hFO0lBRUEsSUFBTWlCLGFBQWF2QixpQkFBaUIsR0FBRztJQUV2QyxPQUFPdUI7QUFDVDtBQUVPLFNBQVNsQyw2QkFBNkJXLGVBQWU7O1FBTXhELElBQU1vQix3QkFBd0IsRUFBRSxFQUMxQkkscUJBQXFCQyx1QkFBdUIsR0FBRztRQUVyREEsc0JBQXNCQyxPQUFPLENBQUMsU0FBQ0Q7WUFDN0IsSUFBTUUsa0NBQWtDRixzQkFBc0J2QixhQUFhO1lBRTNFSixRQUFRc0IsdUJBQXVCTztRQUNqQztRQUVBQyxrQkFBa0IzQixZQUFZdUIsb0JBQW9CSjtRQUVsRG5CLGFBQWFELGdCQUFnQkUsYUFBYTtRQUUxQ3VCLHdCQUF3QkksMEJBQTBCNUI7UUFFbEQ2Qiw4QkFBOEJMLHNCQUFzQm5CLE1BQU07SUFDNUQ7SUFyQkEsSUFBSUwsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDdUIsd0JBQXdCSSwwQkFBMEI1QixhQUNsRDZCLDhCQUE4Qkwsc0JBQXNCbkIsTUFBTTtJQUU5RCxNQUFPd0IsOEJBQThCO0FBa0J2QztBQUVPLFNBQVN4QyxvQkFBb0JVLGVBQWU7SUFDakQsSUFBSUMsYUFBYUQsZ0JBQWdCRSxhQUFhO0lBRTlDLElBQU02QixpQkFBaUJyQyxNQUFNTyxhQUN2QitCLDRCQUE2QkQsQUFBYyxZQUFkQSxnQkFBMEJFLGdCQUFXO0lBRXhFLElBQUlELDJCQUEyQjtRQUM3QixJQUFNVCxhQUFhdkIsaUJBQ2JrQyxjQUFjSCxnQkFDZEksb0JBQW9CRCxhQUNwQkUsc0JBQXNCRixZQUFZekIsV0FBVyxJQUM3QzRCLHFCQUFxQmQsV0FBV2QsV0FBVyxJQUMzQzZCLGtCQUFrQkYscUJBQ2xCRyxpQkFBaUJGLG9CQUNqQnpCLFdBQVc0QixJQUFBQSxxQ0FBMkIsRUFBQ0Ysa0JBQ3ZDbEIsd0JBQXdCLEVBQUUsRUFBRSxHQUFHO1FBRXJDLElBQUlSLGFBQWEyQixnQkFBZ0I7WUFDL0IsSUFBTUUsd0JBQXdCUCxZQUFZaEMsYUFBYTtZQUV2RFAsS0FBS3lCLHVCQUF1QnFCO1FBQzlCLE9BQU87WUFDTCxJQUFNekIsZ0JBQWdCQyxrQkFBYSxDQUFDeUIsZUFBZSxDQUFDUjtZQUVwRGQsc0JBQXNCekIsSUFBSSxDQUFDcUI7UUFDN0I7UUFFQTJCLGlCQUFpQnBCLFlBQVlZLG1CQUFtQmY7SUFDbEQ7QUFDRjtBQUVPLFNBQVM3QixtQkFBbUJTLGVBQWU7SUFDaEQsSUFBTUMsYUFBYUQsZ0JBQWdCRSxhQUFhO0lBRWhETCxPQUFPSSxZQUFZLFNBQUMyQztRQUNsQixJQUFNQyx1QkFBd0JELEFBQVMsWUFBVEEsV0FBcUJFLHlCQUFXO1FBRTlELElBQUksQ0FBQ0Qsc0JBQXNCO1lBQ3pCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxTQUFTdkIscUJBQXFCckIsVUFBVSxFQUFFbUIscUJBQXFCO0lBQzdEeEIsTUFBTUs7SUFFTk4sS0FBS00sWUFBWW1CO0FBQ25CO0FBRUEsU0FBU1Esa0JBQWtCM0IsVUFBVSxFQUFFdUIsa0JBQWtCLEVBQUVKLHFCQUFxQjtRQVk5RW5CO0lBWEEsSUFBTThDLDJCQUEyQnZCLG1CQUFtQmxCLE1BQU07SUFFMUQsSUFBSXlDLDZCQUE2QixHQUFHO1FBQ2xDO0lBQ0Y7SUFFQSxJQUFNQyx5QkFBeUJ0RCxNQUFNOEIscUJBQy9CeUIsYUFBYWhELFdBQVdpRCxPQUFPLENBQUNGLHlCQUNoQ0csUUFBUUYsWUFDUkcsY0FBY0wsMEJBQTBCLEdBQUc7SUFFakQ5QyxDQUFBQSxjQUFBQSxZQUFXb0QsTUFBTSxDQUFqQnBELE1BQUFBLGFBQUFBO1FBQWtCa0Q7UUFBT0M7S0FBc0MsQ0FBL0RuRCxPQUFzQyxxQkFBR21CO0FBQzNDO0FBRUEsU0FBU3VCLGlCQUFpQnBCLFVBQVUsRUFBRVksaUJBQWlCLEVBQUVmLHFCQUFxQjtRQU01RW5CO0lBTEEsSUFBTUEsYUFBYXNCLFdBQVdyQixhQUFhLElBQ3JDb0QsUUFBUXJELFdBQVdpRCxPQUFPLENBQUNmLG9CQUMzQmdCLFFBQVFHLE9BQ1JGLGNBQWM7SUFFcEJuRCxDQUFBQSxjQUFBQSxZQUFXb0QsTUFBTSxDQUFqQnBELE1BQUFBLGFBQUFBO1FBQWtCa0Q7UUFBT0M7S0FBc0MsQ0FBL0RuRCxPQUFzQyxxQkFBR21CO0FBQzNDO0FBRUEsU0FBU2hCLDRCQUE0QkgsVUFBVTtJQUM3QyxJQUFNRSwwQkFBMEJvRCxrQkFBa0J0RCxZQUFZLFNBQUMyQztRQUM3RCxJQUFNWSxrQ0FBbUNaLEFBQVMsWUFBVEEsV0FBcUJhLG1CQUFzQjtRQUVwRixJQUFJRCxpQ0FBaUM7WUFDbkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPckQ7QUFDVDtBQUVBLFNBQVMwQiwwQkFBMEI1QixVQUFVO0lBQzNDLElBQU13Qix3QkFBd0I4QixrQkFBa0J0RCxZQUFZLFNBQUMyQztRQUMzRCxJQUFNYyxnQ0FBaUNkLEFBQVMsWUFBVEEsV0FBcUJlLGlCQUFvQjtRQUVoRixJQUFJRCwrQkFBK0I7WUFDakMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPakM7QUFDVDtBQUVBLFNBQVM4QixrQkFBa0J0RCxVQUFVLEVBQUUyRCxRQUFRO0lBQzdDLElBQU1DLGdCQUFnQixFQUFFLEVBQ2xCQyxZQUFZN0QsV0FBVzhELGFBQWEsQ0FBQ0g7SUFFM0MsSUFBSUUsY0FBYyxNQUFNO1FBQ3RCLElBQUssSUFBSVIsUUFBUVEsV0FBV1IsU0FBUyxHQUFHQSxRQUFTO1lBQy9DLElBQU1WLFlBQVkzQyxVQUFVLENBQUNxRCxNQUFNLEVBQzdCVSx3QkFBd0JKLFNBQVNoQjtZQUV2QyxJQUFJLENBQUNvQix1QkFBdUI7Z0JBQzFCO1lBQ0Y7WUFFQSxJQUFNQyxlQUFlckIsV0FBVyxHQUFHO1lBRW5DaUIsY0FBYy9ELE9BQU8sQ0FBQ21FO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=