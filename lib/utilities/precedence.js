"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNonTerminalNodeUnprecedented", {
    enumerable: true,
    get: function() {
        return isNonTerminalNodeUnprecedented;
    }
});
function isNonTerminalNodeUnprecedented(nonTerminalNode) {
    var nonTerminalNodeUnprecedented;
    var childNodes = nonTerminalNode.getChildNodes(), childNonTerminalNodes = childNodes.filter(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            return true;
        }
    }), childNonTerminalNodeUnprecedented = childNonTerminalNodes.some(function(childNonTerminalNode) {
        var childNonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(childNonTerminalNode);
        if (childNonTerminalNodeUnprecedented) {
            return true;
        }
    });
    if (childNonTerminalNodeUnprecedented) {
        nonTerminalNodeUnprecedented = true;
    } else {
        var precedence = nonTerminalNode.getPrecedence();
        if (precedence !== null) {
            var ruleName = nonTerminalNode.getRuleName(), childNodes1 = nonTerminalNode.getChildNodes();
            nonTerminalNodeUnprecedented = childNodes1.some(function(childNode) {
                var childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);
                if (childNodeLowerPrecedence) {
                    return true;
                }
            });
        }
    }
    return nonTerminalNodeUnprecedented;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlY2VkZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0ICBmdW5jdGlvbiBpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQobm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBjaGlsZE5vblRlcm1pbmFsTm9kZXMgPSBjaGlsZE5vZGVzLmZpbHRlcigoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZE5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQgPSBjaGlsZE5vblRlcm1pbmFsTm9kZXMuc29tZSgoY2hpbGROb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQgPSBpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQoY2hpbGROb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoY2hpbGROb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkKSB7XG4gICAgbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQ7XG59XG4iXSwibmFtZXMiOlsiaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb25UZXJtaW5hbE5vZGVzIiwiZmlsdGVyIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJzb21lIiwiY2hpbGROb25UZXJtaW5hbE5vZGUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWlCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSwrQkFBK0JDLGVBQWU7SUFDN0QsSUFBSUM7SUFFSixJQUFNQyxhQUFhRixnQkFBZ0JHLGFBQWEsSUFDMUNDLHdCQUF3QkYsV0FBV0csTUFBTSxDQUFDLFNBQUNDO1FBQ3pDLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixPQUFPO1FBQ1Q7SUFDRixJQUNBRSxvQ0FBb0NMLHNCQUFzQk0sSUFBSSxDQUFDLFNBQUNDO1FBQzlELElBQU1GLG9DQUFvQ1YsK0JBQStCWTtRQUV6RSxJQUFJRixtQ0FBbUM7WUFDckMsT0FBTztRQUNUO0lBQ0Y7SUFFTixJQUFJQSxtQ0FBbUM7UUFDckNSLCtCQUErQjtJQUNqQyxPQUFPO1FBQ0wsSUFBTVcsYUFBYVosZ0JBQWdCYSxhQUFhO1FBRWhELElBQUlELGVBQWUsTUFBTTtZQUN2QixJQUFNRSxXQUFXZCxnQkFBZ0JlLFdBQVcsSUFDdENiLGNBQWFGLGdCQUFnQkcsYUFBYTtZQUVoREYsK0JBQStCQyxZQUFXUSxJQUFJLENBQUMsU0FBQ0o7Z0JBQzlDLElBQU1VLDJCQUEyQlYsVUFBVVcsaUJBQWlCLENBQUNILFVBQVVGO2dCQUV2RSxJQUFJSSwwQkFBMEI7b0JBQzVCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPZjtBQUNUIn0=