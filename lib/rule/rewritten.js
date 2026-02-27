"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RewrittenRule;
    }
});
const _occamparsers = require("occam-parsers");
const _rewritten = /*#__PURE__*/ _interop_require_default(require("../node/rewritten"));
const _rewritten1 = /*#__PURE__*/ _interop_require_default(require("../definition/rewritten"));
const _path = require("../utilities/path");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RewrittenRule extends _occamparsers.Rule {
    NonTerminalNodeFromRuleName(ruleName, state) {
        const NonTerminalNode = _rewritten.default;
        return NonTerminalNode;
    }
    static fromRuleAndCycles(rule, cycles, ruleMap, ruleNamesMap) {
        const definitions = [], ruleName = rule.getName(), paths = (0, _path.pathsFromRuleNameAndCycles)(ruleName, cycles, ruleMap, ruleNamesMap);
        paths.forEach((path)=>{
            const rewrittenDefinition = _rewritten1.default.fromPath(path, ruleMap);
            if (rewrittenDefinition !== null) {
                const definition = rewrittenDefinition; ///
                definitions.push(definition);
            }
        });
        const name = ruleName, opacity = rule.getOpacity(), rewrittenRule = new RewrittenRule(name, opacity, definitions);
        return rewrittenRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUnVsZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBSZXdyaXR0ZW5Ob2RlIGZyb20gXCIuLi9ub2RlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5cbmltcG9ydCB7IHBhdGhzRnJvbVJ1bGVOYW1lQW5kQ3ljbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld3JpdHRlblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSkge1xuICAgIGNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IFJld3JpdHRlbk5vZGU7XG5cbiAgICByZXR1cm4gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kQ3ljbGVzKHJ1bGUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBbXSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHBhdGhzID0gcGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMocnVsZU5hbWUsIGN5Y2xlcywgcnVsZU1hcCwgcnVsZU5hbWVzTWFwKTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21QYXRoKHBhdGgsIHJ1bGVNYXApO1xuXG4gICAgICBpZiAocmV3cml0dGVuRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gcmV3cml0dGVuRGVmaW5pdGlvbjsgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBydWxlLmdldE9wYWNpdHkoKSxcbiAgICAgICAgICByZXdyaXR0ZW5SdWxlID0gbmV3IFJld3JpdHRlblJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXdyaXR0ZW5SdWxlIiwiUnVsZSIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lIiwic3RhdGUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZXdyaXR0ZW5Ob2RlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwicnVsZU1hcCIsInJ1bGVOYW1lc01hcCIsImRlZmluaXRpb25zIiwiZ2V0TmFtZSIsInBhdGhzIiwicGF0aHNGcm9tUnVsZU5hbWVBbmRDeWNsZXMiLCJmb3JFYWNoIiwicGF0aCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbVBhdGgiLCJkZWZpbml0aW9uIiwicHVzaCIsIm5hbWUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsInJld3JpdHRlblJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7OEJBUEE7a0VBRUs7bUVBQ007c0JBRVc7Ozs7OztBQUU1QixNQUFNQSxzQkFBc0JDLGtCQUFJO0lBQzdDQyw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO1FBQzNDLE1BQU1DLGtCQUFrQkMsa0JBQWE7UUFFckMsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO1FBQzVELE1BQU1DLGNBQWMsRUFBRSxFQUNoQlQsV0FBV0ssS0FBS0ssT0FBTyxJQUN2QkMsUUFBUUMsSUFBQUEsZ0NBQTBCLEVBQUNaLFVBQVVNLFFBQVFDLFNBQVNDO1FBRXBFRyxNQUFNRSxPQUFPLENBQUMsQ0FBQ0M7WUFDYixNQUFNQyxzQkFBc0JDLG1CQUFtQixDQUFDQyxRQUFRLENBQUNILE1BQU1QO1lBRS9ELElBQUlRLHdCQUF3QixNQUFNO2dCQUNoQyxNQUFNRyxhQUFhSCxxQkFBcUIsR0FBRztnQkFFM0NOLFlBQVlVLElBQUksQ0FBQ0Q7WUFDbkI7UUFDRjtRQUVBLE1BQU1FLE9BQU9wQixVQUNQcUIsVUFBVWhCLEtBQUtpQixVQUFVLElBQ3pCQyxnQkFBZ0IsSUFBSTFCLGNBQWN1QixNQUFNQyxTQUFTWjtRQUV2RCxPQUFPYztJQUNUO0FBQ0YifQ==