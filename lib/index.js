"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "eliminateLeftRecursion", {
    enumerable: true,
    get: function() {
        return _eliminateLeftRecursion.default;
    }
});
Object.defineProperty(exports, "removeOrRenameIntermediateNodes", {
    enumerable: true,
    get: function() {
        return _removeOrRenameIntermediateNodes.default;
    }
});
var _eliminateLeftRecursion = _interopRequireDefault(require("./eliminateLeftRecursion"));
var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./removeOrRenameIntermediateNodes"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7K0JBRVEsQ0FBc0I7Ozt1Q0FBakMsT0FBTzs7OytCQUNJLENBQStCOzs7Z0RBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIH0gZnJvbSBcIi4vcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiO1xuIl19