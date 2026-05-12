"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        let lexicalEntries = {};
        try {
            const value = this.getValue(), lexicalEntriesString = value; ///
            lexicalEntries = JSON.parse(lexicalEntriesString);
        } catch (error) {
        ///
        }
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const lexicalEntriesString = JSON.stringify(lexicalEntries, null, 2), value = lexicalEntriesString; ///
        this.setValue(value);
    }
    parentContext() {
        const getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
        return {
            getLexicalEntries,
            setLexicalEntries
        };
    }
    static defaultProperties = {
        className: "lexical-entries",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(LexicalEntriesTextarea)`

  height: 13rem;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0ge307XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICBsZXhpY2FsRW50cmllc1N0cmluZyA9IHZhbHVlOyAvLy9cblxuICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKGxleGljYWxFbnRyaWVzU3RyaW5nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xuICB9XG5cbiAgc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGxleGljYWxFbnRyaWVzU3RyaW5nOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuc2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbEVudHJpZXMsXG4gICAgICBzZXRMZXhpY2FsRW50cmllc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZXhpY2FsLWVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExleGljYWxFbnRyaWVzVGV4dGFyZWEpYFxuXG4gIGhlaWdodDogMTNyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJsZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllc1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwic2V0TGV4aWNhbEVudHJpZXMiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2Q0E7OztlQUFBOzs7c0VBM0NzQjtpRUFFRDs7Ozs7O0FBRXJCLE1BQU1BLCtCQUErQkMsaUJBQVE7SUFDM0NDLG9CQUFvQjtRQUNsQixJQUFJQyxpQkFBaUIsQ0FBQztRQUV0QixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLHVCQUF1QkYsT0FBTyxHQUFHO1lBRXZDRCxpQkFBaUJJLEtBQUtDLEtBQUssQ0FBQ0Y7UUFDOUIsRUFBRSxPQUFPRyxPQUFPO1FBQ2QsR0FBRztRQUNMO1FBRUEsT0FBT047SUFDVDtJQUVBTyxrQkFBa0JQLGNBQWMsRUFBRTtRQUNoQyxNQUFNRyx1QkFBdUJDLEtBQUtJLFNBQVMsQ0FBQ1IsZ0JBQWdCLE1BQU0sSUFDNURDLFFBQVFFLHNCQUFzQixHQUFHO1FBRXZDLElBQUksQ0FBQ00sUUFBUSxDQUFDUjtJQUNoQjtJQUVBUyxnQkFBZ0I7UUFDZCxNQUFNWCxvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1ksSUFBSSxDQUFDLElBQUksR0FDcERKLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUUxRCxPQUFRO1lBQ05aO1lBQ0FRO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xCLHVCQUF1QixDQUFDOzs7O0FBSWpELENBQUMifQ==