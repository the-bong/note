var cloneGraph = function(node) {
  if (!node) return null;
  const graph = new Map();  
  function clone(root) {
    if (!graph.has(root.val)) {
        graph.set(root.val, new Node(root.val));
        graph.get(root.val).neighbors = root.neighbors.map(clone);
    }
    return graph.get(root.val);
  }

  return clone(node);
};
