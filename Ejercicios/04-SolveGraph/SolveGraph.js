function SolveGraph (graph, start, end) {
  // Your code here:
  let visited = {};
    let stack = [start];

    while (stack.length > 0) {
        let node = stack.pop();

        if (node === end) {
            return true;
        }

        if (!visited[node]) {
            visited[node] = true;
            let neighbors = graph[node];
            stack.push(...neighbors);
        }
    }

    return false;
}

module.exports = SolveGraph