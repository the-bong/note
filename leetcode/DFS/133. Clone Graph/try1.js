var cloneGraph = function(node) {
  const graph = new Map();  
  function clone(node) {
    if (graph.has(node)) return graph.get(node);
    const newNode = new Node(node.val);
    graph.set(node, newNode);

    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor));
    }
  }

  return clone(node);
};
