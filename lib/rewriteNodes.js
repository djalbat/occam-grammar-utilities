"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rewriteNodes;
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
function rewriteNodes(node) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuTm9kZSBmcm9tIFwiLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZnJvbnQsIGZpcnN0LCBsYXN0LCBwdXNoLCBmaWx0ZXIsIHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkgeyAgLy8vXG4gIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9kZSk7XG5cbiAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGxhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICBpZiAobGFzdENoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgZnJvbnRDaGlsZE5vZGVzKSwgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICByZXdyaXR0ZW5Ob2RlLFxuICAgICAgICAgICAgLi4uaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kRGlyZWN0bHlSZXBlYXRlZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlKSxcbiAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdO1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmZvckVhY2goKGRpcmVjdGx5UmVwZWF0ZWROb2RlcykgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHVuc2hpZnQocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZXNDaGlsZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIHJlcGxhY2VDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVkdWNlZE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHBhcmVudE5vZGVSdWxlTmFtZSA9IHBhcmVudE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50UnVsZU5hbWUgPSBwYXJlbnROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtdOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlQ2hpbGROb2RlcyA9IHJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudENoaWxkTm9kZXMsIHJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSk7XG5cbiAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2Rlcy5wdXNoKHJld3JpdHRlbk5vZGUpO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmV3cml0ZVJlZHVjZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRXBzaWxvbk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvbk5vZGUpO1xuXG4gICAgaWYgKCFjaGlsZE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gZmluZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGxhc3RSZXBsYWNlZENoaWxkTm9kZSA9IGxhc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0SW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoZmlyc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIGxhc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IGxhc3RJbmRleCAtIGZpcnN0SW5kZXggKyAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2spIHtcbiAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5maW5kSW5kZXgoY2FsbGJhY2spO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjaGlsZE5vZGVzID0gW107XG4gIH0gZWxzZSB7XG4gICAgbGV0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZW5kO1xuXG4gICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc2xpY2Uoc3RhcnQpO1xuXG4gICAgY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soY2hpbGROb2RlKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBlbmQgPSBpbmRleCArIDE7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFydCA9IDA7XG5cbiAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zbGljZShzdGFydCwgZW5kKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlcyIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwidW5zaGlmdCIsIm5vZGUiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsInBhcmVudE5vZGUiLCJmcm9udENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsImZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2RlcyIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJwYXJlbnROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJwYXJlbnRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJlZHVjZWROb2RlQ2hpbGROb2RlcyIsImZyb21SZWR1Y2VkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwiZmluZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5Iiwic3BsaWNlIiwibGFzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwibGFzdEluZGV4IiwiaW5kZXgiLCJjYWxsYmFjayIsImZpbmRJbmRleCIsImVuZCIsInNsaWNlIiwiZXZlcnkiLCJwYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7NEJBWkk7eUJBQ0c7OERBRVA7Z0VBQ0U7K0RBQ087aUVBQ0U7d0JBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxRQUE4Q0MseUJBQWMsQ0FBNURELE9BQU9FLFFBQXVDRCx5QkFBYyxDQUFyREMsT0FBT0MsT0FBZ0NGLHlCQUFjLENBQTlDRSxN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