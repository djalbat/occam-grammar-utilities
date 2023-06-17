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
    var parentNode = nonTerminalNode; ///
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNodes = find(childNodes, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    });
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
    }), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    if (directlyRepeatedNodesLength > 0) {
        var parentNode = nonTerminalNode, replacedChildNodes = directlyRepeatedNodes, replacementChildNodes = [];
        directlyRepeatedNodes.forEach(function(directlyRepeatedNodes) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();
            unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
        });
        replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIGxhc3QsIHB1c2gsIGZpbHRlciwgdW5zaGlmdCwgZmluZCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgYmFja3dhcmRzU29tZShpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcywgKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZnJvbnRDaGlsZE5vZGVzID0gZnJvbnQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgZnJvbnRDaGlsZE5vZGVzKSwgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlLFxuICAgICAgICAgICAgLi4uaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIHBhcmVudE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAvLy9cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZChjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICB1bnNoaWZ0KHJlcGxhY2VtZW50Q2hpbGROb2RlcywgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlID0gKGZpcnN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gIGlmIChmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSByZWR1Y2VkTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcGFyZW50Tm9kZVJ1bGVOYW1lID0gcGFyZW50Tm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnRSdWxlTmFtZSA9IHBhcmVudE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW107IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBwYXJlbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcmVkdWNlZE5vZGVDaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBwdXNoKHJlcGxhY2VtZW50Q2hpbGROb2RlcywgcmVkdWNlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKTtcblxuICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzLnB1c2gocmV3cml0dGVuTm9kZSk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXBzaWxvbk5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBmaWx0ZXIoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUVwc2lsb25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25Ob2RlKTtcblxuICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGFzdFJlcGxhY2VkQ2hpbGROb2RlID0gbGFzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgbGFzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGxhc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gbGFzdEluZGV4IC0gZmlyc3RJbmRleCArIDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwidW5zaGlmdCIsImZpbmQiLCJiYWNrd2FyZHNTb21lIiwibm9uVGVybWluYWxOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJmcm9udENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUFsbENoaWxkTm9kZXMiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJwYXJlbnROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJwYXJlbnRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWROb2RlQ2hpbGROb2RlcyIsImZyb21SZWR1Y2VkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5Iiwic3BsaWNlIiwibGFzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwibGFzdEluZGV4IiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsOEJBQThCO2VBQTlCQTs7SUFpQ0FDLDRCQUE0QjtlQUE1QkE7O0lBMEJBQyxtQkFBbUI7ZUFBbkJBOztJQStCQUMsa0JBQWtCO2VBQWxCQTs7OzRCQXRHWTt5QkFDRzs4REFFUDtnRUFDRTsrREFDTztpRUFDRTt3QkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLFFBQW1FQywwQkFBbkVELE9BQU9FLFFBQTRERCwwQkFBNURDLE9BQU9DLE9BQXFERiwwQkFBckRFLE1BQU1DLE9BQStDSCwwQkFBL0NHLE1BQU1DLFNBQXlDSiwwQkFBekNJLFFBQVFDLFVBQWlDTCwwQkFBakNLLFNBQVNDLE9BQXdCTiwwQkFBeEJNLE1BQU1DLGdCQUFrQlAsMEJBQWxCTztBQUVsRCxTQUFTWiwrQkFBK0JhLGVBQWU7SUFDNUQsSUFBSUMsYUFBYUQsaUJBQWlCLEdB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