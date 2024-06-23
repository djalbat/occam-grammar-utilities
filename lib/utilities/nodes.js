"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findLastIndex", {
    enumerable: true,
    get: function() {
        return findLastIndex;
    }
});
function findLastIndex(nodes, callback) {
    var lastIndex = -1;
    var length = nodes.length;
    for(var index = length - 1; index >= 0; index--){
        var node = nodes[index], result = callback(node);
        if (result) {
            lastIndex = index;
            break;
        }
    }
    return lastIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdEluZGV4KG5vZGVzLCBjYWxsYmFjaykge1xuICBsZXQgbGFzdEluZGV4ID0gLTE7XG5cbiAgY29uc3QgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gbGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2sobm9kZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBsYXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhc3RJbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kTGFzdEluZGV4Iiwibm9kZXMiLCJjYWxsYmFjayIsImxhc3RJbmRleCIsImxlbmd0aCIsImluZGV4Iiwibm9kZSIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxjQUFjQyxLQUFLLEVBQUVDLFFBQVE7SUFDM0MsSUFBSUMsWUFBWSxDQUFDO0lBRWpCLElBQU1DLFNBQVNILE1BQU1HLE1BQU07SUFFM0IsSUFBSyxJQUFJQyxRQUFRRCxTQUFTLEdBQUdDLFNBQVMsR0FBR0EsUUFBUztRQUNoRCxJQUFNQyxPQUFPTCxLQUFLLENBQUNJLE1BQU0sRUFDbkJFLFNBQVNMLFNBQVNJO1FBRXhCLElBQUlDLFFBQVE7WUFDVkosWUFBWUU7WUFFWjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUIn0=