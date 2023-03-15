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
    var childNodes = nonTerminalNode.getChildNodes(), indirectlyRepeatedNode = childNodes.find(function(childNode) {
        var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly1.default);
        if (childNodeIndirectlyRepeatedNode) {
            return true;
        }
    }) || null;
    if (indirectlyRepeatedNode !== null) {
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
        var repeatedNode = indirectlyRepeatedNode, rewrittenNode = _rewritten.default.fromRepeatedNode(repeatedNode);
        var index1 = childNodes.indexOf(indirectlyRepeatedNode), start1 = index1, deleteCount1 = 1;
        childNodes.splice(start1, deleteCount1, rewrittenNode);
        start1 = 0;
        deleteCount1 = index1; ///
        var deleteChildNodes = childNodes.splice(start1, deleteCount1), rewrittenNodeChildNodes = rewrittenNode.getChildNodes();
        (0, _array.unshift)(rewrittenNodeChildNodes, deleteChildNodes);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJld3JpdHRlbk5vZGUgZnJvbSBcIi4vbm9kZS9yZXdyaXR0ZW5cIjtcbmltcG9ydCBEaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbXBsaWNpdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkL2ltcGxpY2l0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgbGFzdCwgZmlsdGVyLCB1bnNoaWZ0LCBiYWNrd2FyZHNTb21lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7ICAvLy9cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgcmV3cml0ZShub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJlbW92ZUVwc2lsb25zKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmVtb3ZlSW50ZXJtZWRpYXJpZXMobm9uVGVybWluYWxOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZShub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgcmV3cml0ZUluZGlyZWN0UmVwZXRpdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVEaXJlY3RSZXBldGl0aW9uKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcmV3cml0ZURpcmVjdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVJbmRpcmVjdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIHJld3JpdGVJbXBsaWNpdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcmV3cml0ZShub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25zKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBmaWx0ZXIoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUVwc2lsb25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25Ob2RlKTtcblxuICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZW1vdmVFcHNpbG9ucyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludGVybWVkaWFyaWVzKG5vblRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVzID0gW107XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVzLnB1c2goc2luZ3VsYXJOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gc2luZ3VsYXJOb25UZXJtaW5hbE5vZGU7IC8vL1xuICB9XG5cbiAgbm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICBiYWNrd2FyZHNTb21lKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlcywgKHNpbmd1bGFyTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgY29uc3Qgc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHNpbmd1bGFyTm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpO1xuICB9XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICByZW1vdmVJbnRlcm1lZGlhcmllcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVEaXJlY3RSZWR1Y3Rpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBkaXJlY3RseVJlZHVjZWROb2RlID0gY2hpbGROb2Rlcy5maW5kKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVEaXJlY3RseVJlZHVjZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVkdWNlZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZGlyZWN0bHlSZWR1Y2VkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGRpcmVjdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHJlZHVjZWROb2RlID0gZGlyZWN0bHlSZWR1Y2VkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZWR1Y2VkTm9kZShyZWR1Y2VkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmV3cml0dGVuTm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZURpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBjaGlsZE5vZGVzLmZpbHRlcigoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPSBkaXJlY3RseVJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChkaXJlY3RseVJlcGVhdGVkTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbGFzdERpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdChkaXJlY3RseVJlcGVhdGVkTm9kZXMpLFxuICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHJlcGVhdGVkTm9kZSA9IGxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZXBlYXRlZE5vZGUocmVwZWF0ZWROb2RlKSxcbiAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgcmV3cml0dGVuTm9kZSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUgPSByZXdyaXR0ZW5Ob2RlOyAgLy8vXG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTsgLy8vXG5cbiAgICBkZWxldGVkQ2hpbGROb2Rlcy5wb3AoKTtcblxuICAgIHVuc2hpZnQoY2hpbGROb2RlcywgZGVsZXRlZENoaWxkTm9kZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVJbmRpcmVjdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZXMuZmluZCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlSW5kaXJlY3RseVJlZHVjZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZWR1Y2VkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlZHVjZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGluZGlyZWN0bHlSZWR1Y2VkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGluZGlyZWN0bHlSZWR1Y2VkTm9kZSksXG4gICAgICAgICAgcmVkdWNlZE5vZGUgPSBpbmRpcmVjdGx5UmVkdWNlZE5vZGUsICAvLy9cbiAgICAgICAgICByZXdyaXR0ZW5Ob2RlID0gUmV3cml0dGVuTm9kZS5mcm9tUmVkdWNlZE5vZGUocmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVJbXBsaWNpdFJlZHVjdGlvbihub25UZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGltcGxpY2l0bHlSZWR1Y2VkTm9kZSA9IGNoaWxkTm9kZXMuZmluZCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlSW1wbGljaXRseVJlZHVjZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEltcGxpY2l0bHlSZWR1Y2VkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlSW1wbGljaXRseVJlZHVjZWROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGltcGxpY2l0bHlSZWR1Y2VkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGltcGxpY2l0bHlSZWR1Y2VkTm9kZSksXG4gICAgICAgICAgcmV3cml0dGVuTm9kZSA9IFJld3JpdHRlbk5vZGUuZnJvbUltcGxpY2l0bHlSZWR1Y2VkTm9kZShpbXBsaWNpdGx5UmVkdWNlZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJld3JpdHRlbk5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVJbmRpcmVjdFJlcGV0aXRpb24obm9uVGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gY2hpbGROb2Rlcy5maW5kKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5maW5kKChpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUgPSAoaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGRpcmVjdGx5UmVwZWF0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5pbmRleE9mKGRpcmVjdGx5UmVwZWF0ZWROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICAgICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwZWF0ZWROb2RlID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgIC8vL1xuICAgICAgICAgIHJld3JpdHRlbk5vZGUgPSBSZXdyaXR0ZW5Ob2RlLmZyb21SZXBlYXRlZE5vZGUocmVwZWF0ZWROb2RlKTtcblxuICAgIGxldCBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihpbmRpcmVjdGx5UmVwZWF0ZWROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCByZXdyaXR0ZW5Ob2RlKTtcblxuICAgIHN0YXJ0ID0gMDtcblxuICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICAgIGNvbnN0IGRlbGV0ZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgIHJld3JpdHRlbk5vZGVDaGlsZE5vZGVzID0gcmV3cml0dGVuTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICB1bnNoaWZ0KHJld3JpdHRlbk5vZGVDaGlsZE5vZGVzLCBkZWxldGVDaGlsZE5vZGVzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlcyIsIm5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicmVtb3ZlRXBzaWxvbnMiLCJyZW1vdmVJbnRlcm1lZGlhcmllcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmV3cml0ZUluZGlyZWN0UmVwZXRpdGlvbiIsInJld3JpdGVEaXJlY3RSZXBldGl0aW9uIiwicmV3cml0ZURpcmVjdFJlZHVjdGlvbiIsInJld3JpdGVJbmRpcmVjdFJlZHVjdGlvbiIsInJld3JpdGVJbXBsaWNpdFJlZHVjdGlvbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImZpbHRlciIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic2luZ3VsYXJOb25UZXJtaW5hbE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwic2luZ3VsYXJOb25UZXJtaW5hbE5vZGUiLCJwdXNoIiwiYmFja3dhcmRzU29tZSIsInNpbmd1bGFyTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImRpcmVjdGx5UmVkdWNlZE5vZGUiLCJmaW5kIiwiY2hpbGROb2RlRGlyZWN0bHlSZWR1Y2VkTm9kZSIsIkRpcmVjdGx5UmVkdWNlZE5vZGUiLCJpbmRleCIsImluZGV4T2YiLCJyZWR1Y2VkTm9kZSIsInJld3JpdHRlbk5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJlZHVjZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwiY2hpbGROb2RlRGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWROb2Rlc0xlbmd0aCIsImxhc3REaXJlY3RseVJlcGVhdGVkTm9kZSIsImxhc3QiLCJyZXBlYXRlZE5vZGUiLCJmcm9tUmVwZWF0ZWROb2RlIiwiZGVsZXRlZENoaWxkTm9kZXMiLCJwb3AiLCJ1bnNoaWZ0IiwiaW5kaXJlY3RseVJlZHVjZWROb2RlIiwiY2hpbGROb2RlSW5kaXJlY3RseVJlZHVjZWROb2RlIiwiSW5kaXJlY3RseVJlZHVjZWROb2RlIiwiaW1wbGljaXRseVJlZHVjZWROb2RlIiwiY2hpbGROb2RlSW1wbGljaXRseVJlZHVjZWROb2RlIiwiSW1wbGljaXRseVJlZHVjZWROb2RlIiwiZnJvbUltcGxpY2l0bHlSZWR1Y2VkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlIiwiSW5maW5pdHkiLCJkZWxldGVDaGlsZE5vZGVzIiwicmV3cml0dGVuTm9kZUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7NEJBWEk7OERBRUY7NkRBQ007OERBQ0M7K0RBQ0M7K0RBQ0E7Z0VBQ0M7cUJBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxTQUFTQSxhQUFhQyxJQUFJLEVBQUU7SUFDekMsSUFBTUMsa0JBQWtCRCxNQUFNLEdBQUc7SUFFakNFLFFBQVFEO0lBRVJFLGVBQWVGO0lBRWZHLHFCQUFxQkg7QUFDdkI7QUFFQSxTQUFTQyxRQUFRRCxlQUFlLEVBQUU7SUFDaEMsSUFBTUksYUFBYUosZ0JBQWdCSyxhQUFhO0lBRWhEQywwQkFBMEJOO0lBRTFCTyx3QkFBd0JQO0lBRXhCUSx1QkFBdUJSO0lBRXZCUyx5QkFBeUJUO0lBRXpCVSx5QkFBeUJWO0lBRXpCSSxXQUFXTyxPQUFPLENBQUMsU0FBQ0MsV0FBYztRQUNoQyxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtRQUU1RCxJQUFJRCwwQkFBMEI7WUFDNUIsSUFBTWIsb0JBQWtCWSxXQUFZLEdBQUc7WUFFdkNYLFFBQVFEO1FBQ1YsQ0FBQztJQUNIO0FBQ0Y7QUFFQSxTQUFTRSxlQUFlRixlQUFlLEVBQUU7SUFDdkMsSUFBTUksYUFBYUosZ0JB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