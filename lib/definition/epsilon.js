"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonDefinition;
    }
});
const _occamparsers = require("occam-parsers");
const { EpsilonPart } = _occamparsers.Parts;
class EpsilonDefinition extends _occamparsers.Definition {
    static fromPrecedence(precedence) {
        const epsilonPart = EpsilonPart.fromNothing(), parts = [
            epsilonPart
        ], epsilonDefinition = EpsilonDefinition.fromPartsAndPrecedence(parts, precedence);
        return epsilonDefinition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBFcHNpbG9uUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBFcHNpbG9uUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gRXBzaWxvbkRlZmluaXRpb24uZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZXBzaWxvbkRlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcHNpbG9uRGVmaW5pdGlvbiIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJEZWZpbml0aW9uIiwiZnJvbVByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIiwiZXBzaWxvblBhcnQiLCJmcm9tTm90aGluZyIsInBhcnRzIiwiZXBzaWxvbkRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzhCQUphO0FBRWxDLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLG1CQUFLO0FBRWQsTUFBTUYsMEJBQTBCRyx3QkFBVTtJQUN2RCxPQUFPQyxlQUFlQyxVQUFVLEVBQUU7UUFDaEMsTUFBTUMsY0FBY0wsWUFBWU0sV0FBVyxJQUNyQ0MsUUFBUTtZQUNORjtTQUNELEVBQ0RHLG9CQUFvQlQsa0JBQWtCVSxzQkFBc0IsQ0FBQ0YsT0FBT0g7UUFFMUUsT0FBT0k7SUFDVDtBQUNGIn0=