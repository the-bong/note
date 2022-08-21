/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
  const result = [];

  function helper(index, path) {
    path.push(index);
    if (index === graph.length - 1) {
      result.push(path);
    }

    for (const node of graph.at(index)) {
      helper(node, [...path]);
    }
  }

  helper(0, []);
  return result;
};

export {allPathsSourceTarget};