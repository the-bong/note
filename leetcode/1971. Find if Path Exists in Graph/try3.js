/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
  const graph = new Map();
  const visited = new Set();

  for(const [left, right] of edges) {
    if (!graph.get(left)) graph.set(left, []);
    if (!graph.get(right)) graph.set(right, []);
    graph.get(left).push(right);
    graph.get(right).push(left);
  }

  function helper(value) {
    visited.add(value);
    if (value === destination) return;
    const edges = graph.get(value);

    if (edges && edges.length > 0) {
      for (const e of edges) {
          if (!visited.has(e)) helper(e);
      }
    }
  }
  helper(source);
  
  return visited.has(destination);
};

var validPathUsingStack = function(n, edges, source, destination) {
  const graph = new Map();
  const visited = new Set();
  const stack = [];

  for(const [left, right] of edges) {
    if (!graph.get(left)) graph.set(left, []);
    if (!graph.get(right)) graph.set(right, []);
    graph.get(left).push(right);
    graph.get(right).push(left);
  }

  stack.push(source);

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === destination) return true;

    console.log('visited', visited);

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    for (const value of graph.get(node)) {
      stack.push(value);
    }
  }
  
  return false;
};

export {validPath, validPathUsingStack};