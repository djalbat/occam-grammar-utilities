"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExampleParser;
    }
});
const _occamparsers = require("occam-parsers");
const _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("./nonTerminalNodeMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ExampleParser extends _occamparsers.CommonParser {
    static NonTerminalNodeMap = _nonTerminalNodeMap.default;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3BhcnNlci9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlTWFwIGZyb20gXCIuL25vblRlcm1pbmFsTm9kZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIE5vblRlcm1pbmFsTm9kZU1hcCA9IE5vblRlcm1pbmFsTm9kZU1hcDtcbn0iXSwibmFtZXMiOlsiRXhhbXBsZVBhcnNlciIsIkNvbW1vblBhcnNlciIsIk5vblRlcm1pbmFsTm9kZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs4QkFKUTsyRUFFRTs7Ozs7O0FBRWhCLE1BQU1BLHNCQUFzQkMsMEJBQVk7SUFDckQsT0FBT0MscUJBQXFCQSwyQkFBa0IsQ0FBQztBQUNqRCJ9