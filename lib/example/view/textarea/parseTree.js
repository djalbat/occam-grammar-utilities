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
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        if (parseTree !== null) {
            parseTree.shiftLine(); //
            const parseTreeString = parseTree.asString(), value = parseTreeString; ///
            this.setValue(value);
        } else {
            this.clearParseTree();
        }
    }
    clearParseTree() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
        return {
            setParseTree,
            clearParseTree
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}
const _default = (0, _easywithstyle.default)(ParseTreeTextarea)`

  height: 56rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYXJzZVRyZWVUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiA1NnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwiVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhclBhcnNlVHJlZSIsIkVNUFRZX1NUUklORyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZDQTs7O2VBQUE7OztzRUEzQ3NCO2lFQUVEOzJCQUVROzs7Ozs7QUFFN0IsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUN0Q0MsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLElBQUlBLGNBQWMsTUFBTTtZQUN0QkEsVUFBVUMsU0FBUyxJQUFLLEVBQUU7WUFFMUIsTUFBTUMsa0JBQWtCRixVQUFVRyxRQUFRLElBQ3BDQyxRQUFRRixpQkFBa0IsR0FBRztZQUVuQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0Q7UUFDaEIsT0FBTztZQUNMLElBQUksQ0FBQ0UsY0FBYztRQUNyQjtJQUNGO0lBRUFBLGlCQUFpQjtRQUNmLE1BQU1GLFFBQVFHLHVCQUFZO1FBRTFCLElBQUksQ0FBQ0YsUUFBUSxDQUFDRDtJQUNoQjtJQUVBSSxnQkFBZ0I7UUFDZCxNQUFNVCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxJQUFJLENBQUMsSUFBSSxHQUMxQ0gsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUVwRCxPQUFRO1lBQ05WO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFVBQVU7SUFDWixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakIsa0JBQWtCLENBQUM7Ozs7QUFJNUMsQ0FBQyJ9