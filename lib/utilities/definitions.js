"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mergeLeftRecursiveDefinitions", {
    enumerable: true,
    get: function() {
        return mergeLeftRecursiveDefinitions;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _parts = require("../utilities/parts");
var first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart;
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
            firstPart = first(parts);
            if (previousFirstPart !== null) {
                var matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                if (!matches) {
                    var definition1 = leftRecursiveDefinition, definitionString1 = definition1.asString();
                    throw new Error("The '".concat(definitionString1, "' left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling left recursive definitions and therefore cannot be rewritten."));
                }
            }
            previousFirstPart = firstPart; ///
            var partsTail = tail(parts);
            parts = partsTail; ///
            var singlePart = (0, _parts.singlePartFromParts)(parts);
            return singlePart;
        });
        var parts = singleParts; ///
        var choiceOfPartsPart = new ChoiceOfPartsPart(parts);
        parts = [
            firstPart,
            choiceOfPartsPart
        ];
        parts = (0, _parts.cloneParts)(parts); ///
        leftRecursiveDefinition = callback(parts, ruleName);
    }
    return leftRecursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVmaW5pdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzLCBzaW5nbGVQYXJ0RnJvbVBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuXG5jb25zdCB7IGZpcnN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgQ2hvaWNlT2ZQYXJ0c1BhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBsZXQgZmlyc3RQYXJ0LFxuICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5nbGVQYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKTtcblxuICAgICAgaWYgKHByZXZpb3VzRmlyc3RQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgY29uc3Qgc2luZ2xlUGFydCA9IHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpO1xuXG4gICAgICByZXR1cm4gc2luZ2xlUGFydDtcbiAgICB9KTtcblxuICAgIGxldCBwYXJ0cyA9IHNpbmdsZVBhcnRzOyAgLy8vXG5cbiAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICBwYXJ0cyA9IFtcbiAgICAgIGZpcnN0UGFydCxcbiAgICAgIGNob2ljZU9mUGFydHNQYXJ0XG4gICAgXTtcblxuICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gY2FsbGJhY2socGFydHMsIHJ1bGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJtZXJnZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImNhbGxiYWNrIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0Iiwic2luZ2xlUGFydHMiLCJtYXAiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsInBhcnRzVGFpbCIsInNpbmdsZVBhcnQiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJjbG9uZVBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBV0dBLCtCQUE2Qjs7O2VBQTdCQSw2QkFBNkI7Ozs0QkFUdkIsZUFBZTt5QkFDTixXQUFXO29CQUVmLG1CQUFtQjtxQkFDRSxvQkFBb0I7QUFFcEUsSUFBUUMsS0FBSyxHQUFXQyxVQUFjLGVBQUEsQ0FBOUJELEtBQUssRUFBRUUsSUFBSSxHQUFLRCxVQUFjLGVBQUEsQ0FBdkJDLElBQUksRUFDYixBQUFFQyxpQkFBaUIsR0FBS0MsYUFBSyxNQUFBLENBQTNCRCxpQkFBaUIsQUFBVSxBQUFDO0FBRTdCLFNBQVNKLDZCQUE2QixDQUFDTSx3QkFBd0IsRUFBRUMsUUFBUSxFQUFFO0lBQ2hGLElBQUlDLHVCQUF1QixBQUFDO0lBRTVCLElBQU1DLDRCQUE0QixHQUFHUixLQUFLLENBQUNLLHdCQUF3QixDQUFDLEVBQzlESSw4QkFBOEIsR0FBR0osd0JBQXdCLENBQUNLLE1BQU0sQUFBQztJQUV2RSxJQUFJRCw4QkFBOEIsS0FBSyxDQUFDLEVBQUU7UUFDeENGLHVCQUF1QixHQUFHQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUc7S0FDNUQsTUFBTTtRQUNMLElBQU1HLFFBQVEsR0FBR0gsNEJBQTRCLENBQUNJLFdBQVcsRUFBRSxBQUFDO1FBRTVELElBQUlDLFNBQVMsRUFDVEMsaUJBQWlCLEdBQUcsSUFBSSxBQUFDO1FBRTdCLElBQU1DLFdBQVcsR0FBR1Ysd0JBQXdCLENBQUNXLEdBQUcsQ0FBQyxTQUFDVCx1QkFBdUIsRUFBSztZQUM1RSxJQUFJVSxLQUFLLEdBQUdWLHVCQUF1QixDQUFDVyxRQUFRLEVBQUUsQUFBQztZQUUvQyxJQUFNQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ1AsTUFBTSxBQUFDO1lBRWpDLElBQUlTLFdBQVcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQU1DLFVBQVUsR0FBR2IsdUJBQXVCLEVBQ3BDYyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsQUFBQztnQkFFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxPQUFLLENBQWtFWixNQUFRLENBQXhFVSxnQkFBZ0IsRUFBQywrQ0FBNkMsQ0FBVyxDQUFBLE1BQWtELENBQTNEVixRQUFRLEVBQUMsb0RBQWtELENBQUMsQ0FBQyxDQUFDO2FBQ3ZKO1lBRURFLFNBQVMsR0FBR2IsS0FBSyxDQUFDaUIsS0FBSyxDQUFDLENBQUM7WUFFekIsSUFBSUgsaUJBQWlCLEtBQUssSUFBSSxFQUFFO2dCQUM5QixJQUFNVSxPQUFPLEdBQUdDLElBQUFBLEtBQVUsV0FBQSxFQUFDWixTQUFTLEVBQUVDLGlCQUFpQixDQUFDLEFBQUM7Z0JBRXpELElBQUksQ0FBQ1UsT0FBTyxFQUFFO29CQUNaLElBQU1KLFdBQVUsR0FBR2IsdUJBQXVCLEVBQ3BDYyxpQkFBZ0IsR0FBR0QsV0FBVSxDQUFDRSxRQUFRLEVBQUUsQUFBQztvQkFFL0MsTUFBTSxJQUFJQyxLQUFLLENBQUMsQUFBQyxPQUFLLENBQXlEWixNQUFRLENBQS9EVSxpQkFBZ0IsRUFBQyxzQ0FBb0MsQ0FBVyxDQUFBLE1BQXNHLENBQS9HVixRQUFRLEVBQUMsd0dBQXNHLENBQUMsQ0FBQyxDQUFDO2lCQUNsTTthQUNGO1lBRURHLGlCQUFpQixHQUFHRCxTQUFTLENBQUMsQ0FBRSxHQUFHO1lBRW5DLElBQU1hLFNBQVMsR0FBR3hCLElBQUksQ0FBQ2UsS0FBSyxDQUFDLEFBQUM7WUFFOUJBLEtBQUssR0FBR1MsU0FBUyxDQUFDLENBQUUsR0FBRztZQUV2QixJQUFNQyxVQUFVLEdBQUdDLElBQUFBLE1BQW1CLG9CQUFBLEVBQUNYLEtBQUssQ0FBQyxBQUFDO1lBRTlDLE9BQU9VLFVBQVUsQ0FBQztTQUNuQixDQUFDLEFBQUM7UUFFSCxJQUFJVixLQUFLLEdBQUdGLFdBQVcsQUFBQyxFQUFFLEdBQUc7UUFFN0IsSUFBTWMsaUJBQWlCLEdBQUcsSUFBSTFCLGlCQUFpQixDQUFDYyxLQUFLLENBQUMsQUFBQztRQUV2REEsS0FBSyxHQUFHO1lBQ05KLFNBQVM7WUFDVGdCLGlCQUFpQjtTQUNsQixDQUFDO1FBRUZaLEtBQUssR0FBR2EsSUFBQUEsTUFBVSxXQUFBLEVBQUNiLEtBQUssQ0FBQyxDQUFDLENBQUUsR0FBRztRQUUvQlYsdUJBQXVCLEdBQUdELFFBQVEsQ0FBQ1csS0FBSyxFQUFFTixRQUFRLENBQUMsQ0FBQztLQUNyRDtJQUVELE9BQU9KLHVCQUF1QixDQUFDO0NBQ2hDIn0=