"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeOrRenameIntermediateNodes;
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
        var childNodeRepeatedNode = (0, _class).isInstanceOf(childNode, _repeated.default);
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
        var childNodeReducedNode = (0, _class).isInstanceOf(childNode, _reduced.default);
        if (childNodeReducedNode) {
            var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, reducedRuleNameMatchesRuleName = (0, _ruleName).checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName);
            if (reducedRuleNameMatchesRuleName) {
                if (childNodesLength > 1) {
                    var ruleName1 = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName);
                    childNode.setRuleName(ruleName1);
                    removeOrRenameReducedNodes(childNode);
                    childNodes1.push(childNode);
                } else {
                    var childNodeChildNodes = childNode.getChildNodes();
                    childNodeChildNodes = removeOrRenameReducedChildNodes(childNodeChildNodes);
                    childNodes1 = childNodes1.concat(childNodeChildNodes);
                }
            } else {
                var ruleName2 = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVkdWNlZE5vZGUgZnJvbSBcIi4vbm9kZS9yZWR1Y2VkXCI7XG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWRcIjtcblxuaW1wb3J0IHsgaXNJbnN0YW5jZU9mIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUsIGNoZWNrUmVkdWNlZFJ1bGVOYW1lTWF0Y2hlc1J1bGVOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSkge1xuICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcblxuICByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2RlcyA9IHJlbW92ZVJlcGVhdGVkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVwZWF0ZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZXBlYXRlZE5vZGUgPSBpc0luc3RhbmNlT2YoY2hpbGROb2RlLCBSZXBlYXRlZE5vZGUpO1xuXG4gICAgaWYgKGNoaWxkTm9kZVJlcGVhdGVkTm9kZSkge1xuICAgICAgbGV0IGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBjaGlsZE5vZGVDaGlsZE5vZGVzID0gcmVtb3ZlUmVwZWF0ZWRDaGlsZE5vZGVzKGNoaWxkTm9kZUNoaWxkTm9kZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQoY2hpbGROb2RlQ2hpbGROb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZVJlcGVhdGVkTm9kZXMoY2hpbGROb2RlKTtcblxuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMgPSByZW1vdmVPclJlbmFtZVJlZHVjZWRDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIHJ1bGVOYW1lKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBydWxlTmFtZSkge1xuICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVSZWR1Y2VkTm9kZSA9IGlzSW5zdGFuY2VPZihjaGlsZE5vZGUsIFJlZHVjZWROb2RlKTtcblxuICAgIGlmIChjaGlsZE5vZGVSZWR1Y2VkTm9kZSkge1xuICAgICAgY29uc3QgcmVkdWNlZE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgcmVkdWNlZE5vZGVSdWxlTmFtZSA9IHJlZHVjZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWUgPSByZWR1Y2VkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICByZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUgPSBjaGVja1JlZHVjZWRSdWxlTmFtZU1hdGNoZXNSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUsIHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKHJlZHVjZWRSdWxlTmFtZU1hdGNoZXNSdWxlTmFtZSkge1xuICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpO1xuXG4gICAgICAgICAgY2hpbGROb2RlLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY2hpbGROb2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVDaGlsZE5vZGVzID0gcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkQ2hpbGROb2RlcyhjaGlsZE5vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmNvbmNhdChjaGlsZE5vZGVDaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKTtcblxuICAgICAgICBjaGlsZE5vZGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzKGNoaWxkTm9kZSk7XG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztrQkFRWSwrQkFBK0I7QUFOL0IsR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDZixHQUFpQixDQUFqQixTQUFpQjtBQUViLEdBQW1CLENBQW5CLE1BQW1CO0FBQ2lDLEdBQXNCLENBQXRCLFNBQXNCOzs7Ozs7U0FFL0UsK0JBQStCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsMEJBQTBCLENBQUMsSUFBSTtJQUUvQixtQkFBbUIsQ0FBQyxJQUFJO0FBQzFCLENBQUM7U0FFUSxtQkFBbUIsQ0FB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