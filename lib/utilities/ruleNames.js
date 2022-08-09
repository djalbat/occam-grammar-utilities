"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "retrieveLeftRecursiveRuleNames", {
    enumerable: true,
    get: function() {
        return retrieveLeftRecursiveRuleNames;
    }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function retrieveLeftRecursiveRuleNames(lLeftRecursiveRule, LeftRecursiveDefinition, callback) {
    var leftRecursiveRuleNames = [], definitions = lLeftRecursiveRule.getDefinitions();
    definitions.forEach(function(definition) {
        if (_instanceof(definition, LeftRecursiveDefinition)) {
            var leftRecursiveDefinition = definition, ruleName = callback(leftRecursiveDefinition), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
            if (!leftRecursiveRuleNamesIncludesRuleName) {
                var leftRecursiveRuleName = ruleName; ///
                leftRecursiveRuleNames.push(leftRecursiveRuleName);
            }
        }
    });
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKGxMZWZ0UmVjdXJzaXZlUnVsZSwgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSxcbiAgICAgICAgZGVmaW5pdGlvbnMgPSBsTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgaWYgKGRlZmluaXRpb24gaW5zdGFuY2VvZiBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgIHJ1bGVOYW1lID0gY2FsbGJhY2sobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG4iXSwibmFtZXMiOlsicmV0cmlldmVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibExlZnRSZWN1cnNpdmVSdWxlIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjYWxsYmFjayIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFFR0EsZ0NBQThCOzs7ZUFBOUJBLDhCQUE4Qjs7Ozs7Ozs7OztBQUF2QyxTQUFTQSw4QkFBOEIsQ0FBQ0Msa0JBQWtCLEVBQUVDLHVCQUF1QixFQUFFQyxRQUFRLEVBQUU7SUFDcEcsSUFBTUMsc0JBQXNCLEdBQUcsRUFBRSxFQUMzQkMsV0FBVyxHQUFHSixrQkFBa0IsQ0FBQ0ssY0FBYyxFQUFFLEFBQUM7SUFFeERELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDLFNBQUNDLFVBQVUsRUFBSztRQUNsQyxJQUFJQSxBQUFVLFdBQVlOLENBQXRCTSxVQUFVLEVBQVlOLHVCQUF1QixDQUFBLEVBQUU7WUFDakQsSUFBTU8sdUJBQXVCLEdBQUdELFVBQVUsRUFDcENFLFFBQVEsR0FBR1AsUUFBUSxDQUFDTSx1QkFBdUIsQ0FBQyxFQUM1Q0Usc0NBQXNDLEdBQUdQLHNCQUFzQixDQUFDUSxRQUFRLENBQUNGLFFBQVEsQ0FBQyxBQUFDO1lBRXpGLElBQUksQ0FBQ0Msc0NBQXNDLEVBQUU7Z0JBQzNDLElBQU1FLHFCQUFxQixHQUFHSCxRQUFRLEFBQUMsRUFBRSxHQUFHO2dCQUU1Q04sc0JBQXNCLENBQUNVLElBQUksQ0FBQ0QscUJBQXFCLENBQUMsQ0FBQzthQUNwRDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBT1Qsc0JBQXNCLENBQUM7Q0FDL0IifQ==