"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rewriteNode;
    }
});
var _occamparsers = require("occam-parsers");
var _reduced = /*#__PURE__*/ _interop_require_default(require("./node/reduced"));
var _directly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/directly"));
var _indirectly = /*#__PURE__*/ _interop_require_default(require("./node/repeated/indirectly"));
var _ruleName = require("./utilities/ruleName");
var _array = require("./utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function rewriteNode(node) {
    replaceReducedNodesAndDirectlyRepeatedNodes(node);
    rearrangeIndirectlyRepeatedNodes(node);
}
function replaceReducedNodesAndDirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node; ///
    var childNodes = nonTerminalNode.getChildNodes();
    var firstChildNode = (0, _array.first)(childNodes);
    if (_instanceof(firstChildNode, _reduced.default)) {
        var parentNode = nonTerminalNode, reducedNode = firstChildNode, childNodesTail = (0, _array.tail)(childNodes), directlyRepeatedNodes = childNodesTail, reducedNodeChildNodes = reducedNode.getChildNodes(), replacementChildNodes = _to_consumable_array(reducedNodeChildNodes);
        (0, _array.backwardsForEach)(directlyRepeatedNodes, function(directlyRepeatedNode) {
            var directlyRepeatedNodeChildNodes = directlyRepeatedNode.getChildNodes();
            (0, _array.push)(replacementChildNodes, directlyRepeatedNodeChildNodes);
        });
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    childNodes = nonTerminalNode.getChildNodes();
    var index = 0, childNode = childNodes[index] || null;
    while(childNode !== null){
        if (_instanceof(childNode, _directly.default)) {
            var parentNode1 = nonTerminalNode, replacedChildNode = childNode, childNodeChildNodes = childNode.getChildNodes(), replacementChildNodes1 = childNodeChildNodes; ///
            replaceChildNode(parentNode1, replacedChildNode, replacementChildNodes1);
        }
        index++;
        childNode = childNodes[index] || null;
    }
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        replaceReducedNodesAndDirectlyRepeatedNodes(_$node);
    });
}
function rearrangeIndirectlyRepeatedNodes(node) {
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (!nodeNonTerminalNode) {
        return;
    }
    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
    var lastChildNode = (0, _array.last)(childNodes);
    if (_instanceof(lastChildNode, _indirectly.default)) {
        var parentNode = nonTerminalNode, frontChildNodes = (0, _array.front)(childNodes), indirectlyRepeatedNode = lastChildNode, indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(), indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName, ruleName = (0, _ruleName.ruleNameFromIndirectlyRepeatedRuleName)(indirectlyRepeatedRuleName); ///
        childNodes = frontChildNodes; ///
        nonTerminalNode = new _occamparsers.NonTerminalNode(ruleName, childNodes);
        childNodes = indirectlyRepeatedNode.getChildNodes();
        var childNode = nonTerminalNode, replacementChildNodes = [
            childNode
        ].concat(_to_consumable_array(childNodes));
        replaceAllChildNodes(parentNode, replacementChildNodes);
    }
    nonTerminalNode = node; ///
    childNodes = nonTerminalNode.getChildNodes();
    childNodes.forEach(function(childNode) {
        var _$node = childNode; ///
        rearrangeIndirectlyRepeatedNodes(_$node);
    });
}
function replaceAllChildNodes(parentNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), start = 0, deleteCount = Infinity;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}
function replaceChildNode(parentNode, childNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(childNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuaW1wb3J0IHsgZnJvbnQsIGZpcnN0LCBsYXN0LCB0YWlsLCBwdXNoLCBiYWNrd2FyZHNGb3JFYWNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJld3JpdGVOb2RlKG5vZGUpIHsgIC8vL1xuICByZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuXG4gIHJlYXJyYW5nZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICBsZXQgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKTtcblxuICBpZiAoZmlyc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHJlZHVjZWROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNUYWlsID0gdGFpbChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkTm9kZXMgPSBjaGlsZE5vZGVzVGFpbCwgLy8vXG4gICAgICAgICAgcmVkdWNlZE5vZGVDaGlsZE5vZGVzID0gcmVkdWNlZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIC4uLnJlZHVjZWROb2RlQ2hpbGROb2Rlc1xuICAgICAgICAgIF07XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGRpcmVjdGx5UmVwZWF0ZWROb2RlcywgKGRpcmVjdGx5UmVwZWF0ZWROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMgPSBkaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRDaGlsZE5vZGVzLCBkaXJlY3RseVJlcGVhdGVkTm9kZUNoaWxkTm9kZXMpO1xuICAgIH0pO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGxldCBpbmRleCA9IDAsXG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSB8fCBudWxsO1xuXG4gIHdoaWxlIChjaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgRGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUNoaWxkTm9kZXMgPSBjaGlsZE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gY2hpbGROb2RlQ2hpbGROb2RlczsgLy8vXG5cbiAgICAgIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcblxuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdIHx8IG51bGw7XG4gIH1cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmVwbGFjZVJlZHVjZWROb2Rlc0FuZERpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlYXJyYW5nZUluZGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjb25zdCBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKTtcblxuICBpZiAobGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIEluZGlyZWN0bHlSZXBlYXRlZE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBmcm9udENoaWxkTm9kZXMgPSBmcm9udChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlID0gbGFzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSk7ICAvLy9cblxuICAgIGNoaWxkTm9kZXMgPSBmcm9udENoaWxkTm9kZXM7IC8vL1xuXG4gICAgbm9uVGVybWluYWxOb2RlID0gbmV3IE5vblRlcm1pbmFsTm9kZShydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICBjaGlsZE5vZGVzID0gaW5kaXJlY3RseVJlcGVhdGVkTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBjaGlsZE5vZGUsXG4gICAgICAgICAgICAuLi5jaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHk7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBwYXJlbnROb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xufVxuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlIiwibm9kZSIsInJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJyZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2RlcyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsIlJlZHVjZWROb2RlIiwicGFyZW50Tm9kZSIsInJlZHVjZWROb2RlIiwiY2hpbGROb2Rlc1RhaWwiLCJ0YWlsIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmVkdWNlZE5vZGVDaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwiYmFja3dhcmRzRm9yRWFjaCIsImRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZGlyZWN0bHlSZXBlYXRlZE5vZGVDaGlsZE5vZGVzIiwicHVzaCIsInJlcGxhY2VBbGxDaGlsZE5vZGVzIiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwiY2hpbGROb2RlQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGUiLCJmb3JFYWNoIiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbnRDaGlsZE5vZGVzIiwiZnJvbnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzRCQVRROzhEQUVSOytEQUNTO2lFQUNFO3dCQUVvQjtxQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsU0FBU0EsWUFBWUMsSUFBSSxFQUFFO0lBQ3hDQyw0Q0FBNENEO0lBRTVDRSxpQ0FBaUNGO0FBQ25DO0FB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