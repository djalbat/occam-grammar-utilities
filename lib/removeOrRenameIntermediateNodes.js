"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _reduced = _interopRequireDefault(require("./node/reduced"));
var _repeated = _interopRequireDefault(require("./node/repeated"));
var _class = require("./utilities/class");
var _ruleName = require("./utilities/ruleName");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function removeOrRenameIntermediateNodes(node) {
    removeOrRenameReducedNodes(node);
    removeRepeatedNodes(node);
}
exports.default = removeOrRenameIntermediateNodes;
function removeRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node; ///
        var childNodes = nonTerminalNode.getChildNodes();
        childNodes = removeRepeatedChildNodes(childNodes);
        nonTerminalNode.setChildNodes(childNodes);
    }
}
function removeRepeatedChildNodes(childNodes) {
    childNodes = childNodes.reduce(function(childNodes1, childNode) {
        var childNodeRepeatedNode = _class.isInstanceOf(childNode, _repeated.default);
        if (childNodeRepeatedNode) {
            var childNodeChildNodes = childNode.getChildNodes();
            childNodeChildNodes = removeRepeatedChildNodes(childNodeChildNodes);
            childNodes1 = childNodes1.concat(childNodeChildNodes);
        } else {
            removeRepeatedNodes(childNode);
            childNodes1.push(childNode);
        }
        return childNodes1;
    }, []);
    return childNodes;
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
    childNodes = childNodes.reduce(function(childNodes1, childNode) {
        var childNodeReducedNode = _class.isInstanceOf(childNode, _reduced.default);
        if (childNodeReducedNode) {
            var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, reducedRuleNameMatchesRuleName = _ruleName.checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName);
            if (reducedRuleNameMatchesRuleName) {
                if (childNodesLength > 1) {
                    var ruleName1 = _ruleName.ruleNameFromReducedRuleName(reducedRuleName);
                    childNode.setRuleName(ruleName1);
                    removeOrRenameReducedNodes(childNode);
                    childNodes1.push(childNode);
                } else {
                    var childNodeChildNodes = childNode.getChildNodes();
                    childNodeChildNodes = removeOrRenameReducedChildNodes(childNodeChildNodes);
                    childNodes1 = childNodes1.concat(childNodeChildNodes);
                }
            } else {
                var ruleName2 = _ruleName.ruleNameFromReducedRuleName(reducedRuleName);
                childNode.setRuleName(ruleName2);
                removeOrRenameReducedNodes(childNode);
                childNodes1.push(childNode);
            }
        } else {
            removeOrRenameReducedNodes(childNode);
            childNodes1.push(childNode);
        }
        return childNodes1;
    }, []);
    return childNodes;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIGNoZWNrUmVkdWNlZFJ1bGVOYW1lTWF0Y2hlc1J1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSkge1xuICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2RlcyA9IHJlbW92ZVJlcGVhdGVkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVwZWF0ZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSBpc0luc3RhbmNlT2YoY2hpbGROb2RlLCBSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgbGV0IGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVDaGlsZE5vZGVzID0gcmVtb3ZlUmVwZWF0ZWRDaGlsZE5vZGVzKGNoaWxkTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZVJlcGVhdGVkTm9kZXMoY2hpbGROb2RlKTtcblxuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMgPSByZW1vdmVPclJlbmFtZVJlZHVjZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSkge1xuICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IGlzSW5zdGFuY2VPZihjaGlsZE5vZGUsIFJlZHVjZWROb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUgPSBjaGVja1JlZHVjZWRSdWxlTmFtZU1hdGNoZXNSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUsIHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJlZHVjZWRSdWxlTmFtZU1hdGNoZXNSdWxlTmFtZSkge1xuICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY2hpbGROb2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVDaGlsZE5vZGVzID0gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmNvbmNhdChjaGlsZE5vZGVDaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICBjaGlsZE5vZGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztJQUVBLFFBQUE7SUFDQSxTQUFBO0lBRUEsTUFBQTtJQUNBLFNBQUE7Ozs7OztTQUVBLCtCQUFBLENBQUEsSUFBQTtBQUNBLDhCQUFBLENBQUEsSUFBQTtBQUVBLHVCQUFBLENBQUEsSUFBQTs7a0JBSEEsK0JBQUE7U0FNQSxtQkFBQSxDQUFBLElBQUE7UUFDQSxtQkFBQSxHQUFBLElBQUEsQ0FBQSxpQkFBQTtRQUVBLG1CQUFBO1lBQ0EsZUFBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtZQUVBLFVBQUEsR0FBQSxlQUFBLENBQUEsYUFBQTtBQUVBLGtCQUFBLEdBQUEsd0JBQUEsQ0FBQSxVQUFBO0FBRUEsdUJBQUEsQ0FBQSxhQUFBLENBQUEsVUFBQTs7O1NBSUEsd0JBQUEsQ0FBQSxVQUFBO0FBQ0EsY0FBQSxHQUFBLFVBQUEsQ0FBQSxNQUFBLFVBQUEsV0FBQSxFQUFBLFNBQUE7WUFDQSxxQkFBQSxHQXpCQSxNQUFBLGNBeUJBLFNBQUEsRUEzQkEsU0FBQTtZQTZCQSxxQkFBQTtnQkFDQSxtQkFBQSxHQUFBLFNBQUEsQ0FBQSxhQUFBO0FBRUEsK0JBQUEsR0FBQSx3QkFBQSxDQUFBLG1CQUFBO0FBRUEsdUJBQUEsR0FBQSxXQUFBLENBQUEsTUFBQSxDQUFBLG1CQUFBOztBQUVBLCtCQUFBLENBQUEsU0FBQTtBQUVBLHVCQUFBLENBQUEsSUFBQSxDQUFBLFNBQUE7O2VBR0EsV0FBQTs7V0FHQSxVQUFBOztTQUdBLDBCQUFBLENBQUEsSUFBQTtRQUNBLG1CQUFBLEdBQUEsSUFBQSxDQUFBLGlCQUFBO1FBRUEsbUJBQUE7WUFDQSxlQUFBLEdBQUEsSUFBQSxFQUNBLFFBQUEsR0FBQSxlQUFBLENBQUEsV0FBQTtZQUVBLFVBQUEsR0FBQSxlQUFBLENBQUEsYUFBQTtBQUVBLGtCQUFBLEdBQUEsK0JBQUEsQ0FBQSxVQUFBLEVBQUEsUUFBQTtBQUVBLHVCQUFBLENBQUEsYUFBQSxDQUFBLFVBQUE7OztTQUlBLCtCQUFBLENBQUEsVUFBQSxFQUFBLFFBQUE7UUFDQSxnQkFBQSxHQUFBLFVBQUEsQ0FBQSxNQUFBO0FBRUEsY0FBQSxHQUFBLFVBQUEsQ0FBQSxNQUFBLFVBQUEsV0FBQSxFQUFBLFNBQUE7WUFDQSxvQkFBQSxHQWhFQSxNQUFBLGNBZ0VBLFNBQUEsRUFuRUEsUUFBQTtZQXFFQSxvQkFBQTtnQkFDQSxXQUFBLEdBQUEsU0FBQSxFQUNBLG1CQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsSUFDQSxlQUFBLEdBQUEsbUJBQUEsRUFDQSw4QkFBQSxHQXJFQSxTQUFBLHFDQXFFQSxlQUFBLEVBQUEsUUFBQTtnQkFFQSw4QkFBQTtvQkFDQSxnQkFBQSxHQUFBLENBQUE7d0JBQ0EsU0FBQSxHQXpFQSxTQUFBLDZCQXlFQSxlQUFBO0FBRUEsNkJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQTtBQUVBLDhDQUFBLENBQUEsU0FBQTtBQUVBLCtCQUFBLENBQUEsSUFBQSxDQUFBLFNBQUE7O3dCQUVBLG1CQUFBLEdBQUEsU0FBQSxDQUFBLGFBQUE7QUFFQSx1Q0FBQSxHQUFBLCtCQUFBLENBQUEsbUJBQUE7QUFFQSwrQkFBQSxHQUFBLFdBQUEsQ0FBQSxNQUFBLENBQUEsbUJBQUE7OztvQkFHQSxTQUFBLEdBeEZBLFNBQUEsNkJBd0ZBLGVBQUE7QUFFQSx5QkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBO0FBRUEsMENBQUEsQ0FBQSxTQUFBO0FBRUEsMkJBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQTs7O0FBR0Esc0NBQUEsQ0FBQSxTQUFBO0FBRUEsdUJBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQTs7ZUFHQSxXQUFBOztXQUdBLFVBQUEifQ==