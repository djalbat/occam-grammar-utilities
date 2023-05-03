"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createDirectlyRepeatedRules;
    }
});
var _directly = /*#__PURE__*/ _interop_require_default(require("./rule/repeated/directly"));
var _directedGraph = require("./utilities/directedGraph");
var _parts = require("./utilities/parts");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createDirectlyRepeatedRules(ruleMap, directedGraph) {
    var cycles = directedGraph.findCycles(), ruleNames = (0, _directedGraph.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName], directlyRepeatedRule = _directly.default.fromRuleAndCycles(rule, cycles), directlyRepeatedRuleName = directlyRepeatedRule.getName(), directlyRepeatedRuleEffectivelyEmpty = (0, _parts.isRuleEffectivelyEmpty)(directlyRepeatedRule, ruleMap);
        if (directlyRepeatedRuleEffectivelyEmpty) {
            throw new Error("The '".concat(directlyRepeatedRuleName, "' directly repeated rule is effectively empty."));
        }
        ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXJlY3RseVJlcGVhdGVkUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXJlY3RseVJlcGVhdGVkUnVsZSBmcm9tIFwiLi9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJ1bGVOYW1lc0Zyb21DeWNsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZGlyZWN0ZWRHcmFwaFwiO1xuaW1wb3J0IHsgaXNSdWxlRWZmZWN0aXZlbHlFbXB0eSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXJ0c1wiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdGx5UmVwZWF0ZWRSdWxlcyhydWxlTWFwLCBkaXJlY3RlZEdyYXBoKSB7XG4gIGNvbnN0IGN5Y2xlcyA9IGRpcmVjdGVkR3JhcGguZmluZEN5Y2xlcygpLFxuICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcyk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gRGlyZWN0bHlSZXBlYXRlZFJ1bGUuZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzKSxcbiAgICAgICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBkaXJlY3RseVJlcGVhdGVkUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5ID0gaXNSdWxlRWZmZWN0aXZlbHlFbXB0eShkaXJlY3RseVJlcGVhdGVkUnVsZSwgcnVsZU1hcCk7XG5cbiAgICBpZiAoZGlyZWN0bHlSZXBlYXRlZFJ1bGVFZmZlY3RpdmVseUVtcHR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWV9JyBkaXJlY3RseSByZXBlYXRlZCBydWxlIGlzIGVmZmVjdGl2ZWx5IGVtcHR5LmApO1xuICAgIH1cblxuICAgIHJ1bGVNYXBbZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lXSA9IGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVEaXJlY3RseVJlcGVhdGVkUnVsZXMiLCJydWxlTWFwIiwiZGlyZWN0ZWRHcmFwaCIsImN5Y2xlcyIsImZpbmRDeWNsZXMiLCJydWxlTmFtZXMiLCJydWxlTmFtZXNGcm9tQ3ljbGVzIiwiZm9yRWFjaCIsInJ1bGVOYW1lIiwicnVsZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJmcm9tUnVsZUFuZEN5Y2xlcyIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImdldE5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZUVmZmVjdGl2ZWx5RW1wdHkiLCJpc1J1bGVFZmZlY3RpdmVseUVtcHR5IiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7K0RBTFM7NkJBRUc7cUJBQ0c7Ozs7OztBQUV4QixTQUFTQSw0QkFBNEJDLE9BQU8sRUFBRUMsYUFBYSxFQUFFO0lBQzFFLElBQU1DLFNBQVNELGNBQWNFLFVBQVUsSUFDakNDLFlBQVlDLElBQUFBLGtDQUFtQixFQUFDSDtJQUV0Q0UsVUFBVUUsT0FBTyxDQUFDLFNBQUNDLFVBQWE7UUFDOUIsSUFBTUMsT0FBT1IsT0FBTyxDQUFDTyxTQUFTLEVBQ3hCRSx1QkFBdUJDLGlCQUFvQixDQUFDQyxpQkFBaUIsQ0FBQ0gsTUFBTU4sU0FDcEVVLDJCQUEyQkgscUJBQXFCSSxPQUFPLElBQ3ZEQyx1Q0FBdUNDLElBQUFBLDZCQUFzQixFQUFDTixzQkFBc0JUO1FBRTFGLElBQUljLHNDQUFzQztZQUN4QyxNQUFNLElBQUlFLE1BQU0sQUFBQyxRQUFnQyxPQUF6QkosMEJBQXlCLG1EQUFpRDtRQUNwRyxDQUFDO1FBRURaLE9BQU8sQ0FBQ1kseUJBQXlCLEdBQUdIO0lBQ3RDO0FBQ0YifQ==