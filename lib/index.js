"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    rewriteNode: function() {
        return _rewriteNode.default;
    },
    eliminateLeftRecursion: function() {
        return _eliminateLeftRecursion.default;
    },
    ExampleLexer: function() {
        return _example.default;
    },
    ExampleParser: function() {
        return _example1.default;
    }
});
var _rewriteNode = /*#__PURE__*/ _interop_require_default(require("./rewriteNode"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interop_require_default(require("./eliminateLeftRecursion"));
var _example = /*#__PURE__*/ _interop_require_default(require("./lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("./parser/example"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXdyaXRlTm9kZSB9IGZyb20gXCIuL3Jld3JpdGVOb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwiLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhhbXBsZUxleGVyIH0gZnJvbSBcIi4vbGV4ZXIvZXhhbXBsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeGFtcGxlUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyL2V4YW1wbGVcIjtcbiJdLCJuYW1lcyI6WyJyZXdyaXRlTm9kZSIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJFeGFtcGxlTGV4ZXIiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFb0JBLFdBQVc7ZUFBWEEsb0JBQVc7O0lBQ1hDLHNCQUFzQjtlQUF0QkEsK0JBQXNCOztJQUV0QkMsWUFBWTtlQUFaQSxnQkFBWTs7SUFDWkMsYUFBYTtlQUFiQSxpQkFBYTs7O2tFQUpNOzZFQUNXOzhEQUVWOytEQUNDIn0=