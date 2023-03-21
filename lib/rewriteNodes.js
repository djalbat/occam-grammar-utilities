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
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNodes = (0, _array.find)(childNodes, function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly1.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    }) || null;
    indirectlyRepeatedNodes.forEach(function(indirectlyRepeatedNode, count) {
        if (count > 0) {
            return;
        }
        var indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), directlyRepeatedNode = indirectlyRepeatedNodeChildNodes.find(function(indirectlyRepeatedNodeChildNode) {
            var indirectlyRepeatedNodeChildNodeDirectlyRepeatedNode = _instanceof(indirectlyRepeatedNodeChildNode, _directly1.default);
            if (indirectlyRepeatedNodeChildNodeDirectlyRepeatedNode) {
                return true;
            }
        }) || null;
        if (directlyRepeatedNode !== null) {
            var _childNodes;
            var index = indirectlyRepeatedNodeChildNodes.indexOf(directlyRepeatedNode), start = index, deleteCount = Infinity;
            var directlyRepeatedNodes = indirectlyRepeatedNodeChildNodes.splice(start, deleteCount);
            index = childNodes.indexOf(indirectlyRepeatedNode);
            start = index + 1;
            deleteCount = 0;
            (_childNodes = childNodes).splice.apply(_childNodes, [
                start,
                deleteCount
            ].concat(_toConsumableArray(directlyRepeatedNodes)));
        }
        var rewrittenNode = _rewritten.default.fromIndirectlyRepeatedNode(indirectlyRepeatedNode);
        var index1 = childNodes.indexOf(indirectlyRepeatedNode), start1 = index1, deleteCount1 = 1;
        childNodes.splice(start1, deleteCount1, rewrittenNode);
        start1 = 0;
        deleteCount1 = index1; ///
        var deleteChildNodes = childNodes.splice(start1, deleteCount1), rewrittenNodeChildNodes = rewrittenNode.getChildNodes();
        (0, _array.unshift)(rewrittenNodeChildNodes, deleteChildNodes);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuL25vZGUvcmV3cml0dGVuXCI7XG5pbXBvcnQgRGlyZWN0bHlSZWR1Y2VkTm9kZSBmcm9tIFwiLi9ub2RlL3JlZHVjZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgSW1wbGljaXRseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbXBsaWNpdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgZmlyc3QsIGxhc3QsIGZpbmQsIGZpbHRlciwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkgeyAgLy8vXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcblxuICByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJlbW92ZUludGVybWVkaWFyaWVzKG5vblRlcm1pbmFsTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGUobm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlRGlyZWN0UmVwZXRpdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVEaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHJld3JpdGUobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICBpZiAoIWNoaWxkTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlRXBzaWxvbnMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRlcm1lZGlhcmllcyhub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2RlcyA9IFtdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBzaW5ndWxhck5vblRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAvLy9cblxuICAgIHNpbmd1bGFyTm9uVGVybWluYWxOb2Rlcy5wdXNoKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlOyAvLy9cbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgYmFja3dhcmRzU29tZShzaW5ndWxhck5vblRlcm1pbmFsTm9kZXMsIChzaW5ndWxhck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgIGNvbnN0IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICBub25UZXJtaW5hbE5vZGUgPSBzaW5ndWxhck5vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmVtb3ZlSW50ZXJtZWRpYXJpZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGlyZWN0UmVkdWN0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZXMuZmluZCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlZHVjZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihkaXJlY3RseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICByZWR1Y2VkTm9kZSA9IGRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVEaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gY2hpbGROb2Rlcy5maWx0ZXIoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3QoZGlyZWN0bHlSZXBlYXRlZE5vZGVzKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4ICsgMSxcbiAgICAgICAgICByZXBlYXRlZE5vZGUgPSBsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgZGVsZXRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gcmV3cml0dGVuTm9kZTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7IC8vL1xuXG4gICAgZGVsZXRlZENoaWxkTm9kZXMucG9wKCk7XG5cbiAgICB1bnNoaWZ0KGNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbmRpcmVjdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJlZHVjZWROb2RlID0gaW5kaXJlY3RseVJlZHVjZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbVJlZHVjZWROb2RlKHJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW1wbGljaXRSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbXBsaWNpdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbXBsaWNpdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUltcGxpY2l0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChpbXBsaWNpdGx5UmVkdWNlZE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbXBsaWNpdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21JbXBsaWNpdGx5UmVkdWNlZE5vZGUoaW1wbGljaXRseVJlZHVjZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBmaW5kKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcy5mb3JFYWNoKChpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCBjb3VudCkgPT4ge1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuZmluZCgoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGluZGV4ID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuaW5kZXhPZihkaXJlY3RseVJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5kaXJlY3RseVJlcGVhdGVkTm9kZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21JbmRpcmVjdGx5UmVwZWF0ZWROb2RlKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgbGV0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcblxuICAgIHN0YXJ0ID0gMDtcblxuICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICAgIGNvbnN0IGRlbGV0ZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGVDaGlsZE5vZGVzID0gcmV3cml0dGVuTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICB1bnNoaWZ0KHJld3JpdHRlbk5vZGVDaGlsZE5vZGVzLCBkZWxldGVDaGlsZE5vZGVzKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGVzIiwibm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJld3JpdGUiLCJyZW1vdmVFcHNpbG9ucyIsInJlbW92ZUludGVybWVkaWFyaWVzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyZXdyaXRlSW5kaXJlY3RSZXBldGl0aW9uIiwicmV3cml0ZURpcmVjdFJlcGV0aXRpb24iLCJyZXdyaXRlRGlyZWN0UmVkdWN0aW9uIiwicmV3cml0ZUluZGlyZWN0UmVkdWN0aW9uIiwicmV3cml0ZUltcGxpY2l0UmVkdWN0aW9uIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiZmlsdGVyIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsImZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZSIsInB1c2giLCJiYWNrd2FyZHNTb21lIiwic2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImZpbmQiLCJjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlIiwiRGlyZWN0bHlSZWR1Y2VkTm9kZSIsImluZGV4IiwiaW5kZXhPZiIsInJlZHVjZWROb2RlIiwicmV3cml0dGVuTm9kZSIsIlJld3JpdHRlbk5vZGUiLCJmcm9tUmVkdWNlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJjaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoIiwibGFzdERpcmVjdGx5UmVwZWF0ZWROb2RlIiwibGFzdCIsInJlcGVhdGVkTm9kZSIsImZyb21SZXBlYXRlZE5vZGUiLCJkZWxldGVkQ2hpbGROb2RlcyIsInBvcCIsInVuc2hpZnQiLCJpbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJJbmRpcmVjdGx5UmVkdWNlZE5vZGUiLCJpbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJjaGlsZE5vZGVJbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJJbXBsaWNpdGx5UmVkdWNlZE5vZGUiLCJmcm9tSW1wbGljaXRseVJlZHVjZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJjb3VudCIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5maW5pdHkiLCJmcm9tSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImRlbGV0ZUNoaWxkTm9kZXMiLCJyZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozs0QkFWSTs4REFDRjs2REFDTTs4REFDQzsrREFDQzsrREFDQTtnRUFDQztxQkFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELFNBQVNBLGFBQWFDLElBQUksRUFBRTtJQUN6QyxJQUFNQyxrQkFBa0JELE1BQU0sR0FBRztJQUVqQ0UsUUFBUUQ7SUFFUkUsZUFBZUY7SUFFZkcscUJBQXFCSDtBQUN2QjtBQUVBLFNBQVNDLFFBQVFELGVBQWUsRUFBRTtJQUNoQyxJQUFNSSxhQUFhSixnQkFBZ0JLLGFBQWE7SUFFaERDLDBCQUEwQk47SUFFMUJPLHdCQUF3QlA7SUFFeEJRLHVCQUF1QlI7SUFFdkJTLHlCQUF5QlQ7SUFFekJVLHlCQUF5QlY7SUFFekJJLFdBQVdPLE9BQU8sQ0FBQyxTQUFDQyxXQUFjO1FBQ2hDLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBC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