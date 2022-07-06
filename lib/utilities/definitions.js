"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mergeLeftRecursiveDefinitions", {
    get: function() {
        return mergeLeftRecursiveDefinitions;
    },
    enumerable: true
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _parts = require("../utilities/parts");
var first = _necessary.arrayUtilities.first, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart;
function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, callback) {
    var leftRecursiveDefinition;
    var firstLeftRecursiveDefinition = first(leftRecursiveDefinitions), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;
    if (leftRecursiveDefinitionsLength === 1) {
        leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
    } else {
        var ruleName = firstLeftRecursiveDefinition.getRuleName();
        var firstPart, previousFirstPart = null;
        var singleParts = leftRecursiveDefinitions.map(function(leftRecursiveDefinition) {
            var parts = leftRecursiveDefinition.getParts();
            var partsLength = parts.length;
            if (partsLength === 1) {
                var definition = leftRecursiveDefinition, definitionString = definition.asString();
                throw new Error("The '".concat(definitionString, "' directly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
            }
            parts = (0, _parts.cloneParts)(parts); ///
            firstPart = first(parts);
            if (previousFirstPart !== null) {
                var matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                if (!matches) {
                    var definition1 = leftRecursiveDefinition, definitionString1 = definition1.asString();
                    throw new Error("The '".concat(definitionString1, "' left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling left recursive definitions and therefore cannot be rewritten."));
                }
            }
            previousFirstPart = firstPart; ///
            var singlePart = (0, _parts.singlePartFromParts)(parts);
            return singlePart;
        });
        var parts = singleParts; ///
        var choiceOfPartsPart = new ChoiceOfPartsPart(parts);
        parts = [
            firstPart,
            choiceOfPartsPart
        ];
        leftRecursiveDefinition = callback(parts, ruleName);
    }
    return leftRecursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVmaW5pdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzLCBzaW5nbGVQYXJ0RnJvbVBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgQ2hvaWNlT2ZQYXJ0c1BhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBsZXQgZmlyc3RQYXJ0LFxuICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5nbGVQYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICBpZiAocHJldmlvdXNGaXJzdFBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIHNpbmdsZVBhcnQ7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFydHMgPSBzaW5nbGVQYXJ0czsgIC8vL1xuXG4gICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBmaXJzdFBhcnQsXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydFxuICAgIF07XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGNhbGxiYWNrKHBhcnRzLCBydWxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsibWVyZ2VMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImNhbGxiYWNrIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0Iiwic2luZ2xlUGFydHMiLCJtYXAiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJjbG9uZVBhcnRzIiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJzaW5nbGVQYXJ0Iiwic2luZ2xlUGFydEZyb21QYXJ0cyIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBV0dBLCtCQUE2Qjs7ZUFBN0JBLDZCQUE2Qjs7Ozs0QkFUdkIsZUFBZTt5QkFDTixXQUFXO29CQUVmLG1CQUFtQjtxQkFDRSxvQkFBb0I7QUFFcEUsSUFBTSxBQUFFQyxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixFQUMxQixBQUFFRSxpQkFBaUIsR0FBS0MsYUFBSyxNQUFBLENBQTNCRCxpQkFBaUIsQUFBVSxBQUFDO0FBRTdCLFNBQVNILDZCQUE2QixDQUFDSyx3QkFBd0IsRUFBRUMsUUFBUSxFQUFFO0lBQ2hGLElBQUlDLHVCQUF1QixBQUFDO0lBRTVCLElBQU1DLDRCQUE0QixHQUFHUCxLQUFLLENBQUNJLHdCQUF3QixDQUFDLEVBQzlESSw4QkFBOEIsR0FBR0osd0JBQXdCLENBQUNLLE1BQU0sQUFBQztJQUV2RSxJQUFJRCw4QkFBOEIsS0FBSyxDQUFDLEVBQUU7UUFDeENGLHVCQUF1QixHQUFHQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUc7S0FDNUQsTUFBTTtRQUNMLElBQU1HLFFBQVEsR0FBR0gsNEJBQTRCLENBQUNJLFdBQVcsRUFBRSxBQUFDO1FBRTVELElBQUlDLFNBQVMsRUFDVEMsaUJBQWlCLEdBQUcsSUFBSSxBQUFDO1FBRTdCLElBQU1DLFdBQVcsR0FBR1Ysd0JBQXdCLENBQUNXLEdBQUcsQ0FBQyxTQUFDVCx1QkFBdUIsRUFBSztZQUM1RSxJQUFJVSxLQUFLLEdBQUdWLHVCQUF1QixDQUFDVyxRQUFRLEVBQUUsQUFBQztZQUUvQyxJQUFNQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ1AsTUFBTSxBQUFDO1lBRWpDLElBQUlTLFdBQVcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQU1DLFVBQVUsR0FBR2IsdUJBQXVCLEVBQ3BDYyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsQUFBQztnQkFFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxPQUFLLENBQWtFWixNQUFRLENBQXhFVSxnQkFBZ0IsRUFBQywrQ0FBNkMsQ0FBVyxDQUFBLE1BQWtELENBQTNEVixRQUFRLEVBQUMsb0RBQWtELENBQUMsQ0FBQyxDQUFDO2FBQ3ZKO1lBRURNLEtBQUssR0FBR08sSUFBQUEsTUFBVSxXQUFBLEVBQUNQLEtBQUssQ0FBQyxDQUFDLENBQUUsR0FBRztZQUUvQkosU0FBUyxHQUFHWixLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQztZQUV6QixJQUFJSCxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQU1XLE9BQU8sR0FBR0MsSUFBQUEsS0FBVSxXQUFBLEVBQUNiLFNBQVMsRUFBRUMsaUJBQWlCLENBQUMsQUFBQztnQkFFekQsSUFBSSxDQUFDVyxPQUFPLEVBQUU7b0JBQ1osSUFBTUwsV0FBVSxHQUFHYix1QkFBdUIsRUFDcENjLGlCQUFnQixHQUFHRCxXQUFVLENBQUNFLFFBQVEsRUFBRSxBQUFDO29CQUUvQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxBQUFDLE9BQUssQ0FBeURaLE1BQVEsQ0FBL0RVLGlCQUFnQixFQUFDLHNDQUFvQyxDQUFXLENBQUEsTUFBc0csQ0FBL0dWLFFBQVEsRUFBQyx3R0FBc0csQ0FBQyxDQUFDLENBQUM7aUJBQ2xNO2FBQ0Y7WUFFREcsaUJBQWlCLEdBQUdELFNBQVMsQ0FBQyxDQUFFLEdBQUc7WUFFbkMsSUFBTWMsVUFBVSxHQUFHQyxJQUFBQSxNQUFtQixvQkFBQSxFQUFDWCxLQUFLLENBQUMsQUFBQztZQUU5QyxPQUFPVSxVQUFVLENBQUM7U0FDbkIsQ0FBQyxBQUFDO1FBRUgsSUFBSVYsS0FBSyxHQUFHRixXQUFXLEFBQUMsRUFBRSxHQUFHO1FBRTdCLElBQU1jLGlCQUFpQixHQUFHLElBQUkxQixpQkFBaUIsQ0FBQ2MsS0FBSyxDQUFDLEFBQUM7UUFFdkRBLEtBQUssR0FBRztZQUNOSixTQUFTO1lBQ1RnQixpQkFBaUI7U0FDbEIsQ0FBQztRQUVGdEIsdUJBQXVCLEdBQUdELFFBQVEsQ0FBQ1csS0FBSyxFQUFFTixRQUFRLENBQUMsQ0FBQztLQUNyRDtJQUVELE9BQU9KLHVCQUF1QixDQUFDO0NBQ2hDIn0=