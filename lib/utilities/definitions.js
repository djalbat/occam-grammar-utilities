"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        get: all[name],
        enumerable: true
    });
}
_export(exports, {
    mergeLeftRecursiveDefinitions: function() {
        return mergeLeftRecursiveDefinitions;
    },
    retrieveLeftRecursiveDefinitions: function() {
        return retrieveLeftRecursiveDefinitions;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _parts = require("../utilities/parts");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var first = _necessary.arrayUtilities.first, ChoiceOfPartsPart = _occamParsers.Parts.ChoiceOfPartsPart;
function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, fromPartsAndRuleName) {
    var callback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {};
    var leftRecursiveDefinition;
    var firstLeftRecursiveDefinition = first(leftRecursiveDefinitions), leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;
    if (leftRecursiveDefinitionsLength === 1) {
        leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
        callback(leftRecursiveDefinition);
    } else {
        var ruleName = firstLeftRecursiveDefinition.getRuleName();
        var firstPart, previousFirstPart = null;
        var singleParts = leftRecursiveDefinitions.map(function(leftRecursiveDefinition) {
            callback(leftRecursiveDefinition);
            var parts = leftRecursiveDefinition.getParts();
            parts = (0, _parts.cloneParts)(parts); ///
            firstPart = first(parts);
            if (previousFirstPart !== null) {
                var matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                if (!matches) {
                    var definition = leftRecursiveDefinition, definitionString = definition.asString();
                    throw new Error("The '".concat(definitionString, "' left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling left recursive definitions and therefore cannot be rewritten."));
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
        leftRecursiveDefinition = fromPartsAndRuleName(parts, ruleName);
    }
    return leftRecursiveDefinition;
}
function retrieveLeftRecursiveDefinitions(leftRecursiveRule, LeftRecursiveDefinition) {
    var callback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        return true;
    };
    var definitions = leftRecursiveRule.getDefinitions(), leftRecursiveDefinitions = definitions.filter(function(definition) {
        var definitionLeftRecursiveDefinition = _instanceof(definition, LeftRecursiveDefinition);
        if (definitionLeftRecursiveDefinition) {
            var leftRecursiveDefinition = definition, passed = callback(leftRecursiveDefinition);
            if (passed) {
                return true;
            }
        }
    });
    return leftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVmaW5pdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzLCBzaW5nbGVQYXJ0RnJvbVBhcnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgQ2hvaWNlT2ZQYXJ0c1BhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBmcm9tUGFydHNBbmRSdWxlTmFtZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG5cbiAgY29uc3QgZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG5cbiAgICBjYWxsYmFjayhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBsZXQgZmlyc3RQYXJ0LFxuICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5nbGVQYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjYWxsYmFjayhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGxldCBwYXJ0cyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICBpZiAocHJldmlvdXNGaXJzdFBhcnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1hdGNoUGFydHMoZmlyc3RQYXJ0LCBwcmV2aW91c0ZpcnN0UGFydCk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBkb2VzIG5vdCBtYXRjaCBvbmUgb2YgaXRzIHNpYmxpbmcgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHNpbmdsZVBhcnQgPSBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKTtcblxuICAgICAgcmV0dXJuIHNpbmdsZVBhcnQ7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFydHMgPSBzaW5nbGVQYXJ0czsgIC8vL1xuXG4gICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcGFydHMgPSBbXG4gICAgICBmaXJzdFBhcnQsXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydFxuICAgIF07XG5cbiAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZyb21QYXJ0c0FuZFJ1bGVOYW1lKHBhcnRzLCBydWxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlUnVsZSwgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIGNhbGxiYWNrID0gKCkgPT4gdHJ1ZSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGxlZnRSZWN1cnNpdmVSdWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLmZpbHRlcigoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsibWVyZ2VMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZXRyaWV2ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJDaG9pY2VPZlBhcnRzUGFydCIsIlBhcnRzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZnJvbVBhcnRzQW5kUnVsZU5hbWUiLCJjYWxsYmFjayIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmaXJzdFBhcnQiLCJwcmV2aW91c0ZpcnN0UGFydCIsInNpbmdsZVBhcnRzIiwibWFwIiwicGFydHMiLCJnZXRQYXJ0cyIsImNsb25lUGFydHMiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJFcnJvciIsInNpbmdsZVBhcnQiLCJzaW5nbGVQYXJ0RnJvbVBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInBhc3NlZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVdHQSw2QkFBNkI7ZUFBN0JBLDZCQUE2Qjs7SUEwRDdCQyxnQ0FBZ0M7ZUFBaENBLGdDQUFnQzs7OzRCQW5FMUIsZUFBZTt5QkFDTixX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