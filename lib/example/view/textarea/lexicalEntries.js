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
const _constants = require("../../constants");
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
        const lexicalEntriesString = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE), value = lexicalEntriesString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGxleGljYWxFbnRyaWVzU3RyaW5nID0gdmFsdWU7IC8vL1xuXG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNTdHJpbmcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsIERPVUJMRV9TUEFDRSksXG4gICAgICAgICAgdmFsdWUgPSBsZXhpY2FsRW50cmllc1N0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZXhpY2FsRW50cmllc1RleHRhcmVhKWBcblxuICBoZWlnaHQ6IDEzcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwibGV4aWNhbEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXNTdHJpbmciLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInNldExleGljYWxFbnRyaWVzIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0NBOzs7ZUFBQTs7O3NFQTdDc0I7aUVBRUQ7MkJBRVE7Ozs7OztBQUU3QixNQUFNQSwrQkFBK0JDLGlCQUFRO0lBQzNDQyxvQkFBb0I7UUFDbEIsSUFBSUMsaUJBQWlCLENBQUM7UUFFdEIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyx1QkFBdUJGLE9BQU8sR0FBRztZQUV2Q0QsaUJBQWlCSSxLQUFLQyxLQUFLLENBQUNGO1FBQzlCLEVBQUUsT0FBT0csT0FBTztRQUNkLEdBQUc7UUFDTDtRQUVBLE9BQU9OO0lBQ1Q7SUFFQU8sa0JBQWtCUCxjQUFjLEVBQUU7UUFDaEMsTUFBTUcsdUJBQXVCQyxLQUFLSSxTQUFTLENBQUNSLGdCQUFnQixNQUFNUyx1QkFBWSxHQUN4RVIsUUFBUUUsc0JBQXNCLEdBQUc7UUFFdkMsSUFBSSxDQUFDTyxRQUFRLENBQUNUO0lBQ2hCO0lBRUFVLGdCQUFnQjtRQUNkLE1BQU1aLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDYSxJQUFJLENBQUMsSUFBSSxHQUNwREwsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNLLElBQUksQ0FBQyxJQUFJO1FBRTFELE9BQVE7WUFDTmI7WUFDQVE7UUFDRjtJQUNGO0lBRUEsT0FBT00sb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbkIsdUJBQXVCLENBQUM7Ozs7QUFJakQsQ0FBQyJ9