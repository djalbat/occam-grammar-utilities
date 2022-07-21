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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift;
function rewriteNodes(node) {
    rearrangeNodes(node);
    renameRepeatedNodes(node);
    renameReducedNodes(node);
    removeEpsilonNodes(node);
    removeSingularNodes(node);
}
function rearrangeNodes(node) {
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
            rearrangeNodes(_$node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciwgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2Rlcyhub2RlKSB7XG4gIHJlYXJyYW5nZU5vZGVzKG5vZGUpO1xuXG4gIHJlbmFtZVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVkdWNlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcblxuICByZW1vdmVTaW5ndWxhck5vZGVzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZWFycmFuZ2VOb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleCA8IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1sgaW5kZXggXSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBkZWxldGVkQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGRlbGV0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlYXJyYW5nZU5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVSZXBlYXRlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgcmVwZWF0ZWROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHNpbmd1bGFyTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgc2luZ3VsYXJOb2RlQ2hpbGROb2RlcyA9IHNpbmd1bGFyTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uc2luZ3VsYXJOb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZVNpbmd1bGFyTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZXMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwidW5zaGlmdCIsIm5vZGUiLCJyZWFycmFuZ2VOb2RlcyIsInJlbmFtZVJlcGVhdGVkTm9kZXMiLCJyZW5hbWVSZWR1Y2VkTm9kZXMiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJyZW1vdmVTaW5ndWxhck5vZGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVSZXBlYXRlZE5vZGUiLCJSZXBlYXRlZE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwicmVwZWF0ZWROb2RlIiwiZGVsZXRlZENoaWxkTm9kZXMiLCJzcGxpY2UiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJjaGlsZE5vZGVSZWR1Y2VkTm9kZSIsIlJlZHVjZWROb2RlIiwicmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInNldFJ1bGVOYW1lIiwicmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJzaW5ndWxhck5vZGUiLCJzaW5ndWxhck5vZGVDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBWWIsU0FVQzs7O2VBVnVCQSxZQUFZOzs7NEJBVlIsZUFBZTt5QkFDWixXQUFXOzREQUVsQixnQkFBZ0I7NkRBQ2YsaUJBQWlCO3dCQUVnQyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhHLElBQVFDLEtBQUssR0FBc0JDLFVBQWMsZUFBQSxDQUF6Q0QsS0FBSyxFQUFFRSxNQUFNLEdBQWNELFVBQWMsZUFBQSxDQUFsQ0MsTUFBTSxFQUFFQyxPQUFPLEdBQUtGLFVBQWMsZUFBQSxDQUExQkUsT0FBTyxBQUFvQjtBQUVuQyxTQUFTSixZQUFZLENBQUNLLElBQUksRUFBRTtJQUN6Q0MsY0FBYyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUVyQkUsbUJBQW1CLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBRTFCRyxrQkFBa0IsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFFekJJLGtCQUFrQixDQUFDSixJQUFJLENBQUMsQ0FBQztJQUV6QkssbUJBQW1CLENBQUNMLElBQUksQ0FBQyxDQUFDO0NBQzNCO0FBRUQsU0FBU0MsY0FBYyxDQUFDRCxJQUFJLEVBQUU7SUFDNUIsSUFBTU0sbUJBQW1CLEdBQUdOLElBQUksQ0FBQ08saUJBQWlCLEVBQUUsQUFBQztJQUVyRCxJQUFJRCxtQkFBbUIsRUFBRTtRQUN2QixJQUFNRSxl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