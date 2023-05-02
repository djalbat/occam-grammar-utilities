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
var _array = require("./utilities/array");
var _ruleName = require("./utilities/ruleName");
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
    var index = 0, childNode = childNodes[index] || null;
    while(childNode !== null){
        if (_instanceof(childNode, _reduced.default) || _instanceof(childNode, _directly.default)) {
            var childNodeChildNodes = childNode.getChildNodes(), parentNode = nonTerminalNode, replacedChildNode = childNode, replacementChildNodes = childNodeChildNodes; ///
            replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
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
function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
    var _childNodes;
    var childNodes = parentNode.getChildNodes(), index = childNodes.indexOf(replacedChildNode), start = index, deleteCount = 1;
    (_childNodes = childNodes).splice.apply(_childNodes, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementChildNodes)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IFJlZHVjZWROb2RlIGZyb20gXCIuL25vZGUvcmVkdWNlZFwiO1xuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvZGlyZWN0bHlcIjtcbmltcG9ydCBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBsYXN0LCBmcm9udCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZU5vZGUobm9kZSkgeyAgLy8vXG4gIHJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG5cbiAgcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VkTm9kZXNBbmREaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGxldCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBsZXQgaW5kZXggPSAwLFxuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICB3aGlsZSAoY2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgaWYgKChjaGlsZE5vZGUgaW5zdGFuY2VvZiBSZWR1Y2VkTm9kZSkgfHwgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpcmVjdGx5UmVwZWF0ZWROb2RlKSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZXMgPSBjaGlsZE5vZGVDaGlsZE5vZGVzOyAvLy9cblxuICAgICAgcmVwbGFjZUNoaWxkTm9kZShwYXJlbnROb2RlLCByZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzKG5vZGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNvbnN0IGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpO1xuXG4gIGlmIChsYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGZyb250Q2hpbGROb2RlcyA9IGZyb250KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGluZGlyZWN0bHlSZXBlYXRlZE5vZGUgPSBsYXN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKTsgIC8vL1xuXG4gICAgY2hpbGROb2RlcyA9IGZyb250Q2hpbGROb2RlczsgLy8vXG5cbiAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIGNoaWxkTm9kZXMgPSBpbmRpcmVjdGx5UmVwZWF0ZWROb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGNoaWxkTm9kZSxcbiAgICAgICAgICAgIC4uLmNoaWxkTm9kZXNcbiAgICAgICAgICBdO1xuXG4gICAgcmVwbGFjZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZWFycmFuZ2VJbmRpcmVjdGx5UmVwZWF0ZWROb2Rlcyhub2RlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICBjaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGUocGFyZW50Tm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGNoaWxkTm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZSIsIm5vZGUiLCJyZXBsYWNlUmVkdWNlZE5vZGVzQW5kRGlyZWN0bHlSZXBlYXRlZE5vZGVzIiwicmVhcnJhbmdlSW5kaXJlY3RseVJlcGVhdGVkTm9kZXMiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiY2hpbGROb2RlIiwiUmVkdWNlZE5vZGUiLCJEaXJlY3RseVJlcGVhdGVkTm9kZSIsImNoaWxkTm9kZUNoaWxkTm9kZXMiLCJwYXJlbnROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwiZm9yRWFjaCIsImxhc3RDaGlsZE5vZGUiLCJsYXN0IiwiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImZyb250Q2hpbGROb2RlcyIsImZyb250IiwiaW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwicmVwbGFjZUFsbENoaWxkTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJzcGxpY2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzRCQVRROzhEQUVSOytEQUNTO2lFQUNFO3FCQUVQO3dCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsU0FBU0EsWUFBWUMsSUFBSSxFQUFFO0lBQ3hDQyw0Q0FBNENEO0lBRTVDRSxpQ0FBaUNGO0FBQ25DO0FBRUEsU0FBU0MsNENBQTRDRCxJQUFJLEVBQUU7SUFDekQsSUFBTUcsc0JBQXNCSCxLQUFLSSxpQkFBaUI7SUFFbEQsSUFBSSxDQUFDRCxx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