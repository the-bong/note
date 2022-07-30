function solution(maps) {
  const dx = [1, 0, -1, 1];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;

  const q = [];
  q.push([0, 0, 1]);
  maps[0][0] = 1;

  while (q.length > 0) {
    const [x, y, level] = q.shift();

    for(let i=0; i<4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        if (nx === n-1 && ny === m-1) {
          return level + 1;
        }
        maps[nx][ny] = 0;
        q.push([nx, ny, level + 1]);
      }
    }
  }
  return -1;
}  

export {solution}