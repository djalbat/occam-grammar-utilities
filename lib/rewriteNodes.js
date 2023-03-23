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
var _occamParsers = require("occam-parsers");
var _rewritten = /*#__PURE__*/ _interopRequireDefault(require("./node/rewritten"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced/directly"));
var _directly1 = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated/directly"));
var _implicitly = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced/implicitly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated/indirectly"));
var _array = require("./utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
        var childNodeEpsilonNode = _instanceof(childNode, _occamParsers.EpsilonNode);
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
        ].concat(_toConsumableArray(nonTerminalNodeChildNodes)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgSW1wbGljaXRseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbXBsaWNpdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZmlyc3QsIGxhc3QsIGZpbHRlciwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkgeyAgLy8vXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcblxuICByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJlbW92ZUludGVybWVkaWFyaWVzKG5vblRlcm1pbmFsTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGUobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlRGlyZWN0UmVwZXRpdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVEaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbnMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRlcm1lZGlhcmllcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2RlcyA9IFtdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBzaW5ndWxhck5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2Rlcy5wdXNoKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlOyAvLy9cbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgYmFja3dhcmRzU29tZShzaW5ndWxhck5vblRlcm1pbmFsTm9kZXMsIChzaW5ndWxhck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICBub25UZXJtaW5hbE5vZGUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlSW50ZXJtZWRpYXJpZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGlyZWN0UmVkdWN0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZXMuZmluZCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlZHVjZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihkaXJlY3RseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVEaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3QoZGlyZWN0bHlSZXBlYXRlZE5vZGVzKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4ICsgMSxcbiAgICAgICAgICByZXBlYXRlZE5vZGUgPSBsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgZGVsZXRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gcmV3cml0dGVuTm9kZTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7IC8vL1xuXG4gICAgZGVsZXRlZENoaWxkTm9kZXMucG9wKCk7XG5cbiAgICB1bnNoaWZ0KGNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbmRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJlZHVjZWROb2RlID0gaW5kaXJlY3RseVJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbXBsaWNpdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbXBsaWNpdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbXBsaWNpdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21JbXBsaWNpdGx5UmVkdWNlZE5vZGUoaW1wbGljaXRseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgIGxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGxhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICBpZiAobGFzdENoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAvLyBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgIC8vICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuZmluZCgoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pIHx8IG51bGw7XG4gICAgLy9cbiAgICAvLyBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAvLyAgIGxldCBpbmRleCA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzLmluZGV4T2YoZGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgIC8vICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAvLyAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5O1xuICAgIC8vXG4gICAgLy8gICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAvL1xuICAgIC8vICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuICAgIC8vXG4gICAgLy8gICBkZWxldGVDb3VudCA9IDA7XG4gICAgLy9cbiAgICAvLyAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uZGlyZWN0bHlSZXBlYXRlZE5vZGVzKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZXBlYXRlZE5vZGUocmVwZWF0ZWROb2RlKTtcblxuICAgIGxldCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSxcbiAgICAgIHN0YXJ0ID0gaW5kZXgsICAvL1xuICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcblxuICAgIHN0YXJ0ID0gMDtcblxuICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICAgIGNvbnN0IGRlbGV0ZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgcmV3cml0dGVuTm9kZUNoaWxkTm9kZXMgPSByZXdyaXR0ZW5Ob2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIHVuc2hpZnQocmV3cml0dGVuTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZUNoaWxkTm9kZXMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGVzIiwibm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJld3JpdGUiLCJyZW1vdmVFcHNpbG9ucyIsInJlbW92ZUludGVybWVkaWFyaWVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyZXdyaXRlSW5kaXJlY3RSZXBldGl0aW9uIiwicmV3cml0ZURpcmVjdFJlcGV0aXRpb24iLCJyZXdyaXRlRGlyZWN0UmVkdWN0aW9uIiwicmV3cml0ZUluZGlyZWN0UmVkdWN0aW9uIiwicmV3cml0ZUltcGxpY2l0UmVkdWN0aW9uIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiZmlsdGVyIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZSIsInB1c2giLCJiYWNrd2FyZHNTb21lIiwic2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImZpbmQiLCJjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlIiwiRGlyZWN0bHlSZWR1Y2VkTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInJlZHVjZWROb2RlIiwicmV3cml0dGVuTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUmVkdWNlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwibGFzdERpcmVjdGx5UmVwZWF0ZWROb2RlIiwibGFzdCIsInJlcGVhdGVkTm9kZSIsImZyb21SZXBlYXRlZE5vZGUiLCJkZWxldGVkQ2hpbGROb2RlcyIsInBvcCIsInVuc2hpZnQiLCJpbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJJbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJpbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJjaGlsZE5vZGVJbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJJbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJmcm9tSW1wbGljaXRseVJlZHVjZWROb2RlIiwibGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkZWxldGVDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NEJBVkk7OERBQ0Y7NkRBQ007OERBQ0M7K0RBQ0M7K0RBQ0E7Z0VBQ0M7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxTQUFTQSxhQUFhQyxJQUFJLEVBQUU7SUFDekMsSUFBTUMsa0JBQWtCRCxNQUFNLEdBQUc7SUFFakNFLFFBQVFEO0lBRVJFLGVBQWVGO0lBRWZHLHFCQUFxQkg7QUFDdkI7QUFFQSxTQUFTQyxRQUFRRCxlQUFlLEVBQUU7SUFDaEMsSUFBTUksYUFBYUosZ0JBQWdCSyxhQUFhO0lBRWhEQywwQkFBMEJOO0lBRTFCTyx3QkFBd0JQO0lBRXhCUSx1QkFBdUJSO0lBRXZCUyx5QkFBeUJUO0lBRXpCVSx5QkFBeUJWO0lBRXpCSSxXQUFXTyxPQUFPLENBQUMsU0FBQ0MsV0FBYztRQUNoQyxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTWIsb0JBQWtCWSxXQUFZLEdBQUc7WUFFdkNYLFFBQVFEO1FBQ1YsQ0FBQztJQUNIO0FBQ0Y7QUFFQSxTQUFTRSxlQUFlRixlQUFlLEVBQUU7SUFDdkMsSUFBTUksYUFBYUosZ0JBQWdCSyxhQUFhO0lBRWhEVSxJQUFBQSxhQUFNLEVBQUNYLFlBQVksU0FBQ1EsV0FBYztRQUNoQyxJQUFNSSx1QkFBd0JKLEFBQVMsWUFBVEEsV0FBcUJLLHlCQUFXO1FBRTlELElBQUksQ0FBQ0Qsc0JBQXNCO1lBQ3pCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFD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