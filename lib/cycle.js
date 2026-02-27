"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Cycle;
    }
});
const _necessary = require("necessary");
const { COMMA_CHARACTER } = _necessary.characters;
class Cycle {
    constructor(edges){
        this.edges = edges;
    }
    getEdges() {
        return this.edges;
    }
    getLength() {
        const length = this.edges.length;
        return length;
    }
    getEdge(index) {
        const edge = this.edges[index];
        return edge;
    }
    getVertexes() {
        const vertexes = this.mapEdge((edge)=>{
            const sourceVertex = edge.getSourceVertex(), vertex = sourceVertex; ///
            return vertex;
        });
        return vertexes;
    }
    mapEdge(callback) {
        return this.edges.map(callback);
    }
    everyEdge(callback) {
        return this.edges.every(callback);
    }
    forEachEdge(callback) {
        return this.edges.forEach(callback);
    }
    isEqualTo(cycle) {
        let equalTo = false;
        const cycleA = this, cycleB = cycle, cycleALength = cycleA.getLength(), cycleBLength = cycleB.getLength();
        if (cycleALength === cycleBLength) {
            equalTo = cycleA.everyEdge((edgeA, index)=>{
                const edgeB = cycleB.getEdge(index), matches = edgeA.match(edgeB);
                if (matches) {
                    return true;
                }
            });
        }
        return equalTo;
    }
    permuted() {
        const edges = this.edges.slice(), edge = edges.pop();
        edges.unshift(edge);
        const cycle = new Cycle(edges);
        return cycle;
    }
    asString() {
        const vertexes = this.getVertexes(), string = vertexes.join(COMMA_CHARACTER);
        return string;
    }
    static fromEdge(edge) {
        const edges = [
            edge
        ], cycle = new Cycle(edges);
        return cycle;
    }
    static fromEdges(edges) {
        const cycle = new Cycle(edges);
        return cycle;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBDT01NQV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IoZWRnZXMpIHtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRFZGdlKGluZGV4KSB7XG4gICAgY29uc3QgZWRnZSA9IHRoaXMuZWRnZXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMubWFwRWRnZSgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXgoKSxcbiAgICAgICAgICAgIHZlcnRleCA9IHNvdXJjZVZlcnRleDsgIC8vL1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgbWFwRWRnZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5lZGdlcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFZGdlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmVkZ2VzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgaXNFcXVhbFRvKGN5Y2xlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IGN5Y2xlQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjeWNsZUIgPSBjeWNsZSwgIC8vL1xuICAgICAgICAgIGN5Y2xlQUxlbmd0aCA9IGN5Y2xlQS5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBjeWNsZUJMZW5ndGggPSBjeWNsZUIuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoY3ljbGVBTGVuZ3RoID09PSBjeWNsZUJMZW5ndGgpIHtcbiAgICAgIGVxdWFsVG8gPSBjeWNsZUEuZXZlcnlFZGdlKChlZGdlQSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWRnZUIgPSBjeWNsZUIuZ2V0RWRnZShpbmRleCksXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlQS5tYXRjaChlZGdlQik7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBwZXJtdXRlZCgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuZWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZWRnZSA9IGVkZ2VzLnBvcCgpO1xuXG4gICAgZWRnZXMudW5zaGlmdChlZGdlKTtcblxuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIHN0cmluZyA9IHZlcnRleGVzLmpvaW4oQ09NTUFfQ0hBUkFDVEVSKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW1xuICAgICAgICAgICAgZWRnZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUoZWRnZXMpO1xuXG4gICAgcmV0dXJuIGN5Y2xlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FZGdlcyhlZGdlcykge1xuICAgIGNvbnN0IGN5Y2xlID0gbmV3IEN5Y2xlKGVkZ2VzKTtcblxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkN5Y2xlIiwiQ09NTUFfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImVkZ2VzIiwiZ2V0RWRnZXMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRFZGdlIiwiaW5kZXgiLCJlZGdlIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhlcyIsIm1hcEVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJnZXRTb3VyY2VWZXJ0ZXgiLCJ2ZXJ0ZXgiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RWRnZSIsImV2ZXJ5IiwiZm9yRWFjaEVkZ2UiLCJmb3JFYWNoIiwiaXNFcXVhbFRvIiwiY3ljbGUiLCJlcXVhbFRvIiwiY3ljbGVBIiwiY3ljbGVCIiwiY3ljbGVBTGVuZ3RoIiwiY3ljbGVCTGVuZ3RoIiwiZWRnZUEiLCJlZGdlQiIsIm1hdGNoZXMiLCJtYXRjaCIsInBlcm11dGVkIiwic2xpY2UiLCJwb3AiLCJ1bnNoaWZ0IiwiYXNTdHJpbmciLCJzdHJpbmciLCJqb2luIiwiZnJvbUVkZ2UiLCJmcm9tRWRnZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSk07QUFFM0IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVU7QUFFdkIsTUFBTUY7SUFDbkIsWUFBWUcsS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtRQUVoQyxPQUFPQTtJQUNUO0lBRUFDLFFBQVFDLEtBQUssRUFBRTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU07UUFFOUIsT0FBT0M7SUFDVDtJQUVBQyxjQUFjO1FBQ1osTUFBTUMsV0FBVyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDSDtZQUM3QixNQUFNSSxlQUFlSixLQUFLSyxlQUFlLElBQ25DQyxTQUFTRixjQUFlLEdBQUc7WUFFakMsT0FBT0U7UUFDVDtRQUVBLE9BQU9KO0lBQ1Q7SUFFQUMsUUFBUUksUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNiLEtBQUssQ0FBQ2MsR0FBRyxDQUFDRDtJQUFXO0lBRXJERSxVQUFVRixRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2IsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDSDtJQUFXO0lBRXpESSxZQUFZSixRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2IsS0FBSyxDQUFDa0IsT0FBTyxDQUFDTDtJQUFXO0lBRTdETSxVQUFVQyxLQUFLLEVBQUU7UUFDZixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsU0FBUyxJQUFJLEVBQ2JDLFNBQVNILE9BQ1RJLGVBQWVGLE9BQU9wQixTQUFTLElBQy9CdUIsZUFBZUYsT0FBT3JCLFNBQVM7UUFFckMsSUFBSXNCLGlCQUFpQkMsY0FBYztZQUNqQ0osVUFBVUMsT0FBT1AsU0FBUyxDQUFDLENBQUNXLE9BQU9yQjtnQkFDakMsTUFBTXNCLFFBQVFKLE9BQU9uQixPQUFPLENBQUNDLFFBQ3ZCdUIsVUFBVUYsTUFBTUcsS0FBSyxDQUFDRjtnQkFFNUIsSUFBSUMsU0FBUztvQkFDWCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUVBLE9BQU9QO0lBQ1Q7SUFFQVMsV0FBVztRQUNULE1BQU05QixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0IsS0FBSyxJQUN4QnpCLE9BQU9OLE1BQU1nQyxHQUFHO1FBRXRCaEMsTUFBTWlDLE9BQU8sQ0FBQzNCO1FBRWQsTUFBTWMsUUFBUSxJQUFJdkIsTUFBTUc7UUFFeEIsT0FBT29CO0lBQ1Q7SUFFQWMsV0FBVztRQUNULE1BQU0xQixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQjRCLFNBQVMzQixTQUFTNEIsSUFBSSxDQUFDdEM7UUFFN0IsT0FBT3FDO0lBQ1Q7SUFFQSxPQUFPRSxTQUFTL0IsSUFBSSxFQUFFO1FBQ3BCLE1BQU1OLFFBQVE7WUFDTk07U0FDRCxFQUNEYyxRQUFRLElBQUl2QixNQUFNRztRQUV4QixPQUFPb0I7SUFDVDtJQUVBLE9BQU9rQixVQUFVdEMsS0FBSyxFQUFFO1FBQ3RCLE1BQU1vQixRQUFRLElBQUl2QixNQUFNRztRQUV4QixPQUFPb0I7SUFDVDtBQUNGIn0=