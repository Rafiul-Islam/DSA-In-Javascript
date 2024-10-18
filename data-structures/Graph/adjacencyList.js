class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
      }
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2].push(vertex1);
      }
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          (v) => v !== vertex2
        );
      }
      if (this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          (v) => v !== vertex1
        );
      }
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.removeEdge(vertex, v);
      });
      delete this.adjacencyList[vertex];
      return true;
    }
    return false;
  }
}

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");
// graph.removeEdge("A", "B");
// graph.removeVertex("C");
// console.log(graph);
