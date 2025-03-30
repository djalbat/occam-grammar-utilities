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
    var childNonTerminalNodeUnprecedented = nonTerminalNode.someChildNode(function(childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();
        if (childNodeNonTerminalNode) {
            var childNonTerminalNode = childNode, childNonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(childNonTerminalNode);
            if (childNonTerminalNodeUnprecedented) {
                return true;
            }
        }
    });
    if (childNonTerminalNodeUnprecedented) {
        nonTerminalNodeUnprecedented = true;
    } else {
        var precedence = nonTerminalNode.getPrecedence();
        if (precedence !== null) {
            var ruleName = nonTerminalNode.getRuleName();
            nonTerminalNodeUnprecedented = nonTerminalNode.someChildNode(function(childNode) {
                var childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);
                if (childNodeLowerPrecedence) {
                    return true;
                }
            });
        }
    }
    return nonTerminalNodeUnprecedented;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJlY2VkZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZChub25UZXJtaW5hbE5vZGUpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQ7XG5cbiAgY29uc3QgY2hpbGROb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gaXNOb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkKGNoaWxkTm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChjaGlsZE5vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQpIHtcbiAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5wcmVjZWRlbnRlZDtcbn1cbiJdLCJuYW1lcyI6WyJpc05vblRlcm1pbmFsTm9kZVVucHJlY2VkZW50ZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwiY2hpbGROb25UZXJtaW5hbE5vZGVVbnByZWNlZGVudGVkIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb25UZXJtaW5hbE5vZGUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSwrQkFBK0JDLGVBQWU7SUFDNUQsSUFBSUM7SUFFSixJQUFNQyxvQ0FBb0NGLGdCQUFnQkcsYUFBYSxDQUFDLFNBQUNDO1FBQ2pFLElBQU1DLDJCQUEyQkQsVUFBVUUsaUJBQWlCO1FBRTVELElBQUlELDBCQUEwQjtZQUM1QixJQUFNRSx1QkFBdUJILFdBQ3ZCRixvQ0FBb0NILCtCQUErQlE7WUFFekUsSUFBSUwsbUNBQW1DO2dCQUNyQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRU4sSUFBSUEsbUNBQW1DO1FBQ3JDRCwrQkFBK0I7SUFDakMsT0FBTztRQUNMLElBQU1PLGFBQWFSLGdCQUFnQlMsYUFBYTtRQUVoRCxJQUFJRCxlQUFlLE1BQU07WUFDdkIsSUFBTUUsV0FBV1YsZ0JBQWdCVyxXQUFXO1lBRTVDViwrQkFBK0JELGdCQUFnQkcsYUFBYSxDQUFDLFNBQUNDO2dCQUM1RCxJQUFNUSwyQkFBMkJSLFVBQVVTLGlCQUFpQixDQUFDSCxVQUFVRjtnQkFFdkUsSUFBSUksMEJBQTBCO29CQUM1QixPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1g7QUFDVCJ9