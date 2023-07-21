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
    var parentNode, childNodes = nonTerminalNode.getChildNodes(), precedence = nonTerminalNode.getPrecedence(), indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes), indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
    while(indirectlyRepeatedNodesLength > 0){
        backwardsSome(indirectlyRepeatedNodes, function(indirectlyRepeatedNode) {
            var indirectlyRepeatedNodePrecedence = indirectlyRepeatedNode.getPrecedence(), indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, frontChildNodes = front(childNodes), ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName);
            childNodes = frontChildNodes; ///
            var rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, childNodes), indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
                rewrittenNode
            ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
            rewrittenNode.rewritePrecedence(precedence);
            precedence = indirectlyRepeatedNodePrecedence; ///
            childNodes = nonTerminalNode.getChildNodes();
            nonTerminalNode.rewritePrecedence(precedence);
            replaceAllChildNodes(childNodes, replacementChildNodes);
            removeEpsilonNodes(nonTerminalNode);
            nonTerminalNode = rewrittenNode; ///
            childNodes = nonTerminalNode.getChildNodes();
        });
        childNodes = nonTerminalNode.getChildNodes();
        indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);
        indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
    }
    parentNode = nonTerminalNode; ///
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
        directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    };
    var childNodes = nonTerminalNode.getChildNodes();
    var directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmcm9udCwgZmlyc3QsIHB1c2gsIGNsZWFyLCBmaWx0ZXIsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgcGFyZW50Tm9kZSxcbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgcHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCksXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBiYWNrd2FyZHNTb21lKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVByZWNlZGVuY2UgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpO1xuXG4gICAgICBjaGlsZE5vZGVzID0gZnJvbnRDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY29uc3QgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcyksXG4gICAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgICByZXdyaXR0ZW5Ob2RlLFxuICAgICAgICAgICAgICAuLi5pbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlc1xuICAgICAgICAgICAgXTtcblxuICAgICAgcmV3cml0dGVuTm9kZS5yZXdyaXRlUHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgcHJlY2VkZW5jZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVQcmVjZWRlbmNlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUucmV3cml0ZVByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBsZXQgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSxcbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXM7IC8vL1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmZvckVhY2goKGRpcmVjdGx5UmVwZWF0ZWROb2RlcykgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIHJlcGxhY2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY2xlYXIoY2hpbGROb2Rlcyk7XG5cbiAgcHVzaChjaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZFJlcGVhdGVkTm9kZXMoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZXBlYXRlZE5vZGVzKGNoaWxkTm9kZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJlcGVhdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgbGFzdEluZGV4ID0gY2hpbGROb2Rlcy5maW5kTGFzdEluZGV4KGNhbGxiYWNrKTtcblxuICBpZiAobGFzdEluZGV4ICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gY2FsbGJhY2soY2hpbGROb2RlKTtcblxuICAgICAgaWYgKCFjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlcGVhdGVkTm9kZXMudW5zaGlmdChyZXBlYXRlZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXBlYXRlZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsInJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwicHVzaCIsImNsZWFyIiwiZmlsdGVyIiwiYmFja3dhcmRzU29tZSIsIm5vblRlcm1pbmFsTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJmaW5kSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUHJlY2VkZW5jZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJmcm9udENoaWxkTm9kZXMiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicmV3cml0dGVuTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXdyaXRlUHJlY2VkZW5jZSIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpbmRleCIsImZpbmRSZXBlYXRlZE5vZGVzIiwiY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiY2FsbGJhY2siLCJyZXBlYXRlZE5vZGVzIiwibGFzdEluZGV4IiwiZmluZExhc3RJbmRleCIsImNoaWxkTm9kZVJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsOEJBQThCO2VBQTlCQTs7SUFxREFDLDRCQUE0QjtlQUE1QkE7O0lBd0JBQyxtQkFBbUI7ZUFBbkJBOztJQStCQUMsa0JBQWtCO2VBQWxCQTs7OzRCQXhIWTt5QkFDRzs4REFFUDtnRUFDRTsrREFDTztpRUFDRTt3QkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQVFDLFFBQXFEQyx5QkFBYyxDQUFuRUQsT0FBT0UsUUFBOENELHlCQUFjLENBQTVEQyxPQUFPQyxPQUF1Q0YseUJBQWMsQ0FBckRFLE1BQU1DLFFBQWlDSCx5QkFBYyxDQUEvQ0csT0FBT0MsU0FBMEJKLHlCQUFjLENBQXhDSSxRQUFRQyxnQkFBa0JMLHlCQUFjLENBQWhDSztBQUVwQyxTQUFTViwrQkFBK0JXLGVBQWU7SUFDNUQsSUFB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