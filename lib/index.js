"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parserUtilities", {
    enumerable: true,
    get: function() {
        return _parser.default;
    }
});
Object.defineProperty(exports, "eliminateLeftRecursion", {
    enumerable: true,
    get: function() {
        return _eliminateLeftRecursion.default;
    }
});
Object.defineProperty(exports, "removeOrRenameReducedNodes", {
    enumerable: true,
    get: function() {
        return _removeOrRenameReducedNodes.default;
    }
});
var _parser = _interopRequireDefault(require("./utilities/parser"));
var _eliminateLeftRecursion = _interopRequireDefault(require("./eliminateLeftRecursion"));
var _removeOrRenameReducedNodes = _interopRequireDefault(require("./removeOrRenameReducedNodes"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCIuL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMgfSBmcm9tIFwiLi9yZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc1wiO1xuIl0sIm5hbWVzIjpbInBhcnNlclV0aWxpdGllcyIsImRlZmF1bHQiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFFT0EsaUJBQWU7Ozt1QkFBMUJDLE9BQU87OzsrQkFFSUMsd0JBQXNCOzs7dUNBQWpDRCxPQUFPOzs7K0JBQ0lFLDRCQUEwQjs7OzJDQUFyQ0YsT0FBTzs7OzZDQUgyQixvQkFBb0I7NkRBRWIsMEJBQTBCO2lFQUN0Qiw4QkFBOEIifQ==