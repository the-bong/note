class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
    this.size = size;
  }

  findRoot(x) {
    if (this.root[x] !== x) this.root[x] = this.findRoot(this.root[x]);
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);
    if (rootX !== rootY) {
      this.root[rootY] = rootX;
      this.size--;
    }
  }
}

var findCircleNum = function(isConnected) {
  const uf = new UnionFind(isConnected.length);
  for(let i=0; i<isConnected.length; i++) {
    for(let j=0; j<isConnected.length; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.size;
};

export {findCircleNum};