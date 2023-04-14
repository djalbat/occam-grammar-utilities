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
    rewriteNodes: function() {
        return _rewriteNodes.default;
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
var _rewriteNodes = /*#__PURE__*/ _interop_require_default(require("./rewriteNodes"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interop_require_default(require("./eliminateLeftRecursion"));
var _example = /*#__PURE__*/ _interop_require_default(require("./lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("./parser/example"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXdyaXRlTm9kZXMgfSBmcm9tIFwiLi9yZXdyaXRlTm9kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCIuL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeGFtcGxlTGV4ZXIgfSBmcm9tIFwiLi9sZXhlci9leGFtcGxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4YW1wbGVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXIvZXhhbXBsZVwiO1xuIl0sIm5hbWVzIjpbInJld3JpdGVOb2RlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJFeGFtcGxlTGV4ZXIiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFb0JBLFlBQVk7ZUFBWkEscUJBQVk7O0lBQ1pDLHNCQUFzQjtlQUF0QkEsK0JBQXNCOztJQUV0QkMsWUFBWTtlQUFaQSxnQkFBWTs7SUFDWkMsYUFBYTtlQUFiQSxpQkFBYTs7O21FQUpPOzZFQUNVOzhEQUVWOytEQUNDIn0=