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
var _necessary = require("necessary");
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced"));
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated"));
var _ruleName = require("./utilities/ruleName");
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
var last = _necessary.arrayUtilities.last, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift, separate = _necessary.arrayUtilities.separate;
function rewriteNodes(node) {
    flattenNodes(node);
    expandNodes(node);
    renameRepeatedNodes(node);
    renameReducedNodes(node);
    removeEpsilonNodes(node);
    removeSingularNodes(node);
}
function flattenNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            flattenNodes(_$node);
        });
        var index = 0, childNodesLength = childNodes.length;
        while(index < childNodesLength){
            var childNode = childNodes[index], childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodes = [], nonRepeatedNodes = [], repeatedNodeChildNodes = repeatedNode.getChildNodes(), lastRepeatedNodeChildNode = last(repeatedNodeChildNodes), lastRepeatedNodeChildNodeRepeatedNode = _instanceof(lastRepeatedNodeChildNode, _repeated.default);
                if (lastRepeatedNodeChildNodeRepeatedNode) {
                    separate(repeatedNodeChildNodes, repeatedNodes, nonRepeatedNodes, function(repeatedNodeChildNode) {
                        var repeatedNodeChildNodeRepeatedNode = _instanceof(repeatedNodeChildNode, _repeated.default);
                        if (repeatedNodeChildNodeRepeatedNode) {
                            return true;
                        }
                    });
                    var nonRepeatedNodesLength = nonRepeatedNodes.length;
                    if (nonRepeatedNodesLength > 0) {
                        var _childNodes;
                        var start = index + 1, deleteCount = 0, repeatedNodesLength = repeatedNodes.length;
                        (_childNodes = childNodes).splice.apply(_childNodes, [
                            start,
                            deleteCount
                        ].concat(_toConsumableArray(repeatedNodes)));
                        childNodesLength = childNodes.length;
                        index += repeatedNodesLength;
                        var repeatedNodeChildNodes1 = nonRepeatedNodes; ///
                        repeatedNode.setChildNodes(repeatedNodeChildNodes1);
                    }
                }
            }
            index++;
        }
    }
}
function expandNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        var index = 0, childNodesLength = childNodes.length;
        while(index < childNodesLength){
            if (index > 0) {
                var childNode = childNodes[index], childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
                if (childNodeRepeatedNode) {
                    var start = 0, deleteCount = index, repeatedNode = childNode, deletedChildNodes = childNodes.splice(start, deleteCount), repeatedNodeChildNodes = repeatedNode.getChildNodes();
                    unshift(repeatedNodeChildNodes, deletedChildNodes);
                    childNodesLength = childNodes.length;
                    index = -1;
                }
            }
            index++;
        }
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            expandNodes(_$node);
        });
    }
}
function removeEpsilonNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        filter(childNodes, function(childNode) {
            var childNodeEpsilonNode = _instanceof(childNode, _occamParsers.EpsilonNode);
            if (!childNodeEpsilonNode) {
                return true;
            }
        });
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            removeEpsilonNodes(_$node);
        });
    }
}
function renameReducedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeReducedNode = _instanceof(childNode, _reduced.default);
            if (childNodeReducedNode) {
                var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
                reducedNode.setRuleName(ruleName);
            }
            renameReducedNodes(childNode);
        });
    }
}
function renameRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = repeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName);
                repeatedNode.setRuleName(ruleName);
            }
            renameRepeatedNodes(childNode);
        });
    }
}
function removeSingularNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), childNodes = nonTerminalNode.getChildNodes(), childNodesLength = childNodes.length;
        if (childNodesLength === 1) {
            var firstChildNode = first(childNodes), childNode = firstChildNode, childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                var childNodeRuleName = childNode.getRuleName();
                if (childNodeRuleName === ruleName) {
                    var _childNodes;
                    var singularNode = childNode, singularNodeChildNodes = singularNode.getChildNodes(), start = 0, deleteCount = 1;
                    (_childNodes = childNodes).splice.apply(_childNodes, [
                        start,
                        deleteCount
                    ].concat(_toConsumableArray(singularNodeChildNodes)));
                }
            }
        }
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            removeSingularNodes(_$node);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciwgdW5zaGlmdCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkge1xuICBmbGF0dGVuTm9kZXMobm9kZSk7XG5cbiAgZXhwYW5kTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICByZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSk7XG5cbiAgcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpO1xuXG4gIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmxhdHRlbk5vZGVzKG5vZGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IGluZGV4ID0gMCxcbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVzID0gW10sXG4gICAgICAgICAgICAgIG5vblJlcGVhdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGUgPSBsYXN0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgICBsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgICAgc2VwYXJhdGUocmVwZWF0ZWROb2RlQ2hpbGROb2RlcywgcmVwZWF0ZWROb2Rlcywgbm9uUmVwZWF0ZWROb2RlcywgKHJlcGVhdGVkTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKHJlcGVhdGVkTm9kZUNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXBlYXRlZE5vZGVDaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBub25SZXBlYXRlZE5vZGVzTGVuZ3RoID0gbm9uUmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAobm9uUmVwZWF0ZWROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgICAgcmVwZWF0ZWROb2Rlc0xlbmd0aCA9IHJlcGVhdGVkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGVhdGVkTm9kZXMpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGluZGV4ICs9IHJlcGVhdGVkTm9kZXNMZW5ndGg7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBub25SZXBlYXRlZE5vZGVzOyAgLy8vXG5cbiAgICAgICAgICAgIHJlcGVhdGVkTm9kZS5zZXRDaGlsZE5vZGVzKHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHBhbmROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleCA8IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1sgaW5kZXggXSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGV4cGFuZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVwZWF0ZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHNpbmd1bGFyTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc2luZ3VsYXJOb2RlQ2hpbGROb2RlcyA9IHNpbmd1bGFyTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uc2luZ3VsYXJOb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInVuc2hpZnQiLCJzZXBhcmF0ZSIsIm5vZGUiLCJmbGF0dGVuTm9kZXMiLCJleHBhbmROb2RlcyIsInJlbmFtZVJlcGVhdGVkTm9kZXMiLCJyZW5hbWVSZWR1Y2VkTm9kZXMiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJyZW1vdmVTaW5ndWxhck5vZGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlcyIsIm5vblJlcGVhdGVkTm9kZXMiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwibGFzdFJlcGVhdGVkTm9kZUNoaWxkTm9kZSIsImxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJub25SZXBlYXRlZE5vZGVzTGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInJlcGVhdGVkTm9kZXNMZW5ndGgiLCJzcGxpY2UiLCJzZXRDaGlsZE5vZGVzIiwiZGVsZXRlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVFcHNpbG9uTm9kZSIsIkVwc2lsb25Ob2RlIiwiY2hpbGROb2RlUmVkdWNlZE5vZGUiLCJSZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJmaXJzdENoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZVJ1bGVOYW1lIiwic2luZ3VsYXJOb2RlIiwic2luZ3VsYXJOb2RlQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQVliLFNBWUM7OztlQVp1QkEsWUFBWTs7OzRCQVZSLGVBQWU7eUJBQ1osV0FBVzs0REFFbEIsZ0JBQWdCOzZEQUNmLGlCQUFpQjt3QkFFZ0Msc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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