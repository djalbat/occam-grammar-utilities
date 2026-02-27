"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "arePartsEqual", {
    enumerable: true,
    get: function() {
        return arePartsEqual;
    }
});
const _necessary = require("necessary");
const { first } = _necessary.arrayUtilities;
function arePartsEqual(parts) {
    const firstPart = first(parts), firstPartString = firstPart.asString(), partsEqual = parts.every((part)=>{
        const partString = part.asString(), partStringFirstPartString = partString === firstPartString;
        if (partStringFirstPartString) {
            return true;
        }
    });
    return partsEqual;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVBhcnRzRXF1YWwocGFydHMpIHtcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBmaXJzdFBhcnRTdHJpbmcgPSBmaXJzdFBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgcGFydHNFcXVhbCA9IHBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nID0gKHBhcnRTdHJpbmcgPT09IGZpcnN0UGFydFN0cmluZyk7XG5cbiAgICAgICAgICBpZiAocGFydFN0cmluZ0ZpcnN0UGFydFN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFydHNFcXVhbDtcbn1cbiJdLCJuYW1lcyI6WyJhcmVQYXJ0c0VxdWFsIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBhcnRzIiwiZmlyc3RQYXJ0IiwiZmlyc3RQYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0c0VxdWFsIiwiZXZlcnkiLCJwYXJ0IiwicGFydFN0cmluZyIsInBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1nQkE7OztlQUFBQTs7OzJCQUplO0FBRS9CLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO0FBRXpCLFNBQVNGLGNBQWNHLEtBQUs7SUFDakMsTUFBTUMsWUFBWUgsTUFBTUUsUUFDbEJFLGtCQUFrQkQsVUFBVUUsUUFBUSxJQUNwQ0MsYUFBYUosTUFBTUssS0FBSyxDQUFDLENBQUNDO1FBQ3hCLE1BQU1DLGFBQWFELEtBQUtILFFBQVEsSUFDMUJLLDRCQUE2QkQsZUFBZUw7UUFFbEQsSUFBSU0sMkJBQTJCO1lBQzdCLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0o7QUFDVCJ9