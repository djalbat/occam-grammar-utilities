"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartRuleNameInput;
    }
});
const _input = /*#__PURE__*/ _interop_require_default(require("../input"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StartRuleNameInput extends _input.default {
    getStartRuleName() {
        const value = this.getValue(), startRuleName = value; ///
        return startRuleName;
    }
    setStartRuleName(startRuleName) {
        const value = startRuleName; ///
        this.setValue(value);
    }
    parentContext() {
        const getStartRuleName = this.getStartRuleName.bind(this), setStartRuleName = this.setStartRuleName.bind(this);
        return {
            getStartRuleName,
            setStartRuleName
        };
    }
    static defaultProperties = {
        className: "start-rule-name",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFN0YXJ0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBzdGFydFJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRTdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0U3RhcnRSdWxlTmFtZSA9IHRoaXMuc2V0U3RhcnRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTdGFydFJ1bGVOYW1lLFxuICAgICAgc2V0U3RhcnRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzdGFydC1ydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTdGFydFJ1bGVOYW1lSW5wdXQiLCJJbnB1dCIsImdldFN0YXJ0UnVsZU5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwic3RhcnRSdWxlTmFtZSIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZIOzs7Ozs7QUFFSCxNQUFNQSwyQkFBMkJDLGNBQUs7SUFDbkRDLG1CQUFtQjtRQUNqQixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsZ0JBQWdCRixPQUFPLEdBQUc7UUFFaEMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUJELGFBQWEsRUFBRTtRQUM5QixNQUFNRixRQUFRRSxlQUFlLEdBQUc7UUFFaEMsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUNsREgsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRXhELE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0oifQ==