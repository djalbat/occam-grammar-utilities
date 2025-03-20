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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlY2VkZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChub25UZXJtaW5hbE5vZGUpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9uVGVybWluYWxOb2RlcyA9IGNoaWxkTm9kZXMuZmlsdGVyKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IGNoaWxkTm9uVGVybWluYWxOb2Rlcy5zb21lKChjaGlsZE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCA9IGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChjaGlsZE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChjaGlsZE5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQpIHtcbiAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQgPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZDtcbn1cbiJdLCJuYW1lcyI6WyJpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vblRlcm1pbmFsTm9kZXMiLCJmaWx0ZXIiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCIsInNvbWUiLCJjaGlsZE5vblRlcm1pbmFsTm9kZSIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLCtCQUErQkMsZUFBZTtJQUM1RCxJQUFJQztJQUVKLElBQU1DLGFBQWFGLGdCQUFnQkcsYUFBYSxJQUMxQ0Msd0JBQXdCRixXQUFXRyxNQUFNLENBQUMsU0FBQ0M7UUFDekMsSUFBTUMsMkJBQTJCRCxVQUFVRSxpQkFBaUI7UUFFNUQsSUFBSUQsMEJBQTBCO1lBQzVCLE9BQU87UUFDVDtJQUNGLElBQ0FFLG9DQUFvQ0wsc0JBQXNCTSxJQUFJLENBQUMsU0FBQ0M7UUFDOUQsSUFBTUYsb0NBQW9DViwrQkFBK0JZO1FBRXpFLElBQUlGLG1DQUFtQztZQUNyQyxPQUFPO1FBQ1Q7SUFDRjtJQUVOLElBQUlBLG1DQUFtQztRQUNyQ1IsK0JBQStCO0lBQ2pDLE9BQU87UUFDTCxJQUFNVyxhQUFhWixnQkFBZ0JhLGFBQWE7UUFFaEQsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCLElBQU1FLFdBQVdkLGdCQUFnQmUsV0FBVyxJQUN0Q2IsY0FBYUYsZ0JBQWdCRyxhQUFhO1lBRWhERiwrQkFBK0JDLFlBQVdRLElBQUksQ0FBQyxTQUFDSjtnQkFDOUMsSUFBTVUsMkJBQTJCVixVQUFVVyxpQkFBaUIsQ0FBQ0gsVUFBVUY7Z0JBRXZFLElBQUlJLDBCQUEwQjtvQkFDNUIsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9mO0FBQ1QifQ==