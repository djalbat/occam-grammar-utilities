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
            const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString);
            lexicalEntries = json; ///
        } catch (error) {
        ///
        }
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const json = lexicalEntries, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0ge307XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gdmFsdWUsIC8vL1xuICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzID0ganNvbjsgLy8vXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QganNvbiA9IGxleGljYWxFbnRyaWVzLCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLFxuICAgICAgICAgIHZhbHVlID0ganNvblN0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGV4aWNhbC1lbnRyaWVzXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZXhpY2FsRW50cmllc1RleHRhcmVhKWBcblxuICBoZWlnaHQ6IDEzcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwibGV4aWNhbEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwianNvblN0cmluZyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInNldExleGljYWxFbnRyaWVzIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0NBOzs7ZUFBQTs7O3NFQTdDc0I7aUVBRUQ7Ozs7OztBQUVyQixNQUFNQSwrQkFBK0JDLGlCQUFRO0lBQzNDQyxvQkFBb0I7UUFDbEIsSUFBSUMsaUJBQWlCLENBQUM7UUFFdEIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUNiRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO1lBRXhCSCxpQkFBaUJJLE1BQU0sR0FBRztRQUM1QixFQUFFLE9BQU9HLE9BQU87UUFDZCxHQUFHO1FBQ0w7UUFFQSxPQUFPUDtJQUNUO0lBRUFRLGtCQUFrQlIsY0FBYyxFQUFFO1FBQ2hDLE1BQU1JLE9BQU9KLGdCQUNQRyxhQUFhRSxLQUFLSSxTQUFTLENBQUNMLE1BQU0sTUFBTSxJQUN4Q0gsUUFBUUUsWUFBWSxHQUFHO1FBRTdCLElBQUksQ0FBQ08sUUFBUSxDQUFDVDtJQUNoQjtJQUVBVSxnQkFBZ0I7UUFDZCxNQUFNWixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ2EsSUFBSSxDQUFDLElBQUksR0FDcERKLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUUxRCxPQUFRO1lBQ05iO1lBQ0FTO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLHVCQUF1QixDQUFDOzs7O0FBSWpELENBQUMifQ==