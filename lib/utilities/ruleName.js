"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ruleNameFromReducedRuleName: function() {
        return ruleNameFromReducedRuleName;
    },
    ruleNameFromIndirectlyRepeatedRuleName: function() {
        return ruleNameFromIndirectlyRepeatedRuleName;
    },
    reducedRuleNameFromRuleName: function() {
        return reducedRuleNameFromRuleName;
    },
    directlyRepeatedRuleNameFromRuleName: function() {
        return directlyRepeatedRuleNameFromRuleName;
    },
    indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName: function() {
        return indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName;
    }
});
var _constants = require("../constants");
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/_$/g, _constants.EMPTY_STRING);
    return ruleName;
}
function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
    var ruleName = indirectlyRepeatedRuleName.replace(/^[^~]+~/g, _constants.EMPTY_STRING);
    return ruleName;
}
function reducedRuleNameFromRuleName(ruleName) {
    var reducedRuleName = "".concat(ruleName, "_");
    return reducedRuleName;
}
function directlyRepeatedRuleNameFromRuleName(ruleName) {
    var directlyRepeatedRuleName = "".concat(ruleName, "~");
    return directlyRepeatedRuleName;
}
function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = "".concat(ruleName, "~").concat(leftRecursiveRuleName);
    return indirectlyRepeatedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZShyZWR1Y2VkUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSByZWR1Y2VkUnVsZU5hbWUucmVwbGFjZSgvXyQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZShpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLnJlcGxhY2UoL15bXn5dK34vZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVkdWNlZFJ1bGVOYW1lID0gYCR7cnVsZU5hbWV9X2A7XG5cbiAgcmV0dXJuIHJlZHVjZWRSdWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1+YDtcblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfX4ke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX1gO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsMkJBQTJCO2VBQTNCQTs7SUFNQUMsc0NBQXNDO2VBQXRDQTs7SUFNQUMsMkJBQTJCO2VBQTNCQTs7SUFNQUMsb0NBQW9DO2VBQXBDQTs7SUFNQUMsOERBQThEO2VBQTlEQTs7O3lCQTFCYTtBQUV0QixTQUFTSiw0QkFBNEJLLGVBQWU7SUFDekQsSUFBTUMsV0FBV0QsZ0JBQWdCRSxPQUFPLENBQUMsT0FBT0MsdUJBQVk7SUFFNUQsT0FBT0Y7QUFDVDtBQUVPLFNBQVNMLHVDQUF1Q1EsMEJBQTBCO0lBQy9FLElBQU1ILFdBQVdHLDJCQUEyQkYsT0FBTyxDQUFDLFlBQVlDLHVCQUFZO0lBRTVFLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTSiw0QkFBNEJJLFFBQVE7SUFDbEQsSUFBTUQsa0JBQWtCLEFBQUMsR0FBVyxPQUFUQyxVQUFTO0lBRXBDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTRixxQ0FBcUNHLFFBQVE7SUFDM0QsSUFBTUksMkJBQTJCLEFBQUMsR0FBVyxPQUFUSixVQUFTO0lBRTdDLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTTiwrREFBK0RFLFFBQVEsRUFBRUsscUJBQXFCO0lBQzVHLElBQU1GLDZCQUE2QixBQUFDLEdBQWNFLE9BQVpMLFVBQVMsS0FBeUIsT0FBdEJLO0lBRWxELE9BQU9GO0FBQ1QifQ==