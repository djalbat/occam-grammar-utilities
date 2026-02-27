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
class AdjustedBNFTextarea extends _textarea.default {
    getAdjustedBNF() {
        const value = this.getValue(), adjustedBNF = value; ///
        return adjustedBNF;
    }
    setAdjustedBNF(adjustedBNF) {
        const value = adjustedBNF; ///
        this.setValue(value);
    }
    parentContext() {
        const getAdjustedBNF = this.getAdjustedBNF.bind(this), setAdjustedBNF = this.setAdjustedBNF.bind(this);
        return {
            getAdjustedBNF,
            setAdjustedBNF
        };
    }
    static defaultProperties = {
        className: "adjusted-bnf",
        spellCheck: "false",
        readOnly: false
    };
}
const _default = (0, _easywithstyle.default)(AdjustedBNFTextarea)`

  height: 56rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvYWRqdXN0ZWRCTkYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgQWRqdXN0ZWRCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0QWRqdXN0ZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gYWRqdXN0ZWRCTkY7XG4gIH1cblxuICBzZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORikge1xuICAgIGNvbnN0IHZhbHVlID0gYWRqdXN0ZWRCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRBZGp1c3RlZEJORiA9IHRoaXMuZ2V0QWRqdXN0ZWRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRBZGp1c3RlZEJORiA9IHRoaXMuc2V0QWRqdXN0ZWRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0QWRqdXN0ZWRCTkYsXG4gICAgICBzZXRBZGp1c3RlZEJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhZGp1c3RlZC1ibmZcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IGZhbHNlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShBZGp1c3RlZEJORlRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDU2cmVtO1xuICBcbmA7Il0sIm5hbWVzIjpbIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldEFkanVzdGVkQk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFDQTs7O2VBQUE7OztzRUFuQ3NCO2lFQUVEOzs7Ozs7QUFFckIsTUFBTUEsNEJBQTRCQyxpQkFBUTtJQUN4Q0MsaUJBQWlCO1FBQ2YsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGNBQWNGLE9BQU8sR0FBRztRQUU5QixPQUFPRTtJQUNUO0lBRUFDLGVBQWVELFdBQVcsRUFBRTtRQUMxQixNQUFNRixRQUFRRSxhQUFjLEdBQUc7UUFFL0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDOUNILGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQ0csSUFBSSxDQUFDLElBQUk7UUFFcEQsT0FBUTtZQUNOUDtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxVQUFVO0lBQ1osRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2Qsb0JBQW9CLENBQUM7Ozs7QUFJOUMsQ0FBQyJ9