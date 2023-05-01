"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rewriteLeftRecursiveRules;
    }
});
var _rewritten = /*#__PURE__*/ _interop_require_default(require("./definition/rewritten"));
var _directedGraph = require("./utilities/directedGraph");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rewriteLeftRecursiveRules(ruleMap, directedGraph) {
    var cycles = directedGraph.findCycles(), ruleNames = (0, _directedGraph.ruleNamesFromCycles)(cycles);
    ruleNames.forEach(function(ruleName) {
        var rule = ruleMap[ruleName];
        rule.removeAllDefinitions();
        var rewrittenDefinition = _rewritten.default.fromRuleName(ruleName), definition = rewrittenDefinition; ///
        rule.addDefinition(definition);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXdyaXRlTGVmdFJlY3Vyc2l2ZVJ1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmV3cml0dGVuRGVmaW5pdGlvbiBmcm9tIFwiLi9kZWZpbml0aW9uL3Jld3JpdHRlblwiO1xuXG5pbXBvcnQgeyBydWxlTmFtZXNGcm9tQ3ljbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RpcmVjdGVkR3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyhydWxlTWFwLCBkaXJlY3RlZEdyYXBoKSB7XG4gIGNvbnN0IGN5Y2xlcyA9IGRpcmVjdGVkR3JhcGguZmluZEN5Y2xlcygpLFxuICAgICAgICBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tQ3ljbGVzKGN5Y2xlcyk7XG5cbiAgcnVsZU5hbWVzLmZvckVhY2goKHJ1bGVOYW1lKSA9PiB7XG4gICAgY29uc3QgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdO1xuXG4gICAgcnVsZS5yZW1vdmVBbGxEZWZpbml0aW9ucygpO1xuXG4gICAgY29uc3QgcmV3cml0dGVuRGVmaW5pdGlvbiA9IFJld3JpdHRlbkRlZmluaXRpb24uZnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICBydWxlLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gIH0pO1xufVxuXG4iXSwibmFtZXMiOlsicmV3cml0ZUxlZnRSZWN1cnNpdmVSdWxlcyIsInJ1bGVNYXAiLCJkaXJlY3RlZEdyYXBoIiwiY3ljbGVzIiwiZmluZEN5Y2xlcyIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21DeWNsZXMiLCJmb3JFYWNoIiwicnVsZU5hbWUiLCJydWxlIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJyZXdyaXR0ZW5EZWZpbml0aW9uIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZSIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O2dFQUpROzZCQUVJOzs7Ozs7QUFFckIsU0FBU0EsMEJBQTBCQyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUN4RSxJQUFNQyxTQUFTRCxjQUFjRSxVQUFVLElBQ2pDQyxZQUFZQyxJQUFBQSxrQ0FBbUIsRUFBQ0g7SUFFdENFLFVBQVVFLE9BQU8sQ0FBQyxTQUFDQyxVQUFhO1FBQzlCLElBQU1DLE9BQU9SLE9BQU8sQ0FBQ08sU0FBUztRQUU5QkMsS0FBS0Msb0JBQW9CO1FBRXpCLElBQU1DLHNCQUFzQkMsa0JBQW1CLENBQUNDLFlBQVksQ0FBQ0wsV0FDdkRNLGFBQWFILHFCQUFxQixHQUFHO1FBRTNDRixLQUFLTSxhQUFhLENBQUNEO0lBQ3JCO0FBQ0YifQ==