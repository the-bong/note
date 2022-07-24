class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let visited = Array.from(Array(5), () => Array(5).fill(false));
function solution(maps) {
  let answer = 1;
  const user = new Vector(0, 0);
  visited[0][0] = true;

  let count = 0;
  let beforeX = user.x;
  let beforeY = user.Y;
  while (user.x < maps.length && user.y < maps.length) {
    if (count > 50) break;
    count++;
    moving(user, maps)
    answer++;
    if (user.x === 4 && user.y === 4) break;
    if (beforeX === user.x && beforeY === user.y) {
      answer = -1;
      break;
    }
    beforeX = user.x;
    beforeY = user.y;
  }
  return answer;
}

function visit(user) {
  visited[user.y][user.x] = true;
}

function moving(user, maps) {
  if (canMoveDown(user, maps)) {
    user.y++;
    visit(user);
    return;
  }
  if (canMoveRight(user, maps)) {
    user.x++;
    visit(user);
    return;
  }
  if (canMoveUp(user, maps)) {
    user.y--;
    visit(user);
    return;
  }
  if (canMoveLeft(user, maps)) {
    user.x--;
    visit(user);
    return;
  }
}

function canMoveDown(user, maps) {
  if (user.y >= maps.length - 1) return false;
  return maps[user.y + 1][user.x] === 1 && !visited[user.y + 1][user.x]
}

function canMoveUp(user, maps) {
  if (user.y === 0) return false;
  return maps[user.y - 1][user.x] === 1 && !visited[user.y - 1][user.x]
}

function canMoveLeft(user, maps) {
  if (user.x === 0) return false;
  return maps[user.y][user.x - 1] === 1 && !visited[user.y][user.x - 1]
}

function canMoveRight(user, maps) {
  if (user.x >= maps.length - 1) return false;
  return maps[user.y][user.x + 1] === 1 && !visited[user.y][user.x + 1]
}

export {solution}