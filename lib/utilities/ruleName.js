"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get directlyRepeatedRuleNameFromRuleName () {
        return directlyRepeatedRuleNameFromRuleName;
    },
    get indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName () {
        return indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName;
    },
    get leftRecursiveRuleNameFromIndirectlyRepeatedRuleName () {
        return leftRecursiveRuleNameFromIndirectlyRepeatedRuleName;
    },
    get reducedRuleNameFromRuleName () {
        return reducedRuleNameFromRuleName;
    },
    get ruleNameFromIndirectlyRepeatedRuleName () {
        return ruleNameFromIndirectlyRepeatedRuleName;
    },
    get ruleNameFromReducedRuleName () {
        return ruleNameFromReducedRuleName;
    }
});
var _constants = require("../constants");
function reducedRuleNameFromRuleName(ruleName) {
    var reducedRuleName = "".concat(ruleName, "_");
    return reducedRuleName;
}
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/_$/g, _constants.EMPTY_STRING);
    return ruleName;
}
function directlyRepeatedRuleNameFromRuleName(ruleName) {
    var directlyRepeatedRuleName = "".concat(ruleName, "~");
    return directlyRepeatedRuleName;
}
function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
    var ruleName = indirectlyRepeatedRuleName.replace(/~.+$/g, _constants.EMPTY_STRING);
    return ruleName;
}
function leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
    var leftRecursiveRuleName = indirectlyRepeatedRuleName.replace(/^[^~]+~/g, _constants.EMPTY_STRING);
    return leftRecursiveRuleName;
}
function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = "".concat(ruleName, "~").concat(leftRecursiveRuleName);
    return indirectlyRepeatedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1fYDtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lKHJlZHVjZWRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZSA9IHJlZHVjZWRSdWxlTmFtZS5yZXBsYWNlKC9fJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBydWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1+YDtcblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZS5yZXBsYWNlKC9+LiskL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLnJlcGxhY2UoL15bXn5dK34vZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICBjb25zdCBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfX4ke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX1gO1xuXG4gIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdCZ0JBO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFaQUM7ZUFBQUE7Ozt5QkFSYTtBQUV0QixTQUFTRiw0QkFBNEJHLFFBQVE7SUFDbEQsSUFBTUMsa0JBQWtCLEFBQUMsR0FBVyxPQUFURCxVQUFTO0lBRXBDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTRiw0QkFBNEJFLGVBQWU7SUFDekQsSUFBTUQsV0FBV0MsZ0JBQWdCQyxPQUFPLENBQUMsT0FBT0MsdUJBQVk7SUFFNUQsT0FBT0g7QUFDVDtBQUVPLFNBQVNOLHFDQUFxQ00sUUFBUTtJQUMzRCxJQUFNSSwyQkFBMkIsQUFBQyxHQUFXLE9BQVRKLFVBQVM7SUFFN0MsT0FBT0k7QUFDVDtBQUVPLFNBQVNOLHVDQUF1Q08sMEJBQTBCO0lBQy9FLElBQU1MLFdBQVdLLDJCQUEyQkgsT0FBTyxDQUFDLFNBQVNDLHVCQUFZO0lBRXpFLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTSixvREFBb0RTLDBCQUEwQjtJQUM1RixJQUFNQyx3QkFBd0JELDJCQUEyQkgsT0FBTyxDQUFDLFlBQVlDLHVCQUFZO0lBRXpGLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTWCwrREFBK0RLLFFBQVEsRUFBRU0scUJBQXFCO0lBQzVHLElBQU1ELDZCQUE2QixBQUFDLEdBQWNDLE9BQVpOLFVBQVMsS0FBeUIsT0FBdEJNO0lBRWxELE9BQU9EO0FBQ1QifQ==