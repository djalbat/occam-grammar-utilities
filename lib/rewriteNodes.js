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
var last = _necessary.arrayUtilities.last, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift;
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
                var repeatedNode = childNode, repeatedNodes = [], repeatedNodeChildNodes = repeatedNode.getChildNodes(), lastRepeatedNodeChildNode = last(repeatedNodeChildNodes), lastRepeatedNodeChildNodeRepeatedNode = _instanceof(lastRepeatedNodeChildNode, _repeated.default);
                if (lastRepeatedNodeChildNodeRepeatedNode) {
                    var _childNodes;
                    filter(repeatedNodeChildNodes, function(repeatedNodeChildNode) {
                        var repeatedNodeChildNodeRepeatedNode = _instanceof(repeatedNodeChildNode, _repeated.default);
                        if (repeatedNodeChildNodeRepeatedNode) {
                            var repeatedNode = repeatedNodeChildNode; ///
                            repeatedNodes.unshift(repeatedNode);
                        } else {
                            return true;
                        }
                    });
                    var start = index + 1, deleteCount = 0, repeatedNodesLength = repeatedNodes.length;
                    (_childNodes = childNodes).splice.apply(_childNodes, [
                        start,
                        deleteCount
                    ].concat(_toConsumableArray(repeatedNodes)));
                    childNodesLength = childNodes.length;
                    index += repeatedNodesLength;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciwgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7XG4gIGZsYXR0ZW5Ob2Rlcyhub2RlKTtcblxuICBleHBhbmROb2Rlcyhub2RlKTtcblxuICByZW5hbWVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG5cbiAgcmVtb3ZlU2luZ3VsYXJOb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbk5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBmbGF0dGVuTm9kZXMobm9kZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5kZXggPSAwLFxuICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBjaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZXMgPSBbXSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGUgPSBsYXN0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgICBsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgICAgZmlsdGVyKHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIChyZXBlYXRlZE5vZGVDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZUNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChyZXBlYXRlZE5vZGVDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocmVwZWF0ZWROb2RlQ2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IHJlcGVhdGVkTm9kZUNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2Rlcy51bnNoaWZ0KHJlcGVhdGVkTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMCxcbiAgICAgICAgICAgICAgICByZXBlYXRlZE5vZGVzTGVuZ3RoID0gcmVwZWF0ZWROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGVhdGVkTm9kZXMpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgaW5kZXggKz0gcmVwZWF0ZWROb2Rlc0xlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHBhbmROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleCA8IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1sgaW5kZXggXSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGV4cGFuZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVwZWF0ZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHNpbmd1bGFyTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc2luZ3VsYXJOb2RlQ2hpbGROb2RlcyA9IHNpbmd1bGFyTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uc2luZ3VsYXJOb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInVuc2hpZnQiLCJub2RlIiwiZmxhdHRlbk5vZGVzIiwiZXhwYW5kTm9kZXMiLCJyZW5hbWVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwicmVtb3ZlU2luZ3VsYXJOb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVJlcGVhdGVkTm9kZSIsIlJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZXMiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwibGFzdFJlcGVhdGVkTm9kZUNoaWxkTm9kZSIsImxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwicmVwZWF0ZWROb2Rlc0xlbmd0aCIsInNwbGljZSIsImRlbGV0ZWRDaGlsZE5vZGVzIiwiY2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImNoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwic2V0UnVsZU5hbWUiLCJyZXBlYXRlZE5vZGVSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIiwiZmlyc3RDaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVSdWxlTmFtZSIsInNpbmd1bGFyTm9kZSIsInNpbmd1bGFyTm9kZUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFZYixTQVlDOzs7ZUFadUJBLFlBQVk7Ozs0QkFWUixlQUFlO3lCQUNaLFdBQVc7NERBRWxCLGdCQUFnQjs2REFDZixpQkFBaUI7d0JBRWdDLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEcsSUFBUUMsSUFBSSxHQUE2QkMsVUFBYyxlQUFBLENBQS9DRCxJQUFJLEVBQUVFLEtBQUssR0FBc0JELFVBQWMsZUFBQSxDQUF6Q0MsS0FBSyxFQUFFQyxNQUFNLEdBQWNGLFVBQWMsZUFBQSxDQUFsQ0UsTUFBTSxFQUFFQyxPQUFPLEdBQUtILFVBQWMsZUFBQSxDQUExQkcsT0FBTyxBQUFvQjtBQUV6QyxTQUFTTCxZQUFZLENBQUNNLElBQUksRUFBRTtJQUN6Q0MsWUFBWSxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUVuQkUsV0FBVyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUVsQkcsbUJBQW1CLENBQUNILElB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