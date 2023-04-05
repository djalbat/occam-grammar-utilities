"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findLeftRecursiveDefinitions", {
    enumerable: true,
    get: function() {
        return findLeftRecursiveDefinitions;
    }
});
var _definition = require("../utilities/definition");
function findLeftRecursiveDefinitions(rule, callback) {
    var definitions = rule.getDefinitions(), leftRecursiveDefinitions = definitions.filter(function(definition) {
        var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
        if (definitionLeftRecursive) {
            var leftRecursiveDefinition = definition, found = callback(leftRecursiveDefinition);
            if (found) {
                return true;
            }
        }
    });
    return leftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjYWxsYmFjaykge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZGVmaW5pdGlvbnMuZmlsdGVyKChkZWZpbml0aW9uKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAoZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgIGZvdW5kID0gY2FsbGJhY2sobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJydWxlIiwiY2FsbGJhY2siLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlsdGVyIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7OzBCQUYwQjtBQUVuQyxTQUFTQSw2QkFBNkJDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQzNELElBQU1DLGNBQWNGLEtBQUtHLGNBQWMsSUFDakNDLDJCQUEyQkYsWUFBWUcsTUFBTSxDQUFDLFNBQUNDLFlBQWU7UUFDNUQsSUFBTUMsMEJBQTBCQyxJQUFBQSxxQ0FBeUIsRUFBQ0Y7UUFFMUQsSUFBSUMseUJBQXlCO1lBQzNCLElBQU1FLDBCQUEwQkgsWUFDMUJJLFFBQVFULFNBQVNRO1lBRXZCLElBQUlDLE9BQU87Z0JBQ1QsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSDtJQUVOLE9BQU9OO0FBQ1QifQ==