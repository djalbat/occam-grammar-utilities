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
var _eliminateLeftRecursion = /*#__PURE__*/ _interop_require_default(require("./eliminateLeftRecursion"));
var _example = /*#__PURE__*/ _interop_require_default(require("./lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("./parser/example"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4YW1wbGVMZXhlciB9IGZyb20gXCIuL2xleGVyL2V4YW1wbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhhbXBsZVBhcnNlciB9IGZyb20gXCIuL3BhcnNlci9leGFtcGxlXCI7XG4iXSwibmFtZXMiOlsiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkV4YW1wbGVMZXhlciIsIkV4YW1wbGVQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsc0JBQXNCO2VBQXRCQTs7SUFFQUMsWUFBWTtlQUFaQTs7SUFDQUMsYUFBYTtlQUFiQTs7OzZFQUg4Qjs4REFFVjsrREFDQyJ9