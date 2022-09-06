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
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    filter: function() {
        return filter;
    },
    front: function() {
        return front;
    },
    head: function() {
        return head;
    },
    tail: function() {
        return tail;
    },
    push: function() {
        return push;
    },
    unshift: function() {
        return unshift;
    },
    backwardsSome: function() {
        return backwardsSome;
    },
    backwardsFind: function() {
        return backwardsFind;
    },
    backwardsEvery: function() {
        return backwardsEvery;
    },
    leftDifference: function() {
        return leftDifference;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJsYXN0IiwiZmlsdGVyIiwiZnJvbnQiLCJoZWFkIiwidGFpbCIsInB1c2giLCJ1bnNoaWZ0IiwiYmFja3dhcmRzU29tZSIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsImxlZnREaWZmZXJlbmNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlFQSxLQUFLO2VBQUxBLEtBQUs7O0lBQUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFBRUMsTUFBTTtlQUFOQSxNQUFNOztJQUFFQyxLQUFLO2VBQUxBLEtBQUs7O0lBQUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFBRUMsSUFBSTtlQUFKQSxJQUFJOztJQUFFQyxJQUFJO2VBQUpBLElBQUk7O0lBQUVDLE9BQU87ZUFBUEEsT0FBTzs7SUFBRUMsYUFBYTtlQUFiQSxhQUFhOztJQUFFQyxhQUFhO2VBQWJBLGFBQWE7O0lBQUVDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFbEdDLGNBQWM7ZUFBZEEsY0FBYzs7O3lCQUpDLFdBQVc7QUFFbkMsSUFBUVgsS0FBSyxHQUFtR1ksVUFBYyxlQUFBLENBQXRIWixLQUFLLEVBQUVDLElBQUksR0FBNkZXLFVBQWMsZUFBQSxDQUEvR1gsSUFBSSxFQUFFQyxNQUFNLEdBQXFGVSxVQUFjLGVBQUEsQ0FBekdWLE1BQU0sRUFBRUMsS0FBSyxHQUE4RVMsVUFBYyxlQUFBLENBQWpHVCxLQUFLLEVBQUVDLElBQUksR0FBd0VRLFVBQWMsZUFBQSxDQUExRlIsSUFBSSxFQUFFQyxJQUFJLEdBQWtFTyxVQUFjLGVBQUEsQ0FBcEZQLElBQUksRUFBRUMsSUFBSSxHQUE0RE0sVUFBYyxlQUFBLENBQTlFTixJQUFJLEVBQUVDLE9BQU8sR0FBbURLLFVBQWMsZUFBQSxDQUF4RUwsT0FBTyxFQUFFQyxhQUFhLEdBQW9DSSxVQUFjLGVBQUEsQ0FBL0RKLGFBQWEsRUFBRUMsYUFBYSxHQUFxQkcsVUFBYyxlQUFBLENBQWhESCxhQUFhLEVBQUVDLGNBQWMsR0FBS0UsVUFBYyxlQUFBLENBQWpDRixjQUFjLEFBQW9CO0FBRS9ILFNBQVNDLGNBQWMsQ0FBQ0UsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDN0NaLE1BQU0sQ0FBQ1csTUFBTSxFQUFFLFNBQUNFLFFBQVEsRUFBSztRQUMzQixJQUFNQyxzQkFBc0IsR0FBR0YsTUFBTSxDQUFDRyxRQUFRLENBQUNGLFFBQVEsQ0FBQyxBQUFDO1FBRXpELElBQUksQ0FBQ0Msc0JBQXNCLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIn0=