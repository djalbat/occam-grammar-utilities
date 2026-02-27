"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedNode;
    }
});
const _occamparsers = require("occam-parsers");
class IndirectlyRepeatedNode extends _occamparsers.NonTerminalNode {
    isNullary() {
        let nullary = false;
        const singular = this.isSingular();
        if (singular) {
            nullary = this.everyChildNode((childNode)=>{
                if (childNode instanceof _occamparsers.EpsilonNode) {
                    return true;
                }
            });
        }
        return nullary;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVwc2lsb25Ob2RlLCBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNOdWxsYXJ5KCkge1xuICAgIGxldCBudWxsYXJ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBudWxsYXJ5ID0gdGhpcy5ldmVyeUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uTm9kZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbGFyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoSW5kaXJlY3RseVJlcGVhdGVkTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImlzTnVsbGFyeSIsIm51bGxhcnkiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJldmVyeUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsIkVwc2lsb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7OEJBRndCO0FBRTlCLE1BQU1BLCtCQUErQkMsNkJBQWU7SUFDakVDLFlBQVk7UUFDVixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7UUFFaEMsSUFBSUQsVUFBVTtZQUNaRCxVQUFVLElBQUksQ0FBQ0csY0FBYyxDQUFDLENBQUNDO2dCQUM3QixJQUFJQSxxQkFBcUJDLHlCQUFXLEVBQUU7b0JBQ3BDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsT0FBT0w7SUFDVDtJQUVBLE9BQU9NLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1osNkJBQWUsQ0FBQ1EsMENBQTBDLENBQUNULHdCQUF3QlUsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUN2TyJ9