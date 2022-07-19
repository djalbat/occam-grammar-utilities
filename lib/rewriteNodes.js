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
    rearrangeNodes(node);
    removeRepeatedNodes(node);
    renameReducedNodesAndRepeatedNodes(node);
}
function rearrangeNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node; ///
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rearrangeNodes(_$node);
        });
        var rearranged = rearrangeChildNodes(childNodes);
        while(rearranged){
            childNodes = nonTerminalNode.getChildNodes();
            rearranged = rearrangeChildNodes(childNodes);
        }
    }
}
function removeRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node; ///
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            removeRepeatedNodes(_$node);
        });
        var childNodesLength = childNodes.length;
        if (childNodesLength === 1) {
            var firstChildNode = first(childNodes), childNode = firstChildNode, childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var ruleName = node.getRuleName(), repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName);
                if (repeatedNodeRuleName === repeatedRuleName) {
                    var _childNodes;
                    var repeatedNodeChildNodes = repeatedNode.getChildNodes(), start = 0, deleteCount = 1;
                    (_childNodes = childNodes).splice.apply(_childNodes, [
                        start,
                        deleteCount
                    ].concat(_toConsumableArray(repeatedNodeChildNodes)));
                }
            }
        }
    }
}
function rearrangeChildNodes(childNodes) {
    var rearranged = childNodes.some(function(childNode, index) {
        if (index > 0) {
            var childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var start = 0, deleteCount = index; ///
                childNodes = childNodes.splice(start, deleteCount);
                var repeatedNode = childNode, repeatedNodeChildNodes = repeatedNode.getChildNodes();
                unshift(repeatedNodeChildNodes, childNodes);
                return true;
            }
        }
    });
    return rearranged;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXdyaXRlTm9kZXMobm9kZSkge1xuICByZWFycmFuZ2VOb2Rlcyhub2RlKTtcblxuICByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJlbmFtZVJlZHVjZWROb2Rlc0FuZFJlcGVhdGVkTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlYXJyYW5nZU5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICByZWFycmFuZ2VOb2Rlcyhub2RlKTtcbiAgICB9KTtcblxuICAgIGxldCByZWFycmFuZ2VkID0gcmVhcnJhbmdlQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIHdoaWxlIChyZWFycmFuZ2VkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgcmVhcnJhbmdlZCA9IHJlYXJyYW5nZUNoaWxkTm9kZXMoY2hpbGROb2RlcylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgcmVtb3ZlUmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgICBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IG5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJlcGVhdGVkTm9kZVJ1bGVOYW1lID09PSByZXBlYXRlZFJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IHJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwZWF0ZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNvbnN0IHJlYXJyYW5nZWQgPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVwZWF0ZWROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICByZXBlYXRlZE5vZGVDaGlsZE5vZGVzID0gcmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICB1bnNoaWZ0KHJlcGVhdGVkTm9kZUNoaWxkTm9kZXMsIGNoaWxkTm9kZXMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlYXJyYW5nZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlZHVjZWROb2Rlc0FuZFJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUmVkdWNlZE5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgUmVkdWNlZE5vZGUpLFxuICAgICAgICAgICAgY2hpbGROb2RlUmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIFJlcGVhdGVkTm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlZHVjZWRSdWxlTmFtZSA9IHJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCByZXBlYXRlZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcmVwZWF0ZWROb2RlUnVsZU5hbWUgPSByZXBlYXRlZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKTtcblxuICAgICAgICByZXBlYXRlZE5vZGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuICAgICAgfVxuICAgICAgcmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInVuc2hpZnQiLCJub2RlIiwicmVhcnJhbmdlTm9kZXMiLCJyZW1vdmVSZXBlYXRlZE5vZGVzIiwicmVuYW1lUmVkdWNlZE5vZGVzQW5kUmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInJlYXJyYW5nZWQiLCJyZWFycmFuZ2VDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkTm9kZSIsInJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNvbWUiLCJpbmRleCIsImNoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFXYixTQU1DOzs7ZUFOdUJBLFlBQVk7Ozt5QkFUTCxXQUFXOzREQUVsQixnQkFBZ0I7NkRBQ2YsaUJBQWlCO3dCQUU4RCxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlILElBQVFDLEtBQUssR0FBY0MsVUFBYyxlQUFBLENBQWpDRCxLQUFLLEVBQUVFLE9BQU8sR0FBS0QsVUFBYyxlQUFBLENBQTFCQyxPQUFPLEFBQW9CO0FBRTNCLFNBQVNILFlBQVksQ0FBQ0ksSUFBSSxFQUFFO0lBQ3pDQyxjQUFjLENBQUNELElBQUksQ0FBQyxDQUFDO0lBRXJCRSxtQkFBbUIsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFFMUJHLGtDQUFrQyxDQUFDSCxJQUFJLENBQUMsQ0FBQztDQUMxQztBQUVELFNBQVNDLGNBQWMsQ0FBQ0QsSUFBSSxFQUFFO0lBQzVCLElBQU1JLG1CQUFtQixHQUFHSixJQUFJLENBQUNLLGlCQUFpQixFQUFFLEFBQUM7SUFFckQsSUFBSUQsbUJBQW1CLEVBQUU7UUFDdkIsSUFBTUUsZUFBZSxHQUFHTixJQUFJLEFBQUMsRUFBQyxHQUFHO1FBRWpDLElBQUlPLFVBQVUsR0FBR0QsZUFBZSxDQUFDRSxh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