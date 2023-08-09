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
    var childNodes, indirectlyRepeatedNodes, indirectlyRepeatedNodesLength;
    childNodes = nonTerminalNode.getChildNodes();
    indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);
    indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
    while(indirectlyRepeatedNodesLength > 0){
        backwardsSome(indirectlyRepeatedNodes, function(indirectlyRepeatedNode) {
            var ruleName;
            var indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, leftRecursiveRuleName = (0, _ruleName.leftRecursiveRuleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName), frontChildNodes = front(childNodes);
            ruleName = leftRecursiveRuleName; ///
            childNodes = frontChildNodes; ///
            var rewrittenNode = _rewritten.default.fromRuleNameAndChildNodes(ruleName, childNodes), rewrittenNodeRuleName = rewrittenNode.getRuleName(), nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
            if (rewrittenNodeRuleName === nonTerminalNodeRuleName) {
                var precedence = nonTerminalNode.getPrecedence();
                rewrittenNode.rewritePrecedence(precedence);
            }
            ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName);
            if (nonTerminalNodeRuleName === ruleName) {
                var precedence1 = indirectlyRepeatedNode.getPrecedence();
                nonTerminalNode.rewritePrecedence(precedence1);
            }
            childNodes = nonTerminalNode.getChildNodes();
            var indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), replacementChildNodes = [
                rewrittenNode
            ].concat(_to_consumable_array(indirectlyRepeatedNodeChildNodes));
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
        directlyRepeatedNodes.forEach(function(directlyRepeatedNode) {
            var directlyRepeatedNodesChildNodes = directlyRepeatedNode.getChildNodes();
            push(replacementChildNodes, directlyRepeatedNodesChildNodes);
        });
        replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes);
        directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    };
    var childNodes = nonTerminalNode.getChildNodes();
    var directlyRepeatedNodes, directlyRepeatedNodesLength;
    directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);
    directlyRepeatedNodesLength = directlyRepeatedNodes.length;
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
function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
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
function replaceAllChildNodes(childNodes, replacementChildNodes) {
    clear(childNodes);
    push(childNodes, replacementChildNodes);
}
function findDirectlyRepeatedNodes(childNodes) {
    var directlyRepeatedNodes = findRepeatedNonTerminalNodes(childNodes, function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    });
    return directlyRepeatedNodes;
}
function findIndirectlyRepeatedNodes(childNodes) {
    var indirectlyRepeatedNodes = findRepeatedNonTerminalNodes(childNodes, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    });
    return indirectlyRepeatedNodes;
}
function findRepeatedNonTerminalNodes(childNodes, callback) {
    var repeatedNonTerminalNodes = [], lastIndex = childNodes.findLastIndex(callback);
    if (lastIndex !== null) {
        var ruleName = null;
        for(var index = lastIndex; index >= 0; index--){
            var childNode = childNodes[index], childNodeRepeatedNonTerminalNode = callback(childNode);
            if (!childNodeRepeatedNonTerminalNode) {
                break;
            }
            var repeatedNonTerminalNode = childNode, repeatedNonTerminalNodeRuleName = repeatedNonTerminalNode.getRuleName();
            if (ruleName === null) {
                ruleName = repeatedNonTerminalNodeRuleName; ///
            } else {
                if (repeatedNonTerminalNodeRuleName !== ruleName) {
                    break;
                }
            }
            repeatedNonTerminalNodes.unshift(repeatedNonTerminalNode);
        }
    }
    return repeatedNonTerminalNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4uL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IGZyb250LCBmaXJzdCwgcHVzaCwgY2xlYXIsIGZpbHRlciwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzLFxuICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMsXG4gICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aDtcblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKTtcblxuICBpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgYmFja3dhcmRzU29tZShpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcywgKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICAgIGxldCBydWxlTmFtZTtcblxuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gZnJvbnRDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY29uc3QgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcyksXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlUnVsZU5hbWUgPSByZXdyaXR0ZW5Ob2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBpZiAocmV3cml0dGVuTm9kZVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICByZXdyaXR0ZW5Ob2RlLnJld3JpdGVQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnJld3JpdGVQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgICAgcmV3cml0dGVuTm9kZSxcbiAgICAgICAgICAgICAgLi4uaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBsZXQgZGlyZWN0bHlSZXBlYXRlZE5vZGVzLFxuICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoO1xuXG4gIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICB3aGlsZSAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlczsgLy8vXG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZm9yRWFjaCgoZGlyZWN0bHlSZXBlYXRlZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIHJlcGxhY2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoY2hpbGROb2RlcywgcmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID0gcmVwbGFjZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGxDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjbGVhcihjaGlsZE5vZGVzKTtcblxuICBwdXNoKGNoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kUmVwZWF0ZWROb25UZXJtaW5hbE5vZGVzKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZFJlcGVhdGVkTm9uVGVybWluYWxOb2RlcyhjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZXBlYXRlZE5vblRlcm1pbmFsTm9kZXMoY2hpbGROb2RlcywgY2FsbGJhY2spIHtcbiAgY29uc3QgcmVwZWF0ZWROb25UZXJtaW5hbE5vZGVzID0gW10sXG4gICAgICAgIGxhc3RJbmRleCA9IGNoaWxkTm9kZXMuZmluZExhc3RJbmRleChjYWxsYmFjayk7XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gbnVsbCkge1xuICAgIGxldCBydWxlTmFtZSA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVSZXBlYXRlZE5vblRlcm1pbmFsTm9kZSA9IGNhbGxiYWNrKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlUmVwZWF0ZWROb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcGVhdGVkTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICByZXBlYXRlZE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHJ1bGVOYW1lID0gcmVwZWF0ZWROb25UZXJtaW5hbE5vZGVSdWxlTmFtZTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVwZWF0ZWROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSAhPT0gcnVsZU5hbWUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXBlYXRlZE5vblRlcm1pbmFsTm9kZXMudW5zaGlmdChyZXBlYXRlZE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcGVhdGVkTm9uVGVybWluYWxOb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInB1c2giLCJjbGVhciIsImZpbHRlciIsImJhY2t3YXJkc1NvbWUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCIsImdldENoaWxkTm9kZXMiLCJmaW5kSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJsZW5ndGgiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwicnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZnJvbnRDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJld3JpdGVQcmVjZWRlbmNlIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImZvckVhY2giLCJkaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlUmVkdWNlZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicGFyZW50Tm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicGFyZW50UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkTm9kZUNoaWxkTm9kZXMiLCJmcm9tUmVkdWNlZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXBsYWNlZENoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImZpbmRSZXBlYXRlZE5vblRlcm1pbmFsTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJjYWxsYmFjayIsInJlcGVhdGVkTm9uVGVybWluYWxOb2RlcyIsImxhc3RJbmRleCIsImZpbmRMYXN0SW5kZXgiLCJjaGlsZE5vZGVSZXBlYXRlZE5vblRlcm1pbmFsTm9kZSIsInJlcGVhdGVkTm9uVGVybWluYWxOb2RlIiwicmVwZWF0ZWROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsOEJBQThCO2VBQTlCQTs7SUF1RUFDLDRCQUE0QjtlQUE1QkE7O0lBNEJBQyxtQkFBbUI7ZUFB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