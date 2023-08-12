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
if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function(callback, thisArg) {
        for(var i = this.length - 1; i >= 0; i--){
            if (callback.call(thisArg, this[i], i, this)) return i;
        }
        return -1;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZExhc3RJbmRleCkge1xuICBBcnJheS5wcm90b3R5cGUuZmluZExhc3RJbmRleCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKSkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4YW1wbGVMZXhlciB9IGZyb20gXCIuL2xleGVyL2V4YW1wbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhhbXBsZVBhcnNlciB9IGZyb20gXCIuL3BhcnNlci9leGFtcGxlXCI7XG4iXSwibmFtZXMiOlsiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkV4YW1wbGVMZXhlciIsIkV4YW1wbGVQYXJzZXIiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbmRMYXN0SW5kZXgiLCJjYWxsYmFjayIsInRoaXNBcmciLCJpIiwibGVuZ3RoIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBV29CQSxzQkFBc0I7ZUFBdEJBLCtCQUFzQjs7SUFFdEJDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBQ1pDLGFBQWE7ZUFBYkEsaUJBQWE7Ozs2RUFIaUI7OERBRVY7K0RBQ0M7Ozs7OztBQVp6QyxJQUFJLENBQUNDLE1BQU1DLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFO0lBQ2xDRixNQUFNQyxTQUFTLENBQUNDLGFBQWEsR0FBRyxTQUFVQyxRQUFRLEVBQUVDLE9BQU87UUFDekQsSUFBSyxJQUFJQyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUdELEtBQUssR0FBR0EsSUFBSztZQUN6QyxJQUFJRixTQUFTSSxJQUFJLENBQUNILFNBQVMsSUFBSSxDQUFDQyxFQUFFLEVBQUVBLEdBQUcsSUFBSSxHQUFHLE9BQU9BO1FBQ3ZEO1FBQ0EsT0FBTyxDQUFDO0lBQ1Y7QUFDRiJ9