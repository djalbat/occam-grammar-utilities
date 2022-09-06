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
    find: function() {
        return find;
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, filter = _necessary.arrayUtilities.filter, find = _necessary.arrayUtilities.find, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmlsdGVyLCBmaW5kLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJsYXN0IiwiZmlsdGVyIiwiZmluZCIsImZyb250IiwiaGVhZCIsInRhaWwiLCJwdXNoIiwidW5zaGlmdCIsImJhY2t3YXJkc1NvbWUiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJsZWZ0RGlmZmVyZW5jZSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJRUEsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxJQUFJO2VBQUpBLElBQUk7O0lBQUVDLE1BQU07ZUFBTkEsTUFBTTs7SUFBRUMsSUFBSTtlQUFKQSxJQUFJOztJQUFFQyxLQUFLO2VBQUxBLEtBQUs7O0lBQUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFBRUMsSUFBSTtlQUFKQSxJQUFJOztJQUFFQyxJQUFJO2VBQUpBLElBQUk7O0lBQUVDLE9BQU87ZUFBUEEsT0FBTzs7SUFBRUMsYUFBYTtlQUFiQSxhQUFhOztJQUFFQyxhQUFhO2VBQWJBLGFBQWE7O0lBQUVDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFeEdDLGNBQWM7ZUFBZEEsY0FBYzs7O3lCQUpDLFdBQVc7QUFFbkMsSUFBUVosS0FBSyxHQUF5R2EsVUFBYyxlQUFBLENBQTVIYixLQUFLLEVBQUVDLElBQUksR0FBbUdZLFVBQWMsZUFBQSxDQUFySFosSUFBSSxFQUFFQyxNQUFNLEdBQTJGVyxVQUFjLGVBQUEsQ0FBL0dYLE1BQU0sRUFBRUMsSUFBSSxHQUFxRlUsVUFBYyxlQUFBLENBQXZHVixJQUFJLEVBQUVDLEtBQUssR0FBOEVTLFVBQWMsZUFBQSxDQUFqR1QsS0FBSyxFQUFFQyxJQUFJLEdBQXdFUSxVQUFjLGVBQUEsQ0FBMUZSLElBQUksRUFBRUMsSUFBSSxHQUFrRU8sVUFBYyxlQUFBLENBQXBGUCxJQUFJLEVBQUVDLElBQUksR0FBNERNLFVBQWMsZUFBQSxDQUE5RU4sSUFBSSxFQUFFQyxPQUFPLEdBQW1ESyxVQUFjLGVBQUEsQ0FBeEVMLE9BQU8sRUFBRUMsYUFBYSxHQUFvQ0ksVUFBYyxlQUFBLENBQS9ESixhQUFhLEVBQUVDLGFBQWEsR0FBcUJHLFVBQWMsZUFBQSxDQUFoREgsYUFBYSxFQUFFQyxjQUFjLEdBQUtFLFVBQWMsZUFBQSxDQUFqQ0YsY0FBYyxBQUFvQjtBQUVySSxTQUFTQyxjQUFjLENBQUNFLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzdDYixNQUFNLENBQUNZLE1BQU0sRUFBRSxTQUFDRSxRQUFRLEVBQUs7UUFDM0IsSUFBTUMsc0JBQXNCLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUSxDQUFDRixRQUFRLENBQUMsQUFBQztRQUV6RCxJQUFJLENBQUNDLHNCQUFzQixFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyJ9