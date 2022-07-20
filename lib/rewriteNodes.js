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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift;
function rewriteNodes(node) {
    rearrangeNodes(node);
    removeEpsilonNodes(node);
    removeRepeatedNodes(node);
    renameReducedNodesAndRepeatedNodes(node);
}
function rearrangeNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var childNodes;
        var nonTerminalNode = node; ///
        childNodes = nonTerminalNode.getChildNodes();
        rearrangeChildNodes(childNodes);
        childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rearrangeNodes(_$node);
        });
    }
}
function removeEpsilonNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        filter(childNodes, function(childNode) {});
    }
}
function removeRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var childNodes;
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
        childNodes = nonTerminalNode.getChildNodes();
        var childNodesLength = childNodes.length;
        if (childNodesLength === 1) {
            var firstChildNode = first(childNodes), childNode = firstChildNode, childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var _childNodes;
                var repeatedNode = childNode, repeatedNodeChildNodes = repeatedNode.getChildNodes(), start = 0, deleteCount = 1;
                (_childNodes = childNodes).splice.apply(_childNodes, [
                    start,
                    deleteCount
                ].concat(_toConsumableArray(repeatedNodeChildNodes)));
            }
        }
        childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode, index) {
            var _$node = childNode; ///
            removeRepeatedNodes(_$node);
            var childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName);
                if (repeatedNodeRuleName === repeatedRuleName) {
                    var repeatedNodeChildNodes = repeatedNode.getChildNodes(), repeatedNodeChildNodesLength = repeatedNodeChildNodes.length;
                    if (repeatedNodeChildNodesLength === 1) {
                        var _childNodes;
                        var start = index, deleteCount = 1;
                        (_childNodes = childNodes).splice.apply(_childNodes, [
                            start,
                            deleteCount
                        ].concat(_toConsumableArray(repeatedNodeChildNodes)));
                    }
                }
            }
        });
    }
}
function rearrangeChildNodes(childNodes) {
    var index = 0, childNodesLength = childNodes.length;
    while(index < childNodesLength){
        if (index > 0) {
            var childNode = childNodes[index], childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var start = 0, deleteCount = index, deletedChildNodes = childNodes.splice(start, deleteCount);
                var repeatedNode = childNode, repeatedNodeChildNodes = repeatedNode.getChildNodes();
                unshift(repeatedNodeChildNodes, deletedChildNodes);
                childNodesLength = childNodes.length;
                index = -1;
            }
        }
        index++;
    }
}
function renameReducedNodesAndRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeReducedNode = _instanceof(childNode, _reduced.default), childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (false) {
            ///
            } else if (childNodeReducedNode) {
                var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
                reducedNode.setRuleName(ruleName);
            } else if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = repeatedNodeRuleName, ruleName1 = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName);
                repeatedNode.setRuleName(ruleName1);
            }
            renameReducedNodesAndRepeatedNodes(childNode);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciwgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7XG4gIHJlYXJyYW5nZU5vZGVzKG5vZGUpO1xuXG4gIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcblxuICByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbmFtZVJlZHVjZWROb2Rlc0FuZFJlcGVhdGVkTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlYXJyYW5nZU5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGxldCBjaGlsZE5vZGVzO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIHJlYXJyYW5nZUNoaWxkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVhcnJhbmdlTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXBzaWxvbk5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgZmlsdGVyKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcblxuICAgIH0pO1xuXG5cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGxldCBjaGlsZE5vZGVzO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVtb3ZlUmVwZWF0ZWROb2Rlcyhub2RlKTtcblxuICAgICAgY29uc3QgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlUnVsZU5hbWUgPSByZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChyZXBlYXRlZE5vZGVSdWxlTmFtZSA9PT0gcmVwZWF0ZWRSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSByZXBlYXRlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIHJlcGVhdGVkTm9kZUNoaWxkTm9kZXNMZW5ndGggPSByZXBlYXRlZE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChyZXBlYXRlZE5vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYXJyYW5nZUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICBsZXQgaW5kZXggPSAwLFxuICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleCA8IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzWyBpbmRleCBdLFxuICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZWRDaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gcmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleCsrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlZHVjZWROb2Rlc0FuZFJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpLFxuICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlUnVsZU5hbWUgPSByZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZXBlYXRlZE5vZGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuICAgICAgfVxuICAgICAgcmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInVuc2hpZnQiLCJub2RlIiwicmVhcnJhbmdlTm9kZXMiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJyZW1vdmVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwicmVhcnJhbmdlQ2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpbmRleCIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwiZGVsZXRlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwic2V0UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBV2IsU0FRQzs7O2VBUnVCQSxZQUFZOzs7eUJBVEwsV0FBVzs0REFFbEIsZ0JBQWdCOzZEQUNmLGlCQUFpQjt3QkFFOEQsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5SCxJQUFRQyxLQUFLLEdBQXNCQyxVQUFjLGVBQUEsQ0FBekNELEtBQUssRUFBRUUsTUFBTSxHQUFjRCxVQUFjLGVBQUEsQ0FBbENDLE1BQU0sRUFBRUMsT0FBTyxHQUFLRixVQUFjLGVBQUEsQ0FBMUJFLE9BQU8sQUFBb0I7QUFFbkMsU0FBU0osWUFBWSxDQUFDSyxJQUFJLEVBQUU7SUFDekNDLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFFckJFLGtCQUFrQixDQUFDRixJQUFJLENBQUMsQ0FBQztJQUV6QkcsbUJBQW1CLENBQUNILElB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