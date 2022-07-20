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
var first = _necessary.arrayUtilities.first, unshift = _necessary.arrayUtilities.unshift;
function rewriteNodes(node) {
    rearrangeNode(node);
    removeRepeatedNodes(node);
    renameReducedNodesAndRepeatedNodes(node);
}
function rearrangeNode(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var childNodes;
        var nonTerminalNode = node; ///
        childNodes = nonTerminalNode.getChildNodes();
        rearrangeChildNodes(childNodes);
        childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rearrangeNode(_$node);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkge1xuICByZWFycmFuZ2VOb2RlKG5vZGUpO1xuXG4gIHJlbW92ZVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlTm9kZShub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBsZXQgY2hpbGROb2RlcztcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICByZWFycmFuZ2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlYXJyYW5nZU5vZGUobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBsZXQgY2hpbGROb2RlcztcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgICBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gcmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBlYXRlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocmVwZWF0ZWROb2RlUnVsZU5hbWUgPT09IHJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCByZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gcmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICByZXBlYXRlZE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gcmVwZWF0ZWROb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAocmVwZWF0ZWROb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBlYXRlZE5vZGVDaGlsZE5vZGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFycmFuZ2VDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXggPCBjaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1sgaW5kZXggXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgdW5zaGlmdChyZXBlYXRlZE5vZGVDaGlsZE5vZGVzLCBkZWxldGVkQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgIGluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5hbWVSZWR1Y2VkTm9kZXNBbmRSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVJlZHVjZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlZHVjZWROb2RlKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZVJlZHVjZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlZHVjZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVkdWNlZE5vZGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVwZWF0ZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICAgIHJlbmFtZVJlZHVjZWROb2Rlc0FuZFJlcGVhdGVkTm9kZXMoY2hpbGROb2RlKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ1bnNoaWZ0Iiwibm9kZSIsInJlYXJyYW5nZU5vZGUiLCJyZW1vdmVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwicmVhcnJhbmdlQ2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpbmRleCIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwiZGVsZXRlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwic2V0UnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBV2IsU0FNQzs7O2VBTnVCQSxZQUFZOzs7eUJBVEwsV0FBVzs0REFFbEIsZ0JBQWdCOzZEQUNmLGlCQUFpQjt3QkFFOEQsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5SCxJQUFRQyxLQUFLLEdBQWNDLFVBQWMsZUFBQSxDQUFqQ0QsS0FBSyxFQUFFRSxPQUFPLEdBQUtELFVBQWMsZUFBQSxDQUExQkMsT0FBTyxBQUFvQjtBQUUzQixTQUFTSCxZQUFZLENBQUNJLElBQUksRUFBRTtJQUN6Q0MsYUFBYSxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUVwQkUsbUJBQW1CLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBRTFCRyxrQ0FBa0MsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7Q0FDMUM7QUFFRCxTQUFTQyxhQUFhLENBQUNELElBQUksRUFBRTtJQUMzQixJQUFNSSxtQkFBbUIsR0FBR0osSUFBSSxDQUFDSyxpQkFBaUIsRUFBRSxBQUFDO0lBRXJELElBQUlELG1CQUFtQixFQUFFO1FBQ3ZCLElBQUlFLFVBQVUsQUFBQztRQUVmLElBQU1DLGVBQWUsR0FBR1AsSUFBSSxBQUFDLEVBQUMsR0FBRztRQUVqQ00sVUFBVSxHQUFHQyxlQUFlLENBQUNDLGFBQWEsRUFBRSxDQUFDO1FBRTdDQyxtQkFBbUIsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7UUFFaENBLFVBQVUsR0FBR0MsZUFBZSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztRQUU3Q0YsVUFBVSxDQUFDSSxPQUFPLENBQUMsU0FBQ0MsU0FBUyxFQUFLO1lBQ2hDLElBQU1YLE1BQUksR0FBR1csU0FBUyxBQUFDLEVBQUMsR0FBRztZ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