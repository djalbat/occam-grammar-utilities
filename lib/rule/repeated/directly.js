"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRule;
    }
});
const _occamparsers = require("occam-parsers");
const _directly = /*#__PURE__*/ _interop_require_default(require("../../node/repeated/directly"));
const _directly1 = /*#__PURE__*/ _interop_require_default(require("../../definition/repeated/directly"));
const _ruleName = require("../../utilities/ruleName");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DirectlyRepeatedRule extends _occamparsers.Rule {
    NonTerminalNodeFromRuleName(ruleName, state) {
        const NonTerminalNode = _directly.default;
        return NonTerminalNode;
    }
    static fromRuleAndCycles(rule, cycles) {
        const ruleName = rule.getName(), definitions = [];
        cycles.map((cycle)=>{
            const directlyRepeatedDefinition = _directly1.default.fromRuleAndCycle(rule, cycle);
            if (directlyRepeatedDefinition !== null) {
                const definition = directlyRepeatedDefinition; ///
                definitions.push(definition);
            }
        });
        const directlyRepeatedRuleName = (0, _ruleName.directlyRepeatedRuleNameFromRuleName)(ruleName), name = directlyRepeatedRuleName, opacity = rule.getOpacity(), directlyRepeatedRule = new DirectlyRepeatedRule(name, opacity, definitions);
        return directlyRepeatedRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IERpcmVjdGx5UmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkL2RpcmVjdGx5XCI7XG5pbXBvcnQgRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmVwZWF0ZWQvZGlyZWN0bHlcIlxuXG5pbXBvcnQgeyBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIE5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSwgc3RhdGUpIHtcbiAgICBjb25zdCBOb25UZXJtaW5hbE5vZGUgPSBEaXJlY3RseVJlcGVhdGVkTm9kZTtcblxuICAgIHJldHVybiBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmRDeWNsZXMocnVsZSwgY3ljbGVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtdO1xuXG4gICAgY3ljbGVzLm1hcCgoY3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uID0gRGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb24uZnJvbVJ1bGVBbmRDeWNsZShydWxlLCBjeWNsZSk7XG5cbiAgICAgIGlmIChkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGlyZWN0bHlSZXBlYXRlZERlZmluaXRpb247ICAvLy9cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gcnVsZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgZGlyZWN0bHlSZXBlYXRlZFJ1bGUgPSBuZXcgRGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJzdGF0ZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZnJvbVJ1bGVBbmRDeWNsZXMiLCJydWxlIiwiY3ljbGVzIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwibWFwIiwiY3ljbGUiLCJkaXJlY3RseVJlcGVhdGVkRGVmaW5pdGlvbiIsIkRpcmVjdGx5UmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbVJ1bGVBbmRDeWNsZSIsImRlZmluaXRpb24iLCJwdXNoIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7OEJBUEE7aUVBRVk7a0VBQ007MEJBRWM7Ozs7OztBQUV0QyxNQUFNQSw2QkFBNkJDLGtCQUFJO0lBQ3BEQyw0QkFBNEJDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO1FBQzNDLE1BQU1DLGtCQUFrQkMsaUJBQW9CO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFO1FBQ3JDLE1BQU1OLFdBQVdLLEtBQUtFLE9BQU8sSUFDdkJDLGNBQWMsRUFBRTtRQUV0QkYsT0FBT0csR0FBRyxDQUFDLENBQUNDO1lBQ1YsTUFBTUMsNkJBQTZCQyxrQkFBMEIsQ0FBQ0MsZ0JBQWdCLENBQUNSLE1BQU1LO1lBRXJGLElBQUlDLCtCQUErQixNQUFNO2dCQUN2QyxNQUFNRyxhQUFhSCw0QkFBNkIsR0FBRztnQkFFbkRILFlBQVlPLElBQUksQ0FBQ0Q7WUFDbkI7UUFDRjtRQUVBLE1BQU1FLDJCQUEyQkMsSUFBQUEsOENBQW9DLEVBQUNqQixXQUNoRWtCLE9BQU9GLDBCQUNQRyxVQUFVZCxLQUFLZSxVQUFVLElBQ3pCQyx1QkFBdUIsSUFBSXhCLHFCQUFxQnFCLE1BQU1DLFNBQVNYO1FBRXJFLE9BQU9hO0lBQ1Q7QUFDRiJ9