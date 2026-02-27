"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDefinitionComplex", {
    enumerable: true,
    get: function() {
        return isDefinitionComplex;
    }
});
const _occamparsers = require("occam-parsers");
const _necessary = require("necessary");
const { first } = _necessary.arrayUtilities, { RuleNamePartType, OptionalPartPartType, ChoiceOfPartsPartType, OneOrMorePartsPartType, SequenceOfPartsPartType, ZeroOrMorePartsPartType } = _occamparsers.partTypes;
function isDefinitionComplex(definition) {
    const parts = definition.getParts(), firstPart = first(parts), firstPartComplex = isPartComplex(firstPart), definitionComplex = firstPartComplex; ///
    return definitionComplex;
}
function isPartComplex(part) {
    let partComplex = true;
    const partNonTerminalPart = part.isNonTerminalPart();
    if (partNonTerminalPart) {
        const nonTerminalPart = part, type = nonTerminalPart.getType();
        switch(type){
            case RuleNamePartType:
                {
                    partComplex = false;
                    break;
                }
            case OptionalPartPartType:
                {
                    const optionalPartPart = nonTerminalPart, part = optionalPartPart.getPart();
                    partComplex = isPartComplex(part);
                    break;
                }
            case OneOrMorePartsPartType:
                {
                    const oneOrMorePartsPart = nonTerminalPart, part = oneOrMorePartsPart.getPart();
                    partComplex = isPartComplex(part);
                    break;
                }
            case ZeroOrMorePartsPartType:
                {
                    const zeroOrMorePartsPart = nonTerminalPart, part = zeroOrMorePartsPart.getPart(); ///
                    partComplex = isPartComplex(part);
                    break;
                }
            case SequenceOfPartsPartType:
            case ChoiceOfPartsPartType:
                {
                    partComplex = true;
                    break;
                }
        }
    }
    return partComplex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29tcGxleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFydFR5cGVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSxcbiAgICAgICAgT3B0aW9uYWxQYXJ0UGFydFR5cGUsXG4gICAgICAgIENob2ljZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgZmlyc3RQYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgoZmlyc3RQYXJ0KSxcbiAgICAgICAgZGVmaW5pdGlvbkNvbXBsZXggPSBmaXJzdFBhcnRDb21wbGV4OyAvLy9cblxuICByZXR1cm4gZGVmaW5pdGlvbkNvbXBsZXg7XG59XG5cbmZ1bmN0aW9uIGlzUGFydENvbXBsZXgocGFydCkge1xuICBsZXQgcGFydENvbXBsZXggPSB0cnVlO1xuXG4gIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICB0eXBlID0gbm9uVGVybWluYWxQYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlOiB7XG4gICAgICAgIHBhcnRDb21wbGV4ID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGU6IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5vblRlcm1pbmFsUGFydCwgLy8vXG4gICAgICAgICAgICAgIHBhcnQgPSBvcHRpb25hbFBhcnRQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgcGFydENvbXBsZXggPSBpc1BhcnRDb21wbGV4KHBhcnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOiB7XG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBub25UZXJtaW5hbFBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICBwYXJ0Q29tcGxleCA9IGlzUGFydENvbXBsZXgocGFydCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU6XG4gICAgICBjYXNlIENob2ljZU9mUGFydHNQYXJ0VHlwZToge1xuICAgICAgICBwYXJ0Q29tcGxleCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRDb21wbGV4O1xufVxuIl0sIm5hbWVzIjpbImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUnVsZU5hbWVQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJ0VHlwZXMiLCJkZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0UGFydENvbXBsZXgiLCJpc1BhcnRDb21wbGV4IiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJwYXJ0IiwicGFydENvbXBsZXgiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiZ2V0VHlwZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYWdCQTs7O2VBQUFBOzs7OEJBWFU7MkJBQ0s7QUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWMsRUFDMUIsRUFBRUMsZ0JBQWdCLEVBQ2hCQyxvQkFBb0IsRUFDcEJDLHFCQUFxQixFQUNyQkMsc0JBQXNCLEVBQ3RCQyx1QkFBdUIsRUFDdkJDLHVCQUF1QixFQUFFLEdBQUdDLHVCQUFTO0FBRXRDLFNBQVNULG9CQUFvQlUsVUFBVTtJQUM1QyxNQUFNQyxRQUFRRCxXQUFXRSxRQUFRLElBQzNCQyxZQUFZWixNQUFNVSxRQUNsQkcsbUJBQW1CQyxjQUFjRixZQUNqQ0csb0JBQW9CRixrQkFBa0IsR0FBRztJQUUvQyxPQUFPRTtBQUNUO0FBRUEsU0FBU0QsY0FBY0UsSUFBSTtJQUN6QixJQUFJQyxjQUFjO0lBRWxCLE1BQU1DLHNCQUFzQkYsS0FBS0csaUJBQWlCO0lBRWxELElBQUlELHFCQUFxQjtRQUN2QixNQUFNRSxrQkFBa0JKLE1BQ2xCSyxPQUFPRCxnQkFBZ0JFLE9BQU87UUFFcEMsT0FBUUQ7WUFDTixLQUFLbkI7Z0JBQWtCO29CQUNyQmUsY0FBYztvQkFFZDtnQkFDRjtZQUVBLEtBQUtkO2dCQUFzQjtvQkFDekIsTUFBTW9CLG1CQUFtQkgsaUJBQ25CSixPQUFPTyxpQkFBaUJDLE9BQU87b0JBRXJDUCxjQUFjSCxjQUFjRTtvQkFFNUI7Z0JBQ0Y7WUFFQSxLQUFLWDtnQkFBd0I7b0JBQzNCLE1BQU1vQixxQkFBcUJMLGlCQUNyQkosT0FBT1MsbUJBQW1CRCxPQUFPO29CQUV2Q1AsY0FBY0gsY0FBY0U7b0JBRTVCO2dCQUNGO1lBRUEsS0FBS1Q7Z0JBQXlCO29CQUM1QixNQUFNbUIsc0JBQXNCTixpQkFDdEJKLE9BQU9VLG9CQUFvQkYsT0FBTyxJQUFLLEdBQUc7b0JBRWhEUCxjQUFjSCxjQUFjRTtvQkFFNUI7Z0JBQ0Y7WUFFQSxLQUFLVjtZQUNMLEtBQUtGO2dCQUF1QjtvQkFDMUJhLGNBQWM7b0JBRWQ7Z0JBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9