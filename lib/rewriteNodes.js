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
        return _instanceof(childNode, _directly.default);
    }) || null;
    if (directlyReducedNode !== null) {
        var index = childNodes.indexOf(directlyReducedNode), reducedNode = directlyReducedNode, rewrittenNode = _rewritten.default.fromReducedNode(reducedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
    }
}
function rewriteDirectRepetition(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes();
    var directlyRepeatedNodes = childNodes.filter(function(childNode) {
        return _instanceof(childNode, _directly1.default);
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
        return _instanceof(childNode, _indirectly.default);
    }) || null;
    if (indirectlyReducedNode !== null) {
        var index = childNodes.indexOf(indirectlyReducedNode), reducedNode = indirectlyReducedNode, rewrittenNode = _rewritten.default.fromReducedNode(reducedNode), start = index, deleteCount = 1;
        childNodes.splice(start, deleteCount, rewrittenNode);
    }
}
function rewriteIndirectRepetition(nonTerminalNode) {
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNode = childNodes.find(function(childNode) {
        return _instanceof(childNode, _indirectly1.default);
    }) || null;
    if (indirectlyRepeatedNode !== null) {
        var indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), directlyRepeatedNode = indirectlyRepeatedNodeChildNodes.find(function(indirectlyRepeatedNodeChildNode) {
            return _instanceof(indirectlyRepeatedNodeChildNode, _directly1.default);
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
        var repeatedNode = indirectlyRepeatedNode, rewrittenNode = _rewritten.default.fromRepeatedNode(repeatedNode);
        var index1 = childNodes.indexOf(indirectlyRepeatedNode), start1 = index1, deleteCount1 = 1;
        childNodes.splice(start1, deleteCount1, rewrittenNode);
        start1 = 0;
        deleteCount1 = index1; ///
        var deleteChildNodes = childNodes.splice(start1, deleteCount1), rewrittenNodeChildNodes = rewrittenNode.getChildNodes();
        (0, _array.unshift)(rewrittenNodeChildNodes, deleteChildNodes);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4vbm9kZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgbGFzdCwgZmlsdGVyLCB1bnNoaWZ0LCBiYWNrd2FyZHNTb21lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7ICAvLy9cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgcmV3cml0ZShub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJlbW92ZUVwc2lsb25zKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmVtb3ZlSW50ZXJtZWRpYXJpZXMobm9uVGVybWluYWxOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZShub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgcmV3cml0ZUluZGlyZWN0UmVwZXRpdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVEaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmV3cml0ZURpcmVjdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVJbmRpcmVjdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV3cml0ZShub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25zKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBmaWx0ZXIoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUVwc2lsb25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25Ob2RlKTtcblxuICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludGVybWVkaWFyaWVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVzID0gW107XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVzLnB1c2goc2luZ3VsYXJOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gc2luZ3VsYXJOb25UZXJtaW5hbE5vZGU7IC8vL1xuICB9XG5cbiAgbm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICBiYWNrd2FyZHNTb21lKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlcywgKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZW1vdmVJbnRlcm1lZGlhcmllcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVEaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkaXJlY3RseVJlZHVjZWROb2RlID0gY2hpbGROb2Rlcy5maW5kKChjaGlsZE5vZGUpID0+IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlZHVjZWROb2RlKSkgfHwgbnVsbDtcblxuICBpZiAoZGlyZWN0bHlSZWR1Y2VkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGRpcmVjdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJlZHVjZWROb2RlID0gZGlyZWN0bHlSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmV3cml0dGVuTm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZURpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBjaGlsZE5vZGVzLmZpbHRlcigoY2hpbGROb2RlKSA9PiAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpKSxcbiAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZGlyZWN0bHlSZXBlYXRlZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3QoZGlyZWN0bHlSZXBlYXRlZE5vZGVzKSxcbiAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4ICsgMSxcbiAgICAgICAgICByZXBlYXRlZE5vZGUgPSBsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgZGVsZXRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gcmV3cml0dGVuTm9kZTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7IC8vL1xuXG4gICAgZGVsZXRlZENoaWxkTm9kZXMucG9wKCk7XG5cbiAgICB1bnNoaWZ0KGNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZE5vZGUgPSBjaGlsZE5vZGVzLmZpbmQoKGNoaWxkTm9kZSkgPT4gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZWR1Y2VkTm9kZSkpIHx8IG51bGw7XG5cbiAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGluZGlyZWN0bHlSZWR1Y2VkTm9kZSksXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBpbmRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gY2hpbGROb2Rlcy5maW5kKChjaGlsZE5vZGUpID0+IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSkgfHwgbnVsbDtcblxuICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5maW5kKChpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlKSA9PiAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKSkgfHwgbnVsbDtcblxuICAgIGlmIChkaXJlY3RseVJlcGVhdGVkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGluZGV4ID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuaW5kZXhPZihkaXJlY3RseVJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWROb2RlcyA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5kaXJlY3RseVJlcGVhdGVkTm9kZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVwZWF0ZWROb2RlKHJlcGVhdGVkTm9kZSk7XG5cbiAgICBsZXQgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmV3cml0dGVuTm9kZSk7XG5cbiAgICBzdGFydCA9IDA7XG5cbiAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgICBjb25zdCBkZWxldGVDaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcyA9IHJld3JpdHRlbk5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgdW5zaGlmdChyZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcywgZGVsZXRlQ2hpbGROb2Rlcyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJub2RlIiwibm9uVGVybWluYWxOb2RlIiwicmV3cml0ZSIsInJlbW92ZUVwc2lsb25zIiwicmVtb3ZlSW50ZXJtZWRpYXJpZXMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24iLCJyZXdyaXRlRGlyZWN0UmVwZXRpdGlvbiIsInJld3JpdGVEaXJlY3RSZWR1Y3Rpb24iLCJyZXdyaXRlSW5kaXJlY3RSZWR1Y3Rpb24iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJmaWx0ZXIiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInNpbmd1bGFyTm9uVGVybWluYWxOb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwiZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNpbmd1bGFyTm9uVGVybWluYWxOb2RlIiwicHVzaCIsImJhY2t3YXJkc1NvbWUiLCJzaW5ndWxhck5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkaXJlY3RseVJlZHVjZWROb2RlIiwiZmluZCIsIkRpcmVjdGx5UmVkdWNlZE5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJyZWR1Y2VkTm9kZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJlZHVjZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGgiLCJsYXN0RGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJsYXN0IiwicmVwZWF0ZWROb2RlIiwiZnJvbVJlcGVhdGVkTm9kZSIsImRlbGV0ZWRDaGlsZE5vZGVzIiwicG9wIiwidW5zaGlmdCIsImluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsIkluZGlyZWN0bHlSZWR1Y2VkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMiLCJkaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGUiLCJJbmZpbml0eSIsImRlbGV0ZUNoaWxkTm9kZXMiLCJyZXdyaXR0ZW5Ob2RlQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozs0QkFWSTs4REFFRjs2REFDTTs4REFDQzsrREFDQztnRUFDQztxQkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLFNBQVNBLGFBQWFDLElBQUksRUFBRTtJQUN6QyxJQUFNQyxrQkFBa0JELE1BQU0sR0FBRztJQUVqQ0UsUUFBUUQ7SUFFUkUsZUFBZUY7SUFFZkcscUJBQXFCSDtBQUN2QjtBQUVBLFNBQVNDLFFBQVFELGVBQWUsRUFBRTtJQUNoQyxJQUFNSSxhQUFhSixnQkFBZ0JLLGFBQWE7SUFFaERDLDBCQUEwQk47SUFFMUJPLHdCQUF3QlA7SUFFeEJRLHVCQUF1QlI7SUFFdkJTLHlCQUF5QlQ7SUFFekJJLFdBQVdNLE9BQU8sQ0FBQyxTQUFDQyxXQUFjO1FBQ2hDLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNWixvQkFBa0JXLFdBQVksR0FBRztZQUV2Q1YsUUFBUUQ7UUFDVixDQUFDO0lBQ0g7QUFDRjtBQUVBLFNBQVNFLGVBQWVGLGVBQWUsRUFBRTtJQUN2QyxJQUFNSSxhQUFhSixnQkFBZ0JLLGFBQWE7SUFFaERTLElBQUFBLGFBQU0sRUFBQ1YsWUFBWSxTQUFDTyxXQUFjO1FBQ2hDLElBQU1JLHVCQUF3QkosQUFBUyxZQUFUQSxXQUFxQksseUJBQVc7UUFFOUQsSUFBSSxDQUFDRCxzQkFBc0I7WUFDekIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUFYLFdBQVdNLE9BQU8sQ0FBQyxTQUFDQyxXQUFj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