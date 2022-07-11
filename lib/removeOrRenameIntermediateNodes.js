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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZUZyb21SZXBlYXRlZFJ1bGVOYW1lLCBkb2VzUmVkdWNlZFJ1bGVOYW1lTWF0Y2hSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpIHtcbiAgcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSk7XG5cbiAgcmVuYW1lUmVwZWF0ZWROb2Rlcyhub2RlKTtcbn1cblxuZnVuY3Rpb24gcmVuYW1lUmVwZWF0ZWROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVJlcGVhdGVkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZXBlYXRlZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUmVwZWF0ZWROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVkTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gcmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcbiAgICAgIH1cblxuICAgICAgcmVuYW1lUmVwZWF0ZWROb2RlcyhjaGlsZE5vZGUpO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMgPSByZW1vdmVPclJlbmFtZVJlZHVjZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSkge1xuICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSk7XG5cbiAgICBpZiAoY2hpbGROb2RlUmVkdWNlZE5vZGUpIHtcbiAgICAgIGNvbnN0IHJlZHVjZWROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJlZHVjZWROb2RlUnVsZU5hbWUgPSByZWR1Y2VkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lID0gcmVkdWNlZE5vZGVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgcmVkdWNlZFJ1bGVOYW1lTWF0Y2hlc1J1bGVOYW1lID0gZG9lc1JlZHVjZWRSdWxlTmFtZU1hdGNoUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lLCBydWxlTmFtZSk7XG5cbiAgICAgIGlmIChyZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUpIHtcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICAgIGNoaWxkTm9kZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgY2hpbGROb2RlQ2hpbGROb2RlcyA9IHJlbW92ZU9yUmVuYW1lUmVkdWNlZENoaWxkTm9kZXMoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSk7XG5cbiAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyhjaGlsZE5vZGUpO1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJub2RlIiwicmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMiLCJyZW5hbWVSZXBlYXRlZE5vZGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUmVwZWF0ZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlIiwicmVwZWF0ZWROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZENoaWxkTm9kZXMiLCJzZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJlZHVjZSIsImNoaWxkTm9kZVJlZHVjZWROb2RlIiwiUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUiLCJkb2VzUmVkdWNlZFJ1bGVOYW1lTWF0Y2hSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInB1c2giLCJjaGlsZE5vZGVDaGlsZE5vZGVzIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBT2IsU0FJQzs7O2VBSnVCQSwrQkFBK0I7Ozs0REFML0IsZ0JBQWdCOzZEQUNmLGlCQUFpQjt3QkFFa0Usc0JBQXNCOzs7Ozs7Ozs7Ozs7O0FBRW5ILFNBQVNBLCtCQUErQixDQUFDQyxJQUFJLEVBQUU7SUFDNURDLDBCQUEwQixDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUVqQ0UsbUJBQW1CLENBQUNGLElBQUksQ0FBQyxDQUFDO0NBQzNCO0FBRUQsU0FBU0UsbUJBQW1CLENBQUNGLElBQUksRUFBRTtJQUNqQyxJQUFNRyxtQkFBbUIsR0FBR0gsSUFBSSxDQUFDSSxpQkFBaUIsRUFBRSxBQUFDO0lBRXJELElBQUlELG1CQUFtQixFQUFFO1FBQ3ZCLElBQU1FLGVBQWUsR0FBR0wsSUFBSSxFQUN0Qk0sVUFBVSxHQUFHRCxlQUFlLENBQUNFLGFBQWEsRUFBRSxBQUFDO1FBRW5ERCxVQUFVLENBQUNFLE9BQU8sQ0FBQyxTQUFDQyxTQUFTLEVBQUs7WUFDaEMsSUFBTUMscUJBQXFCLEdBQUlELEFBQVMsV0FBWUUsQ0FBckJGLFNBQVMsRUFBWUUsU0FBWSxRQUFBLENBQUEsQUFBQyxBQUFDO1lBRWxFLElBQUlELHFCQUFxQixFQUFFO2dCQUN6QixJQUFNRSxZQUFZLEdBQUdILFNBQVMsRUFDeEJJLG9CQUFvQixHQUFHRCxZQUFZLENBQUNFLFdBQVcsRUFBRSxFQUNqREMsZ0JBQWdCLEdBQUdGLG9CQUFvQixFQUN2Q0csUUFBUSxHQUFHQyxJQUFBQSxTQUE0Qiw2QkFB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