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
    childNodes = childNodes.reduce(function(childNodes, childNode) {
        var childNodeRepeatedNode = (0, _class).isInstanceOf(childNode, _repeated.default);
        if (childNodeRepeatedNode) {
            var childNodeChildNodes = childNode.getChildNodes();
            childNodeChildNodes = removeRepeatedChildNodes(childNodeChildNodes);
            childNodes = childNodes.concat(childNodeChildNodes);
        } else {
            removeRepeatedNodes(childNode);
            childNodes.push(childNode);
        }
        return childNodes;
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
    childNodes = childNodes.reduce(function(childNodes, childNode) {
        var childNodeReducedNode = (0, _class).isInstanceOf(childNode, _reduced.default);
        if (childNodeReducedNode) {
            var reducedNode = childNode, reducedNodeRuleName = reducedNode.getRuleName(), reducedRuleName = reducedNodeRuleName, reducedRuleNameMatchesRuleName = (0, _ruleName).checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName);
            if (reducedRuleNameMatchesRuleName) {
                if (childNodesLength > 1) {
                    var ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName);
                    childNode.setRuleName(ruleName);
                    removeOrRenameReducedNodes(childNode);
                    childNodes.push(childNode);
                } else {
                    var childNodeChildNodes = childNode.getChildNodes();
                    childNodeChildNodes = removeOrRenameReducedChildNodes(childNodeChildNodes);
                    childNodes = childNodes.concat(childNodeChildNodes);
                }
            } else {
                var ruleName = (0, _ruleName).ruleNameFromReducedRuleName(reducedRuleName);
                childNode.setRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzLmpzIl0sIm5hbWVzIjpbIlJlZHVjZWROb2RlIiwiUmVwZWF0ZWROb2RlIiwiaXNJbnN0YW5jZU9mIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwiY2hlY2tSZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwibm9kZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIiwicmVtb3ZlUmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmVtb3ZlUmVwZWF0ZWRDaGlsZE5vZGVzIiwic2V0Q2hpbGROb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVJlcGVhdGVkTm9kZSIsImNoaWxkTm9kZUNoaWxkTm9kZXMiLCJjb25jYXQiLCJwdXNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUmVkdWNlZE5vZGUiLCJyZWR1Y2VkTm9kZSIsInJlZHVjZWROb2RlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVNYXRjaGVzUnVsZU5hbWUiLCJzZXRSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztrQkFRWSwrQkFBK0I7QUFOL0IsR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDZixHQUFpQixDQUFqQixTQUFpQjtBQUViLEdBQW1CLENBQW5CLE1BQW1CO0FBQ2lDLEdBQXNCLENBQXRCLFNBQXNCOzs7Ozs7U0FFL0UsK0JBQStCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0QsMEJBQTBCLENBQUMsSUFB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