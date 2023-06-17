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
    default: function() {
        return rewriteNodes;
    },
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
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift, find = _necessary.arrayUtilities.find, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function rewriteNodes(node) {
// rewriteDirectlyRepeatedNodes(node);
// rewriteIndirectlyRepeatedNodes(node);
// rewriteReducedNodes(node);
// removeEpsilonNodes(node);
}
function rewriteIndirectlyRepeatedNodes(node) {
    var recursively = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
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
    if (recursively) {
        var childNodes1 = nonTerminalNode.getChildNodes();
        childNodes1.forEach(function(childNode) {
            var _$node = childNode; ///
            rewriteIndirectlyRepeatedNodes(_$node);
        });
    }
    return parentNode;
}
function rewriteDirectlyRepeatedNodes(node) {
    var recursively = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
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
    if (recursively) {
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rewriteDirectlyRepeatedNodes(_$node);
        });
    }
}
function rewriteReducedNodes(node) {
    var recursively = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
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
    if (recursively) {
        var childNodes1 = nonTerminalNode.getChildNodes();
        childNodes1.forEach(function(childNode) {
            var _$node = childNode; ///
            rewriteReducedNodes(_$node);
        });
    }
}
function removeEpsilonNodes(node) {
    var recursively = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
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
    if (recursively) {
        var childNodes1 = nonTerminalNode.getChildNodes();
        childNodes1.forEach(function(childNode) {
            var _$node = childNode; ///
            removeEpsilonNodes(_$node);
        });
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmV3cml0dGVuTm9kZSBmcm9tIFwiLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZnJvbnQsIGZpcnN0LCBsYXN0LCBwdXNoLCBmaWx0ZXIsIHVuc2hpZnQsIGZpbmQsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkgeyAgLy8vXG4gIC8vIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgLy8gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIC8vIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9kZSk7XG5cbiAgLy8gcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV3cml0ZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUsIHJlY3Vyc2l2ZWx5ID0gdHJ1ZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgbGV0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gIGJhY2t3YXJkc1NvbWUoaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMsIChpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGZyb250Q2hpbGROb2RlcyksIC8vL1xuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgcmV3cml0dGVuTm9kZSxcbiAgICAgICAgICAgIC4uLmluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICBwYXJlbnROb2RlID0gcmV3cml0dGVuTm9kZTsgLy8vXG4gIH0pO1xuXG4gIC8vIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAvLyAgICAgICBsYXN0Q2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSA9IChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgLy8gaWYgKGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gIC8vICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gIC8vICAgICAgICAgZnJvbnRDaGlsZE5vZGVzID0gZnJvbnQoY2hpbGROb2RlcyksXG4gIC8vICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAvLyAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgLy8gICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAvLyAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpLFxuICAvLyAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGZyb250Q2hpbGROb2RlcyksIC8vL1xuICAvLyAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gIC8vICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW1xuICAvLyAgICAgICAgICAgcmV3cml0dGVuTm9kZSxcbiAgLy8gICAgICAgICAgIC4uLmluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzXG4gIC8vICAgICAgICAgXTtcbiAgLy9cbiAgLy8gICByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICAvL1xuICAvLyAgIGNvdW50ZXIrKztcbiAgLy8gfVxuXG4gIGlmIChyZWN1cnNpdmVseSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJld3JpdGVEaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSwgcmVjdXJzaXZlbHkgPSB0cnVlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgLy8gbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAvLyAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSksXG4gIC8vICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUpLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGVzID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXTtcblxuICAgIGRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChkaXJlY3RseVJlcGVhdGVkTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2Rlc0NoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICB1bnNoaWZ0KHJlcGxhY2VtZW50Q2hpbGROb2RlcywgZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2Rlcyk7XG4gICAgfSk7XG5cbiAgICByZXBsYWNlQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG5cbiAgICAvLyBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcbiAgICAvL1xuICAgIC8vIGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGZpbmREaXJlY3RseVJlcGVhdGVkQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIC8vXG4gICAgLy8gZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChyZWN1cnNpdmVseSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUsIHJlY3Vyc2l2ZWx5ID0gdHJ1ZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlID0gKGZpcnN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gIGlmIChmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSByZWR1Y2VkTm9kZSwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcGFyZW50Tm9kZVJ1bGVOYW1lID0gcGFyZW50Tm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnRSdWxlTmFtZSA9IHBhcmVudE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gW107IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBwYXJlbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcmVkdWNlZE5vZGVDaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBwdXNoKHJlcGxhY2VtZW50Q2hpbGROb2RlcywgcmVkdWNlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKTtcblxuICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzLnB1c2gocmV3cml0dGVuTm9kZSk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGlmIChyZWN1cnNpdmVseSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSwgcmVjdXJzaXZlbHkgPSB0cnVlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlRXBzaWxvbk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvbk5vZGUpO1xuXG4gICAgaWYgKCFjaGlsZE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAocmVjdXJzaXZlbHkpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gZmluZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaW5kRGlyZWN0bHlSZXBlYXRlZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBmaW5kQ2hpbGROb2Rlcyhub25UZXJtaW5hbE5vZGUsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlcywgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGFzdFJlcGxhY2VkQ2hpbGROb2RlID0gbGFzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVwbGFjZWRDaGlsZE5vZGVzKSxcbiAgICAgICAgZmlyc3RJbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgbGFzdEluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGxhc3RSZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gbGFzdEluZGV4IC0gZmlyc3RJbmRleCArIDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihyZXBsYWNlZENoaWxkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkTm9kZXMobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaykge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2RlcyA9IGZpbmQoY2hpbGROb2RlcywgY2FsbGJhY2spO1xuXG4gIC8vIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5maW5kSW5kZXgoY2FsbGJhY2spO1xuICAvL1xuICAvLyBpZiAoaW5kZXggPT09IC0xKSB7XG4gIC8vICAgY2hpbGROb2RlcyA9IFtdO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGxldCBzdGFydCA9IGluZGV4LCAgLy8vXG4gIC8vICAgICAgIGVuZDtcbiAgLy9cbiAgLy8gICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zbGljZShzdGFydCk7XG4gIC8vXG4gIC8vICAgY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAvLyAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soY2hpbGROb2RlKTtcbiAgLy9cbiAgLy8gICAgIGlmIChwYXNzZWQpIHtcbiAgLy8gICAgICAgZW5kID0gaW5kZXggKyAxO1xuICAvL1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBzdGFydCA9IDA7XG4gIC8vXG4gIC8vICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIC8vIH1cblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJyZXdyaXRlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZXdyaXRlRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmV3cml0ZVJlZHVjZWROb2RlcyIsInJlbW92ZUVwc2lsb25Ob2RlcyIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwidW5zaGlmdCIsImZpbmQiLCJiYWNrd2FyZHNTb21lIiwibm9kZSIsInJlY3Vyc2l2ZWx5Iiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImZpbmRJbmRpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJmcm9udENoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUFsbENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiZmluZERpcmVjdGx5UmVwZWF0ZWRDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVwbGFjZWRDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsInBhcmVudE5vZGVSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInBhcmVudFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwiZnJvbVJlZHVjZWROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJmaW5kQ2hpbGROb2RlcyIsImNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsInNwbGljZSIsImxhc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsImxhc3RJbmRleCIsImluZGV4IiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNBLE9BUUM7ZUFSdUJBOztJQVVSQyw4QkFBOEI7ZUFBOUJBOztJQW1FQUMsNEJBQTRCO2VBQTVCQTs7SUErQ0FDLG1CQUFtQjtlQUFuQkE7O0lBaURBQyxrQkFBa0I7ZUFBbEJBOzs7NEJBekxZO3lCQUNHOzhEQUVQO2dFQUNFOytEQUNPO2lFQUNFO3dCQUVpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsUUFBbUVDLDBCQUFuRUQsT0FBT0UsUUFBNERELDBCQUE1REMsT0FBT0MsT0FBcURGLDBCQUFyREUsTUFBTUMsT0FBK0NILDBCQUEvQ0csTUFBTUMsU0FBeUNKLDBCQUF6Q0ksUUFBUUMsVUFBaUNMLDBCQUFqQ0ssU0FBU0MsT0FBd0JOLDBCQUF4Qk0sTUFBTUMsZ0JBQWtCUCwwQkFBbEJPO0FBRTFDLFNBQVNiLGFBQWFjLElBQUk7QUFDdkMsc0NBQXNDO0FBRXRDLHdDQUF3QztBQUV4Qyw2QkFBNkI7QUFFN0IsNEJBQTRCO0FBQzlCO0FBRU8sU0FBU2IsK0JBQStCYSxJQUFJO1FBQUVDLGNBQUFBLGlFQUFjO0lBQ2pFLElBQU1DLHNCQUFzQkYsS0FBS0c7SUFFakMsSUFBSSxDQUFDRCxxQkFBcUI7UUFDeEI7SUFDRjtJQUVBLElBQU1FLGtCQUFrQkosTUFDbEJLLGFBQWFELGdCQUFnQkU7SUFFbkMsSUFBTUMsMEJB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