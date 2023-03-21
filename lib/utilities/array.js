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
    find: function() {
        return find;
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmluZCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJsYXN0IiwiZmluZCIsImZpbHRlciIsImZyb250IiwiaGVhZCIsInRhaWwiLCJwdXNoIiwidW5zaGlmdCIsImJhY2t3YXJkc1NvbWUiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJsZWZ0RGlmZmVyZW5jZSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUllQSxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxNQUFNO2VBQU5BOztJQUFRQyxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxPQUFPO2VBQVBBOztJQUFTQyxhQUFhO2VBQWJBOztJQUFlQyxhQUFhO2VBQWJBOztJQUFlQyxjQUFjO2VBQWRBOztJQUUxRkMsY0FBYztlQUFkQTs7O3lCQUplO0FBRXhCLElBQVFaLFFBQThHYSx5QkFBYyxDQUE1SGIsT0FBT0MsT0FBdUdZLHlCQUFjLENBQXJIWixNQUFNQyxPQUFpR1cseUJBQWMsQ0FBL0dYLE1BQU1DLFNBQTJGVSx5QkFBYyxDQUF6R1YsUUFBUUMsUUFBbUZTLHlCQUFjLENBQWpHVCxPQUFPQyxPQUE0RVEseUJBQWMsQ0FBMUZSLE1BQU1DLE9BQXNFTyx5QkFBYyxDQUFwRlAsTUFBTUMsT0FBZ0VNLHlCQUFjLENBQTlFTixNQUFNQyxVQUEwREsseUJBQWMsQ0FBeEVMLFNBQVNDLGdCQUFpREkseUJBQWMsQ0FBL0RKLGVBQWVDLGdCQUFrQ0cseUJBQWMsQ0FBaERILGVBQWVDLGlCQUFtQkUseUJBQWMsQ0FBakNGO0FBRW5HLFNBQVNDLGVBQWVFLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzdDWixPQUFPVyxRQUFRLFNBQUNFLFVBQWE7UUFDM0IsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGIn0=