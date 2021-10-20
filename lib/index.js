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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIH0gZnJvbSBcIi4vcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiO1xuIl0sIm5hbWVzIjpbImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJkZWZhdWx0IiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OzsrQkFFUUEsQ0FBc0I7Ozt1Q0FBakNDLE9BQU87OzsrQkFDSUMsQ0FBK0I7OztnREFBMUNELE9BQU8ifQ==