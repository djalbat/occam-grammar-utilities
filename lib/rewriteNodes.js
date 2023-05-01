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
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./node/rewritten"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./node/reduced/directly"));
var _directly1 = /*#__PURE__*/ _interop_require_default(require("./node/repeated/directly"));
var _implicitly = /*#__PURE__*/ _interop_require_default(require("./node/reduced/implicitly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interop_require_default(require("./node/repeated/indirectly"));
var _array = require("./utilities/array");
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
function rewriteNodes(node) {
    var nonTerminalNode = node; ///
    rewrite(nonTerminalNode);
    removeEpsilons(nonTerminalNode);
    removeIntermediaries(nonTerminalNode);
}
function rewrite(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    rewriteIndirectRepetition(nonTerminalNode);
    rewriteDirectRepetition(nonTerminalNode);
    rewriteDirectReduction(nonTerminalNode);
    rewriteIndirectReduction(nonTerminalNode);
    rewriteImplicitReduction(nonTerminalNode);
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var _$nonTerminalNode = childNode; ///
            rewrite(_$nonTerminalNode);
        }
    });
}
function removeEpsilons(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    (0, _array.filter)(childNodes, function(childNode) {
        var childNodeEpsilonNode = _instanceof(childNode, _occamparsers.EpsilonNode);
        if (!childNodeEpsilonNode) {
            return true;
        }
    });
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var _$nonTerminalNode = childNode; ///
            removeEpsilons(_$nonTerminalNode);
        }
    });
}
function removeIntermediaries(nonTerminalNode) {
    var ruleName = nonTerminalNode.getRuleName(), childNodes = nonTerminalNode.getChildNodes(), singularNonTerminalNodes = [];
    for(;;){
        var childNodes1 = nonTerminalNode.getChildNodes(), childNodesLength = childNodes1.length;
        if (childNodesLength > 1) {
            break;
        }
        var firstChildNode = (0, _array.first)(childNodes1), firstChildNodeTerminalNode = firstChildNode.isTerminalNode();
        if (firstChildNodeTerminalNode) {
            break;
        }
        var singularNonTerminalNode = firstChildNode; ///
        singularNonTerminalNodes.push(singularNonTerminalNode);
        nonTerminalNode = singularNonTerminalNode; ///
    }
    nonTerminalNode = null;
    (0, _array.backwardsSome)(singularNonTerminalNodes, function(singularNonTerminalNode) {
        var singularNonTerminalNodeRuleName = singularNonTerminalNode.getRuleName();
        if (singularNonTerminalNodeRuleName === ruleName) {
            nonTerminalNode = singularNonTerminalNode; ///
            return true;
        }
    });
    if (nonTerminalNode !== null) {
        var _childNodes;
        var nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(), start = 0, deleteCount = 1;
        (_childNodes = childNodes).splice.apply(_childNodes, [
            start,
            deleteCount
        ].concat(_to_consumable_array(nonTerminalNodeChildNodes)));
    }
    childNodes.forEach(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var _$nonTerminalNode = childNode; ///
            removeIntermediaries(_$nonTerminalNode);
        }
    });
}
function rewriteDirectReduction(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), directlyReducedNode = childNodes.find(function(childNode) {
        var childNodeDirectlyReducedNode = _instanceof(childNode, _directly.default);
        if (childNodeDirectlyReducedNode) {
            return true;
        }
    }) || null;
    if (directlyReducedNode !== null) {
        var index = childNodes.indexOf(directlyReducedNode), reducedNode = directlyReducedNode, rewrittenNode = _rewritten.default.fromReducedNode(reducedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
    }
}
function rewriteDirectRepetition(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    var directlyRepeatedNodes = childNodes.filter(function(childNode) {
        var childNodeDirectlyRepeatedNode = _instanceof(childNode, _directly1.default);
        if (childNodeDirectlyRepeatedNode) {
            return true;
        }
    }), directlyRepeatedNodesLength = directlyRepeatedNodes.length;
    if (directlyRepeatedNodesLength > 0) {
        var lastDirectlyRepeatedNode = (0, _array.last)(directlyRepeatedNodes), index = childNodes.indexOf(lastDirectlyRepeatedNode), start = 0, deleteCount = index + 1, repeatedNode = lastDirectlyRepeatedNode, rewrittenNode = _rewritten.default.fromRepeatedNode(repeatedNode), deletedChildNodes = childNodes.splice(start, deleteCount, rewrittenNode);
        nonTerminalNode = rewrittenNode; ///
        childNodes = nonTerminalNode.getChildNodes(); ///
        deletedChildNodes.pop();
        (0, _array.unshift)(childNodes, deletedChildNodes);
    }
}
function rewriteIndirectReduction(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyReducedNode = childNodes.find(function(childNode) {
        var childNodeIndirectlyReducedNode = _instanceof(childNode, _indirectly.default);
        if (childNodeIndirectlyReducedNode) {
            return true;
        }
    }) || null;
    if (indirectlyReducedNode !== null) {
        var index = childNodes.indexOf(indirectlyReducedNode), reducedNode = indirectlyReducedNode, rewrittenNode = _rewritten.default.fromReducedNode(reducedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
    }
}
function rewriteImplicitReduction(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), implicitlyReducedNode = childNodes.find(function(childNode) {
        var childNodeImplicitlyReducedNode = _instanceof(childNode, _implicitly.default);
        if (childNodeImplicitlyReducedNode) {
            return true;
        }
    }) || null;
    if (implicitlyReducedNode !== null) {
        var index = childNodes.indexOf(implicitlyReducedNode), rewrittenNode = _rewritten.default.fromImplicitlyReducedNode(implicitlyReducedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
    }
}
function rewriteIndirectRepetition(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), lastChildNode = (0, _array.last)(childNodes), lastChildNodeIndirectlyRepeatedNode = _instanceof(lastChildNode, _indirectly1.default);
    if (lastChildNodeIndirectlyRepeatedNode) {
        // const indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
        //       directlyRepeatedNode = indirectlyRepeatedNodeChildNodes.find((indirectlyRepeatedNodeChildNode) => {
        //     const indirectlyRepeatedNodeChildNodeDirectlyRepeatedNode = (indirectlyRepeatedNodeChildNode instanceof DirectlyRepeatedNode);
        //
        //     if (indirectlyRepeatedNodeChildNodeDirectlyRepeatedNode) {
        //       return true;
        //     }
        //   }) || null;
        //
        // if (directlyRepeatedNode !== null) {
        //   let index = indirectlyRepeatedNodeChildNodes.indexOf(directlyRepeatedNode),
        //       start = index,  ///
        //       deleteCount = Infinity;
        //
        //   const directlyRepeatedNodes = indirectlyRepeatedNodeChildNodes.splice(start, deleteCount);
        //
        //   index = childNodes.indexOf(indirectlyRepeatedNode);
        //
        //   start = index + 1;
        //
        //   deleteCount = 0;
        //
        //   childNodes.splice(start, deleteCount, ...directlyRepeatedNodes);
        // }
        var indirectlyRepeatedNode = lastChildNode, repeatedNode = indirectlyRepeatedNode, rewrittenNode = _rewritten.default.fromRepeatedNode(repeatedNode);
        var index = childNodes.indexOf(indirectlyRepeatedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
        start = 0;
        deleteCount = index; ///
        var deleteChildNodes = childNodes.splice(start, deleteCount), rewrittenNodeChildNodes = rewrittenNode.getChildNodes();
        (0, _array.unshift)(rewrittenNodeChildNodes, deleteChildNodes);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgSW1wbGljaXRseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbXBsaWNpdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZmlyc3QsIGxhc3QsIGZpbHRlciwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkgeyAgLy8vXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcblxuICByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJlbW92ZUludGVybWVkaWFyaWVzKG5vblRlcm1pbmFsTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGUobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlRGlyZWN0UmVwZXRpdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVEaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbnMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRlcm1lZGlhcmllcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2RlcyA9IFtdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBzaW5ndWxhck5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2Rlcy5wdXNoKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlOyAvLy9cbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgYmFja3dhcmRzU29tZShzaW5ndWxhck5vblRlcm1pbmFsTm9kZXMsIChzaW5ndWxhck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICBub25UZXJtaW5hbE5vZGUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlSW50ZXJtZWRpYXJpZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGlyZWN0UmVkdWN0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZXMuZmluZCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlZHVjZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihkaXJlY3RseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVEaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3QoZGlyZWN0bHlSZXBlYXRlZE5vZGVzKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4ICsgMSxcbiAgICAgICAgICByZXBlYXRlZE5vZGUgPSBsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgZGVsZXRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gcmV3cml0dGVuTm9kZTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7IC8vL1xuXG4gICAgZGVsZXRlZENoaWxkTm9kZXMucG9wKCk7XG5cbiAgICB1bnNoaWZ0KGNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbmRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJlZHVjZWROb2RlID0gaW5kaXJlY3RseVJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbXBsaWNpdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbXBsaWNpdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbXBsaWNpdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21JbXBsaWNpdGx5UmVkdWNlZE5vZGUoaW1wbGljaXRseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGxhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICBpZiAobGFzdENoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAvLyBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgIC8vICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuZmluZCgoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pIHx8IG51bGw7XG4gICAgLy9cbiAgICAvLyBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAvLyAgIGxldCBpbmRleCA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzLmluZGV4T2YoZGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgIC8vICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAvLyAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5O1xuICAgIC8vXG4gICAgLy8gICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAvL1xuICAgIC8vICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuICAgIC8vXG4gICAgLy8gICBkZWxldGVDb3VudCA9IDA7XG4gICAgLy9cbiAgICAvLyAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uZGlyZWN0bHlSZXBlYXRlZE5vZGVzKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZXBlYXRlZE5vZGUocmVwZWF0ZWROb2RlKTtcblxuICAgIGxldCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmV3cml0dGVuTm9kZSk7XG5cbiAgICBzdGFydCA9IDA7XG5cbiAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgICBjb25zdCBkZWxldGVDaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcyA9IHJld3JpdHRlbk5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgdW5zaGlmdChyZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcywgZGVsZXRlQ2hpbGROb2Rlcyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJub2RlIiwibm9uVGVybWluYWxOb2RlIiwicmV3cml0ZSIsInJlbW92ZUVwc2lsb25zIiwicmVtb3ZlSW50ZXJtZWRpYXJpZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24iLCJyZXdyaXRlRGlyZWN0UmVwZXRpdGlvbiIsInJld3JpdGVEaXJlY3RSZWR1Y3Rpb24iLCJyZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24iLCJyZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmaWx0ZXIiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInNpbmd1bGFyTm9uVGVybWluYWxOb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNpbmd1bGFyTm9uVGVybWluYWxOb2RlIiwicHVzaCIsImJhY2t3YXJkc1NvbWUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkaXJlY3RseVJlZHVjZWROb2RlIiwiZmluZCIsImNoaWxkTm9kZURpcmVjdGx5UmVkdWNlZE5vZGUiLCJEaXJlY3RseVJlZHVjZWROb2RlIiwiaW5kZXgiLCJpbmRleE9mIiwicmVkdWNlZE5vZGUiLCJyZXdyaXR0ZW5Ob2RlIiwiUmV3cml0dGVuTm9kZSIsImZyb21SZWR1Y2VkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsImNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlIiwiRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJsYXN0IiwicmVwZWF0ZWROb2RlIiwiZnJvbVJlcGVhdGVkTm9kZSIsImRlbGV0ZWRDaGlsZE5vZGVzIiwicG9wIiwidW5zaGlmdCIsImluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsIkluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsIkltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImZyb21JbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJsYXN0Q2hpbGROb2RlIiwibGFzdENoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImRlbGV0ZUNoaWxkTm9kZXMiLCJyZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozs0QkFWSTtnRUFDRjsrREFDTTtnRUFDQztpRUFDQztpRUFDQTtrRUFDQztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLFNBQVNBLGFBQWFDLElBQUksRUFBRTtJQUN6QyxJQUFNQyxrQkFBa0JELE1BQU0sR0FBRztJQUVqQ0UsUUFBUUQ7SUFFUkUsZUFBZUY7SUFFZkcscUJBQXFCSDtBQUN2QjtBQUVBLFNBQVNDLFFBQVFELGVBQWUsRUFBRTtJQUNoQyxJQUFNSSxhQUFhSixnQkFBZ0JLLGFBQWE7SUFFaERDLDBCQUEwQk47SUFFMUJPLHdCQUF3QlA7SUFFeEJRLHVCQUF1QlI7SUFFdkJTLHlCQUF5QlQ7SUFFekJVLHlCQUF5QlY7SUFFekJJLFdBQVdPLE9BQU8sQ0FBQyxTQUFDQyxXQUFjO1FBQ2hDLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNYixvQkFBa0JZLFdBQVksR0FBRztZQUV2Q1gsUUFBUUQ7UUFDVixDQUFDO0lBQ0g7QUFDRjtBQUVBLFNBQVNFLGVBQWVGLGVBQWUsRUFBRTtJQUN2QyxJQUFNSSxhQUFhSixnQkFBZ0JLLGFBQWE7SUFFaERVLElBQUFBLGFBQU0sRUFBQ1gsWUFBWSxTQUFDUSxXQUFjO1FBQ2hDLElBQU1JLHVCQUF3QkosQUFBUyxZQUFUQSxXQUFxQksseUJBQVc7UUFFOUQsSUFBSSxDQUFDRCxzQkFBc0I7WUFDekIsT0FBTyxJQUFJO1FBQ2Is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