"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeOrRenameIntermediateNodes;
    }
});
var _reduced = /*#__PURE__*/ _interopRequireDefault(require("./node/reduced"));
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("./node/repeated"));
var _ruleName = require("./utilities/ruleName");
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
function removeOrRenameIntermediateNodes(node) {
    removeOrRenameReducedNodes(node);
    renameRepeatedNodes(node);
}
function renameRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
        childNodes.forEach(function(childNode) {
            var childNodeRepeatedNode = _instanceof(childNode, _repeated.default);
            if (childNodeRepeatedNode) {
                var repeatedNode = childNode, repeatedNodeRuleName = repeatedNode.getRuleName(), repeatedRuleName = repeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromRepeatedRuleName)(repeatedRuleName);
                childNode.setRuleName(ruleName);
            }
            renameRepeatedNodes(childNode);
        });
    }
}
function removeOrRenameReducedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes = removeOrRenameReducedChildNodes(childNodes, ruleName);
        nonTerminalNode.setChildNodes(childNodes);
    }
}
function removeOrRenameReducedChildNodes(childNodes, ruleName) {
    var childNodesLength = childNodes.length;
    childNodes = childNodes.reduce(function(childNodes, childNode) {
        var childNodeReducedNode = _instanceof(childNode, _reduced.default);
        if (childNodeReducedNode) {
            var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, reducedRuleNameMatchesRuleName = (0, _ruleName.doesReducedRuleNameMatchRuleName)(reducedRuleName, ruleName);
            if (reducedRuleNameMatchesRuleName) {
                if (childNodesLength > 1) {
                    var _$ruleName = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
                    childNode.setRuleName(_$ruleName);
                    removeOrRenameReducedNodes(childNode);
                    childNodes.push(childNode);
                } else {
                    var childNodeChildNodes = childNode.getChildNodes();
                    childNodeChildNodes = removeOrRenameReducedChildNodes(childNodeChildNodes);
                    childNodes = childNodes.concat(childNodeChildNodes);
                }
            } else {
                var _$ruleName1 = (0, _ruleName.ruleNameFromReducedRuleName)(reducedRuleName);
                childNode.setRuleName(_$ruleName1);
                removeOrRenameReducedNodes(childNode);
                childNodes.push(childNode);
            }
        } else {
            removeOrRenameReducedNodes(childNode);
            childNodes.push(childNode);
        }
        return childNodes;
    }, []);
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCBkb2VzUmVkdWNlZFJ1bGVOYW1lTWF0Y2hSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpIHtcbiAgcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVwZWF0ZWROb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmVuYW1lUmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMgPSByZW1vdmVPclJlbmFtZVJlZHVjZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSkge1xuICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lTWF0Y2hlc1J1bGVOYW1lID0gZG9lc1JlZHVjZWRSdWxlTmFtZU1hdGNoUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZSk7XG5cbiAgICAgIGlmIChyZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUpIHtcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICAgIGNoaWxkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgY2hpbGROb2RlQ2hpbGROb2RlcyA9IHJlbW92ZU9yUmVuYW1lUmVkdWNlZENoaWxkTm9kZXMoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJub2RlIiwicmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMiLCJyZW5hbWVSZXBlYXRlZE5vZGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZENoaWxkTm9kZXMiLCJzZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJlZHVjZSIsImNoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUiLCJkb2VzUmVkdWNlZFJ1bGVOYW1lTWF0Y2hSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInB1c2giLCJjaGlsZE5vZGVDaGlsZE5vZGVzIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPV0EsK0JBQStCOzs7NERBTC9CLGdCQUFnQjs2REFDZixpQkFBaUI7d0JBRWtFLHNCQUFzQjs7Ozs7Ozs7Ozs7OztBQUVuSCxTQUFTQSwrQkFBK0IsQ0FBQ0MsSUFBSSxFQUFFO0lBQzVEQywwQkFBMEIsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFFakNFLG1CQUFtQixDQUFDRixJQUFJLENBQUMsQ0FBQztDQUMzQjtBQUVELFNBQVNFLG1CQUFtQixDQUFDRixJQUFJLEVBQUU7SUFDakMsSUFBTUcsbUJBQW1CLEdBQUdILElBQUksQ0FBQ0ksaUJBQWlCLEVBQUUsQUFBQztJQUVyRCxJQUFJRCxtQkFBbUIsRUFBRTtRQUN2QixJQUFNRSxlQUFlLEdBQUdMLElBQUksRUFDdEJNLFVBQVUsR0FBR0QsZUFBZSxDQUFDRSxhQUFhLEVBQUUsQUFBQztRQUVuREQsVUFBVSxDQUFDRSxPQUFPLENBQUMsU0FBQ0MsU0FBUyxFQUFLO1lBQ2hDLElBQU1DLHFCQUFxQixHQUFJRCxBQUFTLFdBQVlFLENBQXJCRixTQUFTLEVBQVlFLFNBQVksUUFBQSxDQUFBLEFBQUMsQUFBQztZQUVsRSxJQUFJRCxxQkFBcUIsRUFBRTtnQkFDekIsSUFBTUUsWUFBWSxHQUFHSCxTQUFTLEVBQ3hCSSxvQkFBb0IsR0FBR0QsWUFBWSxDQUFDRSxXQUFXLEVBQUUsRUFDakRDLGdCQUFnQixHQUFHRixvQkFBb0IsRUFDdkNHLFFBQVEsR0FBR0MsSUFBQUEsU0FBNEIsNkJBQUEsRUFBQ0YsZ0JB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