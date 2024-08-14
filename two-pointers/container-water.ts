// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea(height: number[]): number {
  const n = height.length;
  let l = 0;
  let r = n - 1;

  let maxArea = 0;

  while (l < r) {
    const width = r - l;
    const actualHeight = Math.min(height[r], height[l]);
    const area = width * actualHeight;
    maxArea = Math.max(area, maxArea);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
