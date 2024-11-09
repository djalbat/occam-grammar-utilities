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
    isDefinitionQualified: function() {
        return isDefinitionQualified;
    },
    isPartQualified: function() {
        return isPartQualified;
    }
});
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var OptionalPartPartType = _occamparsers.partTypes.OptionalPartPartType, OneOrMorePartsPartType = _occamparsers.partTypes.OneOrMorePartsPartType, ZeroOrMorePartsPartType = _occamparsers.partTypes.ZeroOrMorePartsPartType;
var first = _necessary.arrayUtilities.first;
function isPartQualified(part) {
    var partQualified = false;
    var partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        var nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case OptionalPartPartType:
            case OneOrMorePartsPartType:
            case ZeroOrMorePartsPartType:
                {
                    partQualified = true;
                    break;
                }
        }
    }
    return partQualified;
}
function isDefinitionQualified(definition) {
    var parts = definition.getParts(), firstPart = first(parts), firstPartQualified = isPartQualified(firstPart), definitionQualified = firstPartQualified; ///
    return definitionQualified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJ0VHlwZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUsIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0UXVhbGlmaWVkKHBhcnQpIHtcbiAgbGV0IHBhcnRRdWFsaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5vblRlcm1pbmFsUGFydC5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6XG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRRdWFsaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0UXVhbGlmaWVkO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluaXRpb25RdWFsaWZpZWQoZGVmaW5pdGlvbikge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBmaXJzdFBhcnRRdWFsaWZpZWQgPSBpc1BhcnRRdWFsaWZpZWQoZmlyc3RQYXJ0KSxcbiAgICAgICAgZGVmaW5pdGlvblF1YWxpZmllZCA9IGZpcnN0UGFydFF1YWxpZmllZDsgLy8vXG5cbiAgcmV0dXJuIGRlZmluaXRpb25RdWFsaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiaXNEZWZpbml0aW9uUXVhbGlmaWVkIiwiaXNQYXJ0UXVhbGlmaWVkIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicGFydCIsInBhcnRRdWFsaWZpZWQiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwiZmlyc3RQYXJ0UXVhbGlmaWVkIiwiZGVmaW5pdGlvblF1YWxpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBaUNnQkEscUJBQXFCO2VBQXJCQTs7SUF4QkFDLGVBQWU7ZUFBZkE7Ozs0QkFQVTt5QkFDSztBQUUvQixJQUFRQyx1QkFBMEVDLHVCQUFTLENBQW5GRCxzQkFBc0JFLHlCQUFvREQsdUJBQVMsQ0FBN0RDLHdCQUF3QkMsMEJBQTRCRix1QkFBUyxDQUFyQ0U7QUFFdEQsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTTCxnQkFBZ0JPLElBQUk7SUFDbEMsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQU1DLHNCQUFzQkYsS0FBS0csaUJBQWlCO0lBRWxELElBQUlELHFCQUFxQjtRQUN2QixJQUFNRSxrQkFBa0JKLE1BQ2xCSyxPQUFPRCxnQkFBZ0JFLE9BQU87UUFFcEMsT0FBUUQ7WUFDTixLQUFLWDtZQUNMLEtBQUtFO1lBQ0wsS0FBS0M7Z0JBQXlCO29CQUM1QkksZ0JBQWdCO29CQUVoQjtnQkFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBR08sU0FBU1Qsc0JBQXNCZSxVQUFVO0lBQzlDLElBQU1DLFFBQVFELFdBQVdFLFFBQVEsSUFDM0JDLFlBQVlaLE1BQU1VLFFBQ2xCRyxxQkFBcUJsQixnQkFBZ0JpQixZQUNyQ0Usc0JBQXNCRCxvQkFBb0IsR0FBRztJQUVuRCxPQUFPQztBQUNUIn0=