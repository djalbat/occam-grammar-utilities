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
var _occamParsers = require("occam-parsers");
var _directly = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced/directly"));
var _directly1 = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated/indirectly"));
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, front = _necessary.arrayUtilities.front, filter = _necessary.arrayUtilities.filter, forwardsSome = _necessary.arrayUtilities.forwardsSome;
function rewriteNodes(node) {
    rewriteRepeatedNodes(node);
    rewriteReducedNodes(node);
    removeEpsilonNodes(node);
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
function rewriteReducedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeIndirectlyReducedNode = _instanceof(nonTerminalNode, _indirectly.default);
        if (nonTerminalNodeIndirectlyReducedNode) {
            var indirectlyReducedNode = nonTerminalNode, indirectlyReducedNodeRuleName = indirectlyReducedNode.getRuleName(), reducedRuleName = indirectlyReducedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
            indirectlyReducedNode.setRuleName(ruleName);
        }
        var firstChildNode = first(childNodes), firstChildNodeDirectlyReducedNode = _instanceof(firstChildNode, _directly.default);
        if (firstChildNodeDirectlyReducedNode) {
            var _childNodes;
            var directlyReducedNode = firstChildNode, start = 0, deleteCount = 1, directlyReducedNodeChildNodes = directlyReducedNode.getChildNodes();
            (_childNodes = childNodes).splice.apply(_childNodes, [
                start,
                deleteCount
            ].concat(_toConsumableArray(directlyReducedNodeChildNodes)));
        }
        childNodes.forEach(function(childNode) {
            var _$node = childNode;
            rewriteReducedNodes(_$node);
        });
    }
}
function rewriteRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), lastChildNode = last(childNodes), lastChildNodeDirectlyRepeatedNode = _instanceof(lastChildNode, _directly1.default);
        if (lastChildNodeDirectlyRepeatedNode) {
            var _childNodes;
            var directlyRepeatedNode = lastChildNode, directlyRepeatedNodeRuleName = directlyRepeatedNode.getRuleName(), repeatedRuleName = directlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName), childNodesFront = front(childNodes), start = 0, deleteCount = Infinity, newNonTerminalNode = new _occamParsers.NonTerminalNode(ruleName, childNodesFront), directlyRepeatedNodeChildNodes = directlyRepeatedNode.getChildNodes();
            (_childNodes = childNodes).splice.apply(_childNodes, [
                start,
                deleteCount,
                newNonTerminalNode
            ].concat(_toConsumableArray(directlyRepeatedNodeChildNodes)));
        }
        forwardsSome(childNodes, function(childNode, index) {
            var childNodeIndirectlyRepeatedNode = _instanceof(childNode, _indirectly1.default);
            if (childNodeIndirectlyRepeatedNode) {
                var indirectlyRepeatedNode = childNode, indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(), indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), repeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName), start = 0, deleteCount = index, leadingChildNodes = childNodes.splice(start, deleteCount), newNonTerminalNodeChildNodes = _toConsumableArray(leadingChildNodes).concat(_toConsumableArray(indirectlyRepeatedNodeChildNodes)), newNonTerminalNode = new _occamParsers.NonTerminalNode(ruleName, newNonTerminalNodeChildNodes);
                childNodes.shift();
                childNodes.unshift(newNonTerminalNode);
                return true;
            }
        });
        childNodes.forEach(function(childNode) {
            var _$node = childNode; ///
            rewriteRepeatedNodes(_$node);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRXBzaWxvbk5vZGUsIE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBEaXJlY3RseVJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZC9kaXJlY3RseVwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkL2luZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCwgZnJvbnQsIGZpbHRlciwgZm9yd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZU5vZGVzKG5vZGUpIHtcbiAgcmV3cml0ZVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmV3cml0ZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVFcHNpbG9uTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGZpbHRlcihjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVFcHNpbG9uTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSk7XG5cbiAgICAgIGlmICghY2hpbGROb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJlbW92ZUVwc2lsb25Ob2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXdyaXRlUmVkdWNlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSA9IChub25UZXJtaW5hbE5vZGUgaW5zdGFuY2VvZiBJbmRpcmVjdGx5UmVkdWNlZE5vZGUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUluZGlyZWN0bHlSZWR1Y2VkTm9kZSkge1xuICAgICAgY29uc3QgaW5kaXJlY3RseVJlZHVjZWROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBpbmRpcmVjdGx5UmVkdWNlZE5vZGVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlZHVjZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgIGluZGlyZWN0bHlSZWR1Y2VkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZURpcmVjdGx5UmVkdWNlZE5vZGUgPSAoZmlyc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlZHVjZWROb2RlKTtcblxuICAgIGlmIChmaXJzdENoaWxkTm9kZURpcmVjdGx5UmVkdWNlZE5vZGUpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVkdWNlZE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGlyZWN0bHlSZWR1Y2VkTm9kZUNoaWxkTm9kZXMgPSBkaXJlY3RseVJlZHVjZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5kaXJlY3RseVJlZHVjZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfVxuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7XG5cbiAgICAgIHJld3JpdGVSZWR1Y2VkTm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGxhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXJlY3RseVJlcGVhdGVkTm9kZSk7XG5cbiAgICBpZiAobGFzdENoaWxkTm9kZURpcmVjdGx5UmVwZWF0ZWROb2RlKSB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZSA9IGxhc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lKHJlcGVhdGVkUnVsZU5hbWUpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc0Zyb250ID0gZnJvbnQoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IEluZmluaXR5LFxuICAgICAgICAgICAgbmV3Tm9uVGVybWluYWxOb2RlID0gbmV3IE5vblRlcm1pbmFsTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlc0Zyb250KSxcbiAgICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyA9IGRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdOb25UZXJtaW5hbE5vZGUsIC4uLmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfVxuXG4gICAgZm9yd2FyZHNTb21lKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVJbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgICAgICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSxcbiAgICAgICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGxlYWRpbmdDaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgICAgbmV3Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5sZWFkaW5nQ2hpbGROb2RlcyxcbiAgICAgICAgICAgICAgICAuLi5pbmRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2Rlc1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBuZXdOb25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKHJ1bGVOYW1lLCBuZXdOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgICBjaGlsZE5vZGVzLnNoaWZ0KCk7XG5cbiAgICAgICAgY2hpbGROb2Rlcy51bnNoaWZ0KG5ld05vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmV3cml0ZU5vZGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJmcm9udCIsImZpbHRlciIsImZvcndhcmRzU29tZSIsIm5vZGUiLCJyZXdyaXRlUmVwZWF0ZWROb2RlcyIsInJld3JpdGVSZWR1Y2VkTm9kZXMiLCJyZW1vdmVFcHNpbG9uTm9kZXMiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJmb3JFYWNoIiwibm9uVGVybWluYWxOb2RlSW5kaXJlY3RseVJlZHVjZWROb2RlIiwiSW5kaXJlY3RseVJlZHVjZWROb2RlIiwiaW5kaXJlY3RseVJlZHVjZWROb2RlIiwiaW5kaXJlY3RseVJlZHVjZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwic2V0UnVsZU5hbWUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlRGlyZWN0bHlSZWR1Y2VkTm9kZSIsIkRpcmVjdGx5UmVkdWNlZE5vZGUiLCJkaXJlY3RseVJlZHVjZWROb2RlIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImRpcmVjdGx5UmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwic3BsaWNlIiwibGFzdENoaWxkTm9kZSIsImxhc3RDaGlsZE5vZGVEaXJlY3RseVJlcGVhdGVkTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJkaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJjaGlsZE5vZGVzRnJvbnQiLCJJbmZpbml0eSIsIm5ld05vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImRpcmVjdGx5UmVwZWF0ZWROb2RlQ2hpbGROb2RlcyIsImluZGV4IiwiY2hpbGROb2RlSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJsZWFkaW5nQ2hpbGROb2RlcyIsIm5ld05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzaGlmdCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFjYixTQU1DOzs7ZUFOdUJBLFlBQVk7Ozt5QkFaTCxXQUFXOzRCQUNHLGVBQWU7NkRBRTVCLHlCQUF5Qjs4REFDeEIsMEJBQTBCOytEQUN6QiwyQkFBMkI7Z0VBQzFCLDRCQUE0Qjt3QkFFVyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7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