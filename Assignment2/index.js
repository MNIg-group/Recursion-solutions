function mergeSort(data) {
  if (data.length <= 1) {
    return data;
  }

  // Split the dataay into two halves
  const mid = Math.floor(data.length / 2);
  const leftSide = data.slice(0, mid);
  const rightSide = data.slice(mid);

  // Recursive call on each half
  const leftSortedArray = mergeSort(leftSide);
  const rightSortedArray = mergeSort(rightSide);

  // Merge the sorted halves
  return merge(leftSortedArray, rightSortedArray);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both halves and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append the remaining elements (if any)
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  return result;
}

// Example:
const data1 = [3, 2, 1, 13, 8, 5, 0, 1];
const data2 = [105, 79, 100, 110];

const sorteddata1 = mergeSort(data1);
const sorteddata2 = mergeSort(data2);

console.log(sorteddata1); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(sorteddata2); // Output: [79, 100, 105, 110]
