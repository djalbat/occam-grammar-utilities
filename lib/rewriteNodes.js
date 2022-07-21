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
                var repeatedNode = childNode, repeatedNodeChildNodes = repeatedNode.getChildNodes(), lastRepeatedNodeChildNode = last(repeatedNodeChildNodes), lastRepeatedNodeChildNodeRepeatedNode = _instanceof(lastRepeatedNodeChildNode, _repeated.default);
                if (lastRepeatedNodeChildNodeRepeatedNode) {
                    repeatedNodeChildNodes.pop();
                    var start = index + 1, deleteCount = 0;
                    childNodes.splice(start, deleteCount, lastRepeatedNodeChildNode);
                    childNodesLength = childNodes.length;
                    index++;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciwgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7XG4gIGZsYXR0ZW5Ob2Rlcyhub2RlKTtcblxuICBleHBhbmROb2Rlcyhub2RlKTtcblxuICByZW5hbWVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG5cbiAgcmVtb3ZlU2luZ3VsYXJOb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbk5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBmbGF0dGVuTm9kZXMobm9kZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgaW5kZXggPSAwLFxuICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBjaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlID0gbGFzdChyZXBlYXRlZE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdFJlcGVhdGVkTm9kZUNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgICBpZiAobGFzdFJlcGVhdGVkTm9kZUNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgIHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMucG9wKCk7XG5cbiAgICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGxhc3RSZXBlYXRlZE5vZGVDaGlsZE5vZGUpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHBhbmROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleCA8IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1sgaW5kZXggXSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGV4cGFuZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVwZWF0ZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHNpbmd1bGFyTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc2luZ3VsYXJOb2RlQ2hpbGROb2RlcyA9IHNpbmd1bGFyTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uc2luZ3VsYXJOb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInVuc2hpZnQiLCJub2RlIiwiZmxhdHRlbk5vZGVzIiwiZXhwYW5kTm9kZXMiLCJyZW5hbWVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzIiwicmVtb3ZlRXBzaWxvbk5vZGVzIiwicmVtb3ZlU2luZ3VsYXJOb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVJlcGVhdGVkTm9kZSIsIlJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZUNoaWxkTm9kZXMiLCJsYXN0UmVwZWF0ZWROb2RlQ2hpbGROb2RlIiwibGFzdFJlcGVhdGVkTm9kZUNoaWxkTm9kZVJlcGVhdGVkTm9kZSIsInBvcCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWxldGVkQ2hpbGROb2RlcyIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJjaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInNldFJ1bGVOYW1lIiwicmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJzaW5ndWxhck5vZGUiLCJzaW5ndWxhck5vZGVDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBWWIsU0FZQzs7O2VBWnVCQSxZQUFZOzs7NEJBVlIsZUFBZTt5QkFDWixXQUFXOzREQUVsQixnQkFBZ0I7NkRBQ2YsaUJBQWlCO3dCQUVnQyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7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