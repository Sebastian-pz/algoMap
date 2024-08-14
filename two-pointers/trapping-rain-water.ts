function trap(height: number[]): number {
  let n = height.length;
  let l = 0;
  let r = n - 1;

  let leftWall = Array(n + 1);
  leftWall[0] = 0;
  let rightWall = Array(n + 1);
  rightWall[rightWall.length - 1] = 0;

  let maxLeft = 0;
  let maxRigth = 0;

  while (l < n) {
    if (height[l] > maxLeft) {
      maxLeft = height[l];
    }

    if (height[r] > maxRigth) {
      maxRigth = height[r];
    }

    leftWall[l + 1] = maxLeft;
    rightWall[r] = maxRigth;

    l++;
    r--;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.max(0, Math.min(leftWall[i], rightWall[i]) - height[i]);
  }

  return sum;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
